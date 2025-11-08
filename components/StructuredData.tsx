import { Helmet } from 'react-helmet-async'

interface StructuredDataProps {
  type: 'home' | 'service' | 'portfolio' | 'contact'
  pageData?: {
    name?: string
    description?: string
    image?: string
    serviceType?: string
    price?: string
  }
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, pageData }) => {
  
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://jeslovesinterior.com/#organization",
          "name": "Jes Love's Interior Design Studio",
          "alternateName": "Jes Love Interior",
          "url": "https://jeslovesinterior.com",
          "description": "Award-winning luxury interior design studio specializing in residential and commercial spaces in Groton, Connecticut and surrounding areas.",
          "telephone": "+1-860-XXX-XXXX",
          "priceRange": "$$$$",
          "image": "https://jeslovesinterior.com/images/logo.png",
          "logo": "https://jeslovesinterior.com/images/logo.png",
          "founder": {
            "@type": "Person", 
            "name": "Jes Love",
            "jobTitle": "Interior Designer",
            "description": "Award-winning luxury interior designer with 15+ years of experience transforming residential and commercial spaces."
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Groton",
            "addressRegion": "Connecticut", 
            "addressCountry": "United States",
            "postalCode": "06340"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.3501",
            "longitude": "-72.0790"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Groton",
              "containedInPlace": "Connecticut, US"
            },
            {
              "@type": "City", 
              "name": "New London",
              "containedInPlace": "Connecticut, US"
            },
            {
              "@type": "City",
              "name": "Mystic", 
              "containedInPlace": "Connecticut, US"
            },
            {
              "@type": "City",
              "name": "Norwich",
              "containedInPlace": "Connecticut, US"
            }
          ],
          "serviceArea": {
            "@type": "State",
            "name": "Connecticut"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Interior Design Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Interior Design",
                  "description": "Custom luxury home interior design services",
                  "category": "Interior Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Commercial Interior Design",
                  "description": "Professional commercial space design services",
                  "category": "Interior Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Design Consultation", 
                  "description": "Expert interior design consultation services",
                  "category": "Interior Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full Renovation Management",
                  "description": "Complete project management for interior renovations", 
                  "category": "Interior Design"
                }
              }
            ]
          },
          "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 10:00-16:00"
          ],
          "sameAs": [
            "https://www.instagram.com/jeslovesinterior",
            "https://www.facebook.com/jeslovesinterior",
            "https://www.houzz.com/jeslovesinterior",
            "https://www.linkedin.com/company/jeslovesinterior"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "WebSite", 
          "@id": "https://jeslovesinterior.com/#website",
          "url": "https://jeslovesinterior.com",
          "name": "Jes Love's Interior Design Studio",
          "description": "Luxury interior design services in Groton, CT",
          "publisher": {
            "@id": "https://jeslovesinterior.com/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint", 
              "urlTemplate": "https://jeslovesinterior.com/?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    }

    // Add page-specific structured data
    if (type === 'service' && pageData) {
      (baseData['@graph'] as any).push({
        "@type": "Service",
        "name": pageData.name || "Interior Design Service",
        "description": pageData.description || "Professional interior design service",
        "provider": {
          "@id": "https://jeslovesinterior.com/#organization"
        },
        "serviceType": pageData.serviceType || "Interior Design",
        "image": pageData.image || "https://jeslovesinterior.com/images/logo.png",
        "offers": {
          "@type": "Offer",
          "price": pageData.price || "Contact for pricing",
          "priceCurrency": "USD",
          "availability": "InStock"
        }
      })
    }

    if (type === 'portfolio') {
      (baseData['@graph'] as any).push({
        "@type": "Collection",
        "name": "Interior Design Portfolio",
        "description": "Showcase of completed luxury interior design projects by Jes Love's Interior Design Studio",
        "creator": {
          "@id": "https://jeslovesinterior.com/#organization"
        },
        "url": "https://jeslovesinterior.com/#portfolio"
      })
    }

    return baseData
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  )
}

export default StructuredData