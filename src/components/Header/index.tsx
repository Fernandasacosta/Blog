import { HeaderContainer, HeaderContent } from "./styles";
import effectImg from '../../assets/effect.png';
import logo from '../../assets/icon/logo.png';
import effectImg2 from '../../assets/effect2.png';

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
      <img src={effectImg} alt="Effect" />

      <img src={logo} alt="logo" />

      <img src={effectImg2} alt="Effect" />
      </HeaderContent>
    </HeaderContainer>
  )
}