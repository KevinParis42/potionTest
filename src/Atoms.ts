import { atom } from 'jotai'

export const filtersAtom = atom<Filter>({})

export const filterValuesAtom = atom({
  value: '',
  property: '',
  operator: '',
})

export const productListAtom = atom([
  {
    id: '8707084648757',
    category: 'auto-moto',
    title: 'Housse moto Dainese Explorer noir/rouge',
    price: '48.77',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/house-moto-dainese-explorer-noir-rouge-387867.jpg?v=1695223440',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707084419381',
    category: 'auto-moto',
    title: 'Autocollant Voca Racing Logotype 11x4cm',
    price: '0.5',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/autocollant-voca-racing-logotype-11x4cm.jpg?v=1695223438',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707084288309',
    category: 'auto-moto',
    title: 'Cage à aiguilles Racing Top performances Booster SR Nitro',
    price: '6.0',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/cage-a-aiguilles-racing-top-performances-booster.jpg?v=1695223436',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707084091701',
    category: 'auto-moto',
    title: 'Durite d’essence Voca HQ D.5 1 m violet transparent',
    price: '4.9',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/durite-d-essence-voca-hq-d5-1-m-violet-224059.jpg?v=1695223433',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707084026165',
    category: 'auto-moto',
    title: 'Clignotants Replay rectangle orange/noir base courte',
    price: '20.5',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/clignotants-replay-rectangle-orange-noir-base.jpg?v=1695223430',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707083829557',
    category: 'auto-moto',
    title: "Feu arrière LED fumé Tun'R avec clignotants Senda homologué",
    price: '34.5',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/feu-arriere-led-fume-tun-r-avec-clignotants-senda.jpg?v=1695223428',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707083698485',
    category: 'auto-moto',
    title: 'Jeu de 4 entonnoirs Draper',
    price: '5.9',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/jeu-de-4-entonnoirs-draper.jpg?v=1695223426',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707083567413',
    category: 'auto-moto',
    title: 'Porte ampoule Stunt Slider 2004>',
    price: '7.0',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/porte-ampoule-stunt-slider-2004.jpg?v=1695223424',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707083436341',
    category: 'auto-moto',
    title: 'Rondelle axe de kick adaptable pour Minarelli Nitro Booster',
    price: '0.6',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/rondelle-axe-de-kick-adaptable-pour-minarelli.jpg?v=1695223422',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707083338037',
    category: 'auto-moto',
    title: 'Masque cross Shot Assault 2.0 Solid black glossy iridium argent',
    price: '28.49',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/masque-cross-shot-assault-20-solid-black-glossy-435438.jpg?v=1695223420',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707083141429',
    category: 'auto-moto',
    title: 'Liquide de frein DOT 4 LV Motul Brake Fluid 500ml',
    price: '12.9',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/liquide-de-frein-dot-4-lv-motul-brake-fluid-500ml.jpg?v=1695223417',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707082944821',
    category: 'auto-moto',
    title: "Joint d'échappement à bride fixation écrou rapide Peugeot 103",
    price: '1.5',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/joint-d-echappement-a-bride-fixation-ecrou-rapide.jpg?v=1695223414',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707082846517',
    category: 'auto-moto',
    title: 'Chambre à air Michelin offroad UHD 140/80-18 valve droite',
    price: '26.9',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/chambre-a-air-michelin-offroad-uhd-140-80-18-valve.jpg?v=1695223411',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707082682677',
    category: 'auto-moto',
    title: 'Ampoule E10 Feu Arrière 6V 1,8W',
    price: '1.0',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/ampoule-e10-feu-arriere-6v-1-8w.jpg?v=1695223408',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707082551605',
    category: 'auto-moto',
    title: 'Manchon de filtre à air adaptable pour Booster avec tube',
    price: '4.0',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/manchon-de-filtre-a-air-adaptable-pour-booster.jpg?v=1695223406',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707082354997',
    category: 'auto-moto',
    title: 'Revêtements Domino A360 noir/gris',
    price: '18.5',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/revetements-domino-a360-noir-gris_967952c5-4f31-4844-a5a2-d4c438fb7d2e.jpg?v=1695223404',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707082223925',
    category: 'auto-moto',
    title:
      'Plaquettes de Frein Avant Arrière X9 Satelis Majesty Skycruiser Xmax',
    price: '8.0',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/plaquettes-de-frein-avant-arriere-x9-satelis.jpg?v=1695223401',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707082060085',
    category: 'auto-moto',
    title: 'Courroie 1Tek 139QMB 4T roue 12',
    price: '9.0',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/courroie-1tek-139qmb-4t-roue-12.jpg?v=1695223398',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707081863477',
    category: 'auto-moto',
    title: 'Pneu cyclo Vee Rubber VRM-099 2.3/4-16 46J TT',
    price: '22.7',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/pneu-cyclo-vee-rubber-vrm-099-23-4-16-43j-tt.jpg?v=1695223396',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707081797941',
    category: 'auto-moto',
    title: 'Joint bouchon de vidange de boite Minarelli AM6 cuivre',
    price: '1.0',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/joint-bouchon-de-vidange-de-boite-minarelli-am6.jpg?v=1695223394',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707081634101',
    category: 'auto-moto',
    title: 'Pneu cyclo classique Mitas B4 2 1/4-18 42J Renforcé',
    price: '29.9',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/pneu-cyclo-classique-mitas-b4-2-1-4-18-42j.jpg?v=1695223391',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707081503029',
    category: 'auto-moto',
    title: 'Rétroviseur F1 réversible carbone',
    price: '6.4',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/retroviseur-f1-reversible-carbone.jpg?v=1695223389',
    available: false,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707081371957',
    category: 'auto-moto',
    title: 'Rochet de kick Top Performances Booster Nitro Ovetto',
    price: '14.1',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/rochet-de-kick-top-performances-booster-nitro.jpg?v=1695223386',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707081240885',
    category: 'auto-moto',
    title: 'Filtre a huile 1Tek Origine Honda SH 300',
    price: '5.8',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/filtre-a-huile-1tek-origine-honda-sh-300.jpg?v=1695223384',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707081109813',
    category: 'auto-moto',
    title: 'Chambre à air Vee Rubber TR4 2-2 1/2-16-17',
    price: '5.9',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/chambre-a-air-vee-rubber-tr4-2-2-1-2-16-17.jpg?v=1695223381',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707080913205',
    category: 'auto-moto',
    title: "Pot d'échappement Yasuni Z rouge NRG/NTT/Typhoon",
    price: '168.0',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/pot-d-echappement-yasuni-z-rouge-nrg-ntt-typhoon.jpg?v=1695223378',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707080749365',
    category: 'auto-moto',
    title: 'Durite essence ø5 rose fluo (1m)',
    price: '5.0',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/durite-essence-o5-rose-fluo-1m.jpg?v=1695223375',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707080585525',
    category: 'auto-moto',
    title: "Bille céramique KRM pour tige d'embrayage AM6",
    price: '5.5',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/bille-ceramique-krm-pour-tige-d-embrayage-am6-401269.jpg?v=1695223372',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707080454453',
    category: 'auto-moto',
    title: 'Clapet Top performances Nitro/Ovetto',
    price: '18.5',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/clapet-top-performances-nitro-ovetto.jpg?v=1695223369',
    available: false,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
  {
    id: '8707080290613',
    category: 'auto-moto',
    title: 'Antiparasite Peugeot 103',
    price: '5.5',
    imgLink:
      'https://cdn.shopify.com/s/files/1/0722/7578/8085/products/antiparasite-peugeot-103.jpg?v=1695223367',
    available: true,
    categoryId: '["gid://shopify/Collection/483494592821"]',
  },
])
