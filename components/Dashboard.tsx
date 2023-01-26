import { getExampleData } from "@/apis/exampleData";
import { SectorChart } from "@/components/SectorChart";
import { StockChart } from "@/components/StockChart";
import { useAPI } from "@/hooks/useAPI";

export const Dashboard = () => {
  const exampleData = useAPI(getExampleData);

  return (
    <div>
      <header>
        <h1 className="md:text-2xl">Dashboard</h1>
      </header>
      <main className="md:flex w-full justify-around">
        <section className="w-full">
          <h2>Stock data</h2>
          <StockChart {...exampleData} />
        </section>

        <section className="p-8 md:w-1/2">
          <h2>Sector data</h2>
          <SectorChart {...exampleData} />
        </section>
      </main>
    </div>
  );
};
