export default function Video(){
    return (
        <video loop autoPlay playsInline muted className="video" id="indexVideo">
            <source src={require('./../imagens/index/Matrix.mp4').default} type="video/mp4"></source>
        </video>
    )
}