import { getExampleData } from "@/apis/exampleData";
import { SectorChart } from "@/components/SectorChart";
import { StockChart } from "@/components/StockChart";
import { useAPI } from "@/hooks/useAPI";
import { useRetry } from "@/hooks/useBackOffAndRetry";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const { data, error, isLoading, mutate, isValidating } = useAPI(
    "/example-data",
    getExampleData
  );

  const onRefresh = () => {
    mutate();
  };

  // TODO: show waiting time while showing error
  useRetry(error, mutate);

  return (
    <div className="grid grid-rows-2 h-full md:grid-rows-1 md:grid-cols-2 md:p-20 md:pt-8">
      <button
        className="rounded-full fixed bottom-8 md:bottom-1 bg-slate-900 right-4 md:right-8 md:left-8 text-white p-3 md:px-7 z-10"
        onClick={onRefresh}
      >
        Refresh
      </button>
      <section className="flex flex-col flex-grow">
        <h2 className="md:text-2xl font-medium text-center m-3">
          Stock Market Performance
        </h2>
        <div className="basis-full px-4">
          <StockChart
            error={error}
            isLoading={isLoading || isValidating}
            data={data}
          />
        </div>
      </section>
      <section className="flex flex-col flex-grow">
        <h2 className="md:text-2xl font-medium text-center m-3">
          Sector Performance Comparison
        </h2>
        <div className="basis-full">
          <SectorChart
            error={error}
            isLoading={isLoading || isValidating}
            data={data}
          />
        </div>
      </section>
    </div>
  );
};
