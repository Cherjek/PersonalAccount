import { PaLinkComponent } from './components/pa-link/pa-link.component';
import { PaDatepickerComponent } from './components/pa-datepicker/pa-datepicker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PaInputComponent } from './components/input-pa/pa-input.component';
import { PaButtonComponent } from './components/pa-button/pa-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateErrorPipe } from './components/input-pa/validate-error.pipe';
import { PaCheckboxComponent } from './components/pa-checkbox/pa-checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { PaComboboxComponent } from './components/pa-combobox/pa-combobox.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    PaInputComponent,
    PaButtonComponent,
    ValidateErrorPipe,
    PaCheckboxComponent,
    PaDatepickerComponent,
    PaComboboxComponent,
    PaLinkComponent,
  ],
  exports: [
    PaInputComponent,
    PaButtonComponent,
    PaCheckboxComponent,
    PaDatepickerComponent,
    PaComboboxComponent,
    PaLinkComponent,
    MatTabsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  providers: [MatDatepickerModule],
})
export class EditorsModule {}
