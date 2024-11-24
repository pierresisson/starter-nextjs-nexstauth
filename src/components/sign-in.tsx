import { signIn, signOut, auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default async function SignIn() {
  const session = await auth();

  console.log("session:", session);

  return (
    <div>
      {session ? (
        <div>
          <p>Bienvenue, {session.user?.name || "Utilisateur"} !</p>
          <p>Email : {session.user?.email}</p>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Logout</button>
          </form>
        </div>
      ) : (
        <div>
          <p>Not login.</p>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button type="submit">Login with Google</Button>
          </form>
        </div>
      )}
    </div>
  );
}
