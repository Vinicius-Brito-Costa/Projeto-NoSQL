import '../../css/sobre.css';
export default function Produtos(props){
    return(
        <main className="conteudo-sobre"> 
            <div className="fundo">
                <div className="conteudo container-fluid mx-0 px-0">
                    <div className="img-fundo d-flex justify-content-center w-100 mx-0">
                        <span className="row container text-white align-self-center justify-content-middle"><h1 className="mx-auto">Quem somos?</h1></span>
                    </div>
                    <div className="row mx-0">
                        <p className="col justify-content-middle my-auto text-white">
                            Adipisicing aute sint incididunt cillum nisi ut deserunt officia exercitation tempor sint est labore cillum. Tempor id culpa est aute duis consequat dolore id. Ex sit enim consectetur dolor aliqua aute voluptate velit. Fugiat culpa qui veniam et est ullamco do eiusmod sit. Qui aute et dolore esse anim sunt proident ipsum exercitation aliqua eiusmod voluptate fugiat eiusmod. Qui eiusmod veniam velit deserunt mollit incididunt excepteur. Nostrud exercitation ex duis proident pariatur quis dolore do minim est laborum non quis laboris.
                            Ad non in non nisi in et aliquip labore fugiat cillum. Proident incididunt ullamco non ullamco. Sint nisi veniam cillum ipsum ut commodo eu aliqua quis laborum sunt consequat adipisicing. Non reprehenderit adipisicing proident laborum velit occaecat aliqua do exercitation laboris pariatur deserunt sint reprehenderit.
                        </p>
                        <img className="col d-none d-md-block my-auto" src={require("../../imagens/icones/iconSobrePagina.svg").default} alt=" "/>
                    </div>
                </div>
            </div>
            <ul className="container list-group pb-4 px-1">
                <li className="list-group-item active"><h2 className=" text-light">ESTRUTURA FÍSICA</h2></li>
                <li className="list-group-item bg-dark"><img className="img-fluid" src={require("../../imagens/about/ali-yahya-ytNFYf4d_30-unsplash.jpg").default} alt="Sede" title="Photo by Ali Yahya on Unsplash" /></li>
                <li className="list-group-item bg-dark"><p className="mb-0 text-light">Nossa Sede Administrativa esta localizado estrategicamente em São Paulo. O maior e mais moderno CD do Fullstack!</p></li>
            </ul>
        </main>
    );
}