import { signUpAction } from "@/app/actions/auth";
import CustomInput from "@/components/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import AuthForm from "@/features/auth/components/AuthForm";

const SignUpPage = () => {
  return (
    <section
      className=" bg-no-repeat bg-cover bg--center h-screen -z-10 w-full"
      style={{ backgroundImage: `url('/assets/microsoft_auth_bg.svg')` }}
    >
      <form
        action={signUpAction}
        className="w-full h-full flex items-center justify-center"
      >
        <AuthForm />
      </form>
    </section>
  );
};

export default SignUpPage;
