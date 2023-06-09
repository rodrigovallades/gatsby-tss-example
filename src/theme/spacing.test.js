import { createSpacing } from './spacing';

describe('@mui/material spacing helpers', () => {
  describe('createSpacing', () => {
    it.each`
      factor | spacing
      ${0}   | ${'4px'}
      ${1}   | ${'8px'}
      ${2}   | ${'16px'}
      ${3}   | ${'24px'}
      ${4}   | ${'32px'}
      ${5}   | ${'40px'}
      ${6}   | ${'48px'}
      ${7}   | ${'64px'}
      ${8}   | ${'80px'}
      ${9}   | ${'96px'}
    `(
      'should generate a $spacing spacing when factor is $factor',
      ({ factor, spacing }) => {
        expect(createSpacing(factor)).toEqual(spacing);
      }
    );
  });
});
