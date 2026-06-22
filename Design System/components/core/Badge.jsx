import React from 'react';

/**
 * Weevi badge / pill. Use `solid` for ™ product names, `status` for live/beta dots.
 * Variants: solid | mint | outline | dark | status.
 */
export function Badge({ variant = 'solid', dotColor, children, style = {}, ...props }) {
  const base = {
    fontFamily: "var(--font-text, 'Manrope', sans-serif)",
    fontWeight: 700,
    fontSize: '13px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-pill, 999px)',
    padding: '7px 14px',
    lineHeight: 1,
  };
  const variants = {
    solid: { background: 'var(--color-primary, #09D18C)', color: '#fff' },
    mint: { background: 'var(--color-accent-soft, #EAFBF3)', color: 'var(--text-success, #0A8F63)' },
    outline: { background: '#fff', color: 'var(--text-strong, #2E2E2F)', border: '1.5px solid var(--border-default, #E3E6E4)' },
    dark: { background: 'var(--text-strong, #2E2E2F)', color: '#fff' },
    status: { background: 'var(--wv-mint-wash, #F1FDF7)', color: 'var(--text-success, #0A8F63)', fontWeight: 600, borderRadius: 'var(--radius-sm, 8px)', padding: '6px 13px' },
  };
  const showDot = variant === 'status';
  return (
    <span style={{ ...base, ...variants[variant], ...style }} {...props}>
      {showDot && (
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: dotColor || 'var(--color-primary, #09D18C)' }} />
      )}
      {children}
    </span>
  );
}
