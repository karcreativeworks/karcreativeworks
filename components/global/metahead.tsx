import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FRONTEND_BASE_URL } from "utils/data.constants";

export interface HeaderProps {
  header: {
    title: string;
    description: string;
    image?: string;
    url: string;
    twitter?: string;
    robots?: string;
    adult?: boolean;
    structure?: any;
  };
}

const MetaHead: React.FC<HeaderProps> = ({ header }) => {
  const router = useRouter();
  const [title, setTitle] = useState(header.title);
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content={header.description} />
      <link rel="icon" href="/logo_192.png" type="image/png" />
      {header.title && <meta property="og:title" content={title} />}
      {header.description && (
        <meta property="og:description" content={header.description} />
      )}
      {header.image && <meta property="og:image" content={header.image} />}
      {header.url && <meta property="og:url" content={header.url} />}
      {header.twitter && <meta name="twitter:card" content={header.twitter} />}
      {header.robots ? (
        <meta name="robots" content={header.robots} />
      ) : (
        <meta name="robots" content="index,nofollow" />
      )}
      {header.adult === true && <meta name="rating" content="adult" />}
      {header.structure && (
        <script
          key={`structureJSON-${header.structure.identifier}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(header.structure) }}
        />
      )}
    </Head>
  );
};

export default MetaHead;
