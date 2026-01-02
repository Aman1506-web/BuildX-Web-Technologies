import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/" },
      { name: "Our Team", href: "/" },
      { name: "Careers", href: "/" },
      { name: "Contact", href: "/" },
    ],
    services: [
      { name: "Web Development", href: "/#services" },
      { name: "SEO Services", href: "/#services" },
      { name: "Content Creation", href: "/#services" },
      { name: "Social Media Marketing", href: "/#services" },
    ],
    resources: [
      { name: "Blog", href: "/" },
      { name: "Case Studies", href: "/showcase" },
      { name: "Support", href: "/" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/" },
      { name: "Terms of Service", href: "/" },
      { name: "Cookie Policy", href: "/" },
      { name: "Refund Policy", href: "/" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  ];

  return (
    <footer className="bg-[#fafafa] border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
          
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-3 md:mb-4">
              <Image
                src="/logo/quiotech-logo.png"
                width={160}
                height={160}
                className="w-28 md:w-40"
                alt="Quiotech Logo"
              />
            </Link>
            
            <p className="text-gray-600 text-xs md:text-base mb-4 md:mb-6 max-w-xs">
              We design and build websites that convert. Transforming your digital presence into measurable results.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3">
              <a 
                href="tel:+919654248879" 
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-xs md:text-base"
              >
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <span>+91 9654248879</span>
              </a>
              
              <a 
                href="mailto:quiotechh@gmail.com" 
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-xs md:text-base"
              >
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <span>quiotechh@gmail.com</span>
              </a>
              
              <div className="flex items-start gap-2 text-gray-600 text-xs md:text-base">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 mt-0.5" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Links Section - 2 columns on mobile, 4 columns on desktop */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-xs md:text-base">
                Company
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition text-xs md:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-xs md:text-base">
                Services
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition text-xs md:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-xs md:text-base">
                Resources
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition text-xs md:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-xs md:text-base">
                Legal
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition text-xs md:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
            
            {/* Copyright */}
            <p className="text-gray-600 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Quiotech Technologies. All Rights Reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-end gap-3 md:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition"
                    aria-label={social.name}
                  >
                    <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}