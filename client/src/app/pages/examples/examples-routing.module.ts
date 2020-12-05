import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { animation: 'Dashboard' },
      },
      {
        path: 'address',
        component: AddressComponent,
        data: { animation: 'Address' },
      },
      {
        path: 'table',
        component: TableComponent,
        data: { animation: 'Table' },
      },
      { path: 'tree', component: TreeComponent, data: { animation: 'Tree' } },
      {
        path: 'drag-drop',
        component: DragDropComponent,
        data: { animation: 'DragDrop' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
