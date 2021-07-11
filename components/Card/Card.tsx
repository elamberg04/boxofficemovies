import Image from 'next/image';
import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  chakra,
  HStack,
  Tag,
  // useTheme,
} from '@chakra-ui/react';

import { MovieType, ReviewType } from '../../models/movie';
import Rating from '../Rating';

interface CardProps {
  movie: MovieType<ReviewType[]>;
}

export const Card: React.FC<CardProps> = ({ movie }): React.ReactElement => {
  // const {
  //   __breakpoints: { asObject: bpsAsObject },
  // } = useTheme();

  // const bpsAsObjectPx = {};

  // Object.keys(bpsAsObject).forEach((bp) => {
  //   bpsAsObjectPx[bp] = parseInt(bpsAsObject[bp].slice(0, -2)) * 16;
  // });

  // const calculatePxToVw = (absolute: number, breakpoint: number) =>
  //   absolute > breakpoint ? 100 : Math.round((absolute / breakpoint) * 100);
  // const imageSizesOnWidthAndBreakpoints = (width: number, bps: any) =>
  //   `(min-width: ${bps.base}px) and (max-width: ${
  //     bps.sm - 1
  //   }px): ${calculatePxToVw(width, bps.sm - 1)}vw, (min-width: ${
  //     bps.sm
  //   }px) and (max-width: ${bps.md - 1}px): ${calculatePxToVw(
  //     width,
  //     bps.md - 1
  //   )}vw, (min-width: ${bps.md}px) and (max-width: ${
  //     bps.lg - 1
  //   }px): ${calculatePxToVw(width, bps.lg - 1)}vw, (min-width: ${
  //     bps.lg
  //   }px) and (max-width: ${bps.xl - 1}px): ${calculatePxToVw(
  //     width,
  //     bps.xl - 1
  //   )}vw, (min-width: ${bps.xl}px) and (max-width: ${
  //     bps['2xl'] - 1
  //   }px): ${calculatePxToVw(width, bps['2xl'] - 1)}vw, (min-width: ${
  //     bps['2xl']
  //   }px) and (max-width: 2560px): ${calculatePxToVw(width, 2560)}vw,`;

  const { image, name, genres, rating, numReviews, tagLine } = movie;
  return (
    <chakra.div
      position="relative"
      direction="column"
      maxW="400px"
      w="full"
      bg={useColorModeValue(`white`, `gray.900`)}
      boxShadow="xl"
      rounded="md"
      transition="all 0.25s"
      transitionTimingFunction="spring(1 100 10 10)"
      p={6}
      _hover={{
        transform: `translateY(-4px)`,
        shadow: `2xl`,
        cursor: 'pointer',
      }}
      overflow="hidden"
      height="full"
    >
      <Box
        opacity={0}
        top={0}
        zIndex={10}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        transition="all 0.25s"
        bg={useColorModeValue(`white`, `gray.800`)}
        transitionTimingFunction="spring(1 100 10 10)"
        _hover={{
          opacity: 0.95,
          shadow: `2xl`,
        }}
      >
        <Text
          fontSize="4xl"
          fontWeight="semibold"
          color={useColorModeValue(`gray.800`, `white`)}
        >
          View more
        </Text>
      </Box>
      <Box mt={-6} mx={-6} mb={6} pos="relative">
        <Image
          src={image}
          layout="responsive"
          width="400px"
          // sizes={imageSizesOnWidthAndBreakpoints(400, bpsAsObjectPx)}
          sizes="(max-width: 2561px) 400px"
          height="225px"
          alt={`${movie?.name} poster`}
        />
      </Box>

      <Flex isTruncated direction="column" justifyContent="space-between">
        <Flex direction={'column'} isTruncated>
          <Flex justifyContent="space-between" alignItems="center">
            <Text
              as="h3"
              color={useColorModeValue(`gray.700`, `white`)}
              fontSize="2xl"
              fontWeight="bold"
              isTruncated
            >
              {name}
            </Text>
            <Tag colorScheme="purple" fontWeight="600">
              {genres[0]}
            </Tag>
          </Flex>
          <HStack justifyContent="space-between" alignItems="flex-start" mt={3}>
            <Text color="gray.500" isTruncated>
              {tagLine || 'No tag line :(...'}
            </Text>

            <Rating rating={rating} numReviews={numReviews} />
          </HStack>
        </Flex>
      </Flex>
    </chakra.div>
  );
};
