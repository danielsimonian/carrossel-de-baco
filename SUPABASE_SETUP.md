# 🗄️ Guia de Setup do Supabase para Shows

Este guia vai te ajudar a configurar o Supabase para gerenciar a agenda de shows de forma dinâmica.

## Por que usar Supabase?

- ✅ Interface web fácil para adicionar/editar shows
- ✅ Não precisa mexer no código toda vez
- ✅ Gratuito até 500MB
- ✅ Banco PostgreSQL real
- ✅ Atualização em tempo real

## Passo a Passo

### 1. Criar Conta e Projeto

1. Acesse [supabase.com](https://supabase.com)
2. Clique em "Start your project"
3. Faça login com GitHub
4. Clique em "New Project"
5. Preencha:
   - **Name**: carrossel-de-baco
   - **Database Password**: escolha uma senha forte
   - **Region**: South America (São Paulo)
6. Clique em "Create new project"

### 2. Criar Tabela de Shows

1. No menu lateral, clique em **SQL Editor**
2. Clique em **New Query**
3. Cole o código abaixo:

```sql
-- Criar tabela de shows
create table shows (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  date date not null,
  time text not null,
  venue text not null,
  city text not null,
  state text not null,
  address text not null,
  ticket_link text,
  is_free boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Habilitar Row Level Security
alter table shows enable row level security;

-- Permitir leitura pública (qualquer um pode ver os shows)
create policy "Shows são públicos"
  on shows for select
  using (true);

-- Permitir inserção apenas autenticado (apenas você pode adicionar shows)
create policy "Apenas autenticados podem inserir"
  on shows for insert
  with check (auth.role() = 'authenticated');

create policy "Apenas autenticados podem atualizar"
  on shows for update
  with check (auth.role() = 'authenticated');

create policy "Apenas autenticados podem deletar"
  on shows for delete
  using (auth.role() = 'authenticated');
```

4. Clique em **Run** (ou pressione Ctrl+Enter)

### 3. Pegar Credenciais

1. No menu lateral, clique em **Project Settings** (ícone de engrenagem)
2. Clique em **API**
3. Copie:
   - **Project URL** (ex: `https://xxx.supabase.co`)
   - **anon/public key** (uma chave longa que começa com `eyJ...`)

### 4. Configurar no Projeto

1. Crie um arquivo `.env.local` na raiz do projeto (mesma pasta que `package.json`)

2. Cole as credenciais:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. Crie o arquivo `lib/supabase.ts`:

```bash
mkdir lib
```

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### 5. Atualizar Componente Shows

Substitua o conteúdo de `app/components/Shows.tsx` com:

```typescript
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Show {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  address: string;
  ticket_link?: string;
  is_free: boolean;
}

export default function Shows() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShows() {
      const { data, error } = await supabase
        .from('shows')
        .select('*')
        .gte('date', new Date().toISOString().split('T')[0]) // Apenas shows futuros
        .order('date', { ascending: true });
      
      if (data) setShows(data);
      if (error) console.error('Erro ao buscar shows:', error);
      setLoading(false);
    }

    fetchShows();
  }, []);

  // ... resto do código permanece igual
```

### 6. Adicionar Shows pelo Painel

1. No Supabase, vá em **Table Editor**
2. Selecione a tabela **shows**
3. Clique em **Insert row**
4. Preencha os campos:
   - **title**: "Turnê 20 Anos"
   - **date**: "2025-10-04" (formato YYYY-MM-DD)
   - **time**: "20:00"
   - **venue**: "Nome do local"
   - **city**: "São Paulo"
   - **state**: "SP"
   - **address**: "Endereço completo"
   - **ticket_link**: deixe vazio se for gratuito
   - **is_free**: marque TRUE
5. Clique em **Save**

O show vai aparecer automaticamente no site! 🎉

### 7. Testar

```bash
npm run dev
```

Acesse http://localhost:3000 e veja seus shows aparecendo!

## Adicionar Shows Futuros

Sempre que tiver um novo show:

1. Acesse [supabase.com](https://supabase.com)
2. Entre no seu projeto
3. Table Editor → shows → Insert row
4. Preencha os dados
5. Save

**Não precisa mexer no código!** O site puxa automaticamente do banco.

## Deploy no Vercel

Quando fizer deploy no Vercel:

1. Settings → Environment Variables
2. Adicione:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Redeploy

Pronto! Seu site está conectado ao Supabase em produção.

## Criar Área Admin (Opcional)

Se quiser gerenciar os shows direto pelo seu site ao invés do painel do Supabase, você pode criar uma página de admin protegida por senha. Me avise se quiser que eu crie isso!

## Troubleshooting

### Erro: "Failed to fetch"
- Verifique se as variáveis de ambiente estão corretas
- Verifique se o `.env.local` existe e está na raiz do projeto
- Reinicie o servidor (`npm run dev`)

### Shows não aparecem
- Verifique no Supabase Table Editor se os shows existem
- Verifique se a data do show é futura (formato YYYY-MM-DD)
- Veja no console do navegador se tem algum erro

### Row Level Security Error
- Verifique se executou os comandos de policy no SQL Editor
- A policy de SELECT precisa estar como `using (true)` para leitura pública

## Precisa de Ajuda?

Me chama que eu te ajudo! 🤘
