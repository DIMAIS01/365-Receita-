import { Recipe } from './types';
import { month1Recipes } from './data/month1';
import { month2Recipes } from './data/month2';
import { month3Recipes } from './data/month3';
import { month4Recipes } from './data/month4';
import { month5Recipes } from './data/month5';
import { month6Recipes } from './data/month6';
import { month7Recipes } from './data/month7';
import { month8Recipes } from './data/month8';
import { month9Recipes } from './data/month9';
import { month10Recipes } from './data/month10';
import { month11Recipes } from './data/month11';
import { month12Recipes } from './data/month12';

export const recipes: Recipe[] = [
  ...month1Recipes,
  ...month2Recipes,
  ...month3Recipes,
  ...month4Recipes,
  ...month5Recipes,
  ...month6Recipes,
  ...month7Recipes,
  ...month8Recipes,
  ...month9Recipes,
  ...month10Recipes,
  ...month11Recipes,
  ...month12Recipes
];
