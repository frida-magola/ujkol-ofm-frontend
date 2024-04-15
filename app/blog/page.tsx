import Link from "next/link";
import Layout from "../../components/Layout";

export default function BlogPage() {
  return (
    <Layout>
      <section>
        <h1>Blog</h1>
        <Link href="/blog/post-1">Article 1</Link>
        <Link href="/blog/post-2">Article 2</Link>
      </section>
    </Layout>
  );
}
