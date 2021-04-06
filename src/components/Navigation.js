import { Link, NavLink } from "react-router-dom";

function Navigation({ onRouteChange }){
  return(
    <header className="sans-serif">
      <div className="cover bg-left bg-center-l bg-dark-gray">
      {/* <div className="bg-black-80 pb5 pb6-m pb7-l"> */}
        <nav className="dt w-100 mw8 center ">
          <div className="dtc w2 v-mid pa3">
            <NavLink exact to="/" activeClassName="active" className="dib w2 h2 pa1 ba b--black-90 grow-large border-box">
            <svg
              className="link white-90 hover-black"
              data-icon="info"
              viewBox="0 0 32 32"
              style={{fill: "currentcolor"}}
            >
            <title>
            skull icon
            </title>
            <path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 …" />
            </svg>
            </NavLink>
          </div>
            <div className="dtc v-mid tr pa1 ph3 ">
              <NavLink className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/doctors"> Doctors </NavLink>
              <NavLink className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/virtualAssistant"> Virtual Assistant </NavLink>
              <NavLink className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/about"> About </NavLink>
              <NavLink className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/scheduler"> Scheduler </NavLink>
              <NavLink className= "f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" to="/signin"> Sign Out </NavLink>
            </div>
        </nav>
        {/* </div> */}
       </div>

</header>
  );
}

export default Navigation;
