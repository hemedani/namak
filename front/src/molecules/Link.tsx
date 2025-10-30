import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'nav' | 'footer';
  className?: string;
}

const LinkMolecule = ({
  href,
  children,
  variant = 'default',
  className = '',
  ...props
}: LinkProps) => {
  const variantClasses = {
    default: 'text-gray-700 hover:text-nemak-green transition-colors',
    nav: 'text-gray-700 hover:text-nemak-green transition-colors duration-300 font-medium',
    footer: 'text-gray-300 hover:text-white transition-colors',
  };

  return (
    <Link
      href={href}
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkMolecule;
