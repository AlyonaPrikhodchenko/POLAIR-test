import {breakpoint, breakpointChecker} from "./blocks/swiper-brands.js";
import {initSwiperSlider} from "./blocks/swiper-intro.js";

initSwiperSlider();

breakpointChecker(breakpoint)
breakpoint.addEventListener('change', breakpointChecker);
