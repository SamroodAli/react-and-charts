import { BarChart } from "@/components/base/BarChart";
import { ChartData, ChartOptions } from "chart.js";
import { FC } from "react";
import { StocksData } from "@/apis/exampleData";
import { transformStockData } from "@/utils/stockChart";
import { LoadingAndError } from "@/components/base/LoadingAndError";

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

const LOADING_TEXT = "Loading stock prices";
const ERROR_TEXT = "Failed to load stock prices, please try again later";

export const StockChart: FC<Props> = ({ data, isLoading, error }) => {
  // TODO: memoize data since there's only two datasets
  const chartData = isLoading || !data ? emptyData : transformStockData(data);

  // TODO: add label in chart

  return (
    <LoadingAndError
      isLoading={isLoading}
      error={error}
      loadingText={LOADING_TEXT}
      errorText={ERROR_TEXT}
    >
      <BarChart data={chartData} options={defaultOptions} />
    </LoadingAndError>
  );
};
