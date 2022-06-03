import React from 'react'
function RightContent() {
    const handleSubmit = async(e) =>{
        alert('HandleSubmit');
        e.preventDefault();
    }
    /** Clear Function Apply */
    const clear = () =>{
        alert('Hello Alert');
    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Title" className="form-label">Title</label>
                <input type="text" className="form-control" name='title' id="Title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <input type="message" className="form-control" name="message" id="message"/>
            </div>
            <div className="mb-3">
                <label htmlFor="creator" className="form-label">Creator</label>
                <input type="creator" className="form-control" name="creator" id="creator"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="tags" className="form-control" name="tags" id="message"/>
            </div>
            <div className="mb-3">
                <input class="form-control form-control" id="selectedFile" name='selectedFile' type="file"/>
            </div>
            <button type="submit"  className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-danger" onClick={clear}> Clear </button>
        </form>
    </div>
  )
}

export default RightContent