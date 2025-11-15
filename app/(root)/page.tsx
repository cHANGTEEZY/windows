import { requireAuth } from "@/lib/session";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await requireAuth();

  if (!session) {
    return redirect("/login");
  }

  return (
    <div>
      <h1>WELCOME !!!</h1>
    </div>
  );
};

export default HomePage;
