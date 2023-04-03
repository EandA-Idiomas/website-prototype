import React from "react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import teamData from "../Components/team_components/teamData.js";

function Team() {
  return (
    <div>
      <Header />
      <section className="team">
        <h1>Team</h1>
        <th className="team__container">
          {teamData.map((person) => (
            <td className="team__container__person">
              <img src={person.image} alt={person.name} />
              <h2>{person.name}</h2>
              <h3>{person.role}</h3>
              <p>{person.bio}</p>
            </td>
          ))}
        </th>
      </section>
      <Footer />
    </div >
  );
}

export default Team;