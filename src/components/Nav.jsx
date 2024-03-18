const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <strong>Top Stories</strong>
        </li>
      </ul>
      <ul>
        <li>
          <button className="primary" onClick={() => location.reload()}>Reload</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
