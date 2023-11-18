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
  price: number
}

export const menu: MenuItem[] = [
  {
    title: 'Beef Caldereta',
    imgSrc: beefCalderetaImg,
    price: 70,
  },
  {
    title: 'Chicken Adobo',
    imgSrc: chickenAdoboImg,
    price: 65,
  },
  {
    title: 'Pancit Shrimp Bihon',
    imgSrc: pancitShrimpBihon,
    price: 65,
  },
  {
    title: 'Turon (30pcs)',
    imgSrc: turonImg,
    price: 45,
  },
  {
    title: 'Pancit Malabon',
    imgSrc: pancitMalabonImg,
    price: 65,
  },
  {
    title: 'Ground Pork Lumpia',
    imgSrc: groundPorkLumpiaImg,
    price: 45,
  },
  {
    title: 'Oxtail Kare Kare',
    imgSrc: oxtailKareKareImg,
    price: 80,
  },
  {
    title: 'Puto Ube',
    imgSrc: putoUbeImg,
    price: 45,
  },
]
