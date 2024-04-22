export default ({ cast, memberInfo, handleClose, handleChange }) => {

  // To do cycling through the cast members for forward
  const actChange = (memberID) => {
    let nextIndex = memberID;
    if (nextIndex <= 0) {
      nextIndex = cast.length - 1
    } 
    if (nextIndex >= cast.length) {
      nextIndex = nextIndex % cast.length; 
    }
    handleChange(nextIndex);
  }

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
            </hgroup>
          </div>
      <div style={{display: "flex", justifyContent:"center"}}>
      <button aria-label="Backward" className="outline" onClick={()=> actChange(Number(memberInfo.id)-1)}>&lt;</button>
      <div style={{width:"2rem"}}></div>
      <button aria-label="Forward" className="outline" onClick={()=> actChange(Number(memberInfo.id)+1)}>&gt;</button>
      </div>
        </hgroup>
      </article>
    </dialog>
  );
};
