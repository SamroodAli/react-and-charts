import { BarChart } from "@/components/base/BarChart";
import { ChartData, ChartOptions } from "chart.js";
import { FC } from "react";
import { StocksData } from "@/apis/exampleData";
import { transformStockData } from "@/utils/stockChart";
import { Loader } from "@/components/base/Loader";

const defaultOptions: ChartOptions<"bar"> = {
  responsive: true,
  backgroundColor: "red",
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
    },
  },
  scales: {
    x: {
      title: {
        text: "something awesome",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        text: "sss",
      },
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
const ERROR_TEXT = "Failed to load stock prices, retrying...";
const TITLE = "Stock Prices";

export const StockChart: FC<Props> = ({ data, isLoading, error }) => {
  const chartData = isLoading || !data ? emptyData : transformStockData(data);

  return (
    <Loader
      isLoading={isLoading}
      error={error}
      loadingText={LOADING_TEXT}
      errorText={ERROR_TEXT}
    >
      <BarChart
        data={chartData}
        options={defaultOptions}
        title={TITLE}
        className="p-5"
      />
    </Loader>
  );
};
