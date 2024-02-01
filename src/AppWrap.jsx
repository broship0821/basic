import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://media.istockphoto.com/id/1468408171/ko/%EC%82%AC%EC%A7%84/%EC%A0%8A%EC%9D%80-%EC%95%84%EC%8B%9C%EC%95%84-%EC%97%AC%EC%84%B1%EC%9D%98-%EC%95%84%EB%A6%84%EB%8B%A4%EC%9B%80-%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg?s=612x612&w=is&k=20&c=7CLtoUa52fGfHUbAvVatd7oW7lLhLrecxGNdPMaUiq0="
          name="Miran"
          size={200}
        />
        <p>Hello!</p>
      </Navbar>
      <Navbar>
        <Avatar
          image="https://media.istockphoto.com/id/1468408171/ko/%EC%82%AC%EC%A7%84/%EC%A0%8A%EC%9D%80-%EC%95%84%EC%8B%9C%EC%95%84-%EC%97%AC%EC%84%B1%EC%9D%98-%EC%95%84%EB%A6%84%EB%8B%A4%EC%9B%80-%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg?s=612x612&w=is&k=20&c=7CLtoUa52fGfHUbAvVatd7oW7lLhLrecxGNdPMaUiq0="
          name="Miran"
          size={200}
        />
        <p>MosiMosi</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
