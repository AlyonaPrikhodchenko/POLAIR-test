import {breakpoint, breakpointChecker} from "./blocks/swiper-brands.js";
import {initSwiperSlider} from "./blocks/swiper-intro.js";
import {mediaQueries, transferTitle} from "./blocks/transfer-title.js";

initSwiperSlider();

breakpointChecker(breakpoint)
breakpoint.addEventListener('change', breakpointChecker);

transferTitle(mediaQueries);
mediaQueries.addEventListener('change', transferTitle);
