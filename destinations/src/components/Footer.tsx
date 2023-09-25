import React from 'react';

interface FooterItemProps {
  text: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ text }) => {
  return (
    <li><a href="#">{text}</a></li>
  );
};

const Footer: React.FC = () => {
  return (
    <footer>
      <ul>
        <FooterItem text='destinations'/>
        <FooterItem text='contact'/>
        <FooterItem text='stories'/>
      </ul>
    </footer>
  );
};

export default Footer;
