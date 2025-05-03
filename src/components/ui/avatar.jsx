import { Avatar } from "@chakra-ui/react";

const AvatarDemo = () => {
  return (
    <Avatar.Root>
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image src="https://bit.ly/sage-adebayo" />
    </Avatar.Root>
  );
};
export default AvatarDemo;
