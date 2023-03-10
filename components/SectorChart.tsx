import { BarChart } from "@/components/base/BarChart";
import { ChartData, ChartOptions } from "chart.js";
import { FC } from "react";
import { StocksData } from "@/apis/exampleData";
import { transformSectorData } from "@/utils/stockChart";
import { DoughnutChart } from "@/components/base/DoughnutChart";
import { Loader } from "@/components/base/Loader";

const LOADING_TEXT = "Loading sector data";
const ERROR_TEXT = "Failed to load sector data, retrying...";
const TITLE = "Sector Breakdown of Stock Portfolio";

const defaultOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  backgroundColor: "red",
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: TITLE,
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
  const chartData = isLoading || !data ? emptyData : transformSectorData(data);

  return (
    <Loader
      isLoading={isLoading}
      error={error}
      loadingText={LOADING_TEXT}
      errorText={ERROR_TEXT}
    >
      <DoughnutChart
        data={chartData}
        options={defaultOptions}
        className="p-5"
      />
    </Loader>
  );
};
