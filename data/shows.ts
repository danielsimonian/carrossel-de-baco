export interface Show {
  id: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  address: string;
  ticketLink?: string;
}

export const shows: Show[] = [
  {
    id: '1',
    title: 'Centro Cultural Vila Itororó',
    venue: 'Centro Cultural Vila Itororó',
    city: 'São Paulo',
    date: '2025-10-16',
    time: '19:00',
    address: 'Rua Maestro Cardim - Final da rua sem saída, n° 60 - Bela Vista, São Paulo - SP, 01323-000',
  },
  {
    id: '2',
    title: 'Centro Cultural Tandal da Lapa',
    venue: 'Centro Cultural Tandal da Lapa',
    city: 'São Paulo',
    date: '2025-10-26',
    time: '17:00',
    address: 'R. Guaicurus, 1100 - Água Branca, São Paulo - SP, 05033-002',
  },
  {
    id: '3',
    title: 'Centro Cultural Raul Seixas',
    venue: 'Centro Cultural Raul Seixas',
    city: 'São Paulo',
    date: '2025-10-04',
    time: '15:00',
    address: 'R. Murmúrios da Tarde, 211 - Jardim Bonifacio, São Paulo - SP, 08253-580',
  },
];

// Função para ordenar shows por data
export const getUpcomingShows = () => {
  const now = new Date();
  return shows
    .filter(show => new Date(show.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getPastShows = () => {
  const now = new Date();
  return shows
    .filter(show => new Date(show.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
