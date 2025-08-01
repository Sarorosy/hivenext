"use client";

import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Users,
  Calendar,
  MapPin,
  Check,
  Star,
  Zap,
  Shield,
  Smartphone,
  ChevronRight,
  Building,
  Clock,
  DollarSign,
  Wifi,
  Coffee,
  Gamepad2,
  Printer,
  Phone,
  UserCheck,
  Gift,
  Calendar as CalendarIcon,
  Home,
  PlayCircle,
  Award,
  Target,
} from "lucide-react";

// Import from your data file
import { workspaces, amenities, getWorkspaceBySlug } from "@/data/workspaces";

const getAmenityIcon = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    "Mask group-1": Home,
    "Mask group-4": Building,
    "Mask group-9": Gamepad2,
    "Mask group": Printer,
    "Mask group-2": UserCheck,
    "Mask group-8": Smartphone,
    "Mask group-7": Gift,
    "Mask group-3": Wifi,
    "Mask group-10": CalendarIcon,
    "Mask group-11": Phone,
    "Mask group-5": Coffee,
    "Mask group-6": Users,
  };
  return iconMap[iconName] || Star;
};

export default function WorkspacePage() {
  const params = useParams();
  const { slug } = params;

  const workspace = getWorkspaceBySlug(slug as string);

  if (!workspace) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building className="w-8 h-8 text-gray-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Workspace Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The workspace you're looking for doesn't exist.
          </p>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(0)}L`;
    } else if (price >= 1000) {
      return `₹${(price / 1000).toFixed(0)}K`;
    }
    return `₹${price}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center text-sm text-gray-500">
              <span>Home</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span>Workspaces</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-black font-medium">{workspace.name}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6">
                <Award className="w-4 h-4 mr-2" />
                Premium Workspace Solution
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                {workspace.name}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {workspace.description}
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">
                    {workspace.capacity}
                  </div>
                  <div className="text-sm text-gray-500">Capacity</div>
                </div>
                {workspace.pricing && (
                  <div className="text-center border-l border-r border-gray-200">
                    <div className="text-2xl font-bold text-black mb-1">
                      {formatPrice(workspace.pricing.from)}
                    </div>
                    <div className="text-sm text-gray-500">
                      From /{workspace.pricing.period}
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">24/7</div>
                  <div className="text-sm text-gray-500">Access</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Tour
                </button>
                <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors flex items-center justify-center">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Virtual Tour
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Modern workspace"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center text-sm font-medium text-gray-900">
                  <MapPin className="w-4 h-4 mr-2" />
                  68 centers across 8 cities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Target audience workspace"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-black mr-3" />
                <h2 className="text-3xl font-bold text-black">Perfect For</h2>
              </div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {workspace.targetAudience}
              </p>
              <div className="space-y-4">
                {workspace.benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-black flex-shrink-0 mr-4 mt-1" />
                    <span className="text-gray-700 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to work efficiently and professionally
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {workspace.features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-black">
                  <div className="flex items-start mb-6">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:bg-gray-800 transition-colors">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Workspace Gallery
            </h2>
            <p className="text-xl text-gray-600">
              See what makes our spaces special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="md:col-span-2 lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=800&h=500&fit=crop"
                alt="Main workspace area"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=190&fit=crop"
                alt="Meeting room"
                className="w-full h-[190px] object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=190&fit=crop"
                alt="Lounge area"
                className="w-full h-[190px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Premium Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Every amenity you need, included in your membership
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => {
              const IconComponent = getAmenityIcon(amenity.icon);
              return (
                <div key={index} className="group text-center">
                  <div className="bg-gray-50 group-hover:bg-black transition-colors duration-300 rounded-2xl p-8 mb-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-bold text-black group-hover:text-white mb-2 transition-colors">
                      {amenity.name}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">
                Why Choose {workspace.name}?
              </h2>
              <div className="space-y-6">
                {workspace.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop"
                alt="Benefits workspace"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Professional workspace solutions that fit your budget
          </p>

          <div className="bg-gray-50 rounded-3xl p-12 max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="text-5xl font-bold text-black mb-2">
                {workspace.pricing?.from
                  ? formatPrice(workspace.pricing.from)
                  : "Price not available"}
                {workspace.pricing?.period && (
                  <span className="text-2xl text-gray-500 font-normal">
                    /{workspace.pricing.period}
                  </span>
                )}
              </div>
              <p className="text-gray-600">
                Starting price for {workspace.capacity}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10 text-left">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                <span className="text-gray-700">All amenities included</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                <span className="text-gray-700">24/7 access</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                <span className="text-gray-700">Meeting room access</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                <span className="text-gray-700">Community events</span>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                Get Custom Quote
              </button>
              <button className="w-full border-2 border-black text-black px-8 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition-colors">
                Schedule a Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Workspace?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of professionals who have made The Hive their
            workspace home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Tour Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">68</div>
              <div className="text-gray-400">Centers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-gray-400">Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-gray-400">Happy Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
