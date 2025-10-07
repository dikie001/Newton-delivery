import AssistantBot from "@/components/layout/AssistantBot";
import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";
import { Star } from "lucide-react";
import parcel from "/images/box.png";
import pharmaceuticals from "/images/pharmaceutical.png";

export default function HomePage() {
    const {
      // state,
      open,
      // setOpen,
      // openMobile,
      // setOpenMobile,
      // isMobile,
      // toggleSidebar,
    } = useSidebar();
  return (
    <>
      {" "}
      <div className="min-h-screen w-full">
        {/* Navbar */}
        <Navbar />{" "}

        <div className={`${open ? 'md:ml-60':'md:ml-8'}  transition-all ease-in-out duration-300 max-w-7xl  mx-auto px-8 py-6 pt-24`}>
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-600">Quick</span>
                <br />
                <span className="text-gray-900">delivery at</span>
                <br />
                <span className="text-gray-900">your doorstep</span>
              </h1>

              <p className="text-gray-600 text-lg max-w-md">
                Fast and reliable local deliveries for parcels, documents, and
                goods.
              </p>

              {/* Service Cards */}
              <div className="flex gap-4 pt-2">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-blue-600/20 border-0">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-3">
                    <img src={parcel} width={50} alt="parcel" />
                  </div>
                  <p className="font-semibold text-gray-900">Parcels</p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-blue-600/20 border-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-3">
                    <img src={pharmaceuticals} width={50} alt="medicine" />
                  </div>
                  <p className="font-semibold text-gray-900 text-base">
                    Pharmaceuticals
                  </p>
                </Card>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="relative">
              {/* Decorative dots */}

              <Card className="absolute top-12 left-0 p-3 bg-white border-0 shadow-lg z-10 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      Matilda Awino
                    </p>
                    <p className="text-xs text-gray-500">
                      Fast delivery at home
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="absolute top-8 right-0 p-3 bg-white border-0 shadow-lg z-10 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      Ryanne Ochieng
                    </p>
                    <p className="text-xs text-gray-500">Super fast delivery</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Main Illustration Placeholder */}
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-full w-[500px] h-[500px] mx-auto flex items-center justify-center">
                <div className="text-center text-gray-700">
                  <div className="text-8xl mb-4">🛵</div>
                </div>
              </div>

              {/* Decorative shapes */}
              <div className="absolute top-48 left-0 w-8 h-8 bg-yellow-200 rounded-lg opacity-40"></div>
              <div className="absolute bottom-32 right-16 w-6 h-6 bg-purple-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Message Icon */}
      {/* {showConntactButton && (
        <div className="relative">
          <div
            onClick={() => setShowContactButton(!setShowContactButton)}
            className="p-1.5 z-50 hover:bg-blue-600/10 cursor-pointer active:bg-blue-600/20 rounded-lg fixed bottom-22  right-4"
          >
            <X size={18} />
          </div>{" "}
          <Button
            className="fixed   bottom-8 active:scale-95 right-8 z-55 hover:scale-105 cursor-pointer  rounded-2xl bg-indigo-500 hover:bg-indigo-600 w-14 h-14 shadow-lg"
            size="icon"
          >
            <MessageSquare size={24} />
          </Button>
        </div>
      )} */}
      <AssistantBot/>
    </>
  );
}
