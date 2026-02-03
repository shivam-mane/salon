
import { useEffect, useState } from 'react'
import { noirApi } from '../api/noirApi'

export default function AdminDashboard(){
  const [logs,setLogs]=useState<any[]>([])
  useEffect(()=>{
    noirApi.getAuditLogs().then(r=>setLogs(r.data||[]))
  },[])

  return <div>
    <h2>Audit Logs</h2>
    {logs.map(l=><pre key={l.id}>{JSON.stringify(l,null,2)}</pre>)}
  </div>
}
