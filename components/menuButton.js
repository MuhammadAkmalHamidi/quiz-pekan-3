import { Button, Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronCircleDown } from "react-icons/fa";

export default function MenuButton() {
  return (
    <Menu>
      <MenuButton as={Button}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}
