import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutePaths} from 'router/router';
import {Container} from 'components/UI/Logo/Logo.styled'; 

const Logo: FC = () => {
  const navigate = useNavigate();

  function moveToMainPage(): void {
    navigate(RoutePaths.MAIN);
  }

  return (
    <Container onClick={moveToMainPage}>
      <h1>
        Coin
        <span>cap</span>
      </h1>
    </Container>
  );
}

export default Logo;