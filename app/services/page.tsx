import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <Card>
            <CardHeader>
              <CardTitle>IT Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Expert guidance on digital transformation, system architecture,
                and technology strategy.
              </p>
              <ul className="list-disc list-inside">
                <li>Strategic IT Planning</li>
                <li>System Integration</li>
                <li>Cloud Solutions</li>
                <li>Security Assessment</li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Software Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Custom software solutions tailored to your business needs.
              </p>
              <ul className="list-disc list-inside">
                <li>Web Applications</li>
                <li>Mobile Apps</li>
                <li>Enterprise Software</li>
                <li>API Integration</li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 3 */}
          <Card>
            <CardHeader>
              <CardTitle>Data Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Transform your data into actionable insights.
              </p>
              <ul className="list-disc list-inside">
                <li>Business Intelligence</li>
                <li>Data Visualization</li>
                <li>Predictive Analytics</li>
                <li>Data Management</li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 4 */}
          <Card>
            <CardHeader>
              <CardTitle>Managed IT Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Comprehensive IT support and maintenance.</p>
              <ul className="list-disc list-inside">
                <li>24/7 Technical Support</li>
                <li>Network Management</li>
                <li>Cybersecurity</li>
                <li>Cloud Infrastructure</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
