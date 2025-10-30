import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
  [key: string]: any;
}

const Card = ({
  children,
  className = "",
  title,
  description,
  icon,
  ...props
}: CardProps) => {
  return (
    <div
      className={`bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center ${className}`}
      {...props}
    >
      {icon && (
        <div className="flex justify-center mb-6">
          <div className="bg-nemak-green/10 p-4 rounded-full">{icon}</div>
        </div>
      )}

      {title && (
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      )}

      {description && <p className="text-gray-600">{description}</p>}

      {children}
    </div>
  );
};

export default Card;
