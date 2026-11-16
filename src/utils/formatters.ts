export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
}

export function getOldPrice(currentPrice: number): number {
  return Number((currentPrice * 1.1).toFixed(2));
}

export function getInstallmentText(price: number, installments = 2): string {
  const installmentValue = price / installments;
  return `ou ${installments}x de ${formatCurrency(installmentValue)} sem juros`;
}
