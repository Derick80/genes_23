import { UserButton, UserProfile, useAuth } from "@clerk/remix";
import { Link } from "@remix-run/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {userId} = useAuth()
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
       {userId ?<><UserButton /> <Link to="/sign-out">Sign Out</Link></> :<div className="flex gap-1">
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
          </div>}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-900 text-gray-100 shadow-md">
        footer stuff here
      </footer>
    </div>
  );
}
