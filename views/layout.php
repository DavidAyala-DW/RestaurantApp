<?php  !isset($home) ? $home=false : null  ?>
<?php  !isset($layoutOff) ? $layoutOff=false : null  ?>

<?php 
    if(!isset($_SESSION)){
        session_start();
    } 
    //debugear($_SESSION);
?>

<?php if(!$layoutOff) :?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Description" content="Restaurant App">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="black">

    <title>Restaurant</title>

    <link rel="stylesheet" href="../../build/css/swiper.css" />
    <link rel="stylesheet" href="../../build/css/swiper.min.css" />

    <link rel="stylesheet" href="../../build/css/app.css">
    
    <link rel="shortcut icon" href="../../build/img/punpun.png">

    <link rel="apple-touch-icon" href="../../build/img/punpun.png">
    <link rel="manifest" href="../../manifest.json">


</head>

<body>

    <?php echo $home? "<div class='home mb-10'>" : null ?>
    <?php echo $home? "<div class='opacity-background mb-10'>" : null ?>
    <header class="nav-bar <?php echo !$home? 'fixed-bar' : null ?>">

        <div class="bar container">

            <a href="/home" class="logo">Logo</a>

            <nav class="actions">

                <a href="/aboutUs">AboutUs</a>
                <a href="/menu">Menu</a>
                <a href="/gallery">Gallery</a>
                <a class="linkReservation" href="/reservation">Reservation</a>
                <a href="/contactUs">Contact</a>

                <div id="icon-sun-moon"> </div>

            </nav>

        </div>

    </header>

    <?php echo $home ? 
    
       '<div class="center-all mt-10">
                <h2 class="f-4 f-bold text-center mb-1">Made With Love</h2>
                <p class="f-2 text-center">Making delicious food since 1990 </p>
                <p class="f-2 text-center">Booking online or call +381 11 111 11 11</p>
                <a href="/reservation" class="inline-block button-default linkReservation  mt-2 ">
                    <div>
                        <p class="f-2 f-normal uppercase">reservation</p>
                    </div>
                </a>
        </div>
   
        <div class="history container mw-1000 mt-5 mb-2">
            <div class="containerHistory">
                <div class="image">
                    <div class="image1"></div>
                    <div class="image2"></div>
                </div>
                <div class="text">
                    <p class="ourHistory class mb-2 f-4 f-bold">Our History</p>
                    <p class="mb-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse impedit nisi nemo voluptates vel minima sunt, at officia soluta laborum. Natus fuga tempora libero ullam, quidem amet sit cumque aut.</p>
                    <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus. Velit corrupti magnam delectus ipsam atque omnis quae quidem similique saepe veritatis.</p>
                </div>
            </div>
        
        </div>
        
        '

    : null?>

    <?php echo $home ? "</div>":null ?>
    <?php echo $home ? "</div>":null ?>



    

    <?php endif ?>

    <?php echo $action?>

    <?php if(!$layoutOff) :?>

    <footer class="footer">
      
    <div class="bar-footer container">
            <p class="copyright">Copyright © 2021 Name Restaurant</p>
            <p class="powered">Powered by Name Restaurant</p>
        </div>
    </footer>

    <div class="menu-bar"></div>

    <script src="../../build/js/swiper.js"></script>
    <script src="../../build/js/swiper.min.js"></script>
    <script src="../../build/js/moment-with-locales.min.js"></script>
    <script src="../../build/js/pwa.js"></script>
    <script src="../../build/js/app.js" type="module"></script>

    
</body>

</html>
<?php endif ?>