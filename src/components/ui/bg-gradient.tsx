
const BgGradient = () => {
    return (
      <div className="fixed inset-0 -z-10 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
        linear-gradient(rgba(100, 116, 139, 0.8) 1px, transparent 1px),
        linear-gradient(90deg, rgba(100, 116, 139, 0.8) 1px, transparent 1px)
      `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
    )
}

export default BgGradient;