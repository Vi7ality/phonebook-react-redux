import { Container } from 'components/Container/Container.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <div>
      <Container>
        <AppBar></AppBar>
      </Container>
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
