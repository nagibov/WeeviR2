import React from 'react';

/**
 * Weevi primary button. Rounded pill, emerald by default.
 * Variants: primary | dark | secondary | tertiary | text. Sizes: sm | md.
 */
export function Button({ variant = 'primary', size = 'md', children, style = {}, ...props }) {
  const base = {
    fontFamily: "var(--font-text, 'Manrope', sans-serif)",
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer',
    borderRadius: 'var(--radius-pill, 999px)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    transition: 'filter .15s ease, transform .05s ease',
  };
  const sizes = {
    sm: { fontSize: '14px', padding: '10px 18px' },
    md: { fontSize: '15px', padding: '13px 24px' },
  };
  const variants = {
    primary: {
      background: 'var(--color-primary, #09D18C)',
      color: 'var(--text-on-primary, #fff)',
      boxShadow: 'var(--shadow-pop, 0 6px 16px rgba(9,209,140,.28))',
    },
    dark: { background: 'var(--text-strong, #2E2E2F)', color: '#fff' },
    secondary: {
      background: '#fff',
      color: 'var(--text-strong, #2E2E2F)',
      border: '1.5px solid var(--border-default, #E3E6E4)',
    },
    tertiary: { background: 'var(--color-accent-soft, #EAFBF3)', color: 'var(--text-success, #0A8F63)' },
    text: { background: 'transparent', color: 'var(--text-success, #0A8F63)', padding: '10px 8px' },
  };
  return (
    <button style={{ ...base, ...sizes[size], ...variants[variant], ...style }} {...props}>
      {children}
    </button>
  );
}
