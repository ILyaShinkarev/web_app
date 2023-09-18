import React, {Component} from 'react';
import  Carousel  from 'react-bootstrap/Carousel'
import dronImg from '../assets/dron.jpg'
import lakeImg from '../assets/lake.jpg'
export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    height={1000}
                    className="d-block w-100"
                    src={dronImg}
                    alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3> Drone image </h3>
                        <p> Some text </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    height={1000}
                    className="d-block w-100"
                    src= {lakeImg}
                    alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3> Lake image </h3>
                        <p> Some text 2 </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    height={1000}
                    className="d-block w-100" 
                    src= {dronImg}
                    alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3> Drone image </h3>
                        <p> Some text 3 </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}