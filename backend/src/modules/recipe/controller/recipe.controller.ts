import { STATUS } from '../../../config'
import CatchAsync from '../../../utils/catchAsync'
import { createRecipeService } from '../services/recipe.service'
// handleRequestWrapper is a custom wrapper that use for avoid try catch repetition
class RecipeController extends CatchAsync {
  createRecipe = this.handleRequestWrapper(
    createRecipeService,
    STATUS.CREATED,
    'Successfully your recipe saved!',
  )
}

export default new RecipeController
