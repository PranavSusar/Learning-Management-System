import React from "react";
import Carousel from "react-bootstrap/Carousel";

function SlideShow() {
	<Carousel>
		<Carousel.Item interval={1000}>
			<h3>First slide label</h3>
			<Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={1000}>
			<h3>Second slide label</h3>
			<Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={1000}>
			<h3>Third slide label</h3>
			<Carousel.Caption>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>;
}

export default SlideShow;
