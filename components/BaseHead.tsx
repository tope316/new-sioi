import Head from 'next/head'

export default function BaseHead(props) {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SIOI:: {props.title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        {props.css ? <link rel="stylesheet" href={`/css/${props.css}.css`} /> : undefined}
      </Head>
    </div>
  )
}