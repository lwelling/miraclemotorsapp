import React from "react";
import { withRouter } from "react-router";
import AddToList from '../AddToList/AddToList';

const List = () => {
  return (
    <AddToList />
  );
};

export default withRouter(List);
