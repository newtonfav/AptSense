import {
  SignInButton,
  SignOutButton,
  UserButton,
  UserProfile,
  useUser,
} from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Navigation() {
  const { userId } = auth();
  // if(!userId )
  // {
  //   return <div>You are logged in</div>
  // }

  return (
    <nav className="z-10 relative">
      <ul
        id="nav-items"
        className="md:flex gap-10 transition-all duration-500 items-center md:static absolute left-0 bg-white midPhone:text-[1rem] midPhone:text-primary-700 midPhone:-left-[6rem] midPhone:h-[8rem] md:bg-transparent md:w-auto hidden midPhone:p-3"
      >
        <li className="midPhone:mb-2">
          <Link
            href="/test"
            className="hover:text-accent-400 transition-colors midPhone:mr-6"
          >
            Aptitude Tests
          </Link>
        </li>
        <li className="midPhone:mb-2">
          <Link href="/" className="hover:text-accent-400 transition-colors">
            Pricing
          </Link>
        </li>
        <li className="midPhone:mb-2">
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li className="midPhone:mb-2 items-center">
          {userId ? (
            <div>
              <UserButton />
            </div> // Render Profile button
          ) : (
            <SignInButton /> // Render Login button
          )}
        </li>
      </ul>
    </nav>
  );
}
