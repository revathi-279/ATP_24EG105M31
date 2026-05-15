function Product(props) {
  const { productObj } = props

  return (
    <div className='p-4 rounded flex flex-col items-center text-center 
                    bg-gradient-to-tr from-blue-50 via-blue-100 to-white'>
      <img src={productObj.image} className='h-40 mb-3' />

      <h2>{productObj.title}</h2>

      <p>{productObj.category}</p>

      <p>{productObj.rating.rate} ({productObj.rating.count})</p>

      <p>{productObj.price}</p>
    </div>
  )
}

export default Product