import React from 'react';

/**
 * Metric card for dashboards and investor snapshots.
 */
export interface KPICardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase metric label, e.g. "Total Revenue". */
  label: string;
  /** Headline value, e.g. "$929K". Rendered tabular. */
  value: string;
  /** Optional supporting line. */
  sublabel?: string;
  /** Optional trend text, e.g. "75% YoY". */
  trend?: string;
  /** @default "up" */
  trendDir?: 'up' | 'down' | 'none';
  /** @default "light" */
  variant?: 'light' | 'mint' | 'green' | 'dark';
}

/**
 * Metric card for dashboards and investor snapshots. Use one `green` (or `dark`)
 * card per row as the hero metric; keep the rest `light`.
 *
 * @startingPoint section="Data" subtitle="KPI metric card, 4 variants" viewport="320x190"
 */
export declare function KPICard(props: KPICardProps): JSX.Element;
