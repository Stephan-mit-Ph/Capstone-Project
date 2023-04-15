import Image from 'next/image'

function Category({ category }) {
     return (
          <>
               <h3>{category.name}</h3>
               <Image
                    src={category.image}
                    alt={`Category: ${category.name}`}
                    width={300}
                    height={300}
               />
          </>
     )
}

export default Category
