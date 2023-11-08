"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error.png"
        alt="error"
        height={300}
        width={300}
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        alt="error"
        height={300}
        width={300}
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Oop!! Something went wrong.</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
