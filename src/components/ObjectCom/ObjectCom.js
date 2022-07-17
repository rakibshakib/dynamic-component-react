import React from "react";

const ObjectCom = () => {
  const mySelf = [
    {
      name: "Rakibul Islam",
      age: 23,
      email: "rakib@gmail.com",
      address: "Mirpur 13, Dhaka",
    },
  ];

  return (
    <div>
      <h2>This is object</h2>
      <div style={{ marginTop: "20px" }}>
        {mySelf.map((item) => (
          <div key={item.age}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectCom;
