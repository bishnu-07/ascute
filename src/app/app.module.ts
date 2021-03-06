import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';
import { CmsComponent } from './cms/cms.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Material Module
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';  //Page Loader
import {MatMenuModule} from '@angular/material/menu'; //Menu
import {MatPaginatorModule} from '@angular/material/paginator'; //paginator


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    HomeComponent,
    CmsComponent,
    AboutUsComponent,
    ContactUsComponent,
    ReviewsComponent,
    PrivacyComponent,
    TermsComponent,
    FaqsComponent,
    CollectionComponent,
    ProductsComponent,
    SidebarComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

