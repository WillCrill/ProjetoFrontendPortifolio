import style from "./Main.module.scss"
import img1 from "../img/RetroMania.png"
import img2 from "../img/SegaForm.png"
import img3 from "../img/JSForm.png"

function Main () {



    return (
        <div>
            <div id = "card1" className = {style.card} >
                <p>
                    <h2>Retro Mania Page</h2>
                    Projeto desenvolvido em equipe no primeiro bimestre da DH
                </p>
                <a href = "https://willcrill.github.io/Projeto_HTML_CSS/" alt = "Retro Mania" ><img src = {img1} alt="Retro Mania"/></a>
            </div>

            <div id = "card2" className = {style.card} >
                <p>
                    <h2>Sega Forms Page</h2>
                    Meu primeiro formulario com animation feito em HTML e CSS
                </p>
                <a href = "https://willcrill.github.io/Front_End_Projeto_2/" alt = "Sega Forms" ><img src = {img2} alt="Sega Forms"/></a>
            </div>

            <div id = "card3" className = {style.card} >
            <p>
                    <h2>JS Forms Page</h2>
                    Projeto avançado de formulario feito em HTML, CSS e JS
                </p>
                <a href = "https://alanalvess.github.io/FrontEndII-CheckpointII/" alt = "JS Forms" ><img src = {img3} alt="JS Forms"/></a>
            </div>      

        </div>
    )
}

export default Main     