import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
      new Recipe("Atum ", "Atum caramelizado com cebola",
                 "https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg"),
      new Recipe("Frango", "Frango xadrez feito com muito carinho",
                 "https://www.receitadevovo.com.br/gbau/sistema/receitas/img/frango-a-passarinho.jpg"),
  ];    
        
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }    

}
