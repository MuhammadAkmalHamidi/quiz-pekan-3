import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  useDisclosure,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import Swal from "sweetalert2";

export default function AddNotesButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddButton = async (values) => {
    console.log(values);
    try {
      const response = await fetch("/api/addNote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then(setTimeout(() => {
        window.location.reload()
      },1000));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Flex
        onClick={onOpen}
        borderRadius={"10px"}
        _hover={{
          transform: "scale(1.03)",
          transition: "0.3s",
          cursor: "pointer",
        }}
        h={"300px"}
        px={"20px"}
        py={"15px"}
        bg={"gray.200"}
        w={"30%"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"100px"}
        fontWeight={"thin"}
        color={"white"}
      >
        +
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={{
              title: "",
              description: "",
            }}
            onSubmit={(values) => {
              handleAddButton(values);
            }}
          >
            <Form>
              <ModalBody>
                <div>
                  <div>Title</div>
                  <Field
                    type="text"
                    name="title"
                    className="border-2 rounded-md w-2/3 h-12"
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
                  Add Note
                </Button>
              </ModalFooter>
            </Form>
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
}
