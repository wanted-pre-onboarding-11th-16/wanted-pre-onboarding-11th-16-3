export type Issue = {
  number: number;
  title: string;
  user: { login: string };
  updated_at: Date;
  comments: number;
};

export type IssueDetail = {
  user: { avatar_url: string };
  body: string;
} & Issue;
