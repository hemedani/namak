import { ReactNode } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

const Heading = ({
  level = 1,
  children,
  className = "",
  ...props
}: HeadingProps) => {
  const headingClasses = {
    1: "text-4xl md:text-5xl font-bold",
    2: "text-3xl md:text-4xl font-bold",
    3: "text-2xl md:text-3xl font-bold",
    4: "text-xl md:text-2xl font-bold",
    5: "text-lg md:text-xl font-bold",
    6: "text-base md:text-lg font-bold",
  };

  if (level === 2) {
    return (
      <h2 className={`${headingClasses[level]} ${className}`} {...props}>
        {children}
      </h2>
    );
  } else if (level === 3) {
    return (
      <h3 className={`${headingClasses[level]} ${className}`} {...props}>
        {children}
      </h3>
    );
  } else if (level === 4) {
    return (
      <h4 className={`${headingClasses[level]} ${className}`} {...props}>
        {children}
      </h4>
    );
  } else if (level === 5) {
    return (
      <h5 className={`${headingClasses[level]} ${className}`} {...props}>
        {children}
      </h5>
    );
  } else if (level === 6) {
    return (
      <h6 className={`${headingClasses[level]} ${className}`} {...props}>
        {children}
      </h6>
    );
  } else {
    return (
      <h1 className={`${headingClasses[1]} ${className}`} {...props}>
        {children}
      </h1>
    );
  }
};

export default Heading;
