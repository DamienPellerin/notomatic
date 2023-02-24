import s from "./style.module.css";
import { Logo } from "components/Logo/Logo";
import logo from "assets/images/logo.png";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { Navigate, useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/")}
          title="Notomatic"
          subtitle="Manage your notes"
          image={logo}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate("/note/new")}>
          Ajouter une note +
        </ButtonPrimary>
      </div>
    </div>
  );
}

export { Header };
