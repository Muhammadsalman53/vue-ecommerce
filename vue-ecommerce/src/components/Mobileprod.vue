<template>
  <section class="pt-4" id="mobileproduct">
    <div class="col-12" id="mble-products">
      <div class="container">
        <div class="col-12 pb-4" id="mob-head">
            <h3>More in Mobile Products:</h3>
            <button class="btn btn-lg btn-outline-primary" type="button"><a href="#">View All ></a></button>
        </div>
        <div id="carouselMobControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex justify-content-center flex-wrap">
                <div class="card mx-2" style="width: 17rem;" id="card-1">
                    <img src="../assets/images/banner-1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                 <div class="card mx-2" style="width: 17rem;" id="card-2">
                    <img src="../assets/images/banner-1.jpg " class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card mx-2" style="width: 17rem;" id="card-3">
                    <img src="../assets/images/banner-1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card mx-2" style="width: 17rem;" id="card-4">
                    <img src="../assets/images/banner-1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>                 
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex justify-content-center flex-wrap">
                <div class="card mx-2" style="width: 17rem;" id="card-1">
                    <img src="../assets/images/banner-1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card mx-2" style="width: 17rem;" id="card-2">
                    <img src="../assets/images/banner-1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card mx-2" style="width: 17rem;" id="card-3">
                    <img src="../assets/images/banner-1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card mx-2" style="width: 17rem;" id="card-4">
                    <img src="../assets/images/banner-1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
              </div>
            </div>
            <!-- Add more carousel items with cards here -->
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselMobControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselMobControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default{
    name: 'Mobileprod',
    
}
</script>
