import React from "react";
import Item from "./item";

const ItemList = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        return <Item key={user.id} data={user} />;
      })}
    </>
  );
};

export default ItemList;
