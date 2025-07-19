import LandingPage from "@/components/LandingPage/LandingPage";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <main className={" px-4 md:px-10 lg:px-24"}>
        <LandingPage />
      </main>
    </Layout>
  );
}
