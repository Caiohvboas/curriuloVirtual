import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./informationContainer";


import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Caio Henrique" />
      <div className="title">Desenvolvedor</div>
      
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/19JmuRs8XG4ioQnMzMz9INmCnED_nFx61/view?usp=drive_link" className="btn">Download currícolo</a>
  </aside>
  );
};

export default Sidebar