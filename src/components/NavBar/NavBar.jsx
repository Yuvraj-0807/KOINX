import { useNavigate } from 'react-router';
import { Hamburger, logo } from '../../assets';

import { BaseButton } from '../../components';

export function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="border border-b-[#DEDFE2]">
      <div className="wrapper flex justify-between py-7 items-center">
        <img
          src={logo}
          alt=""
          onClick={() => navigate('/')}
          className="cursor-pointer"
        />
        <div className="hidden md:flex gap-[45px] items-center">
          <div className="flex gap-8 text-base font-semibold text-[var(--black)]">
            <h2>Cryto Taxes</h2>
            <h2>Free Tools</h2>
            <h2>Resource Center</h2>
          </div>
          <BaseButton>Get Started</BaseButton>
        </div>
        <img src={Hamburger} alt="" className="flex md:hidden" />
      </div>
    </nav>
  );
}
