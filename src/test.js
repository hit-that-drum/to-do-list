import { describe, expect, test } from '@jest/globals';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
});

const can1 = {
  flavor: 'grapefruit',
  ounces: 12
};
const can2 = {
  flavor: 'grapefruit',
  ounces: 12
};

describe('the La Croix cans on my desk', () => {
  test('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });
  test('are not the exact same can', () => {
    expect(can1).not.toBe(can2);
  });
});
