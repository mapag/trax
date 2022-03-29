import { LinkBox, LinkOverlay, ListIcon, ListItem } from "@chakra-ui/layout";
import NextLink from "next/link";

const MenuItem = ({ menu }) => {
  return (
    <ListItem paddingX="20px" fontSize="16px">
      <LinkBox>
        <NextLink href={menu.route} passHref>
          <LinkOverlay>
            <ListIcon as={menu.icon} color="white" marginRight="20px" />
            {menu.name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default MenuItem;
