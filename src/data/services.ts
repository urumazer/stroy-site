export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'modular-houses',
    title: 'Модульные дома',
    description:
      'Современные и комфортные модульные дома для круглогодичного или сезонного проживания.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    features: ['Круглогодичное проживание', 'Индивидуальные проекты', 'Быстрый монтаж'],
  },
  {
    id: 'baths',
    title: 'Бани',
    description:
      'Компактные и функциональные бани из качественных материалов для отдыха за городом.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
    features: ['Натуральное дерево', 'Парная и комната отдыха', 'Монтаж под ключ'],
  },
  {
    id: 'gazebos',
    title: 'Беседки',
    description:
      'Уютные беседки для отдыха, встреч с семьёй и друзьями на вашем участке.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    features: ['Открытые и закрытые', 'С мангальной зоной', 'Любые размеры'],
  },
];