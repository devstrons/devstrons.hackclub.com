import Head from 'next/head'

const Page: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} — DEVSTRONS'</title>
      </Head>
      {children}
    </>
  )
}

export default Page
