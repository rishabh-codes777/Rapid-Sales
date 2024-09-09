import Sidebar from "@/components/mainpage/sidebar";
import Navbar from "@/components/mainpage/navbar";
import SalesSummary from "@/components/mainpage/sales";
import Reality from "@/components/mainpage/reality";
import Satisfaction from "@/components/mainpage/satisfaction";
import Volumechart from "@/components/mainpage/volumechart";
const MainPage = () => {
    return (
        <div style={{ display: 'flex', backgroundColor: 'white', gap: '20px' }}> {/* Gap between Sidebar and main content */}
            <Sidebar />
            
            <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', flexDirection: 'column', gap: '20px' }}> {/* Gap between Navbar and other components */}
                <Navbar />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}> {/* Equal gap between SalesSummary and other components */}
                    <SalesSummary />
                    
                    <div style={{ display: 'flex', gap: '20px' }}> {/* Reality and Satisfaction side by side */}
                        <Reality />
                        <Satisfaction />
                    <div>
                        <Volumechart />
                    </div>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
