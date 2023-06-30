import 'normalize.css'
import '../../../../scss/pages/proyectos/ecoshop/index.scss';
import './slick/slick'

$('.digital-tech-hero').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    // arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true
  });