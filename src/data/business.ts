export const BUSINESS = {
  name: 'La Petaca Club Campestre',
  shortName: 'La Petaca',
  type: 'Club Campestre',
  city: 'Páramo',
  department: 'Santander',
  country: 'Colombia',
  countryCode: '57',
  phone: '3123135669',
  phoneDisplay: '+57 312 313 5669',
  whatsapp: '573123135669',
  address: '',
  googleMapsUrl: '',
  instagram: '',
  facebook: '',
  openingHours: [] as string[]
};

export const locationLabel = `${BUSINESS.city} · ${BUSINESS.department} · ${BUSINESS.country}`;
export const locationShort = `${BUSINESS.city}, ${BUSINESS.department}`;
export const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hola, quisiera obtener información sobre La Petaca Club Campestre.')}`;

// Ruta única de la carta: la usan la navegación y el código QR.
export const MENU_PATH = '/menu/';
