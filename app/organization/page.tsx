import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Organization() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Organization
        </h1>

        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">About Elkat</h2>
          <p className="mb-4">
            Elkat is a leading technology solutions provider, dedicated to
            helping businesses transform and thrive in the digital age. Founded
            in [year], we have consistently delivered innovative solutions to
            our clients across various industries.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  To empower businesses with innovative technology solutions
                  that drive growth and efficiency while maintaining the highest
                  standards of quality and customer service.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  To be the most trusted technology partner for businesses
                  worldwide, leading the way in digital transformation and
                  innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  Continuously pushing boundaries and embracing new technologies
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  Delivering the highest quality in everything we do
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  Operating with transparency and ethical principles
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
