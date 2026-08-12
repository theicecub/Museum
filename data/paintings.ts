// =============================================================================
// THE COLLECTION — edit this file to manage the paintings on the site.
// -----------------------------------------------------------------------------
// This is the ONE place you change to add, remove, or replace a painting.
// Both the homepage preview and the Gallery page read from this list.
//
// TO ADD A PAINTING:
//   1. Put the image file in:  public/images/paintings/
//   2. Copy one { ... } block below, paste it, and update the fields.
//
// TO REMOVE A PAINTING: delete its { ... } block.
// TO REPLACE A PAINTING'S IMAGE: either swap the file in the folder, or
//   change the "image" path to point at a new file.
//
// Keep the commas between blocks. Each block needs a unique "id".
// =============================================================================

export type Painting = {
  /** Unique id, e.g. "009". Used internally — just keep it unique. */
  id: string
  /** Path to the image, starting from the public folder. */
  image: string
  /** Painting title, shown under the image. */
  title: string
  /** Artist's name, shown under the title. */
  artist: string
  /** Year the work was made (optional). */
  year?: string
  /** Medium, e.g. "Oil on canvas" (optional). */
  medium?: string
  /** A short caption shown in the enlarged view (optional). */
  description?: string
  /** Whether this painting appears in the homepage preview row. */
  featured?: boolean
}

export const paintings: Painting[] = [
  {
    id: '001',
    image: '/images/paintings/sunrise-steppe.png',
    title: 'Sunrise Over the Steppe',
    artist: 'Elena Marchetti',
    year: '1987',
    medium: 'Oil on canvas',
    description:
      'Morning light spreading slowly across an open grassland, painted from memory over a single summer.',
    featured: true,
  },
  {
    id: '002',
    image: '/images/paintings/still-life-pears.png',
    title: 'Three Pears and a Jug',
    artist: 'Henrik Vos',
    year: '1911',
    medium: 'Oil on panel',
    description:
      'A quiet study in weight and shadow, arranged on the artist’s studio table.',
    featured: true,
  },
  {
    id: '003',
    image: '/images/paintings/woman-in-blue.png',
    title: 'Woman in a Blue Shawl',
    artist: 'Anna Petrova',
    year: '1642',
    medium: 'Oil on canvas',
    description:
      'An unnamed sitter, her gaze turned gently away from the light.',
    featured: true,
  },
  {
    id: '004',
    image: '/images/paintings/harbor-dusk.png',
    title: 'Harbor at Dusk',
    artist: 'Camille Roux',
    year: '1903',
    medium: 'Oil on canvas',
    description:
      'The last light of the day settling over the fishing boats at rest.',
    featured: true,
  },
  {
    id: '005',
    image: '/images/paintings/color-fields.png',
    title: 'Fields, Reduced',
    artist: 'Mara Lindqvist',
    year: '1969',
    medium: 'Acrylic on canvas',
    description:
      'Landscape distilled into three bands of colour and a slow horizon.',
  },
  {
    id: '006',
    image: '/images/paintings/winter-birches.png',
    title: 'Birches in Winter',
    artist: 'Ivan Sokolov',
    year: '1895',
    medium: 'Oil on canvas',
    description:
      'A stand of birches under an overcast sky, painted in the cold at first snow.',
  },
  {
    id: '007',
    image: '/images/paintings/market-square.png',
    title: 'The Market Square',
    artist: 'Giuseppe Renna',
    year: '1878',
    medium: 'Oil on canvas',
    description:
      'An afternoon crowd gathering among the stalls of the old town square.',
  },
  {
    id: '008',
    image: '/images/paintings/lotus-pond.png',
    title: 'Water Lilies, Morning',
    artist: 'Camille Roux',
    year: '1908',
    medium: 'Oil on canvas',
    description:
      'Reflections of sky and willow across the still surface of the pond.',
  },
]

/** Paintings shown in the small preview row on the homepage. */
export const featuredPaintings = paintings.filter((p) => p.featured)
