import TeacherSlider from './TeachersSlider';
import heroImg from './assets/hero_img.jpg';
import logo from './assets/app_logo.png';
function App() {
  const phoneNumber = "1155225015";
  const message = "Hello Mr Mohamed Adel, This is a demo message....";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg pt-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className='img-fluid' style={{width: 8+"rem"}}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link">Contact us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our Teachers</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <div className="row align-items-center mt-4">
        <div className="d-xxl-none d-xl-none d-lg-none d-md-none col-sm-12 d-sm-inline">
          <img src={heroImg} className='img-fluid' />
        </div>
        <div className="col-md-6 col-sm-12">
          <h1 className="fw-bolder"><span style={{ color: "#31A8D8" }}>Tired of Struggling?</span><br />Meet amazing teachers who make learning fun and effective!</h1>
          <p className='lead'>Learning Shouldn't Be a Drag. Find Your Perfect Tutor Today!</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className='btn btn-warning p-2 action-btn'>
            <i class="bi bi-whatsapp me-1"></i>
            Contact us on WhatsApp
          </a>
        </div>
        <div className="col-md-6 d-md-inline d-none">
          <img src={heroImg} className='img-fluid' />
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-12'>
          <h3>Our Teachers</h3>
        </div>
      </div>
      <TeacherSlider />
    </div>
  );
}

export default App;
