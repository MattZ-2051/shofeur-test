## Github Link

https://github.com/MattZ-2051/shofeur-test

## Getting Started

First, run the development server:

```
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

or visit
https://shofeur-test.vercel.app/locations

### App Description

#### Folder Structure

- [src/components](https://github.com/MattZ-2051/shofeur-test/tree/master/src/components) - Contains components used throughout the application, I like to use storybook to test these components
- [src/api, hooks, store, types, utils](https://github.com/MattZ-2051/shofeur-test/tree/master/src) - Example of folder structure I would possibly use if the app were to be further developed
- [src/app/\*](https://github.com/MattZ-2051/shofeur-test/tree/master/src/app) - Contains SEO Metadata files as explained in the [Next Docs](https://nextjs.org/docs/app/api-reference/file-conventions/metadata) as well as a opengraph metadata file added in the [slug] route

### Tech Used

- NextJS
- Typescript
- TailwindCSS
- Storybook for UI component testing (basic example in the button component)
- Chromatic for CD to catch breaking UI changes (helps with regression and sharing component lib with team)

### Summary

https://shofeur-test.vercel.app/locations
Is a basic locations example page that uses mockData, a further built out page can include pagination and additional filters. Clicking on the Las Vegas card will take you to /locations/[slug], in this case https://shofeur-test.vercel.app/locations/lasvegas. I added a basic page that shows some activities, rides available and a CTA to contact. Further development may contain descriptions and reviews from people who have used the service in the area.
