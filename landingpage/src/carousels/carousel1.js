import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Card } from "antd"
import { Pagination } from 'swiper/modules';
import Villas from '../Снимок экрана 2023-08-24 212118.png'
import Resorts from '../Снимок экрана 2023-08-24 192523_pixian.png'
import {LeftOutlined , RightOutlined} from "@ant-design/icons"


export default function App() {
    return (
        <>
            <Swiper style={{width:"100%"}}
                slides-per-view={3}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{borderRadius:"10px",height:"auto",width:"33%"}}>
                  <Card>
                  <img src={Resorts} alt="" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam omnis deserunt assumenda sed veritatis suscipit est reiciendis perspiciatis voluptatem atque dolorem consequuntur laboriosam possimus nihil saepe quis facilis voluptates doloribus pariatur blanditiis. Omnis iusto ut voluptas molestias, quas fugiat!
                  </Card>
                </SwiperSlide>
                <SwiperSlide style={{borderRadius:"10px",height:"auto",width:"33%"}}>
                  <Card>
                  <img src={Resorts} alt="" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam omnis deserunt assumenda sed veritatis suscipit est reiciendis perspiciatis voluptatem atque dolorem consequuntur laboriosam possimus nihil saepe quis facilis voluptates doloribus pariatur blanditiis. Omnis iusto ut voluptas molestias, quas fugiat!
                  </Card>
                </SwiperSlide>
                <SwiperSlide style={{borderRadius:"10px",height:"auto",width:"45%"}}>
                  <Card>
                  <img src={Resorts} alt="" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam omnis deserunt assumenda sed veritatis suscipit est reiciendis perspiciatis voluptatem atque dolorem consequuntur laboriosam possimus nihil saepe quis facilis voluptates doloribus pariatur blanditiis. Omnis iusto ut voluptas molestias, quas fugiat!
                  </Card>
                </SwiperSlide>  <SwiperSlide style={{borderRadius:"10px",height:"auto"}}>
                  <Card>
                  <img src={Resorts} alt="" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam omnis deserunt assumenda sed veritatis suscipit est reiciendis perspiciatis voluptatem atque dolorem consequuntur laboriosam possimus nihil saepe quis facilis voluptates doloribus pariatur blanditiis. Omnis iusto ut voluptas molestias, quas fugiat!
                  </Card>
                </SwiperSlide>  <SwiperSlide style={{borderRadius:"10px",height:"auto",width:"33%"}}>
                  <Card>
                  <img src={Resorts} alt="" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam omnis deserunt assumenda sed veritatis suscipit est reiciendis perspiciatis voluptatem atque dolorem consequuntur laboriosam possimus nihil saepe quis facilis voluptates doloribus pariatur blanditiis. Omnis iusto ut voluptas molestias, quas fugiat!
                  </Card>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination"></div>
            <div className="swiper-scrollbar"></div>
        </>
    );
}