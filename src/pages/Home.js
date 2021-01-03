import React from 'react';

const Home = () => {
	return (
		<div>
			<div className="jumbotron-fluid py-5">
				<div className="container text-center">
					<h1 className="display-3">Natural store</h1>
					<p className="font-italic lead" style={{ fontSize: "30px" }}>
						Kosmetyki naturalne
        	</p>
				</div>
			</div>
			<section id="about" className="mt-0 mb-4">
				<div className="about_bg container-fluid py-5">
					<div className="container py-5">
						<div className="row">
							<div className="col">
								<h1 className="heading">O nas</h1>
								<p className="text-center font-italic">
									Tworząc nasze kosmetyki naturalne zawsze kierujemy się troską o dobro naszych klientów, ale i środowiska naturalnego. Wierzymy, że moc składników płynących wprost z natury to recepta na piękno i doskonałe samopoczucie . Wraz z naszymi produktami przeniesiesz się w świat zniewalających aromatów, unikalnych formuł i co najważniejsze – efektów, które naprawdę widać.W ofercie Starej Mydlarni znajdziesz naturalne kosmetyki przeznaczone do kompleksowej pielęgnacji – w tym kosmetyki do kąpieli, ciała, twarzy i włosów. Stawiamy na prostotę, idącą w parze z najwyższą jakością.

									
            </p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="gallery" className="my-5">
				<div className="container">
					<h1 className="heading">Oferta</h1>
					<div className="row d-flex justify-content-center align-items-center mb-5">
						<div className="col-lg-6 mb-3">
							<img className="img-fluid d-block mx-auto img_gallery"
								src="https://i.pinimg.com/originals/7e/71/82/7e7182fc285251d8c6ecd40afae6cbd3.jpg"
								alt=""
							/>
						</div>
						<div className="col-lg-6 text-center">
							<h3>Twarz</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Molestiae dolores reprehenderit aperiam dicta illo nostrum
								nesciunt repudiandae, vero omnis ut provident corrupti deleniti
								rem voluptatem officia, nulla debitis distinctio delectus.
            </p>
							<button className="btn border-dark btn_gallery" data-toggle="modal" data-target="#modal-drawers">Zobacz produkty</button>
						</div>
					</div>
					<div className="row d-flex justify-content-center align-items-center mb-5">
						<div className="col-lg-6 order-lg-2 mb-3">
							<img className="img-fluid d-block mx-auto img_gallery"
								src="https://i.pinimg.com/564x/d8/5e/31/d85e3125be4116e4224eb4dab5095d31.jpg"
								alt=""
							/>
						</div>
						<div className="col-lg-6 text-center order-lg-1 ">
							<h3>Ciało</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Pariatur, aliquid! Unde consectetur vero reiciendis eaque a
								explicabo! Aut itaque sunt praesentium, aperiam temporibus nisi
								eveniet aspernatur natus animi, eum minus.
            </p>
							<button className="btn border-dark btn_gallery" data-toggle="modal" data-target="#modal-beds" >Zobacz produkty</button>
						</div>
					</div>
					<div className="row d-flex justify-content-center align-items-center mb-5">
						<div className="col-lg-6 mb-3">
							<img className="img-fluid d-block mx-auto img_gallery"
								src="https://i.pinimg.com/564x/d7/8d/be/d78dbe918fd71d2cb18ff9bff079f3a6.jpg"
								alt=""
							/>
						</div>
						<div className="col-lg-6 text-center">
							<h3>Włosy</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Molestiae dolores reprehenderit aperiam dicta illo nostrum
								nesciunt repudiandae, vero omnis ut provident corrupti deleniti
								rem voluptatem officia, nulla debitis distinctio delectus.
            </p>
							<button className="btn border-dark btn_gallery" data-toggle="modal" data-target="#modal-chairs">Zobacz produkty</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;