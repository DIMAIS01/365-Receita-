export interface Recipe {
  id: string;
  name: string;
  age: string;
  ingredients: string[];
  instructions: string[];
  texture: string;
  month: number;
  day: number;
  category?: 'Fruta' | 'Legume' | 'Carne' | 'Grão' | 'Outros';
  videoUrl?: string;
  playfulAlerts?: string[];
}

export interface Month {
  number: number;
  name: string;
  recipes: Recipe[];
}

export type View = 'home' | 'guidelines' | 'recipes' | 'pricing' | 'recipe-detail' | 'pediatrician' | 'safety' | 'developer' | 'explore';
