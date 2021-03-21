export type DataGridColumnType = 'string' | 'bool' | 'number' | 'decimal' | 'coast' | 'date' | 'date-time' | 'link';

export class DataGridColumn {
  label?: string;
  name?: string;
  dataType?: DataGridColumnType = 'string';
  position = 1;
  calc?: any; // method get or aggregate value
}