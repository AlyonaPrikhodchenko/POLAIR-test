import {initAccordion, mediaQueriesSize} from "./blocks/accordion.js";
import {mediaQueryBurger, openNavigation} from "./blocks/burger.js";
import {mediaQuerySearch, openSearch} from "./blocks/search.js";
import {breakpoint, breakpointChecker} from "./blocks/swiper-brands.js";
import {initSwiperSlider} from "./blocks/swiper-intro.js";
import {mediaQueries, transferTitle} from "./blocks/transfer-title.js";

initSwiperSlider();

breakpointChecker(breakpoint)
breakpoint.addEventListener('change', breakpointChecker);

transferTitle(mediaQueries);
mediaQueries.addEventListener('change', transferTitle);

initAccordion(mediaQueriesSize);
mediaQueriesSize.addEventListener('change', initAccordion);


openNavigation(mediaQueryBurger);
mediaQueryBurger.addEventListener('change', openNavigation);

openSearch(mediaQuerySearch);
mediaQuerySearch.addEventListener('change', openSearch);
