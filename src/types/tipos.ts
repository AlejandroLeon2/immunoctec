import { string } from "astro:schema";
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  yearsUsing: string;
  image: string;
  link?: string;
}
export interface Producto {
  nombre: string;
  titulo: string;
  descripcion: string;
  beneficios?: string[];
  imagen: string;
  color?: string;
  textoBoton: string;
  linkVideo?: string;
  variant?: string;
  badge?: string;
  urlPagina: string;
}
