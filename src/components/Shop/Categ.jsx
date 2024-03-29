import React from 'react'

const Categ = () => {
    const data = [
        {
          cateImg: "./assets/brand/apple.png",
          cateName: "Apple",
        },
        {
          cateImg: "./assets/brand/samsung.png",
          cateName: "Samasung",
        },
        {
          cateImg: "./assets/brand/oppo.jpg",
          cateName: "Oppo",
        },
        {
          cateImg: "./assets/brand/vivo.png",
          cateName: "Vivo",
        },
        {
          cateImg: "./assets/brand/redmi.png",
          cateName: "Redmi",
        },
        {
          cateImg: "./assets/brand/sony.png",
          cateName: "Sony",
        },
      ]
  return (
    <>
    <div className="category">
        <div className='chead d_flex'>
            <h1>Brand</h1>
            <h1>Shop</h1>
        </div>
        {data.map((value,index)=>{
                return(
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
            }
        )}
        <div className="box box2"><button>View All Brands</button></div>
    </div>
    </>
  )
}

export default Categ