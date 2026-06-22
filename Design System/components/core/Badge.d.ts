import React from 'react';

/**
 * Small pill for product trademarks (Weevi Pay™), labels, and status.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "solid" */
  variant?: 'solid' | 'mint' | 'outline' | 'dark' | 'status';
  /** Dot colour for the `status` variant. @default emerald */
  dotColor?: string;
  children?: React.ReactNode;
}

/**
 * Small pill for product trademarks (Weevi Pay™), labels, and status.
 * Use `status` with a coloured dot for live / beta / dated states.
 *
 * @startingPoint section="Core" subtitle="Trademark & status pills" viewport="700x150"
 */
export declare function Badge(props: BadgeProps): JSX.Element;
