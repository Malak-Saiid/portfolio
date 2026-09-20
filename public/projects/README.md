# Project screenshots

Place actual project screenshots in this directory. Prefer optimized WebP or AVIF files; PNG is suitable when needed. Use concise filenames such as `sanad.webp`, `airbnb.webp`, or `ecommerce.webp`.

The current previews are hand-coded interface concepts, labeled **Interface concept** in the portfolio. They do not claim to reproduce the deployed applications. Do not export them as supposed real screenshots.

To replace a concept, edit the matching entry in `data/projects.ts`:

```ts
image: "/projects/sanad.webp",
imageAlt: "An accurate description of the actual screenshot",
```

The public URL begins with `/projects/`, not `/public/projects/`. A 3:2 screenshot around 1200 × 800 pixels fits the existing image area. Check important content remains visible at mobile widths. The image is loaded lazily by `components/ui/project-preview.tsx`.

Keep `image: null` until an actual file is available. That preserves the existing concept preview. Repository and demo URLs are configured separately with `githubUrl` and `liveUrl`; leave missing links as `null`.
