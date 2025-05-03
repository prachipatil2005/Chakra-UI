import {
  ActionBar,
  Box,
  Button,
  Card,
  HStack,
  Heading,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { Alert } from "@chakra-ui/react";
import AlertDemo from "./components/ui/alert";
import AspectRationDemo from "./components/ui/aspectratio";
import AccordionDemo from "./components/ui/accordion";
import AvatarDemo from "./components/ui/avatar";
import BadgeDemo from "./components/ui/badge";
import BoxDemo from "./components/ui/box";
import BreadcrumbDemo from "./components/ui/Breadcrumb";
import ActionBarDemo from "./components/ui/actionbar";
import ToastDemo from "./components/ui/toast";
import ButtonDemo from "./components/ui/button";
import CardWithForm from "./components/ui/card";
import CheckBoxDemo from "./components/ui/checkbox";
import CopyDemo from "./components/ui/copyTimeout";
import ColorPickerDemo from "./components/ui/colorpicker";
const componentMap = {
  alert: <AlertDemo />,
  aspectRatio: <AspectRationDemo />,
  accordion: <AccordionDemo />,
  avatar: <AvatarDemo />,
  badge: <BadgeDemo />,
  box: <BoxDemo />,
  breadcrumb: <BreadcrumbDemo />,
  actionbar: <ActionBarDemo />,
  toast: <ToastDemo />,
  button: <ButtonDemo />,
  card: <CardWithForm />,
  checkbox: <CheckBoxDemo />,
  copy: <CopyDemo />,
  colorpicker: <ColorPickerDemo />,
};

const App = () => {
  const [selected, setSelected] = useState(" ");
  return (
    <Box p={5}>
      <Heading mb={4}>Chakra UI Component Showcase</Heading>
      <HStack spacing={4} mb={6} wrap="wrap">
        <Button onClick={() => setSelected("alert")}>Alert</Button>
        <Button onClick={() => setSelected("aspectRatio")}>Aspect Ratio</Button>
        <Button onClick={() => setSelected("accordion")}>Accordion</Button>
        <Button onClick={() => setSelected("avatar")}>Avatar</Button>
        <Button onClick={() => setSelected("badge")}>Badge</Button>
        <Button onClick={() => setSelected("box")}>Box</Button>
        <Button onClick={() => setSelected("breadcrumb")}>Breadcrumb</Button>
        <Button onClick={() => setSelected("actionbar")}>ActionBar</Button>
        <Button onClick={() => setSelected("toast")}>Toast</Button>
        <Button onClick={() => setSelected("button")}>Button</Button>
        <Button onClick={() => setSelected("card")}>Sign-in card</Button>
        <Button onClick={() => setSelected("checkbox")}>CheckBox</Button>
        <Button onClick={() => setSelected("copy")}>Copy</Button>
        <Button onClick={() => setSelected("colorpicker")}>ColorPicker</Button>
      </HStack>

      <Box>
        {selected ? (
          componentMap[selected]
        ) : (
          <p>Select a component to preview</p>
        )}
      </Box>
    </Box>
  );
};

export default App;
