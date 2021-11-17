import style from "./Header.module.scss"

function Header () {

    return (
        <div className = {style.navbar} >    
            <div className = {style.navbarMenu} >
                <div></div>
                <ul>
                    <li><a href = "#" >Perfil</a></li>
                    <li><a href = "#card1" >Retro Mania</a></li>
                    <li><a href = "#card2" >Sega Forms</a></li>
                    <li><a href = "#card3" >JS Form</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header