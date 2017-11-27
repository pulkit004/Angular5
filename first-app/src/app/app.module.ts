import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomesComponent } from './homes/homes.component';
import { ModulesComponent } from './modules/modules.component';
import { ShoppingListComponent } from './modules/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './modules/recipe-book/recipe-book.component';
import { RecipeListComponent } from './modules/recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './modules/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './modules/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './modules/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomesComponent,
    ModulesComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
