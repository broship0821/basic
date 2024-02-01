import React, { useState } from "react";

export default function AppForm() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  // 이렇게 따로 만들어도 되지만, 하나의 객체로 관리하는 것이 좋음
  const [form, setForm] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault(); // from submit 했을때 페이지 새로고침 안되게 하는 용도
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일: </label>
      <input
        type="text"
        name="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
