import { LOGO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Logo() {
  return (
    <div className="hidden md:flex items-center">
      <Image
        src={LOGO.logo}
        height="40"
        width="40"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src={LOGO.logoDark}
        height="40"
        width="40"
        alt="Logo Dark"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Jotion</p>
    </div>
  );
}
