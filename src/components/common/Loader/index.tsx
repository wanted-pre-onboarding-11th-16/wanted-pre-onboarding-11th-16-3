import * as Styled from './style';

interface LoaderProps {
  className?: string;
}

const Loader = (props: LoaderProps) => {
  const { className = 'full' } = props;

  return (
    <Styled.LoaderWrapper className={className}>
      <Styled.Loader />
    </Styled.LoaderWrapper>
  );
};

export default Loader;
