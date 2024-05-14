import WinnerState from "./WinnerState";

export default function Winner({ winnerState }) {
  switch (winnerState) {
    case WinnerState.inProgress:
      return <></>;
    case WinnerState.playerOneWins:
      return <div className="winner">X Wins</div>;
    case WinnerState.playerTwoWins:
      return <div className="winner">O Wins</div>;
    case WinnerState.noResult:
      return <div className="winner">Draw</div>;
    default:
      return <></>;
  }
}
