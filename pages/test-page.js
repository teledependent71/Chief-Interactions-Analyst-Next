import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Chief Interactions Analyst</title>
          <meta
            property="og:title"
            content="test-page - Chief Interactions Analyst"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_hk9pc4) => (
            <>
              <h1 id={context_hk9pc4?.Name}>Heading</h1>
            </>
          )}
          initialData={props.contextHk9pc4Prop}
          persistDataDuringLoading={true}
          key={props?.contextHk9pc4Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextHk9pc4Prop = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextHk9pc4Prop: contextHk9pc4Prop?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
