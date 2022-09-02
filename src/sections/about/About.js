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
              Hei, jeg er Abdi. Jeg er en webutvikler, interessert i alt som har med fullstack delen og spesielt backend. Å se koden du har skrevet bli til noe var det som inspirerte meg til å begynne på kodehode.
            </p><br />
            <p>
              Alt startet 7 mars 2022, med ingen forkunnskap for frontend eller noe webutvikling. Ved å følge opplegget som var satt opp av kodehode så var det rett fram og oversiktlig. HTML, CSS, JavaScript samt React har gått ganske stødig. Startet nylig med node JS og har fått sansen for backend. 
            </p><br />
            <p>
              Ellers er jeg en velorganisert person, en problemløser og en god teamplayer med god oppmerksomhet for detaljer. På fritiden spiller jeg en del mmorpg spill og digger syfy/adventure filmer. 
              En familieorientert person og far til 2 rakkerunger. 
              La oss lage noe sammen
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