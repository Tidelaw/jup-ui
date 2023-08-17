import Image from 'next/image'
import { Inter } from 'next/font/google'
import Swap from '../components/Swap'
import SignMessage from '../components/SignMessage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col items-center justify-between bg-base-300 ${inter.className}`}
    >

      <div className='flex flex-row justify-between w-full items-center p-4 border-b border-zinc-900'>
        <div className='flex text-zinc-200 text-2xl font-bold xl:px-6 space-x-4 select-none'>
          
        </div>


        <div className='flex'>
          <SignMessage />
        </div>

      </div>

      <div className='flex w-full h-full justify-center items-center'>
      <Swap />
      </div>

    </main>
  )
}
