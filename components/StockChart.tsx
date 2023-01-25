import { BarChart } from "@/components/BarChart";
import { ChartData, ChartOptions } from "chart.js";
import { FC } from "react";
import { StocksData } from "@/apis/exampleData";
import { transformStockData } from "@/utils/stockChart";

const defaultOptions: ChartOptions<"bar"> = {
  responsive: true,
  backgroundColor: "red",
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const emptyData: ChartData<"bar"> = {
  labels: [],
  datasets: [
    {
      label: "Loading stock prices",
      data: [],
    },
  ],
};

interface Props {
  data?: StocksData;
  isLoading: boolean;
  error: boolean;
}

export const StockChart: FC<Props> = ({ data, isLoading, error }) => {
  // TODO: memoize data since there's only two datasets
  const chartData = isLoading || !data ? emptyData : transformStockData(data);

  // TODO: add label in chart
  //TODO: handle error
  return <BarChart data={chartData} options={defaultOptions} />;
};
