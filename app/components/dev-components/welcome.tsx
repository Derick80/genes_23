import { Link } from "@remix-run/react";

export default function DevelopmentWelcome() {
  return (
    <div className="prose prose-invert mx-auto flex h-full w-full flex-col items-center gap-2  rounded-md border-2 p-2 xl:prose-xl">
      Welcome to my in development site. This site is a work in progress. I am
      working towards a comprehensive ACMG/AMP variant classification tool.
      <h2>Current Features</h2>
      <ul>
        <li>
          <Link to="/calculator">ACMG Classification Counter Calculator</Link>
        </li>
        <li>Variant Classification Score</li>
      </ul>
      <h2>Future Features</h2>
      <ul>
        <li>Citations</li>
        <li>Documentation </li>
        <li>PDF upload and retreival page</li>
      </ul>
    </div>
  );
}
