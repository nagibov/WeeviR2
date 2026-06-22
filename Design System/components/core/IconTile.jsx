import React from 'react';

/**
 * Weevi icon treatment. Wraps any icon node (e.g. a lucide-react glyph) and
 * applies the brand styling: charcoal 2px rounded stroke + a single emerald
 * accent dot. Optionally sits in a soft rounded tile.
 *
 * Production usage pairs this with lucide-react:
 *   import { Store } from 'lucide-react';
 *   <IconTile><Store /></IconTile>
 */
export function IconTile({ children, accent = true, tile = true, size = 28, strokeWidth = 2, color = 'var(--text-strong, #2E2E2F)', style = {}, ...props }) {
  const dot = Math.max(7, Math.round(size * 0.3));
  const glyph = (
    <span style={{ position: 'relative', display: 'inline-flex', color, lineHeight: 0 }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size }}>
        {React.isValidElement(children) ? React.cloneElement(children, { size, strokeWidth, color: 'currentColor', absoluteStrokeWidth: true }) : children}
      </span>
      {accent && (
        <span style={{ position: 'absolute', top: -2, right: -2, width: dot, height: dot, borderRadius: '50%', background: 'var(--color-primary, #09D18C)', boxShadow: '0 0 0 2px var(--surface-card, #fff)' }} />
      )}
    </span>
  );
  if (!tile) return <span style={{ display: 'inline-flex', ...style }} {...props}>{glyph}</span>;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size + 28, height: size + 28, borderRadius: 'var(--radius-md, 12px)', background: 'var(--wv-off-white, #FAFBFA)', boxShadow: 'inset 0 0 0 1px var(--border-default, #E3E6E4)', ...style }} {...props}>
      {glyph}
    </span>
  );
}
