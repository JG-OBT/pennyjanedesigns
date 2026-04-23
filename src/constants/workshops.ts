export interface Workshop {
  id: string;
  date: string;
  title: string;
  description: string;
  location: string;
  time: string;
  price: string;
  isTBC?: boolean;
}

export const WORKSHOPS: Workshop[] = [
  {
    id: '1',
    date: 'Wed 29 Apr 2026',
    title: 'Strawberry Thieves & Willow Boughs',
    description: 'A botanical-inspired needle felting picture workshop. Create your own textile art inspired by nature.',
    location: 'Cartlands Tearooms, Kings Heath Park, B14 7TQ',
    time: '11 am–2 pm',
    price: '£42 (with cream tea)'
  },
  {
    id: '2',
    date: 'Sat 16 May 2026',
    title: 'Introduction to Wet Felting',
    description: 'Learn the ancient craft of wet felting using wool Fibers, soap, and water to create beautiful fabric.',
    location: 'Bewdley Museum, DY12 2AE',
    time: '10 am–12.30 pm',
    price: '£40'
  },
  {
    id: '3',
    date: 'Sat 16 May 2026',
    title: 'Make a Wet Felted Bowl',
    description: 'A tactile afternoon workshop creating a 3D vessel using the wet felting process.',
    location: 'Bewdley Museum, DY12 2AE',
    time: '1.30 pm–4 pm',
    price: '£40'
  },
  {
    id: '4',
    date: 'Thu 28 May 2026',
    title: 'Make a Felt Flower',
    description: 'Create a stunning, unique felt flower accessory or decorative piece.',
    location: 'Warwickshire Artisans, Wootton Wawen, B95 6BY',
    time: '10 am–1 m',
    price: '£50'
  },
  {
    id: '5',
    date: 'Sat 13 Jun 2026',
    title: 'Make a Felt Bowl',
    description: 'Sculptural wool workshop focusing on form and color.',
    location: 'Avoncroft Museum, Bromsgrove, B60 4JR',
    time: '10.30 am–1.30 pm',
    price: '£50'
  },
  {
    id: '6',
    date: '26–28 Jun 2026',
    title: 'Art at Alscot Exhibition',
    description: 'Part of Warwickshire Open Studios. Come see a curated selection of felt artworks.',
    location: 'Atherstone on Stour, Stratford‑upon‑Avon, CV37 8BL',
    time: '10 am–5 pm',
    price: 'Free Entry'
  },
  {
    id: '7',
    date: '2–4 Jul 2026',
    title: 'Wren Hall Exhibition',
    description: 'A beautiful display of handmade felt and textile art in a historic setting.',
    location: 'Wroxall Lane, Wroxall, CV35 7NF',
    time: '11 am–4 pm',
    price: 'Free Entry'
  },
  {
    id: '8',
    date: '11 Jul 2026',
    title: 'Introduction to Spinning & Weaving (Morning)',
    description: 'Learn the fundamentals of spinning your own yarn and basic weaving techniques.',
    location: 'Bewdley Museum',
    time: '10 am–12.30 pm',
    price: '£40'
  },
  {
    id: '9',
    date: '11 Jul 2026',
    title: 'Introduction to Spinning & Weaving (Afternoon)',
    description: 'Continue your textile journey or start fresh with this afternoon session.',
    location: 'Bewdley Museum',
    time: '1.30 pm–4 pm',
    price: '£40'
  },
  {
    id: '10',
    date: 'Mon 17 Aug 2026',
    title: 'Exploring Weaving on a Frame Loom',
    description: 'A deep dive into structural weaving focused on texture and experimental fibers.',
    location: 'The Art Room, Leamington Spa, CV32 4XU',
    time: '10.30 am–4 pm',
    price: 'Contact for price'
  },
  {
    id: '11',
    date: 'Wed 19 Aug 2026',
    title: 'Light Triangle Felted Scarf',
    description: 'Create a lightweight, elegant wearable work of art.',
    location: 'Warwickshire Artisans, Wootton Wawen',
    time: '10 am–1 pm',
    price: '£50'
  },
  {
    id: '12',
    date: 'Wed 16 Sep 2026',
    title: 'Nuno Felted Scarves',
    description: 'Lamination technique combining wool with silk for a luxurious, lightweight drape.',
    location: 'Warwickshire Artisans',
    time: '10 am–4 pm',
    price: '£95 (with lunch)'
  },
  {
    id: '13',
    date: 'Sat 26 Sep 2026',
    title: 'Introduction to Feltmaking',
    description: 'A perfect starting point for beginners to explore the magic of felt.',
    location: 'Worcester City Art Gallery',
    time: '10.30 am–1.30 pm',
    price: 'Contact for price'
  },
  {
    id: '14',
    date: 'Thu 1 Oct 2026',
    title: 'Make a Small Felted Bag',
    description: 'Create a practical and beautiful unique accessory.',
    location: 'Warwickshire Artisans',
    time: '10 am–4 pm',
    price: '£95 (with lunch)'
  },
  {
    id: '15',
    date: '27 Sep & 3–4 Oct 2026',
    title: 'Birmingham Open Studios',
    description: 'Details coming soon. Save the dates for a look behind the scenes.',
    location: 'Birmingham (Details TBC)',
    time: 'TBC',
    price: 'Free Entry',
    isTBC: true
  },
  {
    id: '16',
    date: 'Sat 18 Oct 2026',
    title: 'Introduction to Feltmaking: Make a Felt Picture',
    description: 'Capture a landscape or abstract design using needle and wet felting.',
    location: 'Bewdley Museum',
    time: '1.30 pm–4 pm',
    price: '£40'
  },
  {
    id: '17',
    date: 'Sat 18 Oct 2026',
    title: 'Make a Wet Felted Bowl (Session 2)',
    description: 'A second opportunity to join this popular vessel-making workshop.',
    location: 'Bewdley Museum',
    time: '1.30 pm–4 pm',
    price: '£40'
  },
  {
    id: '18',
    date: 'Sat 24 Oct 2026',
    title: 'Make a Wet Felted Picture',
    description: 'Expressive textile art techniques at the MAC.',
    location: 'MAC Birmingham',
    time: 'Details TBC',
    price: 'TBC',
    isTBC: true
  },
  {
    id: '19',
    date: 'Sun 25 Oct 2026',
    title: 'Make a Macramé Wall Hanging',
    description: 'Learn knotting techniques for modern wall decor.',
    location: 'MAC Birmingham',
    time: 'Details TBC',
    price: 'TBC',
    isTBC: true
  },
  {
    id: '20',
    date: 'Thu 29 Oct 2026',
    title: 'Make a Pair of Felted Slippers',
    description: 'Cozy, durable, and custom-fit footwear. A long but rewarding day!',
    location: 'Warwickshire Artisans',
    time: '10 am–5 pm',
    price: '£95 (with lunch)'
  },
  {
    id: '21',
    date: 'Sat 31 Oct 2026',
    title: 'Exploring Weaving with an Easy Frame Loom',
    description: 'Accessible weaving for all skill levels.',
    location: 'Warwickshire Artisans',
    time: '10 am–5 pm',
    price: '£95 (with lunch)'
  },
  {
    id: '22',
    date: 'Wed 11 Nov 2026',
    title: 'Autumn Textile Workshop',
    description: 'Focusing on seasonal colors and textures.',
    location: 'Warwickshire Artisans',
    time: '10 am–1 pm',
    price: '£50',
    isTBC: true
  },
  {
    id: '23',
    date: 'Wed 2 Dec & Thu 10 Dec 2026',
    title: 'TBC Christmas Crafts',
    description: 'Festive felt and handmade decorations.',
    location: 'Warwickshire Artisans',
    time: '10 am–1 pm',
    price: '£50',
    isTBC: true
  }
];
