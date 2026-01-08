# 🚀 INÍCIO RÁPIDO - Carrossel de Baco

## 📦 1. Instalar e Rodar

```bash
cd carrossel-de-baco
npm install
npm run dev
```

Acesse: http://localhost:3000

## ⚙️ 2. Configurações Essenciais

### A. Player do Spotify (OBRIGATÓRIO)

1. Acesse [open.spotify.com](https://open.spotify.com)
2. Busque "Carrossel de Baco"
3. 3 pontinhos → Compartilhar → Embed
4. Copie o código
5. Cole em `app/components/MusicSection.tsx` (linha 46)

### B. Adicionar Integrantes

Edite `app/components/BandMembers.tsx`:

```typescript
const members: BandMember[] = [
  { 
    name: 'Danilo Nunes', 
    role: 'Vocal e Liderança',
    image: '/images/danilo.jpg' // <- Adicione a foto aqui
  },
  // Repita para cada integrante
];
```

### C. Gerenciar Shows

**Opção 1 - Arquivo Local** (mais simples)
- Edite `app/data/shows.ts`
- Commit e push (Vercel faz deploy automático)

**Opção 2 - Supabase** (recomendado)
- Leia o arquivo `SUPABASE_SETUP.md`
- Você poderá adicionar shows por uma interface web

### D. Formulário de Contato

Recomendado: [Resend](https://resend.com) ou [Web3Forms](https://web3forms.com)

Instruções completas no `README.md`

## 🚀 3. Deploy no Vercel

```bash
git init
git add .
git commit -m "Initial commit"
git push
```

Depois:
1. Acesse [vercel.com](https://vercel.com)
2. Import Project
3. Selecione seu repo
4. Deploy!

Site estará em: `carrossel-de-baco.vercel.app`

## 📝 4. Atualizações

```bash
# Fez mudanças?
git add .
git commit -m "Descrição"
git push

# Vercel faz deploy automático!
```

## 🎨 Personalização

- **Cores**: `tailwind.config.ts`
- **Textos**: Cada arquivo em `app/components/`
- **Fotos**: `public/images/`

## 📚 Documentação Completa

- `README.md` - Documentação completa
- `SUPABASE_SETUP.md` - Guia do Supabase

## ❓ Dúvidas?

Entre em contato! 🤘

---

**Stack**: Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
**Deploy**: Vercel
**Database**: Supabase (opcional)
