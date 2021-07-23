import Link from "next/link";

// our-domain.com/news

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/first">The first link</Link>
        </li>
        <li>The second link</li>
        <li>The third link</li>
      </ul>
    </>
  );
}

export default NewsPage;
