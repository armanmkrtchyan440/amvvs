import { useRouteError } from "react-router-dom"
import { NotFoundPage } from "./NotFoundPage"

export const ErrorPage = () => {
	const error = useRouteError() as any

	if (error.status === 404) {
		return <NotFoundPage />
	}

	return (
		<section>
			<p>{error.message}</p>
		</section>
	)
}
