Financial data table that colour-codes actuals (grey) against projections (mint).

```jsx
<FinancialTable
  title="Financial performance"
  columns={[{label:'2025',type:'actual'},{label:'Nov 26',type:'proj'}]}
  rows={[
    {label:'Total Sales', values:['530,725','94,252']},
    {label:'Net Income', values:['(445,815)','12,252'], bold:true, neg:[true,false]},
  ]}
/>
```

Mark total rows with `bold`, and flag negative cells per-row with `neg` (renders red). Defaults to the 2026 investor figures when no data is passed.
