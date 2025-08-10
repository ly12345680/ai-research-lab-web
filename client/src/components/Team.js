import React, { useState, useEffect } from 'react';
import { fetchTeam } from '../api';

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeam()
      .then(data => {
        setTeam(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching team:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="team" className="section team">
        <div className="container">
          <h2>Our Team</h2>
          <div className="loading">Loading team members...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="team" className="section team">
      <div className="container">
        <h2>Our Team</h2>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              <img src={member.image_url} alt={member.name} />
              <h3>{member.name}</h3>
              <span className="team-title">{member.title}</span>
              <p>{member.bio}</p>
              
              <div className="team-links">
                <a href={`mailto:${member.email}`}>Email</a>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                )}
                {member.homepage && (
                  <a href={member.homepage} target="_blank" rel="noopener noreferrer">
                    Homepage
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
