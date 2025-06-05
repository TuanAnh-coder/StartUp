import { CloseOutlined, PlayCircleOutlined, YoutubeFilled } from '@ant-design/icons';
import './support.css'
import { useEffect, useState } from 'react';
const Support = () => {
    const [src, setSrc] = useState(null)
    const [display, setDisplay] = useState(false)
    const handleClick = () => {
        setDisplay(true)
        setSrc('https://www.youtube.com/embed/CgkZ7MvWUAA?si=UR_eQYHi9htcAfZn&autoplay=1&start=0')

    }
    const handleClose = () => {
        setDisplay(false)
        setSrc(null)
    }
    return (
        <section className="support">
            <div className="container">
                <div className="head">
                    <h1 className="head__title">
                        We are ready to help
                    </h1>
                    <p className="head__description">
                        There are many variations of passages of Lorem Ipsum available but the
                        majority have suffered alteration in some form.
                    </p>
                </div>
                <div className="main">
                    <img src="/images.jpg" data='CgkZ7MvWUAA?si=UR_eQYHi9htcAfZn' />
                    <YoutubeFilled className='btn__play' onClick={handleClick} />
                </div>
                <div className="popup__video" style={{ display: display ? 'block' : 'none' }} onClick={handleClose}>
                    <div className="popup__video--relative">
                        <iframe src={src}
                            title="YouTube video player" allow='autoplay'>
                        </iframe>
                        <CloseOutlined className='close__btn' onClick={handleClose}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Support;