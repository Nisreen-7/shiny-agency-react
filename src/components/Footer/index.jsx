import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
 
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  margin-bottom: 30px;
`;

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
  font-size: 18px;
  margin-left: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primary};
  }
`;




function Footer() {
    const { toggleTheme, theme } = useContext(ThemeContext)
  
    return (
      <FooterContainer>
        <NightModeButton onClick={() => toggleTheme()}>
          Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
        </NightModeButton>
      </FooterContainer>
    )
  }
 
export default Footer;