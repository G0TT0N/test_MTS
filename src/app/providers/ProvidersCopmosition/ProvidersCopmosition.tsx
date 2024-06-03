import {FC} from "react";
import {TWrapperComponent} from "../../../shared/types";
import {ErrorBoundary} from "../ErrorBoundary/ErrorBoundary";

export const ProvidersCopmosition: FC<TWrapperComponent> = ({children}) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};
