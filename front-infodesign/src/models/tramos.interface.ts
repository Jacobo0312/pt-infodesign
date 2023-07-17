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
    fixed: true,
    width: 100,
  },
  {
    key: 'consumo',
    label: 'CONSUMO',
    fixed: true,
    width: 100,
  },
  {
    key: 'perdidas',
    label: 'PERDIDAS',
    fixed: true,
    width: 100,
  },
  {
    key: 'costo',
    label: 'COSTO',
    fixed: true,
    width: 100,
  },
];
