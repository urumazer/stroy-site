export type ProjectCategory = 'house' | 'bath' | 'gazebo';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  area: string;
  rooms: string;
  description: string;
  image: string;
  price: string;
}

export const projectCategories = [
  { id: 'all', label: 'Все' },
  { id: 'house', label: 'Дома' },
  { id: 'bath', label: 'Бани' },
  { id: 'gazebo', label: 'Беседки' },
] as const;

export const projects: Project[] = [
  {
    id: 'scandi',
    name: 'Дом «Сканди»',
    category: 'house',
    area: '96 м²',
    rooms: '3 комнаты',
    description: 'Современный модульный дом в скандинавском стиле для круглогодичного проживания.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    price: 'Цена по запросу',
  },
  {
    id: 'family',
    name: 'Дом «Семейный»',
    category: 'house',
    area: '128 м²',
    rooms: '4 комнаты',
    description: 'Просторный дом для большой семьи с террасой и зоной барбекю.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    price: 'Цена по запросу',
  },
  {
    id: 'barn',
    name: 'Дом «Барн»',
    category: 'house',
    area: '84 м²',
    rooms: '2 комнаты',
    description: 'Лаконичный дом в стиле барн-хаус с панорамными окнами.',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    price: 'Цена по запросу',
  },
  {
    id: 'classic-bath',
    name: 'Баня «Классика»',
    category: 'bath',
    area: '24 м²',
    rooms: 'Парная + комната отдыха',
    description: 'Традиционная русская баня из бруса с просторной комнатой отдыха.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
    price: 'Цена по запросу',
  },
  {
    id: 'mini-bath',
    name: 'Баня «Мини»',
    category: 'bath',
    area: '12 м²',
    rooms: 'Парная + предбанник',
    description: 'Компактная баня для небольшого участка — быстро и функционально.',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    price: 'Цена по запросу',
  },
  {
    id: 'loft-gazebo',
    name: 'Беседка «Лофт»',
    category: 'gazebo',
    area: '18 м²',
    rooms: 'Закрытая с мангалом',
    description: 'Стильная беседка в стиле лофт с зоной для барбекю и отдыха.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    price: 'Цена по запросу',
  },
];