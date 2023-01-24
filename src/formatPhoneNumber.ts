const optionalLeadingNumber = '(0)';

export default function formatPhoneNumber(phoneNumber: string): string {
  phoneNumber = phoneNumber.replace(/[/. ()]/g, '');
  let size = 2;

  const parts: string[] = [];
  while (phoneNumber !== '') {
    if (parts.length === 3) size = 3;
    if (parts.length === 4) size = phoneNumber.length;

    const index = phoneNumber.length - size;
    const part = phoneNumber.substring(index);
    phoneNumber = phoneNumber.substring(0, index);

    parts.push(part);
  }

  const lastIndex = parts.length - 1;
  if (parts[lastIndex] === '0') parts[lastIndex] = optionalLeadingNumber;
  if (
    parts[lastIndex]!.length === 3 &&
    parts[lastIndex] !== optionalLeadingNumber
  )
    parts.push(optionalLeadingNumber);

  return parts.reverse().join(' ').trim();
}
