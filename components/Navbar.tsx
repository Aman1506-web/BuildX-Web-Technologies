'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCallMenuOpen, setIsCallMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  // Handle hash scrolling when component mounts or pathname changes
  useEffect(() => {
    if (isHomePage) {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          scroller.scrollTo(hash, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -100, // Adjust this based on your navbar height
          });
        }, 100);
      }
    }
  }, [pathname, isHomePage]);

  const handleScrollClick = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (!isHomePage) {
      // Navigate to home page with hash
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <Element
      name="top"
      className="overflow-visible rounded-[6px] top-5  sticky md:mx-auto z-50 
        xl:w-4/5 2xl:w-[68%] bg-white 
        grid grid-cols-3 items-center
        py-2 md:py-4 px-3 md:px-8 mx-3 md:mx-6 shadow-lg md:shadow-xl"
    >
      {/* Mobile Hamburger Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden z-50 p-2 text-gray-700 hover:text-blue-500 justify-self-start"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Logo - Left on Desktop, Center on Mobile */}
      <Link href="/" className="md:justify-left justify-self-start translate-x-0.5 md:translate-x-0 md:ml-4">
        <Image
          src="/logo/quiotech-logo.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-20 md:w-24 scale-130 md:scale-150 -my-1 md:-my-2"
        />
      </Link>

      {/* Desktop Navigation - Center */}
      <div className="hidden md:flex justify-self-center gap-x-8 items-center text-gray-700 font-semibold text-lg -ml-22">
        <Link href="/showcase" className="hover:text-blue-500 whitespace-nowrap">
          Projects
        </Link>

        {isHomePage ? (
          <>
            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500 whitespace-nowrap cursor-pointer"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500 whitespace-nowrap cursor-pointer"
            >
              Process
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-500 whitespace-nowrap cursor-pointer"
            >
              Our Guarantees
            </ScrollLink>
          </>
        ) : (
          <>
            <Link
              href="/#services"
              className="hover:text-blue-500 whitespace-nowrap cursor-pointer"
            >
              Services
            </Link>

            <Link
              href="/#process"
              className="hover:text-blue-500 whitespace-nowrap cursor-pointer"
            >
              Process
            </Link>

            <Link
              href="/#guarentees"
              className="hover:text-blue-500 whitespace-nowrap cursor-pointer"
            >
              Our Guarantees
            </Link>
          </>
        )}
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-x-3 justify-self-end md:mr-4 font-semibold">
        {/* Desktop Call Now Button with Dropdown */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setIsCallMenuOpen(!isCallMenuOpen)}
            className="py-2.5 px-5 text-base
              hover:bg-green-700 rounded-md border  text-white
              bg-green-600 transition duration-200 whitespace-nowrap flex items-center gap-2
              "
          >
            <Phone size={18} />
            Call Now
          </button>
          
          {isCallMenuOpen && (
            <>
              <div 
                className="fixed inset-0 z-[100]" 
                onClick={() => setIsCallMenuOpen(false)}
              />
              <div className="absolute left-0 top-full mt-2 bg-white border-2 border-black rounded-md shadow-xl py-2 w-56 z-[110]">
                <a
                  href="tel:+919654248879"
                  className="block px-4 py-3 hover:bg-green-50 transition-colors border-b border-gray-100"
                  onClick={() => setIsCallMenuOpen(false)}
                >
                  <div className="font-semibold text-gray-900">Aman Sharma</div>
                  <div className="text-sm text-gray-600">+91 9654248879</div>
                </a>
                <a
                  href="tel:+918750787724"
                  className="block px-4 py-3 hover:bg-green-50 transition-colors"
                  onClick={() => setIsCallMenuOpen(false)}
                >
                  <div className="font-semibold text-gray-900">Kanishka Maurya</div>
                  <div className="text-sm text-gray-600">+91 8750787724</div>
                </a>
              </div>
            </>
          )}
        </div>

        {/* Book a Call Button */}
        <Link
          href="/meeting"
          className="md:py-2.5 md:px-5 md:text-base py-2 px-4 text-sm
            hover:bg-blue-700 rounded-md text-white
            bg-blue-500 transition duration-200 whitespace-nowrap
            "
        >
          Book a call
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="md:hidden fixed left-0 right-0 top-[88px] bg-white z-50 px-6 py-8 shadow-lg mx-3 rounded-b-[6px]">
            <div className="flex flex-col gap-4 text-gray-700 font-medium text-base">
              <Link
                href="/showcase"
                className="hover:text-blue-500 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>

              {isHomePage ? (
                <>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    className="hover:text-blue-500 py-2 border-b border-gray-100 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </ScrollLink>

                  <ScrollLink
                    to="process"
                    smooth={true}
                    className="hover:text-blue-500 py-2 border-b border-gray-100 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Process
                  </ScrollLink>

                  <ScrollLink
                    to="guarentees"
                    smooth={true}
                    className="hover:text-blue-500 py-2 border-b border-gray-100 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Guarantees
                  </ScrollLink>
                </>
              ) : (
                <>
                  <Link
                    href="/#services"
                    className="hover:text-blue-500 py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>

                  <Link
                    href="/#process"
                    className="hover:text-blue-500 py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Process
                  </Link>

                  <Link
                    href="/#guarentees"
                    className="hover:text-blue-500 py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Guarantees
                  </Link>
                </>
              )}

              {/* Mobile Call Now Button with Dropdown in Menu */}
              <div className="relative mt-2">
                <button
                  onClick={() => setIsCallMenuOpen(!isCallMenuOpen)}
                  className="w-full py-2.5 px-5 text-base font-semibold
                    hover:bg-green-700 rounded-md border-2 border-black text-white
                    bg-green-600 transition duration-200 flex items-center justify-center gap-2
                    shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
                >
                  <Phone size={18} />
                  Call Now
                </button>
                
                {isCallMenuOpen && (
                  <div className="mt-2 bg-white border-2 border-black rounded-md shadow-lg py-1">
                    <a
                      href="tel:+919654248879"
                      className="block px-4 py-2.5 hover:bg-green-50 transition-colors border-b border-gray-100"
                      onClick={() => {
                        setIsCallMenuOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="font-semibold text-gray-900 text-sm">Aman Sharma</div>
                      <div className="text-xs text-gray-600">+91 9654248879</div>
                    </a>
                    <a
                      href="tel:+918750787724"
                      className="block px-4 py-2.5 hover:bg-green-50 transition-colors"
                      onClick={() => {
                        setIsCallMenuOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="font-semibold text-gray-900 text-sm">Kanishka Maurya</div>
                      <div className="text-xs text-gray-600">+91 8750787724</div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Element>
  );
};

export default Navbar;