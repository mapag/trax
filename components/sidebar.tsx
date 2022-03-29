import { Box, List, Divider } from "@chakra-ui/layout";
import NextImage from "next/image";
import { navMenu, musicMenu } from "../menus";
import MenuItem from "./menuItem";

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box>
          <List spacing={2}>
            {navMenu.map((menu) => (
              <MenuItem menu={menu} key={menu.name} />
            ))}
          </List>
        </Box>
        <Divider marginY="20px" color="gray.800" />
        <Box marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <MenuItem menu={menu} key={menu.name} />
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
