function Input({ title, value, handle }) {
  return (
    <div>
      {title}:
      <input value={value} onChange={handle} />
    </div>
  );
}

export default Input;
