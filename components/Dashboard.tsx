import { getExampleData } from "@/apis/exampleData";
import { StockChart } from "@/components/StockChart";
import { useAPI } from "@/hooks/useAPI";

export const Dashboard = () => {
  const exampleData = useAPI(getExampleData);

  return <StockChart {...exampleData} />;
};
