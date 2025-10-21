interface SkillListProps {
  src: string;
  skill: string;
}

const SkillList: React.FC<SkillListProps> = ({ src, skill }) => {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
