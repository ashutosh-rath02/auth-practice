"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          Next-Auth
        </Link>
        {user ? <UserButton user={user} /> : <SignInButton />}
        {!user && session.status !== "loading" && <SignInButton />}
      </nav>
    </header>
  );
}

function SignInButton() {
  return <Button onClick={() => signIn()}>Sign In</Button>;
}
