import { AboutUsBanner } from "./AboutUsBanner";


export const AboutUs = () => {
const data = {
    banner: {
        headingFirstLine: "About Us",
        headingSecondLine: "HOME/About US",
        image: "future-factory-plant-energy-industry-concept2.jpg",
      },
    about: {
        heading: "About Nilam Industries",
        text: "Nilam Industries is one of the best organizations you will find in the Madhya Pradesh Region for handling drip irrigation system. We are the serving as the manufacturer of all the drip irrigation best quality equipment. As Water resources are diminishing at a very fast pace in the today's world and so Nilam Industries is the name you can rely on. We are the converter of smaller ideas into bigger revolutions. Our systems are designed after the detailed study of interrelationship between soil, water, crop land and agro-climatic conditions. We are serving a lifetime commitment to provide modern and affordable technologies of drip irrigation.",
        image: ""
    },
    vision: {
        heading: "Our Vision",
        text: "To achieve sustainable development and prevent scarcity of food, water and land and environment by adopting advanced technologies and to fulfil ever rising demands of the irrigation systems."
    },
    mission: {
        heading: "Our Mision",
        text: "Delivering quality products with proven technologies and understanding customer’s requirements to offer the best of our services. We are the givers of the good value of your money."
    },
    team: {
        heading: "OUR TEAM",
        text: "Nilam Industries is one of the best organizations you will find in the Madhya Pradesh Region for handling drip irrigation system. We are the serving as the manufacturer of all the drip irrigation best quality equipment.",
        teamMember: [
            {
                image:"https://picsum.photos/175/90",
                name:"",
                about:""
            },
            {
                image:"https://picsum.photos/175/91",
                name:"",
                about:""
            },
            {
                image:"https://picsum.photos/175/89",
                name:"",
                about:""
            },
            {
                image:"https://picsum.photos/174/90",
                name:"",
                about:""
            },
            {
                image:"https://picsum.photos/176/90",
                name:"",
                about:""
            },
            {
                image:"https://picsum.photos/174/89",
                name:"",
                about:""
            },
            {
                image:"https://picsum.photos/174/91",
                name:"",
                about:""
            },
            {
                image:"https://picsum.photos/176/89",
                name:"",
                about:""
            }
        ]
    }
};
return (
<>
<AboutUsBanner item={data.banner}>

</AboutUsBanner>
</>
);
}