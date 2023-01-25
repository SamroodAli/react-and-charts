import { api } from "@/utils/baseApi";

export interface Stock {
  id: number;
  ticker: string;
  sector: string;
  price: number;
}

export interface StocksData {
  stocks: Stock[];
  dataset: 0 | 1;
}

export interface ExampleDataRes {
  data: Stock[];
  dataset: 0 | 1;
}

export const getExampleData = async (): Promise<StocksData> => {
  const { data } = await api.get<ExampleDataRes>("/example-data");

  return {
    stocks: data.data,
    dataset: data.dataset,
  };
};
