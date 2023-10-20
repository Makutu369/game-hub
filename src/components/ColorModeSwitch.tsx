import { Text, HStack, Switch, useColorMode } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>{colorMode}</Text>
    </HStack>
  );
};
