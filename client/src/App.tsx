import { FC, Fragment, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import logo from './assets/logo.png';
import SearchEmpty from './components/search-start';
import { notifications } from '@mantine/notifications';

const API_URL = `http://[::1]:3000/api/movies`;

const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<any[]>([]);

  const form = useForm({
    initialValues: { search: '' },
    validate: {
      search: value => (!value.length ? 'Please enter your search.' : null),
    },
  });

  const theme = useMantineTheme();

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const response = await fetch(`${API_URL}/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: values.search }),
      });
      const data = await response.json();

      if (data) {
        setResults(data.Search);
      }
    } catch (error) {
      console.log('error:', error);
      notifications.show({
        title: 'Error',
        message: 'Failed to fetch movies',
        color: 'red',
        position: 'top-center',
      });
    }
  };

  return (
    <Fragment>
      <Box h={200} bg={theme.colors.dark[8]}>
        <Container p={0} size="md" h="100%">
          <Stack h="100%" justify="center">
            <Group>
              <Image h={40} src={logo} alt="logo" />
              <Text size="lg" fw="bold">
                Movie Search
              </Text>
            </Group>

            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Group gap={4}>
                <TextInput
                  flex={1}
                  placeholder="Search IMDb..."
                  key={form.key('search')}
                  {...form.getInputProps('search')}
                />
                <Button
                  type="submit"
                  name="search"
                  variant="light"
                  loading={loading}
                >
                  Search
                </Button>
              </Group>
            </form>
          </Stack>
        </Container>
      </Box>
      <Divider />
      <Container flex={1} size="md">
        <SearchEmpty />
      </Container>
    </Fragment>
  );
};

export default App;
