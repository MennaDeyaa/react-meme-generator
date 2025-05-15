import trollFace from '../assets/cat2.jpg'
export default function Header(){
return (
        <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}