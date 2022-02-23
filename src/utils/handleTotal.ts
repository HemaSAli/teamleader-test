export const handleAdd = (unitPrice: string, total: string) => `${(Number(unitPrice) + Number(total)).toFixed(2)}`;
export const handleSub = (
  unitPrice: string,
  total: string,
  quantity: string = '1',
) => {
  const quantityMultiplieByUnitPrice = (Number(unitPrice) * Number(quantity)).toFixed(2);
  return `${(Number(total) - Number(quantityMultiplieByUnitPrice)).toFixed(2)}`;
};
