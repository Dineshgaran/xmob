import React, {Component} from 'react';
class Home extends Component {
    render() {
	    return (
		<div className="row ">
	           <div className="medium-12 columns" />
                  
               <section>
      <nav class="navbar navbar-expand-lg navbar-light" />
        <a class="navbar-brand" href="#"><img src="image//LogoX.png" alt="" width="180px" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <form class="form-inline m-auto w-100 flex-nowrap position-relative"/>
        <input class="form-control mr-sm-2 w-100 brd" type="search" placeholder="Search" aria-label="Search" /> 
          <button class="btn btn-outline-primary my-2 my-sm-0 frm_ab" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        
        <div class="navIcon d-flex justify-content-center align-content-center">
          <button type="button" class="btn btn-outline-primary mx-3"><i class="fa fa-user-circle" aria-hidden="true"></i></button>
          <button type="button" class="btn btn-outline-primary mx-3"><i class="fa fa-heart" aria-hidden="true"></i></button>
          <button type="button" class="btn btn-outline-primary mx-3"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
        </div>
      
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">All Department<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="product.html">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="login.html">Mobile Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">headset</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="compare.html">Mobile Accesorice</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contactus.html">Laptop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="addtowish.html">Wearable</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown" />
                <a class="dropdown-item" href="#">Watch</a>
                <a class="dropdown-item" href="#">headset</a>
                <a class="dropdown-item" href="#">Charger</a>
                <a class="dropdown-item" href="#">Pendrive</a>
                <a class="dropdown-item" href="#">SD Card</a>
            </li>
          </ul>
        </div>
      </nav>
      </section>
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="Ban_Slider_Head w-100">
            <div class="circle"></div>
            <div class="Slider_Content d-flex justify-content-around align-items-center mx-5">
              <div class="slider_textBx">
                <h2>Aluminum Case with<br/>Braided <span>Black</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus dolore autem voluptates facilis vero, libero nemo voluptatem minima a voluptatum illo iste voluptate neque? Veritatis delectus dolor quod porro!</p>
                <a href="">Buy Now</a> 
              </div>
              <div class="Slider_ImgBx d-flex justify-content-center align-items-center">
                <img src="image//watch.png" alt="" class="img" />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="Ban_Slider_Head w-100">
            <div class="circle"></div>
            <div class="Slider_Content d-flex justify-content-around align-items-center mx-5">
              <div class="slider_textBx">
                <h2>Aluminum Case with<br/>Braided <span>Black 2</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus dolore autem voluptates facilis vero, libero nemo voluptatem minima a voluptatum illo iste voluptate neque? Veritatis delectus dolor quod porro!</p>
              </div>
              <div class="Slider_ImgBx d-flex justify-content-center align-items-center">
                <img src="image//jbl-flip.png" alt="" class="img" />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="Ban_Slider_Head w-100">
            <div class="circle"></div>
            <div class="Slider_Content d-flex justify-content-around align-items-center mx-5">
              <div class="slider_textBx">
                <h2>Aluminum Case with<br/>Braided <span>Black 3</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus dolore autem voluptates facilis vero, libero nemo voluptatem minima a voluptatum illo iste voluptate neque? Veritatis delectus dolor quod porro!</p>
              </div>
              <div class="Slider_ImgBx d-flex justify-content-center align-items-center">
                <img src="image//Jbl-silver.png" class="img" />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="Ban_Slider_Head w-100">
            <div class="circle"></div>
            <div class="Slider_Content d-flex justify-content-around align-items-center mx-5">
              <div class="slider_textBx">
                <h2>Aluminum Case with<br/>Braided <span>Black 4</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus dolore autem voluptates facilis vero, libero nemo voluptatem minima a voluptatum illo iste voluptate neque? Veritatis delectus dolor quod porro!</p>
              </div>
              <div class="Slider_ImgBx d-flex justify-content-center align-items-center">
                <img src="image//clip.png" alt="" class="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="swiper-pagination"></div>
      
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>

  
    <section class="mini_heading">
        <div class="mini_card">
            <div class="roundimg">
                <img src="image//bluetooth 1.png" alt="" />
            </div>
            <div class="roundtit">Mobile <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span></div>
        </div>
        <div class="mini_card">
            <div class="roundimg">
                <img src="image//laptop 1.png" alt="" />
            </div>
            <div class="roundtit">laptop <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span></div>
        </div>
        <div class="mini_card">
            <div class="roundimg">
                <img src="image//powerbank 1.png" alt="" />
            </div>
            <div class="roundtit">Bluetooth <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span></div>
        </div>
        <div class="mini_card">
            <div class="roundimg">
                <img src="image//smartphone 1.png" alt="" />
            </div>
            <div class="roundtit">Powerbank <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span></div>
        </div>
        <div class="mini_card">
            <div class="roundimg">
                <img src="image//smart-watch 1.png" alt="" />
            </div>
            <div class="roundtit">Smart Watch <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span></div>
        </div>
    </section>

  
    <div class="offer d-flex justify-content-center align-items-center">
      <div class="Gr_Cricle"></div>
      <div class="offer_Content d-flex justify-content-around align-items-center">
        <div class="off_fst_Img d-flex justify-content-center align-items-center">
          <img src="image//jbl 2.png" alt="" />
        </div>
        <div class="off_txt text-center">
          <div class="flg text-uppercase">Offer <br/><span class="flg_mini">of the</span>  <br/><span class="flg_big">day</span></div>
          <div class="title">JBL Filp 5</div>
          <div class="price">Rs.10,900.00</div>
          <div class="perag">60%</div>
          <div class="buy">Buy Now</div>

          <div id="clockdiv" class="clockCL d-flex justify-content-center align-items-center mt-4">
            <div class="timeCL d-flex">
              <div class="position-relative mx-2">
                <span class="hours"></span>
                <span class="smalltext">Hours</span>
              </div>
              <div class="position-relative mx-2">
                <span class="minutes"></span>
                <span class="smalltext">Minutes</span>
              </div>
              <div class="position-relative mx-2">
                <span class="seconds"></span>
                <span class="smalltext">Seconds</span>
              </div>
            </div>
          </div>
        </div>
        <div class="off_lst_Img d-flex justify-content-center align-items-center"><img src="image//jbl-flip2.png" alt="" /></div>
      </div>
      <div class="blue_Cricle"></div>
    </div>

    <div class="headHm">
      <span class="HDark">Popular</span>
      &nbsp;
      <span class="Hlight">Products</span>
    </div>

    
    <div class="filter_gallray">
      <ul>
        <li class="fil_list active" data-filter="all">All</li>
        <li class="fil_list" data-filter="mobile">Mobile</li>
        <li class="fil_list" data-filter="camera">Camera</li>
        <li class="fil_list" data-filter="watch">Watch</li>
        <li class="fil_list" data-filter="shoe">Shoe</li>
        <li class="fil_list" data-filter="headset">headset</li>
      </ul>
      <div class="fil_product">
        <div class="itemBox mobile">
          <div class="box_card">
          <div class="img_Box">
              <img src="image//JBL_Flip_Hero_Blue.png" alt="" />
          </div>
            <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
            <div class="Description">
                <div class="D_Heading">Apple iPhone 
                    11 Pro Max</div>
                    <div class="rupees">Rs. 17,900.00</div>
                    <label for="freeDelivery">Free Delivery</label>
            </div>
          </div>
        </div>
        <div class="itemBox camera"><div class="box_card">
          <div class="img_Box">
              <img src="image//watch.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div></div>
        <div class="itemBox watch">
          <div class="box_card">
            <div class="img_Box">
                <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
                
            </div>
              <div class="box_Icon">
                <i class="fa fa-heart hrt" aria-hidden="true"></i>
                <i class="fa fa-shopping-bag bag" aria-hidden="true"></i>
              </div>
            <div class="Description">
                <div class="D_Heading">Apple iPhone 
                    11 Pro Max</div>
                    <div class="rupees">Rs. 17,900.00</div>
                    <label for="freeDelivery">Free Delivery</label>
                    
            </div>
        </div>
          </div>
        <div class="itemBox shoe">
          <div class="box_card">
            <div class="img_Box">
                <img src="image//jblRed.png" alt="" />
                
            </div>
              <div class="box_Icon">
                <i class="fa fa-heart hrt" aria-hidden="true"></i>
                <i class="fa fa-shopping-bag bag" aria-hidden="true"></i>
              </div>
            <div class="Description">
                <div class="D_Heading">Apple iPhone 
                    11 Pro Max</div>
                    <div class="rupees">Rs. 17,900.00</div>
                    <label for="freeDelivery">Free Delivery</label>
                    
            </div>
        </div>
        </div>
        <div class="itemBox headset"><div class="box_card">
          <div class="img_Box">
              <img src="image//clip.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div></div>
        <div class="itemBox mobile"><div class="box_card">
          <div class="img_Box">
              <img src="image//Jbl-silver.png" alt="" />
            </div>
            <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
          <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
          </div>
      </div></div>
        <div class="itemBox headset"><div class="box_card">
          <div class="img_Box">
              <img src="image//Jbl-silver.png" alt="" />
            </div>
            <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
          <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
          </div>
      </div></div>
        
      </div>
    </div>


    <div class="adLayout">
      <div class="layout"><img src="image//l1.png" alt="" /></div>
      <div class="layout"><img src="image//l2.png" alt="" /></div>
      <div class="layout"><img src="image//l3.png" alt="" /></div>
      <div class="layout"><img src="image//l4.png" alt="" /></div>
    </div>


    
    <div class="headHm">
      <span class="Hlight">New</span>
      &nbsp;
      <span class="HDark">Arrival</span>
    </div>

   
    <section class="new_Arrival">
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-android" aria-hidden="true"></i></span>Samsung</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
    </section>
   
    <div class="headHm">
      <span class="HDark">Top 10</span>
      &nbsp;
      <span class="Hlight">Offer</span>
    </div>

   
    <section class="new_Arrival">
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-android" aria-hidden="true"></i></span>Samsung</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
    </section>
 
    <div class="headHm">
      <span class="HDark">Bundle</span>
      &nbsp;
      <span class="Hlight">Packs</span>
    </div>

    
    <section class="new_Arrival">
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
          </div>
            <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
          <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-android" aria-hidden="true"></i></span>Samsung</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            
          <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
      <div class="box_card">
          <div class="title_Brand"><span><i class="fa fa-apple" aria-hidden="true"></i></span>Apple</div>
          <div class="img_Box">
              <img src="image//iphone-12-pro-srilanka (1) 1.png" alt="" />
              
          </div>
            <div class="Description">
              <div class="D_Heading">Apple iPhone 
                  11 Pro Max</div>
                  <div class="rupees">Rs. 17,900.00</div>
                  <label for="freeDelivery">Free Delivery</label>
                  
          </div>
          <div class="box_Icon">
            <i class="fa fa-heart hrt" aria-hidden="true"></i>
            <a href="detailPage.html"><i class="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          </div>
      </div>
    </section>

    <div class="payment d-flex justify-content-around align-items-center flex-wrap my-5">
      <div class="payHead p-3  py-5 d-flex justify-content-around align-items-center">
        <div class="PIcon"><i class="fa fa-car" aria-hidden="true"></i></div>
        <div class="payline"></div>
        <div class="PayText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, repellat.</div>
      </div>
      <div class="payHead p-3  py-5 d-flex justify-content-around align-items-center">
        <div class="PIcon"><i class="fa fa-usd" aria-hidden="true"></i></div>
        <div class="payline"></div>
        <div class="PayText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, repellat.</div>
      </div>
      <div class="payHead p-3  py-5 d-flex justify-content-around align-items-center">
        <div class="PIcon"><i class="fa fa-shopping-bag" aria-hidden="true"></i></div>
        <div class="payline"></div>
        <div class="PayText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, repellat.</div>
      </div>
      <div class="payHead p-3  py-5 d-flex justify-content-around align-items-center">
        <div class="PIcon"><i class="fa fa-cc-paypal" aria-hidden="true"></i></div>
        <div class="payline"></div>
        <div class="PayText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, repellat.</div>
      </div>
    </div>
  
    
    <div class="swiper-container brand">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="image/brands/apple.png" alt="" class="img-fluid" /></div>
        <div class="swiper-slide"><img src="image/brands/download (1) 1.png" alt="" class="img-fluid" /></div>
        <div class="swiper-slide"><img src="image/brands/download 1.png" alt="" class="img-fluid" /></div>
        <div class="swiper-slide"><img src="image/brands/png-clipart-sony-playstation-logo-illustration-playstation-2-playstation-3-playstation-4-playstation-vr-playstation-network-playstation-electronics-text 1.png" alt="" class="img-fluid" /></div>
        <div class="swiper-slide"><img src="image/brands/sony_logo_PNG7 1.png" alt="" class="img-fluid" /></div>
      </div>
    </div>

    
    <footer class="page-footer text-center text-md-left pt-4" />

  
      <div class="container-fluid">
        <div class="row">

     
          <div class="col-md-3">
            <img src="image//xmobile-logo.jpg" alt="" class="img-fluid" />
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laboriosam possimus repellendus! Laboriosam in, facilis excepturi laborum incidunt temporibus ipsa! Accusantium</p>
            <div class="d-flex">
              <div class="m-2">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
              </div>
              <div class="m-2">
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
              </div>
              <div class="m-2">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          

          <hr class="w-100 clearfix d-md-none" />

        
          <div class="col-md-2 mx-auto pt-5">
            <h5 class="font-weight-bold mb-4 fotbefoe">Go to
            </h5>
            <ul class="list-unstyled">
              <li><a href="#!" class="text-dark">Home</a></li>
              <li><a href="#!" class="text-dark">About </a></li>
              <li><a href="#!" class="text-dark">Top 10 Offers </a></li>
              <li><a href="#!" class="text-dark">New Arrivals </a></li>
              <li><a href="#!" class="text-dark">Value of the Day </a></li>
              <li><a href="#!" class="text-dark">Bundle Packs </a></li>
              <li><a href="#!" class="text-dark">Wishlist </a></li>
              <li><a href="#!" class="text-dark">Compare </a></li>
              <li><a href="#!" class="text-dark">Contact </a></li>
            </ul>
          </div>
         

          <hr class="w-100 clearfix d-md-none">

         </hr>
          <div class="col-md-2 mx-auto pt-5">
            <h5 class="font-weight-bold mb-4 fotbefoe">Customer</h5>
            <ul class="list-unstyled">
              <li><a href="#!" class="text-dark">My Account
              </a></li>
              <li><a href="#!" class="text-dark">Track your Order </a></li>
              <li><a href="#!" class="text-dark">FAQs </a></li>
              <li><a href="#!" class="text-dark">Privacy Policy </a></li>
              <li><a href="#!" class="text-dark">Terms and Conditions </a></li>
              <li><a href="#!" class="text-dark">Exchanges and Refunds </a></li>
              <li><a href="#!" class="text-dark">Store Directory </a></li>
              <li><a href="#!" class="text-dark">Online Payments </a></li>
              <li><a href="#!" class="text-dark">Instalment Payment Plans </a></li>
            </ul>
          </div>
          


          
          <div class="col-md-2 mx-auto pt-5">
            <h5 class="font-weight-bold mb-4 fotbefoe">Follow me</h5>
            <ul class="list-unstyled">
              <li><a href="#!" class="text-dark">Facebook</a></li>
              <li><a href="#!" class="text-dark">Whats App</a></li>
              <li><a href="#!" class="text-dark">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    

  
      <div class="footer-copyright py-3 text-center">
        <div class="container-fluid" >
          © 2021 Copyright: <a href="http://www.X-Mobile.com"> X-Mobile.com </a>

        </div>
      </div>
   

    


                   </div>
      
	     );
    }
}
export default Home;