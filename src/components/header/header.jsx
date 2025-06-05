import { useEffect, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';
import './header.css'
const Header = (props) => {
    useEffect(() => {
        //bắt sự kiện scroll cho menu
        const header = document.querySelector("header")
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                header.classList.add('fixed');
            }
            else {
                header.classList.remove('fixed');
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // cleanup
        };
    }, []);
    const items = [
        {
            label: <NavLink to={"/"}>Home</NavLink>,
            key: 'home',
        },
        {
            label: <NavLink to={'about'}>About</NavLink>,
            key: 'about',
        },
        {
            label: <NavLink to={'support'}>Support</NavLink>,
            key: 'support',
        },
        {
            label: (
                <span>
                    Pages <DownOutlined />
                </span>
            ),
            key: 'page',
            children: [
                {
                    label: <NavLink to={'about'}>About Page</NavLink>,
                    key: "about page"
                },
                {
                    label: <NavLink to={'support'}>Contact Page</NavLink>,
                    key: "contact page"
                },
                {
                    label: <NavLink to={'sign_in'}>Sign In Page</NavLink>,
                    key: "signin page"
                },
                {
                    label: <NavLink to={'sign_up'}>Sign Up Page</NavLink>,
                    key: "signup page"
                },
            ],
        }
    ];
    const menu = [
        {
            label: <NavLink to={'/'}>Home Page</NavLink>,
            key: "home page"
        },
        {
            label: <NavLink to={'about'}>About Page</NavLink>,
            key: "about page"
        },
        {
            label: <NavLink to={'support'}>Contact Page</NavLink>,
            key: "contact page"
        },
        {
            label: <NavLink to={'sign_in'}>Sign In Page</NavLink>,
            key: "signin page"
        },
        {
            label: <NavLink to={'sign_up'}>Sign Up Page</NavLink>,
            key: "signup page"
        },
    ];
    const [current, setCurrent] = useState('home');
    const onClick = e => {
        setCurrent(e.key);
    };
    return (
        <header>
            <div className="container">
                <ul className="header">
                    <li className="header__logo" >
                        <NavLink to='/' onClick={() => { setCurrent('home') }}>
                            <img src="/LogoStartUp.png" />
                            <span>Startup</span>
                        </NavLink>
                    </li>
                    <li className='header__menu'>
                        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}
                        />
                    </li>
                    <li className='header__user'>
                        <Link to={'sign_in'}>Sign In</Link>
                        <Link to={'sign_up'}>Sign Up</Link>
                        <div className="toolbar">
                            <Dropdown menu={{ items: menu }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <input type="checkbox" id="checkbox" />
                                    <label htmlFor="checkbox" className="toggle">
                                        <div className="bars" id="bar1"></div>
                                        <div className="bars" id="bar2"></div>
                                        <div className="bars" id="bar3"></div>
                                    </label>
                                </a>
                            </Dropdown>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}
export default Header;