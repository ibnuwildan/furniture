import React from "react";
const AboutPage = () => {
  return (
    <div className="about bg-light">
      <div className="header-about">
        <img src={require("../img/carousel/abot-company.png")} className="img-fluid" alt="" />
        <div className="container">
          <div className="header-text py-5">
            <h3 className="text-center">Our Company</h3>
            <div className="headers1 d-flex flex-row bd-highlight text-center justify-content-center pt-3">
              <div className="px-5">
                <h5>
                  <a href="/" style={{ color: "black" }}>
                    Our Company
                  </a>
                </h5>
              </div>
              <div className="px-5">
                <h5>
                  <a href="/" style={{ color: "black" }}>
                    Our Factories
                  </a>
                </h5>
              </div>
              {/* <div class="col-2 ">One of two columns</div>
              <div class="col-2 ">One of two columns</div> */}
            </div>
          </div>
          <div className="hedaer-img">
            <img src={require("../img/carousel/abot-company.png")} className="img-fluid" alt="" />
            <div className="img-text3 text-center mx-5 pt-5">
              PLAIN HOMELAND founded in 2006,which is a modern furnishing enterprise covering R&D,production,sell and after-sale service.
              <br />
              PLAIN HOMELAND still keeps consistent with quality in order to let more people easily achieve a better home life.Through decades of years, brand has been constantly upgrading to satisify demands of upscale groups. <br />
              PLAIN HOMELAND devotes to be an intertional competitive furnishing enterprise.
            </div>
            <div className="d-flex flex-row bd-highlight text-center justify-content-center pt-5">
              <div className="img-text p-2 mx-3">
                <h3> 17 YRS</h3>
                <p>Focus On Home Furniture</p>
              </div>
              <div className="img-text p-2 mx-3 ">
                <h3>100.000 m</h3>
                <p>Modern Factories</p>
              </div>
              <div className="img-text p-2 mx-3">
                <h3>200+</h3>
                <p> Nation & Industry Patents</p>
              </div>
              <div className="img-text p-2 mx-3">
                <h3>30M+</h3>
                <p> Production Volume Per Month</p>
              </div>
            </div>
            <img src={require("../img/carousel/abot-company.png")} className="img-fluid pt-5" alt="" />
            <div className=" text-center pt-5">
              <h3>OUR GENERAL HEADQUARTERS</h3>
              <p>
                PLAIN HOMELAND is located in Sunlink,Lecong Town,Shunde District,Guangdong Province, owning 5000㎡ work space with minimalism design and advanced, humanized equipment to creat a comfortable and convenient work environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
