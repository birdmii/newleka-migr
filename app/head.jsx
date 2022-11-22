const Head = ({ title, keywords, description }) => {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/assets/favicon.ico" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://new-le-ka.vercel.app/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/assets/metadata-img.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://new-le-ka.vercel.app/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/assets/metadata-img.png"></meta>
    </>
  );
};

Head.defaultProps = {
  title: "NEW・LE・KA | 새로운 뉴스레터를 찾아보세요!",
  keywords: "newsletter,뉴스레터,뉴레카,newleka",
  description:
    "새로운 뉴스레터를 찾고 계신가요? NEW・LE・KA(뉴레카)에서 원하는 뉴스레터를 손쉽게 찾아보세요!",
};

export default Head;
