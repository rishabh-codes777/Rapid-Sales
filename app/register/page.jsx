import RegisterPage from "@/components/registerPage"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "../api/auth/[...nextauth]/route";
const Register = async() =>{
    const session = await getServerSession(authOption)
    if(session){
        redirect("/dashboard")
    }
    return (
        <RegisterPage/>
    )
}

export default Register