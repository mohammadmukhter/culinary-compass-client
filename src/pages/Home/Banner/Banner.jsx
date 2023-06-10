import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import chineseImg from "../../../assets/banner/chinese.jpg";
import italianImg from "../../../assets/banner/itialian1.jpg";
import pastryImg from "../../../assets/banner/pastry.jpg";
import pastryImg2 from "../../../assets/banner/pastry2.jpg";

import { Link } from "react-router-dom";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import "./style.css";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="h-full relative" src={chineseImg} alt="" />
        <div className=" text-white absolute top-[30%] left-0 max-w-md mx-24">
          <div className="space-y-5">
            <h3 className="text-5xl font-semibold uppercase text-left">
              Enhance your extra curricular{" "}
              <span className="text-red-600 text-4xl underline">skills</span>{" "}
              during summer vacation with us.
            </h3>

            <div className="text-left">
              <Link to="classes">
                <SecondaryButton>Our Classes</SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-full relative" src={italianImg} alt="" />
        <div className=" text-white  absolute top-[30%] left-0 max-w-md mx-24">
          <div className="space-y-5">
            <h3 className="text-5xl font-semibold uppercase text-left">
              Learn How to make Italian Pasta! with our Italian chef
            </h3>

            <div className="text-left">
              <Link to="classes">
                <SecondaryButton>Our Classes</SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-full relative" src={pastryImg} alt="" />
        <div className=" text-white absolute top-[30%] left-0 max-w-md mx-24">
          <div className="space-y-5">
            <h3 className="text-5xl font-semibold uppercase text-left">
              Explore, how to make different types of Pastry Items and You can
              learn this.
            </h3>

            <div className="text-left">
              <Link to="classes">
                <SecondaryButton>Our Classes</SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-full relative" src={pastryImg2} alt="" />
        <div className=" text-white  absolute top-[30%] left-0 max-w-md mx-24">
          <div className="space-y-5">
            <h3 className="text-5xl font-semibold uppercase text-left">
              Explore, how to make different types of Pastry Items and You can
              learn this.
            </h3>

            <div className="text-left">
              <Link to="classes">
                <SecondaryButton>Our Classes</SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
