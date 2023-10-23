import { Card, CardBody } from "@chakra-ui/card";
import { Skeleton, Text } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Skeleton height="200px" width="300px" />
      <CardBody>
        <Text>
          <Skeleton />
        </Text>
      </CardBody>
    </Card>
  );
};
