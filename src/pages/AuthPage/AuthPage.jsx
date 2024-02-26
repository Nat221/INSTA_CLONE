import { Box, Image, Container, Flex, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";
import AuthImage from "../../public/auth.png";
import Playstore from "../../public/playstore.png";
import Microsoft from "../../public/microsoft.png";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent="center" alignItems="center" gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src={AuthImage} h={650} alt="Phone img" />
          </Box>

          <VStack spcacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign="center">Get the App.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src={Playstore} h={"10"} alt="Playstore logo" />
              <Image src={Microsoft} h={"10"} alt="Microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
