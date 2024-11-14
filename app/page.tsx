import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Power, Building, Database } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/electrician.jpg"
            alt="Electrician working"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We provide your
            <br />
            <span className="text-gray-400">workforce</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Specialized in electrical work. Creating a place where it&apos;s
            easy to be both a customer and an employee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="inline-flex items-center">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:text-gray-900 hover:bg-white"
            >
              <Link href="/contact">Job application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We cover your workforce needs in the electrical field, with DSB
              certified workers prioritizing HSE and quality of work.
            </p>
          </div>

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
                  Specialized electrical workforce for industrial projects and
                  maintenance
                </p>
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
                  Expert electricians for data center installations
                </p>
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
                  Skilled electrical workers for construction projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
