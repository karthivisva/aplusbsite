import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Title */}
        <title>A Plus B Consortium - Designing Dreams, Building Realities</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="A Plus B Consortium is a multidisciplinary design and execution company delivering innovative, sustainable, and client-focused solutions in architecture, engineering, BIM, 3D printing, AR/VR, and project management."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="A Plus B Consortium, Architecture, Engineering, BIM, 3D Printing, AR/VR, Design Agency, Project Management, Sustainable Design"
        />

        {/* Open Graph (for link sharing) */}
        <meta property="og:title" content="A Plus B Consortium - Designing Dreams, Building Realities" />
        <meta
          property="og:description"
          content="We specialize in holistic expertise, cutting-edge technology, and sustainable design solutions for global clients."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="/aplusb-og.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="A Plus B Consortium - Designing Dreams, Building Realities" />
        <meta
          name="twitter:description"
          content="Holistic, innovative, and sustainable solutions from A Plus B Consortium."
        />
        <meta name="twitter:image" content="/aplusb-og.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
