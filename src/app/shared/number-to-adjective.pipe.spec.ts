import { NumberToAdjectivePipe } from './number-to-adjective.pipe';

describe('NumberToAdjectivePipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToAdjectivePipe();
    expect(pipe).toBeTruthy();
  });
});
