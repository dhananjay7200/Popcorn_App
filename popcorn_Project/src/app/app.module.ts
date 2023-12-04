import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataModule } from './user-data/user-data.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomeinterceptorInterceptor } from './user-data/register/customeinterceptor.interceptor';
import { ClientModule } from './client/client.module';
import { DatePipe } from '@angular/common';
import { MediaModule } from './media/media.module';
import { AdminModule } from './admin/admin.module';
import { RestrictionComponent } from './helper/restriction/restriction.component';
import { ToastrModule } from 'ngx-toastr';
import { TosterService } from './helper/toster/toster.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestrictionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserDataModule,
    FormsModule,
    ReactiveFormsModule,
    ClientModule,
    MediaModule,
    AdminModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:CustomeinterceptorInterceptor,
    multi:true
    
  },DatePipe,TosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
