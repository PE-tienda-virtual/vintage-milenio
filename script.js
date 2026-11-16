const standardSizes = [
  { name: 'S', dim: '32 x 28 x 10 cm', price: 79.00 },
  { name: 'M (Ideal)', dim: '39 x 30 x 12 cm', price: 89.00 },
  { name: 'L', dim: '44 x 32 x 14 cm', price: 105.00 }
];

const products = [
  {
    id: 1,
    name: "Bag ArmyBOMB",
    category: "morrales",
    price: 90.00,
    oldPrice: 110.00,
    rating: "4.8 (9 valoraciones)",
    img: "img/ArmyBomb/6.jpeg",
    desc: "Bolso cruzado XS New Style estilo Mark Fairwhale en cuero PU con 4 compartimientos organizadores y detalles con hebillas.",
    bullets: [
      "Material: Cuero PU",
      "Estilo: Mark Fairwhale",
      "4 compartimientos",
      "Medidas: 32x26x8 cm (Ideal para cuadernos B5, tablet y celulares)"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Verde Militar", img: "img/ArmyBomb/1.jpeg", price: 90.00, status: "bajo pedido" },
      { name: "Negro", img: "img/ArmyBomb/7.jpg", price: 90.00, status: "bajo pedido" }
    ],
    lookbookImages: [
      "img/ArmyBomb/1.jpeg",
      "img/ArmyBomb/2.jpeg",    
      "img/ArmyBomb/4.jpeg",
      "img/ArmyBomb/7.jpg",
      "img/ArmyBomb/8.jpg"
    ]
  },
  {
    id: 2,
    name: "Morral de Lona RYH",
    category: "morrales",
    price: 75.00,
    oldPrice: 95.00,
    rating: "4.9 (10 valoraciones)",
    img: "img/Morral de lona RYH/1.jpg",
    desc: "Clásico morral de lona RYH / bolso de negocios de lona canvas grueso con 4 compartimientos y correa ajustable.",
    bullets: [
      "Material: Lona Canvas Grueso",
      "Estilo: Bolso / Morral - Bolsa de Negocios",
      "4 compartimientos organizadores",
      "Ideal para cuadernos A4 y laptop de hasta 12 pulg",
      "Correa ajustable: Longitud máxima 130cm / Ancho 4cm"
    ],
    badge: "Más Vendido",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Negro", img: "img/Morral de lona RYH/1.jpg", price: 75.00, status: "disponible" },
      { name: "Marrón", img: "img/Morral de lona RYH/2.jpg", price: 75.00, status: "disponible" },
      { name: "Verde", img: "img/Morral de lona RYH/3.jpg", price: 77.00, status: "disponible" },
      { name: "Kakhi", img: "img/Morral de lona RYH/4.jpg", price: 77.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Morral de lona RYH/5.jpg",
      "img/Morral de lona RYH/6.jpg",
      "img/Morral de lona RYH/7.jpg"
    ]
  },
  {
    id: 3,
    name: "Morral Totoro Clasico",
    category: "morrales",
    price: 60.00,
    oldPrice: 75.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/Morral Totoro Clasico/1.jpg",
    desc: "Morral Totoro de lona canvas en estilo messenger bag con 6 compartimientos organizadores.",
    bullets: [
      "Material: Lona Canvas",
      "Estilo: Messenger Bag - Cartera",
      "6 compartimientos organizadores",
      "Medidas: 36x28x10 cm",
      "Ideal para cuadernos A4 y laptop de 12 pulg (Nota: No entra Folders)"
    ],
    badge: "Popular",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Verde Olivo", img: "img/Morral Totoro Clasico/1.jpg", price: 60, status: "disponible" },
      { name: "Negro", img: "img/Morral Totoro Clasico/2.jpg", price: 66.00, status: "disponible" },
      { name: "Azul", img: "img/Morral Totoro Clasico/3.jpg", price: 66.00, status: "disponible" },
      { name: "Gris Lila", img: "img/Morral Totoro Clasico/3.jpg", price: 60.00, status: "disponible" },
      { name: "Amarillo", img: "img/Morral Totoro Clasico/3.jpg", price: 60.00, status: "disponible" },
      { name: "Verde oscuro", img: "img/Morral Totoro Clasico/3.jpg", price: 60.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Morral Totoro Clasico/4.jpg",
      "img/Morral Totoro Clasico/5.jpg",
      "img/Morral Totoro Clasico/6.jpg",
      "img/Morral Totoro Clasico/7.jpg",
      "img/Morral Totoro Clasico/8.jpg"
    ]
  },
  {
    id: 4,
    name: "Bolso Cruzado Vintage",
    category: "morrales",
    price: 75.00,
    oldPrice: 99.00,
    rating: "5.0 (15 valoraciones)",
    img: "img/Morral cruzado Vintage/1.jpg",
    desc: "Bolso cruzado vintage 100% lona canvas con múltiples bolsillos organizadores y opción de tallas.",
    bullets: [
      "Material: 100% Lona Canvas",
      "Múltiples bolsillos organizadores según talla",
      "Ideal para cuadernos y laptops"
    ],
    badge: "Destacado",
    tagColor: "bg-amber-500/15 text-amber-700 border-amber-500/30",
    sizes: [
      { name: 'S', dim: '32cm x 28cm x 10cm (5 bolsillos)', price: 75.00 },
      { name: 'M', dim: '39cm x 30cm x 12cm (7 bolsillos)', price: 90.00 },
      { name: 'L', dim: '44cm x 32cm x 14cm (9 bolsillos)', price: 110.00 }
    ],
    variants: [
      { name: "Negro", img: "img/Morral cruzado Vintage/3.jpg", price: 75.00, status: "disponible" },
      { name: "Verde Militar", img: "img/Morral cruzado Vintage/2.jpg", price: 75.00, status: "disponible" },
      { name: "Beige khaki", img: "img/Morral cruzado Vintage/1.jpg", price: 75.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Morral cruzado Vintage/4.jpg",
      "img/Morral cruzado Vintage/5.jpg",
      "img/Morral cruzado Vintage/6.jpg",
      "img/Morral cruzado Vintage/7.jpg"
    ]
  },
  {
    id: 5,
    name: "Bolso Bandolera Y2K",
    category: "carteras",
    price: 45.00,
    oldPrice: 60.00,
    rating: "4.7 (6 valoraciones)",
    img: "img/Bolso Bandolera y2k/1.jpg",
    desc: "Morral Y2K / Bolso Bandolera clásico de poliéster ligero y duradero con compartimento para tableta de 11 pulgadas y bolsillo portabotella.",
    bullets: [
      "Material: Poliéster importado, resistente y duradero",
      "Compartimento para tableta 11\"",
      "Bolsillo interior portabotella",
      "Medidas: 32cm x 23cm x 9cm",
      "Uso dual: cartera o morral"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Blanco", img: "img/Bolso Bandolera y2k/3.jpg", price: 45.00, status: "disponible" },
      { name: "Negro", img: "img/Bolso Bandolera y2k/4.jpg", price: 45.00, status: "disponible" },
      { name: "Verde", img: "img/Bolso Bandolera y2k/5.jpg", price: 45.00, status: "disponible" },
      { name: "Khaki", img: "img/Bolso Bandolera y2k/6.jpg", price: 45.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Bolso Bandolera y2k/1.jpg",
      "img/Bolso Bandolera y2k/2.jpg"
    ]
  },
  {
    id: 6,
    name: "Bolso Japonés Itabag I",
    category: "morrales",
    price: 85.00,
    oldPrice: 115.00,
    rating: "4.8 (9 valoraciones)",
    img: "img/Bolso Japones Itabag I/1.jpg",
    desc: "Bolso japonés itabag estilo shoulder bag con diseños de ventana transparente frontal (huella, estrella o corazón), compartimento para laptop de 14 pulgadas.",
    bullets: [
      "Cumple con los estándares TSA",
      "Compartimento para laptop 14\"",
      "Bolsillo interior portabotella y portallaves",
      "Medidas: 37cm x 27cm x 14cm",
      "Incluye llavero decorativo desmontable"
    ],
    badge: "Especial",
    tagColor: "bg-purple-500/15 text-purple-700 border-purple-500/30",
    sizes: [],
    variants: [
      { name: "Huella", img: "img/Bolso Japones Itabag I/2.jpg", price: 85.00, status: "bajo pedido" },
      { name: "Estrella", img: "img/Bolso Japones Itabag I/3.jpg", price: 85.00, status: "bajo pedido" },
      { name: "Corazón", img: "img/Bolso Japones Itabag I/4.jpg", price: 85.00, status: "bajo pedido" }
    ],
    lookbookImages: [
      "img/Bolso Japones Itabag I/1.jpg",
      "img/Bolso Japones Itabag I/2.jpg",
      "img/Bolso Japones Itabag I/3.jpg",
      "img/Bolso Japones Itabag I/4.jpg",
      "img/Bolso Japones Itabag I/5.jpg"
    ]
  },
  {
    id: 7,
    name: "Bolso Japonés Itabag II",
    category: "morrales",
    price: 85.00,
    oldPrice: 115.00,
    rating: "4.7 (7 valoraciones)",
    img: "img/Bolso Japones Itabag II/1.jpg",
    desc: "Bolso japonés itabag estilo shoulder bag con opciones de ventana transparente frontal rectangular o circular.",
    bullets: [
      "Compartimento para laptop 14\"",
      "Bolsillo interior portabotella y portallaves",
      "Medidas: 37cm x 27cm x 14cm",
      "Incluye llavero decorativo desmontable"
    ],
    badge: "",
    tagColor: "bg-purple-500/15 text-purple-700 border-purple-500/30",
    sizes: [],
    variants: [
      { name: "Rectángulo", img: "img/Bolso Japones Itabag II/2.jpg", price: 85.00, status: "bajo pedido" },
      { name: "Círculo", img: "img/Bolso Japones Itabag II/3.jpg", price: 85.00, status: "bajo pedido" }
    ],
    lookbookImages: [
      "img/Bolso Japones Itabag II/1.jpg"
    ]
  },
  {
    id: 8,
    name: "Bolso Morral Triple",
    category: "bolsos",
    price: 65.00,
    oldPrice: 110.00,
    rating: "4.9 (11 valoraciones)",
    img: "img/Bolso Morral Triple/1.jpg",
    desc: "Bolso morral triple estilo JK de cuero PU de alta calidad con múltiples opciones de uso (bolso, morral, cartera o mochila).",
    bullets: [
      "Material: Cuero PU de Alta Calidad",
      "Tamaño: 34x25x10 cm (Se adapta a cuadernos A4)",
      "Correa ajustable: Longitud máxima 140cm / Ancho 4cm",
      "Modelo de Uso: Bolso / Morral / Cartera / Mochila",
      "2 compartimientos principales"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Negro", img: "img/Bolso Morral Triple/2.jpg", price: 65.00, status: "disponible" },
      { name: "Rojo Vino", img: "img/Bolso Morral Triple/3.jpg", price: 65.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Bolso Morral Triple/5.jpg",
      "img/Bolso Morral Triple/4.jpg",
      "img/Bolso Morral Triple/5.jpg"
    ]
  },
  {
    id: 9,
    name: "Bolso Nubily Lazos",
    category: "bolsos",
    price: 80.00,
    oldPrice: 95.00,
    rating: "4.8 (10 valoraciones)",
    img: "img/Bolso Nubily  Lazos/1.jpg",
    desc: "Bolso japonés shoulder bag con diseño de lazos en cuero PU importado, ligero y duradero, con compartimento para laptop de 14 pulgadas.",
    bullets: [
      "Material: Cuero PU importado",
      "Cumple con estándares TSA",
      "Compartimento para laptop 14\"",
      "Bolsillo interior portabotella y portallaves",
      "Medidas: 37cm x 27cm x 14cm"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Marrón", img: "img/Bolso Nubily  Lazos/2.jpg", price: 80.00, status: "bajo pedido" },
      { name: "Negro", img: "img/Bolso Nubily  Lazos/3.jpg", price: 80.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Bolso Nubily  Lazos/4.jpg",
      "img/Bolso Nubily  Lazos/5.jpg",
      "img/Bolso Nubily  Lazos/6.jpg",
      "img/Bolso Nubily  Lazos/6.jpg"
    ]
  },
  {
    id: 10,
    name: "Bolso Nubily Flor",
    category: "bolsos",
    price: 80.00,
    oldPrice: 95.00,
    rating: "4.7 (5 valoraciones)",
    img: "img/Bolso Nubily Flor/1.jpg",
    desc: "Bolso japonés shoulder bag modelo flor con ventana transparente frontal con diseño floral.",
    bullets: [
      "Compartimento para laptop 14\"",
      "Bolsillo interior portabotella y portallaves",
      "Medidas: 37cm x 27cm x 14cm",
      "Incluye llavero decorativo desmontable"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Marrón", img: "img/Bolso Nubily Flor/3.jpg", price: 80.00, status: "disponible" },
      { name: "Negro", img: "img/Bolso Nubily Flor/2.jpg", price: 80.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Bolso Nubily Flor/5.jpg",
      "img/Bolso Nubily Flor/4.jpg",
      "img/Bolso Nubily Flor/5.jpg"
    ]
  },
  {
    id: 11,
    name: "Goth Hobo Bag",
    category: "bolsos",
    price: 88.00,
    oldPrice: 105.00,
    rating: "4.9 (14 valoraciones)",
    img: "img/Goth Hobo Bag/1.jpg",
    desc: "Bolso Y2K estilo Goth Hobo Bag en cuero PU premium con diseño Gray Leopardo y 5 compartimientos organizadores.",
    bullets: [
      "Material: Cuero PU Premium",
      "Tamaño: 37x26x13 cm (Se adapta a laptop de hasta 12\")",
      "Correa ajustable: Longitud máxima 130cm / Ancho 4cm",
      "5 compartimientos organizadores"
    ],
    badge: "Tendencia",
    tagColor: "bg-pink-500/15 text-pink-700 border-pink-500/30",
    sizes: [],
    variants: [
      { name: "Gray Leopardo", img: "img/Goth Hobo Bag/1.jpg", price: 88.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Goth Hobo Bag/2.jpg",
      "img/Goth Hobo Bag/2.jpg",
      "img/Goth Hobo Bag/2.jpg",
      "img/Goth Hobo Bag/2.jpg"
    ]
  },
  {
    id: 12,
    name: "Mochila Cat",
    category: "mochilas",
    price: 45.00,
    oldPrice: 60.00,
    rating: "4.8 (13 valoraciones)",
    img: "img/Mochila Cat/1.jpg",
    desc: "Mochila Cat estilo backpack XXS / morral vintage en cuero PU con diseño de orejas de gato y triple uso.",
    bullets: [
      "Material: Cuero PU",
      "Medidas: 25x18x10 cm (Ideal para cuadernos B5 y celulares)",
      "Triple uso: mochila, morral o cartera",
      "4 compartimientos"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Negro", img: "img/Mochila Cat/1.jpg", price: 45.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Mochila Cat/2.jpg",
      "img/Mochila Cat/3.jpg",
      "img/Mochila Cat/4.jpg"
    ]
  },
  {
    id: 13,
    name: "Mochila de One Piece",
    category: "mochilas",
    price: 40.00,
    oldPrice: 60.00,
    rating: "5.0 (20 valoraciones)",
    img: "img/Mochila de One Piece/1.jpg",
    desc: "Mochila escolar y urbana con diseño de One Piece en poliéster, con portalaptop para 15 pulgadas y 3 compartimientos.",
    bullets: [
      "Diseño temático: One Piece (Carteles de recompensa / Wanted)",
      "Dimensiones: 45x30x15 cm",
      "Portalaptop para 15 pulgadas",
      "Material: Poliéster resistente"
    ],
    badge: "Anime",
    tagColor: "bg-orange-500/15 text-orange-700 border-orange-500/30",
    sizes: [],
    variants: [
      { name: "Blanco y Negro (One Piece)", img: "img/Mochila de One Piece/1.jpg", price: 40.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Mochila de One Piece/2.jpg",
      "img/Mochila de One Piece/3.jpg",
      "img/Mochila de One Piece/4.jpg",
      "img/Mochila de One Piece/5.jpg"
    ]
  },
  {
    id: 14,
    name: "Mochila Gaming",
    category: "mochilas",
    price: 35.00,
    oldPrice: 60.00,
    rating: "4.9 (16 valoraciones)",
    img: "img/Mochila Gaming/1.jpg",
    desc: "Mochila clásica backpack gaming con diseño 'Let's Play' en nylon, espacio ideal para laptop de 15 pulgadas.",
    bullets: [
      "Material: Nylon de alta resistencia",
      "Medidas: 42x32x13 cm",
      "Ideal para cuadernos A4, Folders y laptop de 15 pulgadas"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Negro / Let's Play", img: "img/Mochila Gaming/1.jpg", price: 35.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Mochila Gaming/2.jpg"
    ]
  },
  {
    id: 15,
    name: "Mochila Luck",
    category: "mochilas",
    price: 35.00,
    oldPrice: 50.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/Mochila Luck/1.jpg",
    desc: "Mochila clásica backpack estilo Mochila Luck en nylon poliéster con 4 compartimientos organizadores.",
    bullets: [
      "Material: Nylon Poliéster",
      "4 compartimientos organizadores",
      "Medidas: 42x30x15 cm",
      "Ideal para laptop de 14 pulgadas y folders"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Beige / Azul Marino", img: "img/Mochila Luck/1.jpg", price: 35.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Mochila Luck/2.jpg"
    ]
  },
  {
    id: 16,
    name: "Mochila Satoru Gojo",
    category: "mochilas",
    price: 60.00,
    oldPrice: 80.00,
    rating: "5.0 (22 valoraciones)",
    img: "img/Mochila Satoru Gojo/1.jpg",
    desc: "Mochila escolar y urbana temática de Jujutsu Kaisen con diseño de Satoru Gojo en nylon, con compartimento para laptop.",
    bullets: [
      "Diseño exclusivo anime: Jujutsu Kaisen / Satoru Gojo",
      "Material: Nylon",
      "Medidas: 31x44x15 cm Aprox.",
      "Compartimento interno para Laptop"
    ],
    badge: "Anime",
    tagColor: "bg-purple-500/15 text-purple-700 border-purple-500/30",
    sizes: [],
    variants: [
      { name: "Negro y Blanco", img: "img/Mochila Satoru Gojo/1.jpg", price: 60.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Mochila Satoru Gojo/2.jpg"
      
    ]
  },
  {
    id: 17,
    name: "Morral Belstaff",
    category: "morrales",
    price: 90.00,
    oldPrice: 120.00,
    rating: "4.9 (18 valoraciones)",
    img: "img/Morral Belstaff/1.png",
    desc: "Morral Belstaff de lona canvas grueso con correas de cuero PU premium, estilo vintage atemporal y 6 compartimientos.",
    bullets: [
      "Material: Lona Canvas Grueso + cuero PU premium",
      "Tamaño: 39x33x16 cm (Laptop hasta 14\")",
      "Correa ajustable: Longitud máxima 130cm / Ancho 4cm",
      "6 compartimientos organizadores"
    ],
    badge: "Clásico",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Negro", img: "img/Morral Belstaff/7.png", price: 90.00, status: "disponible" },
      { name: "Azul", img: "img/Morral Belstaff/8.png", price: 90.00, status: "bajo pedido" },
      { name: "Verde Oliva", img: "img/Morral Belstaff/9.png", price: 90.00, status: "bajo pedido" },
      { name: "Khaki", img: "img/Morral Belstaff/6.jpeg", price: 90.00, status: "bajo pedido" }
    ],
    lookbookImages: [
      "img/Morral Belstaff/4.png",
      "img/Morral Belstaff/5.png",
      "img/Morral Belstaff/6.png",
      "img/Morral Belstaff/7.png"
    ]
  },
  {
    id: 18,
    name: "Morral Belstaff Básico",
    category: "morrales",
    price: 85.00,
    oldPrice: 105.00,
    rating: "4.7 (7 valoraciones)",
    img: "img/Morral Belstaff Basico/1.jpg",
    desc: "Morral Belstaff estilo messenger bag retro vintage en tela de cuero PU premium con forro de poliéster, ideal para estudios.",
    bullets: [
      "Forro de Poliéster",
      "Tela Cuero PU Premium",
      "Tamaño: 39cm x 13cm x 30cm (Laptop de 14\")"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Negro", img: "img/Morral Belstaff Basico/1.jpg", price: 85.00, status: "bajo pedido" }
    ],
    lookbookImages: [
      "img/Morral Belstaff Basico/2.jpg",
      "img/Morral Belstaff Basico/3.jpg"
    ]
  },
  {
    id: 19,
    name: "Morral Cat",
    category: "morrales",
    price: 79.00,
    oldPrice: 95.00,
    rating: "4.8 (9 valoraciones)",
    img: "img/Morral Cat/1.jpg",
    desc: "Morral Cat de lona canvas en estilo messenger bag con 6 compartimientos organizadores e ilustrado con temática de gatitos.",
    bullets: [
      "Material: Lona Canvas",
      "Estilo: Messenger Bag",
      "6 compartimientos",
      "Medidas: 36x28x10 cm (Ideal para cuadernos A4 y laptop de 12\")"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Gato Sonriente", img: "img/Morral Cat/2.jpg", price: 79.00, status: "disponible" },
      { name: "Gato en Libro", img: "img/Morral Cat/4.jpg", price: 79.00, status: "disponible" },
      { name: "Gato Paraguas", img: "img/Morral Cat/6.jpg", price: 79.00, status: "disponible" },
      { name: "Gato y Flor", img: "img/Morral Cat/8.jpg", price: 79.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Morral Cat/3.jpg",
      "img/Morral Cat/5.jpg",
      "img/Morral Cat/7.jpg",
      "img/Morral Cat/10.jpg"
    ]
  },
  {
    id: 20,
    name: "Morral Cosmic",
    category: "morrales",
    price: 60.00,
    oldPrice: 75.00,
    rating: "4.8 (11 valoraciones)",
    img: "img/Morral Cosmic/1.jpg",
    desc: "Morral Y2K estilo Morral Cosmic clásico de lona canvas con diseño de estrellas y 6 compartimientos organizadores.",
    bullets: [
      "Material: Lona Canvas",
      "6 compartimientos",
      "Medidas: 32x24x8 cm (Ideal para cuadernos A4 y laptop de 11\")"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Estrella 1", img: "img/Morral Cosmic/2.jpg", price: 79.00, status: "disponible" },
      { name: "Estrella 2", img: "img/Morral Cosmic/3.jpg", price: 79.00, status: "bajo pedido" },
      { name: "Estrella 3", img: "img/Morral Cosmic/4.jpg", price: 79.00, status: "bajo pedido" },
      { name: "Estrella 4", img: "img/Morral Cosmic/5.jpg", price: 79.00, status: "bajo pedido" }
    ],
    lookbookImages: [
      "img/Morral Cosmic/7.jpg",
      "img/Morral Cosmic/6.jpg"
    ]
  },
  {
    id: 21,
    name: "Morral de Kageyama",
    category: "morrales",
    price: 100.00,
    oldPrice: 150.00,
    rating: "5.0 (15 valoraciones)",
    img: "img/Morral de Kageyama/1.png",
    desc: "Bolso escolar Haikyuu inspirado en Kageyama de cuero PU charol en preventa, con 3 compartimientos y correa ajustable.",
    bullets: [
      "Material: Cuero PU Charol",
      "Tamaño: 40x28x16 cm (Laptop hasta 15\")",
      "Correa ajustable: Longitud máxima 130cm / Ancho 4cm",
      "3 compartimientos organizadores"
    ],
    badge: "Preventa",
    tagColor: "bg-red-500/15 text-red-700 border-red-500/30",
    sizes: [],
    variants: [
      { name: "Blanco", img: "img/Morral de Kageyama/1.png", price: 89.00, status: "bajo pedido" }
    ],
    lookbookImages: [
      "img/Morral de Kageyama/2.png"
    ]
  },
  {
    id: 22,
    name: "Morral de Oficio Clásico",
    category: "morrales",
    price: 85.00,
    oldPrice: 120.00,
    rating: "4.9 (17 valoraciones)",
    img: "img/Morral de oficio clasico/1.jpg",
    desc: "Bolso de negocios morral de oficio clásico en lona canvas grueso con 6 compartimientos organizadores y espacio para laptop de hasta 13 pulgadas.",
    bullets: [
      "Material: Lona Canvas Grueso",
      "Tamaño: 37x30x16 cm (Laptop hasta 13\")",
      "Correa ajustable: Longitud máxima 130cm / Ancho 4cm",
      "6 compartimientos"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Negro", img: "img/Morral de oficio clasico/1.jpg", price: 85.00, status: "bajo pedido" },
      { name: "Azul", img: "img/Morral de oficio clasico/2.jpg", price: 85.00, status: "bajo pedido" },
      { name: "Verde", img: "img/Morral de oficio clasico/3.jpg", price: 85.00, status: "bajo pedido" },
      { name: "Caramelo", img: "img/Morral de oficio clasico/4.jpg", price: 85.00, status: "bajo pedido" }
    ],
    lookbookImages: [
      "img/Morral de oficio clasico/5.jpg",
      "img/Morral de oficio clasico/6.jpg"
    ]
  },
  {
    id: 23,
    name: "Morral Hinata Shoyo",
    category: "morrales",
    price: 75.00,
    oldPrice: 95.00,
    rating: "4.9 (13 valoraciones)",
    img: "img/Morral Hinata Shoyo/1.jpg",
    desc: "Shoulder bag estilo morral Hinata Shoyo de Haikyuu en lona canvas color hueso/crema, con 4 compartimientos y accesorios decorativos.",
    bullets: [
      "Material: Lona Canvas Color Hueso / Crema",
      "4 compartimientos + porta botella interno",
      "Medidas: 36x29x12 cm",
      "Incluye accesorios: Cara feliz + Estrellita"
    ],
    badge: "Anime",
    tagColor: "bg-orange-500/15 text-orange-700 border-orange-500/30",
    sizes: [],
    variants: [
      { name: "Hueso / Crema", img: "img/Morral Hinata Shoyo/1.jpg", price: 75.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Morral Hinata Shoyo/2.jpg",
      "img/Morral Hinata Shoyo/3.jpg"
    ]
  },
  {
    id: 24,
    name: "Morral Mensajero Totoro 600D",
    category: "morrales",
    price: 77.00,
    oldPrice: 115.00,
    rating: "5.0 (25 valoraciones)",
    img: "img/Morral Mensajero de Totoro 600D/1.jpg",
    desc: "Bolso mensajero Studios Ghibli de Totoro 600D en TetronKodra impermeable, resistente y duradero, con 6 compartimientos.",
    bullets: [
      "Material: TetronKodra 600D de Alta Calidad (Water Resistant)",
      "Tamaño: 40x30x12 cm (Laptop hasta 14\")",
      "Correa ajustable: Longitud máxima 140cm / Ancho 4cm",
      "6 compartimientos organizadores"
    ],
    badge: "Más Vendido",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Frontal", img: "img/Morral Mensajero de Totoro 600D/2.jpg", price: 77.00, status: "bajo pedido" },
      { name: "Saludo", img: "img/Morral Mensajero de Totoro 600D/3.jpg", price: 80.00, status: "bajo pedido" }
    ],
    lookbookImages: [
      "img/Morral Mensajero de Totoro 600D/4.jpg",
      "img/Morral Mensajero de Totoro 600D/5.jpg"
    ]
  },
  {
    id: 25,
    name: "Morral Oficio Corto",
    category: "morrales",
    price: 72.00,
    oldPrice: 100.00,
    rating: "4.8 (10 valoraciones)",
    img: "img/Morral Oficio Corto/1.jpg",
    desc: "Bolso de negocios morral retro clásico en lona canvas grueso con 5 compartimientos organizadores y espacio para laptop de hasta 12 pulgadas.",
    bullets: [
      "Material: Lona Canvas Grueso",
      "Tamaño: 34x30x10 cm (Laptop hasta 12\")",
      "Correa ajustable: Longitud máxima 130cm / Ancho 4cm",
      "5 compartimientos"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Azul", img: "img/Morral Oficio Corto/7.jpg", price: 72.00, status: "disponible" },
      { name: "Negro", img: "img/Morral Oficio Corto/6.jpg", price: 72.00, status: "disponible" },
      { name: "Verde", img: "img/Morral Oficio Corto/5.jpg", price: 72.00, status: "disponible" },
      { name: "Kakhi", img: "img/Morral Oficio Corto/8.jpg", price: 72.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Morral Oficio Corto/3.jpg",
      "img/Morral Oficio Corto/4.jpg",
      "img/Morral Oficio Corto/2.jpg"
    ]
  },
  {
    id: 26,
    name: "Morral Ranger Bag",
    category: "morrales",
    price: 65.00,
    oldPrice: 75.00,
    rating: "4.9 (12 valoraciones)",
    img: "img/Morral Ranger Bag/1.jpg",
    desc: "Morral retro casual Ranger Bag canvas de lona canvas grueso con 4 compartimientos y espacio para laptop de hasta 12 pulgadas.",
    bullets: [
      "Material: Lona Canvas Grueso",
      "Tamaño: 34x27x9 cm (Laptop hasta 12\")",
      "Correa ajustable: Longitud máxima 130cm / Ancho 4cm",
      "4 compartimientos"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Marrón", img: "img/Morral Ranger Bag/2.jpg", price: 99.00, status: "disponible" },
      { name: "Azul", img: "img/Morral Ranger Bag/3.jpg", price: 99.00, status: "disponible" },
      { name: "Negro", img: "img/Morral Ranger Bag/1.jpg", price: 99.00, status: "disponible" },
      { name: "Verde", img: "img/Morral Ranger Bag/4.jpg", price: 99.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Morral Ranger Bag/5.jpg",
      "img/Morral Ranger Bag/6.jpg",
      "img/Morral Ranger Bag/7.jpg",
      "img/Morral Ranger Bag/8.jpg"
    ]
  },
  {
    id: 27,
    name: "Morral Urban Illust",
    category: "morrales",
    price: 60.00,
    oldPrice: 75.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/Morral Urban Illust/1.jpg",
    desc: "Shoulder bag y messenger bag Morral Urban Illust en lona canvas con 6 compartimientos organizadores, ideal para cuadernos A4 y laptop de 11\".",
    bullets: [
      "Material: Lona Canvas",
      "6 compartimientos",
      "Medidas: 32x24x8 cm"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Ying Yang", img: "img/Morral Urban Illust/4.jpg", price: 60.00, status: "disponible" },
      { name: "Zorrito", img: "img/Morral Urban Illust/2.jpg", price: 60.00, status: "disponible" },
      { name: "3 Gatitos", img: "img/Morral Urban Illust/6.jpg", price: 60.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Morral Urban Illust/1.jpg",
      "img/Morral Urban Illust/3.jpg",
      "img/Morral Urban Illust/5.jpg",
      "img/Morral Urban Illust/7.jpg",
      "img/Morral Urban Illust/8.jpg"
    ]
  },
  {
    id: 28,
    name: "Morral Maletín Buckle Leather",
    category: "carteras",
    price: 120.00,
    oldPrice: 145.00,
    rating: "4.9 (16 valoraciones)",
    img: "img/Morral.Maletin buckle leather/1.jpg",
    desc: "Morral vintage A3 modelo clásico Rainsmore en lona canvas grueso con hebillas frontales y gran capacidad para laptop de hasta 16\".",
    bullets: [
      "Material: Lona Canvas Grueso con hebillas",
      "Tamaño: 44x32x16 cm (Laptop hasta 16\")",
      "Correa ajustable: Longitud máxima 130cm / Ancho 4cm",
      "4 compartimientos"
    ],
    badge: "Premium",
    tagColor: "bg-amber-500/15 text-amber-700 border-amber-500/30",
    sizes: [],
    variants: [
      { name: "Marrón", img: "img/Morral.Maletin buckle leather/1.jpg", price: 120.00, status: "disponible" },
      { name: "Negro", img: "img/Morral.Maletin buckle leather/2.jpg", price: 120.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Morral.Maletin buckle leather/3.jpg",
      "img/Morral.Maletin buckle leather/4.jpg"
    ]
  },
  {
    id: 29,
    name: "Mochila Pikachu Clásico",
    category: "mochilas",
    price: 40.00,
    oldPrice: 55.00,
    rating: "4.9 (19 valoraciones)",
    img: "img/Mochila Pikachu Clasico/1.jpg",
    desc: "Backpack mochila clásica Pikachu New Style en nylon de 3 compartimientos, ideal para cuadernos A4, folders y laptop de hasta 15 pulgadas.",
    bullets: [
      "Material: Nylon",
      "3 compartimientos",
      "Medidas: 44x30x15 cm",
      "Ideal para cuadernos A4, Folders y laptop de 15 pulg"
    ],
    badge: "Anime",
    tagColor: "bg-yellow-500/15 text-yellow-700 border-yellow-500/30",
    sizes: [],
    variants: [
      { name: "Azul Denim", img: "img/Mochila Pikachu Clasico/1.jpg", price: 40.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Mochila Pikachu Clasico/2.jpg"
    
    ]
  },
  {
    id: 30,
    name: "Mochila Card",
    category: "mochilas",
    price: 55.00,
    oldPrice: 75.00,
    rating: "4.8 (11 valoraciones)",
    img: "img/Mochila Card/1.jpg",
    desc: "Mochila Itabag M Card New Style en nylon y cuero PU de 3 compartimientos con ventana frontal para coleccionables.",
    bullets: [
      "Material: Nylon + Cuero PU",
      "3 compartimientos con ventana frontal Itabag",
      "Medidas: 42x32x13 cm",
      "Ideal para cuadernos A4, Folders y Tablet de 14\""
    ],
    badge: "Itabag",
    tagColor: "bg-purple-500/15 text-purple-700 border-purple-500/30",
    sizes: [],
    variants: [
      { name: "Negro / Naranja", img: "img/Mochila Card/1.jpg", price: 55.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Mochila Card/2.jpg"
    ]
  },
  {
    id: 31,
    name: "Bolso Cruzado XS",
    category: "bolsos",
    price: 60.00,
    oldPrice: 105.00,
    rating: "4.8 (9 valoraciones)",
    img: "img/Boiso cruzado XS/1.jpg",
    desc: "Bolso cruzado XS New Style estilo Mark Fairwhale en cuero PU con 4 compartimientos organizadores y detalles con hebillas.",
    bullets: [
      "Material: Cuero PU",
      "Estilo: Mark Fairwhale",
      "4 compartimientos",
      "Medidas: 32x26x8 cm (Ideal para cuadernos B5, tablet y celulares)"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Negro / Vino", img: "img/Boiso cruzado XS/1.jpg", price: 60.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Boiso cruzado XS/2.jpg",
      "img/Boiso cruzado XS/3.jpg",
      "img/Boiso cruzado XS/4.jpg",
      "img/Boiso cruzado XS/5.jpg"
    ]
  },
  {
    id: 32,
    name: "Bag ArmyBOMB",
    category: "morrales",
    price: 90.00,
    oldPrice: 110.00,
    rating: "4.8 (9 valoraciones)",
    img: "img/ArmyBomb/6.jpeg",
    desc: "Bolso cruzado XS New Style estilo Mark Fairwhale en cuero PU con 4 compartimientos organizadores y detalles con hebillas.",
    bullets: [
      "Material: Cuero PU",
      "Estilo: Mark Fairwhale",
      "4 compartimientos",
      "Medidas: 32x26x8 cm (Ideal para cuadernos B5, tablet y celulares)"
    ],
    badge: "",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Verde Militar", img: "img/ArmyBomb/1.jpeg", price: 90.00, status: "bajo pedido" },
      { name: "Negro", img: "img/ArmyBomb/7.jpeg", price: 90.00, status: "bajo pedido" }
    ],
    lookbookImages: [
      "img/ArmyBomb/1.jpeg",
      "img/ArmyBomb/2.jpeg",    
      "img/ArmyBomb/4.jpeg",
      "img/ArmyBomb/7.jpeg",
      "img/ArmyBomb/8.jpeg"
    ]
  },
  {
    id: 33,
    name: "Bolso Japonés Clásico",
    category: "carteras",
    price: 80.00,
    oldPrice: 100.00,
    rating: "4.9 (12 valoraciones)",
    img: "img/Bolso Japones Clasico/1.jpg",
    desc: "Shoulder bag Bolso Japonés modelo clásico en cuero PU de alta calidad con múltiples compartimientos, correa ajustable y gran capacidad para laptop y folders.",
    bullets: [
      "Material: Cuero PU de Alta Calidad",
      "Medidas: 39x30x12 cm",
      "Correa ajustable: Longitud máx 140cm / Ancho 4cm",
      "2 compartimientos grandes y 1 pequeño",
      "Ideal para laptop de 14\", A5/A4, Tablet y Folders"
    ],
    badge: "Popular",
    tagColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    sizes: [],
    variants: [
      { name: "Blanco", img: "img/Bolso Japones Clasico/4.jpg", price: 80.00, status: "disponible" },
      { name: "Bronceado", img: "img/Bolso Japones Clasico/4.jpg", price: 80.00, status: "disponible" },
      { name: "Marrón Oscuro", img: "img/Bolso Japones Clasico/4.jpg", price: 80.00, status: "disponible" },
      { name: "Azul", img: "img/Bolso Japones Clasico/4.jpg", price: 80.00, status: "disponible" },
      { name: "Negro", img: "img/Bolso Japones Clasico/1.jpg", price: 80.00, status: "disponible" }
    ],
    lookbookImages: [
      "img/Bolso Japones Clasico/3.jpg",
      "img/Bolso Japones Clasico/4.jpg",
      "img/Bolso Japones Clasico/4.jpg",
      "img/Bolso Japones Clasico/3.jpg"
    ]
  },
  // --- ACCESORIOS ---
  {
    id: 101,
    name: "Cartuchera Haikyuu Modelo 1",
    category: "accesorios",
    price: 20.00,
    oldPrice: 28.00,
    rating: "4.9 (10 valoraciones)",
    img: "img/accesorios/2.jpg",
    desc: "3 compartimientos, Color: Crema / Hueso, Material: Poliéster, estilo Cartuchera Large.",
    bullets: ["3 compartimientos", "Material: Poliéster", "Medidas: 20cm x 10cm x 5cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Crema / Hueso", img: "img/accesorios/2.jpg", price: 20.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 102,
    name: "Monedero Panda",
    category: "accesorios",
    price: 4.50,
    oldPrice: 7.00,
    rating: "4.7 (5 valoraciones)",
    img: "img/accesorios/46.jpg",
    desc: "1 compartimiento, material Tela Peluche.",
    bullets: ["1 compartimiento", "Material: Tela Peluche", "Medidas: 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Panda", img: "img/accesorios/46.jpg", price: 4.50, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 103,
    name: "Monedero Pinguino",
    category: "accesorios",
    price: 4.50,
    oldPrice: 7.00,
    rating: "4.7 (5 valoraciones)",
    img: "img/accesorios/6.jpg",
    desc: "1 compartimiento, material Tela Peluche.",
    bullets: ["1 compartimiento", "Material: Tela Peluche", "Medidas: 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Pingüino", img: "img/accesorios/6.jpg", price: 4.50, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 104,
    name: "Monedero Simple Totoro",
    category: "accesorios",
    price: 4.50,
    oldPrice: 7.00,
    rating: "4.8 (6 valoraciones)",
    img: "img/accesorios/7.jpg",
    desc: "1 compartimiento, material Tela Peluche.",
    bullets: ["1 compartimiento", "Material: Tela Peluche", "Medidas: 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Totoro Simple", img: "img/accesorios/7.jpg", price: 4.50, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 105,
    name: "Haikyuu Modelo: 2",
    category: "accesorios",
    price: 24.00,
    oldPrice: 32.00,
    rating: "4.9 (12 valoraciones)",
    img: "img/accesorios/1.jpg",
    desc: "4 compartimientos, color Crema / Hueso, material Poliéster, estilo Cartuchera Large.",
    bullets: ["4 compartimientos", "Color: Crema / Hueso", "Material: Poliéster", "Medidas: 23cm x 12cm x 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Haikyuu 2", img: "img/accesorios/1.jpg", price: 24.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 106,
    name: "Blue Lock Modelo: 1",
    category: "accesorios",
    price: 24.00,
    oldPrice: 32.00,
    rating: "4.9 (11 valoraciones)",
    img: "img/accesorios/3.jpg",
    desc: "4 compartimientos, color Crema / Hueso, material Poliéster, estilo Cartuchera Large.",
    bullets: ["4 compartimientos", "Color: Crema / Hueso", "Material: Poliéster", "Medidas: 23cm x 12cm x 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Blue Lock 1", img: "img/accesorios/3.jpg", price: 24.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 108,
    name: "Llavero Mono",
    category: "accesorios",
    price: 11.00,
    oldPrice: 15.00,
    rating: "4.7 (7 valoraciones)",
    img: "img/accesorios/9.jpg",
    desc: "Material Poliéster Peluche, estilo Llavero de mochila.",
    bullets: ["Material: Poliéster Peluche", "Medidas: 12cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Mono", img: "img/accesorios/9.jpg", price: 11.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 109,
    name: "Cartuchera Bagre",
    category: "accesorios",
    price: 13.00,
    oldPrice: 18.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/accesorios/10.jpg",
    desc: "1 compartimiento, color azul acero, material Poliéster Peluche, estilo Cartuchera.",
    bullets: ["1 compartimiento", "Color: Azul acero", "Material: Poliéster Peluche", "Medidas: 19cm x 4cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Bagre", img: "img/accesorios/10.jpg", price: 13.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 110,
    name: "Cartuchera Pescado",
    category: "accesorios",
    price: 13.00,
    oldPrice: 18.00,
    rating: "4.8 (9 valoraciones)",
    img: "img/accesorios/11.jpg",
    desc: "1 compartimiento, color negro verdoso, material Poliéster Peluche, estilo Cartuchera.",
    bullets: ["1 compartimiento", "Color: Negro verdoso", "Material: Poliéster Peluche", "Medidas: 26cm x 4cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Pescado", img: "img/accesorios/11.jpg", price: 13.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 111,
    name: "Cartuchera Shaun, el cordero",
    category: "accesorios",
    price: 22.00,
    oldPrice: 29.00,
    rating: "4.9 (10 valoraciones)",
    img: "img/accesorios/5.jpg",
    desc: "1 compartimiento, color Negro, material Poliéster Peluche, estilo Cartuchera.",
    bullets: ["1 compartimiento", "Color: Negro", "Material: Poliéster Peluche", "Medidas: 19cm x 4cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Shaun el cordero", img: "img/accesorios/5.jpg", price: 22.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 112,
    name: "Cartuchera Rilakkuma",
    category: "accesorios",
    price: 13.00,
    oldPrice: 18.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/accesorios/12.jpg",
    desc: "1 compartimiento, color khaki, material Poliéster Peluche, estilo Cartuchera.",
    bullets: ["1 compartimiento", "Color: Khaki", "Material: Poliéster Peluche", "Medidas: 15cm x 4cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Rilakkuma", img: "img/accesorios/12.jpg", price: 13.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 113,
    name: "Monedero SIMPLE",
    category: "accesorios",
    price: 4.00,
    oldPrice: 6.00,
    rating: "4.7 (4 valoraciones)",
    img: "img/accesorios/13.jpg",
    desc: "1 compartimiento, color variedad, material Poliéster Peluche, estilo Monedero.",
    bullets: ["1 compartimiento", "Colores variados", "Material: Poliéster Peluche", "Medidas: 5cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Variado", img: "img/accesorios/13.jpg", price: 4.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 114,
    name: "Monedero BAGRE",
    category: "accesorios",
    price: 7.00,
    oldPrice: 10.00,
    rating: "4.8 (6 valoraciones)",
    img: "img/accesorios/15.jpg",
    desc: "1 compartimiento, color variedad, material Poliéster Peluche, estilo Monedero.",
    bullets: ["1 compartimiento", "Colores variados", "Material: Poliéster Peluche", "Medidas: 7cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Variado", img: "img/accesorios/15.jpg", price: 7.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 115,
    name: "Monedero GATO SIMPLE",
    category: "accesorios",
    price: 6.00,
    oldPrice: 9.00,
    rating: "4.8 (7 valoraciones)",
    img: "img/accesorios/14.jpg",
    desc: "1 compartimiento, color variedad, material Poliéster Peluche, estilo Monedero.",
    bullets: ["1 compartimiento", "Colores variados", "Material: Poliéster Peluche", "Medidas: 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Variado", img: "img/accesorios/14.jpg", price: 6.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 116,
    name: "Cartuchera Sapo Naruto",
    category: "accesorios",
    price: 12.00,
    oldPrice: 16.00,
    rating: "4.9 (14 valoraciones)",
    img: "img/accesorios/16.jpg",
    desc: "1 compartimiento, color verde, material Poliéster Peluche, estilo Cartuchera.",
    bullets: ["1 compartimiento", "Color: Verde", "Material: Poliéster Peluche", "Medidas: 12cm x 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Verde Sapo", img: "img/accesorios/16.jpg", price: 12.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 117,
    name: "Llavero HELLO KITTY",
    category: "accesorios",
    price: 14.00,
    oldPrice: 19.00,
    rating: "4.9 (15 valoraciones)",
    img: "img/accesorios/17.jpg",
    desc: "Color Blanco, material Poliéster Peluche, estilo Llavero.",
    bullets: ["Color: Blanco", "Material: Poliéster Peluche", "Medidas: 12cm x 8cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Blanco", img: "img/accesorios/17.jpg", price: 14.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 118,
    name: "Llavero Gatito",
    category: "accesorios",
    price: 5.00,
    oldPrice: 8.00,
    rating: "4.7 (6 valoraciones)",
    img: "img/accesorios/19.jpg",
    desc: "Color Blanco, material Poliéster Peluche, estilo Llavero.",
    bullets: ["Color: Blanco", "Material: Poliéster Peluche", "Medidas: 9cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Blanco", img: "img/accesorios/19.jpg", price: 5.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 119,
    name: "Llavero Domo kun",
    category: "accesorios",
    price: 6.00,
    oldPrice: 9.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/accesorios/20.jpg",
    desc: "Color Marrón, material Poliéster Peluche, estilo Llavero.",
    bullets: ["Color: Marrón", "Material: Poliéster Peluche", "Medidas: 9cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Marrón", img: "img/accesorios/20.jpg", price: 6.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 120,
    name: "Llaverito Rana",
    category: "accesorios",
    price: 16.00,
    oldPrice: 22.00,
    rating: "4.9 (10 valoraciones)",
    img: "img/accesorios/21.jpg",
    desc: "Color verde, material Tela Peluche, estilo Ranita.",
    bullets: ["Color: Verde", "Material: Tela Peluche", "Medidas: 16cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Verde", img: "img/accesorios/21.jpg", price: 16.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 121,
    name: "Llaverito ChibiDemon",
    category: "accesorios",
    price: 16.00,
    oldPrice: 22.00,
    rating: "4.9 (9 valoraciones)",
    img: "img/accesorios/22.jpg",
    desc: "Color Blanco, material Tela Peluche, estilo demonio.",
    bullets: ["Color: Blanco", "Material: Tela Peluche", "Medidas: 12cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Blanco", img: "img/accesorios/22.jpg", price: 16.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 122,
    name: "Llaverito Pochacco",
    category: "accesorios",
    price: 19.00,
    oldPrice: 25.00,
    rating: "5.0 (12 valoraciones)",
    img: "img/accesorios/23.jpg",
    desc: "Color Blanco, material Tela Peluche.",
    bullets: ["Color: Blanco", "Material: Tela Peluche", "Medidas: 12cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Blanco", img: "img/accesorios/23.jpg", price: 19.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 123,
    name: "Llaveros Peluche Totoro",
    category: "accesorios",
    price: 13.00,
    oldPrice: 18.00,
    rating: "4.9 (18 valoraciones)",
    img: "img/accesorios/24.jpg",
    desc: "Color Marrón / Azul / Verde, material Tela Peluche, estilo Llaverito Peluche Totoro.",
    bullets: ["Material: Tela Peluche", "Medidas: 12cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [
      { name: "Marrón", img: "img/accesorios/24.jpg", price: 13.00, status: "disponible" },
      { name: "Azul", img: "img/accesorios/25.jpg", price: 13.00, status: "disponible" },
      { name: "Verde", img: "img/accesorios/26.jpg", price: 13.00, status: "disponible" }
    ],
    lookbookImages: []
  },
  {
    id: 124,
    name: "Llavero Perla Corazon lazo blanco",
    category: "accesorios",
    price: 12.00,
    oldPrice: 16.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/accesorios/27.jpg",
    desc: "Color Blanco, estilo Llaverito con Lazos.",
    bullets: ["Color: Blanco", "Estilo: Llaverito con Lazos", "Medidas: 12cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Blanco", img: "img/accesorios/27.jpg", price: 12.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 125,
    name: "Llavero Nube con Lazo",
    category: "accesorios",
    price: 8.00,
    oldPrice: 12.00,
    rating: "4.7 (7 valoraciones)",
    img: "img/accesorios/28.jpg",
    desc: "Color Rosado, estilo Llaverito con Lazos.",
    bullets: ["Color: Rosado", "Estilo: Llaverito con Lazos", "Medidas: 9cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Rosado", img: "img/accesorios/28.jpg", price: 8.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 126,
    name: "Llavero Nube Estrella",
    category: "accesorios",
    price: 8.00,
    oldPrice: 12.00,
    rating: "4.7 (6 valoraciones)",
    img: "img/accesorios/29.jpg",
    desc: "Color Rosado, estilo Llaverito.",
    bullets: ["Color: Rosado", "Estilo: Llaverito", "Medidas: 12cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Rosado", img: "img/accesorios/29.jpg", price: 8.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 127,
    name: "Llavero Pompom Corazon",
    category: "accesorios",
    price: 6.00,
    oldPrice: 9.00,
    rating: "4.7 (5 valoraciones)",
    img: "img/accesorios/31.jpg",
    desc: "Color Rosado, estilo Llaverito.",
    bullets: ["Color: Rosado", "Estilo: Llaverito", "Medidas: 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Rosado", img: "img/accesorios/31.jpg", price: 6.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 128,
    name: "Monedero Abeja",
    category: "accesorios",
    price: 8.00,
    oldPrice: 12.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/accesorios/30.jpg",
    desc: "1 compartimiento, color: Negro, material Poliéster Peluche.",
    bullets: ["1 compartimiento", "Color: Negro", "Material: Poliéster Peluche", "Medidas: 8cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Negro", img: "img/accesorios/30.jpg", price: 8.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 129,
    name: "Llavero Pompom negro",
    category: "accesorios",
    price: 6.00,
    oldPrice: 9.00,
    rating: "4.7 (5 valoraciones)",
    img: "img/accesorios/32.jpg",
    desc: "Color Rosado / Negro, estilo Llaverito.",
    bullets: ["Color: Negro", "Estilo: Llaverito", "Medidas: 8cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Negro", img: "img/accesorios/32.jpg", price: 6.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 130,
    name: "Llavero Susuwatari",
    category: "accesorios",
    price: 4.00,
    oldPrice: 6.00,
    rating: "4.9 (12 valoraciones)",
    img: "img/accesorios/33.jpg",
    desc: "Material: Tela Peluche.",
    bullets: ["Material: Tela Peluche", "Medidas: 3cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Negro", img: "img/accesorios/33.jpg", price: 4.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 131,
    name: "Monedero Llavero Totoro",
    category: "accesorios",
    price: 14.00,
    oldPrice: 19.00,
    rating: "4.9 (14 valoraciones)",
    img: "img/accesorios/34.jpg",
    desc: "1 compartimiento, material Tela Peluche.",
    bullets: ["1 compartimiento", "Material: Tela Peluche", "Medidas: 20cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Totoro", img: "img/accesorios/34.jpg", price: 14.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 133,
    name: "Cartuchera Tiburon",
    category: "accesorios",
    price: 9.00,
    oldPrice: 14.00,
    rating: "4.8 (9 valoraciones)",
    img: "img/accesorios/35.jpg",
    desc: "1 compartimiento, material Poliéster, estilo Cartuchera Large.",
    bullets: ["1 compartimiento", "Material: Poliéster", "Medidas: 23cm x 10cm x 3cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Tiburón", img: "img/accesorios/35.jpg", price: 9.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 134,
    name: "Cartuchera Pescado Oscuro",
    category: "accesorios",
    price: 12.00,
    oldPrice: 17.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/accesorios/36.jpg",
    desc: "1 compartimiento, material Poliéster, estilo Cartuchera Large.",
    bullets: ["1 compartimiento", "Material: Poliéster", "Medidas: 23cm x 10cm x 3cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Pescado Oscuro", img: "img/accesorios/36.jpg", price: 12.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 135,
    name: "Llavero Peluche Oso",
    category: "accesorios",
    price: 4.00,
    oldPrice: 6.00,
    rating: "4.7 (7 valoraciones)",
    img: "img/accesorios/37.jpg",
    desc: "Color Crema / Hueso, material Poliéster, estilo Llaverito, Modelo 1.",
    bullets: ["Color: Crema / Hueso", "Material: Poliéster", "Medidas: 11cm x 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Crema", img: "img/accesorios/37.jpg", price: 4.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 136,
    name: "Oso con Corbata",
    category: "accesorios",
    price: 5.00,
    oldPrice: 8.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/accesorios/38.jpg",
    desc: "Color Crema / Hueso, material Poliéster, estilo Llaverito.",
    bullets: ["Color: Crema / Hueso", "Material: Poliéster", "Medidas: 11cm x 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Crema", img: "img/accesorios/38.jpg", price: 5.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 137,
    name: "Llaverito Perlita con Corazon",
    category: "accesorios",
    price: 7.00,
    oldPrice: 10.00,
    rating: "4.8 (7 valoraciones)",
    img: "img/accesorios/40.jpg",
    desc: "Color Crema / Hueso, material Poliéster, estilo Llaverito.",
    bullets: ["Color: Crema / Hueso", "Material: Poliéster", "Medidas: 12cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Crema", img: "img/accesorios/40.jpg", price: 7.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 138,
    name: "Lazo de Perlitas",
    category: "accesorios",
    price: 9.00,
    oldPrice: 13.00,
    rating: "4.9 (9 valoraciones)",
    img: "img/accesorios/39.jpg",
    desc: "Color Crema / Hueso, material Poliéster, estilo Llaverito.",
    bullets: ["Color: Crema / Hueso", "Material: Poliéster", "Medidas: 11cm x 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Crema", img: "img/accesorios/39.jpg", price: 9.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 139,
    name: "Llaverito Estrella",
    category: "accesorios",
    price: 5.00,
    oldPrice: 8.00,
    rating: "4.7 (6 valoraciones)",
    img: "img/accesorios/41.jpg",
    desc: "Color Crema / Hueso, material Poliéster, estilo Llaverito.",
    bullets: ["Color: Crema / Hueso", "Material: Poliéster", "Medidas: 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Crema", img: "img/accesorios/41.jpg", price: 5.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 140,
    name: "Llaverito Triple Totoro",
    category: "accesorios",
    price: 5.00,
    oldPrice: 8.00,
    rating: "4.9 (11 valoraciones)",
    img: "img/accesorios/42.jpg",
    desc: "Color Crema / Hueso, material Poliéster, estilo Llaverito.",
    bullets: ["Color: Crema / Hueso", "Material: Poliéster", "Medidas: 23cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Crema", img: "img/accesorios/42.jpg", price: 5.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 141,
    name: "Peluchito Gato",
    category: "accesorios",
    price: 7.00,
    oldPrice: 10.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/accesorios/43.jpg",
    desc: "Color Crema / Hueso, material Poliéster, estilo Llaverito.",
    bullets: ["Color: Crema / Hueso", "Material: Poliéster", "Medidas: 10cm x 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Crema", img: "img/accesorios/43.jpg", price: 7.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 142,
    name: "Peluchito Gato Negro",
    category: "accesorios",
    price: 7.00,
    oldPrice: 10.00,
    rating: "4.8 (8 valoraciones)",
    img: "img/accesorios/44.jpg",
    desc: "Color Negro, material Poliéster, estilo Llaverito.",
    bullets: ["Color: Negro", "Material: Poliéster", "Medidas: 10cm x 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Negro", img: "img/accesorios/44.jpg", price: 7.00, status: "disponible" }],
    lookbookImages: []
  },
  {
    id: 143,
    name: "Peluchito Gato Blanco",
    category: "accesorios",
    price: 5.00,
    oldPrice: 8.00,
    rating: "4.7 (6 valoraciones)",
    img: "img/accesorios/45.jpg",
    desc: "Color Blanco, material Poliéster, estilo Llaverito.",
    bullets: ["Color: Blanco", "Material: Poliéster", "Medidas: 8cm x 6cm"],
    badge: "Accesorios",
    tagColor: "bg-green-500/15 text-green-700 border-green-500/30",
    sizes: [],
    variants: [{ name: "Blanco", img: "img/accesorios/45.jpg", price: 5.00, status: "disponible" }],
    lookbookImages: []
  }
];

let cart = JSON.parse(localStorage.getItem('milenio_cart')) || [];
let currentSlideIdx = 0;
let currentShippingType = 'domicilio';
let pinConfig = { title: 'Pin Retro Vintage #01', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80', qty: 1 };
let selectedModalProduct = null;
let currentSelectedVariant = null;
let currentSelectedSize = 'única';
let currentModalQty = 1;
let currentModalPrice = 89.00;

const presetPins = [
  { title: 'Pin Retro Y2K Star', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80' },
  { title: 'Pin Skull Streetwear', img: 'https://images.unsplash.com/photo-1543852766-1cf662469987?auto=format&fit=crop&w=400&q=80' },
  { title: 'Pin Dusk Sunset', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80' },
  { title: 'Pin Vintage Logo MV', img: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=400&q=80' },
  { title: 'Pin Cyberpunk Neon', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80' },
  { title: 'Pin Abstract Art', img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80' },
  { title: 'Pin Rose Gold Dusk', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80' },
  { title: 'Pin Skate Culture', img: 'https://images.unsplash.com/photo-1547447134-cd3f5c716bb3?auto=format&fit=crop&w=400&q=80' }
];

const estacionesLinea1 = [
  "Bayóvar", "Pirámide del Sol", "Los Jardines", "Santa Rosa", "San Carlos", 
  "San Martín", "La Cultura", "Arriola", "Gamarra", "El Ángel", "Presbítero Maestro", 
  "Miguel Grau", "Cultura", "San Borja Sur", "Angamos", "Cabitos", "Ayacucho", 
  "San Juan", "Atocongo", "Jabalí", "Pumacahua", "Villa María", "Parque Industrial", "Villa El Salvador"
];
const estacionesMetropolitano = [
  "Naranjal", "Izaguirre", "Palmeras", "Los Alisos", "Dominicos", "Universitaria", 
  "Tomás Valle", "El Milagro", "Honduras", "Caquetá", "Dos de Mayo", "Central", 
  "Estadio Nacional", "México", "Canadá", "Arriola", "Javier Prado", "Angamos", 
  "Ricardo Palma", "Benavides", "28 de Julio", "Plaza de Flores", "Balta", "Bulevar", "Matellini"
];

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeProductModal();
    closeProductZoom();
    closePinZoomModal();
    closePolicyModal();
    closeClaimsModal();
    const cartDrawer = document.getElementById('cart-drawer');
    if (cartDrawer && !cartDrawer.classList.contains('hidden')) {
      toggleCart();
    }
  }
});

const policyData = {
  privacy: {
    title: "Políticas de Privacidad",
    content: `
      <p>En <strong>Milenio Vintage</strong> (marca Dusk), protegemos estrictamente sus datos personales conforme a la Ley N° 29733 de Protección de Datos Personales.</p>
      <p><strong>1. Información recopilada:</strong> Recopilamos nombre, número de teléfono, dirección de envío y correo electrónico únicamente con el propósito de procesar y despachar sus pedidos.</p>
      <p><strong>2. Uso y confidencialidad:</strong> Sus datos son compartidos únicamente con nuestros operadores logísticos autorizados (Olva Courier, Shalom, Marvisur) para garantizar la entrega puntual.</p>
      <p><strong>3. Seguridad:</strong> Implementamos medidas técnicas para resguardar su información frente a accesos no autorizados.</p>
    `
  },
  shipping: {
    title: "Políticas de Envío",
    content: `
      <p><strong>1. Tiempos de entrega:</strong> En Lima Metropolitana, los envíos a domicilio o estaciones de Lima Metro / Metropolitano se realizan en un plazo de 2 a 4 días hábiles tras la confirmación del pago.</p>
      <p><strong>2. Envíos a Provincia:</strong> Se despachan a través de agencias de confianza (Shalom, Olva Courier, Marvisur, Civa) con guía de seguimiento facilitada vía WhatsApp.</p>
      <p><strong>3. Costos:</strong> Los costos varían según el destino y el método seleccionado al finalizar la compra.</p>
    `
  },
  returns: {
    title: "Políticas de Cambios y Devoluciones",
    content: `
      <p><strong>1. Plazo y condiciones:</strong> No realizamos devoluciones en dinero. Se aceptan cambios dentro de los <strong>24 horas</strong> posteriores a la recepción únicamente por errores en el pedido o defectos de fabricación demostrables con foto o video.</p>
      <p><strong>2. Estado del producto:</strong> El artículo debe conservar sus etiquetas originales, embalaje y sin uso previo.</p>
    `
  }
};

function openPolicy(type) {
  const policy = policyData[type];
  if (!policy) return;
  document.getElementById('policy-modal-title').textContent = policy.title;
  document.getElementById('policy-modal-body').innerHTML = policy.content;
  document.getElementById('policy-modal').classList.remove('hidden');
}
function closePolicyModal() {
  document.getElementById('policy-modal').classList.add('hidden');
}
function openClaimsModal() {
  document.getElementById('claims-modal').classList.remove('hidden');
}
function closeClaimsModal() {
  document.getElementById('claims-modal').classList.add('hidden');
}
function submitClaimWhatsApp() {
  const nombre = document.getElementById('claim-nombre').value;
  const dni = document.getElementById('claim-dni').value;
  const tel = document.getElementById('claim-tel').value;
  const email = document.getElementById('claim-email').value;
  const tipo = document.getElementById('claim-tipo').value;
  const pedido = document.getElementById('claim-pedido').value || 'N/A';
  const detalle = document.getElementById('claim-detalle').value;

  let msg = `[LIBRO DE RECLAMACIONES VIRTUAL - LEY N° 29571]\n\n`;
  msg += `*Nombre:* ${nombre}\n`;
  msg += `*DNI/CE:* ${dni}\n`;
  msg += `*Teléfono:* ${tel}\n`;
  msg += `*Correo:* ${email}\n`;
  msg += `*Tipo:* ${tipo}\n`;
  msg += `*Pedido:* ${pedido}\n`;
  msg += `*Detalle:* ${detalle}\n\n`;
  msg += `Solicito atención y respuesta en el plazo legal establecido (2 días hábiles).`;

  window.open(`https://wa.me/51926412894?text=${encodeURIComponent(msg)}`, '_blank');
  closeClaimsModal();
}

function goToSlide(idx) {
  currentSlideIdx = idx;
  const slides = document.querySelectorAll('.onboarding-slide');
  const dots = document.querySelectorAll('#onboarding-dots button');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  slides.forEach((slide, i) => {
    if (i === idx) {
      slide.classList.remove('hidden');
      setTimeout(() => {
        slide.classList.remove('opacity-0', 'translate-x-10');
        slide.classList.add('opacity-100', 'translate-x-0');
      }, 50);
    } else {
      slide.classList.add('opacity-0', 'translate-x-10');
      setTimeout(() => slide.classList.add('hidden'), 300);
    }
  });
  
  dots.forEach((dot, i) => {
    dot.className = (i === idx) ? "w-6 sm:w-8 h-2 rounded-full bg-cyan-500 transition-all cursor-pointer shadow-sm" : "w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400 transition-all cursor-pointer";
  });
  
  if (idx === 0) prevBtn.classList.add('hidden'); else prevBtn.classList.remove('hidden');
  if (idx === 2) nextBtn.innerHTML = '¡Empezar! <i class="fa-solid fa-check ml-1"></i>';
  else nextBtn.innerHTML = 'Siguiente <i class="fa-solid fa-arrow-right ml-1"></i>';
}
function nextSlide() {
  if (currentSlideIdx < 2) goToSlide(currentSlideIdx + 1);
  else closeOnboarding();
}
function prevSlide() {
  if (currentSlideIdx > 0) goToSlide(currentSlideIdx - 1);
}
function closeOnboarding() {
  const modal = document.getElementById('onboarding-modal');
  modal.classList.add('opacity-0', 'scale-95');
  setTimeout(() => modal.remove(), 400);
}
function switchTab(tabId) {
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));
  const target = document.getElementById('view-' + tabId);
  if (target) target.classList.remove('hidden');
  
  document.querySelectorAll('.nav-link').forEach(btn => {
    const isBox = btn.dataset.target === 'box';
    const isPreventa = btn.dataset.target === 'preventa';
    if (btn.dataset.target === tabId) {
      if (isBox) btn.className = "nav-link px-3.5 py-2 rounded-xl transition text-emerald-700 bg-emerald-500/25 border border-emerald-500 font-extrabold shadow-md cursor-pointer";
      else if (isPreventa) btn.className = "nav-link px-3.5 py-2 rounded-xl transition text-amber-700 bg-amber-500/25 border border-amber-500 font-extrabold shadow-md cursor-pointer";
      else btn.className = "nav-link px-3.5 py-2 rounded-xl transition text-cyan-700 bg-cyan-500/15 font-semibold cursor-pointer border border-cyan-500/30";
    } else {
      if (isBox) btn.className = "nav-link px-3.5 py-2 rounded-xl transition text-emerald-700 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border border-emerald-500/40 font-bold shadow-sm animate-pulse-badge flex items-center gap-1.5 cursor-pointer";
      else if (isPreventa) btn.className = "nav-link px-3.5 py-2 rounded-xl transition text-amber-700 bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/40 font-bold shadow-sm animate-pulse-badge flex items-center gap-1.5 cursor-pointer";
      else btn.className = "nav-link px-3.5 py-2 rounded-xl transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer";
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}
function renderApp() {
  const highlightSections = [
    { sec: 'morrales', title: 'Morrales Artesanales', color: 'border-cyan-500/40 bg-gradient-to-br from-cyan-50 to-white' },
    { sec: 'mochilas', title: 'Mochilas Urbanas', color: 'border-blue-500/40 bg-gradient-to-br from-blue-50 to-white' },
    { sec: 'bolsos', title: 'Bolsos y Carteras', color: 'border-purple-500/40 bg-gradient-to-br from-purple-50 to-white' }
  ];
  
  document.getElementById('highlights-grid').innerHTML = highlightSections.map(item => {
    const prod = products.find(p => p.category === item.sec);
    if (!prod) return '';
    return `
      <div class="glass-card rounded-2xl sm:rounded-3xl p-2 sm:p-6 border ${item.color} card-3d flex flex-col justify-between space-y-2 sm:space-y-4 bg-white/90">
        <div class="space-y-1.5 sm:space-y-3">
          <div class="flex items-center justify-between">
            <span class="px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-xs font-bold bg-slate-100 text-slate-700 truncate">${item.title}</span>
          </div>
          <div onclick="openProductModal(${prod.id})" class="w-full rounded-xl sm:rounded-2xl overflow-hidden glass-card p-1 sm:p-2 border border-slate-200 bg-slate-50 card-3d cursor-pointer">
            <img src="${prod.img}" alt="${prod.name}" class="aspect-square-custom rounded-lg sm:rounded-xl hover:scale-105 transition duration-300">
          </div>
          <h3 class="text-[11px] sm:text-lg font-bold font-display text-slate-900 line-clamp-1">${prod.name}</h3>
          <p class="text-slate-600 text-[9px] sm:text-xs line-clamp-2">${prod.desc}</p>
        </div>
        <div class="flex items-center justify-between pt-2 sm:pt-4 border-t border-slate-200">
          <span class="text-[11px] sm:text-lg font-extrabold text-cyan-600 font-display">S/ ${prod.price.toFixed(2)}</span>
          <div class="flex gap-1 sm:gap-2">
            <button onclick="openProductModal(${prod.id})" class="p-1 sm:p-2.5 rounded-xl glass-card text-slate-700 hover:text-slate-900 border border-slate-300 cursor-pointer card-3d"><i class="fa-solid fa-eye text-[10px] sm:text-sm"></i></button>
            <button onclick="addToCart(${prod.id})" class="px-2 py-1.5 sm:px-4 sm:py-2.5 rounded-xl bg-cyan-600 text-white font-bold text-[10px] sm:text-xs hover:bg-cyan-500 transition flex items-center gap-1 cursor-pointer card-3d"><i class="fa-solid fa-cart-plus"></i> <span class="hidden sm:inline">Añadir</span></button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  renderCatalogGrid(products);
  renderSpecialSubSections();
  renderPinsGrid();
  updatePinPricingUI();
}
function renderCatalogGrid(list) {
  document.getElementById('products-container').innerHTML = list.map(prod => `
    <div class="glass-card rounded-2xl p-2 sm:p-4 border border-slate-200 card-3d flex flex-col justify-between space-y-2 sm:space-y-3 bg-white/90">
      <div class="space-y-1.5 sm:space-y-2">
        <div class="flex items-center justify-between">
          <span class="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider ${prod.tagColor}">${prod.badge}</span>
        </div>
        <div onclick="openProductModal(${prod.id})" class="w-full rounded-xl overflow-hidden glass-card p-1 border border-slate-200 bg-slate-50 card-3d cursor-pointer">
          <img src="${prod.img}" alt="${prod.name}" class="aspect-square-custom rounded-lg hover:scale-105 transition duration-300">
        </div>
        <h3 class="text-[11px] sm:text-base font-bold font-display text-slate-900 line-clamp-1">${prod.name}</h3>
        <p class="text-slate-600 text-[10px] sm:text-xs line-clamp-2">${prod.desc}</p>
      </div>
      <div class="flex items-center justify-between pt-2 sm:pt-3 border-t border-slate-200">
        <span class="text-[11px] sm:text-base font-extrabold text-cyan-600 font-display">S/ ${prod.price.toFixed(2)}</span>
        <div class="flex gap-1">
          <button onclick="openProductModal(${prod.id})" class="p-1 sm:p-2 rounded-xl glass-card text-slate-700 hover:text-slate-900 border border-slate-300 cursor-pointer card-3d"><i class="fa-solid fa-eye text-[10px] sm:text-xs"></i></button>
          <button onclick="addToCart(${prod.id})" class="px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-cyan-600 text-white font-bold text-[10px] sm:text-xs hover:bg-cyan-500 transition cursor-pointer card-3d"><i class="fa-solid fa-cart-plus"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}
function filterCatalog(category) {
  document.querySelectorAll('.cat-tab').forEach(btn => {
    const isBox = btn.textContent.includes('Box Especial');
    const isPreventa = btn.textContent.includes('Preventa');
    const isTarget = (category === 'todos' && btn.textContent.toLowerCase().includes('todos')) || btn.textContent.toLowerCase().includes(category);
    if (isTarget) {
      if (isBox) btn.className = "cat-tab px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-emerald-700 text-white shadow-lg transition shrink-0 cursor-pointer card-3d";
      else if (isPreventa) btn.className = "cat-tab px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-amber-700 text-white shadow-lg transition shrink-0 cursor-pointer card-3d";
      else btn.className = "cat-tab px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white transition shrink-0 cursor-pointer card-3d";
    } else {
      if (isBox) btn.className = "cat-tab px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30 animate-pulse-badge transition shrink-0 flex items-center gap-1.5 cursor-pointer card-3d";
      else if (isPreventa) btn.className = "cat-tab px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-600/30 animate-pulse-badge transition shrink-0 flex items-center gap-1.5 cursor-pointer card-3d";
      else btn.className = "cat-tab px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold glass-card text-slate-700 hover:text-slate-900 transition shrink-0 cursor-pointer card-3d";
    }
  });
  if (category === 'todos') renderCatalogGrid(products);
  else renderCatalogGrid(products.filter(p => p.category === category));
}
function renderSpecialSubSections() {
  document.getElementById('box-container').innerHTML = products.filter(p => p.category === 'box').map(prod => `
    <div class="glass-card rounded-3xl p-4 sm:p-5 border-2 border-emerald-500/40 card-3d flex flex-col justify-between space-y-3 sm:space-y-4 bg-white/90 hover:border-emerald-500 transition shadow-lg">
      <div class="space-y-2.5 sm:space-y-3">
        <div onclick="openProductModal(${prod.id})" class="w-full rounded-2xl overflow-hidden glass-card p-1.5 sm:p-2 border border-emerald-200 bg-emerald-50/50 card-3d cursor-pointer">
          <img src="${prod.img}" alt="${prod.name}" class="aspect-square-custom rounded-xl">
        </div>
        <h3 class="text-sm sm:text-base font-bold font-display text-slate-900">${prod.name}</h3>
        <p class="text-slate-600 text-[11px] sm:text-xs">${prod.desc}</p>
      </div>
      <div class="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-200">
        <span class="text-base sm:text-lg font-extrabold text-emerald-600 font-display">S/ ${prod.price.toFixed(2)}</span>
        <button onclick="addToCart(${prod.id})" class="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-[11px] sm:text-xs shadow-md hover:scale-105 transition flex items-center gap-1.5 cursor-pointer card-3d"><i class="fa-solid fa-gift"></i> Añadir</button>
      </div>
    </div>
  `).join('');
  document.getElementById('preventa-container').innerHTML = products.filter(p => p.category === 'preventa').map(prod => `
    <div class="glass-card rounded-3xl p-4 sm:p-5 border-2 border-amber-500/40 card-3d flex flex-col justify-between space-y-3 sm:space-y-4 bg-white/90 hover:border-amber-500 transition shadow-lg">
      <div class="space-y-2.5 sm:space-y-3">
        <div onclick="openProductModal(${prod.id})" class="w-full rounded-2xl overflow-hidden glass-card p-1.5 sm:p-2 border border-amber-200 bg-amber-50/50 card-3d cursor-pointer">
          <img src="${prod.img}" alt="${prod.name}" class="aspect-square-custom rounded-xl">
        </div>
        <h3 class="text-sm sm:text-base font-bold font-display text-slate-900">${prod.name}</h3>
        <p class="text-slate-600 text-[11px] sm:text-xs">${prod.desc}</p>
      </div>
      <div class="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-200">
        <span class="text-base sm:text-lg font-extrabold text-amber-600 font-display">S/ ${prod.price.toFixed(2)}</span>
        <button onclick="addToCart(${prod.id})" class="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-[11px] sm:text-xs shadow-md hover:scale-105 transition flex items-center gap-1.5 cursor-pointer card-3d"><i class="fa-solid fa-bolt"></i> Reservar</button>
      </div>
    </div>
  `).join('');
}
function renderPinsGrid() {
  document.getElementById('pins-preset-grid').innerHTML = presetPins.map(pin => `
    <div onclick="openPinZoom('${pin.title}','${pin.img}')" class="glass-card rounded-2xl p-2.5 sm:p-3 border border-slate-200 hover:border-purple-500 transition cursor-pointer flex flex-col items-center space-y-2 group bg-white card-3d">
      <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-purple-500/40 group-hover:scale-105 transition flex items-center justify-center bg-slate-950 card-3d">
        <img src="${pin.img}" alt="${pin.title}" class="aspect-square-custom rounded-full">
      </div>
      <span class="text-[10px] sm:text-[11px] font-semibold text-slate-700 text-center truncate w-full">${pin.title}</span>
    </div>
  `).join('');
}
let zoomPinData = { title: "", img: "" };
function openPinZoom(title, imgUrl) {
  zoomPinData = { title, img: imgUrl };
  document.getElementById('zoom-pin-title').textContent = title;
  document.getElementById('zoom-pin-img').src = imgUrl;
  document.getElementById('pin-zoom-modal').classList.remove('hidden');
}
function closePinZoomModal() {
  document.getElementById('pin-zoom-modal').classList.add('hidden');
}
function applyZoomPin() {
  pinConfig.title = zoomPinData.title;
  pinConfig.img = zoomPinData.img;
  document.getElementById('pin-preview-img').src = zoomPinData.img;
  document.getElementById('pin-title-display').textContent = zoomPinData.title;
  closePinZoomModal();
}

function openProductZoom() {
  const mainImgSrc = document.getElementById('modal-main-img').src;
  const productName = document.getElementById('modal-name').textContent;
  const variantText = document.getElementById('modal-variant-badge-text').textContent;
  document.getElementById('zoom-product-img').src = mainImgSrc;
  document.getElementById('zoom-product-title').textContent = `${productName} (${variantText})`;
  document.getElementById('product-zoom-modal').classList.remove('hidden');
}
function closeProductZoom() {
  document.getElementById('product-zoom-modal').classList.add('hidden');
}

function setModalTab(tabName) {
  const tabGaleria = document.getElementById('modal-content-galeria');
  const tabLookbook = document.getElementById('modal-content-lookbook');
  const btnGaleria = document.getElementById('modal-tab-galeria');
  const btnLookbook = document.getElementById('modal-tab-lookbook');
  if (tabName === 'galeria') {
    tabGaleria.classList.remove('hidden');
    tabLookbook.classList.add('hidden');
    btnGaleria.className = "px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white transition-all flex items-center gap-1.5 sm:gap-2 shadow-lg cursor-pointer card-3d";
    btnLookbook.className = "px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer card-3d";
  } else {
    tabGaleria.classList.add('hidden');
    tabLookbook.classList.remove('hidden');
    btnLookbook.className = "px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white transition-all flex items-center gap-1.5 sm:gap-2 shadow-lg cursor-pointer card-3d";
    btnGaleria.className = "px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer card-3d";
  }
}
function addHeroToCart() { addToCart(products[0].id); }
function addSpecialBox() { const box = products.find(p => p.category === 'box'); if (box) addToCart(box.id); }
function addPreventaItem() { const prev = products.find(p => p.category === 'preventa'); if (prev) addToCart(prev.id); }

function openProductModal(id) {
  selectedModalProduct = products.find(p => p.id === id) || products[0];
  currentModalQty = 1;
  currentModalPrice = selectedModalProduct.price;
  document.getElementById('modal-name').textContent = selectedModalProduct.name;
  document.getElementById('modal-desc').textContent = selectedModalProduct.desc;
  document.getElementById('modal-category').textContent = selectedModalProduct.category.toUpperCase();
  document.getElementById('modal-rating').textContent = selectedModalProduct.rating || "5.0 (420 valoraciones)";
  document.getElementById('modal-price').textContent = `S/ ${selectedModalProduct.price.toFixed(2)}`;
  document.getElementById('modal-old-price').textContent = `S/ ${(selectedModalProduct.oldPrice || selectedModalProduct.price * 1.35).toFixed(2)}`;
  
  const bulletsContainer = document.getElementById('modal-bullets');
  if (selectedModalProduct.bullets && selectedModalProduct.bullets.length > 0) {
    bulletsContainer.innerHTML = selectedModalProduct.bullets.map(b => `<div class="flex items-center gap-2"><i class="fa-solid fa-check text-cyan-600"></i><span>${b}</span></div>`).join('');
    bulletsContainer.classList.remove('hidden');
  } else {
    bulletsContainer.classList.add('hidden');
  }
  
  const variantsSection = document.getElementById('modal-variants-section');
  const variantsGrid = document.getElementById('modal-variants-grid');
  
  if (selectedModalProduct.variants && selectedModalProduct.variants.length > 0) {
    variantsSection.classList.remove('hidden');
    currentSelectedVariant = selectedModalProduct.variants[0];
    
    variantsGrid.innerHTML = selectedModalProduct.variants.map((v, idx) => {
      let statusBadge = '';
      if (v.status === 'agotado') {
        statusBadge = `<span class="absolute top-1.5 right-1.5 z-10 px-2 py-0.5 rounded-md text-[8px] sm:text-[9px] font-bold bg-rose-600 text-white shadow-md">Agotado</span>`;
      } else if (v.status === 'bajo pedido') {
        statusBadge = `<span class="absolute top-1.5 right-1.5 z-10 px-2 py-0.5 rounded-md text-[8px] sm:text-[9px] font-bold bg-amber-500 text-white shadow-md">Bajo pedido</span>`;
      } else {
        statusBadge = `<span class="absolute top-1.5 right-1.5 z-10 px-2 py-0.5 rounded-md text-[8px] sm:text-[9px] font-bold bg-emerald-600 text-white shadow-md">Disponible</span>`;
      }

      return `
        <div onclick="selectModalVariant(${idx})" id="modal-variant-card-${idx}" class="modal-var-card cursor-pointer rounded-xl p-1.5 sm:p-2 bg-slate-100 border-2 ${idx === 0 ? 'border-cyan-500 bg-cyan-50 shadow-md' : 'border-slate-300 hover:border-cyan-400'} transition flex flex-col items-center space-y-1 group card-3d">
          <div class="relative w-full aspect-square-custom rounded-lg overflow-hidden bg-white border border-slate-200">
            ${statusBadge}
            <img src="${v.img}" alt="${v.name}" class="w-full h-full object-cover group-hover:scale-105 transition">
          </div>
          <div class="text-center w-full">
            <span class="text-[10px] sm:text-[11px] font-bold text-slate-900 block truncate">${v.name}</span>
            <span class="text-[9px] text-cyan-600 font-mono font-bold">S/ ${v.price.toFixed(2)}</span>
          </div>
        </div>
      `;
    }).join('');
    
    document.getElementById('modal-main-img').src = currentSelectedVariant.img;
    document.getElementById('modal-variant-badge-text').textContent = `Modelo: ${currentSelectedVariant.name}`;
    currentModalPrice = currentSelectedVariant.price;
    document.getElementById('modal-price').textContent = `S/ ${currentModalPrice.toFixed(2)}`;
    updateAddButtonStatus(currentSelectedVariant.status);
  } else {
    variantsSection.classList.add('hidden');
    currentSelectedVariant = null;
    document.getElementById('modal-main-img').src = selectedModalProduct.img;
    document.getElementById('modal-variant-badge-text').textContent = `Modelo: Alpha`;
    updateAddButtonStatus('disponible');
  }
  
  const sizesSection = document.getElementById('modal-sizes-section');
  const sizesGrid = document.getElementById('modal-sizes-grid');
  if (selectedModalProduct.sizes && selectedModalProduct.sizes.length > 0) {
    sizesSection.classList.remove('hidden');
    document.getElementById('modal-sizes-label').textContent = selectedModalProduct.category === 'mochilas' ? '2. Selecciona talla mochila:' : '2. Selecciona tamaño exacto:';
    
    sizesGrid.innerHTML = selectedModalProduct.sizes.map((s, idx) => `
      <div onclick="selectModalSize('${s.name}', ${s.price})" class="modal-size-box cursor-pointer rounded-xl p-2 sm:p-2.5 text-center border-2 ${s.name.includes('M') || idx === 0 ? 'border-cyan-500 bg-cyan-50 text-cyan-900 ring-1 ring-cyan-400/30' : 'border-slate-300 hover:border-cyan-400 bg-slate-100 text-slate-800'} transition card-3d">
        <span class="text-[11px] sm:text-xs font-bold block">Talla ${s.name}</span>
        <span class="text-[8px] sm:text-[9px] text-slate-500 block font-mono leading-tight mt-0.5">${s.dim}</span>
        <span class="text-[10px] text-cyan-600 font-mono font-bold block mt-1">S/ ${s.price.toFixed(2)}</span>
      </div>
    `).join('');
    const defaultSize = selectedModalProduct.sizes.find(s => s.name.includes('M')) || selectedModalProduct.sizes[0];
    currentSelectedSize = defaultSize.name;
    currentModalPrice = defaultSize.price;
    document.getElementById('modal-price').textContent = `S/ ${currentModalPrice.toFixed(2)}`;
  } else {
    sizesSection.classList.add('hidden');
    currentSelectedSize = 'única';
    if (!selectedModalProduct.variants || selectedModalProduct.variants.length === 0) {
      currentModalPrice = selectedModalProduct.price;
      document.getElementById('modal-price').textContent = `S/ ${currentModalPrice.toFixed(2)}`;
    }
  }

  const lookbookGrid = document.getElementById('modal-lookbook-grid');
  const lbImages = selectedModalProduct.lookbookImages && selectedModalProduct.lookbookImages.length > 0 ? selectedModalProduct.lookbookImages : [selectedModalProduct.img];
  lookbookGrid.innerHTML = lbImages.map(imgUrl => `
    <div class="rounded-3xl overflow-hidden bg-white p-2 border border-slate-200 shadow-sm card-3d">
      <img src="${imgUrl}" alt="Lookbook y Outfits" class="aspect-square-custom rounded-2xl object-cover">
    </div>
  `).join('');
  
  const accessoriesGrid = document.getElementById('modal-accessories-grid');
  const recs = [
    { name: 'Morral Cosmic', price: 89.00, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=200&q=80', badge: 'Classic' },
    { name: 'Mochila X-Series', price: 89.00, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=200&q=80', badge: 'Nebula' },
    { name: 'Bolso Red Edition', price: 89.00, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=200&q=80', badge: 'Starburst' }
  ];
  accessoriesGrid.innerHTML = recs.map(acc => `
    <div class="bg-slate-50 rounded-2xl p-2.5 sm:p-3 border border-slate-200 flex flex-col justify-between space-y-2 shadow-sm card-3d">
      <div class="flex flex-col items-center text-center space-y-1">
        <img src="${acc.img}" alt="${acc.name}" class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover border border-slate-200">
        <span class="text-[9px] sm:text-[10px] font-bold text-cyan-600 uppercase">${acc.badge}</span>
        <h4 class="font-bold text-[11px] sm:text-xs text-slate-900 truncate w-full">${acc.name}</h4>
        <span class="text-xs font-extrabold text-cyan-600 font-display">S/ ${acc.price.toFixed(2)}</span>
      </div>
      <button onclick="addAccessoryToCart('${acc.name}', ${acc.price}, '${acc.img}')" class="w-full py-1.5 sm:py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-[11px] sm:text-xs transition flex items-center justify-center gap-1 cursor-pointer card-3d">
        <i class="fa-solid fa-plus"></i> Agregar
      </button>
    </div>
  `).join('');
  setModalTab('galeria');
  updateModalTotalButton();
  document.getElementById('product-modal').classList.remove('hidden');
}

function updateAddButtonStatus(status) {
  const addBtn = document.getElementById('modal-add-btn');
  if (status === 'agotado') {
    addBtn.disabled = true;
    addBtn.className = "flex-1 py-3.5 sm:py-4 rounded-2xl bg-slate-400 text-white font-extrabold text-xs sm:text-sm cursor-not-allowed flex items-center justify-center gap-1.5 sm:gap-2";
    document.getElementById('modal-add-btn-text').textContent = "Diseño Agotado";
  } else if (status === 'bajo pedido') {
    addBtn.disabled = false;
    addBtn.className = "flex-1 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500 text-white font-extrabold text-xs sm:text-sm shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer card-3d";
  } else {
    addBtn.disabled = false;
    addBtn.className = "flex-1 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-cyan-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-cyan-500/30 hover:brightness-110 transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer card-3d";
  }
}

function selectModalVariant(idx) {
  const variants = selectedModalProduct.variants || [];
  currentSelectedVariant = variants[idx];
  if (!currentSelectedVariant) return;
  document.getElementById('modal-main-img').src = currentSelectedVariant.img;
  document.getElementById('modal-variant-badge-text').textContent = `Modelo: ${currentSelectedVariant.name}`;
  
  currentModalPrice = currentSelectedVariant.price;
  document.getElementById('modal-price').textContent = `S/ ${currentModalPrice.toFixed(2)}`;

  updateAddButtonStatus(currentSelectedVariant.status);

  variants.forEach((_, i) => {
    const card = document.getElementById(`modal-variant-card-${i}`);
    if (card) {
      if (i === idx) {
        card.className = "modal-var-card cursor-pointer rounded-xl p-1.5 sm:p-2 bg-slate-100 border-2 border-cyan-500 bg-cyan-50 shadow-md transition flex flex-col items-center space-y-1 group card-3d";
      } else {
        card.className = "modal-var-card cursor-pointer rounded-xl p-1.5 sm:p-2 bg-slate-100 border-2 border-slate-300 hover:border-cyan-400 transition flex flex-col items-center space-y-1 group card-3d";
      }
    }
  });
  updateModalTotalButton();
}
function selectModalSize(size, price) {
  currentSelectedSize = size;
  document.querySelectorAll('.modal-size-box').forEach(box => {
    box.className = "modal-size-box cursor-pointer rounded-xl p-2 sm:p-2.5 text-center border-2 border-slate-300 hover:border-cyan-400 transition bg-slate-100 text-slate-800 card-3d";
  });
  event.currentTarget.className = "modal-size-box cursor-pointer rounded-xl p-2 sm:p-2.5 text-center border-2 border-cyan-500 bg-cyan-50 text-cyan-900 ring-1 ring-cyan-400/30 transition card-3d";
  currentModalPrice = price;
  document.getElementById('modal-price').textContent = `S/ ${currentModalPrice.toFixed(2)}`;
  updateModalTotalButton();
}
function updateModalQty(change) {
  currentModalQty = Math.max(1, currentModalQty + change);
  document.getElementById('modal-qty-display').textContent = currentModalQty;
  updateModalTotalButton();
}
function updateModalTotalButton() {
  const total = currentModalPrice * currentModalQty;
  if (!currentSelectedVariant || currentSelectedVariant.status !== 'agotado') {
    document.getElementById('modal-add-btn-text').textContent = `Agregar - S/. ${total.toFixed(2)}`;
  }
}
function closeProductModal() {
  document.getElementById('product-modal').classList.add('hidden');
}
function handleModalBackdropClick(event) {
  if (event.target === document.getElementById('product-modal')) {
    closeProductModal();
  }
}
function addModalItemToCart() {
  if (!selectedModalProduct) return;
  if (currentSelectedVariant && currentSelectedVariant.status === 'agotado') {
    alert("Este diseño se encuentra agotado temporalmente.");
    return;
  }
  const variantName = currentSelectedVariant ? currentSelectedVariant.name : 'Estándar';
  const sizeSuffix = currentSelectedSize !== 'única' ? `, Talla ${currentSelectedSize}` : '';
  const cartKey = `${selectedModalProduct.id}-${variantName}-${currentSelectedSize}`;
  const existing = cart.find(i => i.cartKey === cartKey);
  const fullName = `${selectedModalProduct.name} [${variantName}${sizeSuffix}]`;
  if (existing) {
    existing.qty += currentModalQty;
  } else {
    cart.push({
      cartKey,
      name: fullName,
      price: currentModalPrice,
      qty: currentModalQty,
      img: currentSelectedVariant ? currentSelectedVariant.img : selectedModalProduct.img,
      category: selectedModalProduct.category
    });
  }
  saveCard();
  closeProductModal();
  toggleCart();
}
function addAccessoryToCart(name, price, img) {
  const cartKey = `acc-${name}-${Date.now()}`;
  cart.push({
    cartKey,
    name: `Accesorio: ${name}`,
    price: price,
    qty: 1,
    img: img,
    category: 'accesorios'
  });
  saveCard();
  closeProductModal();
  toggleCart();
}
function handleMorralUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imgEl = document.getElementById('custom-uploaded-img');
      imgEl.src = e.target.result;
      imgEl.classList.remove('hidden');
      document.getElementById('morral-preview-container').classList.add('hidden');
    };
    reader.readAsDataURL(file);
  }
}
function submitMorralWhatsApp() {
  const nombre = document.getElementById('form-nombre').value;
  const whatsapp = document.getElementById('form-whatsapp').value;
  const alto = document.getElementById('form-alto').value || 'N/A';
  const ancho = document.getElementById('form-ancho').value || 'N/A';
  const fuelle = document.getElementById('form-fuelle').value || 'N/A';
  const modelo = document.getElementById('form-modelo').value;
  const desc = document.getElementById('form-desc').value;
  let msg = `¡Hola! Deseo cotizar un morral personalizado en Milenio Vintage:\n\n`;
  msg += `*Nombre:* ${nombre}\n`;
  msg += `*WhatsApp:* ${whatsapp}\n`;
  msg += `*Medidas (Alto x Ancho x Fuelle):* ${alto}cm x ${ancho}cm x ${fuelle}cm\n`;
  msg += `*Modelo de Referencia:* ${modelo}\n`;
  msg += `*Descripción:* ${desc}\n\nQuedo atento(a) a la cotización exacta. ¡Gracias!`;
  window.open(`https://wa.me/51926412894?text=${encodeURIComponent(msg)}`, '_blank');
}
function handlePinUpload(event) {
  const file = event.target.files[0];
  if (file) {
    document.getElementById('upload-filename-display').textContent = file.name;
    const reader = new FileReader();
    reader.onload = function(e) {
      pinConfig.img = e.target.result;
      pinConfig.title = 'Pin Personalizado (Foto Propia)';
      document.getElementById('pin-preview-img').src = e.target.result;
      document.getElementById('pin-title-display').textContent = 'Pin Personalizado';
    };
    reader.readAsDataURL(file);
  }
}
function updatePinQty(change) {
  pinConfig.qty = Math.max(1, pinConfig.qty + change);
  document.getElementById('pin-qty-display').textContent = pinConfig.qty;
  updatePinPricingUI();
}
function hasBagInCart() {
  return cart.some(i => i.category === 'morrales' || i.category === 'mochilas' || i.category === 'bolsos');
}
function getPinUnitPrice(additionalQty = 0) {
  if (hasBagInCart()) return 2.00;
  
  const existingPinQty = cart.filter(i => i.category === 'pines').reduce((sum, item) => sum + item.qty, 0);
  const totalPins = existingPinQty + additionalQty;
  
  if (totalPins >= 10) return 2.50;
  if (totalPins >= 5) return 3.00;
  return 3.50;
}
function normalizePinPricesInCart() {
  const hasBag = hasBagInCart();
  const totalPins = cart.filter(i => i.category === 'pines').reduce((sum, item) => sum + item.qty, 0);
  
  let unitPrice = 3.50;
  if (hasBag) {
    unitPrice = 2.00;
  } else if (totalPins >= 10) {
    unitPrice = 2.50;
  } else if (totalPins >= 5) {
    unitPrice = 3.00;
  }
  
  cart.forEach(item => {
    if (item.category === 'pines') {
      item.price = unitPrice;
    }
  });
}
function updatePinPricingUI() {
  const unitPrice = getPinUnitPrice(pinConfig.qty);
  const total = pinConfig.qty * unitPrice;
  const hasBag = hasBagInCart();
  const existingPinQty = cart.filter(i => i.category === 'pines').reduce((sum, item) => sum + item.qty, 0);
  const totalPinsAccumulated = existingPinQty + pinConfig.qty;
  
  document.getElementById('pin-unit-price-label').textContent = hasBag 
    ? "Precio unitario (Bono Morral/Bolso): S/ 2.00 c/u" 
    : `Precio unitario: S/ ${unitPrice.toFixed(2)} c/u (Total acumulado: ${totalPinsAccumulated} unid.)`;
  document.getElementById('pin-total-price').textContent = `S/ ${total.toFixed(2)}`;
}
function addPinToCart() {
  const unitPrice = getPinUnitPrice(pinConfig.qty);
  cart.push({
    cartKey: 'pin-' + Date.now(),
    name: `Pin 58mm Personalizado (${pinConfig.title}) x${pinConfig.qty}`,
    price: unitPrice,
    qty: pinConfig.qty,
    img: pinConfig.img,
    category: 'pines'
  });
  saveCard();
  toggleCart();
}
function addToCart(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;
  const cartKey = `${prod.id}-standard-única`;
  const existing = cart.find(i => i.cartKey === cartKey);
  if (existing) existing.qty++;
  else cart.push({ cartKey, name: prod.name, price: prod.price, qty: 1, img: prod.img, category: prod.category });
  saveCard();
  toggleCart();
}
function updateCartQty(cartKey, change) {
  const item = cart.find(i => i.cartKey === cartKey);
  if (item) {
    item.qty += change;
    if (item.qty <= 0) cart = cart.filter(i => i.cartKey !== cartKey);
    saveCard();
  }
}
function saveCard() {
  normalizePinPricesInCart();
  localStorage.setItem('milenio_cart', JSON.stringify(cart));
  updateCartUI();
  updatePinPricingUI();
}
function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-counter').textContent = totalCount;
  const container = document.getElementById('cart-items-container');
  if (cart.length === 0) {
    container.innerHTML = '<div class="text-center py-12 space-y-2"><i class="fa-solid fa-bag-shopping text-3xl text-slate-400"></i><p class="text-slate-500 text-xs sm:text-sm">Tu carrito está vacío.</p></div>';
    document.getElementById('cart-subtotal').textContent = 'S/ 0.00';
    document.getElementById('cart-total').textContent = 'S/ 0.00';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="glass-card rounded-2xl p-3 sm:p-4 border border-slate-200 flex items-center gap-3 sm:gap-4 bg-white/90">
      <img src="${item.img}" alt="${item.name}" class="w-14 h-14 sm:w-16 sm:h-16 aspect-square-custom object-cover rounded-xl border border-slate-200">
      <div class="flex-1 min-w-0">
        <h4 class="text-xs sm:text-sm font-bold text-slate-900 truncate">${item.name}</h4>
        <span class="text-[11px] sm:text-xs text-cyan-600 font-semibold font-display">S/ ${(item.price * item.qty).toFixed(2)} <span class="text-[9px] text-slate-400">(S/ ${item.price.toFixed(2)} c/u)</span></span>
      </div>
      <div class="flex items-center gap-1.5 sm:gap-2">
        <button onclick="updateCartQty('${item.cartKey}', -1)" class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg glass-card text-slate-800 border border-slate-300 flex items-center justify-center text-xs hover:bg-slate-100 cursor-pointer card-3d">-</button>
        <span class="text-xs font-bold text-slate-900">${item.qty}</span>
        <button onclick="updateCartQty('${item.cartKey}', 1)" class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg glass-card text-slate-800 border border-slate-300 flex items-center justify-center text-xs hover:bg-slate-100 cursor-pointer card-3d">+</button>
      </div>
    </div>
  `).join('');
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById('cart-subtotal').textContent = `S/ ${subtotal.toFixed(2)}`;
  document.getElementById('cart-total').textContent = `S/ ${subtotal.toFixed(2)}`;
}
function toggleCart() {
  document.getElementById('cart-drawer').classList.toggle('hidden');
}
function proceedToCheckout() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  toggleCart();
  switchTab('checkout');
  renderCheckoutSummary();
  setShippingType('domicilio');
}
function setShippingType(type) {
  currentShippingType = type;
  ['domicilio', 'estacion', 'provincia'].forEach(t => {
    const card = document.getElementById(`ship-card-${t}`);
    if (t === type) {
      card.className = "ship-card border-2 border-cyan-500 bg-cyan-50 rounded-2xl p-3.5 sm:p-4 cursor-pointer text-center space-y-1.5 sm:space-y-2 transition shadow-sm card-3d";
    } else {
      card.className = "ship-card border-2 border-slate-200 hover:border-slate-300 rounded-2xl p-3.5 sm:p-4 cursor-pointer text-center space-y-1.5 sm:space-y-2 transition card-3d";
    }
  });
  const container = document.getElementById('shipping-details-container');
  if (type === 'domicilio') {
    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Dirección <span class="text-red-500">*</span></label>
          <input type="text" id="chk-dir" placeholder="Av. / Jr. / Calle Nro" required class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500">
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Distrito <span class="text-red-500">*</span></label>
          <input type="text" id="chk-dist" placeholder="Ej. Lima, Miraflores..." required class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500">
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Referencia <span class="text-red-500">*</span></label>
        <input type="text" id="chk-ref" placeholder="Ej. A espalda de parque / Cerca a comisaría" required class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500">
      </div>
    `;
  } else if (type === 'estacion') {
    const optsLinea1 = estacionesLinea1.map(e => `<option value="Línea 1 - ${e}">${e}</option>`).join('');
    const optsMetropolitano = estacionesMetropolitano.map(e => `<option value="Metropolitano - ${e}">${e}</option>`).join('');
    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Sistema de Transporte <span class="text-red-500">*</span></label>
          <select id="chk-sistema-transporte" onchange="toggleEstacionList()" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500">
            <option value="linea1">Tren Eléctrico (Línea 1)</option>
            <option value="metropolitano">Metropolitano</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Estación Oficial <span class="text-red-500">*</span></label>
          <select id="chk-estacion-oficial" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500">
            ${optsLinea1}
          </select>
        </div>
      </div>
    `;
  } else if (type === 'provincia') {
    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Agencia de Encomienda <span class="text-red-500">*</span></label>
          <select id="chk-agencia" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500">
            <option value="Shalom">Shalom</option>
            <option value="Olva Courier">Olva Courier</option>
            <option value="Marvisur">Marvisur</option>
            <option value="Civa">Civa</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Ciudad / Departamento <span class="text-red-500">*</span></label>
          <input type="text" id="chk-ciudad" placeholder="Ej. Arequipa, Trujillo..." required class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500">
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Oficina / Agencia Destino <span class="text-red-500">*</span></label>
          <input type="text" id="chk-oficina" placeholder="Ej. Agencia Principal" required class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500">
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">DNI Receptor <span class="text-red-500">*</span></label>
          <input type="text" id="chk-dni" placeholder="Nro de DNI para recojo" required class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500">
        </div>
      </div>
    `;
  }
  renderCheckoutSummary();
}
function toggleEstacionList() {
  const sistema = document.getElementById('chk-sistema-transporte').value;
  const selectEst = document.getElementById('chk-estacion-oficial');
  if (sistema === 'linea1') {
    selectEst.innerHTML = estacionesLinea1.map(e => `<option value="Línea 1 - ${e}">${e}</option>`).join('');
  } else {
    selectEst.innerHTML = estacionesMetropolitano.map(e => `<option value="Metropolitano - ${e}">${e}</option>`).join('');
  }
}
function getShippingFeeCheckout() {
  if (currentShippingType === 'domicilio') return 10.00;
  if (currentShippingType === 'estacion') return 5.00;
  if (currentShippingType === 'provincia') return 18.00;
  return 0.00;
}
function renderCheckoutSummary() {
  const itemsContainer = document.getElementById('checkout-items-summary');
  itemsContainer.innerHTML = cart.map(item => `
    <div class="flex justify-between items-center py-2">
      <span class="text-slate-700">${item.qty}x ${item.name}</span>
      <span class="font-semibold text-slate-900">S/ ${(item.price * item.qty).toFixed(2)}</span>
    </div>
  `).join('');
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const envio = getShippingFeeCheckout();
  const total = subtotal + envio;
  document.getElementById('chk-subtotal').textContent = `S/ ${subtotal.toFixed(2)}`;
  document.getElementById('chk-envio').textContent = `S/ ${envio.toFixed(2)}`;
  document.getElementById('chk-total').textContent = `S/ ${total.toFixed(2)}`;
}
function confirmOrderWhatsApp() {
  const nombre = document.getElementById('chk-nombre').value;
  const whatsapp = document.getElementById('chk-whatsapp').value;
  const pago = document.querySelector('input[name="pago"]:checked').value;
  let envioTexto = "";
  if (currentShippingType === 'domicilio') {
    const dir = document.getElementById('chk-dir').value;
    const dist = document.getElementById('chk-dist').value;
    const ref = document.getElementById('chk-ref').value;
    envioTexto = `Domicilio (Dir: ${dir}, Distrito: ${dist}, Ref: ${ref}) - S/ 10.00`;
  } else if (currentShippingType === 'estacion') {
    const sistema = document.getElementById('chk-sistema-transporte').value;
    const estacion = document.getElementById('chk-estacion-oficial').value;
    envioTexto = `Estación (${sistema}: ${estacion}) - S/ 5.00`;
  } else {
    const agencia = document.getElementById('chk-agencia').value;
    const ciudad = document.getElementById('chk-ciudad').value;
    const oficina = document.getElementById('chk-oficina').value;
    const dni = document.getElementById('chk-dni').value;
    envioTexto = `Provincia (${agencia}, Ciudad: ${ciudad}, Of: ${oficina}, DNI: ${dni}) - S/ 18.00`;
  }
  let message = `¡Hola! Deseo confirmar mi pedido en Milenio Vintage:\n\n`;
  message += `*Cliente:* ${nombre}\n`;
  message += `*WhatsApp:* ${whatsapp}\n\n`;
  message += `*Productos:*\n`;
  cart.forEach((item, idx) => {
    message += `${idx + 1}. ${item.name} (Cant: ${item.qty}) - S/ ${(item.price * item.qty).toFixed(2)}\n`;
  });
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const envio = getShippingFeeCheckout();
  const total = subtotal + envio;
  message += `\n*Método de Envío:* ${envioTexto}`;
  message += `\n*Método de Pago:* ${pago}`;
  message += `\nSubtotal: S/ ${subtotal.toFixed(2)}`;
  message += `\nEnvío: S/ ${envio.toFixed(2)}`;
  message += `\n*Total a Pagar: S/ ${total.toFixed(2)}*`;
  message += `\n\nQuedo atento(a) para el envío de mi comprobante Yape/Plin/Transferencia. ¡Gracias!`;
  window.open(`https://wa.me/51926412894?text=${encodeURIComponent(message)}`, '_blank');
}

window.onload = function() {
  renderApp();
  updateCartUI();
};
