import Document, { Html, Head, Main, NextScript } from "next/document";

const woffFonts = [
  // "quicksand-v24-latin-300.woff",
  "quicksand-v24-latin-500.woff",
  // "quicksand-v24-latin-600.woff",
  // "quicksand-v24-latin-700.woff",
  // "quicksand-v24-latin-regular.woff",
  "pacifico-v17-latin-regular.woff",
];

const woff2Fonts = [
  // "quicksand-v24-latin-300.woff2",
  "quicksand-v24-latin-500.woff2",
  // "quicksand-v24-latin-600.woff2",
  // "quicksand-v24-latin-700.woff2",
  // "quicksand-v24-latin-regular.woff2",
  "pacifico-v17-latin-regular.woff2",
];

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {woffFonts.map((font) => (
            <link
              key={font}
              rel="preload"
              href={`/fonts/${font}`}
              as="font"
              type="font/woff"
              crossOrigin="anonymous"
            />
          ))}
          {woff2Fonts.map((font) => (
            <link
              key={font}
              rel="preload"
              href={`/fonts/${font}`}
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
          ))}
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
