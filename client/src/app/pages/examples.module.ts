import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './examples/address/address.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamplesRoutingModule } from './examples-routing.module';
import { DashboardComponent } from './examples/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './examples/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TreeComponent } from './examples/tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropComponent } from './examples/drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AddressComponent, DashboardComponent, TableComponent, TreeComponent, DragDropComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    ExamplesRoutingModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    DragDropModule,
  ],
})
export class ExamplesModule {}
