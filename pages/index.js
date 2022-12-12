import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red" 
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <CSSReset />
            <div style={estilosDaHomePage} >
                {/* Prop Drilling */}
                <Menu setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
        </>

    );
}

export default HomePage

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display:flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const StyledBanner = styled.div`
    background-image: url("https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
    height: 230px;
    background-size: 100%;
    `;
function Header() {
    return (
        <StyledHeader>
            <StyledBanner />
            {/* <img src="banner"/> */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.description}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({ searchValue, ...propriedades }) {
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                // console.log(playlistName);
                // console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}