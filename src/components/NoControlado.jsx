import { useRef, useState } from "react";

const NoControlado = () => {
    const form = useRef(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Capturar los datos
        const data = new FormData(form.current);
        const { title, description, state } = Object.fromEntries(data.entries());

        // Validar los datos
        if (!title.trim() || !description.trim() || !state.trim()) {
            setError("Llena todos los campos");
            return;
        }

        // Enviar los datos
        console.log("Título:", title);
        console.log("Descripción:", description);
        console.log("Estado:", state);
    };

    return (
        <form
            onSubmit={handleSubmit}
            ref={form}
            className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
        >
            <div className="mb-4">
                <label
                    htmlFor="title"
                    className="block text-gray-700 font-medium mb-1"
                >
                    Título
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Ingrese título"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="todo #01"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="description"
                    className="block text-gray-700 font-medium mb-1"
                >
                    Descripción
                </label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Ingrese descripción"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="descripción #01"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="state"
                    className="block text-gray-700 font-medium mb-1"
                >
                    Estado
                </label>
                <select
                    id="state"
                    name="state"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="completado"
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
                Procesar
            </button>

            {error && (
                <p className="mt-4 text-red-500 font-medium">{error}</p>
            )}
        </form>
    );
};

export default NoControlado;
