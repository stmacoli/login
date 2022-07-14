const Card = ({ name }) => {
    console.log("name: ", name)
    return (
        <div className="card" style={{width: "18rem"}}>
                {/*<img src="" className="card-img-top" alt="..." />*/}
                <div className="card-body">
                    {name ? <h1 className="card-title">{name}</h1> : <h1>não tem nome</h1>}
                </div>
            </div>
    )
}

// Sempre exportar os componentes. FICAR ATENTO NAS MENSAGENS DE ERRO DO CONSOLE
export default Card;