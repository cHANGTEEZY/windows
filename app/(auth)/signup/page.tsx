import SignupForm from "@/features/auth/components/SingupForm";

const SignUpPage = async () => {
  return (
    <section
      className="flex items-center justify-center bg-no-repeat bg-cover bg-center h-screen -z-10 "
      style={{ backgroundImage: `url('/assets/microsoft_auth_bg.svg')` }}
    >
      <form className="w-full h-full flex items-center justify-center ">
        <SignupForm />
      </form>
    </section>
  );
};

export default SignUpPage;
