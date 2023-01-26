# Stock Portfolio Dashboard

This is a simple dashboard built using NextJS and TypeScript that displays a Pie Chart and a Bar Graph of a user's stock portfolio. The data is fetched from an API (https://contrahacker.com/api/example-data) and is displayed using react-chartjs-2.

## Deployment

The app is deployed on Vercel.

[visit website](https://react-and-charts.vercel.app/)

## Key Features

- The website is built using NextJS and TypeScript.
- The solution is hosted on Vercel and is publicly available.
- The app fetches the example data from https://contrahacker.com/api/example-data
- Uses SWR to refresh data on the client side.
- A donut chart is used to show how many stocks of each sector are present in the data.
- A bar graph is used to show the prices of each stock present in the data.
- The charts handle loading and error states gracefully.
- A custom color palette is used in both charts.
- The charts have their own labels and a single sentence describing what the chart is showing.
- The page is responsive and built using the mobile-first approach.
- A launch.json file is included for debugging in VS Code.
- Implemented retry and back strategy when there are errors.

## Error Handling

In case of errors, the charts will automatically fetch data with a back off and retry strategy.

Backoff and retry is a strategy to handle failures and errors when making network requests. The idea is to wait for a certain amount of time before retrying the request, in case of a failure. The delay between retries is increased with each attempt, a strategy known as "exponential backoff."

You can also click on the "Refresh" button.

## Built With

- NextJS - A framework for building server-rendered React applications.
- TypeScript - A superset of JavaScript that adds optional types to the language.
- react-chartjs-2 - A React wrapper for Chart.js.
- SWR - A lightweight library for data fetching.
- Vercel - A platform for building and deploying web applications.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Debugging

To debug the application, you can use the launch.json file included in the repository. Simply open the file in VS Code and select the appropriate configuration to run.
