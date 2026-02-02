
import { useEffect, useState } from 'react'

export function useGeo(){
  const [pos,setPos] = useState<any>(null)

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(p=>
      setPos({lat:p.coords.latitude,lng:p.coords.longitude})
    )
  },[])

  return pos
}
