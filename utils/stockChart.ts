import { StocksData } from "@/apis/exampleData";
import { ChartData } from "chart.js";

const BACKGROUND_COLORS = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(255, 205, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(201, 203, 207, 0.2)",
];

const BORDER_COLORS = [
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
];

/**
 * @param stocks: Stocks data from example data api response.
 * Transform data from stocks array to bar chart's data format.
 */
export function transformStockData(stocksData: StocksData): ChartData<"bar"> {
  const chartData: ChartData<"bar"> = {
    datasets: [
      {
        label: "First Dataset",
        data: stocksData.stocks.map((stock) => stock.price),
        backgroundColor: BACKGROUND_COLORS,
        borderColor: BORDER_COLORS,
        borderWidth: 1,
      },
    ],
    labels: stocksData.stocks.map((stock) => stock.ticker),
  };

  return chartData;
}

/**
 * @param stocks: Stocks data from example data api response.
 * Transform data from stocks array to bar chart's data format.
 */
export function transformSectorData(
  stocksData: StocksData
): ChartData<"doughnut"> {
  // sector data of the type Record<sectorName, stocksInSector>)
  const sectorData: Record<string, number> = stocksData.stocks.reduce(
    (sectors, stock) => {
      sectors[stock.sector] = (sectors[stock.sector] || 0) + 1;

      return sectors;
    },
    {} as Record<string, number>
  );

  const chartData: ChartData<"doughnut"> = {
    datasets: [
      {
        label: "First Dataset",
        data: Object.values(sectorData),
        backgroundColor: BACKGROUND_COLORS,
        borderColor: BORDER_COLORS,
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
    labels: Object.keys(sectorData),
  };

  console.log(chartData);
  return chartData;
}
