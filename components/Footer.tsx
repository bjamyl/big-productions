import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const footerLinks = [
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];
  return (
    <section className="bg-[#1C1D1F]">
      <footer className="mx-6 py-5 md:py-10 md:mx-16 2xl:mx-64">
        <div className="md:flex md:items-center md:justify-between">
          <Link href="/" className="h-fit">
            <Image src="/logo-mark.svg" alt="logo" width={35} height={35} />
          </Link>
          <div className="h-fit md:flex w-fit text-white gap-4 mt-10">
            {footerLinks.map((link) => (
              <Link href={link.url}>
                <p>{link.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <Separator className="my-5" />
        <p className="text-white text-center">
          Built by{" "}
          <a target="_black" href="https://jamilb.vercel.app">
            Jamil
          </a>
        </p>
      </footer>
    </section>
  );
}
