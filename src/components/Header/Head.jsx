import React from 'react'

export const Head = () => {
  return (
    <>
    <section className="head">
        <div className="container d_flex">
            <div className="left row">
                <i className="fa fa-phone"></i>
                <label htmlFor="">+0123456789</label>
                <i className="fa fa-envelope"></i>
                <label htmlFor="">dev@gmail.com</label>
            </div>
            <div className="right row right-text">
                <label htmlFor="">Theme FAQ's</label>
                <label htmlFor="">Need Help ?</label>
            </div>
        </div>
    </section>
    </>
  )
}

export default Head;