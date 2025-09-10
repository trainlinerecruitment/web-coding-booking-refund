export function currencyFormatter(currency: string): Intl.NumberFormat {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency });
}