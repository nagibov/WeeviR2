import React from 'react';

/**
 * Weevi financial data table. Actuals render grey, projections render mint.
 * `columns`: [{label, type:'actual'|'proj'}]. `rows`: [{label, values[], bold?, neg?[]}].
 */
export function FinancialTable({ title = 'Financial Performance', note = 'Grey = actuals · Mint = projections', columns, rows, style = {}, ...props }) {
  const cols = columns || [
    { label: '2025', type: 'actual' },
    { label: 'Apr 26', type: 'actual' },
    { label: 'Nov 26', type: 'proj' },
    { label: 'Nov 27', type: 'proj' },
  ];
  const data = rows || [
    { label: 'Total Sales', values: ['530,725', '83,842', '94,252', '97,151'] },
    { label: 'Gross Margin', values: ['507,096', '83,842', '94,252', '97,151'] },
    { label: 'Net Income', values: ['(445,815)', '1,197', '12,252', '15,151'], bold: true, neg: [true, false, false, false] },
  ];
  const isProj = (c) => c && (c.type === 'proj' || c.type === 'projection');
  const th = (c) => ({ textAlign: 'right', fontWeight: 700, fontSize: '13px', padding: '10px 14px', background: isProj(c) ? 'var(--surface-projection,#eafbf3)' : 'var(--surface-subtle,#f0f2f1)', color: isProj(c) ? 'var(--text-success,#0a8f63)' : 'var(--text-strong,#2e2e2f)' });

  return (
    <div style={{ background: 'var(--surface-card,#fff)', borderRadius: 'var(--radius-lg,18px)', padding: 'var(--space-6,26px)', boxShadow: 'var(--shadow-card,0 1px 2px rgba(0,0,0,.06))', fontFamily: "var(--font-data, 'Manrope', sans-serif)", overflowX: 'auto', ...style }} {...props}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', gap: '16px', flexWrap: 'wrap' }}>
        <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-strong,#2e2e2f)' }}>{title}</span>
        <span style={{ fontWeight: 600, fontSize: '12px', color: 'var(--text-muted,#9aa09c)' }}>{note}</span>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '10px 14px' }}></th>
            {cols.map((c, i) => <th key={i} style={th(c)}>{c.label}</th>)}
          </tr>
        </thead>
        <tbody style={{ fontVariantNumeric: 'tabular-nums' }}>
          {data.map((r, ri) => {
            const bold = !!r.bold;
            return (
              <tr key={ri}>
                <td style={{ textAlign: 'left', fontWeight: bold ? 700 : 600, fontSize: '14px', color: 'var(--text-strong,#2e2e2f)', padding: '11px 14px', borderBottom: bold ? 'none' : '1px solid var(--surface-subtle,#f0f2f1)' }}>{r.label}</td>
                {r.values.map((v, ci) => {
                  const proj = isProj(cols[ci]);
                  const neg = r.neg && r.neg[ci];
                  let color = neg ? 'var(--text-negative,#c0392b)' : (proj ? 'var(--text-success,#0a8f63)' : 'var(--text-body,#41514a)');
                  if (bold && !proj && !neg) color = 'var(--text-strong,#2e2e2f)';
                  const bg = bold ? (proj ? 'var(--surface-projection,#eafbf3)' : 'var(--surface-subtle,#f0f2f1)') : (proj ? '#f4fdf8' : '#f7f8f7');
                  const bb = bold ? 'none' : (proj ? '1px solid var(--surface-projection,#eafbf3)' : '1px solid var(--surface-subtle,#f0f2f1)');
                  return <td key={ci} style={{ textAlign: 'right', fontWeight: bold ? 700 : 500, fontSize: '14px', padding: '11px 14px', background: bg, color, borderBottom: bb }}>{v}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
