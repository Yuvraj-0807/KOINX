import { logo } from '../../assets/images/images';
import { useContact } from '../../hooks';
import ENV_VARS from '../../utils/contants';
import { BaseButton } from '../Button';

export function NavBar() {
  const { user } = useContact();
  console.log('contacts', user);

  console.log('ENV', ENV_VARS.baseURL);

  return (
    <nav className="border border-b-[#DEDFE2]">
      <div className="wrapper flex justify-between py-7 items-center ">
        <img src={logo} alt="" />
        <div className="flex gap-[45px] items-center">
          <div className="flex gap-8 text-base font-semibold text-[var(--black)]">
            <h2>Cryto Taxes</h2>
            <h2>Free Tools</h2>
            <h2>Resource Center</h2>
          </div>
          <BaseButton>Get Started</BaseButton>
        </div>
      </div>
    </nav>
  );
}
