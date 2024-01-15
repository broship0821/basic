import { useState } from "react";
import AppMentorButton from "./AppMentorButton";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "차은우",
    title: "졸부",
    mentor: {
      name: "강동원",
      title: "금수저",
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what is your mentor's name?`);
          setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, name } }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      {/* <AppMentorButton setPerson={setPerson} changeType="name" />
      <AppMentorButton setPerson={setPerson} changeType="title" /> */}
      <button
        onClick={() => {
          const name = prompt(`what is your mentor's title?`);
        }}
      >
        멘토 title 바꾸기
      </button>
    </div>
  );
}
