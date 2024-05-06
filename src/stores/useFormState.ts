import { create } from "zustand";

export type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  phone: string;
  message: string;
  files: File[];
};

export const useFormState = create<
  { contact: FormState } & { setContact: (contact: FormState) => void }
>()((set) => ({
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    phone: "",
    message: "",
    files: [],
  },
  setContact: (contact) => set(() => ({ contact })),
}));
