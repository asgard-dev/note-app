import style from "./Footer.module.css";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <footer className={style.Footer}>
      <div className={style.MadeBy}>Made By: Tanishq</div>
      <div className={style.Socials}>
        <a href="https://github.com/TanishqSingla">
          <GitHub />
        </a>
        <a href="https://twitter.com/TanishqSingla_">
          <Twitter />
        </a>
        <a href="https://linkedin.com/in/tanishqsingla">
          <LinkedIn />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
