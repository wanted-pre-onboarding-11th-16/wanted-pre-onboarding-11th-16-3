import { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import Loader from '@/components/common/Loader';
import { useIssueDetail } from '@/context/detailContext';
import { parseDate } from '@/utils/parseDate';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) throw new Error('페이지를 찾을 수 없습니다!');

  const { detail, loading, loadIssueDetail } = useIssueDetail();
  const { number, title, body, comments, updated_at, user } = detail;

  useEffect(() => {
    loadIssueDetail(Number(id));
  }, []);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>{title}</h1>
          <div>{number}</div>
          <div>{comments}</div>
          <div>{parseDate(updated_at)}</div>
          <div>{user.login}</div>
          <img src={user.avatar_url} alt="user_avatar" />
          <ReactMarkdown>{body}</ReactMarkdown>
        </>
      )}
    </Layout>
  );
};

export default DetailPage;
