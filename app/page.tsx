import { MainSection } from "./components/HeroHighlight";
import Layout from "./components/Layout";

export default function Home({ Component, pageProps }: any) {
  return (
    <Layout>
      <MainSection />
    </Layout>
  );
}

