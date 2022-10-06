const products = [
    {
        id: 1,
        title: 'Jordan AJ 1 Mid SE',
        brand: 'Jordan',
        description: 'Full-court style meets premium comfort for a memorable look. An encapsulated Air-Sole unit cushions your play on the hardwood, while the padded collar supports your every step',
        price: 175.00,
        salePrice: 149.99,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/41120003_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41120003_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41120003_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41120003_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'jordan-aj-mid-1-se',
        rating: 9,
    },
    {
        id: 2,
        title: 'Jordan Retro 1 Mid',
        brand: 'Jordan',
        description: 'Drawing inspiration from the iconic Air Jordan 1, the Air Jordan 1 Mid features similar design elements as the original, but is updated with modern materials for a spin on the shoe that started an on-court sensation back in 1985.',
        price: 160.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/65009218_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/65009218_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/65009218_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/65009218_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'jordan-retro-1-mid',
        rating: 10,
    },
    {
        id: 3,
        title: 'Jordan Retro 1 High',
        brand: 'Jordan',
        description: 'The Nike Air Jordan 1 Retro High sneakers inspire the same fierce greatness as MJ did in 1985, where his athletic prowess and determination overcame anything in his way. The premium leather and soft suede upper with bold stitching and high, padded collar create a comfortable wear for the streets or the court. The contrasting overlays and iconic elements allow these sneakers to pop, shining light on “His Airness” and the Wings logo that was born out of Jordan’s ability to focus in on the path to the hoop and then fly to get there and sink the shot. A fresh update on the retro style, these AJ’s include wording on the side to represent the collection and create a timeless new classic.',
        price: 250.00,
        salePrice: 225.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/41555089_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41555089_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41555089_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41555089_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'jordan-retro-1-high',
        rating: 10,
    },
    {
        id: 4,
        title: 'Jordan Retro 4',
        brand: 'Jordan',
        description: 'Celebrate the rich legacy of Jordan with the Jordan Retro 4. Flaunting the original metallic colours featured on the Air Jordan 1 released in 1985, these sneakers reinforce the brand’s peerless heritage with their boldly original design. A mix of sporty aesthetic and responsive comfort, the Jordan Retro 4 lets you rep the Jordan heritage with pride.',
        price: 270.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/60263371_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/60263371_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/60263371_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/60263371_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'jordan-retro-4',
        rating: 8,
    },
    {
        id: 5,
        title: 'Jordan 1 Take 3',
        brand: 'Jordan',
        description: 'Burn up the court like Russell Westbrook with the Jordan 1 Take 3. Inspired by his latest game shoes, the rugged outsole of these sneakers lets you change directions on a whim or stop on a dime. Featuring a Zoom Air unit in the forefoot that is top-loaded to bring responsive sensation closer to your feet, these silhouettes let you hit the J’s and grab the boards again and again. Sporting aggressive herringbone traction and multidirectional cell-like pattern on the outsole, the Jordan 1 Take 3 lets you push the tempo every time you grace the court.',
        price: 120.00,
        salePrice: 100.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/39989670_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/39989670_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/39989670_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/39989670_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'jordan-1-take-3',
        rating: 9,
    },
    {
        id: 6,
        title: 'Jordan Stay Loyal',
        brand: 'Jordan',
        description: 'Show your loyalty to the Jordan heritage with the Jordan Stay Loyal. Straight from the past and into the future, these silhouettes take inspiration from the AJ12 to create a design that’s fresh yet familiar.',
        price: 145.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/41288410_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41288410_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41288410_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41288410_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'jordan-stay-loyal',
        rating: 8,
    },
    {
        id: 7,
        title: 'Jordan Why Not Zer0.5',
        brand: 'Jordan',
        description: 'Feel the speed with the Jordan Why Not Zer0.5. Designed for fast players like Russell Westbrook, these basketball silhouettes let you bank on the momentum and hustle your way to the highlight reels. Featuring a webbing fit system that includes floating midfoot bands, an external heel counter, webbing, and laces, these sneakers keep your feet contained and secure through your sneaky attacks and high-speed manoeuvres. Sporting Jordan and RW logos on the tongue, the Jordan Why Not Zer0.5 lets you go beast mode on the hardwood like ‘Beastbrook’.',
        price: 170.00,
        salePrice: 150.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/41363714_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41363714_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41363714_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/41363714_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'jordan-why-not-zer0.5',
        rating: 9,
    },
    {
        id: 8,
        title: "Jordan Flightclub '91",
        brand: 'Jordan',
        description: 'Take flight in the Jordan Flightclub ’91. One of the most beloved Jordans to hit the hardwood, these sneakers throw it back to the golden age of basketball and keep you comfortable and supported both on and off the court. Inspired from the AJ 6, these silhouettes feature a windowed tongue that is reminiscent of Michael’s classic game shoes. Sporting cutouts in the collar and a visible Air cushioning, the Jordan Flightclub ’91 is the perfect addition to your sneaker collection.',
        price: 170.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/55976243_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/55976243_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/55976243_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/55976243_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'jordon-flightclub-91',
        rating: 10,
    },
    {
        id: 9,
        title: 'adidas NMD R1',
        brand: 'Adidas',
        description: 'Known for both style and comfort, adidas provides an incredible adaption of the styling of three past shoe stars. The adidas Originals NMD R1 combines the unique silhouette of the Micropacer, Boston Super, and Rising Star into a whole new fusion. This masterpiece offers extreme comfort paired with the eye-catching style you have come to know and love from the adidas brand.',
        price: 190.00,
        salePrice: 175.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/32214662_a1?wid=519&hei=519&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/32214662_a2?wid=519&hei=519&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/32214662_a3?wid=519&hei=519&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/32214662_a4?wid=519&hei=519&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'adidas-nmd-r1',
        rating: 10,
    },
    {
        id: 10,
        title: 'adidas Ultraboost 5.0 DNA',
        brand: 'Adidas',
        description: 'The adidas Ultraboost DNA definitely lives up to the hype by infusing the latest style and meeting the performance-boosting standards. The Primeknit forefoot keeps your foot in place while the midsole packs a full-length boost returns energy with each step making it a reliable favourite for all runners.',
        price: 250.00,
        salePrice: 180.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/42874000_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42874000_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42874000_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42874000_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'adidas-ultraboost-5.0-dna',
        rating: 9,
    },
    {
        id: 11,
        title: 'adidas NMD V2',
        brand: 'Adidas',
        description: 'Bring back your favourite ‘80s style with the adidas NMD V2. Archive-inspired and feature-packed, these shoes are equipped with the original Boost midsole that makes long commutes and slick city sidewalks feel effortless. The textile upper and lining work together for an unrivalled, step-in comfort, while the modern overlays bring in a cyberpunk vibe. Featuring the original running-inspired style with a modern update, the adidas NMD V2 brings the future now.',
        price: 190.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/42974400_a1?wid=519&hei=519&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42974400_a2?wid=519&hei=519&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42974400_a3?wid=519&hei=519&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42974400_a4?wid=519&hei=519&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'adidas-nmd-v2',
        rating: 9,
    },
    {
        id: 12,
        title: 'adidas Stan Smith Prem',
        brand: 'Adidas',
        description: 'Stan on one shoe, Smith on the other! Comfortable and classy, the adidas Stan Smith Prem is perfect for everyone. Made under the PRIMEGREEN initiative, these shoes feature an upper made from a minimum of 50% recycled content.',
        price: 130.00,
        salePrice: 90.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/44049000_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/44049000_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/44049000_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/44049000_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'adidas-stan-smith-prem',
        rating: 0,
    },
    {
        id: 13,
        title: 'adidas X_PLR Casual',
        brand: 'Adidas',
        description: 'A running-inspired look for the urban adventurer! The adidas Originals X_PLR pairs a knit and synthetic leather upper with a true-to-size fit to amp up your performance and style. The debossed 3-Stripes offer a sporty and minimalist touch to your everyday outfit. The textile lining enhances breathability, while the lightweight EVA midsole ensures superior cushioning. Get a first-class experience of comfort with the adidas Originals X_PLR.',
        price: 110.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/63179496_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/63179496_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/63179496_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/63179496_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'adidas-xplr-casual',
        rating: 8,
    },
    {
        id: 14,
        title: 'adidas Ultraboost DNA',
        brand: 'Adidas',
        description: "Every run is a chance to push your boundaries. And what better way to do it than in the adidas Ultraboost DNA! Crafted with a Primeknit forefoot that stretches comfortably and offering incredible energy return, this silhouette sets a new standard for running shoes. Complete with an external butterfly heel counter for stability and a rubber outsole that delivers a grippy ride, it's time to put in the work!",
        price: 250.00,
        salePrice: 190.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/42044900_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42044900_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42044900_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42044900_a2?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'adidas-ultraboost-dna',
        rating: 9,
    },
    {
        id: 15,
        title: 'adidas D.O.N. Issue 3',
        brand: 'Adidas',
        description: 'Unleash beast mode on the court with the adidas D.O.N. Issue 3. Built for Donovan Mitchell’s explosive game style, these sneakers offer lightweight comfort and responsiveness that keep you supported through your vertical jumps and slam dunks. Channeling the mind-over-matter mentality of the ‘Spida’ on the court, the adidas D.O.N. Issue 3 makes sure that nothing can keep you down on the hardwood.',
        price: 140.00,
        salePrice: 125.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/29656317_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/29656317_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/29656317_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/29656317_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'adidas-DON-issue-3',
        rating: 8,
    },
    {
        id: 16,
        title: 'adidas Retropy F2',
        brand: 'Adidas',
        description: 'Clean, sporty, and classic, the adidas Retropy F2 brings retro vibes and modern design to your feet. Inspired by the classic styles of the ‘80s archives, these trainers bring durability and support. The stitched suede and mesh overlays bring texture, and the sleek shape offers superior street-style. Complete your running rotation with the versatile and wonderful adidas Retropy F2.',
        price: 130.00,
        salePrice: 90.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/4295472_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4295472_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4295472_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4295472_a2?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'adidas-retropy-f2',
        rating: 7,
    },
    {
        id: 17,
        title: 'Nike Air Max 270 Black',
        brand: 'Nike',
        description: 'Introducing the first-ever Max Air unit designed specifically for Nike Sportswear, the Nike Air Max 270 delivers visible air and unbelievable comfort under every step. It has callbacks to the original 1991 Air Max 180 on its exaggerated tongue top and heritage tongue logo while also being upgraded for modern comfort.',
        price: 210.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/4205587_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4205587_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4205587_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4205587_a2?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'nike-air-max-270-black',
        rating: 9,
    },
    {
        id: 18,
        title: 'Nike Air Max 270 White',
        brand: 'Nike',
        description: 'Introducing the first-ever Max Air unit designed specifically for Nike Sportswear, the Nike Air Max 270 delivers visible air and unbelievable comfort under every step. It has callbacks to the original 1991 Air Max 180 on its exaggerated tongue top and heritage tongue logo while also being upgraded for modern comfort.',
        price: 210.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/4205645_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4205645_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4205645_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4205645_a2?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'nike-air-max-270-white',
        rating: 10,
    },
    {
        id: 19,
        title: "Nike Air Max '97",
        brand: 'Nike',
        description: "You'd be hard-pressed to find a shoe more eye-catching than the Nike Air Max '97. Indeed, these stunning, wavy, bold sneakers are far more than just another pair of Nikes. With incredible design and ultimate comfort, the Nike Air Max '97 is a shoe lovers dream. The wavy paneling of these shoes give them a signature and timeless look. The '90s may be long gone, but this shoe's style is timeless.",
        price: 230.00,
        salePrice: 190.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/4206445_a1?wid=519&hei=519&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4206445_a2?wid=519&hei=519&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4206445_a1?wid=519&hei=519&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4206445_a2?wid=519&hei=519&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'nike-air-max-97',
        rating: 9,
    },
    {
        id: 20,
        title: 'Nike LeBron XVIII Low',
        brand: 'Nike',
        description: 'Elevate your greatness in the Nike LeBron XVIII Low. Bringing back the 17’s cushioning system to provide an optimal balance of comfort and responsiveness, these sneakers keep you prepped to take control of the game. Featuring a lightweight upper crafted with a mix of materials and no-sew overlays, these silhouettes offer you a full-foot containment without compromising on ankle mobility.',
        price: 210.00,
        salePrice: 150.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/56346502_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/56346502_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/56346502_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/56346502_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'nike-lebron-xviii-low',
        rating: 10,
    },
    {
        id: 21,
        title: 'Nike Air Huarache',
        brand: 'Nike',
        description: 'Hurray to running! The Nike Huarache is designed to help you cover your miles with ease. The neoprene base with black mesh on the toe box and nubuck overlays gives a sharp, clean look every time you put them on. The heel pull tab makes it easy to put them on, while the Neon branding at the tongue and insoles reps the brand. Outpace your challengers when you lace up with the Nike Air Huarache.',
        price: 170.00,
        salePrice: 130.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/14359263_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/14359263_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/14359263_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/14359263_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'nike-air-huarache',
        rating: 9,
    },
    {
        id: 22,
        title: 'Nike Air Max Genome',
        brand: 'Nike',
        description: 'Go ahead and win the game with the Nike Air Max Genome. Crafted with a full-length Air unit, these sneakers provide maximum comfort while the low-profile design gives it a sleek look. The upper made with stylish no-sew skins, airy mesh, and TPU details leave people amazed while you move to get the ball up the court. A padded, low-cut collar, and a caged mid-section add texture and quirky style to this silhouette while the reinforcement of the toe and heel keeps you moving round the clock.',
        price: 225.00,
        salePrice: 170.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/53635516_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/53635516_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/53635516_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/53635516_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'nike-air-max-genome',
        rating: 9,
    },
    {
        id: 23,
        title: "Nike Air Force 1 '07",
        brand: 'Nike',
        description: "Nike's groundbreaking sneaker keeps you looking good with its timeless style.",
        price: 145.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/4101086_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4101086_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4101086_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4101086_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'nike-air-force-1',
        rating: 11,
    },
    {
        id: 24,
        title: 'Nike Air Max 90',
        brand: 'Nike',
        description: 'Run comfortably in these cushioned shoes.',
        price: 180.00,
        salePrice: 150.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/42211670_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42211670_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42211670_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42211670_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'nike-air-max-90',
        rating: 9,
    },
    {
        id: 25,
        title: 'Nike Dunk Low',
        brand: 'Nike',
        description: 'Hawk the streets in vintage ‘80s style and modern comfort with the Nike Dunk Low. Originally released to play ball on the court, these iconic kicks level up your street style. Lightweight, durable, and extremely comfortable, these shoes are revamped with sheened overlays and original colorways. Enjoy all-day comfort for everyday wear with a modern foam midsole and padded, low-cut collar.',
        price: 145.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/4101156_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4101156_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4101156_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4101156_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'nike-dun-low',
        rating: 9,
    },
    {
        id: 26,
        title: 'Nike Air Presto',
        brand: 'Nike',
        description: 'Suit up with the Nike Air Presto and watch magic happen.',
        price: 170.00,
        salePrice: 150.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/4207341_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4207341_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4207341_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/4207341_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'nike-air-presto',
        rating: 11,
    },
    {
        id: 27,
        title: 'Under Armour HOVR Sonic 5',
        brand: 'Under Armour',
        description: 'Take flight in the light, fast, and timeless Under Armour HOVR Sonic 5. These silhouettes are perfect for runners who prefer going the distance with flexibility and comfort. The unreal lightness helps speed up your race pace, while the embedded tech lets you track your runs and monitor your progress.',
        price: 120.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/42302489_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42302489_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42302489_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42302489_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'under-armour-hovr-sonic-5',
        rating: 10,
    },
    {
        id: 28,
        title: 'Under Armour Flow Velociti SE',
        brand: 'Under Armour',
        description: 'Outrun the wind with the Under Armour Flow Velociti SE. Sleek, stylish, and versatile, the upper features an anatomical knit design for a locked-in fit and enhanced comfort with internal moulding. The Flow technology eliminates the rubber outsole resulting in a more lightweight and seamless ride on any surface. Achieve maximum speed and efficiency with the Under Armour Flow Velociti SE',
        price: 160.00,
        salePrice: 120.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/42302401_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42302401_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42302401_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42302401_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'under-armour-flow-velociti-se',
        rating: 9,
    },
    {
        id: 29,
        title: 'Under Armour Flow Velociti Movement',
        brand: 'Under Armour',
        description: "Live in the 'movement'! Stay fluid on the move in the Under Armour Flow Velociti Movement. Designed for running, these shoes feature the FLOW technology for a seamless ride. The one-piece Flow midsole coupled with a midfoot TPU cage stabilizes each step and ensures constant cushioning. Challenge yourself every day while staying incredibly supported in the Under Armour Flow Velociti Movement.",
        price: 150.00,
        salePrice: 110.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/42145102_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42145102_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42145102_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42145102_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'under-armour-flow-velociti-movement',
        rating: 8,
    },
    {
        id: 30,
        title: 'Under Armour Charged Verssert',
        brand: 'Under Armour',
        description: 'Soft, breathable, and undeniably responsive, the Under Armour Charged Verssert is sure to help you add miles to your daily runs. Super all-rounders, these runners cover all the grounds of quality running shoes to offer you the smoothest rides. Versatile and comfortable, the Under Armour Charged Verssert will surely be your new everyday go-to.',
        price: 90.00,
        salePrice: 70.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/42302487_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42302487_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42302487_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/42302487_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'under-armour-charged-vessert',
        rating: 7,
    },
    {
        id: 31,
        title: 'Under Armour Hovr Phantom 2',
        brand: 'Under Armour',
        description: "The Under Armour Hovr Phantom 2 doesn't just look fast, it feels fast! Built to outlast your toughest runs, these shoes come with the signature UA HOVR technology for unmatched cushioning comfort. The engineered flat-knit upper provides unbelievable all-day comfort, while the external heel counter locks the foot in for a more stable ride. Bringing comfort that makes you forget the miles, the Under Armour Hovr Phantom 2 is any athlete's dream.",
        price: 180.00,
        salePrice: 130.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/49187517_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/49187517_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/49187517_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/49187517_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'under-armour-hovr-phantom-2',
        rating: 8,
    },
    {
        id: 32,
        title: 'Under Armour HOVR Infinite Summit 2',
        brand: 'Under Armour',
        description: 'Face every terrain with unwavering confidence in the Under Armour HOVR Infinite Summit 2. Featuring UA HOVR technology that provides a zero-gravity feel, these silhouettes maintain energy return and eliminate impact so you can conquer the rough, jagged trails easily. Sporting a Michelin bottom inspired by mountain bike tires and strategic overlays for stability, the Under Armour HOVR Infinite Summit 2 gives you the perfect footing to tackle the outdoors.',
        price: 160.00,
        salePrice: 100.00,
        images: [
            'https://images.footlocker.com/is/image/EBFL2/57392460_a1?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/57392460_a2?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/57392460_a3?wid=520&hei=520&fmt=png-alpha',
            'https://images.footlocker.com/is/image/EBFL2/57392460_a4?wid=520&hei=520&fmt=png-alpha',
        ],
        sizes: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12
        ],
        url: 'under-armour-hovr-infinite-summit-2',
        rating: 6,
    },
]

export default products