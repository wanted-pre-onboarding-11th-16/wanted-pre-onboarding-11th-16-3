import { useNavigate } from 'react-router-dom';

import { Issue } from '../../../types/issue';
import { parseDate } from '../../../utils/date';

const IssueItem = (props: Issue) => {
  const { number, title, user, updated_at, comments } = props;

  const navigate = useNavigate();

  const handleClickIssue = (id: number) => {
    navigate(`/issues/${id}`);
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
