import SigninForm from "@/features/auth/components/SigninForm";

const SignInPage = async () => {
  return (
    <section
      className="flex items-center justify-center bg-no-repeat bg-cover bg-center h-screen -z-10"
      style={{ backgroundImage: `url('/assets/microsoft_auth_bg.svg')` }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <SigninForm />
      </div>
    </section>
  );
};

export default SignInPage;
