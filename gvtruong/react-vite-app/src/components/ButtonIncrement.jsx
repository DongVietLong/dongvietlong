export default function ButtonIncrement({ increment, count }) {
  return (
    <div className="card">
      <button onClick={increment}>
        increment
      </button>
    </div>
  );
}
