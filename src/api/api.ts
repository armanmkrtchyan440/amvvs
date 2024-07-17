import { serialize } from "object-to-formdata";

interface IResponse<T> {
  data: T;
  meta?: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface IResponseData<T> {
  id: number;
  attributes: T;
}

export interface IOurProjects {
  name: string;
  description: string;
  img: IResponse<IResponseData<{ url: string }>>;
}

export interface IService {
  name: string;
  description: string;
  price: number;
  img: IResponse<IResponseData<{ url: string }>>;
  slug: string;
}

export interface ICategory {
  name: string;
  description: string;
  slug: string;
  img: IResponse<IResponseData<{ url: string }>>;
}

export interface IRule {
  rule: string;
}

export interface IBlog {
  title: string;
  video: IResponse<IResponseData<{ url: string }>>;
  thumb: IResponse<IResponseData<{ url: string }>>;
}

export interface IJob {
  title: string;
  description: string;
  requirements: string[];
}

export interface ApplyJobBody {
  name: string;
  email: string;
  phone: string;
  message: string;
  resume: File;
}

export interface ApiParam {
  queryKey: Array<string | undefined>;
}

export async function getOurProjects() {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/our-projects?populate=*`
  );
  return (await response.json()) as IResponse<IResponseData<IOurProjects>[]>;
}

export async function getServices(category: string) {
  let categoryQuery = "";

  if (category !== "all") {
    categoryQuery = `filters[category][slug][$eq]=${category}`;
  }

  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/services?populate=*&${categoryQuery}`
  );
  return (await response.json()) as IResponse<IResponseData<IService>[]>;
}

export async function getServicesNames(options: ApiParam) {
  const [_, limit] = options.queryKey;

  const response = await fetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/api/services?fields[0]=name&fields[1]=slug&pagination[limit]=${
      limit || 25
    }`
  );
  return (await response.json()) as IResponse<IResponseData<IService>[]>;
}

export async function getService(options: ApiParam) {
  const [_, id] = options.queryKey;
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/services/${id}?populate=*`
  );
  return (await response.json()) as IResponse<IResponseData<IService>>;
}

export async function getCategories() {
  const response = await fetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/api/categories?populate=img&filters[services][name][$contains]=`
  );
  return (await response.json()) as IResponse<IResponseData<ICategory>[]>;
}

export async function getRules() {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/rules`);
  return (await response.json()) as IResponse<IResponseData<IRule>[]>;
}

export async function createQuote(body: FormData) {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/quote`, {
    method: "POST",
    body,
  });

  if (!response.ok) {
    throw response.json();
  }

  return await response.json();
}

export async function getBlogs() {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/blogs?populate=*`
  );
  return (await response.json()) as IResponse<IResponseData<IBlog>[]>;
}

export async function getJobs() {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/jobs`);
  return (await response.json()) as IResponse<IResponseData<IJob>[]>;
}

export async function applyJob(body: ApplyJobBody) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/jobs/apply`,
    {
      method: "POST",
      body: serialize(body),
    }
  );
  return await response.json();
}
