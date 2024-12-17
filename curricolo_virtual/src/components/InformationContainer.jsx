import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const informationContainer = () => {
  return (
    <section id="information">
    <div className="info-card">
      <AiFillPhone id="phone-icon" />
      <div>
        <h3>Telefone</h3>
        <p>(62)99250-2728</p>
      </div>
    </div>
    <div className="info-card">
      <AiOutlineMail id="email-icon" />
      <div>
        <h3>E-mail</h3>
        <p>caio.boas@hotmail.com</p>
      </div>
    </div>
    <div className="info-card">
      <AiFillEnvironment id="pin-icon" />
      <div>
        <h3>Localização</h3>
        <p>Goiânia / GO</p>
      </div>
    </div>
  </section>
  )
}

export default informationContainer