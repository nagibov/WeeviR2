import React from 'react';

/**
 * Weevi KPI / metric card. Big tabular number with optional trend pill + sublabel.
 * Variants: light | mint | green | dark.
 */
export function KPICard({ label, value, sublabel, trend, trendDir = 'up', variant = 'light', style = {}, ...props }) {
  const ink = 'var(--text-strong, #2E2E2F)';
  const accent = 'var(--color-primary, #09D18C)';
  const palettes = {
    light: { bg: 'var(--surface-card, #fff)', shadow: 'var(--shadow-card, 0 1px 2px rgba(0,0,0,.06))', label: 'var(--text-muted,#9aa09c)', value: ink, sub: 'var(--text-muted,#8a8f8c)', trendBg: 'var(--color-accent-soft,#eafbf3)', trendColor: 'var(--text-success,#0a8f63)' },
    mint: { bg: 'var(--color-accent-soft,#eafbf3)', shadow: 'var(--shadow-card,0 1px 2px rgba(0,0,0,.04))', label: '#5a9b80', value: 'var(--text-success,#0a8f63)', sub: '#5a9b80', trendBg: '#fff', trendColor: 'var(--text-success,#0a8f63)' },
    green: { bg: accent, shadow: 'var(--shadow-green,0 8px 22px rgba(9,209,140,.26))', label: 'rgba(255,255,255,.85)', value: '#fff', sub: 'rgba(255,255,255,.92)', trendBg: 'rgba(255,255,255,.22)', trendColor: '#fff' },
    dark: { bg: ink, shadow: 'var(--shadow-card,0 1px 2px rgba(0,0,0,.06))', label: 'rgba(255,255,255,.6)', value: '#fff', sub: accent, trendBg: 'rgba(255,255,255,.12)', trendColor: '#fff' },
  };
  const p = palettes[variant] || palettes.light;
  const arrow = trendDir === 'up' ? '▲' : trendDir === 'down' ? '▼' : '';
  return (
    <div style={{ background: p.bg, borderRadius: 'var(--radius-lg, 18px)', padding: 'var(--space-6, 26px)', boxShadow: p.shadow, fontFamily: "var(--font-text, 'Manrope', sans-serif)", minWidth: '200px', ...style }} {...props}>
      <div style={{ fontWeight: 700, fontSize: '12px', letterSpacing: '.04em', textTransform: 'uppercase', color: p.label }}>{label}</div>
      <div style={{ fontWeight: 800, fontSize: 'var(--text-metric, 42px)', lineHeight: 1, marginTop: '14px', letterSpacing: '-.02em', fontVariantNumeric: 'tabular-nums', color: p.value }}>{value}</div>
      {trend && (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '14px', fontWeight: 700, fontSize: '13px', padding: '5px 11px', borderRadius: 'var(--radius-pill,999px)', whiteSpace: 'nowrap', background: p.trendBg, color: p.trendColor }}>{arrow ? arrow + ' ' : ''}{trend}</div>
      )}
      {sublabel && (
        <div style={{ fontWeight: 500, fontSize: '13px', marginTop: '14px', color: p.sub }}>{sublabel}</div>
      )}
    </div>
  );
}
