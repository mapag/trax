import {
  Box,
  List,
  Divider,
  ListItem,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import NextImage from "next/image";
import NextLink from "next/link";
import { navMenu, musicMenu, playlists } from "../menus";
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
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <MenuItem menu={menu} key={menu.name} />
            ))}
          </List>
        </Box>
        <Box>
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <MenuItem menu={menu} key={menu.name} />
            ))}
          </List>
        </Box>
        <Divider marginTop="20px" color="gray.800" />
        <Box height="60%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem paddingX="20px" key="playlist">
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{playlist}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
