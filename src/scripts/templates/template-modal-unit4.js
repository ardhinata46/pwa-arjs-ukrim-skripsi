const infoGedung_unit4 = () =>
  ` <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="./img_gedung/fiskom/fiskom.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img_gedung/fiskom/fiskom.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img_gedung/fiskom/fiskom.jpg" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <h5 style="text-align: center; margin: 20px">Menu Gedung :</h5>
             <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0" style="text-align: center">
        <button id="btn-gedung-unit4a" class="btn btn-info" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
                <button type="button" id="button1_unit4a" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button2_unit4a" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button3_unit4a" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button4_unit4a" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
            </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0" style="text-align: center">
        <button id="btn-gedung-unit4b" class="btn btn-info" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
                <button type="button" id="button1_unit4b" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button2_unit4b" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button3_unit4b" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button4_unit4b" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button5_unit4b" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
      </div>
    </div>
  </div>
`;

const infoRuangan_unit4 = () =>
  `<div id="carouselExampleControls1" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img id="img-ruang1-unit4" class="d-block w-100" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img id="img-ruang2-unit4" class="d-block w-100" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img id="img-ruang3-unit4" class="d-block w-100" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <p id="descInfoRuangan_unit4" style="text-align: justify; margin: 20px"></p>
`;


export { infoGedung_unit4, infoRuangan_unit4};
