export function formatToEuro(value: string): string {
  // Remove non-numeric characters
  const numericValue = value.replace(/\D/g, '');

  // If there's no numeric value, return an empty string
  if (!numericValue) {
    return '';
  }

  // Convert the string into a number and divide by 100 for currency formatting
  const parsedValue = parseFloat(numericValue) / 100;

  // Format the number to Euro currency format
  return parsedValue.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
