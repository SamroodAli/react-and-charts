import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isLoading: boolean;
  error: boolean;
  loadingText: string;
  errorText: string;
}

export const Loader: FC<Props> = ({
  children,
  isLoading,
  error,
  loadingText,
  errorText,
}) => {
  return (
    <div className="relative h-full w-full">
      {children}
      {isLoading && (
        <div className=" absolute top-0 left-0 h-full w-full flex items-center justify-center bg-white opacity-75">
          <div>
            <p className="mb-4">{loadingText}</p>
            <div className="h-8 w-8 mx-auto rounded-full border-t-8 border-gray-900 border-opacity-25 animate-spin"></div>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-red-500 text-white">
          {errorText}
        </div>
      )}
    </div>
  );
};
