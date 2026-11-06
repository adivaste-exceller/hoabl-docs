// Swapped in for route.ts by the GitHub Pages deploy workflow only (there's
// no server to run real search against on a static export — search is
// disabled in that build via `search.enabled` in src/app/layout.tsx). Next
// requires `dynamic` to be a literal here, so this can't just be a runtime
// branch inside route.ts; local dev and any server deploy keep using the
// real implementation untouched.
export const dynamic = 'force-static';

export async function GET() {
  return Response.json([]);
}
