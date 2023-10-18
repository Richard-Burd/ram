import "@/styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Recycling Advocates of Middle Tennessee</title>
        <meta
          name="description"
          content="A project presented by Urban Cruise Ship"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
