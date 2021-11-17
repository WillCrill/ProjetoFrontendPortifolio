import style from "./Banner.module.scss"
import eu from "../img/Eu2.png"

function Banner () {

    return (
        <div className = {style.bannerContainer} >
            <img src = {eu} alt = "William Lima"/>
            <div className = {style.dadosContainer} >
                <h1>William de Lima Rodrigues</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum ab inventore eveniet facere voluptate animi recusandae nulla. Suscipit corporis ducimus quas aspernatur omnis, hic natus? Error animi iste obcaecati.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum ab inventore eveniet facere voluptate animi recusandae nulla. Suscipit corporis ducimus quas aspernatur omnis, hic natus? Error animi iste obcaecati.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum ab inventore eveniet facere voluptate animi recusandae nulla. Suscipit corporis ducimus quas aspernatur omnis, hic natus? Error animi iste obcaecati.
                </p>
                    
                        
            </div>
        </div>
    )
}

export default Banner