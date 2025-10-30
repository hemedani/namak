import LinkMolecule from './Link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const NavLink = ({
  href,
  children,
  isActive = false,
  onClick,
  className = ''
}: NavLinkProps) => {
  const baseClasses = "transition-colors duration-300 font-medium";
  const activeClasses = isActive ? "text-nemak-green" : "text-gray-700 hover:text-nemak-green";

  return (
    <LinkMolecule
      href={href}
      className={`${baseClasses} ${activeClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </LinkMolecule>
  );
};

export default NavLink;
