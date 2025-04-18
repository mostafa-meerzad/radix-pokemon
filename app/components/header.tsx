import { Box, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <Box p="2" mb="3" className={styles.header}>
      <Flex>
        <Box flexGrow="1" p="2">
          <Link href={"/"}>
            <Heading highContrast>Pokemon Deck Builder</Heading>
          </Link>
        </Box>
        <Flex gap="2"></Flex>
      </Flex>
    </Box>
  );
};

export default Header;
