import React, { Component, useState } from "react";
import Welcome from "./components/Welcome";
import Support from "./components/Support";
import ListCast from "./components/ListCast";
import InfoSection from "./components/InfoSection";
import Modal from "./components/Modals";

function App() {
  const name = "StarGazers";
  let [memberInfo, setMemberInfo] = useState(null);

  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <Welcome name="StarGazers" />
        <p>
          Members of an <b>intergalactic alliance</b> paving the way for peace
          and benevolence among all species. They are known for their enthusiasm
          for science, for their love of fun, and their dedication to education.
        </p>
        <ListCast
          onChoice={(info) => {
            setMemberInfo(info);
          }}
        />
        {memberInfo && (
          <Modal
            memberInfo={memberInfo}
            handleClose={() => setMemberInfo(null)}
          />
        )}
        <Support />
      </hgroup>
    </div>
  );
}
export default App;
