import React from 'react';

interface TeamComponentProps {
  title: string;
}

const TeamComponent: React.FC<TeamComponentProps> = ({ title }) => {
  return (
    <div className="team-component">
      <h2>{title}</h2>
      <p>This component was implemented by the development team</p>
    </div>
  );
};

export default TeamComponent;
