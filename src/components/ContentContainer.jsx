import { Box } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ContentContainer = () => {
  return (
    <Box py={2} bg={"gray.100"}>
      <h2>Section title</h2>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }}>
        <ProductCard />
      </SimpleGrid>
    </Box>
  );
};

export default ContentContainer;
