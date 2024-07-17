import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ChangeEventHandler, useCallback, useMemo, useRef } from "react";
import { createQuote } from "@/api/api";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/react-hook-form-input";

import "react-phone-number-input/style.css";
import { FormState, useFormState } from "@/stores/useFormState";
import { useTranslation } from "react-i18next";
import { useCartItems } from "@/stores/useCartItems";
import { toast } from "react-toastify";

export const QuoteForm = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "contact-form" });

  const schema = useMemo(
    () =>
      yup
        .object({
          firstName: yup
            .string()
            .trim()
            .min(1, t("first-name.error"))
            .required(t("first-name.error")),
          lastName: yup
            .string()
            .trim()
            .min(1, t("last-name.error"))
            .required(t("last-name.error")),
          email: yup
            .string()
            .email(t("email.error.email"))
            .required(t("email.error.required")),
          phone: yup.string().trim().required(t("phone.error")),
          message: yup.string().max(2500, t("message.error")).default(""),
          files: yup.array().nullable().required(),
        })
        .required(),
    []
  );

  const { contact, setContact } = useFormState();
  const { cartItems, rot } = useCartItems();

  const fileInpRef = useRef<HTMLInputElement>(null);

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
    defaultValues: contact || {},
  });

  const { append, remove } = useFieldArray({ control, name: "files" });

  const onSubmit = useCallback<SubmitHandler<FormState>>(
    async (data) => {
      const formData = new FormData();

      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("message", data.message);

      for (const file of data.files) {
        formData.append("files", file);
      }

      formData.append("services", JSON.stringify(cartItems));
      formData.append("rot", JSON.stringify(rot));

      try {
        await createQuote(formData);
      } catch (error) {
        toast.error("Serverfel: försök igen senare");
      }

      reset({});

      setContact(getValues());
    },
    [rot, cartItems]
  );

  const handleFileChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const files = e.target.files;

      if (files && files[0]) {
        const data = getValues();
        if (data?.files?.length < 3) {
          const file = files[0];
          append(file);
          // setContact(getValues() as FormState);
        }
      }
    },
    []
  );

  return (
    <form
      id="contact-us-form"
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => {
        setContact(getValues() as FormState);
      }}
    >
      <div className="flex flex-col space-y-4 md:space-y-12">
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
          <div className="w-full">
            <div>
              <label htmlFor="first-name" className="font-medium text-gray-700">
                {t("first-name.title")}
              </label>
            </div>
            <div>
              <input
                type="text"
                className="w-full border border-white border-b-gray-300 p-2"
                {...register("firstName")}
              />
              <p>{errors.firstName?.message}</p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <label htmlFor="last-name" className="font-medium text-gray-700">
                {t("last-name.title")}
              </label>
            </div>
            <div>
              <input
                type="text"
                className="w-full border border-white border-b-gray-300 p-2"
                {...register("lastName")}
              />
              <p>{errors.lastName?.message}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
          <div className="w-full">
            <div>
              <label htmlFor="email" className="font-medium text-gray-700">
                {t("email.title")}
              </label>
            </div>
            <div>
              <input
                type="text"
                className="w-full border border-white border-b-gray-300 p-2"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <label htmlFor="phone" className="font-medium text-gray-700">
                {t("phone.title")}
              </label>
            </div>
            <div>
              {/* <input
                type="phone"
                className="w-full border border-white border-b-gray-300 p-2"
                {...register("phone")}
              /> */}

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
          </div>
        </div>

        <div className="w-full">
          <div>
            <label htmlFor="message" className="font-medium text-gray-700">
              {t("message.title")}
            </label>
          </div>
          <div>
            <textarea
              rows={3}
              className="w-full border border-white border-b-gray-300 p-2 resize-none"
              {...register("message")}
            ></textarea>
            <p>{errors.message?.message}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            <input
              type="file"
              hidden
              ref={fileInpRef}
              onChange={handleFileChange}
              accept="image/*, application/pdf"
            />
            {contact.files.map((file, index) => {
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
                      remove(index);
                      setContact(getValues() as FormState);
                    }}
                  >
                    &#10005;
                  </button>
                </div>
              );
            })}
            {contact.files.length < 3 && (
              <button type="button" onClick={() => fileInpRef.current?.click()}>
                {t("files.title")}
              </button>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="primary-color-bg items-center rounded px-8 py-3 text-sm font-semibold uppercase text-white bg-blue-600 hover:bg-blue-500"
          >
            {t("submit")}
          </button>
        </div>
      </div>
    </form>
  );
};
