export function formatToEuro(value: string): string {
  const currencyValue = value.replace(/\D/g, '');
  if (!currencyValue) {
    return '';
  }
  const parsedValue = parseFloat(currencyValue) / 100;

  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parsedValue);
}
