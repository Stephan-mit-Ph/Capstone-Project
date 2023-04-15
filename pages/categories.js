import Category from '../components/Category'

function Categeories({ categories }) {
     return (
          <>
               <h2>All Categories</h2>
               {categories.map((category) => {
                    return (
                         <div key={category.id}>
                              <Category category={category} />
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
