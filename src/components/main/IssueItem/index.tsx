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
    <li role="presentation" onClick={() => handleClickIssue(number)}>
      <div>
        #{number} | {title}
      </div>
      <div>
        {user.login} | {parseDate(updated_at)} | {comments}
      </div>
    </li>
  );
};

export default IssueItem;
