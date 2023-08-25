import React from 'react';
import { Card, Input, Switch } from 'antd';
import {
  CheckCircleFilled,
  SendOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled,
  DownOutlined,
  CiCircleFilled,
} from '@ant-design/icons';
import Carousel1 from './carousels/carousel1';
import Salon from './Снимок экрана 2023-08-24 192523_pixian.png';
import world from './Снимок экрана 2023-08-24 212118.png';
import Carousel2 from "./carousels/carousels2"
import Api from './benrfits'; 
const { Search } = Input;function App(props) {
    return (
        <div>
            <div className={'container-fluid'} style={{borderBottom:"10px solid red",textAlign:"center"}}>
                <nav className={'navbar px-5'}>
                   <div className={'logo'}>
                       <img className={'img'} src={'https://avatars.mds.yandex.net/i?id=1eac53e4e4f94d56744d420cefccaa2ce5858be1-8819379-images-thumbs&n=13'}/>
                       Signature Salon
                   </div>
                    <div className={'href'}>
                        <a className={'custom-link'} href={'#'}>Home</a>
                        <a className={'custom-link'} href={'#'}>About</a>
                        <a className={'custom-link'} href={'#'}>Features</a>
                        <a className={'custom-link'} href={'#'}>Testimonial</a>
                        <a className={'custom-link'} href={'#'}>Blog</a>
                        <a className={'custom-link'} href={'#'}>Contact Us</a>
                    </div>
                    <div>
                        <button style={{borderRadius:"30px",fontSize:"13px"}} className={'btn btn1 btn-danger'}>Get the App</button>
                    </div>
                </nav>
                <div  className={'py-5 contain'}>
                    <div className='M5'>
                        <h1>5M+</h1>
                        <p>App Users</p>
                        <img className='img3' src={'https://theme.zdassets.com/theme_assets/9145426/efe6f5ef2b0a63a443c0ca98c71f9bbf2cc600e2.jpg'}/>
                    </div>
                    <div className='center'>
                   <h1 style={{fontWeight:"700",fontSize:"45px"}}>Your Ultimate <span>Salon</span> <br/> Booking Solution!</h1>
                    </div>
                </div>
<div className='img2'>
    <img style={{width:"100%",position:"relative",top:"-50px"}} src={'https://file.removal.ai/preview/1316f14f-cc74-4cb5-8d93-8907be91fe17-image_processing20200311-26090-65e4dd.png'}/>
</div>
            </div>
            <div className={'container'} style={{height:"auto"}}>
                 <div className={'logoIpsum d-flex my-3'}>
                     <div>LogoIpsum</div>
                     <div>LogoIpsum</div>
                     <div>LogoIpsum</div>
                     <div>LogoIpsum</div>
                     <div>LogoIpsum</div>
                 </div>
                <p className={'text-danger textred'}> — Benefits of Signature Salon</p>
                <div className={'text-flex d-flex'}>
                    <h3 className='h3' style={{fontWeight:"600"}}>Experience the Best <br/> width Signature</h3>
                   <div className={'d-flex align-items-center'}>
                       <hr className={'hr'}/>
                       <p className={'px-2 text-secondary '}>From hassle-free bookings to personalized services,Signature Salon <br/> offers an array of features that redefine salon appointments</p>
                   </div>
                </div>
                <Api/>
            </div>
            <div className={'container-fluid d-flex align-items-center px-5 container2'}>
                <img  className='img1'  src={'https://pbs.twimg.com/media/DfeuTFhW4AA5fm8.jpg'}/>
                <div className={'textCenter'}>
                    <p className={'text-danger textred'}>— About Us</p>
                    <h3  className={'textred'} style={{fontWeight:"700"}}>Our Passion for Beauty  <br/> Simplified.</h3>
                    <ul>
                        <li>Lorem Ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                        <li>Lorem Ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                    </ul>
                    <div className={'textred d-flex w-100'} style={{justifyContent:"space-Between"}} >
                        <div className='div'>
                            <h2 style={{fontWeight:"700"}} className={'text-danger'}>5M+</h2>
                           <p> Active Users</p>
                        </div>
                        <div className='div'>
                            <h2 style={{fontWeight:"700"}} className={'text-danger'}>4.8+</h2>
                           <p> Rewiew Ratings</p>
                        </div>
                        <div className='div'>
                            <h2 style={{fontWeight:"700"}} className={'text-danger'}>10K+</h2>
                            <p>Salons Listed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'container text-center py-5 ho'} >
                 <p className={'text-danger py-2'}>
                     —How it works
                 </p>
                <h2 style={{fontWeight:"700"}}>Seamless Salon Booking :<br/> How Signature Works</h2>
                <div className={'d-flex'}>
                    <div>
                        <div className={'py-3'} style={{width:"60px",margin:"auto",height:"60px",background:"red" , color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}}>
                            <h2>01</h2>
                        </div>
                        <h5> Download and install App</h5>
                        <p style={{fontSize:"13px"}} className={'text-secondary'}>It works a lot like the Classifield section of <br/> your local newspLorem ipsum dolor sit <br/> amet ,consectetur adipisicing elit. </p>
                    </div>
                    <div  className={'px-2 media'}>
                        ----------------
                    </div>
                    <div>
                        <div className={'py-3'} style={{width:"60px",margin:"auto",height:"60px",background:"red" , color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}}>
                            <h2>02</h2>
                        </div>
                        <h5> Download and install App</h5>
                        <p style={{fontSize:"13px"}} className={'text-secondary'}>It works a lot like the Classifield section of <br/> your local newspLorem ipsum dolor sit <br/> amet ,consectetur adipisicing elit. </p>
                    </div>
                    <div className={'px-2 media'}>
                        ----------------
                    </div>
                    <div>
                        <div className={'py-3'} style={{width:"60px",margin:"auto",height:"60px",background:"red" , color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}}>
                            <h2>03</h2>
                        </div>
                        <h5> Download and install App</h5>
                        <p style={{fontSize:"13px"}} className={'text-secondary'}>It works a lot like the Classifield section of <br/> your local newspLorem ipsum dolor sit <br/> amet ,consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>
            <div className={'container-fluid p-5 container3'} style={{height:"auto",background:"#F8F8F8"}}>
                 <p className={'text-danger'}> — Featured Salons</p>
                <div className='h2'>
                    <h2 className='h2' style={{fontWeight:"700"}}>Discover Our <br/> Featured Salons</h2>
                </div>
                <Carousel2/>
            </div>
            <div style={{height:"auto",justifyContent:"space-between"}} className={'container py-5 d-flex align-items-center container3'}>
                <div className='flex'>
                    <p style={{fontWeight:"700"}}  className={'text-danger'}> — Best Feature</p>
                    <h3  style={{fontWeight:"700"}}>Explore Nearby Salons on the <br/> Interactive Map</h3>
                    <p className={'text-secondary'}>Discover nearby salons effortlessly our interactive map feature <br/> bringing beauty and convenience together at your fingertips</p>
                  <div>  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} ><CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Top Specialist</div>
                    <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} ><CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>  Discount For All Services</div>
                    <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} ><CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Seamless Salon Exploration</div>
                    <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} ><CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Quick Appointment</div>
                    <br/></div>
                    <button className={'btn btn-danger'} style={{borderRadius:"30px",fontSize:"15px"}}>Book an Appointment</button>
                </div>
                <img className='img4' src={'https://avatars.mds.yandex.net/i?id=21a426b5527f1aa98a69bc9a88fae583-4575945-images-thumbs&n=13'}/>
            </div>
            <div className={'container-fluid py-5 text-center'} style={{background:"#F8F8F8",height:"auto"}}>
                <p style={{fontWeight:"600"}} className={'text-danger'}> — Our Experts</p>
                <h2 style={{fontWeight:"600"}}>Global Beauty Experts at <br/> Your FingerTips</h2>
                <img style={{width:"100%",height:"100%"}} src={world}/>
            </div>
            <div style={{height:"100vh"}} className={'container py-5 textcenter'}>
               <p style={{fontWeight:"600"}} className={'text-danger'}>— Testimonial</p>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <h2 style={{fontWeight:"600"}}>Hear What Our Users Have to Say <br/> about Our Salon Booking App</h2>
                </div>
<Carousel1/>
            </div>
            <div className={'container-fluid bg-dark text-white text-center'} style={{height:"auto",padding:"70px",textAlign:"center",alignItems:"center"}}>
                <h3 className={'w-100'}>Download the Signature Salon Now!</h3>
                <p className={'w-100'}>Lorem ipsum dolor sit amet , consectatur adipisicing elit,sed do <br/> euismod tempor incididunt ut labore et dolore </p>
                <img style={{borderRadius:"8px",width:"170px"}} src={'https://cettar.jatimprov.go.id/public/assets/img/download.png'}/>
                <img  style={{borderRadius:"8px",width:"170px",marginLeft:"10px"}} src={'https://www.cardscanner.co/assets/img/app-store.png'}/>
            </div>
            <div className={'container-fluid py-5 text-center'} style={{height:"auto"}}>
                <p style={{fontWeight:"600",color:"red"}}>— Pricing Table</p>
                <h2  style={{fontWeight:"600"}}>Choose the  plan that`s right <br/> for you</h2>
                <br/>
                <div className={'container py-5  '} style={{background:"#F8F8F8",height:"auto",borderRadius:"20px"}}>
                    <div style={{display:"flex",width:"100%",justifyContent:"center",gap:"30px"}}>
                        Bill Monthly  <Switch className={"shadow"} style={{background:"red",border:"none"}}/> Bill Anually
                    </div>
                    <div className={'row p-5'}>
                          <div className="col">
                              <Card className='card1' style={{textAlign:"left"}}>
                                  <div style={{display:"flex",alignItems:"center"}}><h2 style={{fontWeight:"600"}}>$29</h2><p style={{marginTop:"17px",color:"grey"}}>/month</p></div>
                                  <h5 style={{fontWeight:"600"}}>Basic</h5>
                                  <p style={{color:"grey",fontSize:"13px"}}>Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit</p>
                                  <hr/>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}}><CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Top Specialist</div>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} > <CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Discount For all Services</div>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} > <CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Seamless Salon Exploration</div>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} ><CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Quick Appointment</div>
                                  <br/>
                                  <br/>
                                  <button className={'btn text-danger border-danger w-100 '} style={{borderRadius:"30px",display:"flex", alignItems:"center",justifyContent:"space-between"}}>Choose Plan <div> →</div></button>
                              </Card>
                          </div>
                        <div className="col">
                             <Card className='card1' style={{textAlign:"left"}}>
                                  <div style={{display:"flex",alignItems:"center"}}><h2 style={{fontWeight:"600"}}>$29</h2><p style={{marginTop:"17px",color:"grey"}}>/month</p></div>
                                  <h5 style={{fontWeight:"600"}}>Basic</h5>
                                  <p style={{color:"grey",fontSize:"13px"}}>Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit</p>
                                  <hr/>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}}><CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Top Specialist</div>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} > <CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Discount For all Services</div>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} > <CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Seamless Salon Exploration</div>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} ><CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Quick Appointment</div>
                                  <br/>
                                  <br/>
                                  <button className={'btn text-danger border-danger w-100 '} style={{borderRadius:"30px",display:"flex", alignItems:"center",justifyContent:"space-between"}}>Choose Plan <div> →</div></button>
                              </Card>
                        </div>
                        <div className="col">
                         <Card className='card1' style={{textAlign:"left"}}>
                                  <div style={{display:"flex",alignItems:"center"}}><h2 style={{fontWeight:"600"}}>$29</h2><p style={{marginTop:"17px",color:"grey"}}>/month</p></div>
                                  <h5 style={{fontWeight:"600"}}>Basic</h5>
                                  <p style={{color:"grey",fontSize:"13px"}}>Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit</p>
                                  <hr/>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}}><CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Top Specialist</div>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} > <CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Discount For all Services</div>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} > <CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Seamless Salon Exploration</div>
                                  <div style={{display:"flex",alignItems:"center",paddingTop:"10px",gap:"10px"}} ><CheckCircleFilled style={{borderBottom:"none",color:"red"}}/>   Quick Appointment</div>
                                  <br/>
                                  <br/>
                                  <button className={'btn text-danger border-danger w-100 '} style={{borderRadius:"30px",display:"flex", alignItems:"center",justifyContent:"space-between"}}>Choose Plan <div> →</div></button>
                              </Card>
                    </div>
                    </div>
                </div>
            </div>
            <div className={'container-fluid p-5 container5'}>
                <p className={'text-danger textcenter'}> —  Our Blog</p>
               <div className='flexs'> <h2 style={{fontWeight:"700"}}>Browse Our Blogs </h2> <button className={'btn btn-danger'} style={{borderRadius:"30px"}}> Browse All Blogs </button></div>
                <div style={{width:"auto"}} className='row py-5'>
                    <div style={{height:"auto"}} className="col-md-4 ">
                        <img style={{height:"59%",objectFit:"cover",borderRadius:"10px",width:"100%"}} src={'https://avatars.mds.yandex.net/i?id=1f6c46ac3a009909b0e0ef6b8977a8ee2a629d65-7761179-images-thumbs&n=13'}/>
                        <button className={'btn text-danger my-2 '} style={{background:"#F8F8F8",fontSize:"10px"}} > Beauty & Style</button>
                        <h5 style={{fontWeight:"600"}}>The Ultimate Guide to Finding Your Perfect Stylist</h5>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"13px",color:"grey"}}>
                            <CiCircleFilled style={{borderBottom:"none",color:"red"}}/> Jenny Smith   <CiCircleFilled style={{borderBottom:"none",color:"red"}}/> 22 August 2023
                        </div>
                        <br/>
                        <br/>
            </div>  
            <div style={{height:"auto"}} className="col-md-4">
                        <img style={{objectFit:"contain",borderRadius:"10px",width:"100%"}} src={'https://avatars.mds.yandex.net/i?id=0218fab7ede42143f0db0579d4ff7a53bff59bde-9205558-images-thumbs&n=13'}/>
                        <button className={'btn text-danger my-2'} style={{background:"#F8F8F8",fontSize:"10px"}} > Beauty & Style</button>
                        <h5 style={{fontWeight:"600"}}>The Ultimate Guide to Finding Your Perfect Stylist</h5>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"13px",color:"grey"}}>
                            <CiCircleFilled style={{borderBottom:"none",color:"red"}}/> Jenny Smith   <CiCircleFilled style={{borderBottom:"none",color:"red"}}/> 22 August 2023
                        </div>
                        <br/>
            </div>
                    <div style={{height:"auto"}} className="col-md-4">
                        <img style={{objectFit:"contain",borderRadius:"10px",width:"100%"}}  src={'https://avatars.mds.yandex.net/i?id=8c05c74078e5e9ea83d860a8cf1768e787e8fc2e-4986689-images-thumbs&n=13'}/>
                        <button className={'btn text-danger my-2'} style={{background:"#F8F8F8",fontSize:"10px"}} > Beauty & Style</button>
                        <h5 style={{fontWeight:"600"}}>The Ultimate Guide to Finding Your Perfect Stylist</h5>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"13px",color:"grey"}}>
                            <CiCircleFilled style={{borderBottom:"none",color:"red"}}/> Jenny Smith   <CiCircleFilled style={{borderBottom:"none",color:"red"}}/> 22 August 2023
                        </div>
            </div>
        </div>
            </div>
             <div className={'container-fluid d-flex p-5'} style={{width:"100%",gap:"40px",justifyContent:"center",background:"#F8F8F8"}}>
                    <div className='width'>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <h6>How do an appointment an appointment using the <br/> Signature Salon App?</h6 >
                            <DownOutlined style={{borderBottom:"none"}}/>
                        </div>
                        <hr style={{width:"100%"}}/>
                        <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"}}>
                            <h6 style={{width:"80%"}}>What payment methods do you accept? </h6 >
                            <p style={{width:"80%",color:"grey", fontSize:"13px"}}>Running a small business is always a challenge, and salons are no exception.</p>
                            <DownOutlined style={{borderBottom:"none"}}/>
                        </div>
                        <hr style={{width:"100%"}}/>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <h6>How do an appointment an appointment using the <br/> Signature Salon App?</h6 >
                            <DownOutlined style={{borderBottom:"none"}}/>
                        </div>
                        <hr style={{width:"100%"}}/>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <h6>How do an appointment an appointment using the <br/> Signature Salon App?</h6 >
                            <DownOutlined style={{borderBottom:"none"}}/>
                        </div>
                        <hr style={{width:"100%"}}/>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <h6>How do an appointment an appointment using the <br/> Signature Salon App?</h6 >
                            <DownOutlined style={{borderBottom:"none"}}/>
                        </div>
                    </div>
                 <div className='width'>
                      <p style={{color:"red",fontWeight:"600"}}> — FAQ</p>
                     <h2 style={{fontWeight:"600"}}>Questions? Look Here</h2>
                 </div>
             </div>
            <div className={'container-fluid bg-dark p-5 footer'}>
                <div className='footer1'>
                   <div className='width1' >
                       <div className={'text-white'}>
                          <div style={{display:"flex",alignItems:"center"}}> <img style={{width:"50px"}} src={Salon} alt={'kjhg'}/>
                              <h4>Signature Salon</h4></div>
                           <br/>
                           <p style={{color:"grey",fontSize:"13px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                           <div className="footer-col">
                               <div style={{display:"flex",gap:"10px"}}>
                                   <a href="#"><button style={{width:"35px",height:"35px",borderRadius:"50%",justifyContent:"center"}} className={'btn btn-secondary d-flex align-items-center'}><FacebookFilled style={{borderBottom:"none"}}/></button></a>
                                   <a href="#"><button style={{width:"35px",height:"35px",borderRadius:"50%",justifyContent:"center"}} className={'btn btn-secondary d-flex align-items-center'}><InstagramFilled style={{borderBottom:"none"}}/></button></a>
                                   <a href="#"><button style={{width:"35px",height:"35px",borderRadius:"50%",justifyContent:"center"}} className={'btn btn-secondary d-flex align-items-center'}><YoutubeFilled style={{borderBottom:"none"}}/></button></a>
                                   <a href="#"><button style={{width:"35px",height:"35px",borderRadius:"50%",justifyContent:"center"}} className={'btn btn-secondary d-flex align-items-center'}><TwitterCircleFilled style={{borderBottom:"none"}}/></button></a>
                               </div>
                           </div>
                       </div>
                   </div>
                    <div className='width3'>
                        <h6 style={{color:"white"}}>Company</h6>
                        <a style={{color:"grey"}} href={'#'}>Home</a> <br/>
                        <a style={{color:"grey"}} href={'#'}>About</a> <br/>
                        <a style={{color:"grey"}} href={'#'}>Features</a> <br/>
                        <a style={{color:"grey"}} href={'#'}>Testimonial</a> <br/>
                        <a style={{color:"grey"}} href={'#'}>Contact</a>
                    </div>
                    <div className='width3'>
                        <h6 style={{color:"white"}}>Contact</h6>
                        <a style={{color:"grey"}} href={'#'}>+0123456790</a> <br/>
                        <a style={{color:"grey"}} href={'#'}>www.exaple.com</a> <br/>
                        <a style={{color:"grey"}} href={'#'}>example@gmail.com</a> <br/>
                        <a style={{color:"grey"}} href={'#'}>56 , Rajar Golli,Amborkhana,Sylent</a>
                    </div>
                    <div className='width4'>
                        <h6 style={{color:"white",borderBottomColor:"transparent"}}>Get the latest information</h6>
                       <div style={{display:"flex",alignItems:"center"}}>
                           <Input placeholder={"Email Adress"} style={{width:"100%"}}/><button className={'btn btn-danger'} style={{marginLeft:"-45px",zIndex:"1",height:"28px",display:"flex",alignItems:"center"}} > <SendOutlined style={{borderBottom:"none"}}/> </button>
                       </div>
                    </div>
                </div>
                <hr style={{width:"100%",color:"grey"}}/>
               <div style={{display:"flex",alignItems:"center",gap:"5px",justifyContent:"space-between"}}>
                   <p className={'d-flex align-items-center'} style={{fontSize:"13px",gap:"5px",color:"grey"}}>
                   Copyright <CiCircleFilled style={{borderBottom:"none"}}/> 2023 Signature Salon . All Rights Reversed
                   </p>
                   <p className={'d-flex align-items-center'} style={{fontSize:"13px",gap:"5px",color:"grey"}}>
                       User Terms <CiCircleFilled style={{borderBottom:"none"}}/> Conditions | Privacy Policy
                   </p>
               </div>
            </div>

        </div>
    );
}

export default App;