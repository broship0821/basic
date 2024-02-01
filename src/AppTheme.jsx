import React, { useContext } from "react";
import "./AppTheme.css";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";

export default function AppTheme() {
  return (
    <>
      <Header />
      <DarkModeProvider>
        <Main />
      </DarkModeProvider>
      <Footer />
    </>
  );
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      {darkMode ? (
        <main
          className="main"
          style={{ backgroundColor: "black", color: "white" }}
        >
          Main
          <Profile />
          <Products />
        </main>
      ) : (
        <main className="main">
          Main
          <Profile />
          <Products />
        </main>
      )}
    </>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      ProductDetail
      <p>
        DarkMode: <span>{darkMode ? "Dark" : "White"}</span>
      </p>
      <button onClick={toggleDarkMode}>Toogle</button>
    </div>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
