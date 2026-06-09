function Dialog({ onClose }) {
  return (
    <div>
      <h2>Thank You!</h2>
      <p>Your rating has been submitted.</p>

      <button onClick={onClose}>
        Close
      </button>
    </div>
  );
}
export default Dialog;