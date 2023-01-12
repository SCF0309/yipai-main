import React from "react";
import { Link } from "react-router-dom";
import "./artist.css";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import cat from './cat.jpeg'
import artist_head from './artist_head.png'
// import { Button } from 'react-bootstrap';

function Artist() {
  return (
    <>
      <header>
        <div class="banner">
          <div class="artistImg"></div>
        </div>
      </header>
      <div class="container">
        <div class="main-content">
          <nav class="aside-menu">
            <h3>藝術家</h3>
            <hr />
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                依名字排序
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">升冪</Dropdown.Item>
                <Dropdown.Item href="#/action-2">降冪</Dropdown.Item> 
              </Dropdown.Menu>
            </Dropdown>
            <br />
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                依總銷售量
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">升冪</Dropdown.Item>
                <Dropdown.Item href="#/action-2">降冪</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </nav>
          <main>
            <div className="d-flex justify-content-between m-2">
              <div className="col1 text-nowrap d-inline-flex">
                <Link to="/" className="text-nowrap">
                  <p>首頁</p>
                </Link>
                <Link to="#" className="text-nowrap">
                  <p>▷藝術家</p>
                </Link>                
              </div>
              
              <div className="col-7"></div>
              <Button className="button col-4 text-nowrap" variant="dark">
                由新至舊
              </Button>
            </div>
            <div className="container main-card mt-0">
              <div className="row align-items-start">
                <div className="col main-card-item py-4">
                  <Link to="spacedetail">
                    <div className='yipai__artistbox'>
                    <img src={cat}/>
                      <div class="container card-body text-bg-secondary size280">
                        <div class="artistHead py-5">                        
                        </div>
                        <h4>Yannick Aaron</h4>
                        <h4 className="main-card-item-text">French</h4>                                                
                      </div>                      
                    </div>
                  </Link>
                </div>
                <div className="col main-card-item py-4">
                <Link to="spacedetail">
                    <div className='yipai__artistbox'>
                      <img src={cat}/>
                      <div class="container text-bg-secondary mb-5">
                        <div class="artistHead py-5">                        
                        </div>
                        <h4>Yannick Aaron</h4>
                        <h4 className="main-card-item-text">French</h4>                                                
                      </div>                      
                    </div>
                  </Link>
                </div>
                <div className="col main-card-item py-4">
                <Link to="spacedetail">
                    <div className='yipai__artistbox'>
                      <img src={cat}/>
                      <div class="container text-bg-secondary mb-5">
                        <div class="artistHead py-5">                        
                        </div>
                        <h4>Yannick Aaron</h4>
                        <h4 className="main-card-item-text">French</h4>                                                
                      </div>                      
                    </div>
                  </Link>
                </div>
                <div className="col main-card-item py-4">
                <Link to="spacedetail">
                    <div className='yipai__artistbox'>
                      <img src={cat}/>
                      <div class="container text-bg-secondary ">
                        <div class="artistHead py-5">                        
                        </div>
                        <h4>Yannick Aaron</h4>
                        <h4 className="main-card-item-text">French</h4>                                                
                      </div>                      
                    </div>
                  </Link>
                </div>
                <div className="col main-card-item py-4">
                  <Link to="spacedetail">
                    <div className='yipai__artistbox'>
                      <img src={cat}/>
                      <div class="container text-bg-secondary mb-5">
                        <div class="artistHead py-5">                        
                        </div>
                        <h4>Yannick Aaron</h4>
                        <h4 className="main-card-item-text">French</h4>                                                
                      </div>                      
                    </div>
                  </Link>
                </div> 
                <div className="col main-card-item py-4">
                  <Link to="spacedetail">
                    <div className='yipai__artistbox'>
                      <img src={cat}/>
                      <div class="container text-bg-secondary mb-5">
                        <div class="artistHead py-5">                        
                        </div>
                        <h4>Yannick Aaron</h4>
                        <h4 className="main-card-item-text">French</h4>                                                
                      </div>                      
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Pagination className="justify-content-end mt-4">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                {/* <Pagination.Ellipsis /> */}
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Artist;
