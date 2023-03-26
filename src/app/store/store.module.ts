import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ]
})
export class StoreModule { }
