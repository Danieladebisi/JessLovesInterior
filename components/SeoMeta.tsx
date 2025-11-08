import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SeoMetaProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
}

/**
 * This component dynamically updates the document head.
 * Pass in props for title, description, and keywords
 * for each page of your application.
 */
const SeoMeta: React.FC<SeoMetaProps> = ({
  title,
  description,
  keywords,
  image = '/images/logo.png',
  url = 'https://jeslovesinterior.com/'
}) => {
  // Get the base title from the site's brand
  const siteTitle = "Jes Love's Interior Design Studio"
  // Create the full page title
  const pageTitle = `${title} | ${siteTitle}`
  
  // Social media image (use logo as default)
  const socialImage = image.startsWith('http') ? image : `https://jeslovesinterior.com${image}`

  return (
    <Helmet>
      {/* --- Primary Meta Tags --- */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Jes Love's Interior Design Studio" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en-US" />
      <meta name="geo.region" content="US-CT" />
      <meta name="geo.placename" content="Groton, Connecticut" />
      
      {/* --- Open Graph / Facebook / Social Media --- */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Jes Love's Interior Design Studio" />
      <meta property="og:locale" content="en_US" />
      
      {/* --- Twitter --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:creator" content="@jeslovesinterior" />
      
      {/* --- Local Business Schema --- */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://jeslovesinterior.com/#organization",
          "name": "Jes Love's Interior Design Studio",
          "description": "Award-winning luxury interior design studio in Groton, CT specializing in residential and commercial spaces.",
          "url": "https://jeslovesinterior.com",
          "telephone": "+1-860-XXX-XXXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Groton",
            "addressLocality": "Groton",
            "addressRegion": "CT",
            "postalCode": "06340",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.3501",
            "longitude": "-72.0790"
          },
          "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 10:00-16:00"
          ],
          "priceRange": "$$$$",
          "serviceArea": {
            "@type": "State",
            "name": "Connecticut"
          },
          "areaServed": [
            "Groton, CT",
            "New London, CT", 
            "Mystic, CT",
            "Norwich, CT",
            "Greenwich, CT"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Interior Design Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Interior Design"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Interior Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Design Consultation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full Renovation Services"
                }
              }
            ]
          },
          "sameAs": [
            "https://www.instagram.com/jeslovesinterior",
            "https://www.facebook.com/jeslovesinterior",
            "https://www.houzz.com/jeslovesinterior"
          ]
        })}
      </script>
      
      {/* --- Canonical URL --- */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SeoMeta