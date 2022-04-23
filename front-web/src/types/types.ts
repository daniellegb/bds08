export type Store = {
  id: number;
  name: string;
};

export type FilterStore = {
  store?: Store;
};

export type StoreSummary = {
  sum: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type ByGender = {
  gender: string;
  sum: number;
};

export type PieChartConfig = {
  labels?: string[];
  series?: number[];
};
