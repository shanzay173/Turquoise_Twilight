import StreetGallery from '../components/StreetGallery'
import SectionHeading from '../components/SectionHeading'
import './Wander.css'

export default function Wander() { return <section className="wander-section" id="streets"><SectionHeading number="02" eyebrow="Streets" copy="Galata, Balat and Istiklal: the city becomes more intimate after dark.">Every street<br /><em>knows a story.</em></SectionHeading><StreetGallery /></section> }
