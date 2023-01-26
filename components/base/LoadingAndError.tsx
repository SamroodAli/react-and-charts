import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isLoading: boolean;
  error: boolean;
  loadingText: string;
  errorText: string;
}

export const LoadingAndError: FC<Props> = ({
  children,
  isLoading,
  error,
  loadingText,
  errorText,
}) => {
  return (
    <div className="relative">
      <div
        className="absolute w-full h-full bg-gray-300 animate-pulse text-4xl text-white p-5 flex justify-center items-center rounded-sm"
        style={{ visibility: isLoading ? "visible" : "hidden" }}
      >
        {loadingText}
      </div>
      <div
        className="absolute w-full h-full bg-red-300 text-4xl text-white p-5 flex justify-center items-center rounded-sm"
        style={{ visibility: error ? "visible" : "hidden" }}
      >
        {errorText}
      </div>
      {children}
    </div>
  );
};
