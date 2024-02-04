import DeleteNote from "@/pages/api/update/[noteId]";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  useDisclosure,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Field, Form, Formik } from "formik";
import Axios from "axios";
import Swal from "sweetalert2";

export function MenuButtonComponent({ noteId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleDelete = async () => {
    Swal.fire({
      text: "Are you sure you want to delete this note?",
      icon: "warning",
      iconColor: "red",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`/api/delete/${noteId}`, {
            method: "DELETE",
          })
            .then(
              Swal.fire({
                title: "Note Deleted",
                text: "Note has been deleted successfully.",
                icon: "success",
              })
            )
            .then(
              setTimeout(() => {
                window.location.reload();
              }, 2000)
            );
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleEdit = async (values) => {
    try {
      const response = await fetch(`/api/update/${noteId}`, {
        method: "PATCH",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(values)
      }).then(Swal.fire({
        title:" Edit Success",
        icon:"success"
      })).then(setTimeout(() => {
        window.location.reload()
      },2000))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Menu>
        <MenuButton p={"5px"}>
          <BsThreeDotsVertical />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={onOpen}>Edit</MenuItem>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit your note</ModalHeader>
              <ModalCloseButton />
              <Formik
                initialValues={{
                  title: "",
                  description: "",
                }}
                onSubmit={(values) => {
                  handleEdit(values);
                }}
              >
                <Form>
                  <ModalBody>
                    <div>
                      <div>Title</div>
                      <Field
                        type="text"
                        name="title"
                        as={Input}
                      />
                    </div>
                    <div>
                      <div>Description</div>
                      <Field
                        name="description"
                        className="border-2 rounded-md w-2/3 h-36"
                        as={Textarea}
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      onClick={onClose}
                      colorScheme="blue"
                      mr={3}
                    >
                      Save
                    </Button>
                  </ModalFooter>
                </Form>
              </Formik>
            </ModalContent>
          </Modal>
          <MenuItem
            zIndex={"10"}
            onClick={() => {
              handleDelete(noteId);
            }}
          >
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
