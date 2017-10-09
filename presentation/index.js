// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  S,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  Typeface
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  splash: require("../assets/splash.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/graphql_logo.png"),
  markdown: require("../assets/markdown.png"),
  full_profile: require("../assets/full_user_profile.png"),
  why: require("../assets/why.gif"),
  user_widget: require("../assets/user_widget.jpg"),
  annoyed: require("../assets/annoyed.gif"),
  widget_query: require("../assets/widget_query.png"),
  graphql_architechture: require("../assets/graphql_architechture.png"),
  graphql_vs_rest: require("../assets/graphql_vs_rest.png"),
  graphql_result: require("../assets/graphql_result.png"),
  graphql_result_2: require("../assets/graphql_result_2.png"),
  live: require("../assets/live.gif"),
  dance: require("../assets/dance.gif"),
  rest: require("../assets/rest.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#F44336",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["fade"]}
          bgImage={"https://source.unsplash.com/5qu_01uVW7k/1200x900"}
          bgDarken={0.5}
          textColor="tertiary"
        >
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit caps>
            Intro to
          </Text>
          <Heading size={3} textColor="primary" caps fit>
            Functional Programming
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit caps>
            Filter Kapee Edition
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={"https://source.unsplash.com/5qu_01uVW7k/1200x900"}
          bgDarken={0.5}
          textColor="tertiary"
        >
          <Heading size={1} textColor="tertiary" caps fit>
            Why should I bother?
          </Heading>
          <Appear>
            <Heading size={3} textColor="primary" caps fit>
              Javascript is going functional
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Who wants you to be functional?
          </Heading>
          <List>
            <Appear>
              <ListItem>React + Redux</ListItem>
            </Appear>
            <Appear>
              <ListItem>Inferno</ListItem>
            </Appear>
            <Appear>
              <ListItem>Preact</ListItem>
            </Appear>
            <Appear>
              <ListItem>Hyper</ListItem>
            </Appear>
            <Appear>
              <ListItem>Svelte</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Have you heard of...?
          </Heading>
          <List>
            <Appear>
              <ListItem>Elm</ListItem>
            </Appear>
            <Appear>
              <ListItem>Reason</ListItem>
            </Appear>
            <Appear>
              <ListItem>Clojurescript</ListItem>
            </Appear>
            <Appear>
              <ListItem>Purescript</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            This is not
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit caps>
            Ivory tower thinking
          </Text>
          <Appear>
            <Text margin="10px 0 0" textColor="secondary" size={1} fit caps>
              FP is used everywhere(sic)
            </Text>
          </Appear>
          <List textColor="teriary">
            <Appear>
              <ListItem>
                Haskell: Facebook, Bump, Google, Microsoft, NY Times.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Clojure: Amazon, Netflix, Groupon, Heroku, and Twitter.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Erlang: WhatsApp, Facebook, Amazon, Riak, CouchDB, Yahoo.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Scala: LinkedIn, Twitter, Box, Foursquare, Coursera, Nest,
                Quora, Tumblr, VMWare.
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            What we will be covering...
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={3}>
              Just 3 things
            </Text>
          </Appear>
          <List>
            <Appear>
              <ListItem>Immutability</ListItem>
            </Appear>
            <Appear>
              <ListItem>Pure Functions</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Functional composition with Higher Order Functions
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Why do these things matter?
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={3}>
              How will they help?
            </Text>
          </Appear>
          <List>
            <Appear>
              <ListItem>Recognize the evils of (shared) state</ListItem>
            </Appear>
            <Appear>
              <ListItem>Give you ways of safely control state</ListItem>
            </Appear>
            <Appear>
              <ListItem>Migrate your mindset from OOP to FP</ListItem>
            </Appear>
            <Appear>
              <ListItem>Adapt practical functional habits</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading
            size={5}
            fit
            caps
            lineHeight={1}
            textColor="secondary"
            margin="30px auto"
          >
            Let's talk about State
          </Heading>
          <Appear>
            <Heading
              size={5}
              fit
              caps
              lineHeight={1}
              textColor="tertiary"
              margin="30px auto"
            >
              So what's the problem with State?
            </Heading>
          </Appear>
          <Appear>
            <Image
              src={images.full_profile.replace("/", "")}
              margin="0px auto 40px"
              height="650px"
            />
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/user_rest_response.example")}
            margin="-280px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Live Examples
          </Heading>
          <List>
            <ListItem>http://swapi.co/ (REST)</ListItem>
            <ListItem>http://graphql.org/swapi-graphql</ListItem>
            <ListItem>https://graphqlhub.com/playground</ListItem>
            <ListItem>avoid making several roundtrips</ListItem>
            <ListItem>Decouple API and database schemas</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
