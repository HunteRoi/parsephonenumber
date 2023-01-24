import formatPhoneNumber from './formatPhoneNumber';
import parseIndicator from './parseIndicator';

/**
 * Parses a phone number to a default format.
 *
 * @export
 * @param {string} phoneNumber
 * @return {string} phone number in the format `<regional indicator> (0) <phone number>`
 * @example
 * $ parsePhoneNumber('00999 0480/80.80.80');
 * $ '+999 (0) 480 80 80 80'
 */
export default function parsePhoneNumber(phoneNumber: string): string {
  const { indicator, rest } = parseIndicator(phoneNumber);
  const parts: string[] = [indicator, formatPhoneNumber(rest)];
  return parts.join(' ');
}
