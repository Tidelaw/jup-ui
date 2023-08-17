import { useEffect, useState } from 'react'
const axios = require('axios');
import { VersionedTransaction } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';

export default function Swap() {
  const wallet:any = useWallet();
  const [solPercent, setSolPercent] = useState(0)
  const [load, setLoad] = useState(false)
  const [quoted, setQuoted]: any = useState(0)

  async function swap (quote:any) {
    let response = await axios.post(`/api/swap`, { quote : quote });
    console.log(response, 'as')

    const swapTransactionBuf = Buffer.from(response.data.swapTransaction, 'base64');
    var transaction = VersionedTransaction.deserialize(swapTransactionBuf);

    let signedTX = await wallet.signTransaction(transaction)
    console.log(signedTX, 'stx')
  }

  useEffect(() => {

    async function getQuote() {

      let response = await axios.post(`/api/quote`, { amount: solPercent });
      setQuoted(response)

    }
    getQuote()
  }, [solPercent])

  return (

    <div className='flex w-1/2 md:w-1/3 xl:w-1/4 rounded-3xl bg-base-100 items-center justify-center p-8 flex-col gap-8'>

      <input type="range" min={0} max="100" value={solPercent} onChange={(event: any) => { setSolPercent(event.target.value) }} step={25} data-bind="sliderValue: {valueUpdate:['afterkeydown','propertychange','input']}" className="range range-accent" />

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-zinc-200 font-bold tracking-wide">You're Paying SOL</span>
        </label>
        <input type="number" placeholder="0.00" value={solPercent} onChange={(event: any) => { setSolPercent(event.target.value) }}
          className="input bg-base-200 font-bold tracking-widest pr-0 text-right text-xl text-zinc-100 w-full" />
      </div>


      <div className="form-control w-full cursor-disabled">
        <label className="label">
          <span className="label-text text-zinc-200 font-bold tracking-wide">You're Receiving USDC</span>
        </label>
        <div className='flex px-[1rem] h-[3rem] items-center flex-end justify-end rounded-lg bg-base-200 font-bold tracking-widest text-right text-xl text-zinc-100'>
          <div className='flex'>
          {quoted?(quoted.data.outAmount / 1_000_000).toFixed(2):0}
          </div>
          </div>
      </div>

      <button onClick={
        // handleSubmit
        () => {swap(quoted)}
      } className='flex rounded-xl bg-accent text-base-200 opacity-90 hover:opacity-100 duration-200 items-center justify-center h-10 p-2 px-4 font-bold duration-200 cursor-pointer' type="submit">

        <span className='flex justify-center font-semibold text-base-200 tracking-widest'>{(
          load ? (
            <svg className="flex w-20 animate-spin h-5 w-5 text-base-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) :
            (
              <span className='w-20 font-extrabold tracking-widest text-lg'>SWAP</span>
            ))}</span>

      </button>

    </div>
  )
}  