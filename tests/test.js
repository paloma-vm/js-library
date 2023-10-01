import { expect, test } from '@jest/globals';
import dotenv from 'dotenv';

dotenv.config();

const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;

const lib = require('../src/recipe-api');

test('Sanity check', () => {
  expect(2 + 2).toBe(4);
});

test('test getRecipes function', async () => {
  const recipes = await lib.getRecipes('chicken', appId, appKey);
  expect(recipes).toBeDefined();
  expect(Array.isArray(recipes)).toBe(true);

  // check if the recipes contain the search term
  expect(recipes.map((recipe) => recipe.name.toLowerCase())).toEqual(
    expect.arrayContaining([expect.stringContaining('chicken')]),
  );
});

test('test getRecipesByQty function', async () => {
  const qty = 5;
  const recipes = await lib.getRecipesByQty('salmon', appId, appKey, qty);
  expect(recipes).toBeDefined();
  expect(Array.isArray(recipes)).toBe(true);
  // check the number of recipes returned
  expect(recipes.length).toBe(qty);

  // check if the recipes contain the search term
  expect(recipes.map((recipe) => recipe.name.toLowerCase())).toEqual(
    expect.arrayContaining([expect.stringContaining('salmon')]),
  );
});

test('test getRecipesByMaxTime function', async () => {
  const maxTime = 20;
  const recipes = await lib.getRecipesByMaxTime('eggs', appId, appKey, maxTime);
  expect(recipes).toBeDefined();
  expect(Array.isArray(recipes)).toBe(true);

  // check the maxTime
  expect(recipes.every((recipe) => recipe.recipe.totalTime && recipe.recipe.totalTime <= maxTime)).toBe(true);
  // TODO need to add time into the recipe object
});

test('test getRecipesByMealType function', async () => {
  const mealType = 'breakfast';
  const recipes = await lib.getRecipesByMealType('blueberry', appId, appKey, mealType);
  expect(recipes).toBeDefined();
  expect(Array.isArray(recipes)).toBe(true);

  // check if the recipes contain the search term
  expect(recipes.map((recipe) => recipe.name.toLowerCase())).toEqual(
    expect.arrayContaining([expect.stringContaining('blueberry')]),
  );
});