import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppLocalization } from 'src/app/core/locale';
import { DataGridColumn } from '../../models/column.model';

@Component({
  selector: 'pa-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, AfterViewInit {

  locale = AppLocalization.grid;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  displayedColumns: string[] = [];
  dataSourceMat = new MatTableDataSource();

  private _columns?: DataGridColumn[];
  @Input() 
  get columns(): DataGridColumn[] | undefined {
    return this._columns;
  }
  set columns(columns: DataGridColumn[] | undefined) {
    if (columns) {
      columns = columns.sort(x => x.position);
      this.displayedColumns = columns.map(x => x.name as string);
    }
    this._columns = columns;
  }
  private _dataSource?: any[];
  @Input() 
  get dataSource(): any[] | undefined {
    return this._dataSource;
  }
  set dataSource(ds: any[] | undefined) {
    this.dataSourceMat.data = ds || [];
    this._dataSource = ds;
  }

  @Output() cellClick = new EventEmitter();

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSourceMat.paginator = this.paginator;
    this.dataSourceMat.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMat.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceMat.paginator) {
      this.dataSourceMat.paginator.firstPage();
    }
  }

  cellClickEv(element: any, col: string) {
    this.cellClick.emit({ element, col });
  }
}
