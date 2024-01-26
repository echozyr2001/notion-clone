import { DOCUMENTS, READING } from "@/lib/constants";
import Image from "next/image";

export default function Heroes() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px]  sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src={DOCUMENTS.documents}
            fill
            alt="Documents"
            className="object-contain dark:hidden"
          />
          <Image
            src={DOCUMENTS.documentsDark}
            fill
            alt="Documents Dark"
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="relative w-[300px] h-[300px]  sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] hidden md:block">
          <Image
            src={READING.reading}
            fill
            alt="Reading"
            className="object-contain dark:hidden"
          />
          <Image
            src={READING.readingDark}
            fill
            alt="Reading Dark"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
}
