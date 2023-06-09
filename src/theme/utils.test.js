import utils from './utils';

describe('Theme utils', () => {
  it('should convert pixel to REM', () => {
    expect(utils.pxToRem(60)).toEqual('3.75rem');
    expect(utils.pxToRem(-60)).toEqual('-3.75rem');
    expect(utils.pxToRem(44)).toEqual('2.75rem');
    expect(utils.pxToRem(-44)).toEqual('-2.75rem');
    expect(utils.pxToRem(36)).toEqual('2.25rem');
    expect(utils.pxToRem(-36)).toEqual('-2.25rem');
    expect(utils.pxToRem(0)).toEqual('0rem');
    expect(utils.pxToRem(-0)).toEqual('0rem');
    expect(() => utils.pxToRem('someString')).toThrow();
  });
});
