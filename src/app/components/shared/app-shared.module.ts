import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppAuthenticationModule } from '../authentication/app-authentication.module';
import { FooterComponent } from '../shared/footer/footer.component';
import { SearchService } from '../../core/services/search/search.service';
import { UserService } from '@services';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppAuthenticationModule,
    HttpClientModule,
  ],
  exports: [
    FooterComponent,
  ],
  providers: [
    SearchService,
    UserService
  ]
})
export class AppSharedModule { }
