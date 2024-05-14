import Line from "./Line";
import Tiles from "./Tiles";

export default function Background({ initValue, onClick, lineValue }) {
  return (
    <div className="background">
      <Tiles
        className="right-border bottom-border"
        value={initValue[0]}
        onTileClick={() => onClick(0)}
      />
      <Tiles
        className="right-border bottom-border"
        value={initValue[1]}
        onTileClick={() => onClick(1)}
      />
      <Tiles
        className="bottom-border"
        value={initValue[2]}
        onTileClick={() => onClick(2)}
      />
      <Tiles
        className="right-border bottom-border"
        value={initValue[3]}
        onTileClick={() => onClick(3)}
      />
      <Tiles
        className="right-border bottom-border"
        value={initValue[4]}
        onTileClick={() => onClick(4)}
      />
      <Tiles
        className="bottom-border"
        value={initValue[5]}
        onTileClick={() => onClick(5)}
      />
      <Tiles
        className="right-border"
        value={initValue[6]}
        onTileClick={() => onClick(6)}
      />
      <Tiles
        className="right-border"
        value={initValue[7]}
        onTileClick={() => onClick(7)}
      />
      <Tiles value={initValue[8]} onTileClick={() => onClick(8)} />
      <Line lineValue={lineValue} />
    </div>
  );
}
