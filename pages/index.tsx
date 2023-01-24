import { PageLayout } from "@/components/PageLayouts";
import Head from "next/head";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const { data, error, isLoading } = useSWR("/data", fetcher);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  if (isLoading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  const dataSet = {
    labels: data.data.map((each: any) => each.id),
    datasets: [
      {
        label: "dataset-1",
        data: data.data.map((stock: any) => stock.price),
        backgroundColor: "red",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>React and charts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Bar data={dataSet} />
      </PageLayout>
    </>
  );
}
