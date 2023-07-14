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
      <h1>메인페이지입니다.</h1>
      <IssueList issues={issues} />
    </Layout>
  );
};

export default MainPage;
