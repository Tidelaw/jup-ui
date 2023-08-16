import { useState } from 'react'

export default function Swap() {

  const [solPercent, setSolPercent] = useState(0)
  
  return (

    <div className='flex w-1/3 h-3/4 rounded-3xl border-2 border-orange-400 items-center justify-center px-8'>

      <input type="range" min={0} max="100" value={solPercent} onChange={(event:any)=>{setSolPercent(event.target.value)}} step={1} className="range range-primary" />
    
    </div>
  )
}  