<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="bootstrap.min.css">
	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript" src="scroll-fixed-header-menu2.js"></script>
	<style type="text/css">
		/*ipad hamburger menu*/
		/*hamberger menu*/
		#header .container-fluid-menu2{height: 50px;position: fixed;top: 0;width: 100%;z-index: 100;padding-top: 5px;}
		#header .box-header-sidebar{height: 200px;background-color: #32CF9D;display: flex;align-items: center;justify-content: center;display: -webkit-box;-webkit-box-pack: center; /* justify-content */-webkit-box-align: center; /* align-items */}
	/*menu top*/
	    .container-fluid{padding: 0;}
	    #header .main-box-nav{position: absolute;left: 0;top: 0;width: 100%;z-index: 100;}
	    #header .nav-top{width: 100%;padding-top: 10px;float: left;}
	    .media{padding: 0;margin: 0;list-style: none;float: right;padding-top: 12px;}
	    .media li{float: left;margin-left: 10px;}
	    .media li a{display:block;height: 28px;width: 28px;border-radius: 50%;overflow: hidden;background-color: red;}
	    .media li a img{height: 100%;width: 100%;}
	    /*end menu top*/
	    /*main menu*/
	    #header .container-fluid-menu{top: 0;width: 100%;padding: 5px 0;}
	    #header .sub-nav-bottom{float: right;}
	      /*logo*/
	    #header .nav-bottom .box-logo{float: left;}
	    #header .nav-bottom .logo{height: 50px;left: 0;display:block;}
	    #header .nav-bottom .logo img{height: 100%;}
	      /*end logo*/
	      /*menu*/
	    #header .nav-bottom .menu{float: left;padding: 0;margin: 0;list-style: none;}
	    #header .nav-bottom .menu li{float: left;}
	    #header .nav-bottom .menu li a{display: block;padding: 15px 20px;font-size: 14px;color: white;text-decoration: none;transition: 0.3s;}
	    #header .nav-bottom .menu li a:hover{color: #32CF9D;}
	    #header nav a.active{color: #32CF9D;}
	    #header .nav-bottom .logo,
	    #header .nav-bottom .menu li,
	    #header .nav-bottom .menu li a,
	    #header .media,
	    #header .nav-bottom .menu,
	    #header .container-fluid-menu{transition: .4s all;-moz-transition: .4s all;-webkit-transition: .4s all;-o-transition: .4s all;}
	    /*shrink*/
	    .shrink-container-fluid-menu{position: fixed;background-color: rgba(0,0,0,0.7);}
	    .shrink-media{}
	    .shrink-logo{height: 45px !important;}
	    .shrink-menu{}
	/* Portrait tablet to landscape and desktop */
	    @media (min-width:768px) and (max-width:1024px) {
	        #header .container-fluid-menu{padding: 5px;}
	        #header .sub-nav-bottom{position: relative;}
	        #header .sub-nav-bottom .media{padding-top: 6px;}
	        /*responsive menu*/
	        #header .container-fluid-menu ul.menu{position: fixed;left: 0;top: 0;background-color: white;height: 100%;width: 0 ;overflow: hidden;}
	        #header .container-fluid-menu ul.menu li{width: 100%;float: left;border-bottom: 1px solid #e0e0e0;}
	        #header .container-fluid-menu ul.menu li a{color: black !important;transition: 0.3s;}
	        #header .container-fluid-menu ul.menu li a:hover{color: #32CF9D !important;}
	        #header .nav-bottom .logo{height: 45px !important;left: 0;display:block;}
	        .media{padding-top: 7px !important;}
	        /*hamburger*/
	        #header .hamburger{float: left;display: block;padding-top: 7px;margin-right: 40px;cursor: pointer;}
	        .bar1, .bar2, .bar3 {width: 30px;height: 2px;background-color: #32CF9D;margin: 6px 0;transition: 0.4s;}
	        .change-hamburger-menu .bar1 {-webkit-transform: rotate(-45deg) translate(-6px, 6px);transform: rotate(-45deg) translate(-5px, 5px);}
	        .change-hamburger-menu .bar2 {opacity: 0;}
	        .change-hamburger-menu .bar3 {-webkit-transform: rotate(45deg) translate(-6px, -6px);transform: rotate(45deg) translate(-6px, -6px);}
	    }
	</style>
</head>
<body>
	<div id="header"><!-- start header -->
			<div class="main-box-nav">
				<!-- desktop menu -->
				<div class="container-fluid">
					<div class="container">
						<nav class="nav-top">
							<ul class="media">
								<li><a href="" title=""></a></li>
								<li><a href="" title=""></a></li>
							</ul>
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
									<a class="logo" href="#herroBanner" title=""><img src="Khmer-AdsZone-Logo-White-01.svg" alt=""></a>
								</div>
							</div>
							<div class="sub-nav-bottom">
								<ul class="menu">
									<li><a href="#overview" title="">ABOUT</a></li>
									<li><a href="#condominium" title="">CONDO</a></li>
									<li><a href="#service" title="">SERVICES</a></li>
									<li><a href="#facilities" title="">FACILITY</a></li>
									<li><a href="#brochure" title="">BROCHURE</a></li>
									<li><a href="#contact" title="">CONTACT</a></li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div><!-- end header -->
	
	<div class="box-content" style="height: 1500px;background-color: #333333;"></div>
</body>
</html>