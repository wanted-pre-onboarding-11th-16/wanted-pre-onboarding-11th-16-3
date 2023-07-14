import { Issue, IssueDetail } from '@/types/issue';
import { client } from '.';

export const getIssues = async (params: { page: number }) => {
  const paramsWithOptions = { ...params, sort: 'comments', per_page: 30 };
  const { data } = await client.get<Issue[]>('issues', {
    params: paramsWithOptions,
  });

  return data;
};

export const getIssueDetail = async (id: number) => {
  const { data } = await client.get<IssueDetail>(`issues/${id}`);

  return data;
};
