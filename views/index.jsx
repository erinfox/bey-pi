var React = require("react");

/*This is the main landing page returned from get request to "/"  
 jsx view engine in app.js configured to server jsx and ruotes/index has root / route */

class IndexComponent extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 className="title"> BEYONCE API </h1>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: "50px",
    fontSize: "14px",
    fontFamily: "Lucida Grande"
  },
  links: {
    color: "#00B7FF"
  }
};

module.exports = IndexComponent;
