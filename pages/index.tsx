import Head from 'next/head';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <H1>Hello World From New Styled-Components</H1>
    </>
  );
}

const H1 = styled.h1`
  font-size: var(--08);
  color: var(--brand);
`;
