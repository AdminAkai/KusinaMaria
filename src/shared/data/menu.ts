import beefCalderetaImg from 'src/assets/images/beef_caldereta.jpg'
import chickenAdoboImg from 'src/assets/images/chicken_adobo.jpg'
import pancitShrimpBihon from 'src/assets/images/pancit_shrimp_bihon.jpg'
import turonImg from 'src/assets/images/turon.jpg'
import pancitMalabonImg from 'src/assets/images/pancit_malabon.jpg'
import groundPorkLumpiaImg from 'src/assets/images/ground_pork_lumpia.jpg'
import oxtailKareKareImg from 'src/assets/images/oxtail_kare_kare.jpg'
import putoUbeImg from 'src/assets/images/puto_ube.jpg'

interface MenuItem {
  title: string
  imgSrc: string
  description: string
  price: number
}

export const menu: MenuItem[] = [
  {
    title: 'Beef Caldereta',
    imgSrc: beefCalderetaImg,
    description: 'placeholder',
    price: 70,
  },
  {
    title: 'Chicken Adobo',
    imgSrc: chickenAdoboImg,
    description: 'placeholder',
    price: 65,
  },
  {
    title: 'Pancit Shrimp Bihon',
    imgSrc: pancitShrimpBihon,
    description: 'placeholder',
    price: 65,
  },
  {
    title: 'Turon (30pcs)',
    imgSrc: turonImg,
    description: 'placeholder',
    price: 45,
  },
  {
    title: 'Pancit Malabon',
    imgSrc: pancitMalabonImg,
    description: 'placeholder',
    price: 65,
  },
  {
    title: 'Ground Pork Lumpia',
    imgSrc: groundPorkLumpiaImg,
    description: 'placeholder',
    price: 45,
  },
  {
    title: 'Oxtail Kare Kare',
    imgSrc: oxtailKareKareImg,
    description: 'placeholder',
    price: 80,
  },
  {
    title: 'Puto Ube',
    imgSrc: putoUbeImg,
    description: 'placeholder',
    price: 45,
  },
]
