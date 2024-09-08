import React from "react";
import PlaceCard from "./PlaceCard";
import h from "../../assets/places/h.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import l from "../../assets/places/l.png";
import d from "../../assets/places/d.jpg";
import j from "../../assets/places/j.jpg";

const PlacesData = [
  {
    img: h,
    title: "Kedarnath",
    location: "Himachal Pradesh, India",
    description: "Kedarnath Dham is one of the most revered pilgrimage centres of Northern India. Located at an altitude of 3,584 meters, amidst the snow-clad Himalayan peaks and on the banks of river Mandakini, this shrine is dedicated to Lord Shiva and is regarded as one of the 12 Jyotirlingas.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "UnderWater",
    location: "Maldive,India",
    description:"Maldives, independent island country in the north-central Indian Ocean. It consists of a chain of about 1,200 small coral islands and sandbanks (some 200 of which are inhabited), grouped in clusters, or atolls. The islands extend more than 510 miles (820 km) from north to south and 80 miles (130 km) from east to west",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: l,
    title: "Lotus Temple",
    location: "Delhi,India",
    description: "There are 9 pools that surround the Lotus temple signifying the leaves of a Lotus. The central prayer hall has a mind-boggling capacity of 2500 people and a height of 40m. The marble that has been used to make the floor of the Central Hall comes from the Penteli Mountain in Greece.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: d,
    title: "Ram Mandir",
    location: "Ayodha,India",
    description:
"The temple will be 250 feet (76 m) wide, 380 feet (120 m) long and 161 feet (49 m) high. Upon completion, the temple complex became the world's third largest Hindu temple. It is designed in the Māru-Gurjara architecture of Nagara style, a type of Hindu temple architecture found primarily in northern India.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: j,
    title: "Hawa Mahal",
    location: "Rajastan,India",
    description:"The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. It has a curved architecture that leans at an 87 degree angle",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
