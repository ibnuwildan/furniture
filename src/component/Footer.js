function FooterBar() {
  return (
    <footer className="footer bg-light text-dark" bg="dark" data-bs-theme="dark">
      <hr class="md-1" />
      <div className="container pt-3 ">
        <div className="footer-row row ">
          <div className="footer-col col-md-3">
            <h2 className="footer-brand fw-bold">
              <span style={{ color: "orange", fontSize: "50px" }}>p</span>anto
            </h2>
            <p style={{ textAlign: "justify", paddingTop: "10px", paddingRight: "70px", color: "black" }}>Provide a good solution for your home. prioritizing comfort and health for a better future.</p>
          </div>
          <div className="footer-col col-md-3 " style={{ textDecorationStyle: "none" }}>
            <h5 className="text-header-footer"> Service </h5>
            <p>
              <a href="/">Email Marketing</a>
            </p>
            <p>
              <a href="/">Campaigns</a>
            </p>
            <p>
              <a href="/">Branding</a>
            </p>
          </div>
          <div className="footer-col col-md-3">
            <h5 className="text-header-footer"> Furniture </h5>
            <p>
              <a href="/bed">Bed</a>
            </p>
            <p>
              <a href="/chair">Chair</a>
            </p>
            <p>
              <a href="/sofa">Sofa</a>
            </p>
          </div>
          <div className="footer-col col-md-3 ">
            <h5 className="text-header-footer"> Follow Us </h5>
            <p>
              <a href="/">
                <img src={require("../img/fb.png")} alt="img-fluid" /> Facebook
              </a>
            </p>
            <p>
              <a href="/">
                <img src={require("../img/instagram.png")} alt="img-fluid" /> Instagram
              </a>
            </p>
            <p>
              <a href="/">
                <img src={require("../img/wa.png")} alt="img-fluid" /> WhatsaApp
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr class="md-1" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-8 text-start text-muted">
            <p>
              Copyright ©2022 All rigths reserved by:
              <a href="/" style={{ textDecoration: "none" }}>
                <strong class="text-warning "> The Providers</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
