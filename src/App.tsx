
import { useState } from 'react'
import { useAuth } from './hooks/useAuth'
import { useGeo } from './hooks/useGeo'
import Calendar from './components/Calendar'
import AdminDashboard from './admin/AdminDashboard'
import { noirApi } from './api/noirApi'

export default function App(){
  const { user } = useAuth()
  const geo = useGeo()
  const [time,setTime]=useState<string>()

  const book = async()=>{
    await noirApi.createAppointment({
      salon_id:'REPLACE_SALON_UUID',
      service_id:'REPLACE_SERVICE_UUID',
      time
    })
    alert('Booked')
  }

  return <div style={{padding:24}}>
    <h1>The Noir</h1>

    {!geo && <p>Find a salon near to you</p>}

    {geo && <>
      <Calendar onSelect={setTime} />
      {time && <button onClick={book}>Confirm {time}</button>}
    </>}

    {user?.email==='admin@thenoir.com' && <AdminDashboard/>}
  </div>
}
