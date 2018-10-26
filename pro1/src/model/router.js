import Home from '../components/Home'
import Discover from '../components/Discover'
import MyPortfolio from '../components/MyPortfolio'

let routes = [
    {
        path: "/",
        title: "HOME",
        component: Home,
        exact: true
    },
    {
        path: "/discover",
        title: "DISCOVER",
        component: Discover,
    },
    {
        path: "/myportfolio",
        title: "MY PORTFOLIO",
        component: MyPortfolio
    }
];

export default routes;