//node modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//components
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[  
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
