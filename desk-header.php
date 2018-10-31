
<?php
include_once('_config_inc.php');
$BATH_URL=BASE_URL;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Home</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="<?php echo $BATH_URL;?>assets/vendor/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $BATH_URL;?>assets/css/desk-style.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $BATH_URL;?>assets/vendor/zoom-parallax.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="<?php echo $BATH_URL;?>assets/vendor/bootstrap.min.js"></script>
  <script type="text/javascript" src="<?php echo $BATH_URL;?>assets/vendor/zoom-parallax.js"></script>
  <script type="text/javascript" src="<?php echo $BATH_URL;?>assets/js/main.js"></script>
  <link rel="stylesheet" type="text/css" href="<?php echo $BATH_URL;?>assets/css/responsive.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $BATH_URL;?>assets/vendor/animate.css">
  <script type="text/javascript" src="<?php echo $BATH_URL;?>assets/vendor/wow.min.js"></script>

  <script type="text/javascript">
    
    new WOW().init();
  </script>

  <link rel="stylesheet" type="text/css" href="<?php echo $BATH_URL;?>assets/vendor/slick-slider/slick.css">
  <script type="text/javascript" src="<?php echo $BATH_URL;?>assets/vendor/slick-slider/slick.min.js"></script>
  <script type="text/javascript" src="<?php echo $BATH_URL;?>assets/vendor/scroll-fixed-header-menu2.js"></script>
</head>
<body>
  <div id="wrapper">
    <div id="header">

    <!--  <nav>
       <div class="container-fluid">
        <div class="container">
          <div class="box-navbar-top">
            <ul class="media-top">
              <li><a href=""><img src="<?php echo $BATH_URL;?>assets/img/icon/fb.svg" alt="facebook"></a></li>
              <li><a href=""><img src="<?php echo $BATH_URL;?>assets/img/icon/youtube.svg" alt="youtube"></a></li>
            </ul>
            <ul class="navbar-top">
              <li><a href="">CAREER</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">MAP</a></li>
              <li><a href="">VISIT US:</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container-fluid container-fluid-fixed">
        <div class="container" style="position: relative;">
          <div class="box-navbar-bottom">
            <div class="main-logo">
              <a href=""><img src="<?php echo $BATH_URL;?>assets/img/icon/Khmer-AdsZone-Logo-White-01.svg"></a>
            </div>
            <div class="navbar-bottom">
              <ul>
                <li>
                  <a href="<?php echo $BATH_URL;?>">HOME</a>
                </li>
                <li>
                  <a href="<?php echo $BATH_URL;?>desktop/content-about.php">ABOUT GREEN</a>
                </li>
                <li>
                  <a href="<?php echo $BATH_URL;?>desktop/content-service.php">OUR SERVICE</a>
                </li>
                <li>
                  <a href="<?php echo $BATH_URL;?>desktop/content-portfolio.php">PORTFOLIOS</a>
                </li>
                <li>
                  <a href="<?php echo $BATH_URL;?>desktop/content-news.php">NEWS</a>
                </li>
                <li>
                  <a href="<?php echo $BATH_URL;?>desktop/content-contact.php">CONTACT GREEN</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
 -->



  <div class="main-box-nav">
        <!-- desktop menu -->
        <div class="container-fluid">
          <div class="container">
            <nav class="nav-top">
              <div style="float: right;">
               
                <ul class="media">
                  <li><a href="" title=""><img src="<?php echo $BATH_URL;?>assets/img/icon/fb.svg"></a></li>
                  <li><a href="" title=""><img src="<?php echo $BATH_URL;?>assets/img/icon/youtube.svg"></a></li>
                </ul>
                 <ul class="menu-top">
                  <li><a href="<?php echo $BATH_URL;?>desktop/content-career.php">CAREERS</a></li>
                  <li><a href="<?php echo $BATH_URL;?>desktop/content-faq.php">FAQ</a></li>
                  <li><a href="">MAP</a></li>
                  <li><a href="">VISIT US</a></li>
                </ul>
              </div>
              
            </nav>
          </div>
        </div>
        <div class="container-fluid container-fluid-menu">
          <div class="container">
            <nav class="nav-bottom">
              <div class="box-tool-top">
                <div class="hamburger" id="hamburger-menu">
                  <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <div class="box-logo">
                  <a class="logo" href="index.<?php  ?>" title=""><img src="<?php echo $BATH_URL;?>assets/img/icon/Khmer-AdsZone-Logo-White-01.svg" alt=""></a>
                </div>
              </div>
              <div class="sub-nav-bottom">
                <ul class="menu">
                  <li><a href="<?php echo $BATH_URL;?>index.php" title="">HOME</a></li>
                  <li><a href="<?php echo $BATH_URL;?>desktop/content-about.php" title="">ABOUT GREEN</a></li>
                  <li><a href="<?php echo $BATH_URL;?>desktop/content-service.php" title="">OUR SERVICES</a></li>
                  <li><a href="<?php echo $BATH_URL;?>desktop/content-portfolio.php" title="">PORTFOLIO</a></li>
                  <li><a href="<?php echo $BATH_URL;?>desktop/content-news.php" title="">NEWS</a></li>
                  <li><a href="<?php echo $BATH_URL;?>desktop/content-contact.php" title="">CONTACT GREEN</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>















    <!-- banner -->
    <div class="container-fluid banner">
     <div id="demo" class="carousel slide" data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <li data-target="#demo" data-slide-to="3"></li>
      </ul>
      <div  class="carousel-inner">
        <div class="carousel-item active">
          <div class="black-layer"></div>
          <img data-imgzoom data-sarallax src="<?php echo $BATH_URL;?>assets/img/Green-Life-Landscaping-service-Cambodia-01.jpg">
          <div class="banner-text">
            <h1>PROVIDE SUPERIOR LANDSCAPING SERVICE</h1>
            <p><a href="">HOME</a></p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="black-layer"></div>
          <img data-imgzoom data-sarallax src="<?php echo $BATH_URL;?>assets/img/Green-Life-Landscaping-service-Cambodia-04.jpg" alt="New York">
          <div class="banner-text">
            <h1>THE BEST CAMBODIA LANDSCAPING SERVICE</h1>
            <p><a href="">HOME</a> | <a href="">ABOUT GREEN</a></p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="black-layer"></div>
          <img data-imgzoom data-sarallax src="<?php echo $BATH_URL;?>assets/img/Green-Life-Landscaping-service-Cambodia-06.jpg" alt="New York">
          <div class="banner-text">
            <h1>WE PROVIDE FLEXIBLE TAILORED SOLUTIONS</h1>
            <p><a href="">HOME </a> | <a href="">OUR SERVICES</a></p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="black-layer"></div>
          <img data-imgzoom data-sarallax src="<?php echo $BATH_URL;?>assets/img/Green-Life-Landscaping-service-Cambodia-05.jpg" alt="New York">
          <div class="banner-text">
            <h1>IRRIGATION & WATER MANAGEMENT & MAINTENANCE</h1>
            <p><a href="">HOME</a> | <a href="">PORTFOLIOS</a></p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</div>
</div>

