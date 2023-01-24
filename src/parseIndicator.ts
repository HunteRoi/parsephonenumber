const defaultIndicator = '+32';

type IndicatorAndPhoneNumber = { indicator: string; rest: string };

export default function parseIndicator(
  phoneNumber: string
): IndicatorAndPhoneNumber {
  let indicator = defaultIndicator;
  let rest = phoneNumber;

  if (phoneNumber.startsWith('00') || phoneNumber.startsWith('+')) {
    const [indi, ...r] = phoneNumber.split(' ');
    indicator = indi!.replace('00', '+');
    rest = r.join(' ');
  }

  if (rest === '')
    throw new Error(
      'Phone number is invalid: regional indicator is probably mixed with the rest of the number'
    );

  return { indicator, rest };
}
