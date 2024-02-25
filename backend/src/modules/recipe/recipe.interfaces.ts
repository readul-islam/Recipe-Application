
type TIngredient = {
    name: string;
    quantity: string;
    note?: string;
  }

type TStep = {
    stepNumber: number;
    instruction: string;
    img: string;
  }

type TRecipe= {
    title: string;
    description?: string;
    ingredients: TIngredient[];
    instructions: TStep[];
    prepTime: number;
    cookTime: number;
    totalTime: number;
    servings: number;
    category?: string;
    cuisine?: string;
    author: string;
    created: Date;
    images: string[];
    tags: string[];
  }


  export {
    TRecipe
  }