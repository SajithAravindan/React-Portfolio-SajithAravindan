// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  const cardStyle = {
    padding: ' 10px 10px 10px 10px',
    margin: ' 50px 10px 10px 10px',
    maxwidth: '540px',
    backgroundColor: '#FEFAE0',
  };
  return (
    <div className="card mb-3" style={cardStyle}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="./src/images/Profile3.jpg"
            alt="Profile Picture" height={750} width={750}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">About ME</h5>
            <p className="card-text">
              A technology specialist with a strong business sense, with an overall experience of 
              15 years plus in Analysis, Design, Development and Project management of Enterprise 
              products and Web based applications. Primary expertise is in Enterprise Procurement 
              systems, Knowledge Management systems, Enterprise portals, Content Management Systems 
              and Document Management systems.
              </p>
              <p className="card-text">
              I am committed to knowing and working with the latest technological applications to produce 
              world-class success through innovative, and grow with the company.

            </p>
            <p className="card-text">
              <small className="text-muted">Currently I work in the Retail Domain. This Boot Camp is my first step to switching my career.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
