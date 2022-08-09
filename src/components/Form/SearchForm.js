import React from 'react'

function SearchForm(props) {
  const searchPost = (event) =>{
      props.onChangeSearch(event.target.value)
  }
  return (
    <>
      <div className='mt-3'>
        <h2>Search items</h2>
        <div className="mb-3">
          <input type="text" className="form-control" name="search" id="title" placeholder="search ..." onChange={searchPost} />
        </div>
      </div>
        
    </>
  )
}

export default SearchForm