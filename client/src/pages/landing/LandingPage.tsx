import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, MessageSquare, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-8 py-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">
              <span className="text-yellow-500">N</span>
              <span className="text-gray-800">ewton </span>
              <span className="text-yellow-500">D</span>
              <span className="text-gray-800">elivery</span>
            </span>
          </div>

          <nav className=" hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Services
            </a>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
          </nav>

          <Button variant="default">Request Pickup</Button>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-indigo-400">Quick</span>
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
            <div className="flex gap-4 pt-4">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white border-0">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-3">
                  <span className="text-3xl">🍔</span>
                </div>
                <p className="font-semibold text-gray-900">Fast Food</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white border-0">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-3">
                  <span className="text-3xl">💊</span>
                </div>
                <p className="font-semibold text-gray-900">Medicine</p>
              </Card>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute top-8 left-12 w-3 h-3 bg-yellow-300 rounded-full opacity-60"></div>
            <div className="absolute top-32 right-12 w-2 h-2 bg-purple-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-24 left-8 w-2 h-2 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute top-16 right-24 w-2 h-2 bg-pink-300 rounded-full opacity-60"></div>

            {/* Customer Reviews */}
            <Card className="absolute top-12 left-0 p-3 bg-white border-0 shadow-lg z-10 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full"></div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    Matilda Awino
                  </p>
                  <p className="text-xs text-gray-500">Fast delivery at home</p>
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
            <div className="relative bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full w-[500px] h-[500px] mx-auto flex items-center justify-center">
              <div className="text-center text-gray-700">
                <div className="text-8xl mb-4">🛵</div>
                <p className="text-lg font-semibold">Delivery Person</p>
                <p className="text-sm">on Yellow Scooter</p>
              </div>
            </div>

            {/* Floating Message Icon */}
            <Button
              className="absolute bottom-8 right-8 rounded-2xl bg-indigo-500 hover:bg-indigo-600 w-14 h-14 shadow-lg"
              size="icon"
            >
              <MessageSquare className="w-6 h-6" />
            </Button>

            {/* Decorative shapes */}
            <div className="absolute top-48 left-0 w-8 h-8 bg-yellow-200 rounded-lg opacity-40"></div>
            <div className="absolute bottom-32 right-16 w-6 h-6 bg-purple-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
