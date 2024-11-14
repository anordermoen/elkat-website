import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Linkedin, Mail, MapPin, Building } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elkat AS",
  description: "Vi leverer arbeidskraft, spesialisert på elektro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={montserrat.className}>
        <SiteHeader />
        <div className="pt-20">{children}</div>
        <footer className="border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-bold text-xl text-gray-50">Elkat AS</h3>
                </div>
                <p className="text-gray-300 mb-4 max-w-sm">
                  Your trusted partner for electrical workforce solutions in
                  industry and construction sectors.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.linkedin.com/company/elkat-as"
                    className="text-gray-300 hover:text-gray-50 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-gray-50 mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-300 hover:text-gray-50 transition-colors hover:font-medium"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-300 hover:text-gray-50 transition-colors hover:font-medium"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:text-gray-50 transition-colors hover:font-medium"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Contact Info */}
              <div>
                <h4 className="font-bold text-gray-50 mb-4">Contact Us</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <Building className="h-5 w-5 mr-2" />
                    <span>Org nr. 929 683 277</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Oslo, Norway</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 mr-2" />
                    <a
                      href="mailto:post@elkat.no"
                      className="hover:text-gray-50 transition-colors hover:font-medium"
                    >
                      post@elkat.no
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t mt-12 pt-8">
              <p className="text-center text-gray-300">
                © {new Date().getFullYear()} Elkat AS. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
