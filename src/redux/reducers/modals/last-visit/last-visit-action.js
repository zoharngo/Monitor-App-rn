import { SHOW_MODAL, HIDE_MODAL } from "./last-visit-types";

export const showModal = ({ name, date }) => ({
  type: SHOW_MODAL,
  payload: { name, date }
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
