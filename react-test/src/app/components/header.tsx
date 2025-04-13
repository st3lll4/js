import { global } from "styled-jsx/css";

export default function Header() {
  return (
    <>
    <nav>
    <div className="nav-container">
      <ul>
        <li className="nav-item">
          <a className="nav-link" href="/" >Houm</a> 
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Login" >Log in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/game">Play game</a>
        </li>
        <li className="nav-item">
          <a href='/Login' className="nav-link">Log out</a>
        </li>
      </ul>
      <div className="nav-greeting">
        Logged in as: tere
      </div>
    </div>
  </nav></>
  );
}
