import Scots from  '../assets/adidas-jeremyscott-pandabear-black.png';
import WhiteYeezys from '../assets/adidas-yeezy-boost-350-white.png';
import GreyYeezys from '../assets/adidas-yeezy-boost-700-grey.png';
import JordanRetro from '../assets/jordan-1-retrohighog-red.png';
import JordanRetroBlue from '../assets/jordan-11-retrolowbg-babyblue.png';
import NikeAirmax from '../assets/nike-airmax95-og-green.png';
import Brons from '../assets/nike-lebron-13-white.png'

const SHOP_DATA = [
    {
        id: 1,
        title: 'Scotts',
        alternative_title: 'Jeremy Scotts Pandabear',
        routeName: 'Scotts',
        gender: [
            {
            male: true,
            female: true
            }
        ],
        brand: 'Adidas',
        price: 400,
        available_sizes: [
            4,
            4.5,
            5,
            5.5,
            6,
            6.5,
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            11.5,
            12,
            12.5
        ],
        description: 'The Womens Air Jordan 1 Satin Black Toe” is a special construction of the original colorway of the Jordan 1 with satin paneling on the heel. Following the same blueprint of the Satin Shattered Backboard” colorway that was also a women’s exclusive, this Satin Black Toe” edition features a black and white leather upper with red satin at the heel. The Air Jordan wings” logo on the ankle is presented in a metal medallion to complete the premium look. The Women’s Air Jordan 1 Satin Black Toe” released on August 17, 2019 in limited quantities.',
        image: Scots
    },
    {
        id: 2,
        title: 'Boost 350 White',
        secondary_title: 'Yeezy Boost 350 White',
        routeName: 'yeezy',
        gender: [
            {
            male: true,
            female: false
            }
        ],
        brand: 'Nike',
        price: 200,
        available_sizes: [
            4,
            4.5,
            5,
            6,
            6.5,
            7,
            7.5,
            8,
            8.5,
            9,
            8.5,        
            10.5,
            11,
            11.5,
            12,
            12.5
        ],
        description: 'The adidas Yeezy Boost 350 v2 “Static” released in December 2018, bringing a new look to Kanye Wests popular silhouette. The updated Yeezy 350 features a transparent mesh panel in place of the usual side stripe. The panel is woven into the Primeknit upper on each lateral side. The Yeezy 350 "Static" introduced an intricate new Primeknit pattern in white and grey hues. The clean appearance is solidified with a translucent white rubber midsole and outsole that wrap full-length Boost cushioning. The unique design of the adidas Yeezy Boost 350 v2 “Static” provided a refreshing update that will be in-demand for years to come.',
        image: WhiteYeezys,

    },
    {
        id: 3,
        title: 'Grey Yeezys',
        secondary_title: 'Adidas Yeezy 500 Bone White',
        routeName: 'yeezy-bone-whit',
        gender: [
            {
            male: true,
            female: false
            }
        ],
        brand: 'Dolce & Gabbana',
        price: 350,
        available_sizes: [
            4,
            4.5,
            5,
            5.5,
            6,
            6.5,
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            11.5,
            12,
            12.5
        ],
        description: 'The adidas Yeezy 500 Bone White is a refreshingly minimal take on the early-aughts basketball-inspired sneaker from adidas and Kanye West. The adidas Yeezy 500 is one of the more popular designs under the Yeezy umbrella thanks to its vintage roots and use of elevated materials. A now-signature layered upper features white mesh on the mid panel, tongue and heel. Premium light grey suede overlays add a subtle-but-welcoming contrasting touch. The white midsole omits familiar Boost found in other Yeezy models and instead employs supple adi-PRENE cushioning for all-day wearability. Completing the look of this sought-after model is a light cream chunky Feet You Wear outsole famously seen on early adidas Kobe Bryant models. Release date: August 24th, 2019.',
        image: GreyYeezys,
    },
    {
        id: 4,
        title: 'Jordan Retro Red',
        secondary_title: 'Jordan Retro Red Highog',
        routeName: 'jordanretro',
        gender: [
            {
            male: true,
            female: true
            }
        ],
        brand: 'Adidas',
        price: 400,
        available_sizes: [
            4,
            4.5,
            5,
            5.5,
            6,
            6.5,
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            11.5,
            12,
            12.5
        ],
        description: 'The Womens Air Jordan 1 Satin Black Toe” is a special construction of the original colorway of the Jordan 1 with satin paneling on the heel. Following the same blueprint of the Satin Shattered Backboard” colorway that was also a women’s exclusive, this Satin Black Toe” edition features a black and white leather upper with red satin at the heel. The Air Jordan wings” logo on the ankle is presented in a metal medallion to complete the premium look. The Women’s Air Jordan 1 Satin Black Toe” released on August 17, 2019 in limited quantities.',
        image: JordanRetro
    },
    {
        id: 5,
        title: 'Jordan Retro Blue',
        secondary_title: 'jordan 1 retrohig',
        routeName: 'jordanretroblue',
        gender: [
            {
            male: true,
            female: false
            }
        ],
        brand: 'New Balance',
        price: 420,
        available_sizes: [
            4,
            4.5,
            5,
            5.5,
            6,
            10,
            10.5,
            11,
            11.5,
            12,
            12.5
        ],
        description: 'The adidas Yeezy Boost 350 V2 Lundmark Reflective is yet another clean look for the modern icon sneaker by Kanye West. This version of the Yeezy Boost 350 V2 features a similar look to the “Static” release of early 2019, but with a creamy white shade mixed with the grey tones across the intricately patterned Primeknit upper and translucent rubber sole unit. This release is a more limited version of the “Lundmark” colorway with reflective accents intertwined into the woven upper. Like all other 2019 releases of the model, it also features translucent monofilament side stripes. One variation from most releases of the 350 V2 for this “Lundmark” colorway is the absence of the large heel tab loops in favor of a slightly more simplified look. The adidas Yeezy Boost 350 V2 “Lundmark Reflective” released during the summer of 2019 and is now another coveted colorway of the sneaker',
        image: JordanRetroBlue
    },
    {
        id: 6,
        title: 'Brons 13',
        secondary_title: 'Nike Lebron 13',
        routeName: 'brons',
        gender: [
            {
            male: true,
            female: true
            }
        ],
        brand: 'gucci',
        price: 400,
        available_sizes: [
            4,
            4.5,
            5,
            5.5,
            6,
            10.5,
            11,
            11.5,
            12,
            12.5
        ],
        description: 'The adidas Yeezy Boost 350 V2 “Black Reflective” is a spring 2019 release of the famous sneaker by Kanye West. This variation of the “Black” Yeezy Boost 350 V2 features reflective silver material intertwined into the black Primeknit upper. The design also continued the trend of translucent side stripes like all of the model’s 2019 releases. A red accent stripe is added to the heel tabs, while the black theme continues on the translucent rubber midsole that houses the full-length Boost foam cushioning. More limited than the non-reflective black colorway, the Yeezy Boost 350 V2 “Black Reflective” released on June 5, 2019 at select retailers',
        image: Brons
    },
    {
        id: 7,
        title: 'Nike Air max',
        secondary_title: 'nike airmax95 og',
        routeName: 'airmax',
        gender: [
            {
            male: true,
            female: false
            }
        ],
        brand: 'versace',
        price: 410,
        available_sizes: [
            4,
            4.5,
            5,
            5.5,
            6,
            6.5,
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            11.5,
            12,
            12.5
        ],
        description: 'The adidas Yeezy Boost 350 V2 “Black Reflective” is a spring 2019 release of the famous sneaker by Kanye West. This variation of the “Black” Yeezy Boost 350 V2 features reflective silver material intertwined into the black Primeknit upper. The design also continued the trend of translucent side stripes like all of the model’s 2019 releases. A red accent stripe is added to the heel tabs, while the black theme continues on the translucent rubber midsole that houses the full-length Boost foam cushioning. More limited than the non-reflective black colorway, the Yeezy Boost 350 V2 “Black Reflective” released on June 5, 2019 at select retailers',
        image: NikeAirmax
    },
  ];
  
  export default SHOP_DATA;