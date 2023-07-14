import styled from '@emotion/styled';
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
          <Container>
            <h1>{title}</h1>
            <TextBox>
              <img className="image" src={user.avatar_url} alt="user_avatar" />
              <h2 className="bold">#{number}</h2>

              <Text>{parseDate(updated_at)}</Text>
              <Text>{user.login}</Text>
              <Text>코멘트: {comments}</Text>
            </TextBox>
            <ReactMarkdown>{body}</ReactMarkdown>
          </Container>
        </>
      )}
    </Layout>
  );
};

export default DetailPage;

const Container = styled.div`
  box-sizing: border-box;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border-bottom: solid 1px black;
  margin: 50px auto;
  padding: 10px;
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

const Text = styled.span`
  box-sizing: border-box;
  margin: auto 5px;
`;
