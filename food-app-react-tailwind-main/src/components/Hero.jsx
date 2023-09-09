import React from "react";
import { Carousel } from "react-carousel-minimal";
import BlogsData from '../backend/BlogsData.json';
const Hero = () => {
 const data=BlogsData.data;

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  

  return (
    <>

    <div className="max-w-[1640px] mx-auto p-4 mb-16">
      <div className="max-h-[500px] relative">
        <div className="App">
          <div style={{ textAlign: "center" }}>
            {/* <div
              style={{
                padding: "0 20px",
              }}
            > */}
              <Carousel
                data={data}
                
                time={2000}
                width="5550px"
                height="500px"
               
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="white"
                slideImageFit="contain"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  // maxWidth: "850px",
                  // maxHeight: "500px",
                
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div> 
      
    </div>
  
    </>

  );
};

export default Hero;
