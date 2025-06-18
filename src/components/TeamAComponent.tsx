import React from 'react';

interface TeamAComponentProps {
  title: string;
}

const TeamAComponent: React.FC<TeamAComponentProps> = ({ title }) => {
  return (
    <div className="team-A-component">
      <h2>{title}</h2>
      <p>This component was implemented by Team A</p>
      <p>Task: ナビゲーションコンポーネントの実装</p>
    </div>
  );
};

export default TeamAComponent;
