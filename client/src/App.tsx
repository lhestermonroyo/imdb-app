import { FC } from 'react';
import {
  Button,
  Container,
  Group,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';

const App: FC = () => {
  return (
    <Container size="lg" h="100vh">
      <Group justify="center" align="center" h="100%">
        <Stack>
          <Title order={2}>IMDb Movie Search</Title>
          <TextInput placeholder="Find Movies, TV shoes and more..." />
          <Button name="search" variant="light">
            Search
          </Button>
        </Stack>
      </Group>
    </Container>
  );
};

export default App;
