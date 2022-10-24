import Head from 'next/head'
import styled from 'styled-components'
import { Anchor } from '@/components/Anchor'
import NextImage from 'next/future/image'
import basketball from '/public/assets/images/brandon-w-01-unsplash.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Styled-Components beta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <H1>Hello World From New Styled-Components</H1>
      <Anchor href="/blog">blog page</Anchor>
      <Anchor href="http://google.com">google home page</Anchor>

      <Picture>
        <Image src={basketball} alt="Randon W Unspash" />
      </Picture>
    </>
  )
}

const H1 = styled.h1`
  font-size: var(--10);
  color: var(--clr-text);
`

const Picture = styled.picture`
  display: block;
  width: 400px;
`

const Image = styled(NextImage)`
  width: 100%;
  height: auto;
  border-radius: var(--radius-default);
`
