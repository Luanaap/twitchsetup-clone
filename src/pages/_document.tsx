import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.svg" />
          <meta
              name="keywords"
              content="twitch, vídeo online, streams ao vivo, live, streamers, livestreamers, livestram, canais, esports "
          />

          <meta name="theme-color" content="#6441A4" />
          <meta
              name="description"
              lang="pt-BR"
              content="Twitch é a comunidade e plataforma de vídeo líder mundial para jogadores."
          />
          <meta
            property="url" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
