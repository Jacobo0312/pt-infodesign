import {Column} from './columns.interface';
export interface Perdidas {
  TipoConsumo: string;
  Linea: string;
  Perdidas: number;
}

export const perdidasColumns: Column[] = [
  {
    key: 'TipoConsumo',
    label: 'TIPO CONSUMO',
    fixed: true,
    width: 200,
  },
  {
    key: 'Linea',
    label: 'LINEA',
    fixed: true,
    width: 100,
  },
  {
    key: 'Perdidas',
    label: 'PERDIDAS',
    fixed: true,
    width: 200,
  },
];
