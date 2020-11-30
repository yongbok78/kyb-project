import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './examples/address/address.component';
import { DashboardComponent } from './examples/dashboard/dashboard.component';
import { DragDropComponent } from './examples/drag-drop/drag-drop.component';
import { TableComponent } from './examples/table/table.component';
import { TreeComponent } from './examples/tree/tree.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'address', component: AddressComponent },
      { path: 'table', component: TableComponent },
      { path: 'tree', component: TreeComponent },
      { path: 'drag-drop', component: DragDropComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
