export interface formTypes {
  name: string;
  company: string;
  number: number | string;
  email: string;
  question: string;
}

export interface ContactFormPropsTypes {
  formData: {
    name: string;
    company: string;
    number: string | number;
    email: string;
    question: string;
  };
  handleSubmit: () => void;
  handleChange: () => void;
}
