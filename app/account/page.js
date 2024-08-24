import { auth } from "../_lib/auth";

export const metadata = {
  title: "Your Account",
};

export default async function Page() {
  const session = await auth();
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Hello {session.user.name.split(" ").at(0)},
    </h2>
  );
}
