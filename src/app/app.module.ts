import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import { NgxLoadingModule } from 'ngx-loading';
// import { ToastrModule } from 'ngx-toastr';
// import { Ng2IziToastModule } from 'ng2-izitoast';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    // ToastrModule.forRoot({
    //   //timeOut: 4000,
    //   progressBar: true,
    //   progressAnimation: 'increasing',
    //   preventDuplicates: true,
    //   newestOnTop: true,
    //   closeButton: true,
    //   maxOpened: 1,
    // }),
    NgxLoadingModule.forRoot({
      backdropBorderRadius: '3px',
      backdropBackgroundColour: 'rgb(255 255 255 / 15%)',
      primaryColour: '#20a8d8',
      secondaryColour: '#20a8d8',
      tertiaryColour: '#20a8d8',
    }),   
    // Ng2IziToastModule,
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
