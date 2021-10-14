import { Flex, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Victor Kamei Kay</Text>
          <Text color="gray.300">kameikay@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Victor Kamei Kay" />
    </Flex>
  );
}
