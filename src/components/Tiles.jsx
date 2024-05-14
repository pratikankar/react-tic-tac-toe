export default function Tiles({ className, value, onTileClick }) {
  return (
    <div className={`tiles ${className}`} onClick={onTileClick}>
      {value}
    </div>
  );
}
