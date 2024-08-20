import { applyContacts, ApplyContactsBody } from "@/api/api"
import { Loading } from "@/components/ui/Loading"
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { ChangeEventHandler, useCallback, useMemo, useRef } from "react"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import PhoneInput from "react-phone-number-input/react-hook-form-input"
import { toast } from "react-toastify"
import * as yup from "yup"

export const QuotePage = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "contact-form" })

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
					files: yup.array().nullable().required(),
				})
				.required(),
		[t]
	)

	const {
		register,
		handleSubmit,
		control,
		getValues,
		reset,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
		resolver: yupResolver(schema),
		defaultValues: { name: "", email: "", message: "", files: [], phone: "" },
	})

	const { append, remove } = useFieldArray({ control, name: "files" })

	const fileInpRef = useRef<HTMLInputElement>(null)

	const handleFileChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
		e => {
			const files = e.target.files

			if (files && files[0]) {
				const data = getValues()
				if (data?.files?.length < 3) {
					const file = files[0]
					append(file)
				}
			}
		},
		[append, getValues]
	)

	console.log(getValues("files"))

	const mutation = useMutation({
		mutationFn: applyContacts,
		onSuccess() {
			reset()
			toast.success("arbetsansökan har skickats in")
		},
		onError(error) {
			console.log(error)
		},
	})

	const onSubmit = useCallback<SubmitHandler<ApplyContactsBody>>(
		async data => {
			const formData = new FormData()

			formData.append("name", data.name)
			formData.append("email", data.email)
			formData.append("phone", data.phone)
			formData.append("message", data.message)

			for (const file of data.files) {
				formData.append("files", file)
			}

			mutation.mutate(formData)
		},
		[mutation]
	)

	return (
		<section className="code-section bg-white py-20 font-['Poppins']">
			<div className="container">
				<h2 className="mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl">
					{t("title")}
				</h2>
				<section className="mb-12">
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
						<div className="flex gap-5">
							<input
								type="file"
								hidden
								ref={fileInpRef}
								onChange={handleFileChange}
								accept="image/*, application/pdf"
							/>
							{getValues("files").map((file, index) => {
								return (
									<div
										key={index}
										className="relative px-8 py-4 border flex justify-center items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0"
									>
										{file.name}
										<button
											type="button"
											className="absolute top-0 right-2"
											onClick={() => {
												remove(index)
											}}
										>
											&#10005;
										</button>
									</div>
								)
							})}
							{getValues("files").length < 3 && (
								<button
									type="button"
									className="px-8 py-4 border transition-shadow hover:shadow"
									onClick={() => fileInpRef.current?.click()}
								>
									{t("files.title")}
								</button>
							)}
						</div>
						<button
							type="submit"
							className="w-full p-3 bg-blue-600 text-white rounded-lg"
						>
							{mutation.isPending ? (
								<Loading className="w-5 h-5" />
							) : (
								t("submit")
							)}
						</button>
					</form>
				</section>
			</div>
		</section>
	)
}
