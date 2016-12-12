<?php print render($page['header']); ?>
<style>
    .carousel-inner > .item > img,
    .carousel-inner > .item > a > img {
        width: 70%;
        margin: auto;
    }
    .carousel-inner > .item > img, .carousel-inner > .item > a > img {
      margin: auto;
      width: 100%;
  }
  /*  .carousel-control { display: none; }*/
</style>
<div class="row cRotatingBanners">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
<!--            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>-->
        </ol>
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <div class="cBanner-01">
                    <div class="container">
                        <div class="col-sm-12 col-md-12">
                            <img src="/sites/all/themes/bootstrap/unite/images/home-banner-01-text.png" />
                        </div>
                    </div>
                </div>
            </div>
<!--            <div class="item">
              <div class="cBanner-01">
                    <div class="container">
                        <div class="col-sm-12 col-md-12">
                            <img src="/sites/all/themes/bootstrap/unite/images/home-banner-01-text.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="cBanner-01">
                    <div class="container">
                        <div class="col-sm-12 col-md-12">
                            <img src="/sites/all/themes/bootstrap/unite/images/home-banner-01-text.png" />
                        </div>
                    </div>
                </div>
            </div>-->
        </div>
    </div>
</div>

<div class="row cLatestNews">
    <div class="container">
        <?php print render($page['news_latest']); ?>
    </div>
</div>

<!--<div class="row cLatestNews">
    <div class="container">
        <div class="col-sm-12 col-md-4 cNews">
            <h3><a href="#">Lorem ipsum dolor sit amet, con sectetur adipiscing elit</a></h3>
            <img src="/sites/all/themes/bootstrap/unite/images/news-image.jpg" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum justo, venenatis vel semper eu, tempus vitae tortor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
            <p><a href="#">Read more...</a></p>
        </div>
        <div class="col-sm-12 col-md-4 cNews">
            <h3><a href="#">Lorem ipsum dolor sit amet, con sectetur adipiscing elit</a></h3>
            <img src="/sites/all/themes/bootstrap/unite/images/news-image.jpg" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum justo, venenatis vel semper eu, tempus vitae tortor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
            <p><a href="#">Read more...</a></p>
        </div>
        <div class="col-sm-12 col-md-4 cNews">
            <h3><a href="#">Lorem ipsum dolor sit amet, con sectetur adipiscing elit</a></h3>
            <img src="/sites/all/themes/bootstrap/unite/images/news-image.jpg" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum justo, venenatis vel semper eu, tempus vitae tortor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
            <p><a href="#">Read more...</a></p>
        </div>
    </div>
</div>-->

<div class="row cITindustry">
    <div class="container">
        <div class="col-sm-12 col-md-12">
            <a href="/content/sri-lanka-top-among-south-asian-countries-wef-global-it-report"><img src="/sites/all/themes/bootstrap/unite/images/sri-lankan-it-industry.png" alt="Sri Lankan IT Industry" /></a>
        </div>
    </div>
</div>

<?php if ($page['postscript_second']): ?>
    <div class="row cSpcial">
        <div class="container">
            <?php print render($page['postscript_second']); ?>
        </div>
    </div>
<?php endif; ?>


<!--
<div class="row cAffiliations">
    <div class="container">
        <div class="col-sm-12 col-md-3">
            <img src="/sites/all/themes/bootstrap/unite/images/menu-logo.svg" alt="">
        </div>
        <div class="col-sm-12 col-md-3">
            <img src="/sites/all/themes/bootstrap/unite/images/menu-logo.svg" alt="">
        </div>
        <div class="col-sm-12 col-md-3">
            <img src="/sites/all/themes/bootstrap/unite/images/menu-logo.svg" alt="">
        </div>
        <div class="col-sm-12 col-md-3">
            <img src="/sites/all/themes/bootstrap/unite/images/menu-logo.svg" alt="">
        </div>
    </div>
</div> -->

        
<!--Footer-->
<?php print render($page['footer']); ?>
