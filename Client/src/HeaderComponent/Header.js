import './Header.css'
function Header()
{
    return(
        <div>
            {/* Header Start */}
        <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">Discover the <span class="text-primary">Perfect Crop</span> by entering the required data in the form below.</h1>
                    <p class="animated fadeIn mb-4 pb-2">
Crop prediction based on soil nutrition values involves analyzing the nutrient composition of the soil, which includes parameters such as nitrogen, phosphorus, potassium, pH levels, organic matter, and other essential nutrients. This analysis helps determine the suitability of the soil for different crops.</p>
                    <a href="" class="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <div class="owl-carousel header-carousel">
                        <div class="owl-carousel-item">
                            <img class="img-fluid" src="assests/img/carousel-1.jpg" alt=""/>
                        </div>
                        <div class="owl-carousel-item">
                            <img class="img-fluid" src="assests/img/carousel-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Header End */}
        </div>
    )
}
export default Header;