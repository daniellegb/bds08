import { ByGender } from '../types/types';

export const buildSalesByGenderChart = (sales: ByGender[]) => {
  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
