import { AspectRatio } from "@chakra-ui/react";

const AspectRationDemo = () => {
  return (
    <AspectRatio maxW="560px" ratio={1}>
      <iframe
        title="naruto"
        src="https://www.youtube.com/embed/QhBnZ6NPOY0"
        allowFullScreen
      />
    </AspectRatio>
  );
};

export default AspectRationDemo;
