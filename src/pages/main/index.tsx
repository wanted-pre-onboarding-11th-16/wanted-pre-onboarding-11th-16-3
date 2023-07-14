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
        <h1>Issue List</h1>
        <TextBox>
          <IssueList issues={issues} />
        </TextBox>
      </Container>
    </Layout>
  );
};

export default MainPage;

const Container = styled.div`
  box-sizing: border-box;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px black;
  margin: 50px auto;
  padding: 50px;
  cursor: pointer;
  .bold {
    font-weight: 500;
  }
  .ad {
    border: solid 2px blue;
  }
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  .comment {
    text-align: right;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  border-bottom: solid 1px black;
`;

// const Text = styled.span`
//   box-sizing: border-box;
//   margin: auto 5px;
// `;
