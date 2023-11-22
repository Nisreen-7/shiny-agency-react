import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import { useTheme } from '../../utils/hooks'
import HomeIllustration from '../../assets/home-illustration.svg'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomerContainer = styled.div`
  margin: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTitle = styled.h2`
padding-bottom: 30px;
max-width: 280px;
line-height: 1.2; /* Ajustez la hauteur de ligne selon vos préférences */
font-size: 2 rem; /* Ajustez la taille de la police selon vos besoins */
font-weight: bold; /* Vous pouvez ajuster la graisse de la police si nécessaire */
text-align: center; /* Centrez le texte, ajustez selon vos besoins */
text-transform: uppercase; /* Convertit le texte en majuscules, ajustez selon vos préférences */
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`




const Illustration = styled.img`
  flex: 1;
`

function Home() {
  const { theme } = useTheme()

  return (
    <HomeWrapper>
      <HomerContainer theme={theme}>
        <LeftCol>
          <StyledTitle theme={theme}>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomerContainer>
    </HomeWrapper>
  )
}

export default Home