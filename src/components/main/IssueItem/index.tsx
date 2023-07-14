import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { PATH } from '@/constants/path';
import { Issue } from '@/types/issue';
import { parseDate } from '@/utils/parseDate';

const IssueItem = (props: Issue) => {
  const { number, title, user, updated_at, comments } = props;

  const navigate = useNavigate();

  const handleClickIssue = (id: number) => {
    navigate(`/${PATH.DETAIL}/${id}`);
  };

  return (
    <List role="presentation" onClick={() => handleClickIssue(number)}>
      <GridBox>
        <Number>#{number}</Number> <Title>{title}</Title>
      </GridBox>
      <InnerBox>
        <span>{user.login}</span> | <span>{parseDate(updated_at)}</span> | <span>{comments}</span>
      </InnerBox>
    </List>
  );
};

export default IssueItem;

const List = styled.li`
  width: auto;
  border-bottom: 1px solid black;
  padding: 15px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Number = styled.span`
  font-size: 20px;
  font-weight: 600;

  color: #5f92c9;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
