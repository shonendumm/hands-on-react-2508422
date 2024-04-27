import "./Nav.scss"

export default ({ cast, onChoice }) => {
  return (
    <nav className="container">
      <ul>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox" role="link" style={{margin:0}}>
              Cast
            </summary>
            <ul role="listbox" style={{display: "flex", flexDirection: "column", position: "absolute", backgroundColor: "white", zIndex:1}}>
              {cast.map((member) => (
                <li key={member.id}>
                  <a
                    onClick={() => {
                      onChoice(member);
                    }}
                    data-tooltip={member.name}
                  >{member.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <img
              style={{ height: "50px" }}
              src="images/logo_bug_stargazers.svg"
              alt="Stargazers logo"
            ></img>
          </a>
        </li>
      </ul>
    </nav>
  );
};
