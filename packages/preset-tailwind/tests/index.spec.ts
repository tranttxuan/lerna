import preset from '../src';

describe('preset-tailwind', () => {
  it('should return an object with a theme property', () => {
    expect(preset).toHaveProperty('theme');
  });
});
