// Menú oficial de La Petaca Club Campestre — confirmado por el cliente.
// Los precios se almacenan como números (pesos colombianos) y se formatean
// en la vista para garantizar consistencia.
// TODO(cliente): completar `description` e `image` de cada plato con el
// contenido oficial (descripción y fotografía). Mientras estén ausentes,
// el detalle del plato muestra placeholders claramente identificados.
export type MenuDish = {
  name: string;
  price: number;
  description?: string;
  image?: string | null;
  imageAlt?: string;
};

export const MENU_DAY: MenuDish[] = [
  { name: 'Cazuela de Mariscos', price: 39000 },
  { name: 'Cazuela de Bagre', price: 38000 },
  { name: 'Paella Marinera', price: 36000 },
  { name: 'Trucha en salsa 3 quesos con camarones', price: 42000 },
  { name: 'Trucha al ajillo', price: 32000 },
  { name: 'Trucha en salsa de maracuyá', price: 34000 },
  { name: 'Mute Santandereano', price: 18000 },
  { name: 'Patacón Marinero', price: 36000 },
  { name: 'Mojarra Frita', price: 32000 },
  { name: 'Picadas La Petaquita', price: 30000 },
  { name: 'Churrasco de res', price: 34000 },
  { name: 'Chicharrón Carnudo', price: 34000 },
  { name: 'Costillas en salsa de maracuyá o bbq', price: 34000 },
  { name: 'Pechuga Gratinada', price: 26000 },
  { name: 'Hamburguesa La Petaquita con papas', price: 24000 },
  { name: 'Brochetas Mixtas con papas', price: 12000 }
];

export const MENU_NIGHT: MenuDish[] = [
  { name: 'Hamburguesa La Petaquita', price: 24000 },
  { name: 'Hamburguesa Sencilla', price: 16000 },
  { name: 'Perro Crazy', price: 23000 },
  { name: 'Patacón Burger', price: 28000 },
  { name: 'Salchipapa premium', price: 26000 },
  { name: 'Salchipapa Sencillo', price: 15000 },
  { name: 'Brochetas Mixtas', price: 12000 },
  { name: 'Empanaditas Cocteleras x6', price: 12000 },
  { name: 'Pechuga Gratinada', price: 26000 },
  { name: 'Churrasco de Res', price: 34000 },
  { name: 'Chicharrón Carnudo', price: 34000 },
  { name: 'Costillas de cerdo en salsa BBQ', price: 34000 },
  { name: 'Patacón Marinero', price: 36000 }
];

export const MENU_DAY_NOTE =
  'Todos nuestros platos van acompañados de ensalada, carbohidrato y postre de la casa.';

export const formatPrice = (price: number) => `$${price.toLocaleString('es-CO')}`;
