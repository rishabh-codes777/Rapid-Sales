import Login from "@/components/login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "../api/auth/[...nextauth]/route";
const SignIn = async() =>{
    const session = await getServerSession(authOption)
    if(session) redirect("/payment")
    return (
        <Login/>
    )
}

export default SignIn

