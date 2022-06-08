import { useRive } from '@rive-app/react-canvas';
import styled from 'styled-components';
import logoAnimation from './../../assets/animation/animation.riv'


const Container = styled.div`
  width: 100%;
  height: 45%;
  margin-top: 1.5em;
  margin-bottom: 1.5em;

`

export const LogoAnimation = () => {
  const { rive, RiveComponent } = useRive({
    src: logoAnimation,
    autoplay: true,
  }, {

  });
  

  return (
    <Container>
      <RiveComponent/>
    </Container>
  );
}