import CustomInput from "@/components/input";
import { SignInFormData } from "../type";

type StepProps = {
  formData: SignInFormData;
  setFormData: (data: SignInFormData) => void;
  error?: string;
};

const SignInStepTwo = ({ formData, setFormData, error }: StepProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  };

  return (
    <>
      <CustomInput
        labelBgColor="#292929"
        textColor="text-gray-400"
        inputType="password"
        inputPlaceholder="Password"
        value={formData.password}
        onChange={handleChange}
        error={error}
      />
    </>
  );
};

export const StepTwoHeader = ({ email }: { email: string }) => {
  return (
    <>
      <h1 className="text-center mb-3 text-white text-2xl">Enter password</h1>
      <p className="text-center text-[#D2D2D2] text-sm">{email}</p>
    </>
  );
};

export default SignInStepTwo;
