// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  const cardStyle = {
    padding:' 10px 10px 10px 10px',
    margin:' 50px 10px 10px 10px',
    maxwidth: '540px',
    backgroundColor: '#FEFAE0',    
  };
  return (
    <div className="card mb-3" style={cardStyle}>
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src="./src/images/Profile5.jpg"
        alt="Profile Picture"  height={350} width={350}
        className="img-fluid rounded-start"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
