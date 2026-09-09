import Reveal from './Reveal'
import './MediaArchive.css'

const mediaGroups = [
  ['Hero', ['blue mosque video.mp4', 'Bosphorous night.jpeg', 'capadocia hot air balloons.jpg', 'cinematic mosque.jpeg', 'mosque sunrise.jpeg', 'sunrise view mosque.jpeg', 'turkey sunrise view.mp4', 'turkey vid.mp4', 'turkey view.jpeg'], 'hero'],
  ['Home', ['Night in Istanbul.jpeg', 'taht istanbul.jpeg', 'turkish kebab.jpg', 'view turkey.jpg'], 'home'],
  ['Streets', ['balat house street.jpg', 'balat street.jpg', 'balat vid.mp4', 'cave.jpg', 'cruise.jpeg', 'ferry lights.jpeg', 'ferry night.jpg', 'ferry.jpg', 'galata night.jpg', 'galata tower.jpeg', 'Galata Vid.mp4', 'istiklal street video.mp4', 'red tram video.mp4', 'red tram.jpg', 'tram day video.mp4', 'tram day view.jpg', 'tram view.jpg'], 'streets'],
  ['Taste', ['baklava.jpg', 'cheese cake.jpg', 'Etli Ekmek.jpg', 'turkish desert.jpg', 'turkish doner.jpg', 'turkish gozleme.jpg', 'turkish kahve.jpg', 'turkish lahmacun.jpg', 'turkish menemen.jpg', 'turkish simit.jpg', 'turkish tea.jpg'], 'taste'],
  ['Heritage', ['blue mosque.jpg', 'capadoccia.jpg', 'mosque video.mp4', 'mosque.jpg', 'night mosque.jpg', 'pammukkale.jpg'], 'heritage'],
  ['Experiences', ['anatalya view.jpg', 'antalya.mp4', 'duden waterfall anatalya.mp4', 'Old Town Harbor anatalya.jpeg'], 'experiences'],
  ['Ending', ['bosphorous night.jpg', 'bosphorous.jpg', 'bosphorus Vid.mp4', 'bosphorus.jpg'], 'ending'],
]

const pathFor = (folder, file) => `/images/${folder}/${file}`

function MediaCard({ file }) {
  const source = pathFor(file[1], file[0])
  const isVideo = file[0].toLowerCase().endsWith('.mp4')
  const displayName = file[0].replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
  return <figure className="media-archive__card"><div className="media-archive__frame">{isVideo ? <video src={source} autoPlay muted loop playsInline preload="metadata" /> : <img src={source} alt={displayName} loading="lazy" />}</div><figcaption>{displayName}</figcaption></figure>
}

export default function MediaArchive() {
  return <section className="media-archive" id="archive"><Reveal><p className="eyebrow"><span /> The complete collection</p><h2>Scenes of<br /><em>Turkey.</em></h2></Reveal>{mediaGroups.map(([title, files, folder], index) => <div className="media-archive__group" key={folder}><div className="media-archive__heading"><span>0{index + 1}</span><h3>{title}</h3></div><div className="media-archive__grid">{files.map((file) => <MediaCard key={file} file={[file, folder]} />)}</div></div>)}</section>
}
