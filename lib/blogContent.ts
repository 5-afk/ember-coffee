// Full article content keyed by slug. In production, use MDX or a CMS.
export const blogContent: Record<string, { content: string }> = {
  'how-to-brew-pour-over': {
    content: `
Pour-over coffee rewards patience and a few simple rules. Here’s how we do it at EMBER—and how you can get similar results at home.

## What you need
- Freshly roasted whole beans (ground just before brewing)
- A pour-over dripper (V60, Chemex, or similar)
- Filter papers
- A gooseneck kettle
- Scale and timer (optional but helpful)

## Grind size
Aim for a medium-fine grind—finer than French press, coarser than espresso. If the brew tastes sour or thin, go finer; if it’s bitter or muddy, go coarser.

## Water temperature
195–205°F (90–96°C) is the sweet spot. Boil, then let the water sit 30 seconds before pouring.

## Ratio and technique
We use a 1:16 ratio (e.g., 20g coffee to 320g water). Wet the filter, add grounds, then pour in circles: a short bloom (2x coffee weight) for 30–45 seconds, then steady pours every 30–45 seconds until you hit your water weight. Total brew time is usually 3–4 minutes.

## Taste and adjust
Write down what you did. Change one variable at a time (grind, temperature, or ratio) and see how the cup changes. That’s how you develop your own recipe.
    `.trim(),
  },
  'understanding-coffee-origins': {
    content: `
Where your coffee grows shapes everything in the cup. Here’s why origin matters.

## Terroir
Altitude, soil, rainfall, and temperature affect how coffee develops. High-altitude beans often have more acidity and complexity; lower elevations can be rounder and sweeter. Soil and climate vary by region—so Yirgacheffe tastes different from Huila.

## Processing
After harvest, coffee is processed: washed (fermented, then washed), natural (dried in the fruit), or honey (some fruit left on). Washed coffees tend to be cleaner and brighter; naturals can be fruitier and heavier.

## Why we list origin
At EMBER we put the country and region on every bag. We want you to know exactly where your coffee came from and to connect the flavor in the cup to the place it was grown. That’s part of craft and sustainability.
    `.trim(),
  },
  'light-vs-dark-roast': {
    content: `
Light and dark roasts are different—but not in the ways many people assume.

## What actually changes
Roasting transforms the beans: moisture leaves, sugars caramelize, and oils develop. Light roasts preserve more of the bean’s origin character (acidity, fruit, florals). Dark roasts bring out roast-driven flavors (chocolate, smoke, body) and can mask origin.

## Caffeine myth
Caffeine content by weight is slightly lower in dark roasts (beans expand), but by scoop you’re close to the same. The big difference is taste, not buzz.

## What to choose
If you love bright, complex, origin-forward coffee, go light or medium. If you prefer bold, smoky, low-acid cups, go darker. We roast our single-origins on the lighter side to let the farm and process shine.
    `.trim(),
  },
  'sustainability-direct-trade': {
    content: `
We don’t use the term “direct trade” loosely. Here’s what it means for us.

## How we buy
We work with cooperatives and smallholder groups in Ethiopia (Yirgacheffe), Colombia (Huila), and Guatemala (Huehuetenango). We buy specific lots at a premium above the commodity price and visit when we can. No anonymous middlemen.

## Why it matters
Farmers get paid more and can invest in quality and sustainability. We get traceability and consistency. You get a story and a better cup.

## Transparency
We put origin and region on every bag. We’re not perfect—supply chains are complex—but we’re committed to being honest about where our coffee comes from and how we source it.
    `.trim(),
  },
  'grind-size-guide': {
    content: `
Grind size is one of the most powerful levers in coffee. Here’s a quick guide.

## Espresso
Fine, like table salt. Water passes quickly under pressure; fine grinds create resistance and extraction in 25–35 seconds.

## Pour-over / drip
Medium-fine to medium. Water flows through in 3–4 minutes. Too fine = bitter; too coarse = sour or weak.

## French press / immersion
Coarse. Steep 4 minutes, then plunge. Coarse grinds reduce over-extraction when the grounds sit in water.

## Cold brew
Coarse. Long steep (12–24 hours) with cold water. Coarse grinds keep the brew clean and low in bitterness.

## Rule of thumb
Finer = more extraction (and risk of bitter). Coarser = less extraction (and risk of sour). Adjust one step at a time and taste.
    `.trim(),
  },
};
