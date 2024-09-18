import img from '../components/grocery.jpg'
import img1 from '../components/image 3.jpg'
import img2 from '../components/mobile phones.png'
import img3 from '../components/fashion png.png'
import img4 from '../components/electronics.png'
import img5 from '../components/home.png'
import img6 from '../components/appliances123.jpg'
import img7 from '../components/travel.jpg'
import img8 from '../components/beauty.jpg'

function Body() {
    return (

        <div class="container a2">
            <div class="row mt-4">
                <div class='col'>
                   <p> <img src={img}></img></p>
                    <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        grocery
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>
                <div class='col'>
                   <p> <img src={img1}></img></p>
                    <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Two Wheeler
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>

                <div class='col'>
                   <p> <img src={img2}></img></p>
                    <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mobiles
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>
                <div class='col'>
                   <p> <img src={img3}></img></p>
                    <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fashion
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>
                <div class='col'>
                   <p><img src={img4}></img></p>
                    <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Electronics
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>
                <div class='col'>
                   <p><img src={img5}></img></p>
                    <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Home & Furniture
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>
                <div class='col'>
                   <p><img src={img6}></img></p>
                    <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Appliances
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>
                <div class='col'>
                   <p><img src={img7}></img></p>
                    <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Travel
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>
                <div class='col'>
                   <p><img src={img8}></img></p>
                    <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Beauty,Toys & More
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>
            </div>

        </div>
        
    );
}

export default Body;