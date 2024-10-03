import { Entry } from '../src/types/podcast';

export const testPodcast: Entry = {
  id: {
    attributes: {
      'im:id': '132154564'
    },
    label: 'id132154564'
  },
  link:{ 
      attributes: {
        href: 'http://test.com/podcast.xml',
        rel: 'self',
        type: 'application/rss+xml'
      },
    }
  ,
  rights: {
    label: 'All rights reserved'
  },
  title: {
    label: 'Test Podcast'
  },
  "im:artist": {
    label: 'Test Artist'
  },
  "im:image": [
    {
      label: 'http://test.com/image.jpg',
      attributes: {
        height: '100',
        rel: 'enclosure',
        type: 'image/jpeg',
        href: 'http://test.com/image.jpg'
      }
    }
  ],
  summary: {
    label: 'Podcast Description'
  },
  "im:price": {
    attributes: {
      currency: 'USD',
      amount: '1.00'
    },
    label: '$1.00'
  },
  "im:releaseDate": {
    attributes: {},
    label: '2023-01-01'
  },
  category: {
    attributes: {
      term: 'Technology'
    },    
  },
  "im:contentType": {
    attributes: {
      term: 'Podcast'
    }
  },
  "im:name": {
    label: 'Test Podcast'
  }
};

export const testPodcastList: Entry[] = [
  {
    id: {
      attributes: {
        'im:id': '132154564'
      },
      label: 'id132154564'
    },
    link:{ 
        attributes: {
          href: 'http://test.com/podcast.xml',
          rel: 'self',
          type: 'application/rss+xml'
        },
      }
    ,
    rights: {
      label: 'All rights reserved'
    },
    title: {
      label: 'Podcast 1'
    },
    "im:artist": {
      label: 'Test Artist'
    },
    "im:image": [
      {
        label: 'http://test.com/image.jpg',
        attributes: {
          height: '100',
          rel: 'enclosure',
          type: 'image/jpeg',
          href: 'http://test.com/image.jpg'
        }
      }
    ],
    summary: {
      label: 'Podcast Description'
    },
    "im:price": {
      attributes: {
        currency: 'USD',
        amount: '1.00'
      },
      label: '$1.00'
    },
    "im:releaseDate": {
      attributes: {},
      label: '2023-01-01'
    },
    category: {
      attributes: {
        term: 'Technology'
      },    
    },
    "im:contentType": {
      attributes: {
        term: 'Podcast'
      }
    },
    "im:name": {
      label: 'Podcast 1'
    }
  },
  {
    id: {
      attributes: {
        'im:id': '132154565'
      },
      label: 'id132154565'
    },
    link:{ 
        attributes: {
          href: 'http://test.com/podcast.xml',
          rel: 'self',
          type: 'application/rss+xml'
        },
      }
    ,
    rights: {
      label: 'All rights reserved'
    },
    title: {
      label: 'Podcast 2'
    },
    "im:artist": {
      label: 'Test Artist'
    },
    "im:image": [
      {
        label: 'http://test.com/image.jpg',
        attributes: {
          height: '100',
          rel: 'enclosure',
          type: 'image/jpeg',
          href: 'http://test.com/image.jpg'
        }
      }
    ],
    summary: {
      label: 'Podcast Description'
    },
    "im:price": {
      attributes: {
        currency: 'USD',
        amount: '1.00'
      },
      label: '$1.00'
    },
    "im:releaseDate": {
      attributes: {},
      label: '2023-01-01'
    },
    category: {
      attributes: {
        term: 'Technology'
      },    
    },
    "im:contentType": {
      attributes: {
        term: 'Podcast'
      }
    },
    "im:name": {
      label: 'Podcast 2'
    }
  }
]