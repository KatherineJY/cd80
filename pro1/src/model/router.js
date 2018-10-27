import Home from '../components/Home'
import Discover from '../components/Discover'
    import SelectSectors from '../components/Discover/SelectSectors'
    import GetYourPortfolio from '../components/Discover/GetYourPortfolio'
    import DistributeWeights from '../components/Discover/DistributeWeights'
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
        // routes: [
        //     {
        //         path:'/discover/',
        //         component: SelectSectors
        //     },
        //     {
        //         path:'/discover/step2',
        //         component: SelectSectors
        //     },
        //     {
        //         path:'/discover/step3',
        //         component: SelectSectors
        //     },
        // ]
    },
    {
        path: "/myportfolio",
        title: "MY PORTFOLIO",
        component: MyPortfolio
    }
];

export default routes;