## Deployed at
[https://water-intake-fuzzy-system.vercel.app](https://water-intake-fuzzy-system.vercel.app)\
Whatever is in the `main` branch of this remote repo will be automatically built and deployed to the url above.\
In the event when Vercel is down, follow [Running this locally](#running-this-locally).

## Running this locally
1. Clone this repository:
```bash
git clone https://github.com/ngjiashiang/water-intake-fuzzy-system.git

# or if you have GitHub CLI
gh repo clone ngjiashiang/water-intake-fuzzy-system
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assignment grading
The main logic of this application is in `/app/*`.

## Contributing
Fork and submit a PR the usual stuff, you know the drill.

To-do:
- properly type everything, ctrl+f `: any` to see what's wrong with me
- heavy functions are being called even when it is not needed specifically, checkout `app/components/*`
- eliminate redundant logic, checkout `app/components/*`

# Original Next.js Readme

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
