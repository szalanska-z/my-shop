import React from "react";
import $ from "jquery";
import "../styles/Contact.scss";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    mailSent: false,
    error: null,
    msg: 0,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state)) {
      console.log("poszlo");
      let form = {
        Name: this.state.name,
        Email: this.state.email,
        Phone: this.state.phone,
        Message: this.state.message,
      };
      $.ajax({
        context: this,
        type: "POST",
        url: "http://localhost/ecoshop/messages/contact.php",
        data: form,
      })
        .done(function (result) {
          console.log("done", result);
          if (result !== "OK") {
            this.resetForm();
          } else {
            this.setState({
              mailSent: false,
              error: "Nie udało się wysłać wiadomości",
            });
          }
        })
        .fail(function (result) {
          console.log("fail", result);
          this.setState({
            msg: 3,
          });
        });
    } else {
      this.setState({
        msg: 2,
        mailSent: false,
      });
    }
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
      mailSent: false,
      error: null,
      msg: 0,
    });
    this.setState({
      mailSent: true,
      msg: 1,
    });
  };
  validateForm = ({ name, email, message }) => {
    let validate = {
      name,
      email,
      message,
    };
    let regExpName = /^[a-zA-Z].*[\s.]*$/;
    let regExpEmail = /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidate = true;
    for (let key of Object.keys(validate)) {
      if (!validate[key].length > 0) {
        isValidate = false;
      }
    }
    if (!regExpName.test(String(name).toLowerCase())) {
      isValidate = false;
    }
    if (!regExpEmail.test(String(email).toLowerCase())) {
      isValidate = false;
    }
    return isValidate;
  };

  render() {
    return (
      <section id="contact" className="my-5">
        <div className="container">
          <h1 className="heading">Kontakt</h1>
          <div className="row">
            <div className="col-lg-6 p-5 rounded text-center contact-left">
              <p className="mb-5">
                Zachęcamy do kontaktu mailowego oraz telefonicznego, konsultacje
                są całkowicie bezpłatne. <span>Eco Shop</span> powstał, by
                promować proekologiczną postawę i zarażać miłością do naturalnej
                pielęgnacji. Każdego dnia prezentuję Ci zdrową alternatywę dla
                powszechnie dostępnych kosmetyków, zawierających syntetyczne i
                szkodliwe dla zdrowia składniki. Wyłącznie naturalne i
                organiczne kosmetyki, w tym wiele certyfikowanych. Kosmetyki
                ręcznie robione, z małych polskich manufaktur. Bogate i
                przemyślane receptury z wykorzystaniem najlepszej jakości
                surowców. Duża zawartość roślinnych i mineralnych składników
                aktywnych. Łagodność, skuteczność i bezpieczeństwo stosowania.
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
                  <input
                    type="text"
                    placeholder="Imię i Nazwisko"
                    className="border-1 form-control"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Adres e-mail"
                    className=" form-control border-1"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Telefon"
                    className=" form-control border-1"
                    value={this.state.phone}
                    onChange={(e) => this.setState({ phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    cols="20"
                    rows="10"
                    placeholder="Treść wiadomości"
                    value={this.state.message}
                    onChange={(e) => this.setState({ message: e.target.value })}
                  ></textarea>
                </div>
                {this.state.mailSent && this.state.msg === 1 && (
                  <div className="formInfo-sent">
                    Dziękujemy za skontaktowanie się z nami :)
                  </div>
                )}
                {this.state.msg === 2 && (
                  <div className="formInfo-error">
                    Niepoprawnie uzupełniony formularz!
                  </div>
                )}
                {this.state.msg === 3 && (
                  <div>Błąd serwera :( Spróbuj ponownie później.</div>
                )}

                <button
                  className="btn btn-block mt-5 btn_contact"
                  onClick={this.handleFormSubmit.bind(this)}
                >
                  Wyślij
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
