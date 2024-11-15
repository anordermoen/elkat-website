"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Power,
  Database,
  Building,
  ArrowDown,
  Wrench,
  Users,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Services() {
  const servicesRef = useRef<HTMLElement>(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-screen flex items-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/service-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Overlay for better text visibility */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Our Services
          </h1>
        </div>
        {/* Floating Arrow */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Button
            onClick={scrollToServices}
            variant="ghost"
            className="h-10 w-10 rounded-full bg-white text-gray-900"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:bg-gray-800">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-600 rounded-xl mb-6 flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-800 transition-all duration-300">
                  <Power className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:text-white transition-colors">
                  Industry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-white/90 transition-colors">
                  Expert electrical workforce for industrial projects and
                  maintenance:
                </p>
                <ul className="mt-4 space-y-2 text-gray-300 group-hover:text-white/90 transition-colors">
                  <li>• Industrial automation</li>
                  <li>• Process control systems</li>
                  <li>• Power distribution</li>
                  <li>• Preventive maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:bg-gray-800">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-600 rounded-xl mb-6 flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-800 transition-all duration-300">
                  <Database className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:text-white transition-colors">
                  Data Centers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-white/90 transition-colors">
                  Specialized solutions for data center electrical
                  infrastructure:
                </p>
                <ul className="mt-4 space-y-2 text-gray-300 group-hover:text-white/90 transition-colors">
                  <li>• Power distribution units</li>
                  <li>• Backup power systems</li>
                  <li>• Cooling infrastructure</li>
                  <li>• Network cabling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:bg-gray-800">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-600 rounded-xl mb-6 flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-800 transition-all duration-300">
                  <Building className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:text-white transition-colors">
                  Construction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-white/90 transition-colors">
                  Complete electrical solutions for construction projects:
                </p>
                <ul className="mt-4 space-y-2 text-gray-300 group-hover:text-white/90 transition-colors">
                  <li>• New installations</li>
                  <li>• Renovation projects</li>
                  <li>• Infrastructure work</li>
                  <li>• Project management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-gray-200 rounded-full mb-6 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-gray-700" />
                </div>
                <CardTitle>Certified Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  All our electricians are DSB certified and regularly updated
                  on the latest safety standards and technologies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-gray-200 rounded-full mb-6 flex items-center justify-center">
                  <Users className="h-6 w-6 text-gray-700" />
                </div>
                <CardTitle>Flexible Workforce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Scale your electrical workforce up or down based on project
                  needs with our flexible staffing solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-gray-200 rounded-full mb-6 flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-gray-700" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Rigorous quality control processes ensure all work meets the
                  highest industry standards and regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
