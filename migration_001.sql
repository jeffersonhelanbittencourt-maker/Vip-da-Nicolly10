-- Banco de Dados Completo (Supabase / PostgreSQL)
create table if not exists public.profiles (
  id uuid primary key,
  name text not null,
  email text unique not null,
  role text default 'client'
);

create table if not exists public.plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price numeric(10,2) not null,
  duration_days int
);

insert into public.plans (name, price, duration_days) values
('Semanal', 25.00, 7),
('Mensal', 50.00, 30),
('Vitalício', 200.00, null)
on conflict do nothing;
