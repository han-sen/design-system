# Dashboard Design System

A small component library designed for building dashboards.

Built with React, TypeScript, Tailwind CSS v4, and class-variance-authority, documented and developed in Storybook. This is a work in progress: the generic components come first, then the dashboard-specific ones.

## Components

| Component | Notes |
| --- | --- |
| `Button` | `primary`, `secondary`, `ghost`, `danger` variants, three sizes, loading state, ref forwarding |
| `Tabs` | Compound component (`Tabs.List`, `Tabs.Trigger`, `Tabs.Content`) with `tablist`/`tab`/`tabpanel` roles and `aria-selected` |
| `Badge` | Status variants for short labels |
| `Alert` | Compound component (`Alert.Title`, `Alert.Description`), status icon per variant, `alert` vs `status` role by severity |

Planned: `Card`, `StatCard`, `Table`, `DescriptionList`, `Skeleton`/`EmptyState`, and two charts (`Sparkline`, `BarChart`) built on D3 scales and shapes rendered as React SVG.

## Getting started

```bash
npm install
npm run storybook   # component explorer at http://localhost:6006
npm test            # unit tests (Vitest + Testing Library), watch mode
npm run lint
npm run build       # type-check + production build
```

## Design decisions

**Semantic design tokens.** Components use role-based classes such as `bg-primary` and `text-danger-foreground`, never raw palette colors. The tokens live in `src/index.css`: Tailwind v4's `@theme inline` points at CSS variables defined in `:root`. Adding dark mode later means adding a `.dark` block of variable values, with no component changes.

**Variants with CVA.** Each element with variant logic gets its own `cva()` definition, kept in a separate `*.variants.ts` file so React Fast Refresh keeps working. Variant prop types are inferred from the definition rather than written by hand.

**Compound components where the structure calls for it.** `Tabs` shares its selected value through Context. `Alert.Title` and `Alert.Description` are plain styled elements, because they don't need shared state. Compound structure doesn't require Context.

**Props that behave like the native element.** Components extend the native HTML attributes, merge `className` with `cn()` (`clsx` + `tailwind-merge`, so a caller's `mt-0` wins over a default), and spread the remaining props. Semantic attributes such as `role` come after the spread so a caller can't accidentally override them.

**`forwardRef` on interactive elements** (`Button`, `Tabs.Trigger`), so consumers can focus or measure them and the library stays compatible with React versions before 19.

**No outer margins.** Components style their inside (padding, gap, color). The layout that contains them decides the space around them.

**Accessibility.** Tabs use the ARIA tabs roles. `Alert` uses `role="alert"` for warning and danger and `role="status"` otherwise. Status is conveyed by an icon and text as well as color, and decorative icons are `aria-hidden`. The Storybook a11y addon runs axe checks on every story.

**Documentation as the API surface.** Props carry JSDoc (including usage notes and known caveats), which shows up in editor hovers and in Storybook's autodocs.

## Known limitations

- `Tabs` `defaultValue` must match a `Tabs.Trigger` and `Tabs.Content` value, but TypeScript can't verify that. A typo silently results in no active tab.
- `Tabs` doesn't yet support arrow-key navigation or roving `tabindex`.
- Dark mode isn't implemented yet, and the status colors are provisional until more components exist.

## Testing

Unit tests use Vitest and Testing Library and cover behavior and accessibility (roles, `aria-selected`, prop passthrough, ref forwarding). `Tabs` also has a Storybook interaction test.
