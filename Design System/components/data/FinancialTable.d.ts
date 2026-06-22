import React from 'react';

export interface FinancialColumn {
  label: string;
  /** Actuals shade grey; projections shade mint. @default "actual" */
  type?: 'actual' | 'proj';
}
export interface FinancialRow {
  label: string;
  values: string[];
  /** Emphasised total row (e.g. Net Income). */
  bold?: boolean;
  /** Per-cell negative flag — renders the value in red. */
  neg?: boolean[];
}
/**
 * Financial table with Weevi's actuals-vs-projections colour coding.
 */
export interface FinancialTableProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  note?: string;
  columns?: FinancialColumn[];
  rows?: FinancialRow[];
}

/**
 * Financial table with Weevi's actuals-vs-projections colour coding: grey columns
 * are reported actuals, mint columns are forward projections.
 *
 * @startingPoint section="Data" subtitle="Actuals vs projections table" viewport="700x300"
 */
export declare function FinancialTable(props: FinancialTableProps): JSX.Element;
