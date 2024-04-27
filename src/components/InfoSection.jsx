export default ({ memberInfo }) => {
  return (
    <article>
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
            <h1>{memberInfo.name}</h1>
            <p>{memberInfo.bio}</p>
          </hgroup>
        </div>
      </hgroup>
    </article>
  );
};
