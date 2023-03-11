
import './Card.css';

const listFilmes = [
    {
        "nome": "Vingadores",
        "duracao": "2H30",
        "foto": "vingadores.png",
        "ano":  2010,
        "genero":   "Ação/Nerd",
        "descricao":    "Filme da Marvel com super-heróis",
        "nota": 5
    },

    {
        "nome": "Vingadores 2",
        "duracao": "2H30",
        "foto": "vingadores2.png",
        "ano":  2014,
        "genero":   "Ação/Nerd",
        "descricao":    "Filme da Marvel com super-heróis",
        "nota": 6
    },

    {
        "nome": "Vingadores 3",
        "duracao": "2H30",
        "foto": "vingadores3.png",
        "ano":  2015,
        "genero":   "Ação/Nerd",
        "descricao":    "Filme da Marvel com super-heróis",
        "nota": 7
    }
]





function Card() {
  return (
    <div className="Card">
        <div className="container">
         <div className="row">
            {listFilmes.map((filme) =>
            <div className="col">
            <div class="card">
             <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">{filme.nome}</p>
         <p>{filme.duracao}</p>
         <p>{filme.ano}</p>
         <p>{filme.nota}</p>
         <div className="btn btn-primary">
            <button>
            <a href={'https://youtube.com/results?search_query=${filme.nome} Trailer'}
            >
                Trailer
            </a>
            </button>
             </div>
            </div>
           </div>
           </div>
        )
            }  
         </div>
        </div>
    </div>
  );
}

export default Card;
