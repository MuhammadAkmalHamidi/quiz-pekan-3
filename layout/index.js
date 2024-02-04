import Sidebar from "@/components/sidebar";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function Layout({ children, MetaDesc, metaKeyword, metaTitle }) {
  return (
    <div>
      <Head>
        <title>Daily Notes - {metaTitle || "Page"}</title>
        <meta name="description" content={MetaDesc || "Portfolio Website"} />
        <meta name="keyword" content={metaKeyword} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <Sidebar />
        {children}
      </Flex>
    </div>
  );
}
