import s from "./style.module.css";
import { TextCard } from "components/TextCard/TextCard";

export function NoteBrowse(props) {
  return (
    <>
      <TextCard
        title="test"
        subtitle="01/O1/2022"
        content="bladvdfvdkqvbdjqvbdbvdjkqvbjbvdkjqbcjdskqm"
        onClickTrash={() => alert("Click trash")}
        onClick={() => alert("Click note")}
      />
    </>
  );
}
