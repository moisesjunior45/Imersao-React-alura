import React from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(false);
    const [values, setValues] = React.useState({ titulo: "", url: "" });

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                }}>
                    <div>
                        <button className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input
                            placeholder="Titulo do video"
                            value={values.titulo}
                            onChange={(evento) => {
                                const value = evento.target.value;
                                console.log(value)
                                setValues({
                                    ...values,
                                    titulo: value,
                                });
                            }}
                        />
                        <input
                            placeholder="URL do video"
                            value={values.url}
                            onChange={(evento) => {
                                const value = evento.target.value;
                                console.log(value)
                                setValues({
                                    ...values,
                                    url: value,
                                });
                            }}
                        />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )
                : false}
        </StyledRegisterVideo>
    )
}