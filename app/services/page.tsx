import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Power, Database, Building, Wrench, Shield, Users } from "lucide-react";

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide specialized electrical workforce solutions across
              various sectors, ensuring the highest standards of safety and
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Industry Service */}
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

            {/* Data Centers Service */}
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

            {/* Construction Service */}
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
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
