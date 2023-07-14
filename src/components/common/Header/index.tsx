import { TARGET_PATH } from '@/constants/repo';

const Header = () => {
  const [organization, repo] = TARGET_PATH.split('/');

  return (
    <header>
      {organization} / {repo}
    </header>
  );
};

export default Header;
