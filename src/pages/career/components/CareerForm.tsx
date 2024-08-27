import { ApplyJobBody, applyJob } from "@/api/api"
import { Loading } from "@/components/ui/Loading"
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { ChangeEventHandler, useCallback, useMemo, useRef } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import PhoneInput from "react-phone-number-input/react-hook-form-input"
import { toast } from "react-toastify"
import * as yup from "yup"

export const CareerForm = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "career.job-apply" })

	const schema = useMemo(
		() =>
			yup
				.object({
					name: yup
						.string()
						.trim()
						.min(1, t("name.error"))
						.required(t("name.error")),
					email: yup
						.string()
						.email(t("email.error.email"))
						.required(t("email.error.required")),
					phone: yup.string().trim().required(t("phone.error")),
					message: yup.string().max(2500, t("message.error")).default(""),
					resume: yup.mixed().required(t("resume.error")),
				})
				.required() as yup.ObjectSchema<ApplyJobBody>,
		[t]
	)

	const {
		register,
		handleSubmit,
		control,
		setValue,
		reset,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
		resolver: yupResolver(schema),
	})

	const fileInpRef = useRef<HTMLInputElement>(null)

	const handleFileChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
		e => {
			const files = e.target.files

			if (files && files[0]) {
				setValue("resume", files[0])
			}
		},
		[setValue]
	)
	const mutation = useMutation({
		mutationFn: applyJob,
		onSuccess() {
			reset()
			toast.success("arbetsansökan har skickats in")
		},
		onError(error) {
			console.log(error)
		},
	})

	const onSubmit = useCallback<SubmitHandler<ApplyJobBody>>(
		async data => {
			mutation.mutate(data)
		},
		[mutation]
	)

	return (
		<section className="mb-12">
			<h2 className="text-2xl font-bold mb-6">{t("title")}</h2>
			<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="name" className="block mb-2 font-medium">
						{t("name.title")}
					</label>
					<input
						type="text"
						id="name"
						className="w-full p-3 border rounded-lg"
						{...register("name")}
					/>
					<p>{errors.name?.message}</p>
				</div>
				<div>
					<label htmlFor="email" className="block mb-2 font-medium">
						{t("email.title")}
					</label>
					<input
						type="text"
						id="email"
						className="w-full p-3 border rounded-lg"
						{...register("email")}
					/>
					<p>{errors.email?.message}</p>
				</div>
				<div>
					<label htmlFor="phone" className="block mb-2 font-medium">
						{t("phone.title")}
					</label>
					<PhoneInput
						international
						withCountryCallingCode
						country="SE"
						name="phone"
						control={control}
						className="w-full border border-white border-b-gray-300 p-2"
					/>
					<p>{errors.phone?.message}</p>
				</div>
				<div>
					<label htmlFor="message" className="block mb-2 font-medium">
						{t("message.title")}
					</label>
					<textarea
						id="message"
						className="w-full p-3 border rounded-lg"
						{...register("message")}
					/>
					<p>{errors.message?.message}</p>
				</div>
				<div>
					<label htmlFor="resume" className="block mb-2 font-medium">
						{t("resume.title")}
					</label>
					<input
						type="file"
						className="w-full p-3 border rounded-lg"
						multiple={false}
						ref={fileInpRef}
						onChange={handleFileChange}
						accept="image/*, application/pdf"
					/>
					<p>{errors.resume?.message}</p>
				</div>
				<button
					type="submit"
					disabled={mutation.isPending}
					className="primary-color-bg flex items-center gap-5 rounded px-8 py-3 text-sm font-semibold uppercase text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400"
				>
					{mutation.isPending && <Loading className="w-5 h-5 fill-blue-400" />}
					{t("submit")}
				</button>
			</form>
		</section>
	)
}
