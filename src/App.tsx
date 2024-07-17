import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar={true}
        limit={3}
        transition={Slide}
      />
    </QueryClientProvider>
  );
}

export default App;
