export function TwinklingStars() {
  return (
    <div className="fixed inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          background: "black url(/media/stars.png) repeat",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          width: "10000px",
          height: "100%",
          background: "transparent url(/media/twinkling.png) repeat",
          backgroundSize: "1000px 1000px",
          animation: "move-background 70s linear infinite",
        }}
      />
    </div>
  )
}
