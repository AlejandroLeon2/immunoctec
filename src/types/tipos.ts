export type whatsapp = {
  numero: string;
  mensaje?: string;
};
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
