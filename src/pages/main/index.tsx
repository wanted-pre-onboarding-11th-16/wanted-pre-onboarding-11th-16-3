import styled from '@emotion/styled';
import { useEffect } from 'react';

import Layout from '@/components/common/Layout';
import IssueList from '@/components/main/IssueList';
import { useIssues } from '@/context/IssuesContext';

const MainPage = () => {
  const { issues, loadIssues } = useIssues();

  useEffect(() => {
    loadIssues();
  }, []);

  return (
    <Layout>
      <Container>
        <IssueList issues={issues} />
      </Container>
    </Layout>
  );
};

export default MainPage;

const Container = styled.div`
  width: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px black;

  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #84a5c886;

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  }
`;
