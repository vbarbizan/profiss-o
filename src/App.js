import img from './assets/img.jpg';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h2>Profissão: Educação Física</h2>
        <nav className="nav">
            <li>
              <a href="#introducao"><h1>Introdução</h1></a>
            </li>
            <li>
            <a href="#habilidades"><h1>Habilidades</h1></a>
            </li>
            <li>
            <a href="#oportunidades"><h1>Oportunidades</h1></a>
            </li>
            
        </nav>
      </header>

      <main className='container'>
        <section id='introducao' className='context' >
        <div className='texto'>
          <h1>Introdução sobre a Profissão de Educação Física</h1>
          <p>A profissão de Educação Física é essencial para promover a saúde, o bem-estar e o desenvolvimento físico e mental das pessoas. O educador físico desempenha um papel crucial na orientação e motivação para a prática de atividades físicas, esporte e hábitos saudáveis. Sua atuação é ampla e diversificada, abrangendo áreas como a educação escolar, o treinamento esportivo, a reabilitação física e o desenvolvimento comunitário.</p>
          <p>A profissão exige formação acadêmica específica, com graduação em Educação Física, e habilidades práticas e interpessoais para lidar com diferentes públicos e contextos. Além disso, é uma carreira que oferece a oportunidade de impactar positivamente a vida das pessoas, promovendo um estilo de vida ativo e saudável.</p>
        </div>
        <img src={img} className="img" alt="img" />
        </section>


        <section id='habilidades' className='context' >
        <img src={img1} className="img" alt="img" />
        <div className='texto'>
          <h1>Habilidades Necessárias</h1>
          <p>A profissão de Educação Física demanda uma variedade de habilidades para garantir que o profissional possa desempenhar suas funções de maneira eficaz e impactante. Aqui estão algumas das principais habilidades necessárias para um educador físico:</p>
          <li>Conhecimento Técnico</li>
          <li>Capacidade de Planejamento e Organização</li>
          <li>Habilidades de Comunicação</li>
          <li>Habilidade para Avaliação e Diagnóstico</li>
        </div>
        </section>

        <section id='oportunidades' className='context' >
        <div className='texto'>
          <h1>Oportunidades de Carreira</h1>
          <p>A profissão de Educação Física oferece uma ampla gama de oportunidades de carreira, abrangendo diferentes áreas e contextos. Aqui estão algumas das principais oportunidades para quem segue essa carreira:</p>
          <li>Professor de Educação Física</li>
          <li>Personal Trainer</li>
          <li>Treinador de Equipes e Atletas</li>
          <li>Preparador Físico</li>
          <li>Especialista em Educação e Treinamento</li>
          <p>Essas oportunidades permitem que os profissionais de Educação Física se especializem em áreas que melhor correspondam às suas habilidades e interesses, e também possibilitam a criação de uma carreira diversificada e dinâmica, impactando positivamente a saúde e o bem-estar das pessoas em vários contextos.</p>
         
        </div>
        <img src={img2} className="img" alt="img" />

        </section>

      </main>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
    </div>
  );
}

export default App;
