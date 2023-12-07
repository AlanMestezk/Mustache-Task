import logo  from '../../assets/moustache.png'
import style from './header.module.css'

interface HeaderProps{
    title: string
    subtitle: string
}

export const Header = ({title, subtitle}: HeaderProps)=>{

    return(

        <>

            <header className={style.containerTitle}>

                <h1 className={style.title}>{title}</h1>

                <img 
                    src={logo} 
                    alt="Logo Mustache Task"
                    className={style.logo}
                />

            </header>


            <section className={style.containerSubtitle}>

                <strong className={style.subtitle}>{subtitle}</strong>

            </section>

        </>

    )
}