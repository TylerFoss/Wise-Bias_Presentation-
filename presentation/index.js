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
 Text,
 Layout,
 Appear,
 Typeface,
 Fit,
 Fill
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
 logo: require("../assets/wb_favicon.png"),
 markdown: require("../assets/markdown.png"),

 // Slide Images
 homeImage: require("../assets/images/Home.png"),
 dashboardImage: require("../assets/images/Dashboard_article.png"),
 exploreImage: require("../assets/images/Explore_no_media.png"),
 addMedia: require("../assets/images/addMedia.png"),
 readerMode: require("../assets/images/ReaderMode.png"),
 accountImage: require("../assets/images/accountPage.png"),
 signupImage: require("../assets/images/signupImage.png"),
 road: require("../assets/images/road.jpg"),

 // Team Images
 addison: require("../assets/TeamImages/AddisonProfile.jpg"),
 cameron: require("../assets/TeamImages/CameronProfile.jpg"),
 tyler: require("../assets/TeamImages/TylerProfile.jpg"),
 group: require("../assets/TeamImages/wisebiasGroup.jpg"),

 // Gifs
 signup: require("../assets/AppGifs/SignupClose.gif"),
 dashboard: require("../assets/AppGifs/Dashboard.gif"),
 account: require("../assets/AppGifs/account.gif"),

//Logos
 techLogos: require("../assets/logos/techLogos.png"),
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
 vanillajs: require("../assets/logos/VanillaJS.png"),
};

preloader(images);

const theme = createTheme({
 primary: "White",
 secondary: "#FF2D55",
 tertiary: "#2D79FF",
 quartenary: "#CECECE"
}, {
 primary: "Montserrat",
 secondary: "Helvetica"
});

export default class Presentation extends React.Component {
 render() {
   return (
     <Deck progress="bar" transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
       <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Our Team
          </Heading>
          <Layout>
            <Fill>
               <img margin="0px auto 40px" height="293px" src={images.cameron} />
               <Heading size={6} textColor="primary">Cameron Bullock</Heading>
               <Text textSize="25" textColor="primary">Github: CameronBullock</Text>
            </Fill>
            <Fill>
               <img margin="0px auto 40px" height="293px" src={images.tyler} />
               <Heading size={6} textColor="primary">Tyler<br/>Foss</Heading>
               <Text textSize="25" textColor="primary">Github: TylerFoss</Text>
            </Fill>
            <Fill>
               <img margin="0px auto 40px" height="293px" src={images.addison} />
               <Heading size={6} textColor="primary">Addison Fuller</Heading>
               <Text textSize="25" textColor="primary">Github: addisoncharlesfuller</Text>
            </Fill>
         </Layout>
       </Slide>
       <Slide transition={["zoom"]} bgColor="primary">
         <Heading size={1} fit caps lineHeight={1} textColor="black">
           Wise Bias
         </Heading>
         <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
          A Place To Expand Your Point of View
         </Text>
       </Slide>
       <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={3} textColor="white">Why Wisebias?</Heading>
       </Slide>

       <Slide transition={["slide"]} bgImage={images.signupImage}></Slide>
       <Slide transition={["slide"]} bgImage={images.signup}></Slide>

       <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={3} textColor="white">Explore</Heading>
       </Slide>

       <Slide transition={["slide"]} bgImage={images.dashboardImage}></Slide>
       <Slide transition={["slide"]} bgImage={images.readerMode}></Slide>
       <Slide transition={["slide"]} bgImage={images.dashboard}></Slide>

       <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={3} textColor="white">Account</Heading>
       </Slide>

       <Slide transition={["slide"]} bgImage={images.accountImage}></Slide>

       <Slide transition={["slide"]} bgImage={images.techLogos}>
        </Slide>

       <Slide transition={["slide"]} bgImage={images.road} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="primary">
              Our Roadmap
            </Heading>
            <Typeface weight={200}>
               <Text id="sub-text" caps textColor="#d0d0d0" >Looking Ahead</Text>
            </Typeface>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
           Wise Bias
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           www.wisebias.com
          </Text>
        </Slide>
     </Deck>
   );
 }
}
