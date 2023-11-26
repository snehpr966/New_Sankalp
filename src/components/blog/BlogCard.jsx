import React from "react"
import { blog } from "../../dummydata"

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
            <div className='admin flexSB'>
              <span>
              <i class="fa fa-bell" aria-hidden="true"></i>
              </span>
              
            </div>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
           <button type="button"><a href="https://docs.google.com/spreadsheets/d/1vy6a5EkTy0Q9-MbBchT5Hb7Pw4ENH53A/edit#gid=1159527586">Click Here</a></button>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard
