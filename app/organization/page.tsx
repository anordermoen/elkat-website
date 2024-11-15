import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Shield, Star, Heart } from "lucide-react";
import Image from "next/image";

export default function Organization() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-screen flex items-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/office-logo-elkat.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Overlay for better text visibility */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Our Organization
          </h1>
          <p className="text-xl mt-4">
            Building the future of electrical workforce solutions with
            expertise, innovation, and dedication to excellence.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/electrician.jpg"
                alt="Electrician working"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Elkat</h2>
              <p className="text-gray-300 mb-6">
                Elkat is a leading provider of specialized electrical workforce
                solutions, dedicated to delivering excellence in the electrical
                industry. We bridge the gap between skilled professionals and
                businesses, ensuring the highest standards of safety and
                expertise.
              </p>
              <p className="text-gray-300">
                Founded with a vision to revolutionize how electrical workforce
                solutions are delivered, we have consistently maintained our
                position as a trusted partner for businesses across various
                sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:bg-gray-800">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-600 rounded-xl mb-6 flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-800 transition-all duration-300">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:text-white transition-colors">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-white/90 transition-colors">
                  To empower businesses with skilled electrical professionals
                  while creating meaningful opportunities for our workforce,
                  maintaining the highest standards of safety and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:bg-gray-800">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-600 rounded-xl mb-6 flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-800 transition-all duration-300">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:text-white transition-colors">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-white/90 transition-colors">
                  To be the most trusted partner in electrical workforce
                  solutions, known for our commitment to excellence, innovation,
                  and the success of both our clients and employees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:bg-gray-800">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-600 rounded-xl mb-6 flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-800 transition-all duration-300">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:text-white transition-colors">
                  Safety First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-white/90 transition-colors">
                  Prioritizing the well-being of our workforce and maintaining
                  the highest safety standards in every project.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:bg-gray-800">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-600 rounded-xl mb-6 flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-800 transition-all duration-300">
                  <Star className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:text-white transition-colors">
                  Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-white/90 transition-colors">
                  Delivering exceptional quality in every aspect of our work,
                  from project execution to customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:bg-gray-800">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-600 rounded-xl mb-6 flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-800 transition-all duration-300">
                  <Heart className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:text-white transition-colors">
                  People-Centric
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-white/90 transition-colors">
                  Creating an environment where both clients and employees
                  thrive, fostering growth and satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
