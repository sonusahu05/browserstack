import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Updated import

// Import CSS
import "swiper/css";
import "swiper/css/pagination";

// Import CSS
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/autoplay"; // Autoplay (optional, but generally works without extra CSS)

const CarouselSection = ({ title, text, images, points }) => {
    return (
        <section className="py-10 px-4 bg-gray-100 ">
            <div className="container mx-auto">
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">{title}</h3>
                <div className="md:flex md:gap-8">
                    <div className="md:w-1/2">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop
                            className="rounded-lg shadow-md"
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full h-150 flex items-center justify-center">
                                        <img
                                            src={img}
                                            alt={`Slide ${index + 1}`}
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex items-center md:w-1/2 mt-6 md:mt-0">
                        <div>
                            <p className="text-gray-600 text-lg mb-4">{text}</p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-800">
                                {points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselSection;