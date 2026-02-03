
# THE NOIR — FINAL DEPLOY

## Includes
- Supabase Auth (Admin vs Customer)
- Admin Dashboard + Audit Logs
- Salon Availability Calendar
- Edge Function (check-availability)
- Geolocation ("Salons near you")

## Steps
1. Create Supabase project
2. Run supabase/sql/schema.sql
3. Deploy edge function:
   supabase functions deploy check-availability
4. Add env vars
5. npm install && npm run build
6. Deploy dist/

Admin email:
admin@thenoir.com
