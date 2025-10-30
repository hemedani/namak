import {
  Bars3Icon,
  XMarkIcon,
  LightBulbIcon,
  UserGroupIcon,
  HeartIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

interface IconProps {
  name: 'menu' | 'close' | 'lightbulb' | 'user-group' | 'heart' | 'cog' | 'phone' | 'email' | 'globe' | 'instagram' | 'twitter';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  [key: string]: any;
}

const Icon = ({ name, className = '', size = 'md', ...props }: IconProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
  };

  const iconClasses = `${sizeClasses[size]} ${className}`;

  switch (name) {
    case 'menu':
      return <Bars3Icon className={iconClasses} {...props} />;
    case 'close':
      return <XMarkIcon className={iconClasses} {...props} />;
    case 'lightbulb':
      return <LightBulbIcon className={iconClasses} {...props} />;
    case 'user-group':
      return <UserGroupIcon className={iconClasses} {...props} />;
    case 'heart':
      return <HeartIcon className={iconClasses} {...props} />;
    case 'cog':
      return <Cog6ToothIcon className={iconClasses} {...props} />;
    case 'phone':
      return <span {...props} className={iconClasses}>📞</span>;
    case 'email':
      return <span {...props} className={iconClasses}>✉️</span>;
    case 'globe':
      return <span {...props} className={iconClasses}>🌐</span>;
    case 'instagram':
      return <span {...props} className={iconClasses}>📷</span>;
    case 'twitter':
      return <span {...props} className={iconClasses}>🐦</span>;
    default:
      return <span {...props} className={iconClasses}>⚙️</span>;
  }
};

export default Icon;
