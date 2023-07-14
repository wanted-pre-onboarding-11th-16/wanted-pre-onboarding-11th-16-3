import styled from '@emotion/styled';

import { TARGET_PATH } from '@/constants/repo';

const Header = () => {
  const [organization, repo] = TARGET_PATH.split('/');

  return (
    <HeaderWrapper>
      {organization} / {repo}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  font-weight: 700;

  width: 100%;
  height: 100px;

  position: fixed;
  top: 0;
  background: linear-gradient(to bottom, #84a5c886, transparent);
  border: none;

  h1 {
    font-size: 2.5em;
    color: #212121;
  }

  z-index: 999;
`;
