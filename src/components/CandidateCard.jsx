import styles from "./CandidateCard.module.css";

const CandidateCard=(prop) =>{
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src= {prop.avatar} alt="avatar" width="800px" height="100px"  />
      <div>
        <div>Name:{name}</div>
        <div>Title & Company Name{prop.company_name}</div>
      </div>
      <div>$ Salary{prop.salary}</div>
    </div>
  );
}

export default CandidateCard;
