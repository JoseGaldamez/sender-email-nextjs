'use client'

import { useState } from "react"

export const FormularioEmail = () => {

    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [text, setText] = useState<string>("");

    const handleSendEmail = async () => {

        const responseAPI = await fetch("/api/send-email", {
            method: "POST",
            body: JSON.stringify({
                from: "José Galdámez 💚 <josegaldamez1991@gmail.com>",
                to: email,
                subject,
                text
            })
        });

        const responseJSON = await responseAPI.json()

        console.log({ responseJSON });

    }

    return (
        <>
            <h2 className="font-bold text-2xl text-center mb-10">Enviar correo con nuestra API</h2>
            <input value={email} onChange={
                (e) => {
                    setEmail(e.target.value)
                }
            } type="text" placeholder="Email"
                className="mb-5 w-full text-xl p-3 rounded-lg text-gray-700" />

            <input value={subject} onChange={
                (e) => {
                    setSubject(e.target.value)
                }
            } type="text" placeholder="Subject"
                className="mb-5 w-full text-xl p-3 rounded-lg text-gray-700" />
            <textarea onChange={
                (e) => {
                    setText(e.target.value)
                }
            } placeholder="Contenido del mensaje"
                className="mb-5 w-full text-xl p-3 rounded-lg text-gray-700" rows={5} >
                {text}
            </textarea>

            <button onClick={handleSendEmail}
                className="bg-blue-700 text-white py-3 px-5 rounded-lg">Enviar correo</button>
        </>
    )
}