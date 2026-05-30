import React, { useState, useEffect } from "react";
import "../styles/home.css";

export function Home() {
    const [color, setColor] = useState("#000000");
    const [height, setHeight] = useState("");
    const [divs, setDivs] = useState([]);

    // 👇 NUEVOS ESTADOS
    const [guardados, setGuardados] = useState([]);
    const [nombreGuardado, setNombreGuardado] = useState("");
    const [seleccionado, setSeleccionado] = useState("");

    const colores = [
        { nombre: "Rojo", valor: "#d10000" },
        { nombre: "Azul", valor: "#0000c2" },
        { nombre: "Azul Marino", valor: "#000042" },
        { nombre: "Verde", valor: "#5d6532" },
        { nombre: "Negro", valor: "#000000" },
        { nombre: "Blanco", valor: "#ffffff" },
        { nombre: "Gris", valor: "#c9c9c9" },
        { nombre: "Guinda", valor: "#6b0000" },
        { nombre: "Oro", valor: "#ffc400" },
        { nombre: "Melon", valor: "#e0b046" },
        { nombre: "Beige", valor: "#ede8d0" },
        { nombre: "Celeste", valor: "#96eaff" }
    ];

    // 👇 Cargar guardados al iniciar
    useEffect(() => {
        const data = localStorage.getItem("guardados");
        if (data) {
            setGuardados(JSON.parse(data));
        }
    }, []);

    function crearDiv(e) {
        e.preventDefault();

        setDivs([
            ...divs,
            {
                color: color,
                height: Number(height) * 0.3625,
            },
        ]);
    }

    // 👇 GUARDAR CON NOMBRE
    function guardar() {
        const nuevo = {
            id: Date.now(),
            nombre: nombreGuardado || `Copia ${guardados.length + 1}`,
            fecha: new Date().toLocaleString(),
            divs: divs,
        };

        const nuevosGuardados = [...guardados, nuevo];
        setGuardados(nuevosGuardados);
        localStorage.setItem("guardados", JSON.stringify(nuevosGuardados));

        setNombreGuardado("");
    }

    // 👇 CARGAR GUARDADO
    function cargar() {
        const copia = guardados.find(
            (g) => g.id === Number(seleccionado)
        );
        if (copia) {
            setDivs(copia.divs);
        }
    }

    function eliminarDiv(indice) {
    setDivs(divs.filter((div, i) => i !== indice));
}

    return (
        <>
            <div id="contenedor">
                {divs.map((div, index) => (
                    <div key={index} style={{
                        display: "flex"
                    }}>
                        <div style={{
                            backgroundColor: div.color,
                            height: div.height + "px",
                            width: "200px",
                        }}
                        />{/*}
                        <button type="button" onClick={() => eliminarDiv(index)}>
                            Eliminar
                        </button>*/}
                    </div>
                ))}
            </div>

            <form onSubmit={crearDiv}>
                {/* COLORES */}
                <div id="color-options"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        width: "100vw",
                    }}
                >
                    {colores.map((c, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setColor(c.valor)}
                            style={{
                                backgroundColor: c.valor,
                                width: "60px",
                                height: "60px",
                                marginBottom: "10px",
                                border:
                                    color === c.valor
                                        ? "3px solid yellow"
                                        : "1px solid black",
                                cursor: "pointer",
                            }}
                        />
                    ))}
                </div>

                <br />

                {/* ALTURA */}
                <label>
                    Height:
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </label>

                <br /><br />

                <button type="submit">Crear div</button>

                <hr />

                {/* GUARDAR */}
                <input
                    type="text"
                    placeholder="Nombre del guardado (opcional)"
                    value={nombreGuardado}
                    onChange={(e) => setNombreGuardado(e.target.value)}
                />

                <button type="button" onClick={guardar}>
                    Guardar
                </button>

                <br /><br />

                {/* SELECCIONAR GUARDADO */}
                <select
                    value={seleccionado}
                    onChange={(e) => setSeleccionado(e.target.value)}
                >
                    <option value="">Selecciona un guardado</option>
                    {guardados.map((g) => (
                        <option key={g.id} value={g.id}>
                            {g.nombre} ({g.fecha})
                        </option>
                    ))}
                </select>

                <button type="button" onClick={cargar}>
                    Cargar
                </button>
            </form>

            <div id="contenedor">
                { 
                    divs.map((div, index) => (
                        <div key={index} style={{
                            display: "flex"
                        }}>
                        <div style={{
                            backgroundColor: div.color,
                            height: div.height + "px",
                            width: "100vw",
                            maxWidth: "500px",
                        }}
                        />{/*}
                        <button type="button" onClick={() => eliminarDiv(index)}>
                            Eliminar
                        </button>*/}
                    </div>
                ))
                } 
                { 
                    divs.map((div, index) => (
                        <div key={index} style={{
                            display: "flex"
                        }}>
                        <div style={{
                            backgroundColor: div.color,
                            height: div.height + "px",
                            width: "100vw",
                            maxWidth: "500px",
                        }}
                        />{/*}
                        <button type="button" onClick={() => eliminarDiv(index)}>
                            Eliminar
                        </button>*/}
                    </div>
                ))
                }
                { 
                    divs.map((div, index) => (
                        <div key={index} style={{
                            display: "flex"
                        }}>
                        <div style={{
                            backgroundColor: div.color,
                            height: div.height + "px",
                            width: "100vw",
                            maxWidth: "500px",
                        }}
                        />{/*}
                        <button type="button" onClick={() => eliminarDiv(index)}>
                            Eliminar
                        </button>*/}
                    </div>
                ))
                } 
                { 
                    divs.map((div, index) => (
                        <div key={index} style={{
                            display: "flex"
                        }}>
                        <div style={{
                            backgroundColor: div.color,
                            height: div.height + "px",
                            width: "100vw",
                            maxWidth: "500px",
                        }}
                        />{/*}
                        <button type="button" onClick={() => eliminarDiv(index)}>
                            Eliminar
                        </button>*/}
                    </div>
                ))
                } 
                { 
                    divs.map((div, index) => (
                        <div key={index} style={{
                            display: "flex"
                        }}>
                        <div style={{
                            backgroundColor: div.color,
                            height: div.height + "px",
                            width: "100vw",
                            maxWidth: "500px",
                        }}
                        />{/*}
                        <button type="button" onClick={() => eliminarDiv(index)}>
                            Eliminar
                        </button>*/}
                    </div>
                ))
                } 
            </div>

            <h3>Bloques creados</h3>

<div style={{
    border: "1px solid #ccc",
    padding: "10px",
    maxWidth: "300px"
}}>
    {divs.length === 0 && <p>No hay bloques creados</p>}

    {divs.map((div, index) => (
        <div key={index} style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "8px",
            borderBottom: "1px solid #eee",
            paddingBottom: "5px"
        }}>
            {/* Vista previa */}
            <div style={{
                backgroundColor: div.color,
                width: "30px",
                height: "30px",
                border: "1px solid black"
            }} />

            {/* Datos */}
            <div style={{ flex: 1 }}>
                <div>Color: {div.color}</div>
                <div>Altura: {div.height/0.3625} px</div>
            </div>

            {/* Eliminar */}
            <button
                type="button"
                onClick={() => eliminarDiv(index)}
            >
                X
            </button>
        </div>
    ))}
</div>
        </>
    );
}
