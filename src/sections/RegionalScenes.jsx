import './RegionalScenes.css'
import { images } from '../data/turkeyData'

const scenes = [
  { title: 'Antalya Coast', place: 'Mediterranean shore', image: images.ending.antalyaView },
  { title: 'Old Town Harbor', place: 'Antalya harbor', image: images.ending.antalyaHarbor },
  { title: 'Duden Waterfall', place: 'Antalya', image: images.ending.antalyaView, video: images.ending.dudenWaterfallVideo },
  { title: 'Antalya Light', place: 'Mediterranean coast', image: images.ending.antalyaView, video: images.ending.antalyaVideo },
  { title: 'Istiklal Tram', place: 'Istiklal Avenue', image: images.ending.istiklalTram },
  { title: 'Istiklal Street', place: 'Beyoglu, Istanbul', image: images.ending.istiklalTram, video: images.ending.istiklalStreetVideo },
  { title: 'Tram by Day', place: 'Istiklal Avenue', image: images.ending.istiklalTram, video: images.ending.istiklalTramVideo },
  { title: 'Burger King Istiklal', place: 'Istiklal Avenue', image: images.ending.istiklalTram, video: images.ending.burgerKingVideo },
]

export default function RegionalScenes() {
  return <section className="regional-scenes" id="afterglow">
    <div className="regional-scenes__heading" style={{ display: 'block' }}><div className="regional-scenes__copy" style={{ maxWidth: '760px' }}><p className="eyebrow"><span /> Antalya / Mediterranean afterglow</p><h2>Where the coast<br /><em>turns gold.</em></h2><p style={{ maxWidth: '420px', margin: '26px 0 0' }}>Antalya light, Istanbul streets and the moving details that stay with you after the journey.</p></div></div>
    <div className="regional-scenes__grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', alignItems: 'start' }}>{scenes.map((scene, index) => <figure className="regional-scene-card" style={{ marginTop: index % 2 ? '70px' : '0' }} key={scene.title}>{scene.video ? <video src={scene.video} poster={scene.image} autoPlay muted loop playsInline /> : <img src={scene.image} alt={scene.title} loading="lazy" />}<span className="regional-scene-card__shade" /><figcaption><small>{scene.place}</small><strong>{scene.title}</strong></figcaption></figure>)}</div>
  </section>
}
