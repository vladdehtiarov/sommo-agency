import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Sommo Agency';
const SITE_URL = 'https://sommoagency.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export const SEO = ({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  article,
  noindex = false,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - No-Code, Low-Code & AI Development Agency`;
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;

  const defaultDescription =
    'Sommo Agency builds digital products 10x faster using no-code, low-code, and AI technologies. ' +
    'Expert development with Bubble, WeWeb, FlutterFlow, and AI integration. 100+ successful projects.';

  const defaultKeywords =
    'no-code development, low-code solutions, AI development, Bubble developer, ' +
    'web app development, mobile app development, automation, Zapier, Make, ' +
    'MVP development, startup development, digital agency';

  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;

  // Structured Data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: defaultDescription,
    email: 'hello@sommoagency.com',
    sameAs: [
      'https://www.linkedin.com/company/sommo-agency/',
    ],
    foundingDate: '2019',
    founders: [
      {
        '@type': 'Person',
        name: 'Roman Samoilenko',
        jobTitle: 'CEO & Co-Founder',
      },
      {
        '@type': 'Person',
        name: 'Vlad Dehtiarov',
        jobTitle: 'CTO & Co-Founder',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UA',
    },
  };

  // Structured Data for WebSite (for sitelinks search box)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };

  // Structured Data for Article (if article prop is provided)
  const articleSchema = article ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: metaDescription,
    image: image,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
  } : null;

  // Structured Data for Service (for service pages)
  const serviceSchema = type === 'service' ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: metaDescription,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedDate} />
          <meta property="article:modified_time" content={article.modifiedDate || article.publishedDate} />
          <meta property="article:author" content={SITE_NAME} />
          {article.tags?.map((tag, index) => (
            <meta property="article:tag" content={tag} key={index} />
          ))}
        </>
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
  );
};

