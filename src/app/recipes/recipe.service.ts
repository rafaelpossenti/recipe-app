import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
      new Recipe("Atum ", "Atum caramelizado com cebola",
                 "https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg"),
      new Recipe("Frango", "Frango xadrez feito com muito carinho",
                 "https://www.receitadevovo.com.br/gbau/sistema/receitas/img/frango-a-passarinho.jpg")
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}