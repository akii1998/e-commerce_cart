import React from "react";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/assets/about.webp" class="d-block w-100" alt="Shopping_poster_4" height={"500px"}/>
    </div>
    <div class="carousel-item">
      <img src="/assets/about.webp" class="d-block w-100" alt="Shopping_poster_4" height={"500px"}/>
    </div>
    <div class="carousel-item">
      <img src="/assets/about.webp" class="d-block w-100" alt="Shopping_poster_4" height={"500px"}/>
    </div>
    <div class="carousel-item">
      <img src="/assets/about.webp" class="d-block w-100" alt="Shopping_poster_4"  height={"500px"}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 
        <Product/>
      </div>
   
  );
};

export default Home;




// {/* <div className="hero">
// <div className="card text-white border-0">
//   <img
//     src="/assets/bg1.jpg"
//     className="card-img"
//     alt="BackGround"
//     height={"550px"}
//   />
//   <div className="card-img-overlay d-flex flex-column justify-content-center ">
//     <div className="container">
//       <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
//       <p className="card-text lead fs-2">
//         CHECK OUT ALL THE TENDS 
//       </p>
//     </div>
//   </div>
// </div>
// <Product/>
// </div> */}


// {/* <div id="carouselExampleCaptions" className="carousel slide">
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="3"
//             aria-label="Slide 4"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src="/assets/error.jpg"
//               className="d-block w-100"
//               alt="Shopping_poster_4"
//               height={"500px"}
//             />
//             <div className="carousel-caption d-none d-md-block"></div>
//           </div>
//           <div className="carousel-item">
//             <img
//               src="/assets/bg1.jpg"
//               className="d-block w-100"
//               alt="Shopping_poster_4"
//               height={"500px"}
//             />
//             <div className="carousel-caption d-none d-md-block"></div>
//           </div>
//           <div className="carousel-item">
//             <img
//               src="/assets/about.webp"
//               className="d-block w-100"
//               alt="Shopping_poster_4"
//               height={"500px"}
//             />
//             <div className="carousel-caption d-none d-md-block"></div>
//           </div>
//           <div className="carousel-item">
//             <img
//               src="/assets/about.webp"
//               className="d-block w-100"
//               alt="Shopping_poster_4"
//               height={"500px"}
//             />
//             <div className="carousel-caption d-none d-md-block"></div>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button> */}