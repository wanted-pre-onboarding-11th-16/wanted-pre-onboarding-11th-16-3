import styled from '@emotion/styled';
import { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useNavigate, useParams } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import Loader from '@/components/common/Loader';
import { PATH } from '@/constants/path';
import { useIssueDetail } from '@/context/detailContext';
import { parseDate } from '@/utils/parseDate';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    navigate(PATH.ERROR_PAGE);
    alert('페이지를 찾을 수 없습니다!');
  }

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
  width: 800px;
  height: 100%;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5px;
  border-bottom: solid 1px black;
`;

const Text = styled.span`
  box-sizing: border-box;
  margin: auto 5px;
`;
