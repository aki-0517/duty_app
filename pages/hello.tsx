import Head from "next/head";

export default function HelloWorld(props: any) {
  return (
      <div>
          <Head>
              <title>Hello World</title>
              <meta name="description" content="検索エンジン用の説明文" />
          </Head>
          <h1>Hello World</h1>
+            <pre><code>{JSON.stringify(props,null,2)}</code></pre>
      </div>
  )
}
