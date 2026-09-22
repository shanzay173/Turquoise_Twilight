import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import Reveal from './Reveal'
import { images } from '../data/turkeyData'
import './TasteGallery.css'

const foods = [
  { name: 'Baklava', category: 'Desserts', description: 'Delicate pastry, pistachio and syrup layered into a small, rich ritual.', detail: 'Late afternoon / Grand Bazaar', image: images.taste.baklava, ingredients: 'Phyllo, pistachio, butter and honey syrup.', taste: 'Crisp, floral and deeply nutty.' },
  { name: 'Cheesecake', category: 'Desserts', description: 'A creamy slice for slow café hours after the market starts to quiet.', detail: 'Afternoon / Karakoy', image: images.taste.cheesecake, ingredients: 'Cream cheese, biscuit base and citrus.', taste: 'Silky, creamy and lightly tangy.' },
  { name: 'Etli Ekmek', category: 'Traditional Dishes', description: 'A long, thin Anatolian flatbread topped with seasoned minced meat.', detail: 'Evening / Konya', image: images.taste.etliEkmek, ingredients: 'Thin dough, minced meat, tomato and pepper.', taste: 'Crisp-edged, savory and aromatic.' },
  { name: 'Turkish Dessert', category: 'Desserts', description: 'A jewel-toned sweet made for sharing beside a small cup of coffee.', detail: 'Midnight / Spice Bazaar', image: images.taste.turkishDessert, ingredients: 'Sugar, starch, rosewater and nuts.', taste: 'Soft, fragrant and gently sweet.' },
  { name: 'Doner Kebab', category: 'Street Food', description: 'Carved from the spit, wrapped warm and carried into the night.', detail: 'After dark / Istiklal', image: images.taste.donerKebab, ingredients: 'Seasoned meat, flatbread, herbs and roasted vegetables.', taste: 'Smoky, savory and bright with spice.' },
  { name: 'Gozleme', category: 'Street Food', description: 'Hand-rolled flatbread filled fresh beside the street.', detail: 'Evening / Kadikoy', image: images.taste.mezePlatter, ingredients: 'Thin dough, cheese, greens and herbs.', taste: 'Toasted, buttery and comforting.' },
  { name: 'Kebab', category: 'Street Food', description: 'Charred meat, smoke and spice served hot from the grill.', detail: 'Night / Beyoglu', image: images.taste.turkishKebab, ingredients: 'Marinated meat, pepper, onion and herbs.', taste: 'Charred, juicy and warmly spiced.' },
  { name: 'Lahmacun', category: 'Traditional Dishes', description: 'Thin, crisp and fragrant, rolled with herbs and a squeeze of lemon.', detail: 'Late night / Old Town', image: images.taste.lahmacun, ingredients: 'Flatbread, minced meat, tomato and parsley.', taste: 'Crisp, spicy and fresh.' },
  { name: 'Menemen', category: 'Breakfast', description: 'Soft eggs with tomato and pepper, best eaten straight from the pan.', detail: 'Morning / Local lokanta', image: images.taste.menemen, ingredients: 'Eggs, tomato, green pepper and olive oil.', taste: 'Warm, silky and gently fiery.' },
  { name: 'Simit', category: 'Breakfast', description: 'A sesame-crusted ring carried through the city from the first light.', detail: 'Morning / Ferry pier', image: images.taste.simit, ingredients: 'Yeasted dough, grape molasses and sesame.', taste: 'Toasty, chewy and nutty.' },
  { name: 'Turkish Coffee', category: 'Coffee & Tea', description: 'Small, dark and unhurried, with a story waiting at the bottom.', detail: 'After dinner / Old Town', image: images.taste.turkishCoffee, ingredients: 'Finely ground coffee, water and a little sugar.', taste: 'Dense, aromatic and quietly bitter.' },
  { name: 'Tulip Tea', category: 'Coffee & Tea', description: 'A bright glass and another conversation before dawn.', detail: 'All night / Every corner', image: images.taste.turkishChai, ingredients: 'Black tea, boiling water and time.', taste: 'Clear, tannic and warmly familiar.' },
]

const categories = ['All', 'Breakfast', 'Street Food', 'Traditional Dishes', 'Coffee & Tea', 'Desserts']

export default function TasteGallery() {
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState(null)
  const [direction, setDirection] = useState(1)
  const stripRef = useRef(null)
  const visibleFoods = category === 'All' ? foods : foods.filter((food) => food.category === category)

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return undefined
    if (window.matchMedia('(max-width: 600px)').matches) {
      strip.scrollTo({ left: 0, behavior: 'auto' })
      return undefined
    }
    const timer = window.setInterval(() => {
      const maxScroll = strip.scrollWidth - strip.clientWidth
      if (maxScroll <= 0) return
      const nextScroll = strip.scrollLeft + strip.clientWidth * .65
      strip.scrollTo({ left: nextScroll >= maxScroll - 4 ? 0 : nextScroll, behavior: 'smooth' })
    }, 3000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!selected) return undefined
    const handleKey = (event) => {
      if (event.key === 'Escape') setSelected(null)
      if (event.key === 'ArrowRight') moveDetail(1)
      if (event.key === 'ArrowLeft') moveDetail(-1)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = '' }
  }, [selected])

  function moveDetail(step) {
    const currentIndex = foods.findIndex((food) => food.name === selected?.name)
    setDirection(step)
    setSelected(foods[(currentIndex + step + foods.length) % foods.length])
  }

  return <>
    <div className="taste-categories" role="tablist" aria-label="Food categories">{categories.map((item) => <button key={item} type="button" role="tab" aria-selected={category === item} className={category === item ? 'is-active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <div className="taste-gallery">{visibleFoods.map((food, index) => <Reveal key={food.name} delay={index * .08} className="taste-gallery__item"><article className="taste-card"><button type="button" onClick={() => setSelected(food)} aria-label={`View ${food.name}`}><img src={food.image} alt={`${food.name} in Turkey`} loading="lazy" /><span className="taste-card__shade" /><span className="taste-card__copy"><small>0{index + 1} / {food.detail}</small><strong>{food.name}</strong><span className="taste-card__view">View dish <ArrowRight size={14} /></span></span></button><p>{food.description}</p></article></Reveal>)}</div>
    <div className="taste-strip-heading"><p className="eyebrow"><span /> Food streets after dark</p><p>Move through the sounds, smoke and light of the Turkish night.</p></div>
    <div className="taste-strip-wrap"><button type="button" className="taste-strip-arrow" onClick={() => stripRef.current?.scrollBy({ left: -360, behavior: 'smooth' })} aria-label="Previous food scene"><ArrowLeft size={17} /></button><div className="taste-strip" ref={stripRef}>{foods.map((food) => <button type="button" className="taste-strip__card" key={food.name} onClick={() => setSelected(food)}><img src={food.image} alt={food.name} loading="lazy" /><span><small>{food.category}</small><strong>{food.name}</strong><em>View dish <ArrowRight size={13} /></em></span></button>)}</div><button type="button" className="taste-strip-arrow" onClick={() => stripRef.current?.scrollBy({ left: 360, behavior: 'smooth' })} aria-label="Next food scene"><ArrowRight size={17} /></button></div>
    <div className="taste-closing"><p>Every table has a story.<br /><em>Every night has a taste.</em></p><a href="#heritage">Explore Heritage <ArrowRight size={15} /></a></div>
    {selected && <div className="taste-modal" role="dialog" aria-modal="true" aria-label={selected.name} onClick={() => setSelected(null)}><div className={`taste-modal__panel taste-modal__panel--${direction > 0 ? 'next' : 'previous'}`} onClick={(event) => event.stopPropagation()}><button className="taste-modal__close" type="button" onClick={() => setSelected(null)} aria-label="Close dish details"><X size={21} /></button><img src={selected.image} alt={selected.name} /><div className="taste-modal__details"><p className="eyebrow"><span /> {selected.detail}</p><h3>{selected.name}</h3><p>{selected.description}</p><dl><div><dt>Ingredients</dt><dd>{selected.ingredients}</dd></div><div><dt>Taste</dt><dd>{selected.taste}</dd></div></dl><div className="taste-modal__controls"><button type="button" onClick={() => moveDetail(-1)} aria-label="Previous dish"><ArrowLeft size={18} /></button><button type="button" onClick={() => moveDetail(1)} aria-label="Next dish"><ArrowRight size={18} /></button></div></div></div></div>}
  </>
}
