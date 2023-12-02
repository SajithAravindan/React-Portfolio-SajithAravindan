// This is a static page mocking an "About Us" section for our fake user data
export default function Resume() {
  const cardStyle = {
    padding: ' 0px 10px 10px 10px',
    margin: ' 0px 10px 10px 10px',
    maxwidth: '540px',
    backgroundColor: '#FEFAE0',
  };
  const cardHeaderStyle = {
    backgroundColor: '#FAEDCD',
    color: '#000000',
    textAlign: 'left',
    padding: ' 10px 10px 10px 10px',
    margin: ' 0px 0px 10px 0px',
  };
  return (
    <div style={cardStyle}>
      <div className="row">
        <div className="col-md-12 p-10" style={cardHeaderStyle}>
          <h3 className="text-left"><i className="fa fa-wrench" /> PortFolio</h3>
        </div>
      </div>
      <div className="container shadow min-vh-100 py-2">
    <div className="container network_wrapper col-sm p-2 ">
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">Network Settings</h5>
                <ul className="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="true" data-bs-toggle="tab" href="#dhcp">DHCP</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#static">Static</a>
                    </li>
                </ul>
            </div>
            <form className="card-body tab-content">
                <div className="tab-pane active" id="dhcp">
                    <p className="card-text">Change DHCP Network settings.</p>
                </div>
                <div className="tab-pane" id="static">
                    <p className=" card-text">Change Static Network settings.</p>
                </div>
                <button className="btn btn-primary" type="submit">Save</button>
            </form>
        </div>
    </div>
</div>
    </div>
  );
}
