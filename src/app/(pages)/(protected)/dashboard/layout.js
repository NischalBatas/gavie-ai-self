import Navbar from "@/components/Pages/Dashboard/Navbar/Navbar";
import Sidebar from "@/components/Pages/Dashboard/Sidebar/Sidebar";
import '../../../../components/Pages/Dashboard/dashboard.css'

const ProtectedLayout = ({ children }) => {
  
  return (
    <div className="main-container3">
      <Navbar />
      <div className="flex gap-2 ">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="overflow-y-scroll w-full height_content px-2 md:px-5 py-4">{children}</div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
