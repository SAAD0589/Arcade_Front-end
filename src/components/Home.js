import React, { useState, useEffect, createFactory } from 'react';
import axios from 'axios';
// import "../style.css";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import ReactPaginate from 'react-paginate';

import { Link } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Navbr';
import Navbr from './Navbr';
import Pagination from 'react-bootstrap/Pagination'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  const [games, setGames] = useState([]);
  const [Categorie, setCategorie] = useState([]);

  // Variable Pour Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/games?page=${currentPage}`);
        const { data, last_page } = response.data;
        setGames(data);
        setTotalPages(last_page);
      } catch (error) {
        console.log(error);
      }
    };
    //apple function
    fetchGames();
  }, [currentPage]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/Categorie")
      .then(res => {
        const test = res.data;
        setCategorie(test);
      })
  }, []);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };
  return (
    <div class="bodyHome">
      <Navbr />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/call2.jpg"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/khokho2.png"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/momo.png"
            alt="First slide"
          />

        </Carousel.Item>
      </Carousel>
      <div class=" text-light ">
        <div class="container pt-5 ">
          <div calss="">
            <p class="text-danger px-5  h4">
              BROWSE BY CATEGORY
            </p>
          </div>
          <div class="row px-5 pb-5 pt-3 ">
            <div class="col-sm-3  ">
              <a href="/Categorie/3">
                <div className="position-relative">
                  <img class="catIMG img-fluid" src='/img/Souls.jpg' />
                  <div className="overlay">
                    <div className="overlay-content">
                      <h5 className="overlay-title">souls</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-sm-3  ">
              <a href="/Categorie/1">
                <div className="position-relative">
                  <img class="catIMG img-fluid" src='/img/advanture.jpg' />
                  <div className="overlay">
                    <div className="overlay-content">
                      <h5 className="overlay-title">action-adventure</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-sm-3  ">
              <a href="/Categorie/2">
                <div className="position-relative">
                  <img class="catIMG img-fluid" src='/img/Survival.png' />
                  <div className="overlay">
                    <div className="overlay-content">
                      <h5 className="overlay-title">survival</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-sm-3  ">
              <a href="/Categorie/4">
                <div className="position-relative">
                  <img class="catIMG img-fluid " src='/img/racing.jpg' />
                  <div className="overlay">
                    <div className="overlay-content">
                      <h5 className="overlay-title">Racing</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="" id="Games">
        <div class="container p-5">
          <div>
            <h4 class="text-danger">
              Top Games
            </h4>
            <h2 class='text-light'>Most downloaded</h2>
          </div>
          <div class="row ">
            {games.map((a) => {
              return (
                <div class="col-sm-3 " >
                  <a href={`/game/${a.id_game}`}>
                    <div class="card my-3 bg3">
                      <img className="card-img-top  "
                        src={`img/image/${a.image_game}`}
                        alt="Card image cap" />
                      <div className="card-body row">
                        <small className="text-center text-bold">
                          {a.name_game}
                        </small>
                      </div>
                    </div>
                  </a>
                </div>


              );
            })}

            <div class="position-relative">
              <div className='position-absolute top-50 start-50 translate-middle my-4'>
                <ReactPaginate
                  pageCount={totalPages}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={1}
                  onPageChange={handlePageChange}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                  previousLabel={'Previous'}
                  nextLabel={'Next'}
                  breakLabel={'...'}
                  breakClassName={'page-item'}
                  breakLinkClassName={'page-link'}
                  pageClassName={'page-item'}
                  pageLinkClassName={'page-link'}
                  previousClassName={'page-item'}
                  previousLinkClassName={'page-link'}
                  nextClassName={'page-item'}
                  nextLinkClassName={'page-link'}
                /></div></div>
          </div>
        </div>
      </div>
      <div >
        <Footer></Footer>
      </div>

      <div>

      </div>

    </div>
  )
}