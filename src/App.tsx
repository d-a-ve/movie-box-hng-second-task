import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MyRouterProvider from "./routes/MyRouterProvider";
import Loader from "@components/Loader/Loader";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <MyRouterProvider />
      </Suspense>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
