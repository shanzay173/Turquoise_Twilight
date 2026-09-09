import ChapterScene from '../components/ChapterScene'
import { images } from '../data/turkeyData'
import './BosphorusDrift.css'

export default function BosphorusDrift() { return <ChapterScene id="bosphorus" number="05 / BOSPHORUS" title={<>Between two<br /><em>continents.</em></>} text="Follow the water, ferries and midnight glow across Istanbul's moving shoreline." image={images.streets.bosphorusFerry} video={images.home.bosphorusVideo} /> }
