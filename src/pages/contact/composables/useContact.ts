import { ref } from "vue";
import { formTypes } from "../../../components/contact/contactForm/contactForm.types";

export const useContact = () => {
  const formData = ref<formTypes>({
    name: "",
    company: "",
    number: "",
    email: "",
    question: "",
  });

  const handleSubmit = () => {
    console.log("Form data ...", formData);
  };

  return {
    formData,
    handleSubmit,
  };
};
