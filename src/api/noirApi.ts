
import { supabase } from '../lib/supabase'

export const noirApi = {
  getAppointments: () => supabase.from('appointments').select('*'),

  createAppointment: async (payload:any) => {
    const res = await supabase.functions.invoke('check-availability', {
      body: payload
    })
    return res
  },

  getAuditLogs: () =>
    supabase.from('audit_logs').select('*').order('created_at',{ascending:false})
}
