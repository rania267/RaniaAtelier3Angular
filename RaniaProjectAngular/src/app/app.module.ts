import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffreEmploiComponentComponent } from './offre-emploi-component/offre-emploi-component.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InfoComponent } from './info/info.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreEmploiComponentComponent,
    ArticleComponentComponent,
    NotfoundComponent,
    InfoComponent,
    AddProductComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
