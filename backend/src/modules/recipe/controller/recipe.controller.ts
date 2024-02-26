import { STATUS } from '../../../config'
import CatchAsync from '../../../utils/catchAsync'
import { createRecipeService } from '../services/recipe.service'

class RecipeController extends CatchAsync {
  createRecipe = this.handleRequestWrapper(
    createRecipeService,
    STATUS.CREATED,
    'Successfully your recipe saved!',
  )
}

export default new RecipeController
