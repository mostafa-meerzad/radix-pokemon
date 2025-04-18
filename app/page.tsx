import { Heading } from "@radix-ui/themes";
import React from "react";
import Header from "./components/header";
import {
  getSignInUrl,
  getSignUpUrl,
  withAuth,
} from "@workos-inc/authkit-nextjs";
import Link from "next/link";

const HomePage = async () => {
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();
  const signupUrl = await getSignUpUrl();

  if (!user) {
    return (
      <>
        <Link href={signupUrl}>Sign up</Link>
        <Link href={signInUrl}> Sing in</Link>
      </>
    );
  }
  return (
    <main>
      {/* <Heading>Pokemon Deck Builder</Heading> */}
      <Header />
      <Heading>Welcome back {user.firstName && `, ${user.firstName}`}</Heading>
    </main>
  );
};

export default HomePage;
