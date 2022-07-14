const Card = ({ name }) => {
    return (
        <div className="card" style={{width: "18rem"}}>
                {/*<img src="" className="card-img-top" alt="..." />*/}
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
    )
}

// Sempre exportar os componentes. FICAR ATENTO NAS MENSAGENS DE ERRO DO CONSOLE
export default Card;