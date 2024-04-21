import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import Support from "./components/Support";
import ListCast from "./components/ListCast";
import Modal from "./components/Modals";
import Nav from "./components/Nav"

function App() {
  // move the cast state to the App component
  const [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);
  
  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });


  return (
    <>
    <Nav cast={cast} onChoice={(member)=> setMemberInfo(member)} />
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <Welcome name="StarGazers" />
        <p>
          Members of an <b>intergalactic alliance</b> paving the way for peace
          and benevolence among all species. They are known for their enthusiasm
          for science, for their love of fun, and their dedication to education.
        </p>
        <ListCast cast={cast}
          onChoice={(info) => {
            setMemberInfo(info);
          }}
        />
        {memberInfo && (
          <Modal
            cast={cast}
            memberInfo={memberInfo}
            handleClose={() => {setMemberInfo(null)}}
            handleChange={(memberID) => {setMemberInfo(cast[memberID])}}
          />
        )}
        <Support />
      </hgroup>
    </div>
    </>
  );
}
export default App;
