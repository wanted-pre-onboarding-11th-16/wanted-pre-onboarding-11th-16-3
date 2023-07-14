import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import Header from '@/components/common/Header';

const Layout = (props: PropsWithChildren) => {
  return (
    <Wrapper>
      <Header />
      <main>{props.children}</main>
    </Wrapper>
  );
};

export default Layout;
const Wrapper = styled.div`
  height: 100vh;
  background-color: rgb(245, 248, 250);
  color: black;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
