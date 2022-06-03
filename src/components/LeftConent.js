import React from 'react'
import { Link } from 'react-router-dom';
function LeftConent() {
  return (
    // <div>
        <div className='row'>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://i.picsum.photos/id/372/200/300.jpg?grayscale&hmac=s1kZeGEVsozh8gSDtyyFn-ssukemkrwBNcnuWIiJsV4" className="card-img-top" style={{height:"200px"}} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://i.picsum.photos/id/372/200/300.jpg?grayscale&hmac=s1kZeGEVsozh8gSDtyyFn-ssukemkrwBNcnuWIiJsV4" className="card-img-top" alt="..." style={{height:"200px"}}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://i.picsum.photos/id/372/200/300.jpg?grayscale&hmac=s1kZeGEVsozh8gSDtyyFn-ssukemkrwBNcnuWIiJsV4" className="card-img-top" alt="..." style={{height:"200px"}}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://i.picsum.photos/id/372/200/300.jpg?grayscale&hmac=s1kZeGEVsozh8gSDtyyFn-ssukemkrwBNcnuWIiJsV4" className="card-img-top" alt="..." style={{height:"200px"}}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://i.picsum.photos/id/372/200/300.jpg?grayscale&hmac=s1kZeGEVsozh8gSDtyyFn-ssukemkrwBNcnuWIiJsV4" className="card-img-top" alt="..." style={{height:"200px"}}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://i.picsum.photos/id/372/200/300.jpg?grayscale&hmac=s1kZeGEVsozh8gSDtyyFn-ssukemkrwBNcnuWIiJsV4" className="card-img-top" alt="..." style={{height:"200px"}}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    // </div>
  )
}

export default LeftConent