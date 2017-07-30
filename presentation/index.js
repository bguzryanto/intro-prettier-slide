// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#111",
    secondary: "#fff",
    tertiary: "#4a344f",
    quartenary: "#3bcbbe"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const image = {
  formatted1: require("../assets/1formatted.png"),
  unformatted1: require("../assets/1unformatted.png")
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Intro to Prettier
          </Heading>
          <Heading textColor="secondary" size={4}>
            A javascript formatter
          </Heading>
          <Text margin="50px 0 0 0" textColor="secondary">
            by Bagus Rianto
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor="secondary" caps>
            Prettier?
          </Heading>
          <List size={6}>
            <ListItem>Opinionated Code Formatter</ListItem>
            <ListItem>Authored by James Long (@jlongster)</ListItem>
            <ListItem>Inspired by refmt, a gofmt for `Reason`</ListItem>
          </List>
          <Text margin="20px 0 0 0" textColor="quartenary">
            More info https://prettier.io/
          </Text>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={5} textColor="secondary">
            Who use Prettier?
          </Heading>
          <List>
            <ListItem>Babel</ListItem>
            <ListItem>ReactJS</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>Jest</ListItem>
            <ListItem>Prepack</ListItem>
            <ListItem>REFASH (partially)</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Text textColor="secondary">
            There's no solution without a problem at the first place
          </Text>
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary">
            Mostly code review is about style
          </Heading>
          <List>
            <ListItem>Please, use 4 spaces for indentation</ListItem>
            <ListItem>nitpick, change it to single quote</ListItem>
            <ListItem>
              `if` clause should be wrapped around parentheses and multiline
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Text textColor="secondary">There are so many style guides</Text>
          <Text textColor="secondary">
            Airbnb, Google, StandardJS, NPM Style
          </Text>
        </Slide>
        <Slide bgColor="#f7df1e">
          <BlockQuote>
            <Quote>
              What if there is a tool that format your JS code with just only
              one style?
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={4} textColor="#fff">
            Before
          </Heading>
          <Image src={image.unformatted1} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="#fff">
            After
          </Heading>
          <Image src={image.formatted1} />
        </Slide>
        <Slide bgColor="#fff">
          <Text textColor="primary">
            You don't need to think how you write the code, let prettier format
            your JS code for you!
          </Text>
        </Slide>
        <Slide bgColor="#fff">
          <Heading>Hands on</Heading>
          <Text>Enough! Show me the Code!</Text>
        </Slide>
        <Slide>
          <List>
            <ListItem>Support ES2017, Flow, JSX, Typescript</ListItem>
            <ListItem>CSS3, LESS, SCSS, styled-component, styled-jsx</ListItem>
            <ListItem>GraphQL, GraphQL Schema</ListItem>
            <ListItem>
              Support editor integration, VSCode, Atom, Sublime, VIM, Emacs,
              Webstorm
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="primary">Thank You</Heading>
          <Text>Any questions</Text>
        </Slide>
      </Deck>
    );
  }
}
