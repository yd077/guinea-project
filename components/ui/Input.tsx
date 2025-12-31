import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, icon, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`
            w-full px-4 py-3 rounded-lg border bg-white text-slate-900 placeholder-slate-400
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900
            disabled:bg-slate-50 disabled:text-slate-500
            ${error ? 'border-red-500 focus:ring-red-500/10 focus:border-red-500' : 'border-slate-200'}
            ${icon ? 'pl-11' : ''}
            ${className}
          `}
          {...props}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-4 py-3 rounded-lg border bg-white text-slate-900 placeholder-slate-400
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900
          ${error ? 'border-red-500' : 'border-slate-200'}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};