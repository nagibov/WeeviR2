Wraps a Lucide glyph in Weevi's icon treatment — charcoal 2px rounded stroke with a single emerald accent dot, optionally in a soft tile.

```jsx
import { Store, CreditCard, Truck } from 'lucide-react';

<IconTile><Store /></IconTile>            // tile + accent dot
<IconTile tile={false}><Truck /></IconTile> // inline, no tile
<IconTile accent={false}><CreditCard /></IconTile> // plain charcoal
```

Use **Lucide** as the icon set (2px rounded strokes match the brand). Keep the emerald to the accent dot only — never recolour the glyph stroke itself. `size`, `strokeWidth`, and `color` are adjustable.
