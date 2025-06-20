import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, LinkedinOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import './footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__logo">
                    <div className="logo">
                        <NavLink to='/'>
                            <img src="/LogoStartUp.png" />
                            <span>Startup</span>
                        </NavLink></div>
                    <p className="footer__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.</p>
                    <ul className="icon">
                        <li><FacebookOutlined /></li>
                        <li><InstagramOutlined /></li>
                        <li><YoutubeOutlined /></li>
                        <li><LinkedinOutlined /></li>
                    </ul>
                </div>
                    <div className="useFul">
                        <div className="title">Useful Links</div>
                        <ul className="link">
                            <li className="link__item">Blog</li>
                            <li className="link__item">Pricing</li>
                            <li className="link__item">About</li>
                        </ul>
                    </div>
                    <div className="terms">
                        <div className="title">Terms</div>
                        <ul className="link">
                            <li className="link__item">TOS</li>
                            <li className="link__item">Privacy Policy</li>
                            <li className="link__item">Refund Policy</li>
                        </ul>
                    </div>
                    <div className="support__help">
                        <div className="title">Support & Help</div>
                        <ul className="link">
                            <li className="link__item">Open Support Ticker</li>
                            <li className="link__item">Terms of User</li>
                            <li className="link__item">About</li>
                        </ul>
                    </div>
            </div>
            <div className='left'><svg width="79" height="94" viewBox="0 0 79 94" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.3" x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" fill="url(#paint0_linear_94:889)"></rect><rect x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" stroke="url(#paint1_linear_94:889)" strokeWidth="0.7"></rect><path opacity="0.3" d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z" fill="url(#paint2_linear_94:889)"></path><path d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z" stroke="url(#paint3_linear_94:889)" strokeWidth="0.7"></path><path opacity="0.3" d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z" fill="url(#paint4_linear_94:889)"></path><path d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z" stroke="url(#paint5_linear_94:889)" strokeWidth="0.7"></path><defs><linearGradient id="paint0_linear_94:889" x1="-41" y1="21.8445" x2="36.9671" y2="59.8878" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0.62"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop></linearGradient><linearGradient id="paint1_linear_94:889" x1="25.6675" y1="95.9631" x2="-42.9608" y2="20.668" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51"></stop></linearGradient><linearGradient id="paint2_linear_94:889" x1="20.325" y1="-3.98039" x2="90.6248" y2="25.1062" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0.62"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop></linearGradient><linearGradient id="paint3_linear_94:889" x1="18.3642" y1="-1.59742" x2="113.9" y2="80.6826" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51"></stop></linearGradient><linearGradient id="paint4_linear_94:889" x1="61.1098" y1="62.3249" x2="-8.82468" y2="58.2156" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0.62"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop></linearGradient><linearGradient id="paint5_linear_94:889" x1="65.4236" y1="65.0701" x2="24.0178" y2="41.6598" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51"></stop></linearGradient></defs></svg></div>
            <div className="right"><svg width="79" height="94" viewBox="0 0 79 94" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.3" x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" fill="url(#paint0_linear_94:889)"></rect><rect x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" stroke="url(#paint1_linear_94:889)" strokeWidth="0.7"></rect><path opacity="0.3" d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z" fill="url(#paint2_linear_94:889)"></path><path d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z" stroke="url(#paint3_linear_94:889)" strokeWidth="0.7"></path><path opacity="0.3" d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z" fill="url(#paint4_linear_94:889)"></path><path d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z" stroke="url(#paint5_linear_94:889)" strokeWidth="0.7"></path><defs><linearGradient id="paint0_linear_94:889" x1="-41" y1="21.8445" x2="36.9671" y2="59.8878" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0.62"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop></linearGradient><linearGradient id="paint1_linear_94:889" x1="25.6675" y1="95.9631" x2="-42.9608" y2="20.668" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51"></stop></linearGradient><linearGradient id="paint2_linear_94:889" x1="20.325" y1="-3.98039" x2="90.6248" y2="25.1062" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0.62"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop></linearGradient><linearGradient id="paint3_linear_94:889" x1="18.3642" y1="-1.59742" x2="113.9" y2="80.6826" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51"></stop></linearGradient><linearGradient id="paint4_linear_94:889" x1="61.1098" y1="62.3249" x2="-8.82468" y2="58.2156" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0.62"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop></linearGradient><linearGradient id="paint5_linear_94:889" x1="65.4236" y1="65.0701" x2="24.0178" y2="41.6598" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7" stopOpacity="0"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51"></stop></linearGradient></defs></svg></div>
        </footer>
    );
}
export default Footer;