import CustomInput from "@/components/input";
import { StepProps } from "../type";

const SignUpStepOne = ({ formData, setFormData, error }: StepProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  return (
    <>
      <CustomInput
        labelBgColor="#292929"
        textColor="text-gray-400"
        inputType="text"
        inputPlaceholder="Email"
        value={formData.email}
        onChange={handleChange}
        error={error}
      />
    </>
  );
};

export const StepOneHeader = () => {
  return (
    <>
      <h1 className="text-center mb-3 text-white text-2xl">
        Create your Microsoft account
      </h1>
      <p className="text-center text-[#D2D2D2] text-sm">
        Enter your email address.
      </p>
    </>
  );
};

export default SignUpStepOne;
