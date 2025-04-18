import { Avatar, Box, Button, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import { signOut, withAuth } from "@workos-inc/authkit-nextjs";

const Header = async () => {
  const { user } = await withAuth();
  return (
    <Box p="2" mb="3" className={styles.header}>
      <Flex>
        <Box flexGrow="1" p="2">
          <Link href={"/"}>
            <Heading highContrast>Pokemon Deck Builder</Heading>
          </Link>
        </Box>
        {user && (
          <Flex gap="2">
            <Avatar
              src={user?.profilePictureUrl ?? undefined}
              fallback={user?.firstName ?? ""}
              size="3"
            />

            <form action={async ()=>{"use server"; await signOut()}}>
              <Button type="submit" size={"3"}>Sign Out</Button>
            </form>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
