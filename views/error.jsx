var React = require("react");

class ErrorComponent extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <h1> YONCÉ ERROR </h1>
        <h4>
          {" "}
          This route may not exist. Please try a different route. (/albums,
          /facts, /tracks)
        </h4>
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
module.exports = ErrorComponent;
