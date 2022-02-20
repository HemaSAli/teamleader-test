export default (unitPrice: string, total: string) => `${(Number(unitPrice) + Number(total)).toFixed(2)}`;
