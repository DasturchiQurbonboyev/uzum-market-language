import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './Products.css';
import { EffectCube, Pagination } from 'swiper/modules';
import { FcLike } from 'react-icons/fc';
import { FaRegHeart } from 'react-icons/fa';
import { useGetProductsQuery } from '../../context/api/productsApi'
import { HiOutlineShoppingBag } from 'react-icons/hi';


const Product = () => {

    const { data } = useGetProductsQuery()

    const products = data?.products


    const images = [
        {
            img: "https://i5.walmartimages.com/seo/Pre-Owned-Apple-iPhone-X-256GB-Factory-Unlocked-Smartphone-Refurbished-Good_9b5ec8b2-9665-463b-adc5-64829ba72da6.1b496e5a8fcee76fdad69bae12b54745.jpeg",
        },
        {
            img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818"
        },
        {
            img: 'https://media.very.co.uk/i/very/VPZ1B_SQ1_0000000020_BLUE_SLf'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZgQkGhzzaGImYLNE-ZWbI7tkXePwnd0DqA&s'
        }
    ];



    return (

        <div className='py-[80px]'>
            <div className='products kontainer'>

                {
                    data?.products?.map((el, inx) => (
                        <div key={inx} style={{ width: 300 }} className='product__items  p-3 hover:shadow-md rounded-[15px]'>
                            <div className='product__like'>
                                {
                                    <FaRegHeart size={30} />
                                }
                            </div>
                            <Swiper
                                style={{ width: 300, height: 300 }}
                                effect={'cube'}
                                grabCursor={true}
                                cubeEffect={{
                                    shadow: true,
                                    slideShadows: true,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                }}
                                pagination={true}
                                modules={[EffectCube, Pagination]}
                                className="mySwiper"
                            >
                                {
                                    images.map((img, idx) => (
                                        <SwiperSlide className='swiper__item' key={idx}>
                                            <div className='swiper__img'>
                                                <img src={img.img} alt="product" />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <div className='product__text'>
                                <p>
                                    {el.title}
                                </p>
                                <div className='flex justify-between items-center' >
                                    <div style={{ display: "flex", gap: 15 }}>
                                        <h3>
                                            {el.price}$
                                        </h3>
                                        <h3>
                                            <del>
                                                {el.price + 100}$
                                            </del>
                                        </h3>
                                    </div>
                                    <div className='pr-7 '>
                                        <HiOutlineShoppingBag className='cursor-pointer' size={25} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
    );
};

export default Product;
