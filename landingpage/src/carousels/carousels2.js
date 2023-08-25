import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Card } from "antd"
import { Pagination } from 'swiper/modules';
import Resorts from '../Снимок экрана 2023-08-24 192523_pixian.png'
import {LockFilled , ClockCircleOutlined} from "@ant-design/icons"


export default function App() {
    return (
        <>
            <Swiper style={{width:"100%",height:"370px"}}
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
                  <Card style={{height:"auto"}}>
                  <img style={{height:"200px",width:"100%",objectFit:"cover",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} src={'https://avatars.mds.yandex.net/i?id=08d1f69bd8c62b11c775110fc13565cd-5309177-images-thumbs&n=13'} alt="" />
                   <h5 style={{fontWeight:"600",marginTop:"10px"}}>Elegance & Grade Salon</h5>
                   <p style={{color:"grey",fontSize:"10px"}}>Haircuts ,Make Up,Shawing , Message</p>
                  </Card>
                </SwiperSlide>
                <SwiperSlide style={{borderRadius:"10px",height:"auto",width:"33%"}}>
                <Card style={{height:"auto"}}>
                  <img style={{height:"200px",width:"100%",objectFit:"cover",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} src={'https://sales-generator.ru/upload/iblock/ed1/xed1e3f08cf37c83abe5db3c9f7cefc44.jpg.pagespeed.ic.eraDOJvcco.jpg'} alt="" />
                   <h5 style={{fontWeight:"600",marginTop:"10px"}}>Elegance & Grade Salon</h5>
                   <p style={{color:"grey",fontSize:"10px"}}>Haircuts ,Make Up,Shawing , Message</p>
                  </Card>
                </SwiperSlide>
                <SwiperSlide style={{borderRadius:"10px",height:"auto",width:"45%"}}>
                <Card style={{height:"auto"}}>
                  <img style={{height:"200px",width:"100%",objectFit:"cover",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} src={'https://avatars.mds.yandex.net/i?id=08d1f69bd8c62b11c775110fc13565cd-5309177-images-thumbs&n=13'} alt="" />
                   <h5 style={{fontWeight:"600",marginTop:"10px"}}>Elegance & Grade Salon</h5>
                   <p style={{color:"grey",fontSize:"10px"}}>Haircuts ,Make Up,Shawing , Message</p>
                  </Card>
                </SwiperSlide>  <SwiperSlide style={{borderRadius:"10px",height:"auto"}}>
                <Card style={{height:"auto"}}>
                  <img style={{height:"200px",width:"100%",objectFit:"cover",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} src={'https://avatars.mds.yandex.net/i?id=08d1f69bd8c62b11c775110fc13565cd-5309177-images-thumbs&n=13'} alt="" />
                   <h5 style={{fontWeight:"600",marginTop:"10px"}}>Elegance & Grade Salon</h5>
                   <p style={{color:"grey",fontSize:"10px"}}>Haircuts ,Make Up,Shawing , Message</p>
                  </Card>
                </SwiperSlide>  <SwiperSlide style={{borderRadius:"10px",height:"auto",width:"33%"}}>
                <Card style={{height:"auto"}}>
                  <img style={{height:"200px",width:"100%",objectFit:"cover",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} src={'https://sales-generator.ru/upload/iblock/ed1/xed1e3f08cf37c83abe5db3c9f7cefc44.jpg.pagespeed.ic.eraDOJvcco.jpg'} alt="" />
                   <h5 style={{fontWeight:"600",marginTop:"10px"}}>Elegance & Grade Salon</h5>
                   <p style={{color:"grey",fontSize:"10px"}}>Haircuts ,Make Up,Shawing , Message</p>
                  </Card>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination"></div>
            <div className="swiper-scrollbar"></div>
        </>
    );
}