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
  Image,
  Text
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
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  signup: require("../assets/AppGifs/signup.gif"),
  landing: require("../assets/AppGifs/LandingPage.png"),
  express: require("../assets/logos/express.png"),
  git: require("../assets/logos/Git-Logo.png"),
  github: require("../assets/logos/github.png"),
  materialize: require("../assets/logos/materializecss.png"),
  mongodb: require("../assets/logos/MongoDB.png"),
  mongoose: require("../assets/logos/mongoose.png"),
  node: require("../assets/logos/Node.png"),
  reactrouter: require("../assets/logos/react-router.png"),
  react: require("../assets/logos/React.png"),
  redux: require("../assets/logos/reduxlogo.png"),
  vanillajs: require("../assets/logos/VanillaJS.png")
};

preloader(images);

const theme = createTheme({
  primary: "White",
  secondary: "#FF2D55",
  tertiary: "#FF2D55",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Wise Bias
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Changing Your Bias One Click At A Time!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text size={9} textColor="black">The Team</Text>
          <br />
          <Heading size={3} textColor="primary">Cameron Bullock</Heading>
          <br />
          <Heading size={3} textColor="primary">Tyler Foss</Heading>
          <br />
          <Heading size={3} textColor="primary">Addison Fuller</Heading>
          <br />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">

        <Heading size={3} textColor="Black">Home Page</Heading>
        <img style={{ width: "900", marginTop: "50", }} src={images.landing} />

        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">

          <Heading size={3} textColor="Black">Sign Up</Heading>
          <img style={{ width: "900", marginTop: "50", }} src={images.signup} />

        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="Black">Dashboard</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="Black">Account</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="White" textColor="tertiary">
          <Heading size={3} textColor="Black">Technologies</Heading>
          <img style={{ width: "200", display:"inline", marginTop: "20", marginBottom: "20", paddingLeft: "20", paddingRight: "20" }} src={images.express} />
          <img style={{ width: "200", display:"inline", marginTop: "20", marginBottom: "20", paddingLeft: "20", paddingRight: "20" }} src={images.git} />
          <img style={{ width: "200", display:"inline", marginTop: "20", marginBottom: "20", paddingLeft: "20", paddingRight: "20" }} src={images.github} />
          <img style={{ width: "200", display:"inline", marginTop: "20", marginBottom: "20", paddingLeft: "20", paddingRight: "20" }} src={images.materialize} />
          <img style={{ width: "200", display:"inline", marginTop: "20", marginBottom: "20", paddingLeft: "20", paddingRight: "20" }} src={images.mongodb} />
          <img style={{ width: "200", display:"inline", marginTop: "20", marginBottom: "20", paddingLeft: "20", paddingRight: "20" }} src={images.mongoose} />
          <img style={{ width: "200", display:"inline", marginTop: "20", marginBottom: "20", paddingLeft: "20", paddingRight: "20" }} src={images.node} />
          <img style={{ width: "200", display:"inline", marginTop: "20", marginBottom: "20", paddingLeft: "20", paddingRight: "20" }} src={images.reactrouter} />
          <img style={{ width: "200", display:"inline", marginTop: "20", marginBottom: "20", paddingLeft: "20", paddingRight: "20" }} src={images.react} />
          <img style={{ width: "200", display:"inline", marginTop: "20", marginBottom: "20", paddingLeft: "20", paddingRight: "20" }} src={images.redux} />
          <img style={{ width: "200", display:"inline", marginTop: "20", marginBottom: "20", paddingLeft: "20", paddingRight: "20" }} src={images.vanillajs} />

        </Slide>
      </Deck>
    );
  }
}
