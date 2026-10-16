export type MenuItem = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string | null;
  imageAlt: string;
  accent: string;
};

// Reemplazar estos registros únicamente con platos y precios confirmados.
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'plato-01', category: 'Próximamente', name: 'Plato en preparación 01',
    description: 'La descripción de este plato se publicará cuando el menú oficial sea confirmado.',
    price: 'Precio por confirmar', image: null, imageAlt: 'Fotografía oficial del plato próximamente', accent: 'menu-art-one'
  },
  {
    id: 'plato-02', category: 'Próximamente', name: 'Plato en preparación 02',
    description: 'La fotografía, los ingredientes y la descripción estarán disponibles próximamente.',
    price: 'Precio por confirmar', image: null, imageAlt: 'Fotografía oficial del plato próximamente', accent: 'menu-art-two'
  },
  {
    id: 'plato-03', category: 'Próximamente', name: 'Plato en preparación 03',
    description: 'Este espacio está preparado para una nueva propuesta de la carta de La Petaca.',
    price: 'Precio por confirmar', image: null, imageAlt: 'Fotografía oficial del plato próximamente', accent: 'menu-art-three'
  },
  {
    id: 'plato-04', category: 'Próximamente', name: 'Plato en preparación 04',
    description: 'Contenido gastronómico provisional. Información pendiente de validación.',
    price: 'Precio por confirmar', image: null, imageAlt: 'Fotografía oficial del plato próximamente', accent: 'menu-art-four'
  }
];
