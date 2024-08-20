import { serialize } from "object-to-formdata"

interface IResponse<T> {
	data: T
	meta?: {
		pagination: {
			page: number
			pageSize: number
			pageCount: number
			total: number
		}
	}
}

export interface IResponseData<T> {
	id: number
	attributes: T
}

export interface IOurProjects {
	name: string
	description: string
	img: IResponse<IResponseData<{ url: string }>>
}

export interface IService {
	name: string
	description: string
	price: number
	img: IResponse<IResponseData<{ url: string }>>
	category: IResponse<IResponseData<ICategory>>
	slug: string
	bortforsling: number
	locale: string
	localizations: IResponse<IResponseData<{ slug: string; locale: string }>[]>
}

export interface ICategory {
	name: string
	description: string
	slug: string
	img: IResponse<IResponseData<{ url: string }>>
	localizations: IResponse<IResponseData<{ slug: string; locale: string }>[]>
	locale: string
}

export interface IRule {
	rule: string
}

export interface IBlog {
	title: string
	video: IResponse<IResponseData<{ url: string }>>
	thumb: IResponse<IResponseData<{ url: string }>>
}

export interface IJob {
	title: string
	description: string
	requirements: string[]
}

export interface ApplyJobBody {
	name: string
	email: string
	phone: string
	message: string
	resume: File
}

export interface ApplyContactsBody {
	name: string
	email: string
	phone: string
	message: string
	files: File[]
}

export interface ApiParam {
	queryKey: Array<string | undefined>
}

export async function getOurProjects() {
	const response = await fetch(
		`${import.meta.env.VITE_BASE_URL}/api/our-projects?populate=*`
	)
	return (await response.json()) as IResponse<IResponseData<IOurProjects>[]>
}

export async function getServices(category: string, lang: string) {
	// let categoryQuery = ""

	// if (category !== "all") {
	// 	categoryQuery = `filters[category][slug][$eq]=${category}`
	// }

	const response = await fetch(
		`${import.meta.env.VITE_BASE_URL}/api/services?locale=${lang}&populate=*`
	)
	return (await response.json()) as IResponse<IResponseData<IService>[]>
}

export async function getService(id?: string, lang?: string) {
	const response = await fetch(
		`${import.meta.env.VITE_BASE_URL}/api/services/${id}?locale=${lang}`
	)

	if (!response.ok) {
		throw new Response("Service not found", { status: response.status })
	}

	return (await response.json()) as IResponse<IResponseData<IService>>
}

export async function getCategories(lang: string) {
	const response = await fetch(
		`${
			import.meta.env.VITE_BASE_URL
		}/api/categories?locale=${lang}&populate=*&filters[services][name][$contains]=`
	)
	return (await response.json()) as IResponse<IResponseData<ICategory>[]>
}

export async function getRules(lang: string) {
	const response = await fetch(
		`${import.meta.env.VITE_BASE_URL}/api/rules?locale=${lang}&`
	)
	return (await response.json()) as IResponse<IResponseData<IRule>[]>
}

export async function createQuote(body: FormData) {
	const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/quote`, {
		method: "POST",
		body,
	})

	if (!response.ok) {
		throw response.json()
	}

	return await response.json()
}

export async function getBlogs(lang: string) {
	const response = await fetch(
		`${import.meta.env.VITE_BASE_URL}/api/blogs?locale=${lang}&populate=*`
	)
	return (await response.json()) as IResponse<IResponseData<IBlog>[]>
}

export async function getJobs(lang: string) {
	const response = await fetch(
		`${import.meta.env.VITE_BASE_URL}/api/jobs?locale=${lang}&`
	)
	return (await response.json()) as IResponse<IResponseData<IJob>[]>
}

export async function applyJob(body: ApplyJobBody) {
	const response = await fetch(
		`${import.meta.env.VITE_BASE_URL}/api/jobs/apply`,
		{
			method: "POST",
			body: serialize(body),
		}
	)
	return await response.json()
}

export async function applyContacts(body: FormData) {
	const response = await fetch(
		`${import.meta.env.VITE_BASE_URL}/api/contacts`,
		{
			method: "POST",
			body,
		}
	)

	if (!response.ok) {
		throw response.json()
	}

	return await response.json()
}
