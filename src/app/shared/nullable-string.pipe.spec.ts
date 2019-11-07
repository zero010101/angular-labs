import { NullableStringPipe } from './nullable-string.pipe';

describe('NullableStringPipe', () => {
  it('create an instance', () => {
    const pipe = new NullableStringPipe();
    expect(pipe).toBeTruthy();
  });
});
