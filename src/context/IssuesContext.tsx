import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { getIssues } from '@/apis/issues';
import { PER_PAGE } from '@/constants/issue';
import { Issue } from '@/types/issue';

export const IssuesContext = createContext<{
  issues: Issue[];
  loading: boolean;
  loadIssues: () => void;
  loadMoreIssues: () => void;
} | null>(null);

export const useIssues = () => {
  const issueContext = useContext(IssuesContext);

  if (!issueContext) throw new Error('새로고침 해주세요!');

  return issueContext;
};

export default function IssuesContextProvider(props: PropsWithChildren) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(false);

  const loadIssues = async () => {
    setLoading(true);
    const res = await getIssues({ page: 1 });

    setIssues(res);
    setLoading(false);
  };

  const loadMoreIssues = async () => {
    const nextPage = Math.floor(issues.length / PER_PAGE) + 1;

    setLoading(true);
    const res = await getIssues({ page: nextPage });

    if (res.length < PER_PAGE) {
      setLoading(false);

      return;
    }

    setIssues([...issues, ...res]);
    setLoading(false);
  };

  return (
    <IssuesContext.Provider value={{ issues, loading, loadIssues, loadMoreIssues }}>
      {props.children}
    </IssuesContext.Provider>
  );
}
