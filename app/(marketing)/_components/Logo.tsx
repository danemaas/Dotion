import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/logo.svg" alt="logo" width="40" height="40" />
      <p className={cn("font-semibold", font.className)}>Dotion</p>
    </div>
  );
};

export default Logo;
