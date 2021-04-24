const products = [
  {
    title: 'The Soundwork-Shoppers – Discomusic (LP, RE + CD)',
    image:
      'https://furtherrecords.com/wp-content/uploads/2021/03/R-10043100-1490626390-1896.jpeg.jpg',

    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    genre: 'Jazz',
    price: 19.99,
    countInStock: 3,
  },

  {
    title: 'Various – Shouts Vol. 2 (12″)',
    image:
      'https://furtherrecords.com/wp-content/uploads/2021/03/R-15049220-1586290876-5199.jpeg.jpg',

    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    genre: 'Funk',
    price: 19.99,
    countInStock: 3,
  },
  {
    title: 'Tenorio Jr. – Embalo (LP, Shape, RE)',
    image:
      'https://furtherrecords.com/wp-content/uploads/2021/03/R-10026233-1536320093-4883.jpeg.jpg',

    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    genre: 'Jazz',
    price: 19.99,
    countInStock: 3,
  },
  {
    title: 'Béliz – Mémoires (LP, Album)',
    image:
      'https://furtherrecords.com/wp-content/uploads/2021/03/R-15693500-1596034993-7924.jpeg.jpg',

    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    price: 19.99,
    countInStock: 3,
  },

  {
    title: 'Tommy Guerrero – Soul Food Taqueria (2xLP, Dlx, Ltd, RE, RM, 180)',
    image:
      'https://furtherrecords.com/wp-content/uploads/2021/03/R-11215525-1563382895-2058.jpeg.jpg',

    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    genre: 'Soul',
    price: 19.99,
    countInStock: 3,
  },

  {
    title: 'Ana Mazzotti – Ninguem Vai Me Segurar (LP, Album, RE)',
    image:
      'https://furtherrecords.com/wp-content/uploads/2021/04/R-14087798-1567611238-1020.jpeg.jpg',

    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    genre: 'Electronic',
    price: 19.99,
    countInStock: 3,
  },
  {
    title: 'Azymuth – Jazz Carnival (12″, RE, RM, 180)',
    image:
      'https://furtherrecords.com/wp-content/uploads/2021/04/R-14362645-1573528554-8390.jpeg.jpg',

    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    genre: 'Jazz-funk',
    price: 19.99,
    countInStock: 3,
  },
  {
    title:
      'Various – Alefa Madagascar ! Salegy, Soukous & Soul From The Red Island 1974-1984 (2xLP, Comp)',
    image:
      'https://furtherrecords.com/wp-content/uploads/2021/03/R-13910252-1564130024-8033.jpeg-1.jpg',
    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    genre: 'Soul',
    price: 19.99,
    countInStock: 3,
  },
  {
    title: 'Glen Adams – A Beat For You (12″, RE)',
    image:
      'https://furtherrecords.com/wp-content/uploads/2021/03/10210745-047089460536309327c760536309327ca161607757760536309327cf.jpg',

    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    genre: 'Soul',
    price: 19.99,
    countInStock: 3,
  },

  {
    title: 'Mar de Luz - All On U (12)',
    image:
      'https://i1.sndcdn.com/artworks-98c8BLUm7CIz7vxF-DSWXgQ-t500x500.jpg',

    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    genre: 'Electronic',
    price: 19.99,
    countInStock: 3,
  },
  {
    title: 'Cortex (6) – Troupeau Bleu (LP, Album, Ltd, RE, Pos)',
    image:
      'https://furtherrecords.com/wp-content/uploads/2021/03/16061434-0117308960447aa973fdb60447aa973fdf161510058560447aa973fe5.jpg',

    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    genre: 'Jazz-funk',
    price: 19.99,
    countInStock: 3,
  },
  {
    title: 'Voilaaa – On Te L’avait Dit … (2xLP, Album, Gat)',
    image:
      'https://furtherrecords.com/wp-content/uploads/2021/03/R-7658507-1446126601-5822.jpeg.jpg',
    description:
      'Sed euismod euismod tellus, in commodo est maximus vitae. Nunc vehicula tempor ullamcorper. Proin efficitur orci nec mollis imperdiet. Pellentesque sagittis sodales arcu at sagittis. Duis eros orci, iaculis non sapien a, pretium gravida tortor. Quisque at volutpat diam, sit amet aliquet diam. Mauris purus dolor, venenatis nec egestas in, aliquet id est.',
    genre: 'Soul',
    price: 19.99,
    countInStock: 3,
  },
];

export default products;
