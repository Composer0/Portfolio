import React from "react";
import OceanWater from "../../assets/mov/shortWater.mp4";
import BackgroundIMG from "../../assets/img/water.webp";

function BackgroundVideo() {
  return (
    <div>
      <video
        className="bg-video bg-video__content"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        src={OceanWater}
      />
      <div>
        <img className="full-bg-img " src={BackgroundIMG} alt="bg-img" />
      </div>
    </div>
  );
}

export default BackgroundVideo;
