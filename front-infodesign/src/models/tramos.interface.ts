import {Column} from './columns.interface';
export interface Tramos {
  Linea: string;
  consumo: number;
  perdidas: number;
  costo: number;
}

export const tramosColumns: Column[] = [
  {
    key: 'Linea',
    label: 'LINEA',
    fixed: false,
    width: 90,
  },
  {
    key: 'consumo',
    label: 'CONSUMO',
    fixed: false,
    width: 90,
  },
  {
    key: 'perdidas',
    label: 'PERDIDAS',
    fixed: false,
    width: 170,
  },
  {
    key: 'costo',
    label: 'COSTO',
    fixed: false,
    width: 150,
  },
];
