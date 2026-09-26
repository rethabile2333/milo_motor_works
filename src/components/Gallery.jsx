import { useState } from "react";
import { X, ZoomIn, Play } from "lucide-react";

const galleryImages = [
  {
    image: "/repair.jpeg",
    title: "Vehicle Repair",
    category: "Mechanical Repair"
  },

  {
    image: "/workshop.jpeg",
    title: "Workshop Service",
    category: "Automotive Service"
  },

  {
    image: "/engine.jpeg",
    title: "Engine Work",
    category: "Engine Repair"
  },

  {
    image: "/service.jpeg",
    title: "Vehicle Service",
    category: "Maintenance"
  },

  {
    image: "/completed.jpeg",
    title: "Completed Work",
    category: "Finished Project"
  }
];

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="section gallery" id="gallery">

      <div className="container">

        <div className="section-heading center">

          <span className="section-label">
            OUR WORK
          </span>

          <h2>
            Work We've
            <span> Done</span>
          </h2>

          <p>
            Take a look at some of the automotive repair and
            maintenance work completed by Milo Motor Works.
          </p>

        </div>


        {/* GALLERY */}

        <div className="gallery-grid">

          {/* IMAGE GALLERY */}

          {galleryImages.map((item, index) => (

            <div
              className="gallery-item"
              key={index}
              onClick={() => setSelectedImage(item)}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>

                <ZoomIn size={26} />

              </div>

            </div>

          ))}


          {/* VEHICLE PAINTING VIDEO */}

          <div
            className="gallery-item gallery-video-item"
            onClick={() => setShowVideo(true)}
          >

            <video
              src="/vehicle-painting.mp4"
              muted
              loop
              autoPlay
              playsInline
            />

            <div className="gallery-overlay">

              <div>
                <span>Automotive Painting</span>

                <h3>
                  Vehicle Painting
                </h3>
              </div>

              <div className="video-play-icon">
                <Play
                  size={25}
                  fill="currentColor"
                />
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* IMAGE LIGHTBOX */}

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="close-lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <X size={30} />
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            onClick={(e) => e.stopPropagation()}
          />

          <div className="lightbox-caption">

            <span>
              {selectedImage.category}
            </span>

            <h3>
              {selectedImage.title}
            </h3>

          </div>

        </div>

      )}


      {/* VIDEO LIGHTBOX */}

      {showVideo && (

        <div
          className="lightbox video-lightbox"
          onClick={() => setShowVideo(false)}
        >

          <button
            className="close-lightbox"
            onClick={() => setShowVideo(false)}
          >
            <X size={30} />
          </button>

          <video
            src="/vehicle-painting.mp4"
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          />

          <div className="lightbox-caption">

            <span>
              Automotive Painting
            </span>

            <h3>
              Vehicle Painting Work
            </h3>

          </div>

        </div>

      )}

    </section>
  );
}

export default Gallery;