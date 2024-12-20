import img from '../components/d1.webp'
import img1 from '../components/d2.webp'
import img2 from '../components/d3.webp'
import img3 from '../components/c8f548688def283c.webp'
import img4 from '../components/d4.webp'
function MainContent() {
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src= {img} class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                        <img src= {img1} class="d-block w-100" alt="..."></img>

                        </div>
                        <div class="carousel-item">
                        <img src= {img2} class="d-block w-100" alt="..."></img>

                        </div>
                        <div>
                        <img src= {img3} class="d-block w-100" alt="..."></img>

                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>


        </div>


    );
}

export default MainContent;