import styled from '@emotion/styled';

const Ad = ({ keyIdx, imgSrc }: { keyIdx: number; imgSrc: string }) => {
  return (
    <ImgList key={`ad-${keyIdx}`}>
      <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
        <img className="img" src={imgSrc} alt="ad" />
      </a>
    </ImgList>
  );
};

export default Ad;

const ImgList = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 800px;
    padding: 20px 0;
  }

  img {
    width: 50%;
    object-fit: contain;
  }
`;
