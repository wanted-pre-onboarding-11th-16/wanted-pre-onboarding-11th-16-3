import styled from '@emotion/styled';

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;

  &.short {
    height: auto;
  }

  &.full {
    height: 100vh;
  }
`;

export const Loader = styled.div`
  width: 50px;
  margin: auto auto;
  aspect-ratio: 1;
  border-radius: 50%;

  background:
    radial-gradient(farthest-side, orange 94%, #0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%, orange);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);

  animation: spin 1s infinite linear;

  @keyframes spin {
    100% {
      transform: rotate(1turn);
    }
  }
`;
