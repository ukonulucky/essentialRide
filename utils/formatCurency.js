
export function formatCurrency(duration, surgeChargeRate, multiplier) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN', // Replace with the desired currency code (e.g., 'EUR' for Euro)
        // minimumFractionDigits: 2, // Minimum number of fraction digits
      });
      const formattedCurrency = currencyFormatter.format(
        (
             duration * surgeChargeRate * multiplier / 100
        )
      );
      return formattedCurrency
}