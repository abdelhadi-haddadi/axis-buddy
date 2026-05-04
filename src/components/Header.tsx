"use client";

import CustomButton from "@/components/_components/CustomButton";
import { TheamToggler } from "@/components/TheamToggler";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import villanCreation from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const path = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const NAV_ITEM = [
    { label: "Showcase", href: "/showcase" },
    { label: "Service", href: "#service" },
    { label: "Process", href: "#process" },
    { label: "Guarantee", href: "#guarantees" },
  ];

  const SHOW_NAV_ITEM = [
    { label: "Home", href: "/" },
    { label: "Showcase", href: "/showcase" },
  ];

  // Determine which navigation items to show based on current path
  const activeNavItems =
    path === "/showcase" || path === "/meeting" ? SHOW_NAV_ITEM : NAV_ITEM;

  return (
    <>
      <Card className="top-5 sticky md:mx-auto z-30 xl:w-10/12 flex-between py-4 px-4 md:px-8 mx-4 sm:mx-6">
        <Link href={"/"}>
          <Image
            src={villanCreation}
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <CardContent className="py-0 px-0 hidden gap-x-4 md:flex items-center">
          {activeNavItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <Button
                  variant={"ghost"}
                  className="hover:text-light-chai text-base"
                >
                  {item.label}
                </Button>
              </Link>
            );
          })}
          <CustomButton link="/meeting" className="text-base py-5 px-4">
            Book a Call
          </CustomButton>
        </CardContent>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2">
          <TheamToggler />
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Card>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Sidebar Menu */}
          <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-background shadow-xl animate-in slide-in-from-right duration-300">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-4 px-6 py-4">
              {activeNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-light-chai transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <CustomButton
                link="/meeting"
                className="w-full justify-center text-base py-5 px-4 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
