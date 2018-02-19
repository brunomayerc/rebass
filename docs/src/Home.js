import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Lead,
  Text,
  Blockquote,
  Small,
  Link,
  NavLink,
  Button,
  Code,
  Pre,
  Measure,
  Truncate,
  theme,
} from 'rebass'
import { components } from './examples'
import Container from './Container'
import Section from './Section'
import Live from './Live'
import Hero from './Hero'
import Footer from './Footer'

const { colors, fontSizes } = theme

const typescale = [ ...fontSizes ].reverse()
const colorKeys = Object.keys(colors)
  .filter(key => !/black|white|dark|gray/.test(key))

const Home = ({
  features,
  quotes,
  demo,
  propsCode,
  responsive,
  grid,
  config,
  customizing,
}) => (
  <React.Fragment>
    <Hero />
    <Container my={5}>
      <Box width={[ 1, null, 640 ]}>
        <Lead fontWeight='bold' fontSize={[ 3, 4 ]}>
          Rebass is a library of highly-composable, primitive UI components for React,
          built with styled-components to keep styles isolated and reduce the need to write custom CSS in your application.
          Based upon a configurable design system,
          Rebass’s props API makes building consistent, responsive web apps simpler and faster.
        </Lead>
      </Box>
    </Container>

    <Section name='Features'>
      <Flex
        flexWrap='wrap'
        mx={-3}
        mt={3}>
        {features.map(text => (
          <Box
            key={text}
            px={3}
            mb={[ 2, 3, 4 ]}
            width={[ 1, 1/2, 1/4 ]}>
            <Text fontSize={2} fontWeight='bold'>
              {text}
            </Text>
          </Box>
        ))}
      </Flex>
    </Section>

    <Container py={3}>
      <Flex
        mx={-3}
        flexWrap='wrap'>
        {quotes.map(quote => (
          <Box
            key={quote.href}
            width={[ 1, 1/2 ]}
            p={3}>
            <Blockquote fontSize={[ 2, 3 ]} fontWeight='bold'>
              “{quote.text}”
            </Blockquote>
            <Small>
              <Link href={quote.href}>
                {quote.source}
              </Link>
            </Small>
          </Box>
        ))}
      </Flex>
    </Container>

    <Section name='Demo'>
      <Box my={3}>
        <Live code={demo} />
      </Box>
    </Section>

    <Section name='Props'>
      <Measure mb={3}>
        Every Rebass component includes several responsive style props for handling
        margin, padding, width, font size, and color.
        Based on an underlying design system with spacing and typographic scales and colors, Rebass encourages consistency in design and helps increase development velocity.
      </Measure>
      <Live code={propsCode} />
      <Box my={3}>
        <Text>
          These core props are handled with
          {' '}
          <Link href='https://github.com/jxnblk/styled-system'>
            styled-system
          </Link>.
          See the
          {' '}
          <Link
            is={RouterLink}
            to='/rebass/props'>
            props documentation
          </Link>
          {' '}
          for more.
        </Text>
      </Box>
    </Section>

    <Section name='Responsive Styles'>
      <Measure mb={3}>
        All of the core props above accept arrays as values to set mobile-first responsive styles.
        The first value is not scoped to a media query and applies to all breakpoints.
        Each value after the first corresponds to a media query derived from <Code>theme.breakpoints</Code>.
      </Measure>
      <Live code={responsive} />
    </Section>

    <Section name='Colors'>
      <Text mb={3}>
        Plug in your own colors to customize the default color palette.
      </Text>
      <Flex>
        {colorKeys.map(key => (
          <ColorCard
            key={key}
            name={key}
            value={colors[key]}
          />
        ))}
      </Flex>
    </Section>

    <Section name='Typographic Scale'>
      <Measure mb={3}>
        The default typographic scale is based on a 16px base and common sizes, well suited for responsive typography that helps maintain a natural feeling visual rhythm.
      </Measure>
      {typescale.map(f => (
        <Truncate
          key={f}
          fontSize={f}
          fontWeight='bold'
          lineHeight={1}
          mb={2}
          children={`Aa ${f}px`}
        />
      ))}
    </Section>

    <Section name='Grid Styled'>
      <Text mb={3}>
        Rebass includes the <Code>{'<Flex />'}</Code> and <Code>{'<Box />'}</Code> components from <Link href='http://jxnblk.com/grid-styled'>Grid Styled</Link> for handling responsive layouts.
      </Text>
      <Live code={grid} />
    </Section>

    <Section name='Configuration'>
      <Text mb={3}>
        {`The core design system in Rebass can be configured using the `}
        <Code children='<Provider />' /> component.
      </Text>
      <Live code={config} />
    </Section>

    <Section name='Customizing'>
      <Text mb={3}>
        Any component can be customized by passing it to the <Code>styled</Code> function from styled-components.
      </Text>
      <Live
        noInline
        code={customizing}
      />
    </Section>

    <Section name='Components'>
      <Text mb={3}>
        Rebass includes {components.length} stateless functional components.
      </Text>
      <Flex flexWrap='wrap' mx={-2}>
        {components.map(name => (
          <Box key={name}
            w={[ 1/2, 1/3, 1/4, 1/6 ]}>
            <NavLink
              is={RouterLink}
              fontSize={0}
              py={1}
              to={'/components/' + name}
              children={name}
            />
          </Box>
        ))}
      </Flex>
    </Section>

    <Section name='Get Started'>
      <Text mb={3}>
        Read the docs to get started
      </Text>
      <Flex
        py={3}
        alignItems='center'>
        <Pre
          ml='auto'
          mr={3}
          color='blue'>
          npm i rebass@next
        </Pre>
        <Button
          is={RouterLink}
          f={2}
          py={[ 2, 3 ]}
          to='/getting-started'
          children='Getting Started'
        />
      </Flex>
    </Section>

    <Footer />
  </React.Fragment>
)

Home.defaultProps = {
  features: [
    'Functional stateless UI components',
    'Style encapsulation with CSS-in-JS and styled-components',
    'No external CSS dependencies',
    'Configurable theming',
    'Extensible base components',
    'Design-system based consistency',
    'Built for responsive web design',
    'Write less custom CSS',
  ],
  quotes: [
    {
      text: 'One of the best React component libs out there',
      source: 'Max Stoiber',
      href: 'https://twitter.com/mxstbr/status/882657561111080960'
    },
    {
      text: 'Rebass is the Bootstrap of React.',
      source: 'Jori Lallo',
      href: 'https://twitter.com/jorilallo/status/882990343225868289'
    },
    {
      text: 'A whopper component library built on styled-components. Responsive, systematic, scalable...the business!',
      source: 'Colm Tuite',
      href: 'https://twitter.com/colmtuite/status/882715087936606210'
    },
    {
      text: 'Why the hell are we now putting CSS in Javascript? I’m losing my mind with web developers trying to control everything in the world with client-side javascript. What a mess.',
      source: 'alttab',
      href: 'https://news.ycombinator.com/item?id=14705579'
    },
    /*
  {
    text: 'Rebass is so incredible that at this point making anything from scratch just seems silly.',
    source: 'Vincent van der Meulen',
    href: 'https://mobile.twitter.com/vincentmvdm/status/886356961389813760'
  },
  */
  ],
demo: `<div>
  <Flex align='center'>
    <Heading mr='auto'>Hello</Heading>
    <Group>
      <ButtonOutline>
        Beep
      </ButtonOutline>
      <Button>
        Boop
      </Button>
    </Group>
  </Flex>
  <Divider my={4} color='gray3' />
  <Box mb={2}>
    <Label>Name</Label>
    <Input />
  </Box>
  <Box>
    <Label>Rebass</Label>
    <Slider />
  </Box>
</div>`,
  propsCode: `<Card
  px={3}
  py={4}
  mt={2}
  mb={3}
  width={[ 1, 1/2 ]}
  fontSize={[ 4, 5, 6 ]}
  color='white'
  bg='blue'
>
  <Text>
    Hello
  </Text>
</Card>`,
  responsive: `<Text
  width={[
    1,    // 100% width at the smallest breakpoint
    1/2,  // 50% width at the next breakpoint
    null, // null skips a breakpoint
    1/4   // 25% width at the next
  ]}
  p={2}
  children='Hello'
  color='white'
  bg='blue'
/>`,
  grid: `<Flex flexWrap='wrap' mx={-2}>
  <Box p={2} width={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
  <Box p={2} width={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
  <Box p={2} width={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
  <Box p={2} width={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
</Flex>`,
  config: `<Provider
  theme={{
    fonts: {
      0: '"Avenir Next", Helvetica, sans-serif',
      sans: '"Avenir Next", Helvetica, sans-serif',
    },
    fontSizes: [
      12, 16, 24, 36, 48, 72
    ]
  }}>
  <Heading fontSize={[ 2, 3, 4, 5 ]}>
    Hello
  </Heading>
</Provider>`,
  customizing: `const CustomButton = styled(Button)\`
  border: 1px solid rgba(0, 0, 0, .25);
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .125));
  box-shadow: 0 0 4px rgba(0, 0, 0, .25)
\`

const App = () => (
  <CustomButton>
    Hello
  </CustomButton>
)

render(<App />)
`,
}

const ColorCard = props => (
  <Box flex='1 1 auto'>
    <Box
      px={0}
      py={[ 4, 4, 5 ]}
      bg={props.value}
    />
  </Box>
)

export default Home
