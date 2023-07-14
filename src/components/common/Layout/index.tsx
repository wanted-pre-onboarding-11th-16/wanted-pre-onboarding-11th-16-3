import { PropsWithChildren } from 'react';

import Header from '@/components/common/Header';

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
