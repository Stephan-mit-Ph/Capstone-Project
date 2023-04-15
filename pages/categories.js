import Image from 'next/image'

function Categeories({ categories }) {
     return (
          <>
               <h2>All Categories</h2>
               {categories.map((category) => {
                    return (
                         <div key={category.id}>
                              <h3>{category.name}</h3>
                              <Image
                                   src={category.image}
                                   alt={`Category: ${category.name}`}
                                   width={300}
                                   height={300}
                              />
                         </div>
                    )
               })}
          </>
     )
}

export default Categeories

export async function getStaticProps() {
     const response = await fetch(
          'http://localhost:3000/api/categories'
     )
     const data = await response.json()
     console.log(data)

     return {
          props: {
               categories: data,
          },
     }
}
