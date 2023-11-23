import './About.css'
function About()
{
    return(
        <div>
 {/* About Start */}
 <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="about-img position-relative overflow-hidden p-5 pe-0">
                            <img class="img-fluid w-100" src="assests/img/about.jpg"/>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="mb-4">#1 Place To Find The Perfect Crop</h1>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p><i class="fa fa-check text-primary me-3"></i>A centralized solution for all crops data</p>
                        <p><i class="fa fa-check text-primary me-3"></i>Best yield for crops</p>
                        <p><i class="fa fa-check text-primary me-3"></i>Know your soil</p>
                        <a class="btn btn-primary py-3 px-5 mt-3" href="#actionForm">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}
        </div>
    )
}
export default About;