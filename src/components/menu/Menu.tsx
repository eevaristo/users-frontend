import './styles.css';

import { FiHome, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  return (
    <>
      <section className="menu-general">
        <div className="header">
          <div className="logo"></div>
        </div>

        <ul className="menu-items">
          <Link to={'/home'} className="item">
            <FiHome className="icon" size={18} />
            <p className="name-menu">Dashboard</p>
          </Link>
          <li className="item-second">
            <FiUser className="icon-second" size={18} />
            <p className="name-menu-second">Team</p>
          </li>
        </ul>
        <div className="menu-account">
          <img
            className="img-profile"
            src="https://scontent.fcpv20-1.fna.fbcdn.net/v/t31.18172-8/24297471_1541318752611337_1624294745153563863_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kqlvh1VyRX4AX8nZLlM&_nc_ht=scontent.fcpv20-1.fna&oh=00_AT-fT2i31TX3GpHjP0W9t6LCkJyg5g-4wvh6OjQIO-mUTA&oe=6261D0A1"
            alt="profile"
          />
          <p className="name-user">Elton Evaristo</p>
          <p className="email-user">elton.evaristo@mobicare.com.br</p>
        </div>
      </section>
    </>
  );
};
