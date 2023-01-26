import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="h-screen">
      <header className="bg-green-600/80 h-24 fixed top-0 w-full">
        <nav className="flex items-center justify-between bg-green-600/80 md:px-16 sticky top-0 backdrop-blur-sm"></nav>
      </header>
      <main className="py-24 h-screen overflow-scroll">{children}</main>
      <footer className="bg-green-600/80 h-24 w-full fixed bottom-0"></footer>
    </div>
  );
};
