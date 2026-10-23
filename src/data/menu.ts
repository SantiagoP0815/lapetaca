// Menú oficial de La Petaca Club Campestre — confirmado por el cliente.
// Los precios se almacenan como números (pesos colombianos) y se formatean
// en la vista para garantizar consistencia.
// Descripciones: proporcionadas por el cliente (oct 2026) y redactadas
// profesionalmente para la web. Agrupadas por categoría para facilitar la
// búsqueda. TODO(cliente): fotografías por plato.
export type MenuDish = {
  name: string;
  price: number;
  description?: string;
  category: string;
  image?: string | null;
  imageAlt?: string;
};

export const MENU_DAY: MenuDish[] = [
  // --- Comida del mar ---
  {
    name: 'Cazuela de Mariscos',
    price: 39000,
    category: 'Comida del mar',
    description:
      'Camarones, mejillones, almejas, pulpo, anillos de calamar y palmitos salteados al ajillo, marinados en salsa cremosa de la casa y gratinados con queso parmesano. Acompañado con arroz blanco, patacón y ensalada de la casa.'
  },
  {
    name: 'Cazuela de Bagre',
    price: 38000,
    category: 'Comida del mar',
    description:
      'Bagre en cremosa salsa de la casa, gratinado con queso parmesano. Acompañado con arroz blanco, patacón y ensalada de la casa.'
  },
  {
    name: 'Paella Marinera',
    price: 36000,
    category: 'Comida del mar',
    description:
      'Arroz salteado al wok con camarones, mejillones, almejas, pulpo, anillos de calamar, palmitos y vegetales. Acompañado con patacones y ensalada de la casa.'
  },
  {
    name: 'Trucha en salsa 3 quesos con camarones',
    price: 42000,
    category: 'Comida del mar',
    description:
      'Trucha mariposa en salsa de tres quesos —queso de hoja de la región, mozzarella y parmesano— coronada con camarones. Acompañado con yuca al vapor, patacones y ensalada de la casa.'
  },
  {
    name: 'Trucha al ajillo',
    price: 32000,
    category: 'Comida del mar',
    description:
      'Trucha mariposa asada, bañada en salsa cremosa de ajo y cilantro. Acompañado con yuca al vapor, patacones y ensalada de la casa.'
  },
  {
    name: 'Trucha en salsa de maracuyá',
    price: 34000,
    category: 'Comida del mar',
    description:
      'Trucha mariposa asada con salsa ligera de maracuyá. Acompañado con yuca al vapor, patacones y ensalada de la casa.'
  },
  {
    name: 'Patacón Marinero',
    price: 36000,
    category: 'Comida del mar',
    description:
      'Patacón pisao cubierto con salsa cremosa de camarones, mejillones, almejas, pulpo, anillos de calamar y palmitos, gratinado con queso parmesano. Acompañado con ensalada de la casa.'
  },
  {
    name: 'Mojarra Frita',
    price: 32000,
    category: 'Comida del mar',
    description:
      'Mojarra frita entera, dorada y crocante. Acompañado con patacón, yuca al vapor y ensalada de la casa.'
  },

  // --- Carnes ---
  {
    name: 'Churrasco de res',
    price: 34000,
    category: 'Carnes',
    description:
      'Corte de res tipo mariposa con hueso, asado a la parrilla. Acompañado con yuca al vapor, arepa santandereana y ensalada de la casa.'
  },
  {
    name: 'Chicharrón Carnudo',
    price: 34000,
    category: 'Carnes',
    description:
      'Gran tira de panceta de cerdo crocante. Acompañado con yuca al vapor, arepa santandereana y ensalada de la casa.'
  },
  {
    name: 'Costillas de cerdo en salsa BBQ',
    price: 34000,
    category: 'Carnes',
    description:
      'Tiernas costillas de cerdo barnizadas en salsa BBQ. Acompañado con yuca al vapor, arepa santandereana y ensalada de la casa.'
  },
  {
    name: 'Costillas de cerdo en salsa de maracuyá',
    price: 34000,
    category: 'Carnes',
    description:
      'Tiernas costillas de cerdo barnizadas en salsa de maracuyá. Acompañado con yuca al vapor, arepa santandereana y ensalada de la casa.'
  },
  {
    name: 'Pechuga Gratinada',
    price: 26000,
    category: 'Carnes',
    description:
      'Filete de pollo marinado, asado a la plancha y gratinado con queso mozzarella. Acompañado con yuca al vapor, arepa santandereana y ensalada de la casa.'
  },

  // --- De la casa ---
  {
    name: 'Picadas La Petaquita',
    price: 30000,
    category: 'De la casa',
    description:
      'Plato insignia de la casa, creación del dueño bajo su marca Sánchez Grill: carne de res y de cerdo ahumada al barril durante cuatro horas y chorizo caramelizado. Acompañado con yuca al vapor, arepa santandereana y ensalada de la casa.'
  },

  // --- Tradicionales ---
  {
    name: 'Mute Santandereano',
    price: 18000,
    category: 'Tradicionales',
    description:
      'Potaje tradicional santandereano de cocción lenta con costilla de res, pata de cerdo y callo; maíz pelado, garbanzos, papa y ahuyama, sazonado con hierbas frescas de la región.'
  },

  // --- Comidas rápidas ---
  {
    name: 'Hamburguesa La Petaquita con papas',
    price: 24000,
    category: 'Comidas rápidas',
    description:
      'Pan brioche con lechuga crespa y tomate, doble carne, doble queso mozzarella, piña caramelizada, tocineta ahumada y salsas de la casa. Acompañado con papas a la francesa.'
  },
  {
    name: 'Brochetas Mixtas con papas',
    price: 12000,
    category: 'Comidas rápidas',
    description:
      'Brochetas de res y pollo con cebolla y pimentón, asadas a la plancha. Acompañado con papas a la francesa y salsas de la casa.'
  }
];

export const MENU_NIGHT: MenuDish[] = [
  // --- Comidas rápidas ---
  {
    name: 'Hamburguesa La Petaquita',
    price: 24000,
    category: 'Comidas rápidas',
    description:
      'Pan brioche con lechuga crespa y tomate, doble carne, doble queso mozzarella, piña caramelizada, tocineta ahumada y salsas de la casa. Acompañado con papas a la francesa.'
  },
  {
    name: 'Hamburguesa Sencilla',
    price: 16000,
    category: 'Comidas rápidas',
    description: 'Pan brioche, una carne y un queso. Acompañado con papas a la francesa y salsas de la casa.'
  },
  {
    name: 'Perro Crazy',
    price: 23000,
    category: 'Comidas rápidas',
    description:
      'Pan brioche con salchicha americana, papa ripio, carne desmechada, queso fundido con maíz tierno y tocineta ahumada. Acompañado con papas a la francesa y salsas de la casa.'
  },
  {
    name: 'Patacón Burger',
    price: 28000,
    category: 'Comidas rápidas',
    description:
      'Patacón pisao con guacamole, pollo y carne desmechados, queso fundido con maíz tierno y tocineta ahumada, coronado con otro patacón pisao. Acompañado con salsas de la casa.'
  },
  {
    name: 'Salchipapa premium',
    price: 26000,
    category: 'Comidas rápidas',
    description:
      'Papas a la francesa con salchicha americana, carne y pollo desmechados, trozos de maduro frito y queso fundido con maíz tierno. Acompañado con salsas de la casa.'
  },
  {
    name: 'Salchipapa Sencillo',
    price: 15000,
    category: 'Comidas rápidas',
    description: 'Papas a la francesa, salchicha americana, queso rallado y salsas de la casa.'
  },
  {
    name: 'Brochetas Mixtas',
    price: 12000,
    category: 'Comidas rápidas',
    description:
      'Brochetas de res y pollo con cebolla y pimentón, asadas a la plancha. Acompañado con papas a la francesa y salsas de la casa.'
  },
  {
    name: 'Empanaditas Cocteleras x6',
    price: 12000,
    category: 'Comidas rápidas',
    description: 'Empanaditas de carne con masa crocante valluna. Acompañadas con trozos de limón y salsas de la casa.'
  },

  // --- Carnes ---
  {
    name: 'Pechuga Gratinada',
    price: 26000,
    category: 'Carnes',
    description:
      'Filete de pollo marinado, asado a la plancha y gratinado con queso mozzarella. Acompañado con yuca al vapor, arepa santandereana y ensalada de la casa. Opción: papas a la francesa.'
  },
  {
    name: 'Churrasco de Res',
    price: 34000,
    category: 'Carnes',
    description:
      'Corte de res tipo mariposa con hueso, asado a la parrilla. Acompañado con yuca al vapor, arepa santandereana y ensalada de la casa. Opción: papas a la francesa.'
  },
  {
    name: 'Chicharrón Carnudo',
    price: 34000,
    category: 'Carnes',
    description:
      'Gran tira de panceta de cerdo crocante. Acompañado con yuca al vapor, arepa santandereana y ensalada de la casa. Opción: papas a la francesa.'
  },
  {
    name: 'Costillas de cerdo en salsa BBQ',
    price: 34000,
    category: 'Carnes',
    description:
      'Tiernas costillas de cerdo barnizadas en salsa BBQ. Acompañado con yuca al vapor, arepa santandereana y ensalada de la casa.'
  },
  {
    name: 'Costillas de cerdo en salsa de maracuyá',
    price: 34000,
    category: 'Carnes',
    description:
      'Tiernas costillas de cerdo barnizadas en salsa de maracuyá. Acompañado con yuca al vapor, arepa santandereana y ensalada de la casa.'
  },

  // --- Comida del mar ---
  {
    name: 'Patacón Marinero',
    price: 36000,
    category: 'Comida del mar',
    description:
      'Patacón pisao cubierto con salsa cremosa de camarones, mejillones, almejas, pulpo, anillos de calamar y palmitos, gratinado con queso parmesano. Acompañado con ensalada de la casa.'
  }
];

export const MENU_DAY_NOTE =
  'Todos nuestros platos incluyen ensalada, carbohidrato y postre de la casa.';

export const formatPrice = (price: number) => `$${price.toLocaleString('es-CO')}`;
