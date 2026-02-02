
create table salons (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  lat numeric,
  lng numeric
);

create table services (
  id uuid primary key default gen_random_uuid(),
  salon_id uuid references salons(id),
  name text,
  duration int
);

create table appointments (
  id uuid primary key default gen_random_uuid(),
  salon_id uuid,
  service_id uuid,
  time text,
  created_at timestamp default now()
);

create unique index unique_booking on appointments(salon_id,time);

create table audit_logs (
  id uuid primary key default gen_random_uuid(),
  action text,
  entity text,
  payload jsonb,
  created_at timestamp default now()
);
