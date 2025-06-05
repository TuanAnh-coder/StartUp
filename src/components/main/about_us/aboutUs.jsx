import { Carousel, Rate } from 'antd';
import './aboutUs.css'
const AboutUs = () => {
    const contentStyle = {
        margin: 0,
        color: '#0A0B0F',
        textAlign: 'center',
    };
    const rate = [
        {
            id: 1,
            name: 'David Jackson',
            position: 'Founder @TailGrids',
            comment: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            rate: 5,
        },
        {
            id: 2,
            name: 'Mbape',
            position: 'Founder @Js',
            comment: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            rate: 4,
        },
        {
            id: 3,
            name: 'David Jacky',
            position: 'Founder @Windowx',
            comment: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            rate: 4,
        },
        {
            id: 4,
            name: 'David King',
            position: 'Founder @TailGrids',
            comment: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            rate: 4,
        },
        {
            id: 5,
            name: 'Alex',
            position: 'Founder @TailGrids',
            comment: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            rate: 5,
        },
        {
            id: 6,
            name: 'David Jackson',
            position: 'Founder @TailGrids',
            comment: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            rate: 5,
        },
        {
            id: 7,
            name: 'David Jackson',
            position: 'Founder @TailGrids',
            comment: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            rate: 5,
        },
        {
            id: 8,
            name: 'David Jackson',
            position: 'Founder @TailGrids',
            comment: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            rate: 5,
        },
        {
            id: 9,
            name: 'David Jackson',
            position: 'Founder @TailGrids',
            comment: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            rate: 5,
        }
    ];
    const chunked = (array, size) => {
        let chunk = [];
        for (let i = 0; i < array.length; i += size) {
            chunk.push(array.slice(i, i + size))
        }
        return chunk;
    }
    const groupRate = chunked(rate, 3);
    console.log(groupRate);
    return (
        <section className="aboutUs">
            <div className="container">
                <div className="head">
                    <h1 className="title">What Our Users Says</h1>
                    <p className="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                </div>
                <Carousel autoplay effect="scrollx" draggable>
                    {groupRate.map((idx, id) => (
                        <div key={id}>
                            <div key={id}>
                                <div className="rate">
                                    {idx.map(index => (
                                        <div className="rate__item" key={index.id}>
                                            <div className="comment">
                                                <Rate disabled defaultValue={index.rate} style={{ padding: '15px 0' }} />
                                                <p>"{index.comment}"</p>
                                            </div>
                                            <div className="user">
                                                <img src="/auth-01.jpg" />
                                                <div className="user__information">
                                                    <div className="name__user">{index.name}</div>
                                                    <div className="position">{index.position}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>))}

                    {/* <div>
                            <div style={contentStyle}><div className="rate">
                                <div className="rate__item">
                                    <div className="comment">
                                        <Rate disabled defaultValue={5} style={{ padding: '15px 0' }} />
                                        <p>"Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."</p>
                                    </div>
                                    <div className="user">
                                        <img src="../../../../public/auth-01.jpg" />
                                        <div className="user__information">
                                            <div className="name__user">Devid Weilium</div>
                                            <div className="position">Founder @TailGrids</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rate__item">
                                    <div className="comment">
                                        <Rate disabled defaultValue={5} style={{ padding: '15px 0' }} />
                                        <p>"Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."</p>
                                    </div>
                                    <div className="user">
                                        <img src="../../../../public/auth-01.jpg" />
                                        <div className="user__information">
                                            <div className="name__user">Lethium Frenci</div>
                                            <div className="position">Founder @TailGrids</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rate__item">
                                    <div className="comment">
                                        <Rate disabled defaultValue={4} style={{ padding: '15px 0' }} />
                                        <p>"Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."</p>
                                    </div>
                                    <div className="user">
                                        <img src="../../../../public/auth-01.jpg" />
                                        <div className="user__information">
                                            <div className="name__user">Musharof Chy</div>
                                            <div className="position">Founder @TailGrids</div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                        <div>
                            <div style={contentStyle}><div className="rate">
                                <div className="rate__item">
                                    <div className="comment">
                                        <Rate disabled defaultValue={5} style={{ padding: '15px 0' }} />
                                        <p>"Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."</p>
                                    </div>
                                    <div className="user">
                                        <img src="../../../../public/auth-01.jpg" />
                                        <div className="user__information">
                                            <div className="name__user">Devid Weilium</div>
                                            <div className="position">Founder @TailGrids</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rate__item">
                                    <div className="comment">
                                        <Rate disabled defaultValue={5} style={{ padding: '15px 0' }} />
                                        <p>"Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."</p>
                                    </div>
                                    <div className="user">
                                        <img src="../../../../public/auth-01.jpg" />
                                        <div className="user__information">
                                            <div className="name__user">Lethium Frenci</div>
                                            <div className="position">Founder @TailGrids</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rate__item">
                                    <div className="comment">
                                        <Rate disabled defaultValue={4} style={{ padding: '15px 0' }} />
                                        <p>"Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."</p>
                                    </div>
                                    <div className="user">
                                        <img src="../../../../public/auth-01.jpg" />
                                        <div className="user__information">
                                            <div className="name__user">Musharof Chy</div>
                                            <div className="position">Founder @TailGrids</div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                        <div>
                            <div style={contentStyle}><div className="rate">
                                <div className="rate__item">
                                    <div className="comment">
                                        <Rate disabled defaultValue={5} style={{ padding: '15px 0' }} />
                                        <p>"Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."</p>
                                    </div>
                                    <div className="user">
                                        <img src="../../../../public/auth-01.jpg" />
                                        <div className="user__information">
                                            <div className="name__user">Devid Weilium</div>
                                            <div className="position">Founder @TailGrids</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rate__item">
                                    <div className="comment">
                                        <Rate disabled defaultValue={5} style={{ padding: '15px 0' }} />
                                        <p>"Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."</p>
                                    </div>
                                    <div className="user">
                                        <img src="../../../../public/auth-01.jpg" />
                                        <div className="user__information">
                                            <div className="name__user">Lethium Frenci</div>
                                            <div className="position">Founder @TailGrids</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rate__item">
                                    <div className="comment">
                                        <Rate disabled defaultValue={4} style={{ padding: '15px 0' }} />
                                        <p>"Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."</p>
                                    </div>
                                    <div className="user">
                                        <img src="../../../../public/auth-01.jpg" />
                                        <div className="user__information">
                                            <div className="name__user">Musharof Chy</div>
                                            <div className="position">Founder @TailGrids</div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        </div> */}
                </Carousel>
            </div >
        </section >
    );
}
export default AboutUs;