import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <main>
      <nav className="flex items-center justify-between p-8 bg-green-600/80 md:px-16 sticky top-0 backdrop-blur-sm"></nav>
      {children}
      <footer className="bg-green-600/80 p-12 md:px-16 fixed bottom-0 w-full"></footer>
    </main>
  );
};
