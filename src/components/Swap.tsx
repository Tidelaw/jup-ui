import { useEffect, useState } from 'react'
const axios = require('axios');

export default function Swap() {

  const [solPercent, setSolPercent] = useState(0)
  const [load, setLoad] = useState(false)
  const [quoted, setQuoted]: any = useState(0)
  let ignore = false

  useEffect(() => {

    async function getQuote() {

      let response = await axios.post(`/api/quote`, { amount: solPercent });
      setQuoted((response.data.outAmount / 1_000_000).toFixed(2))
      console.log(response)

    }
    getQuote()
  }, [solPercent])

  return (

    <div className='flex w-1/3 h-3/4 rounded-3xl border-2 border-orange-400 items-center justify-center px-8 flex-col gap-8'>

      <input type="range" min={0} max="100" value={solPercent} onChange={(event: any) => { setSolPercent(event.target.value) }} step={25} data-bind="sliderValue: {valueUpdate:['afterkeydown','propertychange','input']}" className="range range-primary" />

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-zinc-200 font-medium tracking-wide">You're Paying</span>
        </label>
        <input type="number" placeholder="Type here" value={solPercent} onChange={(event: any) => { setSolPercent(event.target.value) }}
          className="input input-primary bg-zinc-950 font-medium text-zinc-100 tracking-widest w-full max-w-xs" />
      </div>


      <div className="form-control  w-full max-w-xs cursor-disabled">
        <label className="label">
          <span className="label-text text-zinc-200 font-medium tracking-wide">You're Receiving</span>
        </label>
        <div className='flex px-[1rem] h-[3rem] items-center justtify-center rounded-lg border border-orange-400'>{quoted}</div>
      </div>

      <button onClick={
        // handleSubmit
        () => { }
      } className='flex bg-transparent border-2 rounded-md border-orange-400 opacity-90 hover:opacity-100 duration-200 items-center justify-center h-10 p-2 px-4 font-bold text-white duration-200 cursor-pointer' type="submit">

        <span className='flex justify-center font-semibold text-orange-400 tracking-widest'>{(
          load ? (
            <svg className="flex w-20 animate-spin h-5 w-5 text-orange-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) :
            (
              <span className='w-20'>submit</span>
            ))}</span>

      </button>

    </div>
  )
}  