// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const products = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Camiseta Alternativa Authentic Boca Jrs 2024",
    price: 169.999,
    description:
      "La camiseta alternativa de alto rendimiento para usar mientras jugas, hecha parcialmente con materiales reciclados. Inspirada en las banderas boquenses que flamean en La Bombonera. ",
    sexo: "Hombre",
    type: "Futbol",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
    img: ["/Tercer Authentic Camiseta.webp"],
    quantity: 1,
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81ab",
    name: "Short Alternativo Authentic Boca Jrs 24-25",
    price: 74.999,
    description:
      "Entrená como un profesional con el nuevo Short Alternativo 24/25 de Boca Jrs. Short alternativo de Boca Juniors.  ",
    sexo: "Hombre",
    type: "Futbol",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
    img: ["/Tercer Short.webp"],
    quantity: 1,
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81ac",
    name: "Camiseta Alternativa Boca Jrs 24-25",
    price: 89.999,
    description:
      "Lucí la nueva Camiseta Alternativa 24/25 del Xeneize. El diseño de la nueva camiseta alternativa está inspirado en las banderas exhibidas por los hinchas en La Bombonera. ",
    sexo: "Hombre",
    type: "Futbol",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
    img: ["/Tercer Camiseta.webp"],
    quantity: 1,
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81ad",
    name: "Medias Alternativas Boca Jrs 24-25",
    price: 11.999,
    description:
      "Lucí las nuevas medias de fútbol alternativas del Xeneize. Demostrá tus habilidades, completá tu uniforme con las medias alternativas. ",
    sexo: "Hombre",
    type: "Futbol",
    size: ["S", "M", "L", "XL"],
    img: ["/Tercer Media.webp"],
    quantity: 1,
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81ae",
    name: "Short Alternativo Authentic Boca Jrs 24-25",
    price: 74.999,
    description:
      "Entrená como un profesional con el nuevo Short Alternativo 24/25 de Boca Jrs. Short alternativo de Boca Juniors.",
    sexo: "Hombre",
    type: "Fútbol",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
    img: ["/Tercer Authentic Short.webp", "Tercer Authentic Short2.webp"],
    quantity: 1,
  },
  {
    id: "a2b4599e-1e3e-4c61-9c8f-4c3ab32e94a7",
    name: "Camiseta Entrenamiento Boca Jrs 24",
    price: 55.999,
    description:
      "Camiseta de entrenamiento ligera y transpirable, ideal para tus sesiones de fútbol.",
    sexo: "Niños",
    type: "Entrenamiento",
    size: ["7/8A", "9/10A", "11/12A", "13/14A", "15/16A"],
    img: [
      "/Camiseta Entrenamiento Boca.png",
      "Camiseta Entrenamiento Boca2.png",
    ],
    quantity: 1,
  },
  {
    id: "5f96bda1-58c1-4f78-b9f3-3f9fabc6f3e5",
    name: "Camiseta Básquet Titular Boca Jrs 24-25",
    price: 68.999,
    description:
      "Zapatillas de básquet con tecnología de amortiguación para mayor comodidad en la cancha.",
    sexo: "Hombre",
    type: "Básquet",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
    img: ["/Camiseta Básquet Titular Boca Jrs.png"],
    quantity: 1,
  },
  {
    id: "1e134582-9aeb-4a4b-b4f4-d31c6d27c5d9",
    name: "Pantalón Boca Jrs",
    price: 85.999,
    description:
      "Sentite cómoda pero elegante al mismo tiempo en cualquier momento del día.",
    sexo: "Unisex",
    type: "Tiempo libre",
    size: ["2XS", "XS", "S", "M", "L", "XL", "2XL"],
    img: ["/Pantalón Boca Jrs.png"],
    quantity: 1,
  },
  {
    id: "4b0e9a87-bb49-4d71-b8f0-f89f7c6e78cf",
    name: "Piluso Boca Juniors",
    price: 24.99,
    description:
      "Para que siempre muestres lo que sentís por el fútbol y por Boca.",
    sexo: "Unisex",
    type: "Accesorios",
    size: ["Talla Única"],
    img: ["/Piluso.webp"],
    quantity: 1,
  }, // Fútbol
  {
    id: "2a60c1d2-33d5-4b2d-b9e5-5e1e4a637f1f",
    name: "Camiseta Arquero 23-24",
    price: 79.999,
    description:
      "Diseñada para los hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY.",
    sexo: "Niños",
    type: "Fútbol",
    size: ["7/8", "9/10", "11/12", "13/14", "15/16"],
    img: ["/Camiseta Arquero  niños.webp"],
    quantity: 1,
  },
  {
    id: "3d3f2a2e-b1b5-4ebc-9f7c-fd79b3d2eb93",
    name: "Medias Uniforme Titular Boca Jrs 24-25",
    price: 11.99,
    description:
      "Medias para el campo de fútbol. Cuando llega el momento de mostrar tus habilidades, completá tu uniforme con estas medias de fútbol.",
    sexo: "Unisex",
    type: "Fútbol",
    size: ["S", "M", "L", "XL"],
    img: ["/Medias Uniforme Titular Boca Jrs unisex.png"],
    quantity: 1,
  },
  {
    id: "e8f81c1f-ef48-455b-aeb3-00a8d8d4f295",
    name: "Camiseta Titular Boca Jrs 24-25",
    price: 99.99,
    description:
      "La nueva camiseta oficial irradia la pasión boquense y la conexión con el barrio. Inspirada en el tren cuyo recorrido bordea La Bombonera.",
    sexo: "Hombre",
    type: "Fútbol",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
    img: ["/Camiseta Titular Boca Jrs  hombre.png"],
    quantity: 1,
  },
  {
    id: "f1c15dcb-57e8-4e02-b25e-1b8899e5cfcf",
    name: "Camiseta Titular Boca Jrs 23-24",
    price: 89.99,
    description:
      "Esta nueva camiseta titular de Boca Juniors adidas une la pasión y el barrio con diferentes tonos que logran un efecto visual y una prominente franja central que resaltan sus colores, el azul y oro.",
    sexo: "Mujer",
    type: "Fútbol",
    size: ["XS", "S", "M", "L", "XL"],
    img: ["/Camiseta Titular Boca Jrs mujer.webp"],
    quantity: 1,
  },

  // Básquet
  {
    id: "b0a3b0a8-1c32-4875-bd1d-75618c69ef49",
    name: "Short Básquet Titular Boca Jrs 24-25",
    price: 69.999,
    description:
      "horts de básquet para hinchas de Boca Juniors con los colores del uniforme titular, hechos con materiales reciclados Estos shorts de básquet de Boca Juniors adidas son los que usan los jugadores cuando juegan en La Bombonerita",
    sexo: "Hombre",
    type: "Básquet",
    size: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    img: ["/Short Básquet Titular Boca Jrs.png"],
    quantity: 1,
  },
  {
    id: "6aeb1e62-5e6b-4d6c-84db-5caa0e839c98",
    name: "Short Alternativo Basquet Boca Jrs 23-24",
    price: 59.999,
    description:
      "Jugá con estilo con estos shorts del conjunto suplente de básquet. El escudo CABJ se inspira en los uniformes de los años 80 para un look retro.",
    sexo: "Unisex",
    type: "Básquet",
    size: ["S", "M", "L", "XL", "2XL", "3XL"],
    img: ["/Short Alternativo Basquet Boca Jrs.png"],
    quantity: 1,
  },
  {
    id: "8b4a5de7-2b70-4eb0-b5b1-b3e104eab5c0",
    name: "Camiseta Alternativa Basquet Boca Jrs 23-24",
    price: 59.999,
    description:
      "Mostrá tu pasión por Boca Juniors con la remera titular de básquet adidas.",
    sexo: "Unisex",
    type: "Básquet",
    size: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    img: ["/Camiseta Alternativa Basquet Boca Jrs.webp"],
    quantity: 1,
  },

  // Entrenamiento
  {
    id: "a1f3fcdc-2e4f-44b0-bf79-f2fda3e4f9c7",
    name: "Pantalón de Entrenamiento 24-25",
    price: 119.999,
    description:
      "Pantalón deportivo suave creado para entrenamientos intensos. Lucí todo el estilo de La Bombonera al entrenar",
    sexo: "Mujer",
    type: "Entrenamiento",
    size: ["2XS", "XS", "S", "M", "L", "XL", "2XL"],
    img: ["/Pantalón de Entrenamiento mujer.png"],
    quantity: 1,
  },
  {
    id: "50d7a7af-849f-4f34-babe-24c5cce4a30f",
    name: "Pantalón Entrenamiento Tiro Boca Jrs 23-24",
    price: 119.999,
    description:
      "Rendí al máximo con este pantalón de entrenamiento de fútbol que elimina el sudor de manera efectiva. Su diseño facilita cada movimiento, haciendo que tu entrenamiento sea más llevadero y exitoso",
    sexo: "Mujer",
    type: "Entrenamiento",
    size: ["2XS", "XS", "S", "M", "L", "XL"],
    img: ["/Pantalón Entrenamiento Tiro Boca Jrs mujer.png"],
    quantity: 1,
  },
  {
    id: "d6c04a0b-53ea-4c2c-b1b2-793e6c828e31",
    name: "Pantalón de Entrenamiento Pro 24-25",
    price: 129.999,
    description:
      "Un pantalón de entrenamiento absorbente de Boca Juniors hecho con materiales reciclados. Solo lo mejor para vos. Parte de la ropa de entrenamiento de Boca Juniors",
    sexo: "Hombre",
    type: "Entrenamiento",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
    img: ["/Pantalón de Entrenamiento Pro hombre.png"],
    quantity: 1,
  },
  {
    id: "d25c7d62-21db-4290-bc0d-59c3dc97bfb7",
    name: "Pantalón Tiro Boca Jrs 23-24",
    price: 99.999,
    description:
      "El pasado se desvanece, pero la actitud de los jugadores de Boca Juniors perdura en cada entrenamiento. adidas ha creado este conjunto ultracómodo, con un pantalón de fútbol para niños inspirado en el equipo",
    sexo: "Niños",
    type: "Entrenamiento",
    size: ["7/8A", "9/10A", "11/12A", "13/14A", "15/16A"],
    img: ["/Pantalón Tiro Boca Jrs niños.png"],
    quantity: 1,
  },

  // Tiempo libre
  {
    id: "7b1d4b39-5582-4488-8391-d344ab88a193",
    name: "Camiseta Histórica Boca Jrs",
    price: 110.0,
    description:
      "La camiseta conmemora el centésimo décimo aniversario del debut de Boca Juniors en la primera división, recordando el histórico partido de 1913 donde vistieron por primera vez la emblemática camiseta azul y dorada.",
    sexo: "Hombre",
    type: "Tiempo libre",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
    img: ["/Camiseta Histórica Boca Jrs hombre.png"],
    quantity: 1,
  },
  {
    id: "aa60a44e-b481-48ae-86e5-8bcf6f7c8f68",
    name: "Remera 3 Tiras Boca Jrs",
    price: 59.999,
    description:
      "Una remera ajustada que destaca con estilo tu pasión por Boca Juniors. Nunca dejés de animar a tu equipo.",
    sexo: "Mujer",
    type: "Tiempo libre",
    size: ["XS", "S", "M", "L", "XL"],
    img: ["/Remera 3 Tiras Boca Jrs mujer.png"],
    quantity: 1,
  },
  {
    id: "f6bb8452-f45f-419e-9c8d-1a5d31b98e6f",
    name: "Conjunto de Bebé Boca Jrs",
    price: 89.999,
    description:
      "Los mini hinchas también demuestran su pasión por el club con este pantalón Xeneize. De Boca desde la cuna.",
    sexo: "Niños",
    type: "Tiempo libre",
    size: ["0/3M", "3/6M", "6/9M", "9/12M"],
    img: ["/Conjunto de Bebé Boca Jrs.png"],
    quantity: 1,
  },
  {
    id: "1c1b8278-2c38-4326-82cc-865365d47c75",
    name: "Buzo SZN DKHD",
    price: 124.999,
    description:
      "El nuevo buzo de Boca Jrs que no te puede faltar. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos.",
    sexo: "Hombre",
    type: "Tiempo libre",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
    img: ["/Buzo SZN DKHD hombre.png"],
    quantity: 1,
  },

  // Accesorios
  {
    id: "bafe1b8f-86c5-4b4c-b75f-10c40c70c1ea",
    name: "Pelota Argentum 24 Pro",
    price: 179.999,
    description:
      "Dos décadas de la pelota Argentum. 50 años desde la primera camiseta adidas Argentina. ",
    sexo: "Unisex",
    type: "Accesorios",
    size: ["Talla Única"],
    img: ["/Pelota Argentum 24 Pro.webp"],
    quantity: 1,
  },
  {
    id: "3d91b614-39f8-4b3d-93b3-23a1a74a5b8e",
    name: "Portallaves Boca Jrs ",
    price: 49.9,
    description: "Portallaves Boca Jrs",
    sexo: "Unisex",
    type: "Accesorios",
    size: ["Talla Única"],
    img: ["/Portallaves Boca Jrs.webp"],
    quantity: 1,
  },
  {
    id: "4eb5d70a-d74d-4c8b-bc48-6fbc3e2e1219",
    name: "Xeneizes Malbec ",
    price: 9.69,
    description:
      "Ser Xeneize es una pasión. Un sentimiento que se expresa en la alegría de los hinchas, en cada partido, en cada grito de gol. Este vino presenta este sentimiento.",
    sexo: "Unisex",
    type: "Accesorios",
    size: ["Talla Única"],
    img: ["/Xeneizes Malbec.webp"],
    quantity: 1,
  },
  {
    id: "c57f54a8-19d8-43b3-a01f-c28d6f0d802c",
    name: "Bata Boca Jrs ",
    price: 54.9,
    description: "Bata de microfibra Flannel Boca Jrs para adultos.",
    sexo: "Unisex",
    type: "Accesorios",
    size: ["S", "M", "L", "XL"],
    img: ["/Bata-Boca-Jrs.png"],
    quantity: 1,
  },
  {
    id: "b6e1f0d3-b5a5-42ed-9d58-5f7c8d8e9ae5",
    name: "Combo tabla + cuchillo Boca Jrs  ",
    price: 86.6,
    description:
      "Combo tabla chica color + cuchillo de acero inoxidable de Boca Jrs, Material de la hoja cuchillo: Acero Inoxidable,Medidas: hoja 14 cm / Cuchillo con vaina: 27 cm",
    sexo: "Unisex",
    type: "Accesorios",
    size: ["Talla Única"],
    img: ["/Combo tabla + cuchillo Boca Jrs.webp"],
    quantity: 1,
  },
];

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "admin",
    email: "peusco@hotmail.com",
    password: "admin",
    rol: "admin",
    products_id: [products[0].id],
  },
];

export { users, products };
