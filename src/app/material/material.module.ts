import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


const material = [
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatListModule,
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule
]
@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }
