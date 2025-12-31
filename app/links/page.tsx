// app/links/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  ChevronRight,
  Linkedin,
  Code,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quiotech Links | Web & Digital Growth",
  description:
    "Quick links to Quiotech – websites, marketing, portfolio, and contact.",
};

type LinkItem = {
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  external?: boolean;
};

const links: LinkItem[] = [
  {
    label: "Our Portfolio",
    description: "See our recent projects",
    href: "/showcase",
    icon: <Code className="h-6 w-6" />,
    iconBg: "bg-indigo-500",
    iconColor: "text-white",
  },
  {
    label: "WhatsApp Us",
    description: "Chat with us on WhatsApp",
    href: "https://wa.me/918750787724",
    icon: <MessageCircle className="h-6 w-6" />,
    iconBg: "bg-green-500",
    iconColor: "text-white",
    external: true,
  },
  {
    label: "Call Us",
    description: "+91 8750787724 | +91 9654248879",
    href: "tel:+918750787724",
    icon: <Phone className="h-6 w-6" />,
    iconBg: "bg-blue-500",
    iconColor: "text-white",
  },
  {
    label: "Email Us",
    description: "Quiotechh@gmail.com",
    href: "mailto:Quiotechh@gmail.com",
    icon: <Mail className="h-6 w-6" />,
    iconBg: "bg-blue-500",
    iconColor: "text-white",
  },
  {
    label: "Follow on Instagram",
    description: "See our latest posts & updates",
    href: "https://instagram.com/quiotech",
    icon: <Instagram className="h-6 w-6" />,
    iconBg: "bg-black",
    iconColor: "text-white",
    external: true,
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="relative h-16 w-16 mb-4 hover:opacity-80 transition-opacity">
            <Image
              src="/logo/quiotech-logo.png"
              alt="Quiotech"
              fill
              className="object-contain scale-250"
              priority
            />
          </Link>
          
          <p className="text-center text-gray-600 text-base px-4 leading-relaxed">
            Web Development & Digital Marketing
            <br />
            that drive results.
          </p>
        </div>
        {/* Link cards */}
        <div className="space-y-3 mb-8">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="block"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-4 hover:border-gray-300 hover:shadow-sm transition-all duration-150 flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[17px] font-semibold text-gray-900 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[15px] text-gray-600">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="h-6 w-6 text-gray-400 flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>

        {/* Footer socials */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com/company/quiotech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com/quiotech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hello@quiotech.in"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 text-white hover:bg-gray-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Crafted with ❤️ by <span className="font-semibold text-gray-900">Quiotech</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">© 2025 Quiotech</p>
          </div>
        </div>
      </div>
    </main>
  );
}