import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.span`
  font-size: 20rem;
`;
const Contents = styled.span`
  font-size: 4rem;
`;
const LinkText = styled.span`
  font-size: 4rem;
  color: rgb(69, 88, 255);
  cursor: pointer;
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <br />
      <Contents>Page Not Found</Contents>
      <br />
      <br />
      <Link to="/">
        <LinkText>Get Back to HomePage</LinkText>
      </Link>
    </Container>
  );
};

export default NotFound;
