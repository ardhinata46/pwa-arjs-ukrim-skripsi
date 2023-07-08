const infoGedung_unit3c = () =>
  `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="./img_gedung/unit3c/unit3c1.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img_gedung/unit3c/unit3c2.jpg" alt="Second slide">
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

               <div class="card-body">
                    <h5 style="text-align: center; margin-bottom: 15px">Daftar Ruangan :</h5>
                <button type="button" id="button1_unit3c" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button2_unit3c" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button3_unit3c" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
            
               </div>
`;
const infoRuangan_unit3c = () =>
  `<div id="carouselExampleControls1" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img id="img-ruang1-unit3c" class="d-block w-100" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img id="img-ruang2-unit3c" class="d-block w-100" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img id="img-ruang3-unit3c" class="d-block w-100" alt="Third slide">
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
                <p id="descInfoRuangan_unit3c" style="text-align: justify; margin: 20px"></p>
`;
export {infoGedung_unit3c, infoRuangan_unit3c};
