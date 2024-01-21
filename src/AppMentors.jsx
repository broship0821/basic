import { useState } from "react";
import AppMentorButton from "./AppMentorButton";

const initalPerson = {
  name: "차은우",
  title: "졸부",
  mentors: [
    {
      name: "강동원",
      title: "금수저",
    },
    {
      name: "전형배",
      title: "다이아수저",
    },
  ],
};

export default function AppMentors() {
  // 리액트에서 정의된 변수는 불변성을 유지되야함
  // 만약 변경해야 하면 새로운 값, 새로운 객체로 새롭게 만들어야 함
  // 이유는 리액트는 변수 참조값의 주소가 바껴야지만 변화를 인식하고 ui 를 업데이트 해줌
  // 변수 참조값 주소는 안 바뀌고 참조값 안에서 내용이 바뀐다고 ui를 바꿔주지는 않음
  const [person, setPerson] = useState(initalPerson);
  const handleUpdate = () => {
    const prevName = prompt(`change who?`);
    const current = prompt(`change what?`);
    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.map((mentor) => {
        if (mentor.name === prevName)
          return {
            ...mentor,
            name: current,
          };
        else return mentor;
      }),
    }));
    // ...prev 라는 새로운 객체를 만들었고 , 그 안에서 map 을 통해 새로운 배열을 만듬
    // 이렇게 새로운 객체, 새로운 배열을 만들어서 넣어줘야함
  };
  const handleAdd = () => {
    const name = prompt(`write name`);
    const title = prompt(`please write the title`);
    setPerson((prev) => ({
      ...prev,
      mentors: [...prev.mentors, { name, title }],
    }));
  };
  const handleDelete = () => {
    const name = prompt(`write deleted persons name`);
    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.filter((mentor) => mentor.name !== name),
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      {/* <AppMentorButton setPerson={setPerson} changeType="name" />
      <AppMentorButton setPerson={setPerson} changeType="title" /> */}
      <button
        onClick={() => {
          const name = prompt(`what is your mentor's title?`);
        }}
      >
        멘토 title 바꾸기
      </button>
      <button onClick={handleAdd}>멘토 추가</button>
      <button onClick={handleDelete}>멘토 삭제</button>
    </div>
  );
}
