import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  loading = false,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'w-full sm:w-auto min-h-11 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center text-center leading-tight';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base',
    lg: 'px-5 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white hover:shadow-brand-blue disabled:opacity-50',
    secondary: 'border border-brand-blue text-brand-blue hover:bg-brand-blue/10 hover:text-white disabled:opacity-50',
    ghost: 'text-brand-cyan hover:bg-brand-cyan/10 disabled:opacity-50',
  };

  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: !disabled && !loading ? 1.05 : 1 }}
      whileTap={{ scale: !disabled && !loading ? 0.95 : 1 }}
      {...props}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;

