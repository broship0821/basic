export default function AppMentorButton({ setPerson, changeType }) {
  return (
    <button
      onClick={() => {
        const name = prompt(`what is your mentor's ${changeType}?`);
        setPerson((prev) => ({
          ...prev,
          mentor: { ...prev.mentor, changeType },
        }));
      }}
    >
      멘토 {changeType === "name" ? "이름" : "타이틀"} 바꾸기
    </button>
  );
}
