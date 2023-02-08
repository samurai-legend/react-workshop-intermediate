import { Anchor, Text, Title } from "@mantine/core";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const AuthHeader = ({ title, route, routeDescription, buttonTitle }) => {
  return (
    <>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        {title}
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        {`${routeDescription} `}
        <Anchor component={Link} to={route} size="sm">
          {buttonTitle}
        </Anchor>
      </Text>
    </>
  );
};

export default AuthHeader;

AuthHeader.prototype = {
  title: PropType.string.isRequired,
  route: PropType.string.isRequired,
  routeDescription: PropType.string.isRequired,
  buttonTitle: PropType.string.isRequired,
};
