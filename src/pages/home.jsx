import AboutUs from "../components/main/about_us/aboutUs"
import Ads from "../components/main/ads/ads"
import FormComponent from "../components/main/form/form"
import HeroComponent from "../components/main/hero/hero"
import Util from "../components/main/list_utils/list.util"
import FeaturesComponent from "../components/main/main-features/main.features"
import Support from "../components/main/support/support"

const HomePage = () => {
    return (
        <>
            <HeroComponent />
            <FeaturesComponent />
            <Support />
            <Util />
            <Ads />
            <AboutUs />
            <FormComponent />
        </>
    );
}
export default HomePage;