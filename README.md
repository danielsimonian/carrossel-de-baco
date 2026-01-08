# Carrossel de Baco - Website Oficial

Site oficial da banda Carrossel de Baco de Santos - SP.

## 🎸 Sobre o Site

Website moderno e responsivo desenvolvido com:
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **React Icons**

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório ou extraia os arquivos

2. Instale as dependências:
```bash
npm install
```

3. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📦 Deploy na Vercel

### Opção 1: Via GitHub (Recomendado)

1. Crie um repositório no GitHub
2. Faça o push do código:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin seu-repositorio.git
git push -u origin main
```

3. Vá em [vercel.com](https://vercel.com)
4. Clique em "New Project"
5. Importe seu repositório do GitHub
6. Clique em "Deploy"

### Opção 2: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

## 📝 Como Atualizar os Shows

Os shows estão no arquivo `/data/shows.ts`. Para adicionar um novo show:

```typescript
{
  id: '4',
  title: 'Nome do Show',
  venue: 'Nome do Local',
  city: 'Cidade',
  date: '2025-12-31', // formato YYYY-MM-DD
  time: '20:00',
  address: 'Endereço completo',
  ticketLink: 'https://link-opcional-para-ingressos'
}
```

Após adicionar, faça commit e push. O Vercel fará o deploy automático!

## 🎨 Personalizações

### Cores
Edite as cores em `tailwind.config.ts` na seção `colors`.

### Fontes
As fontes são carregadas em `app/layout.tsx` via Google Fonts.

### Imagens
Adicione imagens em `public/images/`.

## 🗄️ Migração para Supabase (Opcional)

Se quiser usar Supabase para gerenciar os shows:

1. Crie uma conta em [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Crie uma tabela `shows` com as colunas:
   - id (uuid, primary key)
   - title (text)
   - venue (text)
   - city (text)
   - date (date)
   - time (text)
   - address (text)
   - ticket_link (text, nullable)
   - created_at (timestamp)

4. Instale o cliente Supabase:
```bash
npm install @supabase/supabase-js
```

5. Configure as variáveis de ambiente no Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📱 Seções do Site

- **Home/Hero**: Imagem principal com logo e CTA
- **Sobre**: História da banda
- **Música**: Player Spotify + links sociais
- **Shows**: Agenda de shows (atualizada automaticamente por data)
- **Banda**: Integrantes (com placeholders para fotos futuras)
- **Galeria**: Fotos dos shows
- **Contato**: Formulário + informações

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Linter
```

## 📧 Contato

- **Email**: producaocarrosseldebaco@gmail.com
- **Telefone**: (12) 99730-1445
- **Instagram**: [@carrosseldebaco](https://instagram.com/carrosseldebaco)

---

Desenvolvido com 🎵 para o Carrossel de Baco
