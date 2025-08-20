interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  hover = false
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg border border-gray-100 transition-shadow duration-300';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const hoverClasses = hover ? 'hover:shadow-xl hover:transform hover:scale-105' : '';

  const classes = `${baseClasses} ${paddingClasses[padding]} ${hoverClasses} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
