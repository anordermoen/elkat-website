"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Organization", href: "/organization" },
];

export function SiteHeader() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const NavItems = ({ mobile = false }) => (
    <React.Fragment>
      {navigation.map((item) => {
        const link = (
          <Link
            href={item.href}
            className="transition-colors hover:text-primary font-medium"
          >
            {item.name}
          </Link>
        );

        return mobile ? (
          <SheetClose key={item.name} asChild>
            {link}
          </SheetClose>
        ) : (
          <React.Fragment key={item.name}>{link}</React.Fragment>
        );
      })}
      {mobile ? (
        <SheetClose asChild>
          <Button asChild variant="default">
            <Link href="/contact">Contact</Link>
          </Button>
        </SheetClose>
      ) : (
        <Button asChild variant="default">
          <Link href="/contact">Contact</Link>
        </Button>
      )}
    </React.Fragment>
  );

  return (
    <nav className="backdrop-blur-md fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/elkat-logo.svg"
                alt="Elkat Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-3xl transition-colors">
                el<span className="font-extrabold">kat</span>
              </span>
            </Link>
          </div>

          {isMobile ? (
            <div className="flex items-center">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 mt-6">
                    <NavItems mobile />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <NavItems />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
