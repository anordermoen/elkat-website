"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

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

  const peopleRef = useRef<HTMLElement>(null);

  const scrollToPeople = () => {
    if (peopleRef.current) {
      peopleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-screen flex items-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Overlay for better text visibility */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Contact Us
          </h1>
          <p className="text-xl mt-4">
            Get in touch with us for any inquiries about our services or career
            opportunities.
          </p>
        </div>
      </section>

      {/* Replace Contact Form section with People Grid */}
      <section ref={peopleRef} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {people.map((person) => (
              <PersonCard key={person.email} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* Floating Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToPeople}
          variant="ghost"
          className="h-10 w-10 rounded-full bg-white text-gray-900"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </main>
  );
}
