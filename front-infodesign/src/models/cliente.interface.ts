import {Column} from './columns.interface';
export interface Cliente {
  Linea: string;
  consumo_residencial: number;
  consumo_comercial: number;
  consumo_industrial: number;
  perdidas_residencial: number;
  perdidas_comercial: number;
  perdidas_industrial: number;
  costo_residencial: number;
  costo_comercial: number;
  costo_industrial: number;
}

export const clienteColumns: Column[] = [
  {
    key: 'Linea',
    label: 'LINEA',
    fixed: true,
    width: 100,
  },
  {
    key: 'consumo_residencial',
    label: 'CONSUMO RESIDENCIAL',
    fixed: true,
    width: 200,
  },
  {
    key: 'consumo_comercial',
    label: 'CONSUMO COMERCIAL',
    fixed: true,
    width: 200,
  },
  {
    key: 'consumo_industrial',
    label: 'CONSUMO INDUSTRIAL',
    fixed: true,
    width: 200,
  },
  {
    key: 'perdidas_residencial',
    label: 'PERDIDAS RESIDENCIAL',
    fixed: true,
    width: 200,
  },
  {
    key: 'perdidas_comercial',
    label: 'PERDIDAS COMERCIAL',
    fixed: true,
    width: 200,
  },
  {
    key: 'perdidas_industrial',
    label: 'PERDIDAS INDUSTRIAL',
    fixed: true,
    width: 200,
  },
  {
    key: 'costo_residencial',
    label: 'COSTO RESIDENCIAL',
    fixed: true,
    width: 200,
  },
  {
    key: 'costo_comercial',
    label: 'COSTO COMERCIAL',
    fixed: true,
    width: 200,
  },
  {
    key: 'costo_industrial',
    label: 'COSTO INDUSTRIAL',
    fixed: true,
    width: 200,
  },
];
