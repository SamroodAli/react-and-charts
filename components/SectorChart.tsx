import { BarChart } from "@/components/base/BarChart";
import { ChartData, ChartOptions } from "chart.js";
import { FC } from "react";
import { StocksData } from "@/apis/exampleData";
import { transformSectorData } from "@/utils/stockChart";
import { DoughnutChart } from "@/components/base/DoughnutChart";
import { LoadingAndError } from "@/components/base/LoadingAndError";

// TODO: redundant data, refactor this
const defaultOptions: ChartOptions<"doughnut"> = {
  responsive: true,
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

const LOADING_TEXT = "Loading sector data";
const ERROR_TEXT = "Failed to load sector data, please try again later";

export const SectorChart: FC<Props> = ({ data, isLoading, error }) => {
  // TODO: memoize data since there's only two datasets
  const chartData = isLoading || !data ? emptyData : transformSectorData(data);

  // TODO: add label in chart

  return (
    <LoadingAndError
      isLoading={isLoading}
      error={error}
      loadingText={LOADING_TEXT}
      errorText={ERROR_TEXT}
    >
      <DoughnutChart data={chartData} options={defaultOptions} />;
    </LoadingAndError>
  );
};
