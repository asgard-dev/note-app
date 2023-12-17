import style from './Header.module.css'

function Header() {
  return (
    <header className={style.Header}>
      <span className={style.Logo}>NoteKeep</span>
      <p className={style['Logo-subtitle']}>A simple note taking app</p>
    </header>
  );
}

export default Header;
