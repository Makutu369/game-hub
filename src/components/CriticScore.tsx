import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
export const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return <Badge colorScheme={color}>{score}</Badge>;
};
