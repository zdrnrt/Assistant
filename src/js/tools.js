export function formatNumber(number) {
  return Intl.NumberFormat('ru-RU').format(number);
}