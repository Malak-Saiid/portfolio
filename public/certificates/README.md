# Optional certificate assets

This directory is reserved for actual certificate images or PDF files. The current certification cards show the supplied titles and providers from `data/certificates.ts`; they do not require certificate scans.

Placing a file here does not add a viewer or link automatically. If certificate viewing is added later, extend the `Certificate` interface in `types/profile.ts`, add the corresponding path to `data/certificates.ts`, and render a clearly named link in `components/sections/certificates.tsx`.

Use public paths such as `/certificates/ccna-introduction-to-networks.pdf`. For images, provide accurate alternative text and optimized dimensions. Check scans for personal information that should not be public, and do not add unverified issue dates or certificate IDs.
