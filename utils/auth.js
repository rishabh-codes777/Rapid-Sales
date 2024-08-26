import { getSession } from "next-auth/react"; // Ensure to import from "next-auth/react" for client-side
import Cookies from "js-cookie";

export async function checkUser() {
  try {
    const session = await getSession();
    console.log("user Email", session?.user?.email);

    if (session?.user?.email) {
      const res = await fetch(`/api/users/?email=${session?.user?.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      Cookies.set("user", data.data.email);
      console.log("my data is", data);
      return data.data;
    }

    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
}
