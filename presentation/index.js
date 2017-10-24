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
    quartenary: "#36b6f4"
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

        <Slide
          transition={["zoom"]}
          bgImage={"https://source.unsplash.com/kk3-kBnuhFg/1200x900"}
          bgDarken={0.5}
          bgColor="primary"
        >
          <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
            This is not
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} fit caps>
            Ivory tower thinking
          </Text>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit caps>
              FP is used everywhere
            </Text>
          </Appear>
          <List textColor="primary">
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
            Reasons Why
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit caps>
            I ❤️ FP (and you will too)
          </Text>
          <List textColor="teriary">
            <Appear>
              <ListItem>Build big things out of small things</ListItem>
            </Appear>
            <Appear>
              <ListItem>Breakdown large problems into small 1s</ListItem>
            </Appear>
            <Appear>
              <ListItem>Write better abstractions</ListItem>
            </Appear>
            <Appear>
              <ListItem>Reduce boilerplate by generating code</ListItem>
            </Appear>
            <Appear>
              <ListItem>Don’t have to deal with the this keyword</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            What we will be covering...
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="quartenary" size={3} fit>
              Just 3 basic things
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
              <ListItem>Higher Order Functions</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Why do these things matter?
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="quartenary" size={3} fit>
              How will they really help?
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
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading
            size={5}
            fit
            caps
            lineHeight={1}
            textColor="primary"
            margin="30px auto"
          >
            Back to Basics: You know Objects
          </Heading>
          <Appear>
            <Heading
              size={5}
              fit
              caps
              lineHeight={1}
              textColor="primary"
              margin="30px auto"
            >
              Here's a Lamp
            </Heading>
          </Appear>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/3oKIPuMqYfRsyJTWfu/giphy.gif"}
              margin="0px auto 40px"
              height="450px"
            />
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="quartenary">
          <Heading
            size={5}
            fit
            caps
            lineHeight={1}
            textColor="primary"
            margin="30px auto"
          >
            Here it is in OOP
          </Heading>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/code/basic-object.example")}
            />
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="quartenary">
          <Heading
            size={5}
            fit
            caps
            lineHeight={1}
            textColor="primary"
            margin="30px auto"
          >
            Let's give the lamp some state
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/basic-object-2.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="quartenary">
          <Heading
            size={5}
            fit
            caps
            lineHeight={1}
            textColor="primary"
            margin="30px auto"
          >
            Let's add behavior
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/basic-object-3.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading
            size={5}
            fit
            caps
            lineHeight={1}
            textColor="primary"
            margin="30px auto"
          >
            Let's switch it on
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/toggle-lamp.example")}
          />
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
            Now Let's see the FP version
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/fp-lamp-prelude.example")}
          />
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
            Add some properties
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/fp-lamp.example")}
          />
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
            Now Let's process it!
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/fp-lamp-2.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading
            size={5}
            fit
            caps
            lineHeight={1}
            textColor="tertiary"
            margin="30px auto"
          >
            ...And Toggle It On!
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/fp-lamp-4.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Advantages
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="secondary" size={3} caps fit>
              Why bother?
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={3} fit>
              "What was the lamp state before we turned it on?"
            </Text>
          </Appear>
          <List>
            <Appear>
              <ListItem>Time Travel</ListItem>
            </Appear>
            <Appear>
              <ListItem>Undo/Redo</ListItem>
            </Appear>
            <Appear>
              <ListItem>Predictability</ListItem>
            </Appear>
            <Appear>
              <ListItem>Objects are alive (unpredictable)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Data is inert (Predictable)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Data can't do anything without functions</ListItem>
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
            Was that a dumb example?
          </Heading>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/aVtdz7iNVPI1W/giphy.gif"}
              margin="0px auto 40px"
              height="450px"
            />
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" fit>
              Checkout https://github.com/kentcdodds/react-toggled
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={5} fit caps lineHeight={1} textColor="secondary">
            Immutability
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
              So what's the problem with Change?
            </Heading>
          </Appear>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/3o7abBlkwyCFWXjZVC/giphy.gif"}
              margin="0px auto 40px"
              height="450px"
            />
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={5} fit caps lineHeight={1} textColor="secondary">
            Change is good right?
          </Heading>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/jeXiz1RAvzX44/giphy.gif"}
              margin="0px auto 40px"
              height="450px"
            />
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading
            size={5}
            fit
            caps
            lineHeight={1}
            textColor="tertiary"
            margin="30px auto"
          >
            ...Let's look at a mutable state bug
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/mutable-state-bug.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading
            size={5}
            fit
            caps
            lineHeight={1}
            textColor="tertiary"
            margin="30px auto"
          >
            And here is the fix
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/mutable-state-bug.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={3} fit lineHeight={1} textColor="quartenary">
            What is an Immutable data structure?
          </Heading>
          <Appear>
            <BlockQuote textColor="primary" textSize={74}>
              <Quote>
                "a data structure that always preserves the previous version of
                itself when it is modified"
              </Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={5} fit caps lineHeight={1} textColor="secondary">
            Immutability in a nutshell
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
              How do you work with Immutable data?
            </Heading>
          </Appear>
          <Appear>
            <ListItem>
              Don't modify existing objects and data structures
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Create new objects and data structures</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Create functions that take in old state and return the new state
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>You don't overwrite the old state</ListItem>
          </Appear>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={"https://source.unsplash.com/2BrdNFxW0UY/1200x900"}
          bgDarken={0.2}
          textColor="tertiary"
        >
          <Heading size={1} textColor="primary" caps fit>
            Pure Functions
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary">
            Pure Functions are kinda like...
          </Heading>
          <Image
            src={"http://i.imgur.com/SZPjHwz.jpg"}
            margin="0px auto 40px"
            height="650px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary">
            E.g. Convert a Unix timestamp to time in JavaScript
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/so-timestamp-fn-example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary">
            You can think of them as a box...
          </Heading>
          <Image
            src={
              "https://media.giphy.com/media/l1KVaa5wuyF7RkL4Y/giphy-downsized-large.gif"
            }
            margin="0px auto 40px"
            height="500px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary">
            Actually more like a black box...
          </Heading>
          <Image
            src={"http://wscafm.org/wp-content/uploads/2016/10/image.gif"}
            margin="0px auto 40px"
            height="400px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            You can also think of them as pipes...
          </Heading>
          <Image
            src={"https://media.giphy.com/media/l0HlxxsW8Asm69uhi/giphy.gif"}
            margin="0px auto 40px"
            height="500px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            Output of one function is the input of another function
          </Heading>
          <Image
            src={"https://media.giphy.com/media/zfUIpiFNTSBzi/giphy.177315"}
            margin="0px auto 40px"
            height="500px"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            A function is pure when
          </Heading>
          <List textAlign="center">
            <Appear>
              <ListItem>It depends only on the input provided</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Does not depend on any hidden or external state
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Does not change anything beyond its scope</ListItem>
            </Appear>
            <Appear>
              <ListItem>Does not modify global object</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Does not mutate a parameter passed by reference.
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            So what if I want to..
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            Change a variable?
          </Heading>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/Jf8tQksLHhpXa/giphy.gif"}
              margin="0px auto 40px"
              height="500px"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            Change a data structure?
          </Heading>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/Jf8tQksLHhpXa/giphy.gif"}
              margin="0px auto 40px"
              height="500px"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            Changing the original value of a function’s argument?
          </Heading>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/Jf8tQksLHhpXa/giphy.gif"}
              margin="0px auto 40px"
              height="500px"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            Process user input?
          </Heading>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/Jf8tQksLHhpXa/giphy.gif"}
              margin="0px auto 40px"
              height="500px"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            Throw an exception?
          </Heading>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/Jf8tQksLHhpXa/giphy.gif"}
              margin="0px auto 40px"
              height="500px"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            Show user some output?
          </Heading>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/Jf8tQksLHhpXa/giphy.gif"}
              margin="0px auto 40px"
              height="500px"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            Query for HTML documents, browser cookies, or databases
          </Heading>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/Jf8tQksLHhpXa/giphy.gif"}
              margin="0px auto 40px"
              height="500px"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            How about console.log?
          </Heading>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/Jf8tQksLHhpXa/giphy.gif"}
              margin="0px auto 40px"
              height="500px"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            Whut?
          </Heading>
          <Appear>
            <Image
              src={"https://media.giphy.com/media/ao95prgWvFITm/giphy.gif"}
              margin="0px auto 40px"
              height="400px"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            Then how do I?
          </Heading>
          <Image
            src={"https://media.giphy.com/media/kaq6GnxDlJaBq/giphy.gif"}
            margin="0px auto 40px"
            height="500px"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary">
            Let's look at that function again
          </Heading>
          <CodePane
            textSize="19px"
            lang="jsx"
            source={require("raw-loader!../assets/code/so-timestamp-fn-example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            That ain't a pure function
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary" fit>
            This is a pure function!
          </Heading>
          <CodePane
            textSize="19px"
            lang="jsx"
            source={require("raw-loader!../assets/code/so-timestamp-fn-pure-example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Why?
          </Heading>
          <List textAlign="center">
            <Appear>
              <ListItem>It is deterministic</ListItem>
            </Appear>
            <Appear>
              <ListItem>It has referential transparency</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                It produces the same output for a particular input
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Does not depend on any hidden or external state
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Does not share state</ListItem>
            </Appear>
            <Appear>
              <ListItem>Does not modify global object</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            What does a pure function do?
          </Heading>
          <List textAlign="center">
            <Appear>
              <ListItem>It does only one thing (SRP)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Maps inputs to outputs</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image
            src={
              "http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png"
            }
            margin="0px auto 20px"
            height="200px"
          />
          <Heading margin="0px auto 40px" size={5} textColor="secondary">
            Redux reducers must be pure functions...
          </Heading>
          <CodePane
            textSize="22px"
            lang="jsx"
            source={require("raw-loader!../assets/code/reducers-impure.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image
            src={
              "http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png"
            }
            margin="0px auto 20px"
            height="200px"
          />
          <Heading margin="0px auto 40px" size={5} textColor="secondary">
            the immutable way
          </Heading>
          <CodePane
            textSize="22px"
            lang="jsx"
            source={require("raw-loader!../assets/code/reducers-pure.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" caps>
            The power of pure functions
          </Heading>
          <List textAlign="center">
            <Appear>
              <ListItem>Predictable State</ListItem>
            </Appear>
            <Appear>
              <ListItem>Easier Testing</ListItem>
            </Appear>
            <Appear>
              <ListItem>Concurrency</ListItem>
            </Appear>
            <Appear>
              <ListItem>Time Travel</ListItem>
            </Appear>
            <Appear>
              <ListItem>Code Generation</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={"https://source.unsplash.com/t1XLQvDqt_4/800x600"}
          bgDarken={0.5}
          textColor="tertiary"
        >
          <Heading size={1} textColor="tertiary" caps fit>
            Higher Order
          </Heading>
          <Heading size={2} textColor="primary" caps fit>
            Functions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
            A Higher Order Function does one of two things
          </Heading>
          <List textAlign="center">
            <Appear>
              <ListItem>Takes a function as one of its arguments</ListItem>
            </Appear>
            <Appear>
              <ListItem>Returns a function</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary">
            Example One
          </Heading>
          <CodePane
            textSize="22px"
            lang="jsx"
            source={require("raw-loader!../assets/code/hof-1.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary">
            Example Two
          </Heading>
          <CodePane
            textSize="18px"
            lang="jsx"
            source={require("raw-loader!../assets/code/hof-2.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={5} textColor="secondary">
            Typical Interview Question
          </Heading>
          <CodePane
            textSize="25px"
            lang="jsx"
            source={require("raw-loader!../assets/code/hof-3.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={2} textColor="secondary">
            Solution
          </Heading>
          <CodePane
            textSize="24px"
            lang="jsx"
            source={require("raw-loader!../assets/code/hof-4.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            That means you can use a function
          </Heading>
          <Appear>
            <Heading size={1} textColor="tertiary" caps>
              Any place you can use a value
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
            Let's talk about
          </Heading>
          <Appear>
            <Heading size={1} textColor="tertiary" caps fit>
              working with collections
            </Heading>
          </Appear>
          <List textAlign="center" textSize="28">
            <Appear>
              <ListItem>Map</ListItem>
            </Appear>
            <Appear>
              <ListItem>Filter</ListItem>
            </Appear>
            <Appear>
              <ListItem>Reduce</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={2} textColor="secondary">
            Challenge
          </Heading>
          <CodePane
            textSize="22px"
            lang="jsx"
            source={require("raw-loader!../assets/code/filter-1.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={2} textColor="secondary" fit>
            The imperative way
          </Heading>
          <CodePane
            textSize="22px"
            lang="jsx"
            source={require("raw-loader!../assets/code/filter-1-imperative.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={2} textColor="secondary" fit>
            The declarative way
          </Heading>
          <CodePane
            textSize="22px"
            lang="jsx"
            source={require("raw-loader!../assets/code/filter-1-functional.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={2} textColor="secondary">
            Challenge ☕️
          </Heading>
          <CodePane
            textSize="22px"
            lang="jsx"
            source={require("raw-loader!../assets/code/map-1.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={2} textColor="secondary" fit>
            The imperative way
          </Heading>
          <CodePane
            textSize="18px"
            lang="jsx"
            source={require("raw-loader!../assets/code/map-1-imperative.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0px auto 40px" size={2} textColor="secondary" fit>
            The declarative way
          </Heading>
          <CodePane
            textSize="22px"
            lang="jsx"
            source={require("raw-loader!../assets/code/map-1-functional.example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            The End
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
