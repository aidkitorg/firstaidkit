# First AidKit (interview)

This is a toy project that we use at AidKit for technical interviews. Currently it includes a very simple main page that lists (fake) grant recipients and their phone numbers. Through the course of the interview, we'll add features to this project.

## The Stack

This project is written in Typescript using Next.js. Next.js is a React framework that has a friendly developer experience (live reloads, etc).

For styling, we're just using traditional CSS (albeit with some next.js cleverness). Since people tend to use a huge variety of different CSS frameworks, for this exercise we've just gone w/ the common denominator.

As a database, we're using sqlite. Sqlite is a simple SQL database that is stored in a local file. By using it here, we can avoid common challenges and pitfalls in configuring a more traditional SQL database.

## Developing

First, install the dependencies and then run the development server:

```bash
yarn install 
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/all](http://localhost:3000/api/all). This endpoint can be edited in `pages/api/all.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Styles are imported in a similar way to typescript imports, see the import at the top of `index.tsx` and how it's use in the corresponding React components.

## A Starter Task

If you want to experiment with making changes. Try adding a feature to add a new applicant to the database!