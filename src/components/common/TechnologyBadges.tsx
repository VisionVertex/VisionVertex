import React from 'react';
type TechBadgeProps = {
    technologies: string[];
  };
  

const TechnologyBadges: React.FC<TechBadgeProps> = ({ technologies }) => {
  
  const getRandomBootstrapColor = (): string => {
    const colors = [ 'gradient-1', 'gradient-2', 'gradient-3', 
    'gradient-4', 'gradient-5', 'gradient-6', 'gradient-7'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="container mt-5">
      {technologies.map(tech => (
        <span key={tech} className={`badge rounded-pill fs-15 ${getRandomBootstrapColor()} m-1`}>
          {tech}
        </span>
      ))}
    </div>
  );
}

export default TechnologyBadges;
