import { useState, useRef } from 'react';
import { links } from './Data';
import logo from './logo.svg';
import './navbar.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current?.getBoundingClientRect().height}px`
      : 'auto',
  };
  return (
    <nav>
      <div className='nav-center'>
        <img src={logo} className='logo' alt='logo' />

        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className='links' ref={linksRef}>
            {links.map((link: { id: number; url: string; text: string }) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <button className='get-started-btn'>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
