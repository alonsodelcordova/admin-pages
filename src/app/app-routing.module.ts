import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./public/public.module')
      .then(md=> md.PublicModule)
  },
  {
    path:'store',
    loadChildren: ()=> import('./store/store.module')
      .then(md=> md.StoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
