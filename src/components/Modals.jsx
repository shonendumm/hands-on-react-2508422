export default ({ cast, memberInfo, handleClose, handleBackward, handleForward }) => {

  // To do cycling through the cast members for forward
  const moveForward = (memberID) => {
    const nextIndex = (memberID + 1) % cast.length; // else it skips
    handleForward(nextIndex);
  }
  const moveBackward = (memberID) => {
    let nextIndex = memberID;
    if (nextIndex === 0) {
      nextIndex = cast.length - 1
    } else {
      nextIndex = memberID - 1; 
    }
    handleBackward(nextIndex);
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
        </hgroup>
      <button aria-label="Backward" onClick={()=> moveBackward(memberInfo.id)}>&lt;</button>
      <button aria-label="Forward" onClick={()=> moveForward(memberInfo.id)}>&gt;</button>
      </article>
    </dialog>
  );
};
