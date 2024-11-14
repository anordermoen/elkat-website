"use client";
import { Card, CardContent } from "@/components/ui/card";

function PersonCard({
  name,
  role,
  email,
}: {
  name: string;
  role: string;
  email: string;
}) {
  return (
    <Card className="bg-gray-900">
      <CardContent className="flex items-center space-x-4 p-6">
        <div className="h-12 w-12 bg-gray-700 flex items-center justify-center text-white">
          {name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="text-lg font-medium text-white">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
          <p className="text-sm text-gray-400">{email}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Contact() {
  const people = [
    { name: "Runar Sæther", role: "CEO", email: "Runar@elkat.no" },
    { name: "Person 1", role: "Rolle", email: "person1@example.com" },
    { name: "Person 2", role: "Rolle", email: "person2@example.com" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get in touch with us for any inquiries about our services or
              career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Replace Contact Form section with People Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {people.map((person) => (
              <PersonCard key={person.email} {...person} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
