import Image from 'next/image'
import { Inter } from 'next/font/google'
import Swap from '../components/Swap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col items-center justify-center bg-zinc-950 p-24 ${inter.className}`}
    >
     <Swap/>
    
    </main>
  )
}
