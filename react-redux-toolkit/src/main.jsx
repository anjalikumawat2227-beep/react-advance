import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/AppRouter.jsx";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
      <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <AppRouter />
    <ToastContainer />
  </Provider>
  </QueryClientProvider>
);
