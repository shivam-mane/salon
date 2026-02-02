
import { serve } from 'https://deno.land/std/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  const body = await req.json()

  const { data: clash } = await supabase
    .from('appointments')
    .select('*')
    .eq('salon_id', body.salon_id)
    .eq('time', body.time)

  if (clash && clash.length) {
    return new Response(
      JSON.stringify({ error: 'Slot already booked' }),
      { status: 400 }
    )
  }

  const { data, error } = await supabase
    .from('appointments')
    .insert(body)
    .select()
    .single()

  await supabase.from('audit_logs').insert({
    action:'CREATE',
    entity:'APPOINTMENT',
    payload:body
  })

  return new Response(JSON.stringify(data), { status: 200 })
})
