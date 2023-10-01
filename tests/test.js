import { expect, test } from '@jest/globals';

const lib = require('../src/recipe-api');

test('Sanity check', () => {
  expect(2+2).toBe(4)
});

test('test getRecipes function', () => {
  expect(lib.getRecipes()).toBeDefined();
  expect(lib.getRecipes('chicken', appId, appKey)).toContain('chicken');
});

// test('getRecipe returns a recipe', () => {
//     expect