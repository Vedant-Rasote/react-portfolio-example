import { Box, Card, CardHeader, CardBody, CardFooter, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <Box maxW='sm' borderRadius='lg' overflow='hidden' backgroundColor='white' color="black">
      <Box maxW='sm' borderRadius='lg' overflow='hidden'>
        <Image src={imageSrc} alt={title} />
      </Box>
      <Box p='3'>
        <Text
          my='1.5'
          fontWeight='bold'
          fontSize="16"
        >{title}
        </Text>

        <Text
          my='1.5'
          fontSize="12"
        >{description}
        </Text>

        <Text
          mt="1.5"
          fontWeight='semibold'
          fontSize="13"
        >
          <a href="">See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
        </Text>

      </Box>
    </Box>
  )
}

export default ProjectCard;
