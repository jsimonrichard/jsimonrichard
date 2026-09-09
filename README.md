# J. Simon Richard's Resume Website

Public site content in `src/content/resume-*` is the source for both the
homepage and the Typst CV. `bun run build` (and `bun run dev`) compile
`resume/resume.typ` to `/resume.pdf`. Side projects stay on the site only.
Typst 0.15+ plus Noto Sans and Libertinus Serif must be on PATH; the build
fails if they are missing.

GitHub Actions builds the site (including the CV) and deploys `dist` as a
Workers static-assets project (`wrangler.jsonc`). Pushes to `main` run
`wrangler deploy` (jsimonrichard.com). Other branches, including `dev`,
upload a Worker version with a preview URL. Pull requests only build.

Required GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
The old Cloudflare Pages Git integration should be removed so it does not
build without Typst.

## To-Do

- [x] Home page
- [x] Resume content (managed for home page and printable resume)
- [x] Printable-resume
- [x] Markdown blog with working interactive elements
- [x] Blog posts with PDF attachments
- [x] GitHub build action
- [x] Better mobile `<Layout />`
- [x] Update favicon
- [x] Make CI more specific so it doesn't trigger on README updates
