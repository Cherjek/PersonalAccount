import { Injectable } from '@angular/core';
import { DataGridColumn } from 'src/app/modules/controls/data-grid/models/column.model';
import { Document } from '../model/document.modle';

@Injectable()
export class DataGridService {

  columns: DataGridColumn[] = [
    {
      label: 'Название',
      name: 'name',
      dataType: 'link',
      position: 1
    },
    {
      label: 'Дата',
      name: 'dateTime',
      dataType: 'date',
      position: 2,
    },
    {
      label: 'Тип',
      name: 'type',
      position: 3,
      calc: (element: Document) => {
        return element?.type?.name;
      },
    },
    {
      label: 'Статус',
      name: 'status',
      position: 4,
      calc: (element: Document) => {
        return element?.status?.name;
      },
    },
  ];
}
