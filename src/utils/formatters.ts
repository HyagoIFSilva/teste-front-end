/**
 * Formata um valor numérico para Moeda Brasileira (BRL)
 */
export function formatCurrency(value: number): string {
  // Se o valor for muito grande como 15000, e for em reais ou centavos
  // No e-commerce brasileiro com preços de iPhone:
  // 15000 pode ser R$ 15.000,00 ou no design de teste R$ 15.000,00
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
}

/**
 * Retorna o preço original anterior (com acréscimo simulado de 10% para exibir o 'de' riscado)
 */
export function getOldPrice(currentPrice: number): number {
  return Number((currentPrice * 1.1).toFixed(2));
}

/**
 * Calcula a parcela em 2x sem juros
 */
export function getInstallmentText(price: number, installments = 2): string {
  const installmentValue = price / installments;
  return `ou ${installments}x de ${formatCurrency(installmentValue)} sem juros`;
}

