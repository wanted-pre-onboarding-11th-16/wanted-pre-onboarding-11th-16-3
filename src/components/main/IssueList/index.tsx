import { Fragment } from 'react';

import Loader from '@/components/common/Loader';
import { IMG_SRC } from '@/constants/img';
import { useIssues } from '@/context/IssuesContext';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Issue } from '@/types/issue';

import Ad from '../Ad';
import IssueItem from '../IssueItem';

const IssueList = ({ issues: issueList }: { issues: Issue[] }) => {
  const { loading, loadMoreIssues } = useIssues();

  const { target } = useInfiniteScroll<HTMLDivElement>(loadMoreIssues);

  return (
    <ul>
      {issueList.map((issue, idx) => (
        <Fragment key={issue.number}>
          <IssueItem {...issue} />
          {idx % 5 === 4 && <Ad keyIdx={idx} imgSrc={IMG_SRC} />}
        </Fragment>
      ))}
      <div ref={target}></div>
      {loading && <Loader className="short" />}
    </ul>
  );
};

export default IssueList;
