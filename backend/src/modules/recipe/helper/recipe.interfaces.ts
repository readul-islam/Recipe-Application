type TIngredient = {
  name: string
  quantity: string
  note?: string
}

type TStep = {
  instruction: string
  img: string
}

type TRecipe = {
  calory: string
  title: string
  description?: string
  ingredients: TIngredient[]
  instructions: TStep[]
  prepTime: number
  cookTime: number
  totalTime: number
  servings: number
  category?: string
  cuisine?: string
  author: string
  created: Date
  thumbnail: string
  tags: string[]
}

export { TRecipe, TStep, TIngredient }
