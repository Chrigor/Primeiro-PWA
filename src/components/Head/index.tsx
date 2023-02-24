import Head from 'next/head'

export interface HeadProps {
  title?: string
}

function HeadCustom({
  title
}: HeadProps) {
  return <Head>
    <title>{title}</title>
  </Head>
}

export default HeadCustom