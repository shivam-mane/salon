
export default function Calendar({onSelect}:{onSelect:(t:string)=>void}){
  const slots=['10:00','11:00','12:00','13:00']
  return <div>
    {slots.map(s=><button key={s} onClick={()=>onSelect(s)}>{s}</button>)}
  </div>
}
