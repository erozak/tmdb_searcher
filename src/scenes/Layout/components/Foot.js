import AUTHOR from '../../../constants/AUTHOR';

const Foot = () => (
  <footer className="foot">
    <a href={`${AUTHOR.repo.host}${AUTHOR.repo.name}`} target="_blank" rel="noopener noreferrer">
      <i className="fa fa-github" />
    </a>
    <a href={AUTHOR.page} target="_blank" rel="noopener noreferrer">{AUTHOR.name}</a>
    &nbsp;&copy;&nbsp;
    <time alt={AUTHOR.createTime}>{AUTHOR.createTime}</time>
  </footer>
);

export default Foot;
