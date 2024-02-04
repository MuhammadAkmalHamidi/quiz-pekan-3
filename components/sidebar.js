import { Box, Flex, Input } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineEventNote } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";


export default function Sidebar() {
  return (
    <Box
      w={"45vh"}
      h={"100vh"}
      bg={"gray.200"}
      alignItems={"center"}
      py={"20px"}
      justifyContent={"space-between"}
    >
      <Flex px={"20px"} fontSize={"35px"} fontWeight={"thin"} mb={"40px"}>
        Daily Notes
      </Flex>
      <Box>
        <Box>
          <Flex px={"35px"} mb={"40px"} alignItems={"center"} gap={"10px"}>
            <IoIosSearch size={"20px"} />
            <Input placeholder="Search" variant={"unstyled"} />
          </Flex>
          <Box>
            <Flex
              px={"35px"}
              py={"10px"}
              gap={"10px"}
              alignItems={"center"}
              _hover={{
                bg: "gray.400",
                transition: "0.2s",
                textColor: "white",
              }}
              cursor={"pointer"}
            >
              <MdOutlineEventNote size={"20px"} />
              <Flex>Notes</Flex>
            </Flex>
            <Flex
              px={"35px"}
              py={"10px"}
              gap={"10px"}
              alignItems={"center"}
              _hover={{
                bg: "gray.400",
                transition: "0.2s",
                textColor: "white",
              }}
              cursor={"pointer"}
            >
              <FaBell size={"20px"} />
              <Flex>Reminder</Flex>
            </Flex>
          </Box>
        </Box>
        <Flex px={"10px"} mt={"10px"} mb={"30px"}>
          <Box bg={"gray.100"} w={"100%"} h={"1.5px"}></Box>
        </Flex>
        <Box>
        <Flex
              px={"35px"}
              py={"10px"}
              gap={"10px"}
              alignItems={"center"}
              _hover={{
                bg: "gray.400",
                transition: "0.2s",
                textColor: "white",
              }}
              cursor={"pointer"}
            >
              <FaStar size={"20px"} />
              <Flex>Favorite</Flex>
            </Flex>
            <Flex
              px={"35px"}
              py={"10px"}
              gap={"10px"}
              alignItems={"center"}
              _hover={{
                bg: "gray.400",
                transition: "0.2s",
                textColor: "white",
              }}
              cursor={"pointer"}
            >
              <FaTrashAlt size={"20px"} />
              <Flex>Bin</Flex>
            </Flex>
            <Flex
              px={"35px"}
              py={"10px"}
              gap={"10px"}
              alignItems={"center"}
              _hover={{
                bg: "gray.400",
                transition: "0.2s",
                textColor: "white",
              }}
              cursor={"pointer"}
            >
              <IoMdArchive size={"20px"} />
              <Flex>Archive</Flex>
            </Flex>
        </Box>
      </Box>
    </Box>
  );
}
