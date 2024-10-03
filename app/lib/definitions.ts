export type Product = {
  id: string;
  name: string;
  price: number;
  size: string[];
  description: string;
  sexo: "Hombre" | "Mujer" | "Niños" | "Unisex";
  type: "Futbol" | "Basquet" | "Entrenamiento" | "Tiempo libre" | "Accesorios";
  img: string[];
};
