import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-gray-200 absolute top-0 bottom-0 right-0 left-0 flex flex-col flex-grow">
      <header className="bg-white basis-1/12 flex justify-center items-center">
        <h1 className="text-2xl font-medium">Dashboard</h1>
      </header>
      <main className="basis-full">{children}</main>
    </div>
  );
};
