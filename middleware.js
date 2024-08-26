export {default} from "next-auth/middleware"

export const config = {
    matcher: ["/home","/program","/program/(.*)","/resources","/sprintearnai","/calender","/community","/settings", "/payment"]
}

//Note: Mention all protected page routes in the matcher array.