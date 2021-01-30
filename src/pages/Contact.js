import React from 'react';
import '../styles/Contact.scss';

const Contact = () => {
	return (
		<section id="contact" className="my-5">
			<div className="container">
				<h1 className="heading">Kontakt</h1>
				<div className="row">
					<div className="col-lg-6 p-5 rounded text-center contact-left"  >
						<p className="mb-5">
							Zachęcamy do kontaktu mailowego oraz telefonicznego, konsultacje i wycena są całkowicie bezpłatne.
							Wycena obejmuje pomiar, projekt, dostawę i montaż. Gwarantujemy konkurencyjne ceny, profesjonalne wykonanie i fachowe doradztwo na każdym etapie realizacji zlecenia.
							Swoje usługi oferujemy mieszkańcom Rzeszowa i okolic.
							Większe realizacje wykonujemy również na terenie całego kraju.
							</p>
						<h3>Adres:</h3>
						<p className="contact-text--bold">ul.Grota Roweckiego 27</p>
						<p className="contact-text--bold">35-302 Rzeszów</p>
						<h3>Telefon:</h3>
						<p className="contact-text--bold">+48 695 250 618</p>
					</div>
					<div className="col-lg-6 p-5 contact-right">
						<h3 className="mb-4 text-center text-md-left">Napisz do nas</h3>
						<form action="">
							<div className="form-group">
								<input type="text" placeholder="Imię i Nazwisko" className="border-1 form-control" />
							</div>
							<div className="form-group">
								<input type="text" placeholder="Adres e-mail" className=" form-control border-1" />
							</div>
							<div className="form-group">
								<input type="text" placeholder="Telefon" className=" form-control border-1" />
							</div>
							<div className="form-group">
								<textarea className="form-control" cols="20" rows="10" placeholder="Treść wiadomości"></textarea>
							</div>
							<button className="btn btn-block mt-5 btn_contact">Wyślij</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;