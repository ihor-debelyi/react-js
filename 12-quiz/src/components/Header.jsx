import logoImg from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={logoImg} alt="logo" />
      <h1>reactquiz</h1>
    </header>
  );
}

export default Header;
