import { getExampleData } from "@/apis/exampleData";
import { SectorChart } from "@/components/SectorChart";
import { StockChart } from "@/components/StockChart";
import { useAPI } from "@/hooks/useAPI";

export const Dashboard = () => {
  const exampleData = useAPI("/example-data", getExampleData);

  return (
    <div className="grid grid-rows-2 h-full md:grid-rows-1 md:grid-cols-2 md:p-20">
      <section className="flex flex-col flex-grow">
        <h2 className="md:text-2xl font-medium text-center m-3">
          Stock Market Performance
        </h2>
        <div className="basis-full px-4">
          <StockChart {...exampleData} />
        </div>
      </section>
      <section className="flex flex-col flex-grow">
        <h2 className="md:text-2xl font-medium text-center m-3">
          Sector Performance Comparison
        </h2>
        <div className="basis-full">
          <SectorChart {...exampleData} />
        </div>
      </section>
    </div>
  );
};
