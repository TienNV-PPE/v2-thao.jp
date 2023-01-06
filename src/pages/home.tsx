import MasterLayout from "@layouts/masterLayout";
import {BiArrowBack} from "react-icons/all";
import {Button, Space} from "antd";
import CourseItem from "../components/courses/courseItem";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 3000},
    items: 5
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1
  }
};

const home = () =>
  (
    <MasterLayout>

      <Space>
        <BiArrowBack className="text-[28px]"/>
        <h2 className="text-[28px]">N5: Tiếng nhật hàng ngày</h2>
        <Button>
          <Space>
            Lộ trình
            <img src="src/assets/images/icons/lo-trinh.png" alt=""/>
          </Space>
        </Button>
      </Space>
      <section className="">

        <Carousel responsive={responsive}>
          <CourseItem/>
          <CourseItem/>
          <CourseItem/>
          <CourseItem/>
          <CourseItem/>
        </Carousel>
      </section>


    </MasterLayout>
  )
export default home;
