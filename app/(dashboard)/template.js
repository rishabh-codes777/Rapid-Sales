import Navbar from "@/components/mobilenav";
import Sidebar, { BottomBar } from "@/components/sidebar";
import { checkPremium } from "@/utils/premium";
import { redirect } from "next/navigation";
export default async function DashboardTemplate({ children }) {
    const isPremium = await checkPremium();
    if(!isPremium) redirect("/payment")
    return (
      <html lang="en">
        <body >
          <Navbar />
            <div className="flex pt-20 bg-white md:pt-0">
                <Sidebar />
                <BottomBar />
                <div className="flex-1 ">
                    {children}
                </div>
            </div>
        </body>
      </html>
    );
  }