import { platform } from "../hooks/useGames";
import {
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platform: platform[];
}
interface Icons {
  [key: string]: IconType;
}
export const PlatformIconList = ({ platform }: Props) => {
  const iconMap: Icons = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={2}>
        {platform.map((platform) => (
          <Icon
            key={platform.id}
            marginRight={2}
            color="gray.500"
            as={iconMap[platform.slug]}
          />
        ))}
      </HStack>
    </>
  );
};
