import { Link } from "@remix-run/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex flex-wrap items-center justify-between gap-2 bg-gray-900 p-1 text-gray-100 shadow-md ">
        <p className="text-2xl font-bold">ACMG Variant Classifications</p>
        <ul className="flex gap-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/criterion">Criterion</Link>
          </li>
          <li>
            <Link to="variants">Variants</Link>
          </li>
        </ul>
        <p className="text-gray-500">Login</p>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-900 text-gray-100 shadow-md">
        footer stuff here
      </footer>
    </div>
  );
}
