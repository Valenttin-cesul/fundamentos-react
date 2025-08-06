import {
  Button,
  Link as ChakraLink,
  Field,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import LoginImage from "../../public/assets/login-gif.gif";

export default function Login() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex w="50%" bg="#2C73EB" align={"center"} justify="center">
        <Image w={500} h={500} src={LoginImage.src} />
      </Flex>
      <VStack w="50%" justify="center">
        <Stack>
          <Heading as={"h1"} fontSize="3xl" fontWeight="bold" color="black">
            Entrar
          </Heading>
          <Text color="gray.400" fontSize="lg" fontWeight="normal">
            Se você já é membro, você pode fazer login com seu endereço de
            e-mail e senha.
          </Text>
          <VStack align="flex-start" gap={6}>
            <Field.Root required>
              <Field.Label color="gray.500">
                Email <Field.RequiredIndicator />
              </Field.Label>
              <Input
                type="email"
                colorPalette="blue"
                rounded="md"
                color="black"
              />
            </Field.Root>
            <Field.Root required>
              <Field.Label color="gray.500">
                Senha <Field.RequiredIndicator />
              </Field.Label>
              <PasswordInput colorPalette="blue" rounded="md" color="black" />
            </Field.Root>
            <Checkbox
              colorPalette="blue"
              color="gray.500"
              fontSize="md"
              fontWeight="medium"
            >
              Lembre-me
            </Checkbox>
            <Button colorPalette="blue" rounded="md" w="full">
              Entrar
            </Button>
          </VStack>
          <HStack gap={1} justify="center" mt={10}>
            <Text color="gray.500" fontSize="md" fontWeight="medium">
              Não possui uma conta ?
            </Text>
            <ChakraLink asChild color="blue.500">
              <NextLink href="/sign-up">Clique aqui</NextLink>
            </ChakraLink>
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
}
