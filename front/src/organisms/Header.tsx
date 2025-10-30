'use client';

import { useState } from 'react';
import LinkMolecule from '@/molecules/Link';
import NavLink from '@/molecules/NavLink';
import Icon from '@/atoms/Icon';

const HeaderOrganism = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'خانه', href: '/' },
    { name: 'درباره ما', href: '#about' },
    { name: 'ویژگی‌ها', href: '#features' },
    { name: 'دانلود اپ', href: '#download' },
    { name: 'تماس با ما', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <LinkMolecule href="/" className="flex items-center space-x-reverse space-x-2">
          <span className="text-2xl font-bold text-nemak-green">نمک</span>
          <span className="text-sm text-gray-600">سُفْرَةُ الْبَرَكَةِ</span>
        </LinkMolecule>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-reverse space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon
            name={isMenuOpen ? 'close' : 'menu'}
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                className="py-2 px-4 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderOrganism;
