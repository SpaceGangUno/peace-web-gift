
# Next.js Migration Instructions

This project has been partially migrated to Next.js. To complete the migration, follow these steps:

1. Rename `package.next.json` to `package.json` and `tsconfig.next.json` to `tsconfig.json`
2. Run `npm install` to install all dependencies
3. Make sure all existing images in `/public/lovable-uploads/` are moved to the new Next.js public directory
4. Update all other components to use Next.js imports and patterns:
   - Replace React Router's `Link` with Next.js `Link` 
   - Replace React Router's `useLocation` with Next.js `usePathname`
   - Replace `react-helmet` with Next.js `Head` component or Metadata API
   - Add "use client" directive to all client components

5. Run `npm run dev` to start the development server

## Files that need to be updated:
- All remaining components in the `/src/components/` directory need "use client" directive
- Any component that uses React Router hooks needs to be updated
- Components using client-side APIs need "use client" directive

## Routing Changes:
- React Router routes have been replaced with Next.js App Router structure
- Dynamic routes need to be placed in folders with [param] notation
- Client-side only components should have "use client" directive

## Additional Notes:
- The Next.js App Router uses a file-based routing system
- Server components are the default in Next.js, so components that need browser APIs must use "use client"
- Images should use Next.js Image component for optimization
