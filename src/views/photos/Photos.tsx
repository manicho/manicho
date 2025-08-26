export const Photos = () => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Fotos</h1>
      <p>Esta es la sección de fotos.</p>
      <img
        src="/assets/photos/DSCF1253.JPG"
        alt="Descripción de la imagen"
        width={600}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        style={{ userSelect: "none", pointerEvents: "auto" }}
      />
      <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#888" }}>
        <strong>Licencia y aviso legal:</strong> Todas las fotos mostradas en
        esta sección son de mi autoría y están protegidas bajo la licencia
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#90cdf4",
            textDecoration: "underline",
            marginLeft: "0.2em",
          }}
        >
          Creative Commons BY-NC-ND 4.0
        </a>
        . Queda prohibida cualquier copia, descarga, distribución o uso sin mi
        consentimiento expreso.
      </div>
    </div>
  );
};
