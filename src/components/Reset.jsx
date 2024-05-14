import WinnerState from "./WinnerState";

export default function Reset({ winnerState, onReset }) {
  if (winnerState === WinnerState.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-btn">
      Reset
    </button>
  );
}
