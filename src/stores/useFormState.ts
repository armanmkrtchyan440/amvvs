import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  files: File[];
};

export const useFormState = create<
  { contact: FormState } & { setContact: (contact: FormState) => void }
>()(
  devtools((set) => ({
    contact: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      files: [],
    },
    setContact: (contact) => set(() => ({ contact }), false, "setContact"),
  }))
);
