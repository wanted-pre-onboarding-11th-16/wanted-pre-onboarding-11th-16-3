import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import Header from '@/components/common/Header';

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Wrapper>{props.children}</Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.section`
  padding-top: 150px;
  height: calc(100vh - 150px);

  background-color: rgb(245, 248, 250);
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: hidden;
`;
