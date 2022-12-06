import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { InfoComponent } from './info/info.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OffreEmploiComponentComponent } from './offre-emploi-component/offre-emploi-component.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path:'',redirectTo:'/offre',pathMatch:'full'},
  {path:'article',component:ArticleComponentComponent},
  {path:'offre',component:OffreEmploiComponentComponent},
  {path:'article/:id',component:InfoComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'driven',component:TemplateDrivenFormComponent},

  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
