const Ad = ({ keyIdx, imgSrc }: { keyIdx: number; imgSrc: string }) => {
  return (
    <li key={`ad-${keyIdx}`}>
      <img src={imgSrc} alt="ad" />
    </li>
  );
};

export default Ad;
