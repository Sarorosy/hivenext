import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  User,
  Users,
  MessageCircle,
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
interface BookToorModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const BookToorModal: React.FC<BookToorModalProps> = ({ isOpen, setIsOpen }) => {
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
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 h-full">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-6 sm:p-10  max-h-[90vh] overflow-auto my-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

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

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-800">
              <MorphingText texts={texts} />
            </h2>
            <p className="text-gray-600">
              We'd love to show you around our collaborative workspaces.
            </p>

            <div className="space-y-2 text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="btn-77 p-1" />
                <a href="tel:+917022274000" className="hover:underline">
                  +91-70222 74000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="btn-77 p-1" />
                <a
                  href="mailto:hello@hiveworkspaces.com"
                  className="hover:underline"
                >
                  hello@hiveworkspaces.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
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
            className="space-y-5"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Book A Tour
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              type="button"
              onClick={handleSubmit}
              className="w-full btn-69 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookToorModal;
