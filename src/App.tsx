import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom"
import { Slide, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { router } from "./router/router"

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ToastContainer
				position="bottom-center"
				hideProgressBar={true}
				autoClose={2000}
				limit={3}
				transition={Slide}
				stacked
			/>
		</QueryClientProvider>
	)
}

export default App
