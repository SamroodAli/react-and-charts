import {
  ChartData,
  ChartOptions,
  Chart,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";

Chart.register(LinearScale, CategoryScale, BarElement);
