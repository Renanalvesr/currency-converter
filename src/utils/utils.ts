export function formatToEuro(value: string): string {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, '');
  
    // If there's no numeric value, return an empty string
    if (!numericValue) {
      return '';
    }
  
    // Convert the value to a float and format as Euro currency
    const formattedValue = (parseFloat(numericValue) / 100).toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    return formattedValue;
  }