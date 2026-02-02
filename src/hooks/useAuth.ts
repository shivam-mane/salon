
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function useAuth(){
  const [user,setUser] = useState<any>(null)

  useEffect(()=>{
    supabase.auth.getUser().then(({data})=>setUser(data.user))
  },[])

  return { user }
}
