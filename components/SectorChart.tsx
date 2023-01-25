import { BarChart } from "@/components/BarChart";
import { ChartData, ChartOptions } from "chart.js";
import { FC } from "react";
import { StocksData } from "@/apis/exampleData";
import { transformSectorData } from "@/utils/stockChart";
import { DoughnutChart } from "@/components/DoughnutChart";

// TODO: redundant data, refactor this
const defaultOptions: ChartOptions<"doughnut"> = {
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

const emptyData: ChartData<"doughnut"> = {
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

export const SectorChart: FC<Props> = ({ data, isLoading, error }) => {
  // TODO: memoize data since there's only two datasets
  const chartData = isLoading || !data ? emptyData : transformSectorData(data);

  // TODO: add label in chart
  //TODO: handle error
  return <DoughnutChart data={chartData} options={defaultOptions} />;
};
