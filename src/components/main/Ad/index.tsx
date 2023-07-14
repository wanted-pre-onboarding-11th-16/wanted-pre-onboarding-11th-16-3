import styled from '@emotion/styled';

const Ad = ({ keyIdx, imgSrc }: { keyIdx: number; imgSrc: string }) => {
  return (
    <Container>
      <div key={`ad-${keyIdx}`}>
        <img className="img" src={imgSrc} alt="ad" />
      </div>
    </Container>
  );
};

export default Ad;

const Container = styled.div`
  align-items: center;
  min-width: 700px;
  .img {
    min-width: 100px;
  }
`;
