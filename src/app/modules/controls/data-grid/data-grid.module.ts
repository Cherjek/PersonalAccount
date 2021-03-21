import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { MatPaginationIntlService } from './services/mat-pagination-intl.service';


@NgModule({
  declarations: [
    DataGridComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    DataGridComponent
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginationIntlService}],
})
export class DataGridModule { }
