var React = require("react");

class ErrorComponent extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <h1> YONCE ERROR </h1>
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
