import DoughnutChart from '../../component/DoughnutChart';
import './About.css';

const About = () => {

  return (
    <section id="aboutSection">
      <h2>Om meg</h2>
      <div className='aboutContainer'>
        <div className='aboutText'>
          <article>
            <p>
              Hei, Abdi her. Jeg er en webutvikler, interessert i alt som har med fullstack å gjøre og spesielt backend. Å se koden du har skrevet bli til noe, var det som inspirerte meg til å begynne med koding.
            </p><br />
            <p>
              I Mars 2022, fikk jeg muligheten til å starte på kurset; <i>Kodehode</i>. I løpet av kurset har jeg tilegnet meg masse ny kunnskap, der i blant HTML/CSS, JavaScript og React. Kurset har vært med på å utvikle meg fra en med lite kode kunnskap til en med masse kode kunnskap. Nylig startet jeg med Node.js, og det ga meg virkelig sansen for backend. 
            </p><br />
            <p>
              Ellers er jeg en velorganisert person, en problemløser og en god teamplayer med øye for detaljer. På fritiden spiller jeg en del mmorpg spill og digger sci-fi/adventure filmer. Jeg er familieorientert og far til 2 rakkerunger. 
            </p><br />
            <p>
              <strong><i>La oss lage noe sammen.</i></strong>
            </p>
          </article>
        </div>
        <div className='aboutImg'>
          <DoughnutChart />
        </div>
      </div>
    </section>
  )
}

export default About