import React from 'react';

/**
 * Weevi pill button. Use `primary` (emerald) for the single main action on a
 * surface; `secondary`/`tertiary` for supporting actions; `text` for inline links.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment. @default "primary" */
  variant?: 'primary' | 'dark' | 'secondary' | 'tertiary' | 'text';
  /** @default "md" */
  size?: 'sm' | 'md';
  children?: React.ReactNode;
}

/**
 * Weevi pill button. Use `primary` (emerald) for the single main action on a
 * surface; `secondary`/`tertiary` for supporting actions; `text` for inline links.
 * Never stack two `primary` buttons in the same group.
 *
 * @startingPoint section="Core" subtitle="Pill buttons in 5 variants" viewport="700x150"
 */
export declare function Button(props: ButtonProps): JSX.Element;
