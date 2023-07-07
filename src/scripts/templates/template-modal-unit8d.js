const infoGedung_unit8d = () =>
  `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="./img_gedung/lab_farmasi/lab_farmasi.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img_gedung/lab_farmasi/lab_farmasi.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img_gedung/lab_farmasi/lab_farmasi.jpg" alt="Third slide">
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
                <button type="button" id="button1_unit8d" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button2_unit8d" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button3_unit8d" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button4_unit8d" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button5_unit8d" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button6_unit8d" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button7_unit8d" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>
                <button type="button" id="button8_unit8d" data-dismiss="modal" data-toggle="modal" href="#exampleModal" style="margin-top: 10px; margin-bottom: 10px; margin-right: auto; margin-left: auto; display: block" class="btn btn-outline-danger btn-radius"></button>

               </div>
`;
const infoRuangan_unit8d = () =>
  `<div id="carouselExampleControls1" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img id="img-ruang1-unit8d" class="d-block w-100" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img id="img-ruang2-unit8d" class="d-block w-100" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img id="img-ruang3-unit8d" class="d-block w-100" alt="Third slide">
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
                <p id="descInfoRuangan_unit8d" style="text-align: justify; margin: 20px"></p>
`;
export {infoGedung_unit8d, infoRuangan_unit8d};
