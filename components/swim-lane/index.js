import './style.scss';

const SwimLane = (props) => (
  <>
    <div className="lane-wrap">
      <div className="container">
        <div className="lane-head">
          <h3>Featured Content</h3>
          <p className="border-through  featured-separator"><span>List of roadmaps mostly visited by the community. There are <a href="#" className="dark-link">more roadmaps also</a>.</span></p>
        </div>
        <div className="swim-lane row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item-container">
            <a className="lane-item" href='#'>
              <h4>Frontend Developer</h4>
              <p>Step by step guide to becoming a modern frontend developer in 2019</p>
            </a>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item-container">
            <a className="lane-item" href='#'>
              <h4>Backend Developer</h4>
              <p>Step by step guide to becoming a modern backend developer in 2019</p>
            </a>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item-container">
            <a className="lane-item" href='#'>
              <h4>DevOps Roadmap</h4>
              <p>Step by step guide to become an SRE or for any operations role in 2019</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="lane-wrap">
      <div className="container">
        <p className='border-through featured-separator'><span>List of most visited guides. There are <a href="#" className="dark-link">more guides also</a>.</span></p>
        <div className="swim-lane row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item-container">
            <a className="lane-item" href='#'>
              <h4>Design Patterns for Humans</h4>
              <p>A language agnostic, ultra-simplified explanation to design patterns</p>
            </a>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item-container">
            <a className="lane-item" href='#'>
              <h4>Learn Regex</h4>
              <p>An easy to understand guide on regular expressions with real world examples</p>
            </a>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item-container">
            <a className="lane-item" href='#'>
              <h4>Bash Guide</h4>
              <p>Easy to understand guide for bash with real world usage examples.</p>
            </a>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item-container">
            <a className="lane-item" href='#'>
              <h4>DNS in One Picture</h4>
              <p>Quick illustrative guide on how a website is found on the internet.</p>
            </a>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item-container">
            <a className="lane-item" href='#'>
              <h4>Using React Hooks</h4>
              <p>Start using React hooks in your react applications today with this guide.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

SwimLane.defaultProps = {
  className: '',
};

export default SwimLane;