
function Header(inGame) {
  return (
    <header className='m-4'>
      {inGame ? <h3>WELCOME</h3> : <h3>NOW IN GAME</h3>}
    </header>
  );
}
export default Header;
