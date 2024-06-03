import {ProvidersCopmosition} from "./providers";
import {AppRouter} from "./routes";

export const App = () => {
  return (
    <ProvidersCopmosition>
      <AppRouter />
    </ProvidersCopmosition>
  );
};
