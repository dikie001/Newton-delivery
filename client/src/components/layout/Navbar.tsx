import { AlignJustify, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div
      className="fixed top-0 w-full p-4 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100 shadow z-50
    "
    >
      {/* Header */}
      <header className="flex items-center justify-between  ">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold">
            <span className="text-blue-600">N</span>
            <span className="text-gray-800">ewton </span>
            <span className="text-blue-600">D</span>
            <span className="text-gray-800">elivery</span>
          </span>
        </div>

        <nav className=" hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Services
          </a>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
        </nav>

        {/* <Button onClick={()=>navigate("request-pickup")} variant="default">Request Pickup</Button> */}
      <AlignJustify/>
      </header>

    </div>
  );
}

export default Navbar