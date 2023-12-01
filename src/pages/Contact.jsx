// This is a static page mocking an "About Us" section for our fake user data

export default function Contact() {
  const cardStyle = {
    maxwidth: '500px',
    backgroundColor: '#FEFAE0',
  };

  const cardHeaderStyle = {
     backgroundColor: '#FAEDCD',
     color: '#000000',
     textAlign: 'center',
     padding: '2px',
  };
  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <form className="row g-3 needs-validation">
      <div className="card rounded-0" style={cardStyle}>
        <div className="card-header p-0">
          <div style={cardHeaderStyle}>
            <h3><i className="fa fa-envelope"></i> Contact </h3>
            <p className="m-0">Will be great to hear fom you! </p>
          </div>
        </div>
        <div className="card-body p-3">
          <div className="form-group">
            <div className="input-group mb-2">
              <div className="input-group-prepend p-3">
                <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
              </div>
              <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Your Name" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group mb-2">
              <div className="input-group-prepend p-3">
                <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
              </div>
              <input type="email" className="form-control" id="nombre" name="email" placeholder="yourmailname@mail.com" required />
            </div>
          </div>

          <div className="form-group">
            <div className="input-group mb-2">
              <div className="input-group-prepend p-3">
                <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
              </div>
              <textarea className="form-control form-control-lg" placeholder="Your Message" rows={8} required></textarea>
            </div>
          </div>

          <div className="text-center">
            <input type="submit" value="Submit" className="btn btn-info btn-block rounded-2 py-2 p-5" />
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
