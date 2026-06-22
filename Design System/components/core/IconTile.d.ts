import React from 'react';

/**
 * Applies Weevi's two-tone icon treatment to any glyph: charcoal 2px rounded
 * stroke plus one emerald accent dot.
 */
export interface IconTileProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The icon glyph — typically a lucide-react icon element, e.g. <Store />. */
  children?: React.ReactNode;
  /** Show the single emerald accent dot. @default true */
  accent?: boolean;
  /** Wrap the glyph in a soft rounded tile. @default true */
  tile?: boolean;
  /** Glyph size in px. @default 28 */
  size?: number;
  /** Stroke width (Lucide). @default 2 */
  strokeWidth?: number;
  /** Stroke colour. @default charcoal token */
  color?: string;
}

/**
 * Applies Weevi's two-tone icon treatment to any glyph: charcoal 2px rounded
 * stroke plus one emerald accent dot. Use with lucide-react glyphs as children.
 *
 * @startingPoint section="Core" subtitle="Lucide icon treatment, charcoal + emerald" viewport="700x150"
 */
export declare function IconTile(props: IconTileProps): JSX.Element;
