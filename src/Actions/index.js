import * as Types from "./types";

let nextMessageID = 0;
let nextUserID = 0;

export const addMessage = (message, author) => ({
  type: Types.ADD_MESSAGE,
  id: nextMessageID++,
  message,
  author
});

export const addUser = name => ({
  type: Types.ADD_USER,
  id: nextUserID++,
  name
});

export const messageReceived = (message, author) => ({
  type: Types.MESSAGE_RECEIVED,
  id: nextMessageID++,
  message,
  author
});
export const populateUsersList = users => ({
  type: Types.USERS_LIST,
  users
});