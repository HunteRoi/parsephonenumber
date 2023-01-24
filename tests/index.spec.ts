import { describe, it, expect } from '@jest/globals';
import parsePhoneNumber from '../src';

describe('parsePhoneNumber', () => {
  it('should throw an error if the regional indicator is not separated by a space from the phone number', () => {
    const phoneNumber = '+999480808080';
    const expected =
      'Phone number is invalid: regional indicator is probably mixed with the rest of the number';

    const action = () => parsePhoneNumber(phoneNumber);

    expect(action).toThrowError(expected);
  });

  it('should format the phone number and add the default indicator if not provided', () => {
    const phoneNumber = '0480808080';
    const expected = '+32 (0) 480 80 80 80';

    const actual = parsePhoneNumber(phoneNumber);

    expect(actual).toBe(expected);
  });

  it.each([
    ['+999 (0) 480 80 80 80'],
    ['+999 (0) 480.80.80.80'],
    ['+999 (0) 480/80.80.80'],
    ['+999 0480808080'],
    ['+999 0480/80/80/80'],
    ['+999 0480.80.80.80'],
    ['+999 480 80 80 80'],
    ['+999 480.80.80.80'],
    ['+999 480/80/80/80'],
    ['+999 480/80.80.80'],
  ])('should format the phone number %s', (phoneNumber) => {
    const expected = '+999 (0) 480 80 80 80';

    const actual = parsePhoneNumber(phoneNumber);

    expect(actual).toEqual(expected);
  });
});
