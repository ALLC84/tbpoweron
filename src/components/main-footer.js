import React from 'react'
/*
|-------------------------------------------
| IMPORTS HOOKS
|-------------------------------------------
*/
import { useSiteMetadata } from '@hooks/site-metadata'

export const MainFooter = () => {
    const {phone, email} = useSiteMetadata()
  return (
    <>
      <h2>Get In Touch</h2>
      <p>You can call us or send us an email and we will contact you as soon as possible.</p>

      <div className="row main__footer">
        {/* FORMULARIO */}
        <div className="12u main__footer-form">
          <form method="post" action="#">
            <div className="row uniform 50%">
              <div className="6u 12u$(medium)">
                <input type="text" name="name" id="name" placeholder="Nome" />
              </div>
              <div className="6u 12u$(medium)">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correio"
                />
              </div>
              <div className="12u">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Mensagem"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </form>
          <ul className="actions">
            <li>
              <input type="submit" value="Enviar Mensagem" />
            </li>
          </ul>
        </div>

        {/* DIRECCION */}
        <div className="12u main__footer-address">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-home">
                <span className="label">Address</span>
              </h3>
              8807 N TH ST
              <br />
              Tampa, Florida
              <br />
              United States
            </li>
            <li>
              <h3 className="icon fa-mobile">
                <span className="label">Telefone</span>
              </h3>
              {phone}
            </li>
            <li>
              <h3 className="icon fa-envelope-o">
                <span className="label">Andereço</span>
              </h3>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
