import { UserButton, useAuth } from '@clerk/remix'
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Link } from '@remix-run/react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const { userId } = useAuth()
    return (
        <div className="flex min-h-screen flex-col bg-gray-900 p-1 text-gray-100">
            <header className="fixed left-0 right-0 top-0 z-10 flex flex-wrap items-center justify-around gap-2  bg-gray-800 p-1 text-gray-100 shadow-md ">
                <p className="text-center text-xl font-bold md:text-2xl">
                    ACMG Variant Classifications
                </p>
                <ul className="hidden items-center gap-1 md:flex ">
                    <li className="font-semibold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="font-semibold">
                        {' '}
                        <Link to="/criterion">Criterion</Link>
                    </li>
                    <li className="font-semibold">
                        {' '}
                        <Link to="variants">Variants</Link>
                    </li>
                    <li className="font-semibold">
                        <Link to="/calculator">Calculator</Link>
                    </li>
                    <li className="font-semibold">
                        <Link to="/kdb">KDB</Link>
                    </li>

                    <li className="font-semibold">
                        <Link to="/beta">Beta</Link>
                    </li>
                </ul>
                {userId ? (
                    <div className="flex w-full justify-center md:w-fit">
                        <UserButton />
                    </div>
                ) : (
                    <div className="text-semibold flex gap-1">
                        <Link to="/sign-in">Sign In</Link>
                        <Link to="/sign-up">Sign Up</Link>
                    </div>
                )}
            </header>
            <main className="relative mt-20 flex-1 overflow-auto">
                {children}
            </main>
            <footer className="fixed bottom-0 left-0 right-0 z-50 flex h-10 items-center  justify-center bg-gray-800 text-gray-100 shadow-md">
                <ul className="flex items-center gap-1">
                    <li className="flex flex-col  items-center gap-1 font-semibold">
                        <GitHubLogoIcon />

                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/Derick80"
                        >
                            <p className="text-sm">Github</p>
                        </a>
                    </li>
                    <li className="flex flex-col  items-center gap-1 font-semibold">
                        <div className="flex gap-1">
                            <p className="text-sm ">Copyright</p>
                            <p className="text-sm">
                                {' '}
                                {new Date().getFullYear()}
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col  items-center gap-1 font-semibold">
                        <TwitterLogoIcon />
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://twitter.com/GeneticsStar"
                        >
                            <p className="text-sm">Twitter</p>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}
