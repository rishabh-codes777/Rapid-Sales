import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export async function checkPremium() {
  try {
    const session = await getServerSession(authOption)
    console.log("user Email", session?.user?.email);

    if (session?.user?.email) {
      const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/?email=${session?.user?.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      return data.data.isPremium;
    }

    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
}
