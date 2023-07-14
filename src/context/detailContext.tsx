import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { getIssueDetail } from '../apis/issues';
import { IssueDetail } from '../types/issue';

const INITIAL_ISSUE_DETAIL = {
  number: 0,
  body: '',
  title: '',
  comments: 0,
  updated_at: new Date(),
  user: { avatar_url: '', login: '' },
};

export const IssueDetailContext = createContext<{
  detail: IssueDetail;
  loading: boolean;
  loadIssueDetail: (id: number) => void;
}>({
  detail: INITIAL_ISSUE_DETAIL,
  loading: false,
  loadIssueDetail: async () => {},
});

export const useIssueDetail = () => {
  const issueDetail = useContext(IssueDetailContext);

  if (!issueDetail) throw new Error('새로고침 해주세요!');

  return issueDetail;
};

const IssueDetailProvider = (props: PropsWithChildren) => {
  const [detail, setDetail] = useState<IssueDetail>(INITIAL_ISSUE_DETAIL);
  const [loading, setLoading] = useState<boolean>(false);

  const loadIssueDetail = async (id: number) => {
    if (detail.number === id) return;

    setLoading(true);
    const issue = await getIssueDetail(id);

    setDetail(issue);
    setLoading(false);
  };

  return (
    <IssueDetailContext.Provider value={{ detail, loading, loadIssueDetail }}>
      {props.children}
    </IssueDetailContext.Provider>
  );
};

export default IssueDetailProvider;
