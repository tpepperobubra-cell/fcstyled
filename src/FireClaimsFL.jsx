"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  FileText,
  Users,
  ShieldCheck,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function FireClaimsFL() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">FireClaimsFL</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#process" className="hover:text-red-600 transition">
              Our Process
            </a>
            <a href="#audience" className="hover:text-red-600 transition">
              Who We Help
            </a>
            <a href="#resources" className="hover:text-red-600 transition">
              Resources
            </a>
            <a href="#contact" className="hover:text-red-600 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Florida Fire Insurance Claims Assistance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl mb-8"
          >
            Get the compensation you deserve after a fire damages your home or
            business
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow-lg inline-flex items-center"
          >
            Start Your Claim <ArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Simple 3-Step Process
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Contact Us",
                desc: "Reach out for a free consultation.",
              },
              {
                icon: FileText,
                title: "We Handle Your Claim",
                desc: "We’ll negotiate with your insurance company.",
              },
              {
                icon: ShieldCheck,
                title: "Get Paid Fairly",
                desc: "Receive the settlement you’re entitled to.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-2xl shadow text-center"
              >
                <step.icon className="mx-auto h-12 w-12 text-red-600 mb-4" />
                <h4 className="font-semibold text-xl mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section id="audience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Who We Help</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow"
            >
              <Users className="h-10 w-10 text-red-600 mb-4" />
              <h4 className="font-semibold text-xl mb-2">Homeowners</h4>
              <p className="text-gray-600">
                Protect your family’s most important asset with expert claim
                help.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow"
            >
              <ShieldCheck className="h-10 w-10 text-red-600 mb-4" />
              <h4 className="font-semibold text-xl mb-2">Business Owners</h4>
              <p className="text-gray-600">
                Recover losses and rebuild your business with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Resources</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Claim Filing Guide",
                desc: "Step-by-step guide to navigating fire insurance claims in Florida.",
              },
              {
                icon: FileText,
                title: "Common Mistakes",
                desc: "Avoid these pitfalls when filing your claim.",
              },
            ].map((res, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-2xl shadow"
              >
                <res.icon className="h-10 w-10 text-red-600 mb-4" />
                <h4 className="font-semibold text-xl mb-2">{res.title}</h4>
                <p className="text-gray-600">{res.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-red-600 to-red-400 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <p className="mb-8">
            Our Florida-based team is ready to help with your fire claim.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="tel:+1234567890"
              className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold flex items-center justify-center"
            >
              <Phone className="mr-2" /> (123) 456-7890
            </a>
            <a
              href="mailto:help@fireclaimsfl.com"
              className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold flex items-center justify-center"
            >
              <Mail className="mr-2" /> help@fireclaimsfl.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} FireClaimsFL. All rights reserved.</p>
      </footer>
    </div>
  );
}
