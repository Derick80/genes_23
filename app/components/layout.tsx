import { UserButton, UserProfile, useAuth } from "@clerk/remix";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { userId } = useAuth();
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 p-1 text-gray-100">
      <header className="fixed left-0 right-0 top-0 z-50 flex flex-wrap items-center justify-between gap-2  shadow-md bg-gray-800 p-1 text-gray-100 ">
        <p className="text-2xl font-bold">ACMG Variant Classifications</p>
        <ul className="flex gap-1">
          <li
          className="font-semibold"
          >
            <Link to="/">Home</Link>
          </li>
          <li
          className="font-semibold"
          >            <Link to="/criterion">Criterion</Link>
          </li>
          <li
          className="font-semibold"
          >            <Link to="variants">Variants</Link>
          </li>
        </ul>
        {userId ? (
          <>
            <UserButton /> <Link to="/sign-out">Sign Out</Link>
          </>
        ) : (
          <div className="flex gap-1 text-semibold">
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        )}
      </header>
      <main className="mt-20 relative flex-1">{children}</main>
      <footer className="fixed left-0 right-0 bottom-0 z-50 h-10 justify-center flex  items-center bg-gray-800 text-gray-100 shadow-md">
        <ul className="flex gap-1">
          <li
          className="font-semibold"
          >
            <Link to='/https://github.com/Derick80'
            >
              <p className="text-sm">Github</p>
               </Link>
          </li>
          <li className="flex gap-1 font-semibold">
            <p className="text-sm ">Copyright 
             
            </p>
            <p className="text-sm"> {new Date().getFullYear()}
            </p>
          </li>
          <li
          className="font-semibold"
          >
            <Link to='/https://twitter.com/Derick80'
            >
              <p className="text-sm">Twitter</p>
                </Link>
          </li>

          
        </ul>
      </footer>
    </div>
  );
}
