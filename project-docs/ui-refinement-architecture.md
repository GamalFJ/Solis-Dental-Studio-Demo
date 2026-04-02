# UI Architecture: Refinement Strategy

## 🚀 Performance: High-Priority Above-the-Fold
Next.js `Image` optimizations for the hero section:
1.  **Priority Handling**: Set `priority={true}` for `hero.png` across all occurrences where it's at the top of the viewport.
2.  **LCP Warning**: Remove redundant `loading="eager"` (as `priority` and `eager` are mutually exclusive in newer Next.js versions and can trigger warnings).
3.  **Sizing Strategy**: Add `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"` for the hero image to optimize loading based on device viewport.

## 🎨 Layout: Overlap & Spacing Protocol
Responsive solutions for overlapping elements in `ClinicalSlider.tsx`:
1.  **Flex vs. Absolute Positioning**: Use a bottom bar or a centered label on smaller viewports where `bottom-12 left-12` and `bottom-12 right-12` might collide.
2.  **Fluid Typography**: Use `text-[clamp(1.5rem,5vw,3rem)]` for labels to dynamically scale font size based on container width.
3.  **Layer Separation**: Ensure labels have a contrasting text-shadow or a subtle backing blur to remain legible over the 3D grid and hero image.

## 🧭 Navbar: Precision Alignment
Guidelines for the `DynamicNavbar.tsx`:
1.  **Center-Alignment**: Ensure the `max-w-7xl` container is correctly managing internal child alignment for the `glass-obsidian` wrapper.
2.  **Click Targets**: Ensure the mobile menu trigger has a minimum target size of `44x44px`.
3.  **Letter-Spacing**: Maintain the `tracking-[0.4em]` consistent across desktop links to match the premium "Oryn" aesthetic.

## 🧪 Quality Gate Evidence
Evidence required for each fix:
- **LCP Fix**: Console dump showing no image performance warnings during `npm run dev`.
- **Overlap Fix**: Screenshots of `ClinicalSlider` at 320px, 768px, and 1440px widths.
- **Navbar Audit**: Visual comparison with `Image 1`.
- **Build Pass**: Output of `npm run build` showing 0 errors.
