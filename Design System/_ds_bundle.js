/* @ds-bundle: {"format":3,"namespace":"WeeviDesignSystem_c9c4bf","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"FinancialTable","sourcePath":"components/data/FinancialTable.jsx"},{"name":"KPICard","sourcePath":"components/data/KPICard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"39009f2ec8bd","components/core/Button.jsx":"1f96b55b3607","components/core/IconTile.jsx":"774325f3510b","components/data/FinancialTable.jsx":"724a99c8c77e","components/data/KPICard.jsx":"b54739a4d2eb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WeeviDesignSystem_c9c4bf = window.WeeviDesignSystem_c9c4bf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Weevi badge / pill. Use `solid` for ™ product names, `status` for live/beta dots.
 * Variants: solid | mint | outline | dark | status.
 */
function Badge({
  variant = 'solid',
  dotColor,
  children,
  style = {},
  ...props
}) {
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
    lineHeight: 1
  };
  const variants = {
    solid: {
      background: 'var(--color-primary, #09D18C)',
      color: '#fff'
    },
    mint: {
      background: 'var(--color-accent-soft, #EAFBF3)',
      color: 'var(--text-success, #0A8F63)'
    },
    outline: {
      background: '#fff',
      color: 'var(--text-strong, #2E2E2F)',
      border: '1.5px solid var(--border-default, #E3E6E4)'
    },
    dark: {
      background: 'var(--text-strong, #2E2E2F)',
      color: '#fff'
    },
    status: {
      background: 'var(--wv-mint-wash, #F1FDF7)',
      color: 'var(--text-success, #0A8F63)',
      fontWeight: 600,
      borderRadius: 'var(--radius-sm, 8px)',
      padding: '6px 13px'
    }
  };
  const showDot = variant === 'status';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, props), showDot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: dotColor || 'var(--color-primary, #09D18C)'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Weevi primary button. Rounded pill, emerald by default.
 * Variants: primary | dark | secondary | tertiary | text. Sizes: sm | md.
 */
function Button({
  variant = 'primary',
  size = 'md',
  children,
  style = {},
  ...props
}) {
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
    transition: 'filter .15s ease, transform .05s ease'
  };
  const sizes = {
    sm: {
      fontSize: '14px',
      padding: '10px 18px'
    },
    md: {
      fontSize: '15px',
      padding: '13px 24px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary, #09D18C)',
      color: 'var(--text-on-primary, #fff)',
      boxShadow: 'var(--shadow-pop, 0 6px 16px rgba(9,209,140,.28))'
    },
    dark: {
      background: 'var(--text-strong, #2E2E2F)',
      color: '#fff'
    },
    secondary: {
      background: '#fff',
      color: 'var(--text-strong, #2E2E2F)',
      border: '1.5px solid var(--border-default, #E3E6E4)'
    },
    tertiary: {
      background: 'var(--color-accent-soft, #EAFBF3)',
      color: 'var(--text-success, #0A8F63)'
    },
    text: {
      background: 'transparent',
      color: 'var(--text-success, #0A8F63)',
      padding: '10px 8px'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Weevi icon treatment. Wraps any icon node (e.g. a lucide-react glyph) and
 * applies the brand styling: charcoal 2px rounded stroke + a single emerald
 * accent dot. Optionally sits in a soft rounded tile.
 *
 * Production usage pairs this with lucide-react:
 *   import { Store } from 'lucide-react';
 *   <IconTile><Store /></IconTile>
 */
function IconTile({
  children,
  accent = true,
  tile = true,
  size = 28,
  strokeWidth = 2,
  color = 'var(--text-strong, #2E2E2F)',
  style = {},
  ...props
}) {
  const dot = Math.max(7, Math.round(size * 0.3));
  const glyph = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      color,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size
    }
  }, React.isValidElement(children) ? React.cloneElement(children, {
    size,
    strokeWidth,
    color: 'currentColor',
    absoluteStrokeWidth: true
  }) : children), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      width: dot,
      height: dot,
      borderRadius: '50%',
      background: 'var(--color-primary, #09D18C)',
      boxShadow: '0 0 0 2px var(--surface-card, #fff)'
    }
  }));
  if (!tile) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      ...style
    }
  }, props), glyph);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size + 28,
      height: size + 28,
      borderRadius: 'var(--radius-md, 12px)',
      background: 'var(--wv-off-white, #FAFBFA)',
      boxShadow: 'inset 0 0 0 1px var(--border-default, #E3E6E4)',
      ...style
    }
  }, props), glyph);
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/data/FinancialTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Weevi financial data table. Actuals render grey, projections render mint.
 * `columns`: [{label, type:'actual'|'proj'}]. `rows`: [{label, values[], bold?, neg?[]}].
 */
function FinancialTable({
  title = 'Financial Performance',
  note = 'Grey = actuals · Mint = projections',
  columns,
  rows,
  style = {},
  ...props
}) {
  const cols = columns || [{
    label: '2025',
    type: 'actual'
  }, {
    label: 'Apr 26',
    type: 'actual'
  }, {
    label: 'Nov 26',
    type: 'proj'
  }, {
    label: 'Nov 27',
    type: 'proj'
  }];
  const data = rows || [{
    label: 'Total Sales',
    values: ['530,725', '83,842', '94,252', '97,151']
  }, {
    label: 'Gross Margin',
    values: ['507,096', '83,842', '94,252', '97,151']
  }, {
    label: 'Net Income',
    values: ['(445,815)', '1,197', '12,252', '15,151'],
    bold: true,
    neg: [true, false, false, false]
  }];
  const isProj = c => c && (c.type === 'proj' || c.type === 'projection');
  const th = c => ({
    textAlign: 'right',
    fontWeight: 700,
    fontSize: '13px',
    padding: '10px 14px',
    background: isProj(c) ? 'var(--surface-projection,#eafbf3)' : 'var(--surface-subtle,#f0f2f1)',
    color: isProj(c) ? 'var(--text-success,#0a8f63)' : 'var(--text-strong,#2e2e2f)'
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card,#fff)',
      borderRadius: 'var(--radius-lg,18px)',
      padding: 'var(--space-6,26px)',
      boxShadow: 'var(--shadow-card,0 1px 2px rgba(0,0,0,.06))',
      fontFamily: "var(--font-data, 'Manrope', sans-serif)",
      overflowX: 'auto',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '18px',
      gap: '16px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: '16px',
      color: 'var(--text-strong,#2e2e2f)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: '12px',
      color: 'var(--text-muted,#9aa09c)'
    }
  }, note)), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: '560px'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '10px 14px'
    }
  }), cols.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: th(c)
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, data.map((r, ri) => {
    const bold = !!r.bold;
    return /*#__PURE__*/React.createElement("tr", {
      key: ri
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'left',
        fontWeight: bold ? 700 : 600,
        fontSize: '14px',
        color: 'var(--text-strong,#2e2e2f)',
        padding: '11px 14px',
        borderBottom: bold ? 'none' : '1px solid var(--surface-subtle,#f0f2f1)'
      }
    }, r.label), r.values.map((v, ci) => {
      const proj = isProj(cols[ci]);
      const neg = r.neg && r.neg[ci];
      let color = neg ? 'var(--text-negative,#c0392b)' : proj ? 'var(--text-success,#0a8f63)' : 'var(--text-body,#41514a)';
      if (bold && !proj && !neg) color = 'var(--text-strong,#2e2e2f)';
      const bg = bold ? proj ? 'var(--surface-projection,#eafbf3)' : 'var(--surface-subtle,#f0f2f1)' : proj ? '#f4fdf8' : '#f7f8f7';
      const bb = bold ? 'none' : proj ? '1px solid var(--surface-projection,#eafbf3)' : '1px solid var(--surface-subtle,#f0f2f1)';
      return /*#__PURE__*/React.createElement("td", {
        key: ci,
        style: {
          textAlign: 'right',
          fontWeight: bold ? 700 : 500,
          fontSize: '14px',
          padding: '11px 14px',
          background: bg,
          color,
          borderBottom: bb
        }
      }, v);
    }));
  }))));
}
Object.assign(__ds_scope, { FinancialTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FinancialTable.jsx", error: String((e && e.message) || e) }); }

// components/data/KPICard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Weevi KPI / metric card. Big tabular number with optional trend pill + sublabel.
 * Variants: light | mint | green | dark.
 */
function KPICard({
  label,
  value,
  sublabel,
  trend,
  trendDir = 'up',
  variant = 'light',
  style = {},
  ...props
}) {
  const ink = 'var(--text-strong, #2E2E2F)';
  const accent = 'var(--color-primary, #09D18C)';
  const palettes = {
    light: {
      bg: 'var(--surface-card, #fff)',
      shadow: 'var(--shadow-card, 0 1px 2px rgba(0,0,0,.06))',
      label: 'var(--text-muted,#9aa09c)',
      value: ink,
      sub: 'var(--text-muted,#8a8f8c)',
      trendBg: 'var(--color-accent-soft,#eafbf3)',
      trendColor: 'var(--text-success,#0a8f63)'
    },
    mint: {
      bg: 'var(--color-accent-soft,#eafbf3)',
      shadow: 'var(--shadow-card,0 1px 2px rgba(0,0,0,.04))',
      label: '#5a9b80',
      value: 'var(--text-success,#0a8f63)',
      sub: '#5a9b80',
      trendBg: '#fff',
      trendColor: 'var(--text-success,#0a8f63)'
    },
    green: {
      bg: accent,
      shadow: 'var(--shadow-green,0 8px 22px rgba(9,209,140,.26))',
      label: 'rgba(255,255,255,.85)',
      value: '#fff',
      sub: 'rgba(255,255,255,.92)',
      trendBg: 'rgba(255,255,255,.22)',
      trendColor: '#fff'
    },
    dark: {
      bg: ink,
      shadow: 'var(--shadow-card,0 1px 2px rgba(0,0,0,.06))',
      label: 'rgba(255,255,255,.6)',
      value: '#fff',
      sub: accent,
      trendBg: 'rgba(255,255,255,.12)',
      trendColor: '#fff'
    }
  };
  const p = palettes[variant] || palettes.light;
  const arrow = trendDir === 'up' ? '▲' : trendDir === 'down' ? '▼' : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: p.bg,
      borderRadius: 'var(--radius-lg, 18px)',
      padding: 'var(--space-6, 26px)',
      boxShadow: p.shadow,
      fontFamily: "var(--font-text, 'Manrope', sans-serif)",
      minWidth: '200px',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '12px',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: p.label
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 'var(--text-metric, 42px)',
      lineHeight: 1,
      marginTop: '14px',
      letterSpacing: '-.02em',
      fontVariantNumeric: 'tabular-nums',
      color: p.value
    }
  }, value), trend && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      marginTop: '14px',
      fontWeight: 700,
      fontSize: '13px',
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill,999px)',
      whiteSpace: 'nowrap',
      background: p.trendBg,
      color: p.trendColor
    }
  }, arrow ? arrow + ' ' : '', trend), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: '13px',
      marginTop: '14px',
      color: p.sub
    }
  }, sublabel));
}
Object.assign(__ds_scope, { KPICard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KPICard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.FinancialTable = __ds_scope.FinancialTable;

__ds_ns.KPICard = __ds_scope.KPICard;

})();
