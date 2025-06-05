import './ads.css'
import { CheckOutlined } from '@ant-design/icons'
const Ads = () => {
    return (
        <div className="ads">
            <div className="container">
                <div className="ads__description">
                    <div className="ads__content">
                        <h1 className="content__head">Crafted for Startup, SaaS and Business Sites.</h1>
                        <p className="content__description">The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables.</p>
                        <ul className="content__features">
                            <li className="content__features__item">
                                <CheckOutlined style={{ color: '#4A6CF7', marginRight: '10px', background: '#EAEDFB', padding: '7px' }} />
                                <span>Premium quality</span>
                            </li>
                            <li className="content__features__item">
                                <CheckOutlined style={{ color: '#4A6CF7', marginRight: '10px', background: '#EAEDFB', padding: '7px' }} />
                                <span>Tailwind CSS</span>
                            </li>
                            <li className="content__features__item">
                                <CheckOutlined style={{ color: '#4A6CF7', marginRight: '10px', background: '#EAEDFB', padding: '7px' }} />
                                <span>Use for lifetime</span>
                            </li>
                            <li className="content__features__item">
                                <CheckOutlined style={{ color: '#4A6CF7', marginRight: '10px', background: '#EAEDFB', padding: '7px' }} />
                                <span>Next.js</span>
                            </li>
                            <li className="content__features__item">
                                <CheckOutlined style={{ color: '#4A6CF7', marginRight: '10px', background: '#EAEDFB', padding: '7px' }} />
                                <span>Rich documentation</span>
                            </li>
                            <li className="content__features__item">
                                <CheckOutlined style={{ color: '#4A6CF7', marginRight: '10px', background: '#EAEDFB', padding: '7px' }} />
                                <span>Developer friendly</span>
                            </li>
                        </ul>
                    </div>
                    <div className="ads__img">
                        <img src="/about-image.svg" width='100%' />
                    </div>
                </div>
                <div className="ads__description__bot">
                    <div className="ads__content">
                        <div className="content__item">
                            <h1>Bug free code</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="content__item">
                            <h1>Premier support</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="content__item">
                            <h1>Next.js</h1>
                            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt consectetur adipiscing elit setim.</p>
                        </div>
                    </div>
                    <div className="ads__img">
                        <img src="/about-image-2.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Ads;