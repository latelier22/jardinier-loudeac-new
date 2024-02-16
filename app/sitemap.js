// app/sitemap.js

// L'URL de votre site
const URL = "https://www.jardinier-loudeac.fr"

// Vos routes statiques
const SITE_ROUTES = ["/", "/contact", "/desherbage", "/elaguage", "/pelouse", "/amenagement", "/travaux-divers"]

// "/entretien" },
//     { label: "Elaguage", route: "/elaguage" },
//     { label: "Pelouse", route: "/pelouse" },
//     { label: "Désherbage", route: "/desherbage" },
//     { label: "Aménagement", route: "/amenagement" },
//     { label: "Travaux divers", route: "/travaux-divers" },
//     { label: "Contact", route: "/contact" },




// Vos routes dynamiques
// Ici, on utilisera plus souvent le résultat d'un call API
// ou bien une fonction qui va récupérer les chemins de vos pages
// const getBlogPosts = () => {
//   return [{ slug: "nextjs-sitemap", date: "2024-01-01T08:00:00.000Z" }]
// }

export default async function sitemap() {
//   const posts = BLOG_POSTS.map(({ slug, date }) => ({
//     url: `${URL}/blog/${slug}`,
//     lastModified: date,
//   }))

  const routes = SITE_ROUTES.map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

//   return [...routes, ...posts]
  return [...routes]
}
