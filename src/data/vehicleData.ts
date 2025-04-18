// src/data/vehicleData.ts
export interface Vehicle {
    id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuel: string;
    transmission: string;
    color: string;
    bodyType: string;
    image: string;
    images?: string[]; // pour VehicleDetail
    features?: string[];
  }
  
  export const vehicleList: Vehicle[] = [
    {
      id: '1',
      brand: 'Mercedes-Benz',
      model: 'AMG GT Black Series',
      year: 2024,
      price: 468000,
      mileage: 0,
      fuel: 'Essence',
      transmission: 'Automatique',
      color: 'Noir',
      bodyType: 'Coupé',
      image: '/src/public/x.png',
      images: [
        '/src/public/x.png',
        '/src/public/im.jpg',
      ],
      features: [
        'Toit ouvrant panoramique',
        'Sièges massants',
        'Affichage tête haute',
      ],
    },
    {
      id: '2',
      brand: 'BMW',
      model: 'M8 Competition',
      year: 2023,
      price: 245000,
      mileage: 500,
      fuel: 'Essence',
      transmission: 'Automatique',
      color: 'Bleu',
      bodyType: 'Coupé',
      image: '/src/public/b.png',
      images: [
        '/src/public/be.png',
        '/src/public/i.png',
      ],
      features: ['Radar de recul', 'Sièges chauffants', 'Son Harman Kardon'],
    },
    {
      id: '3',
      brand: 'AUDI',
      model: 'RS e-tron GT',
      year: 2024,
      price: 147800,
      mileage: 0,
      fuel: 'Électrique',
      transmission: 'Automatique',
      color: 'Gris',
      bodyType: 'Berline',
      image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&h=400&q=80',
      images: [
        '/src/public/aud.jpg',
        '/src/public/au.jpg',
      ],
      features: ['Radar de recul', 'Sièges chauffants', 'Son Harman Kardon'],
    },
    {
      id: '4',
      brand: 'Volkswagen',
      model: 'Polo',
      year: 2024,
      price: 17690,
      mileage: 0,
      fuel: 'Électrique',
      transmission: 'Automatique',
      color: 'Noire',
      bodyType: 'Coupé',
      image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&h=400&q=80',
      images: [
        '/src/public/en.jpg',
        '/src/public/vv.jpg',
      ],
      features: ['Radar de recul', 'Sièges chauffants', 'Son Harman Kardon'],
    },
    {
        
            id: '5',
            brand: 'Renault',
            model: 'Clio',
            year: 2024,
            price: 16990,
            mileage: 0,
            fuel: 'Essence',
            transmission: 'Automatique',
            color: 'Gris',
            bodyType: 'Berline',
            image: '/src/public/cv.jpg',
            images: [
        '/src/public/cv.jpg',
        '/src/public/cv.jpg',
      ],
      features: ['Radar de recul', 'Sièges chauffants', 'Son Harman Kardon'],
    },
    {
        
      id: '6',
      brand: 'Peugeot',
      model: '208',
      year: 2024,
      price: 16810,
      mileage: 0,
      fuel: 'Essence',
      transmission: 'Manuelle',
      color: 'Noir',
      bodyType: 'Berline',
      image: '/src/public/pn1.jpg',
      images: [
  '/src/public/pn1.jpg',
  '/src/public/pn2.jpg',
],
features: ['Radar de recul', 'Sièges chauffants', 'Son Harman Kardon'],
},
{
        
    id: '7',
    brand: 'Peugeot',
    model: ' 208',
    year: 2015,
    price: 6200,
    mileage: 72000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    color: 'Blanc',
    bodyType: 'Berline',
    image: '/src/public/image.jpg',
  images: [
'/src/public/image.jpg',
'/src/public/image.jpg',
],
features: ['Radar de recul', 'Sièges chauffants', 'Son Harman Kardon'],
},
{
        
  id: '8',
  brand: 'Citroen',
  model: 'C3',
  year: 2014,
  price: 5600,
  mileage: 80000,
  fuel: 'Essence',
  transmission: 'Manuelle',
  color: 'Bleu',
  bodyType: 'Berline',
  image: '/src/public/citroen.jpg',
  images: [
'/src/public/citroen.jpg',
'/src/public/citroen.jpg',
],
features: ['Radar de recul', 'Sièges chauffants', 'Son Harman Kardon'],
},
{
        
  id: '9',
  brand: 'Ford',
  model: 'C3',
  year: 2013,
  price: 6000,
  mileage: 90000,
  fuel: 'Essence',
  transmission: 'Manuelle',
  color: 'Rouge',
  bodyType: 'Berline',
  image: '/src/public/ford.jpg',
  images: [
'/src/public/ford.jpg',
'/src/public/ford.jpg',
],
features: ['Radar de recul', 'Sièges chauffants', 'Son Harman Kardon'],
},
{
      
  id: '8',
  brand: 'Citroen',
  model: 'C3',
  year: 2014,
  price: 5600,
  mileage: 80000,
  fuel: 'Essence',
  transmission: 'Manuelle',
  color: 'Blanc',
  bodyType: 'Berline',
  image: '/src/public/citroen.jpg',
images: [
'/src/public/citroen.jpg',
'/src/public/citroen.jpg',
],
features: ['Radar de recul', 'Sièges chauffants', 'Son Harman Kardon'],
},
    // ➕ Ajoute d'autres véhicules ici, avec un `id` unique
  ];
  