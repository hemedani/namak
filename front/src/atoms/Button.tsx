import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsButton extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button';
  href?: never;
}

interface ButtonAsLink extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'link';
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as = 'button',
  href,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-nemak-green text-white hover:bg-opacity-90',
    secondary: 'bg-white border-2 border-nemak-green text-nemak-green hover:bg-nemak-green hover:text-white',
    outline: 'border-2 border-nemak-green text-nemak-green hover:bg-nemak-green hover:text-white',
    ghost: 'text-gray-700 hover:text-nemak-green',
  };

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6',
    lg: 'py-4 px-8 text-lg',
  };

  const baseClasses = 'font-medium rounded-lg transition-colors duration-300 text-center inline-block';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (as === 'link' && href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
