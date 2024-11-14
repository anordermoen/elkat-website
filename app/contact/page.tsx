"use client";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <form className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              {type === "applicant"
                ? "Apply for a Position"
                : type === "customer"
                ? "Customer Inquiry"
                : "Get in Touch"}
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {type === "applicant" && (
                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="position"
                  >
                    Position of Interest
                  </label>
                  <input
                    type="text"
                    id="position"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Office Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  123 Business Street
                  <br />
                  City, State 12345
                  <br />
                  Country
                </p>
              </CardContent>
            </Card>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600">
                Email: info@elkat.com
                <br />
                Phone: +1 (123) 456-7890
                <br />
                Hours: Mon-Fri 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
