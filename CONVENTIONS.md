# Coding Conventions

## Styling
- **Tailwind CSS**: Use Tailwind utility classes for styling whenever possible.
- **Consistency**: Use the `cn()` utility (from `src/lib/utils.js`) for conditional class merging.
- **Colors**: Use the defined brand colors (e.g., `#DE9F3A` for Gold) or Tailwind theme extensions.
- **Fonts**: Use `Robit` for headings/body as configured in `index.css`.

## Components
- **Functional Components**: Use React functional components with Hooks.
- **Naming**: PascalCase for component filenames and function names (e.g., `MyComponent.jsx`).
- **Props**: Destructure props in the function signature.
- **Exports**: Use `export default` for page components and main feature components. Named exports are acceptable for utility components.

## File Structure
- **Colocation**: Keep related styles and assets close to the component if not using global assets.
- **Imports**:
    - Use absolute imports `@/` (if configured) or relative imports consistently.
    - Group imports: React/Third-party -> Local Components -> Assets/Styles.

## State Management
- **Local State**: Use `useState` for component-level state.
- **Effects**: Use `useEffect` for side effects, ensuring dependency arrays are correct.

## Best Practices
- **Responsiveness**: Mobile-first approach using Tailwind's responsive prefixes (`md:`, `lg:`).
- **Accessibility**: Ensure interactive elements have `aria-label` or visible text.
- **Performance**: Optimize heavy animations and 3D renders.
