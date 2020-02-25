import React from "react";
import PropTypes from "prop-types";
import { addMessage } from "../Actions";
import { connect } from "react-redux";

const AddMessage = props => {
  let input;
  return (
    <section id="new-message">
      <input
        onKeyPress={e => {
          if (e.key === "Enter") {
            props.dispatch(addMessage(input.value, "Me"));
            input.value = "";
          }
        }}
        type="text"
        ref={node => {
          input = node;
        }}
      />{" "}
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

// const mapDispatchToProps = dispatch => ({
//   dispatch: (message, author) => {
//     dispatch(addMessage(message, author));
//   }
// });

export default connect()(AddMessage);
