import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Message from "../components/Message";

const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul>
      {" "}
      {messages.map(message => (
        <Message key={message.id} {...message} />
      ))}{" "}
    </ul>{" "}
  </section>
);

MessagesList.prototype = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default connect(
  state => ({
    messages: state.messages
  }),
  {}
)(MessagesList);
