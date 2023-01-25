import { PageLayout } from "@/components/PageLayouts";
import Head from "next/head";
import { Dashboard } from "@/components/Dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>React and charts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Dashboard />
      </PageLayout>
    </>
  );
}

//TODO: server side render this page
