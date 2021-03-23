import { Box } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import scifi from "../json/scifi.json";

const ContentContainer = () => {
  return (
    <Box py={2} bg={"gray.100"}>
      <Text fontSize={24} fontWeight={800}>
        Scifi category
      </Text>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} gap={2}>
        {scifi.map((item) => {
          console.log(item.img);
          return (
            <ProductCard key={item.asin} name={item.title} img={item.img} price={item.price} category={item.category} />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ContentContainer;
