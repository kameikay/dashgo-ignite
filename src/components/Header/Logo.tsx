import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <div>
      <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" w="64" display="inline">
        dashgo
        <Text as="span" marginLeft="1" color="pink.500">
          .
        </Text>
      </Text>
    </div>
  );
}
