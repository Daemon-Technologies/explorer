import React from 'react';
import { Box, Flex } from '@stacks/ui';
import { Title, Text } from '@components/typography';
import { SearchComponent } from '@features/search/search';

export const HomePageTop: React.FC = React.memo(() => (
  <Flex
    width="100%"
    flexDirection="column"
    alignItems="center"
    maxWidth={['100%', '100%', 'calc(60% - 32px)']}
    justify="center"
  >
    <Flex width="100%" flexDirection="row" justifyContent="flex-start" alignItems="center" >
      <Title
        as="h1"
        fontSize="36px"
        display="block"
        textAlign={['center', 'left']}
        mt="72px"
        mb="extra-loose"
        color="white"
      >
        Stacks Explorer
      </Title>
      <Text fontSize="13px" color="white" mt="90px" ml="10px" mb="extra-loose" textAlign="left">
        forked by Daemon Technologies
      </Text>
    </Flex>

    <Box width="100%">
      <SearchComponent />
    </Box>
  </Flex>
));
