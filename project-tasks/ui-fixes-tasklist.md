# Task List: Solis UI Fixes & LCP Optimization

## 🚀 Performance Optimization (LCP)
- ### [ ] Fix LCP for `/assets/hero.png`
  - Ensure `priority` prop is set.
  - Remove `loading="eager"` if redundant with `priority` or add if specifically needed by Next.js version for above-the-fold status.
  - Check `ClinicalSlider.tsx` for shared asset LCP impact.
  - **Evidence**: Lighthouse/Console check for LCP warnings.

## 🎨 UI & Layout Refinement (Images 1 & 2)
- ### [ ] Fix Text Overlap in `ClinicalSlider.tsx`
  - Adjust "Initial Phase / Clinical Assessment" and "Final Phase / Bespoke Aesthetics" positions.
  - Use responsive classes (e.g., `md:bottom-12`, `sm:bottom-8`) to prevent overlap on mobile.
  - Consider reducing font size or changing layout to horizontal layout on very small screens.
  - **Evidence**: Screenshots of non-overlapping text on mobile/desktop.
- ### [ ] Audit `DynamicNavbar.tsx` for Alignment
  - Check "INITIATE CONSULT" button and links for center-alignment and padding.
  - Ensure the glassmorphism effect doesn't obscure text readability.
  - **Evidence**: Screenshot comparison with user-provided `Image 1`.
- ### [ ] Fix Hero Section Text Polish
  - Ensure the "Dental renaissance" text in `page.tsx` has proper spacing and doesn't conflict with the `Hero3D` background on all screen sizes.
  - **Evidence**: Visual check across breakpoints.

## ✅ Final Validation
- ### [ ] Run `npm run build` to ensure no new breakages.
- ### [ ] Comprehensive UI reality check (Evidence-based).
