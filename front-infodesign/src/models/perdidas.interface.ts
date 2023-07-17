import {Column} from './columns.interface';
export interface Perdidas {
  id: number;
  TipoConsumo: string;
  Linea: string;
  Perdidas: number;
}

export const perdidasColumns: Column[] = [
  {
    key: 'id',
    label: 'TOP',
    fixed: true,
    width: 40,
  },
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
