export default ({ cast, memberInfo, handleClose, handleChange }) => {


  return (
    <dialog id="modal-memberInfo" open>
      <article style={{ paddingTop: "1.8rem" }}>
        <button aria-label="Close" rel="prev" onClick={handleClose}></button>
        <hgroup>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <img
              style={{ width: "200px" }}
              src={`images/${memberInfo.slug}.svg`}
              alt={memberInfo.name}
            />
            <hgroup>
              <h1 style={{marginBottom:"1rem"}}>{memberInfo.name}</h1>
              <p>{memberInfo.bio}</p>
              <hgroup>
                <a href="#" className="outline" role="button"
                onClick={() => handleChange(Number(memberInfo.id) - 1)}
                >&lt;</a>
              <a href="#" className="outline" role="button"
              onClick={() => handleChange(Number(memberInfo.id) + 1)}
              >&gt;</a>
              </hgroup>
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  );
};
