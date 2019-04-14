import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppAuthenticationModule } from '../authentication/app-authentication.module';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { SearchComponent } from '../shared/search/search.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SearchService } from '../../core/services/search/search.service';
import { UserService } from '@services';

@NgModule({
  declarations: [
    NavigationComponent,
    SearchComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    AppAuthenticationModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    SearchComponent,
  ],
  providers: [
    SearchService,
    UserService
  ]
})
export class AppSharedModule { }
