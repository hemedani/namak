interface ParagraphProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const Paragraph = ({ size = 'md', children, className = '', ...props }: ParagraphProps) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <p className={`${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
