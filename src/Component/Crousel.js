import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Card.css"

function Crousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=1380&t=st=1683480032~exp=1683480632~hmac=a838d52f323c62bbf79ed5fa24329c5d58bfead2100466f49b326618748ab22a"
          alt="First slide"
          height="600px"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?w=1060&t=st=1683480145~exp=1683480745~hmac=9d518235c14e1e69e7bc074fda257c87a7f92bc5fc239e9c09c6d5657e734c90"
          alt="Second slide"
          height="600px"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/glowing-blue-cuircuit-lines-diagram_1017-33018.jpg?w=1380&t=st=1683480193~exp=1683480793~hmac=b6f1461e4921d507b27fabf664e987cd3a27ea8682e7b6970920a260bc4a9e6c"
          alt="Third slide"
          height="600px"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousel;