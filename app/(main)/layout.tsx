"use client";

import Spinner from "@/components/Spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";
import Navigation from "./_components/Navigation";
import SearchCommand from "@/components/SearchCommand";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) return redirect("/");

  return (
    <div className="h-full flex dark-[#1f1f1f]">
      <Navigation />
      <section className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </section>
    </div>
  );
};

export default MainLayout;
