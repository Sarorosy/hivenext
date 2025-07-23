// components/JobDescriptionModal.jsx

"use client";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface JobDescriptionModalProps {
  onClose: () => void;
}

export default function JobDescriptionModal({ onClose }: JobDescriptionModalProps) {
  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto text-black p-6 sm:p-12"
    >
      <button
        className="absolute top-4 right-4 text-black hover:scale-110 transition"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={28} />
      </button>

      <div className="max-w-4xl mx-auto space-y-6 text-base leading-7">
        <h1 className="text-3xl font-bold mb-2">GM Sales JD – Bangalore</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">Firm Overview:</h2>
          <p>
            Hive Workspaces: Designed to cater to the bespoke needs of its evolving customers, The Hive is an
            all-encompassing ecosystem to nurture and grow the next generation of enterprises. The platform offers a
            pan-India portfolio of properties that provide customized, flexible and managed workplace solutions,
            including plug-n-play offices with premium amenities...
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Company Info</h2>
          <p><strong>Company:</strong> Xpandr Ventures India Pvt. Ltd. (The Hive)</p>
          <p><strong>Sector:</strong> Commercial/Office Real Estate / Co-Working</p>
          <p><strong>Designation:</strong> General Manager – Sales</p>
          <p><strong>Location:</strong> Bangalore</p>
          <p><strong>Reporting To:</strong> Board of Directors</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-4">Role Description:</h2>
          <p>The successful candidate will have the opportunity to join a dynamic flexible workspaces firm...</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-4">Responsibilities:</h2>

          <h3 className="font-semibold mt-2">Sales Leadership:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Own the regional P&L for the business and lead the Sales function</li>
            <li>Lead and manage a team of ambitious sales leads</li>
            <li>Maintain deep market knowledge and relationships with CXOs, IPCs, etc.</li>
          </ul>

          <h3 className="font-semibold mt-2">Revenue Management:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Engage throughout the full sales lifecycle</li>
            <li>Conduct site visits, customize offerings, close deals</li>
            <li>Work with finance on reporting and collections</li>
          </ul>

          <h3 className="font-semibold mt-2">Organizational Leadership:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Work with senior leadership on strategic initiatives</li>
            <li>Own occupancy and customer experience metrics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-4">Qualifications:</h2>
          <p>MBA or equivalent from a reputed business school.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-4">Experience & Skills:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>8+ years of sales/leasing in high growth firms</li>
            <li>Experience in SaaS, coworking, commercial real estate preferred</li>
            <li>Strong client communication, CRM usage (e.g., Salesforce)</li>
            <li>Self-starter, analytical, solution-oriented</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-4">Compensation:</h2>
          <p>Attractive remuneration package</p>
          <p><strong>Start Timeline:</strong> Immediate</p>
        </section>
      </div>
    </motion.div>
  );
}
