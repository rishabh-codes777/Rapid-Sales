"use client"
import LoginPage  from "@/components/loginPage"
import { useEffect, useState } from "react";
import RegisterPage from "@/components/registerPage";
const Login = () =>{
    const [isLoginPage,setIsLoginPage] = useState(true);
    useEffect(()=>{
        console.log("is login?"+isLoginPage)
    },[isLoginPage])
    if(isLoginPage){
        return <LoginPage setIsLoginPage={setIsLoginPage}/>
    }
    else{
        return <RegisterPage setIsLoginPage= {setIsLoginPage} />
    }
}

export default Login