import React, { Component, useState } from 'react';
import Welcome from './components/Welcome';
import Support from './components/Support';
import ListCast from './components/ListCast';

function App() {
  const name = 'StarGazers'
  let [memberInfo, setMemberInfo] = useState(null);

  return (
    <div className="container">
      
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name="StarGazers" />
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast onChoice={(info)=> {setMemberInfo(info)}} />
          { memberInfo &&  
            <article><hgroup>
              <div>
                <img src={`images/${memberInfo.slug}.svg`} alt={memberInfo.name}/>
                <h1>{memberInfo.name}</h1>
                <p>{memberInfo.bio}</p>
              </div>
              </hgroup></article>
          }
          <Support />
        </hgroup>
      
    </div>
  )
}
export default App
