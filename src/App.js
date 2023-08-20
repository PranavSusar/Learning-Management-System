import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import NavScrollExample from "./Navigation/NavBar";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import "./App.css";

function App() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
		const { totalItems, currentSlide } = carouselState;
		return (
			<div className="custom-button-group">
				<div>Current slide is {currentSlide}</div>
				<button onClick={() => previous()}>Previous slide</button>
				<button onClick={() => next()}>Next slide</button>
				<button
					onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
				>
					Go to a random slide
				</button>
			</div>
		);
	};
	return (
		<BrowserRouter>
			<NavScrollExample />
			{/* <Carousel
				arrows={false}
				containerClass="container-padding-bottom"
				// customButtonGroup={<CustomButtonGroup />}
				swipeable={true}
				draggable={false}
				showDots={true}
				responsive={responsive}
				autoPlaySpeed={1000}
				customTransition="all .5"
				transitionDuration={1000}
			>
				<img src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?pid=ImgDet&rs=1"></img>
				<img src="https://th.bing.com/th/id/OIP.xung4mlBfvUR3RKzjnRY2AHaEK?pid=ImgDet&rs=1"></img>
				<img src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?pid=ImgDet&rs=1"></img>
				<img src="https://th.bing.com/th/id/OIP.pOH7E5aP-rcsn8rFsOuKIQHaF3?pid=ImgDet&rs=1"></img>
				<img src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?pid=ImgDet&rs=1"></img>
        <img src="https://th.bing.com/th/id/OIP.pOH7E5aP-rcsn8rFsOuKIQHaF3?pid=ImgDet&rs=1"></img>
			</Carousel>
			; */}

			<Carousel>
				<Carousel.Item interval={1000}>
					{/* <ExampleCarouselImage text="First slide" /> */}
          {/* <img src="https://th.bing.com/th/id/OIP.xung4mlBfvUR3RKzjnRY2AHaEK?pid=ImgDet&rs=1"></img> */}
						<h3>First slide label</h3>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					{/* <ExampleCarouselImage text="Second slide" /> */}
          {/* <img src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?pid=ImgDet&rs=1"></img> */}
						<h3>Second slide label</h3>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					{/* <ExampleCarouselImage text="Third slide" /> */}
          {/* <img src="https://th.bing.com/th/id/OIP.pOH7E5aP-rcsn8rFsOuKIQHaF3?pid=ImgDet&rs=1"></img> */}
						<h3>Third slide label</h3>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Routes>
				<Route path="/" />
				<Route path="/dash" element={<Dashboard />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
