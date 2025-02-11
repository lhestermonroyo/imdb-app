import { FC } from 'react';
import { Box, Center, Image, Stack, Text } from '@mantine/core';

import empty from '../../assets/empty.png';

const SearchEmpty: FC = () => {
  return (
    <Box pt={64} flex={1}>
      <Stack gap={6} flex={1} h="100%" justify="center" align="center">
        <Center>
          <Image src={empty} h={200} alt="logo" />
        </Center>
        <Text size="xl" fw="bold">
          Search your movie
        </Text>
        <Text c="gray" size="sm">
          Enter a movie title in the search bar above to get started
        </Text>
      </Stack>
    </Box>
  );
};

export default SearchEmpty;
