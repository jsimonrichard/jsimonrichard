# J. Simon Richard's Resume Website

Public site content in `src/content/resume-*` is the source for both the
homepage and the Typst CV. `bun run build` (and `bun run dev`) compile
`resume/resume.typ` to `/resume.pdf`. Side projects stay on the site only.
Typst 0.15+ plus Noto Sans and Libertinus Serif must be on PATH; the build
fails if they are missing.

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
