import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'external',
    loadChildren: () => import('./@base/@external/external.module').then(m => m.ExternalModule)
  },
  {
    path: 'main',
    loadChildren: () => import('.//@base/@main/main.module').then(m => m.MainModule)
  },
  {
    path: '',
    pathMatch: "full",
    redirectTo: "main"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
