import Animation from './image/Animation.png';
import ShoppingCart from './image/ShoppingCart.png';
import PokemonAPI from './image/PokemonAPI.png';
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';

export const ProjectFolder = [
    {
        id: 1,
        title: 'Animation',
        image: Animation,
        desc: "Ren CSS animajon av en ballong",
        skill: [
            <SiHtml5 size={30} color='#e75000' />, 
            <SiCss3 size={30} color='#1572b6' />
        ],
        repo: "https://github.com/Abdi-kodehode/KodeHode/tree/main/animation",
        githublink: "https://abdi-kodehode.github.io/KodeHode/animation/"
    },
    {
        id: 2,
        title: "Pokemon API",
        image: PokemonAPI,
        desc: "Introduksjon til API ",
        skill: [
            <SiHtml5 size={30} color='#e75000' />, 
            <SiCss3 size={30} color='#1572b6' />,
            <SiJavascript size={30} color='yellow' />
        ],
        repo: "https://github.com/Abdi-kodehode/KodeHode/tree/main/PokemonAPI",
        githublink: "https://abdi-kodehode.github.io/KodeHode/PokemonAPI/"
    },
    {
        id: 3,
        title: "Shopping Cart",
        image: ShoppingCart,
        desc: "React app m/context API",
        skill: [
            <SiReact size={30} color='#61dafb' />
        ],
        repo: "https://github.com/Abdi-kodehode/KodeHode/tree/main/shopping-cart-react",
        githublink: "https://abdi-kodehode.github.io/KodeHode/shopping-cart-react/build/"
    }
]