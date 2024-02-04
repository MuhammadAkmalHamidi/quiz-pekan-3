import AddNotesButton from "@/components/addNotesButton";
import { MenuButtonComponent } from "@/components/menuButton";
import Layout from "@/layout";
import { Box, Flex } from "@chakra-ui/react";
import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [noteId, setNoteId] = useState(0);
  const data = props?.data.data;
  return (
    <>
      <Layout
        metaTitle="Home"
        MetaDesc={"Your Daily Notes"}
        metaKeyword={
          "personal website, portfolio, design, technology, creative, web development"
        }
      >
        <Flex w={"full"} h={"100vh"} py={"25px"}>
          <Box pl={"45px"} w={"100%"}>
            <Flex fontSize={"30px"} fontWeight={"bold"}>
              Sticky Wall
            </Flex>
            <Flex py={"25px"} flexWrap={"wrap"} gap={"25px"} w={"100%"}>
              {data?.map((item, index) => {
                return (
                  <Box
                    key={index}
                    borderRadius={"10px"}
                    _hover={{
                      transform: "scale(1.03)",
                      transition: "0.3s",
                      cursor: "pointer",
                    }}
                    h={"300px"}
                    px={"20px"}
                    py={"15px"}
                    bg={"purple.100"}
                    w={"30%"}
                  >
                    <Flex
                      justifyContent={"end"}
                      onClick={() => setNoteId(item.id)}
                    >
                      <MenuButtonComponent noteId={noteId} />
                    </Flex>
                    <Flex
                      mb={"15px"}
                      textColor={"gray.700"}
                      fontWeight={"bold"}
                      fontSize={"25px"}
                    >
                      {item.title}
                    </Flex>
                    <Flex pl={"10px"} textColor={"gray.600"}>
                      {item.description.substring(0, 250) + "..."}
                    </Flex>
                  </Box>
                );
              })}
              <AddNotesButton />
            </Flex>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const data = await res.json();
  return { props: { data } };
}
