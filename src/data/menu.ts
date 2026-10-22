// Menú oficial de La Petaca Club Campestre — confirmado por el cliente.
// Los precios se almacenan como números (pesos colombianos) y se formatean
// en la vista para garantizar consistencia.
// Descripciones: proporcionadas por el cliente (oct 2026) y redactadas
// profesionalmente para la web. TODO(cliente): fotografías por plato.
export type MenuDish = {
  name: string;
  price: number;
  description?: string;
  image?: string | null;
  imageAlt?: string;
};

export const MENU_DAY: MenuDish[] = [
  {
    name: 'Cazuela de Mariscos',
    price: 39000,
    description:
      'Camarones, mejillones, almejas y pulpo salteados al ajillo, marinados en salsa cremosa de la casa y gratinados con queso parmesano. Con arroz blanco, patacón y ensalada de la casa.'
  },
  {
    name: 'Cazuela de Bagre',
    price: 38000,
    description:
      'Bagre en cremosa salsa de la casa, gratinado con queso parmesano. Con arroz blanco, patacón y ensalada de la casa.'
  },
  {
    name: 'Paella Marinera',
    price: 36000,
    description:
      'Arroz salteado al wok con camarones, mejillones, almejas, pulpo, anillos de calamar, palmitos y vegetales. Con patacones y ensalada de la casa.'
  },
  {
    name: 'Trucha en salsa 3 quesos con camarones',
    price: 42000,
    description:
      'Trucha mariposa en salsa de tres quesos —queso de hoja de la región, mozzarella y parmesano— coronada con camarones. Con yuca al vapor, patacones y ensalada de la casa.'
  },
  {
    name: 'Trucha al ajillo',
    price: 32000,
    description:
      'Trucha mariposa asada, bañada en salsa cremosa de ajo y cilantro. Con yuca al vapor, patacones y ensalada de la casa.'
  },
  {
    name: 'Trucha en salsa de maracuyá',
    price: 34000,
    description:
      'Trucha mariposa asada con salsa ligera de maracuyá. Con yuca al vapor, patacones y ensalada de la casa.'
  },
  {
    name: 'Mute Santandereano',
    price: 18000,
    description:
      'Potaje tradicional santandereano de cocción lenta con costilla de res, pata de cerdo y callo; maíz pelado, garbanzos, papa y ahuyama, sazonado con hierbas frescas de la región.'
  },
  {
    name: 'Patacón Marinero',
    price: 36000,
    description:
      'Patacón pisao cubierto con salsa cremosa de frutos del mar y gratinado con queso parmesano. Con ensalada de la casa.'
  },
  {
    name: 'Mojarra Frita',
    price: 32000,
    description:
      'Mojarra frita entera, dorada y crocante. Con patacón, yuca y ensalada de la casa.'
  },
  {
    name: 'Picadas La Petaquita',
    price: 30000,
    description:
      'Plato insignia de la casa: carne de res y de cerdo ahumada al barril durante cuatro horas, con chorizo caramelizado, yuca, arepa santandereana y ensalada de la casa.'
  },
  {
    name: 'Churrasco de res',
    price: 34000,
    description:
      'Corte de res tipo mariposa con hueso, asado a la parrilla. Con yuca, arepa santandereana y ensalada de la casa.'
  },
  {
    name: 'Chicharrón Carnudo',
    price: 34000,
    description:
      'Gran tira de panceta de cerdo crocante. Con yuca, arepa santandereana y ensalada de la casa.'
  },
  {
    name: 'Costillas en salsa de maracuyá o bbq',
    price: 34000,
    description:
      'Tiernas costillas de cerdo barnizadas en salsa BBQ o maracuyá. Con yuca, arepa santandereana y ensalada de la casa.'
  },
  {
    name: 'Pechuga Gratinada',
    price: 26000,
    description:
      'Filete de pollo marinado, asado a la plancha y gratinado con queso mozzarella. Con yuca, arepa santandereana y ensalada de la casa.'
  },
  {
    name: 'Hamburguesa La Petaquita con papas',
    price: 24000,
    description:
      'Pan brioche con lechuga crespa y tomate, doble carne, doble queso mozzarella, piña caramelizada, tocineta ahumada y salsas de la casa. Con papas a la francesa.'
  },
  {
    name: 'Brochetas Mixtas con papas',
    price: 12000,
    description:
      'Brochetas de res y pollo con cebolla y pimentón, asadas a la plancha. Con papas a la francesa.'
  }
];

export const MENU_NIGHT: MenuDish[] = [
  {
    name: 'Hamburguesa La Petaquita',
    price: 24000,
    description:
      'Pan brioche con lechuga crespa y tomate, doble carne, doble queso mozzarella, piña caramelizada, tocineta ahumada y salsas de la casa. Con papas a la francesa.'
  },
  {
    name: 'Hamburguesa Sencilla',
    price: 16000,
    description: 'Pan brioche, una carne y un queso. Con papas a la francesa.'
  },
  {
    name: 'Perro Crazy',
    price: 23000,
    description:
      'Pan brioche con salchicha americana, papa ripio, carne desmechada, queso fundido con maíz tierno y tocineta ahumada. Con papas a la francesa.'
  },
  {
    name: 'Patacón Burger',
    price: 28000,
    description:
      'Patacón pisao con guacamole, pollo y carne desmechados, queso fundido con maíz tierno y tocineta ahumada, coronado con otro patacón pisao.'
  },
  {
    name: 'Salchipapa premium',
    price: 26000,
    description:
      'Papas a la francesa con salchicha americana, carne y pollo desmechados, trozos de maduro frito y queso fundido con maíz tierno.'
  },
  {
    name: 'Salchipapa Sencillo',
    price: 15000
  },
  {
    name: 'Brochetas Mixtas',
    price: 12000,
    description:
      'Brochetas de res y pollo con cebolla y pimentón, asadas a la plancha. Con papas a la francesa.'
  },
  {
    name: 'Empanaditas Cocteleras x6',
    price: 12000
  },
  {
    name: 'Pechuga Gratinada',
    price: 26000,
    description:
      'Filete de pollo marinado, asado a la plancha y gratinado con queso mozzarella. Con yuca, arepa santandereana y ensalada de la casa. Opción: papas a la francesa.'
  },
  {
    name: 'Churrasco de Res',
    price: 34000,
    description:
      'Corte de res tipo mariposa con hueso, asado a la parrilla. Con yuca, arepa santandereana y ensalada de la casa. Opción: papas a la francesa.'
  },
  {
    name: 'Chicharrón Carnudo',
    price: 34000,
    description:
      'Gran tira de panceta de cerdo crocante. Con yuca, arepa santandereana y ensalada de la casa. Opción: papas a la francesa.'
  },
  {
    name: 'Costillas de cerdo en salsa BBQ',
    price: 34000,
    description:
      'Tiernas costillas de cerdo barnizadas en salsa BBQ. Con yuca, arepa santandereana y ensalada de la casa.'
  },
  {
    name: 'Patacón Marinero',
    price: 36000,
    description:
      'Patacón pisao cubierto con salsa cremosa de frutos del mar y gratinado con queso parmesano. Con ensalada de la casa.'
  }
];

export const MENU_DAY_NOTE =
  'Todos nuestros platos van acompañados de ensalada, carbohidrato y postre de la casa.';

export const formatPrice = (price: number) => `$${price.toLocaleString('es-CO')}`;
