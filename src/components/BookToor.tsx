import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  User,
  Users,
  MessageCircle,
  LocateIcon,
} from "lucide-react";


import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
 import { MorphingText } from "@/components/magicui/morphing-text";
 
const texts = [
  "Contact Us",
  "Book Now",
  "Enquire Today",
  "Get in Touch",
  "Let's Talk",
  "Send a Message",
  "Schedule a Call",
  "Request Info",
  "Start a Conversation",
  "We're Listening",
];


const locations = [
  "The Hive at Whitefield, Bangalore",
  "The Hive at Hyderabad",
  "The Hive at Mills, Pune",
  "The Hive at Chennai, OMR",
  "The Hive at Chennai, Anna Nagar",
  "The Hive at PTP, Bengaluru",
  "The Hive at SKCL Guindy, Chennai",
];

const BookToor: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    seats: "",
    message: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-14 md:px-10 relative overflow-hidden z-10">
         <DotPattern
  width={20}
  height={20}
  cx={1}
  cy={1}
  cr={1}
  className={cn(
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30",
    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
  )}
/>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start z-50">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
           <MorphingText texts={texts} />
          </h2>
          <p className="text-lg text-gray-600">
            We'd love to show you around our collaborative workspaces.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <a href="tel:+917022274000" className="hover:underline">
                +91-70222 74000
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <a
                href="mailto:hello@hiveworkspaces.com"
                className="hover:underline"
              >
                hello@hiveworkspaces.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              We Offer:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 pl-2">
              <li>Customized Workspaces</li>
              <li>Private Cabins</li>
              <li>Dedicated Desks</li>
              <li>Hot Desks</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-xl space-y-6 border border-gray-100 animate-fadeIn"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Book A Tour
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="relative">
              <User className="absolute top-3 left-3 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="pl-10 pr-4 py-2 w-full rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="pl-10 pr-4 py-2 w-full rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="relative">
              <Phone className="absolute top-3 left-3 text-gray-400" size={18} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="pl-10 pr-4 py-2 w-full rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="relative">
              <Users className="absolute top-3 left-3 text-gray-400" size={18} />
              <input
                type="number"
                name="seats"
                placeholder="Seats"
                value={form.seats}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="relative">
            <MessageCircle
              className="absolute top-3 left-3 text-gray-400"
              size={18}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full rounded-xl border border-gray-300 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute top-3 left-3 text-gray-400" size={18} />
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="pl-10 pr-4 py-2 w-full rounded-xl border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="" disabled>
                Select Location
              </option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookToor;
