export type FormData = {
  email: string;
  otpCode: string;
  storedOtpCode?: string;
  password: string;
};

export type StepProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  error: string;
  handleIncrement?: () => void;
};
