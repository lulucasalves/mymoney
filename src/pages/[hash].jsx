import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Test() {
  const router = useRouter()
  const { hash } = router.query

  return (
    <>
      <Head>
        <title>Formulário</title>
      </Head>
      <div>{hash}</div>
    </>
  )
}
