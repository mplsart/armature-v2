import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Grid, Row, Col } from '../grid';
import CardListItemArticle from './CardListItemArticle';
import CardListItemEventDate from './CardListItemEventDate';

let xlBannerResource = {
  resource_id: 'ARTWUNDERFUL_1',
  _meta: {
    resource_type: 'Advert',
    is_verbose: true,
  },
  advert_type_label: 'Sponsor',
  advert_label: 'WPT002_6mnthads_APRIL132018',

  image_resource: {
    versions: {
      MOBILE: {
        height: 800,
        width: 1000,
        url: 'https://dummyimage.com/427x540/888888/333333.png&text=1000x800',
      },
      DEFAULT: {
        height: 138,
        width: 1220,
        url: 'https://dummyimage.com/427x540/888888/333333.png&text=1220x138',
      },
    },
  },
  goto_url: 'http://www.wetpaintart.com/?from=mplsart',
  advert_description: 'xxxWet Paint Artists Materials & Framing',
  advert_client: 'wetpaint',
  advert_campaign: '6month',
  weight: 15,
};

// Event Date Data...
let eventDateResources = [
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'performance',
    end: '2020-02-13T03:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: true,
      name: 'Harriet Bart: Abracadabra and Other Forms of Protection  /  Artist Talk',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-02-06T04:14:02Z',
        modified_date: '2020-02-06T04:14:02Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ5MzMwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjQ5MzMwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzMwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzMwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzMwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzMwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ5MzMwMDAx',
      resource_id: 'RXZlbnQeHzU3NjUzOTE4MjEzMDc5MDQ',
      slug: 'harriet-bart-abracadabra-and-other-forms-of-protection',
      summary:
        'Retrospective and monograph devoted to Harriet Bart featuring approximately 100 objects, including fiber works, paintings, sculptures, prints, artists books, and multimedia installations',
      url: 'https://wam.umn.edu/calendar/harriet-bart/',
    },
    label: 'Artist Talk',
    resource_id: '35008b22d42749d59c33678b3a6f0a9c',
    start: '2020-02-13T01:30:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '333 E River Pkwy',
      address2: '',
      category: 'institution',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 44.973204, lon: -93.237095 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Weisman Art Museum, U of M',
      nickname: null,
      primary_image_resource: null,
      primary_image_resource_id: null,
      resource_id: 'VmVudWUed2Vpc21hbi1hcnQtbXVzZXVt',
      resource_url: '/api/venues/VmVudWUed2Vpc21hbi1hcnQtbXVzZXVt',
      slug: 'weisman-art-museum',
      state: 'MN',
      summary: 'Fine art museum on campus',
    },
    venue_slug: 'weisman-art-museum',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-14T02:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: true,
      name: 'ART AT AUGSBURG: Works by Faculty, \ufeffPast and Present',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-01-17T20:05:34Z',
        modified_date: '2020-01-17T20:05:34Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjUzMjgwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjUzMjgwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUzMjgwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUzMjgwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUzMjgwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUzMjgwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjUzMjgwMDAx',
      resource_id: 'RXZlbnQeHzU2MzUwODY2NzQyOTY4MzI',
      slug: 'art-at-augsburg-works-by-faculty-past-and-present',
      summary: 'Works by Faculty, \ufeffPast and Present curated by Kristin Anderson',
      url: 'https://www.augsburg.edu/galleries/2019/07/16/art-at-augsburg-works-by-faculty-past-and-present/',
    },
    label: 'Reception',
    resource_id: 'e634e60f68114e41888b6010b166abeb',
    start: '2020-02-14T00:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '720 22nd Ave S',
      address2: '',
      category: 'institution',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 44.96709999999999, lon: -93.2406053 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'The Christensen Center Art Gallery, Augsburg University',
      nickname: 'Christensen Gallery, Augsburg',
      primary_image_resource: null,
      primary_image_resource_id: '',
      resource_id: 'VmVudWUeY2hyaXN0aWFuc2VuLWNlbnRlcg',
      resource_url: '/api/venues/VmVudWUeY2hyaXN0aWFuc2VuLWNlbnRlcg',
      slug: 'christiansen-center',
      state: 'MN',
      summary: 'Contemporary art and design ',
    },
    venue_slug: 'christiansen-center',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-14T02:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: true,
      name: '2020 MN Book Artist Award (Group Exhibition)',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-01-11T16:59:14Z',
        modified_date: '2020-01-11T16:59:14Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MjQwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjE3MjQwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MjQwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MjQwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MjQwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MjQwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MjQwMDAx',
      resource_id: 'RXZlbnQeHzU3NDI1NjE3MjEzMTk0MjQ',
      slug: '2020-mn-book-artist-award-group-exhibition',
      summary:
        'An opening reception celebrating the artistic production team that won this years MN Book Artist Award.',
      url: 'https://www.mnbookarts.org/my-mighty-journey-exhibition/',
    },
    label: 'Opening',
    resource_id: 'a013c48721584c17991b2e176b0047ee',
    start: '2020-02-14T00:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '1011 Washington Avenue S',
      address2: 'Suite 100',
      category: 'institution',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 44.975414, lon: -93.25417600000003 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Minnesota Center for Book Arts',
      nickname: null,
      primary_image_resource: null,
      primary_image_resource_id: null,
      resource_id: 'VmVudWUebWlubmVzb3RhLWNlbnRlci1mb3ItYm9vay1hcnRz',
      resource_url: '/api/venues/VmVudWUebWlubmVzb3RhLWNlbnRlci1mb3ItYm9vay1hcnRz',
      slug: 'minnesota-center-for-book-arts',
      state: 'MN',
      summary: 'Book crafts as contemporary art',
    },
    venue_slug: 'minnesota-center-for-book-arts',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-14T02:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: false,
      name: 'BLK LOVE',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-02-03T22:33:23Z',
        modified_date: '2020-02-03T22:33:23Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjIzMTUwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjIzMTUwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIzMTUwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIzMTUwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIzMTUwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIzMTUwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjIzMTUwMDAx',
      resource_id: 'RXZlbnQeHzU3NTA3NjUxMDg4NTQ3ODQ',
      slug: 'blk-love',
      summary: 'A group exhibition of local Black Queer and Trans early-career artists\n',
      url: 'https://www.facebook.com/events/482349006006700',
    },
    label: 'Opening',
    resource_id: '0528a741ac7d4932b1c73c082ce95d5a',
    start: '2020-02-14T00:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '900 Hennepin Ave',
      address2: '',
      category: 'business',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 44.9765348, lon: -93.27742209999997 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Hennepin Theatre Trust',
      nickname: null,
      primary_image_resource: null,
      primary_image_resource_id: null,
      resource_id: 'VmVudWUeaGVubmVwaW4tdGhlYXRyZS10cnVzdA',
      resource_url: '/api/venues/VmVudWUeaGVubmVwaW4tdGhlYXRyZS10cnVzdA',
      slug: 'hennepin-theatre-trust',
      state: 'MN',
      summary: '',
    },
    venue_slug: 'hennepin-theatre-trust',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'performance',
    end: '2020-02-14T03:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: true,
      name: 'Dramatic Shift:  The Political Posters of the Gorbachev Era',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-01-17T19:59:18Z',
        modified_date: '2020-01-17T19:59:18Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjUxMTIwMDAy',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjUxMTIwMDAy',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTIwMDAy/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTIwMDAy/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTIwMDAy/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTIwMDAy/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjUxMTIwMDAy',
      resource_id: 'RXZlbnQeHzU3Njk0ODk0ODg1NDM3NDQ',
      slug: 'poetic-surrealism',
      summary: 'The Political Posters of the Gorbachev Era.',
      url: 'https://tmora.org/',
    },
    label: 'Opening',
    resource_id: 'a438d833fa204b43a7595f2e8c1a55f3',
    start: '2020-02-14T01:30:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '5500 Stevens Ave S',
      address2: '',
      category: 'institution',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 44.903357, lon: -93.276049 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'The Museum of Russian Art',
      nickname: '',
      primary_image_resource: null,
      primary_image_resource_id: '',
      resource_id: 'VmVudWUebXVzZXVtLW9mLXJ1c3NpYW4tYXJ0',
      resource_url: '/api/venues/VmVudWUebXVzZXVtLW9mLXJ1c3NpYW4tYXJ0',
      slug: 'museum-of-russian-art',
      state: 'MN',
      summary: '',
    },
    venue_slug: 'museum-of-russian-art',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-15T02:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: true,
      name: 'Exquisite Artisanship',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-01-25T00:34:30Z',
        modified_date: '2020-01-25T00:34:30Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ3MjEwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjQ3MjEwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MjEwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MjEwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MjEwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MjEwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ3MjEwMDAx',
      resource_id: 'RXZlbnQeHzU2OTY4NjY1OTExNzg3NTI',
      slug: 'exquisite-artisanship',
      summary: 'Works by Janel Jacobson and Stuart Loughridge',
      url: 'http://www.raymondavenuegallery.com/',
    },
    label: 'Opening',
    resource_id: 'a266448cd8a0457eb8db342025adc43a',
    start: '2020-02-15T00:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '761 Raymond Ave',
      address2: '',
      category: 'gallery',
      city: 'St Paul',
      country: 'USA',
      geo: [{ lat: 44.9644942, lon: -93.19776990000003 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Raymond Avenue Gallery',
      nickname: null,
      primary_image_resource: null,
      primary_image_resource_id: null,
      resource_id: 'VmVudWUecmF5bW9uZGF2ZW51ZWdhbGxlcnk',
      resource_url: '/api/venues/VmVudWUecmF5bW9uZGF2ZW51ZWdhbGxlcnk',
      slug: 'raymondavenuegallery',
      state: 'MN',
      summary: 'Curated regional artists',
    },
    venue_slug: 'raymondavenuegallery',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-15T05:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: false,
      name: 'Unloved Creatures 2020',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-02-07T20:13:02Z',
        modified_date: '2020-02-07T20:13:02Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjM3MjQwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjM3MjQwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM3MjQwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM3MjQwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM3MjQwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM3MjQwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjM3MjQwMDAx',
      resource_id: 'RXZlbnQeHzU3MzY2NzU5Mzg0MDIzMDQ',
      slug: 'unloved-creatures-2020',
      summary: 'An un-Valentine\u2019s group show',
      url: 'https://www.facebook.com/events/172506693815146/',
    },
    label: 'Opening',
    resource_id: '49443337e1784cef89bbe29b574ea065',
    start: '2020-02-15T01:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '357 13th Ave NE',
      address2: '',
      category: 'gallery',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 45.0011221, lon: -93.2618289 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Rogue Buddha Gallery',
      nickname: null,
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2017-12-18T05:37:55Z',
        modified_date: '2017-12-18T05:37:55Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMTI0MDAwMDE',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMTI0MDAwMDE',
        versions: {
          CARD_LARGE: '',
          CARD_SMALL: {
            height: 367,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0MDAwMDE/card_small.png',
            width: 700,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0MDAwMDE/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMTI0MDAwMDE',
      resource_id: 'VmVudWUecm9ndWUtYnVkZGhh',
      resource_url: '/api/venues/VmVudWUecm9ndWUtYnVkZGhh',
      slug: 'rogue-buddha',
      state: 'MN',
      summary: 'Provocative contemporary art',
    },
    venue_slug: 'rogue-buddha',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-15T06:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: true,
      name: 'Safe\u00b7word: An Erotic Art Show',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-01-31T16:47:20Z',
        modified_date: '2020-01-31T16:47:20Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjI5MzQwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjI5MzQwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MzQwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MzQwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MzQwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MzQwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjI5MzQwMDAx',
      resource_id: 'RXZlbnQeHzU3MzgzODMzMjIxMjAxOTI',
      slug: 'safe-word-an-erotic-art-show',
      summary:
        'An Erotic inspired art show featuring visual, performance, installation, demonstrators, and sex educators',
      url: 'https://btt.boldtypetickets.com/Browse#venue=a-mill-artist-lofts-museum',
    },
    label: '',
    resource_id: 'fc52cd484e0b4cdba5a1404afecb8bf1',
    start: '2020-02-15T01:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '315 Main St SE',
      address2: '',
      category: 'business',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 44.98352999999999, lon: -93.252654 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'A-Mill Artists Lofts',
      nickname: null,
      primary_image_resource: null,
      primary_image_resource_id: null,
      resource_id: 'VmVudWUeYS1taWxsLWFydGlzdHMtbG9mdHM',
      resource_url: '/api/venues/VmVudWUeYS1taWxsLWFydGlzdHMtbG9mdHM',
      slug: 'a-mill-artists-lofts',
      state: 'MN',
      summary: '',
    },
    venue_slug: 'a-mill-artists-lofts',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-16T04:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: false,
      name: 'Button Mashers',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-02-02T19:13:09Z',
        modified_date: '2020-02-02T19:13:09Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjQzMzEwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjQzMzEwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQzMzEwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQzMzEwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQzMzEwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQzMzEwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjQzMzEwMDAx',
      resource_id: 'RXZlbnQeHzU3MTMyMTYyOTAxNjA2NDA',
      slug: 'button-mashers',
      summary: 'Otherworldly Arts Collective presents 50+ artists on the theme of video games',
      url: 'https://www.facebook.com/events/2568050483244375/',
    },
    label: 'Opening',
    resource_id: '7b4a10a14c134b52b96fd37b38137259',
    start: '2020-02-15T22:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '315 Main St SE',
      address2: '',
      category: 'business',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 44.98352999999999, lon: -93.252654 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'A-Mill Artists Lofts',
      nickname: null,
      primary_image_resource: null,
      primary_image_resource_id: null,
      resource_id: 'VmVudWUeYS1taWxsLWFydGlzdHMtbG9mdHM',
      resource_url: '/api/venues/VmVudWUeYS1taWxsLWFydGlzdHMtbG9mdHM',
      slug: 'a-mill-artists-lofts',
      state: 'MN',
      summary: '',
    },
    venue_slug: 'a-mill-artists-lofts',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-16T03:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: true,
      name: 'Perceiving Places: Through Our Tenderness',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-01-17T20:28:06Z',
        modified_date: '2020-01-17T20:28:06Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjM5MjMwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjM5MjMwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MjMwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MjMwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MjMwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MjMwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjM5MjMwMDAx',
      resource_id: 'RXZlbnQeHzU3MjI1OTg3MTMzMjc2MTY',
      slug: 'perceiving-places-through-our-tenderness',
      summary: 'Works by Roshan Ganu',
      url: 'https://www.soovac.org/perceiving-places',
    },
    label: 'Opening',
    resource_id: '6ccfc906693247d884d1eed0d1cbf8c7',
    start: '2020-02-16T00:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '2909 Bryant Ave S',
      address2: 'Suite 101',
      category: 'gallery',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 44.9496805, lon: -93.2903364 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Soo Visual Arts Center',
      nickname: 'Soo VAC',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2018-01-10T17:46:42Z',
        modified_date: '2018-01-10T17:46:42Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMTgwODAwMDE',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMTgwODAwMDE',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTgwODAwMDE/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTgwODAwMDE/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTgwODAwMDE/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTgwODAwMDE/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMTgwODAwMDE',
      resource_id: 'VmVudWUec29vdmFj',
      resource_url: '/api/venues/VmVudWUec29vdmFj',
      slug: 'soovac',
      state: 'MN',
      summary: 'Fresh, under-represented, and provocative art  ',
    },
    venue_slug: 'soovac',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-16T03:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: true,
      name: 'Untitled 16',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-01-19T00:24:08Z',
        modified_date: '2020-01-19T00:24:08Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ5MzAwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjQ5MzAwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzAwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzAwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzAwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzAwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ5MzAwMDAx',
      resource_id: 'RXZlbnQeHzU3NjQzNTU0MjU1NjY3MjA',
      slug: 'untitled-16',
      summary: 'SooVAC\u2019s 16th Juried Exhibition',
      url: 'https://www.soovac.org/untitled-16',
    },
    label: 'Opening',
    resource_id: '45d679de29b9407d8305af998f7b32d0',
    start: '2020-02-16T00:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '2909 Bryant Ave S',
      address2: 'Suite 101',
      category: 'gallery',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 44.9496805, lon: -93.2903364 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Soo Visual Arts Center',
      nickname: 'Soo VAC',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2018-01-10T17:46:42Z',
        modified_date: '2018-01-10T17:46:42Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMTgwODAwMDE',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMTgwODAwMDE',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTgwODAwMDE/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTgwODAwMDE/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTgwODAwMDE/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTgwODAwMDE/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMTgwODAwMDE',
      resource_id: 'VmVudWUec29vdmFj',
      resource_url: '/api/venues/VmVudWUec29vdmFj',
      slug: 'soovac',
      state: 'MN',
      summary: 'Fresh, under-represented, and provocative art  ',
    },
    venue_slug: 'soovac',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-16T23:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: false,
      name: 'Blacknificent',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-02-03T22:03:31Z',
        modified_date: '2020-02-03T22:03:31Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjMzMjUwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjMzMjUwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMjUwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMjUwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMjUwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMjUwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjMzMjUwMDAx',
      resource_id: 'RXZlbnQeHzU2NTMzMDg2MDk5MjEwMjQ',
      slug: 'blacknificent',
      summary: 'Ron Brown presents a body of work in celebration of Black History Month',
      url: ' https://www.facebook.com/events/473520579986067/',
    },
    label: 'Live Illustration Event',
    resource_id: '298d5861a2d647b2b7e10afeb9bc9176',
    start: '2020-02-16T20:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '901 18 1/2 Ave NE',
      address2: '',
      category: 'gallery',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 45.007133, lon: -93.248751 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Artspace Jackson Flats',
      nickname: null,
      primary_image_resource: null,
      primary_image_resource_id: null,
      resource_id: 'VmVudWUeYXJ0c3BhY2UtamFja3Nvbi1mbGF0cw',
      resource_url: '/api/venues/VmVudWUeYXJ0c3BhY2UtamFja3Nvbi1mbGF0cw',
      slug: 'artspace-jackson-flats',
      state: 'MN',
      summary: '',
    },
    venue_slug: 'artspace-jackson-flats',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'performance',
    end: '2020-02-17T20:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: false,
      name: 'Four Stories',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-01-05T23:07:38Z',
        modified_date: '2020-01-05T23:07:38Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjIxMzEwMDAy',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjIxMzEwMDAy',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIxMzEwMDAy/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIxMzEwMDAy/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIxMzEwMDAy/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIxMzEwMDAy/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjIxMzEwMDAy',
      resource_id: 'RXZlbnQeHzU3MzQ2MDk2NTY0Nzk3NDQ',
      slug: 'four-stories',
      summary: 'Gina Adams, Megan Pahmier, Nirmal Raja, James Stephens',
      url: 'https://mcad.edu/event/four-stories-gina-adams-megan-pahmier-nirmal-raja-james-stephens',
    },
    label: 'Visiting Artist Performance with Gina Adams',
    resource_id: '5c3cd0a047ba46f885aa885f0661827b',
    start: '2020-02-17T19:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '2501 Stevens Avenue',
      address2: '',
      category: 'institution',
      city: 'Minneapolis',
      country: 'USA',
      geo: [{ lat: 44.9567218, lon: -93.2746323 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Minneapolis College of Art and Design (MCAD)',
      nickname: null,
      primary_image_resource: null,
      primary_image_resource_id: null,
      resource_id: 'VmVudWUebWNhZA',
      resource_url: '/api/venues/VmVudWUebWNhZA',
      slug: 'mcad',
      state: 'MN',
      summary: 'Student and alumni exhibitions',
    },
    venue_slug: 'mcad',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-21T00:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: false,
      name: 'Dennis Kalow - Focus on Form',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-02-09T21:10:34Z',
        modified_date: '2020-02-09T21:10:34Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ3MjQwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjQ3MjQwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MjQwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MjQwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MjQwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MjQwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ3MjQwMDAx',
      resource_id: 'RXZlbnQeHzU2NDU4Mzk1OTQ2ODQ0MTY',
      slug: 'dennis-kalow-focus-on-form',
      summary: 'Recent work by Minneapolis sculptor, Dennis Kalow in wood, metal, and stone.',
      url: '',
    },
    label: 'Opening',
    resource_id: '23770f7eae4d4516919474f03be79051',
    start: '2020-02-20T22:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '2500  80th St. E',
      address2: '# 120',
      category: 'popup',
      city: 'Inver Grove Heights',
      country: 'USA',
      geo: [{ lat: 44.8294236, lon: -93.055022 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Inver Hills Community College Fine Arts Building',
      nickname: 'Inver Hills Community College',
      primary_image_resource: null,
      primary_image_resource_id: '',
      resource_id: 'VmVudWUeaW52ZXItaGlsbHMtY29tbXVuaXR5LWNvbGxlZ2UtZmluZS1hcnRzLWJ1aWxkaW5n',
      resource_url: '/api/venues/VmVudWUeaW52ZXItaGlsbHMtY29tbXVuaXR5LWNvbGxlZ2UtZmluZS1hcnRzLWJ1aWxkaW5n',
      slug: 'inver-hills-community-college-fine-arts-building',
      state: 'MN',
      summary: '',
    },
    venue_slug: 'inver-hills-community-college-fine-arts-building',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-21T01:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: false,
      name: 'By Buy Bye!',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-01-29T22:06:22Z',
        modified_date: '2020-01-29T22:06:22Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjMzMjMwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjMzMjMwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMjMwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMjMwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMjMwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMjMwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjMzMjMwMDAx',
      resource_id: 'RXZlbnQeHzU2NzE2MTEwNzYxODIwMTY',
      slug: 'by-buy-bye',
      summary: 'Senior Seminar Thesis Exhibition',
      url: 'https://www.bethel.edu/events/arts/galleries/exhibits/2020/by-buy-bye-senior-seminar-thesis-exhibition',
    },
    label: 'Show #2 Opening',
    resource_id: '3e349f4a128e4347b9ecbbc676a50b72',
    start: '2020-02-20T23:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '3900 Bethel Dr',
      address2: 'Clauson Center (CC building)',
      category: 'institution',
      city: 'St Paul',
      country: 'USA',
      geo: [
        { lat: 45.0580430688054, lon: -93.16190920864165 },
        { lat: 45.05807338377119, lon: -93.16155072055881 },
        { lat: 45.057960346547155, lon: -93.16153462730472 },
        { lat: 45.057933820900494, lon: -93.16195748840391 },
      ],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Johnson Gallery, Bethel University ',
      nickname: 'Johnson Gallery',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2018-11-06T02:20:53Z',
        modified_date: '2018-11-06T02:20:53Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMTE3MDAwMDE',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMTE3MDAwMDE',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTE3MDAwMDE/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTE3MDAwMDE/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTE3MDAwMDE/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTE3MDAwMDE/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMTE3MDAwMDE',
      resource_id: 'VmVudWUeYmV0aGVsLXVuaXZlcnNpdHktam9obnNvbg',
      resource_url: '/api/venues/VmVudWUeYmV0aGVsLXVuaXZlcnNpdHktam9obnNvbg',
      slug: 'bethel-university-johnson',
      state: 'MN',
      summary: 'National, local, and student exhibitions',
    },
    venue_slug: 'bethel-university-johnson',
  },
  {
    _meta: { is_verbose: true, resource_type: 'EventDateModel' },
    category: 'reception',
    end: '2020-02-21T02:00:00Z',
    event_resource: {
      _meta: { is_verbose: true, resource_type: 'EventModel' },
      featured: false,
      name: 'Hana Noeau Hana Hou & Being in The World',
      primary_image_resource: {
        _meta: { is_verbose: true, resource_type: 'FileContainer' },
        caption: null,
        created_date: '2020-02-06T19:55:47Z',
        modified_date: '2020-02-06T19:55:47Z',
        resource_id: 'RmlsZUNvbnRhaW5lch4fMjIzMTYwMDAx',
        resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjIzMTYwMDAx',
        versions: {
          CARD_LARGE: {
            height: 472,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIzMTYwMDAx/card_large.png',
            width: 900,
          },
          CARD_PROGRESSIVE: {
            height: 21,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIzMTYwMDAx/card_progressive.png',
            width: 40,
          },
          CARD_SMALL: {
            height: 184,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIzMTYwMDAx/card_small.png',
            width: 350,
          },
          THUMB: {
            height: 160,
            url:
              'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIzMTYwMDAx/thumb.png',
            width: 160,
          },
        },
      },
      primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjIzMTYwMDAx',
      resource_id: 'RXZlbnQeHzU2MzkxNzMxMzQzNTIzODQ',
      slug: 'hana-no-eau-hana-hou-being-in-the-world',
      summary: 'New works by JW Green and Lauren Scavo-Fulk',
      url: 'https://www.hopkinsartscenter.com/',
    },
    label: 'Opening',
    resource_id: 'a165ba910cf84a5d9ba077bdc712239d',
    start: '2020-02-21T00:00:00Z',
    type: 'timed',
    venue_resource: {
      _meta: { is_verbose: false, resource_type: 'Venue' },
      address: '1111 Mainstreet',
      address2: '',
      category: 'popup',
      city: 'Hopkins',
      country: 'USA',
      geo: [{ lat: 44.92466, lon: -93.4146265 }],
      is_premium_profile: false,
      multiple_locations_label: '',
      name: 'Hopkins Center for the Arts',
      nickname: null,
      primary_image_resource: null,
      primary_image_resource_id: null,
      resource_id: 'VmVudWUeaG9wa2lucy1jZW50ZXItZm9yLXRoZS1hcnRz',
      resource_url: '/api/venues/VmVudWUeaG9wa2lucy1jZW50ZXItZm9yLXRoZS1hcnRz',
      slug: 'hopkins-center-for-the-arts',
      state: 'MN',
      summary: '',
    },
    venue_slug: 'hopkins-center-for-the-arts',
  },
];

let articleResources = [
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Gabby Coll',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Gabby',
      lastname: 'Coll',
      resource_id: 'VXNlch4fNTY3NDc0MDEwMjQ2MzQ4OA',
      resource_url: '/api/users/VXNlch4fNTY3NDc0MDEwMjQ2MzQ4OA',
      website: 'mailto: gabby.coll@juxtaposition.org',
    },
    author_resource_id: 'VXNlch4fNTY3NDc0MDEwMjQ2MzQ4OA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>Local painter Amina Harper, known for her fantastically whimsical and intimate paintings, was born and raised in Minneapolis. She&nbsp;briefly attended art school in Portland before her grandmother&rsquo;s illness brought her back home&nbsp;and has now established herself as a freelance artist in the Twin Cities. Recently&nbsp;I got to sit down with her, and in the spirit of love, we talked about intimacy, her process for creating fantastical creatures and environments, the queerness of color, and why connection is important.&nbsp;</p>\n\n<p><em>This interview has been edited for clarity and length.&nbsp;</em></p>\n\n<p><strong>Gabby Coll:&nbsp;</strong><u><strong><a href="https://www.mplsart.com/written/2018/12/fantastically-bizarre-amina-harper-s-work-world/">MPLSART&nbsp;profiled you in 2018</a></strong></u><strong> &ndash; what&rsquo;s happened since then?&nbsp;</strong></p>\n\n<p>Amina Harper:&nbsp;So much has changed. When I did that interview I wasn&rsquo;t ready. I didn&rsquo;t have a voice. I had just started working in acrylic paint (self-taught; I worked in watercolor before), and I didn&rsquo;t have an identity as a painter in that medium yet. I was painting animals and fruits so I could teach myself those skills.&nbsp;</p>\n\n<p>Now that I basically have acrylic painting down and have the skills and tools and space to make it happen, I can really paint the things I want to paint and say the things I want to say.</p>\n\n<p><strong>What are those stories you want to tell?&nbsp;</strong></p>\n\n<p>So many stories. Right now, I&rsquo;m really into queer, black, and femme stories. You don&rsquo;t see them often in the media, and because of this, I have the freedom to literally do whatever I want. They can be as fantastical, as romantic, and as exciting as I want them to be. I want people to look at the work and not be sure what&rsquo;s happening all the time. I want to create something completely new that&rsquo;s never existed before.&nbsp;</p>\n\n<p>All of my work is a little fantastical and always has been, so it&rsquo;s not terribly outside of the box for me. The size and scale and composition are a little different than I&rsquo;m used to. But I&rsquo;m accustomed to building a piece from the ground up; I don&rsquo;t take photographs of figures and repaint them, I just figure draw from the ground-up. I might pose a figure a little bit, and I work from reference photos. My phone has nothing but references pulled from the internet and real life; they&rsquo;re weird and they don&rsquo;t make any sense, but they make sense to me because I know why I have them.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MzYwMDAx/full.jpg" /><small>Amina Harper, <em>Reflections Eternal</em>, acrylic on canvas, 2020.</small></p>\n\n<p><strong>So are most of your paintings kind of an amalgam of your fantastical ideas, these stories you want to tell, your reference photos, and your real life too?</strong></p>\n\n<p>Yeah, kind of. There&rsquo;s one painting I recently made of two women kissing. One of them is human, the other one looks like an alien of some sort. They&rsquo;re sitting in front of a large table that&rsquo;s filled with food. I wanted to take all of the Zodiac signs and turn them into meals, each sign as a different food item. The women are kissing, and it looks like they&rsquo;re on a date.&nbsp;</p>\n\n<p>People have been getting really into Zodiacs lately, and compatibility, and my way of looking at it is that you really can have your pick of whomever. Your chart is just something you reference, but it really makes all of our options [in relationships] feel so vast. It was fun picking the meals, creating them and figuring out what food represented which sign. Sometimes other things like the utensils would represent the signs, like a spoon in the shape of a scorpion.</p>\n\n<p><strong>I&rsquo;m curious about your process. I was looking on <a href="https://www.instagram.com/amina.harper/" target="_blank">your Instagram</a>, and you share many phases of your drawings which then turn into paintings. What compels you to do this in your practice?&nbsp;</strong></p>\n\n<p>I love the behind-the-scenes stuff. I actually like seeing that more than the finished product. The final product is never going to change that much, whereas the behind the scenes is always a work in progress, it&rsquo;s always alternating and moving to fit the vision. I am interested in how the process moves.&nbsp;</p>\n\n<p>It&rsquo;s also a really intimate process to share. I think that&rsquo;s what people like about my Instagram. I&nbsp;show you literally how I start from the transfer and step-by-step all the way to the final piece. You get to watch it and grow with it, and it feels like you&rsquo;re participating in the piece.&nbsp;</p>\n\n<p>Another big thing about this process of my work is that I have a record of where I started, so if I have to protect or maintain a line while I&rsquo;m in the process, I can go back to reference it.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQxMjIwMDAy/full.jpg" /><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQxMjIwMDAx/full.jpg" /><small>Top:&nbsp;Preliminary sketch the artist&nbsp;shared on Instagram. Bottom:&nbsp;<em>A Pocket of Light</em>, acrylic on canvas, 2019.</small></p>\n\n<p><strong>Your work is fantastical, humanistic, it&rsquo;s about relationships&hellip;we also talked about food and Zodiacs. You say you have all these ideas of what to create; how do you select the subject matter for your next painting?&nbsp;</strong></p>\n\n<p>My goal is intimacy. The more touch, the more eye contact, the more intense or romantic a piece is, the more interested I am in realizing it. I used to do solitary figures exclusively. Now I&rsquo;m acknowledging that what I want in my life are relationships. I recently learned about the Seven Greek Loves and thought &lsquo;wow, that is a very decolonized, queer way of looking at love and relationships.&rsquo; I liked the idea of not having to look for one type of person who is supposed to be the most important and who validates all of our everything all at once. We have to validate ourselves. A lover should not complete you. They should give you something extra. I want to create those types of ecosystems in my art.</p>\n\n<p>We live in a very lonely time. Work makes us lonely. But it&rsquo;s also how we frame relationships. We work toward the ideal of something that doesn&rsquo;t really exist: the perfect job, the perfect house, the perfect partner who wants to have the perfect family with us, and who wants to be with us forever until we both die. That&rsquo;s kind of insane. That&rsquo;s a lot to expect from one person and why so many relationships fall apart.&nbsp;</p>\n\n<p>I firmly believe in using social media to create real-world relationships. The goal is to build a foundation that we take into the real world.&nbsp;It&rsquo;s hard, we all do it, we all alienate ourselves. But we also do need those connective relationships and people.&nbsp;The art changes to reflect that &ndash;letting new people in. Right now it just all looks kind of sexual [laughs]. Not everything, some stuff that doesn&rsquo;t, some stuff is just sweet.&nbsp;</p>\n\n<p><strong>Tell me about that line between erotica and intimacy; the nuance of those kinds of relationships. You&rsquo;ve talked about queerness too; I&rsquo;m curious about what you&rsquo;re interested in exploring in your work.</strong></p>\n\n<p>I love intimacy. I love seeing it, experiencing it, and I enjoy portraying it. Hands are my favorite thing to draw. They&rsquo;re one of the most intimate tools we have. In my paintings with multiple figures, everyone is touching. It&rsquo;s joyous touch, it&rsquo;s consensual touch.&nbsp;</p>\n\n<p>I think that people are afraid of stuff like this, scared because they want it so badly. It involves vulnerability and courage. It involves setting yourself up to be rejected and we all want to be powerful in our relationships. That might be a Western thing, but it&rsquo;s very exhausting. We all feel like we want to be powerful but what we really want is to be loved. And we feel like we have to manipulate or fight our way through it somehow.&nbsp;</p>\n\n<p>This plays into the alienation (from ourselves, each other). It&rsquo;s frustrating. Being in relationships with people where you feel like you aren&rsquo;t valid. Black women experience this. It took me so long&hellip;outside of my family, growing up, I never felt seen, or beautiful, or valid or important to anyone. Once I got outside into the world, I was invisible, or so visible that I was objectified. It taught me that this was my only value.&nbsp;</p>\n\n<p>White supremacy has a way of disconnecting you from yourself and from your community. It disconnected me from other black women and queer and femme people. Everything around me told me that this body, and everyone else who inhabits one that is similar to it, are undesirable and unworthy. That if I want to be desirable and worthy, I have to attach myself to the bodies of people that are. I am moving my way towards getting over that. Thank god.&nbsp;</p>\n\n<p>It&rsquo;s painful to be disconnected from yourself and from your tribe in that way. I think painting black women for me has become a way of connecting. Those women are me. They&rsquo;re also other women and other queers and other femme people like me.</p>\n\n<p><strong>Tell me more about how you&rsquo;re working through that in your work.</strong></p>\n\n<p>I just needed to see people who looked like me being valued and validated. The sad part is, the reason they&rsquo;re always mythological creatures is because I can&rsquo;t see other humans doing it. The reason why this werewolf is here is because humans don&rsquo;t love black women, but this werewolf does.&nbsp;</p>\n\n<p>Basically, I&rsquo;ve created a world where the people who are the least loved get the most love in the most magical and fantastical ways. I will create a love that is the most magical, the most powerful, the most intense, the most romantic and wind-sweeping, wave-crashing, epic love that I can think of. Because if I see it and can show it, then maybe that will change something.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MzkwMDAx/full.jpg" /><small>Amina&nbsp;Harper,&nbsp;<em>Euphoria</em>, acrylic on canvas, 2019.</small></p>\n\n<p><strong>That&rsquo;s what I was going to ask; is this you creating this world as a vision for the future? Or is it a survival tactic? Or both?&nbsp;</strong></p>\n\n<p>Probably all of it. I like the idea of creating worlds that no one has ever seen before and that people don&rsquo;t get to see often. That opens the world up a little bit more to these ideas and these stories.</p>\n\n<p>I&rsquo;ve had people who flat out don&rsquo;t understand the work. I can&rsquo;t do anything about that, but it&rsquo;s made me more cautious about who does understand, and that those people are valuable. They are valuable because they understand that experience. That&rsquo;s who I make the work for besides myself.&nbsp;</p>\n\n<p><strong>I&rsquo;m curious about your writing; tell me about the relationship between writing and art-making.&nbsp;</strong></p>\n\n<p>I incorporate the two. Before I paint anything, I write down what the piece is, what all the characters are going to look like, where they&rsquo;re going to be in relation to each other. Writing happens the whole way through. If I have an idea in my head and it&rsquo;s something I&rsquo;ve never seen before, I&rsquo;ll write about why it needs to exist, or why I want it to exist. To give it that extra tangibility, that validity; it&rsquo;s real, it matters because I want to make it real.&nbsp;</p>\n\n<p><strong>Anything else you want us to know?&nbsp;</strong></p>\n\n<p>I feel like people are afraid to ask me weird questions. I think there&rsquo;s not enough weird, intimate art in this state, specifically. I think people want to see it; they crave it. But it&rsquo;s not normalized.</p>\n\n<p>Color is super important to me. It&rsquo;s extremely queer: color, rhinestones, flowers, glistening water that&rsquo;s the color of sapphires&hellip; people are freaked out by that. They think it&rsquo;s tacky or gaudy or campy. To me, those are the queerest things you can be. Show out. Show people the world is bigger than beige. Be as grand as you possibly want or dare to be. Inspire other people to do the same. I think everyone wants to do that, but the world says no because white supremacy shames all of those things: color, queerness, drama, beauty, romance, desire. But all of this is what makes us intrinsically human.&nbsp;</p>\n\n<p><em>To see more of Harper&#39;s work, visit <a href="https://aminaharper.wixsite.com/aminaharper/" target="_blank">the artist&#39;s website</a> or follow her on <a href="https://www.instagram.com/amina.harper/" target="_blank">Instagram</a>.</em></p>\n\n<p><em>Banner image: </em>The Acquiescence of April<em> (detail), acrylic on canvas, 2019.</em></p>\n',
    created_date: '2020-02-13T05:11:44Z',
    is_published: true,
    modified_date: '2020-02-13T06:14:23Z',
    permalink: '/written/2020/02/the-most-love-an-interview-with-artist-amina-harper/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2020-02-13T05:19:44Z',
      modified_date: '2020-02-13T05:19:44Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjM1MzcwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjM1MzcwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MzcwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MzcwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MzcwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MzcwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjM1MzcwMDAx',
    published_date: '2020-02-13T05:32:27Z',
    resource_id: 'QmxvZ1Bvc3QeHzU2NzQxMTQ5MDc4OTc4NTY',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU2NzQxMTQ5MDc4OTc4NTY',
    slug: 'the-most-love-an-interview-with-artist-amina-harper',
    summary:
      "Queer, black, and femme characters find intimacy in this painter's wild world which, in her words, is much bigger than beige.",
    title: 'The Most Love: An interview with artist Amina Harper',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Juleana Enright',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Juleana',
      lastname: 'Enright',
      resource_id: 'VXNlch4fNTE3MDQ3MzI5Mzg0MDM4NA',
      resource_url: '/api/users/VXNlch4fNTE3MDQ3MzI5Mzg0MDM4NA',
      website: 'https://twitter.com/juleanaenright',
    },
    author_resource_id: 'VXNlch4fNTE3MDQ3MzI5Mzg0MDM4NA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>Currently on view at Artistry in Bloomington, <a href="https://www.mplsart.com/events/revitalizing-symbols"><em>Revitalizing Symbols</em></a> features work from 13 Indigenous and First Nations artists exploring identity and the act of reclamation through multiple media, stories, perspectives, and layers. Curated by Emerging Curators Institute fellow Alexandra Buffalohead, the show focuses on visibility and representation and is the first of four exhibitions organized through ECI&rsquo;s newly developed program for upcoming regional curators.</p>\n\n<p>I caught up with curator Alexandra Buffalohead to talk about visibility within the local arts scene and how the artists in <em>Revitalizing Symbols</em> are seeking to redefine traditional expressions of language, land, identity, and art through a modern narrative.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MzUwMDAx/full.jpg" /><small><em>Revitalizing Symbols</em>, installation view. Photo by <a href="http://www.nicole-l-thomas.com" target="_blank">Nicole Thomas</a>.</small></p>\n\n<p><strong>Juleana Enright: What is your background and how did you get involved in the local art world?&nbsp;</strong></p>\n\n<p><strong>Alexandra Buffalohead</strong>: I have been drawn to music and art since I was younger in middle and high school. I completed my Bachelor of Arts from Augsburg University with a major in Studio Arts. After graduating and being overconfident I found it challenging to find a job with just a bachelor&rsquo;s degree and returned to school for an Associates Degree in Graphic Design. I worked for a few non-profit Native organizations and started an Art History Master&rsquo;s program and museum studies certificate at the University of St. Thomas. Half way through my program I accepted a job as the Arts and Cultural Engagement Manager at the Native American Community Development Institute and All My Relations Arts Gallery, and I believe this has submerged me more into the local art world. I&rsquo;ve been playing in a band with my parents called Bluedog since I was younger. I used to feel like I had to separate the two or pick one or the other. Until recently meeting other musicians and artists who do both fluidly, I have learned that I shouldn&rsquo;t try stick to one, but to encourage both.</p>\n\n<p><strong>From ledger artwork, textiles, and paintings, to video and animation, the visual language is really present in this exhibition. Why was it important for you to incorporate such a complex array of different practices and media into this exhibit?&nbsp;</strong></p>\n\n<p>It was important for me to share the complexities of these artists who are doing this work in a positive, empowering way. I wanted to try to support as many artists within capacity, intriguing audiences&rsquo; curiosity to learn more while combating stereotypes of art created by First Nations people.</p>\n\n<p><strong>Tell us more about what you wanted to convey to the viewer through the exhibit&rsquo;s title, <em>Revitalizing Symbols</em>?</strong></p>\n\n<p>I wanted to convey that this is something to show a place of strength, power, survival, and resistance that First Nations people are doing, to emphasize our existence and to celebrate these artists, and that there are other artists doing revitalization through their work in telling their stories (with consideration of who the work is intended to be seen by). Revitalization that is happening with different Nations&rsquo; languages, in reference to land, and specifically symbols. Since Indigenous North American art has been canonized by European academia, I wanted to convey that there is a wide range of what artists are doing with symbols, and in their own ways of creating their own iconography and challenge this with Indigenous methodologies.&nbsp;</p>\n\n<p>I wanted to show that there are artists who are literally revitalizing cultural symbols or storytelling, but also on their terms, with abstraction. For example, (with the multi-generational puzzle-like wood abstract work by Ojibwe musician/artist) Briand Morrison, who &mdash; though using different mediums &mdash; finds inspiration from his father, George Morrison&rsquo;s abstraction work. Or Haley Greenfeather English, who leaves it up to the audience to use their experiences of viewing and understanding to interpret her paintings.&nbsp;</p>\n\n<p><strong>One of your personal goals for this exhibit was to work with as many artists as possible, selecting artists who came from a variety of different career levels, Tribal Nations, rural and urban communities. What was the research process like for you and how did you discover artists you invited to participate?</strong></p>\n\n<p>I feel like due to time, I was only able to half-achieve this goal. The research process has been ongoing since my academic career started and has been created and interwoven from relationship-building with the artists from my graduate research program, to my work at All My Relations Arts and Northern Spark, and with my side career as a musician.</p>\n\n<p>Through a travel grant I was able to visit Chicago where I met Debra Yepa-Pappan and Andrea Carlson. Both of whom I was fortunate to meet again at the Native Art Studies Association Conference (NAASA) &mdash; held in Minneapolis in October 2019 &mdash; where I also met Holly Young, who I had been following on social media.&nbsp;</p>\n\n<p>In 2016, I was in Santa Fe for a convening and went to the IAIA Museum of Contemporary Native Arts (MoCNA) museum. There, I was blown away and inspired by a senior student exhibition from IAIA. One of the colorful murals was created by Haley Greenfeather English.&nbsp;</p>\n\n<p>A friend, Hannah Smith, introduced me to Jaida Grey Eagle who had just completed her BFA at IAIA. Jaida shared with me beautiful photographs from her <em>Winyan</em> series, and at the time I felt the <em>Revitalizing Symbols</em> exhibition was missing not only photography, but portraiture.</p>\n\n<p>Jehra Patrick from the Emerging Curator&rsquo;s Institute and Law Warschaw Gallery introduced me to Nicholas Galanin, who had a solo exhibition this past fall at Law Warschaw. I had the honor of giving him a mini-tour of Minneapolis and my work at All My Relations Gallery.&nbsp;</p>\n\n<p>I have to credit All My Relations Arts and colleagues for introducing me to Chholing Taha, Jonathan Thunder, and other artists. One of the first solo exhibitions I had ever gone to with my mom and that really moved me was by Jim Denomie.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MzQwMDAx/full.jpg" /><small>Jim Denomie,&nbsp;<em>Standing Rock-Bitch,</em>&nbsp;oil on canvas.</small></p>\n\n<p><strong>The use of symbolism has played a significant historical role in Native American and Indigenous art. How do you see the artists in this exhibit reviving traditional mediums into a modern narrative?</strong>&nbsp;</p>\n\n<p>I think this is a complicated question. I personally see and interpret all of the artists in this exhibition reviving traditional mediums into modern narrative. In Jaida Grey Eagle&rsquo;s <em>Winyan</em> series, she asked for the consent of the artists and for the artists to choose how they were photographed and what objects they were photographed with, while also having audio recordings of the artists telling their stories. In Holly Young&rsquo;s work, she visited different institutional collections, and is inspired by the objects she has spent time with. Through her research, she creates and honors her Dakota ancestors using items they used, while also incorporating modern fashion as an influence.</p>\n\n<p><strong>How have the concepts of intergenerational transference of knowledge and the ancestral history our bodies hold shaped your practice?&nbsp;</strong></p>\n\n<p>I am honored to be able to do this work, and feel this is a way of honoring my ancestral history by working with these artists. I feel blessed that my daytime job encourages the support of empowering artists at different ages and tries to create space for these artists. This is a practice that is challenging, and something I want to try my best in applying as I&rsquo;m able to. With the panel for this exhibition, and even in the curation, I tried to be mindful in including individuals from different nations and at different ages.&nbsp;</p>\n\n<p><strong>What has it been like working with the Emerging Curators Institute? How has this opportunity led to deepening your relationship to the role of curator?&nbsp;</strong></p>\n\n<p>It&rsquo;s been great working with the Emerging Curators Institute and with my mentor Michelle Westmark Wingard. It&rsquo;s been challenging and empowering. I am really appreciative of the model that they are striving for, which is a non-traditional educational cohort and collective with efforts to public access. Every ECI public or cohort meeting influences my curatorial practice and perspective, and carries over to my work at All My Relations and NACDI.&nbsp;</p>\n\n<p>It has been great to not only grow and see my cohort members grow, but the program as well and the incredible networking opportunities it&rsquo;s presented.</p>\n\n<p>This opportunity has reinforced to me that the research and learning component is ongoing, and reinforced my understanding of the shared work that goes into exhibitions, and the importance of all of the contributing roles.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMxMzcwMDAx/full.jpg" /><small>Jaida Grey Eagle, <em>Mikayla Patton</em>, photograph from the artist&#39;s <em>Winyan</em> series.</small></p>\n\n<p><strong>In your curatorial practice, a common theme is increasing visibility for Indigenous North American artists and working towards creating space to present a cultural narrative through art. As far as the local scene is concerned, what steps do you see to continue this work? What strides do you feel have been made and what challenges do we as a community still face in Indigenous representation?&nbsp;</strong></p>\n\n<p>Steps I see needed are funding opportunities for the artists, continued support for programs like ECI &mdash; to help develop spaces to bring artists &mdash; and for professional development for the art communities together. I feel like there have been great strides made just in this past year towards Indigenous representation, but it can&rsquo;t just end here. It needs to be ongoing support. First Nations people are still misrepresented in popular culture. In the Twin Cities, there is support needed for artists in terms of affordable studio spaces and grants that are designed, evaluated, and structured more inclusively, with Indigenous methodologies in mind. On a larger scale, with this upcoming census, not only it is important that Urban and Reservation communities work together to share the importance of making sure Indigenous people are counted accurately, but that we are counted accurately so that funding to support programs for our neighborhoods and communities is continued.&nbsp;</p>\n\n<p><strong>Why do you think it&rsquo;s important for members of the community to view this exhibition and what reflection do you hope its attendees will take away from the experience?</strong>&nbsp;</p>\n\n<p>I feel it&rsquo;s important for members of the First Nations community to view this exhibition because it shows ourselves represented in positive ways, in as many ways as possible. Hopefully it will inspire others to create and share their work to continue to increase the amount of artists. It is important to see our stories told from us, from Indigenous people.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTcwMDAx/full.jpg" /><small>Alexandra Buffalohead. Photo by <a href="https://www.greene.photography/portfolio" target="_blank">Greene Photography</a>.</small></p>\n\n<p><em>Revitalizing Symbols runs through February 14th at the Inez Greenberg Gallery at </em><a href="http://artistrymn.org">Artistry</a><em>. Bloomington, 1800 W. Old Shakopee Blvd., Bloomington. Free to the public.&nbsp;Gallery hours: M-F 8am - 10pm, Sat 9am - 5pm, Sun 1 - 10pm</em></p>\n\n<p><em>To learn more about Emerging Curators Insitute, visit <a href="https://www.emergingcurators.org" target="_blank">their website</a>.</em></p>\n\n<p><em>Banner image: Jaida Grey Eagle,&nbsp;</em>HolyElk and Bernie Lafferty<em>&nbsp;(detail),</em>&nbsp;<em>photograph.</em></p>\n',
    created_date: '2020-02-05T18:32:05Z',
    is_published: true,
    modified_date: '2020-02-05T21:44:04Z',
    permalink: '/written/2020/02/first-nations-curation-an-interview-with-alexandra-buffalohead/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2020-02-05T21:26:32Z',
      modified_date: '2020-02-05T21:26:32Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ5MzIwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjQ5MzIwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzIwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzIwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzIwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MzIwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ5MzIwMDAx',
    published_date: '2020-02-05T21:39:19Z',
    resource_id: 'QmxvZ1Bvc3QeHzU3NTc1NDI0MzMwMzAxNDQ',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU3NTc1NDI0MzMwMzAxNDQ',
    slug: 'first-nations-curation-an-interview-with-alexandra-buffalohead',
    summary:
      'A 2019/2020 Emerging Curators Fellow, Buffalohead talks about Revitalizing Symbols, a group show on view through Feb. 14th',
    title: 'First Nations Curation: An interview with Alexandra Buffalohead',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Russ White',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Russ',
      lastname: 'White',
      resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      resource_url: '/api/users/VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      website: 'http://www.russ-white.com/',
    },
    author_resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
    category_resource: {
      _meta: { is_verbose: true, resource_type: 'BlogCategory' },
      resource_id: 'QmxvZ0NhdGVnb3J5Hh81NzYzMjYzNjA2MjkyNDgw',
      resource_url: '/api/post_categories/QmxvZ0NhdGVnb3J5Hh81NzYzMjYzNjA2MjkyNDgw',
      slug: 'scene',
      title: 'The Scene',
    },
    category_resource_id: 'QmxvZ0NhdGVnb3J5Hh81NzYzMjYzNjA2MjkyNDgw',
    content:
      '<p>The following is the second in a series of articles profiling the eight distinguished artists chosen as 2018&nbsp;McKnight Fellows, a grant program for&nbsp;mid-career artists in Minnesota&nbsp;that&nbsp;is&nbsp;administered by the Minneapolis College of Art and Design. (You can read the first in this series&nbsp;<a href="https://www.mplsart.com/written/2020/01/chris-larson-jim-denomie/">here</a>.)&nbsp;These two artists will take part in the&nbsp;<a href="https://www.mplsart.com/events/mcknight-discussion-series-at-mia-catherine-morris-hend-al-mansour-jovan-c-speller">McKnight&nbsp;Discussion Series</a>&nbsp;on&nbsp;<strong>February 7th</strong>, talking publicly about their work&nbsp;with Catherine Morris, the Sackler Senior Curator for the Elizabeth A. Sackler Center for Feminist Art at the Brooklyn Museum. Russ White visited each of their studios&nbsp;beforehand to get a preview of their work.</p>\n\n<h1>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</h1>\n\n<p><small><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTMwMDAx/full.jpg" />Photo by&nbsp;Rik&nbsp;Sferra.</small></p>\n\n<p>Tacked to the wall of Jovan Speller&rsquo;s studio in St. Paul hangs a little piece of North Carolina: a loose bundle of cotton branches. The long brittle stems form a mass of crisscrossed brown lines, interrupted throughout by fluffy white puffs in full bloom, speckled occasionally&nbsp;with small bits of dead leaf. As sculpture goes, it doesn&rsquo;t get much more found object than this: cut from a field, displayed for your consideration, not transformed in any way or tampered with by the artist. No clever twists, just the plant itself: a complicated, beautiful bit of Southern flora. And here it hangs like a melancholy bouquet &mdash; not just&nbsp;a commodity left unpicked, but a history lesson largely unlearned.&nbsp;</p>\n\n<p>For Speller, the history is personal. These branches came from Windsor, North Carolina, from farmland owned by the artist&rsquo;s extended family &mdash; and once worked by her enslaved ancestors. Back then,&nbsp;they were&nbsp;not so much members of the&nbsp;Speller family&nbsp;as property&nbsp;on&nbsp;the Speller plantation. It&rsquo;s all part of a research project&nbsp;titled <em>Relics of Home</em>, a series of photographs, objects, installations, and interviews documenting and interpreting&nbsp;her family&rsquo;s dwindling ownership of the property over the past hundred years.&nbsp;From over forty acres in the late 1800s, after Emancipation and Reconstruction, their ownership is now&nbsp;down to just the small plot of land under a trailer home, where only a single distant cousin now lives (pictured above in the banner). The family&#39;s old house sits abandoned, stripped for copper and facing imminent consumption by overgrown bushes. The acreage was sold off piecemeal over decades through foreclosures and auctions, including land in which some of&nbsp;the artist&#39;s&nbsp;ancestors are buried.&nbsp;</p>\n\n<p>&ldquo;The narratives that I&rsquo;m dealing with are super complicated,&rdquo; she admits, &ldquo;and they&rsquo;re based in American history, African-American history, and personal family histories. It&rsquo;s so convoluted,&rdquo; she says with a laugh.&nbsp;</p>\n\n<p>Some of the complication stems from the fact that Speller grew up on the other side of the continent, in Los Angeles. Windsor is full of Spellers, she says, but she had never met most of the aunts, uncles, cousins, and strangers she encountered during her trips to the small town. This body of work catalogs&nbsp;what Speller calls the search for her &ldquo;origin story,&rdquo; wondering what this research and these relationships would tell her about her own identity.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MzYwMDAx/full.jpg" /><small><em>Centerpiece</em>, cotton branches, part of <em>Relics of Home</em>. Photo by the author.</small></p>\n\n<p>&ldquo;What I&rsquo;m trying to do with the cotton is honor it rather than politicize it,&rdquo; she explains. &ldquo;It&rsquo;s a part of my story as well, it&rsquo;s a part of my ancestry, but I don&rsquo;t have that physical relationship to it. I wanted to get to know the plant, because it was such a huge part of how we came to be in this country and our day-to-day lives.&rdquo;</p>\n\n<p>The rest of the work in this series, like the cotton branches, borders on documentary. Her approach to the subject matter is straightforward and reserved, careful not to editorialize too much about a story that isn&rsquo;t entirely hers. Photography is at the center of her practice, here capturing the stillness she found&nbsp;out on the farm. She flips through her portfolio.&nbsp;There&rsquo;s the abandoned family home, surrounded by encroaching plantlife. There&rsquo;s a rectangular bale of harvested cotton sitting covered in a field, cutting exactly the same profile as the one-story house. There&rsquo;s a bend in the Roanoke River, where the Speller Ferry used to traffic slaves and where, later, in happier times, her grandfather used to host fish fries.&nbsp;</p>\n\n<p>Some images stand on their own while others have been altered ever-so-slightly through collage. Here again the artist shows restraint. The family house has been cut out and nudged just a quarter inch off-kilter, as though jostled by an earthquake. (&ldquo;I grew up in LA&hellip;&rdquo; she says with a shrug and&nbsp;another burst of laughter.) In a second image, the house has been replaced with a photo of brush weeds, rendering the building almost&nbsp;invisible from the roofline down.&nbsp;</p>\n\n<p>The collages plainly&nbsp;visualize the structural instability&nbsp;and erasure in this&nbsp;story, as in so many. The photos are taken from a slight distance, both physically and emotionally, presenting the realities of her extended family&nbsp;as a matter of fact. &ldquo;When I began to explore the places, the people, the significant events,&rdquo; she says, &ldquo;I realized how distant I was from it. And that I already had an origin story.&rdquo;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MjUwMDAx/full.jpg" /><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQxMTgwMDAx/full.jpg" /><small>Top:&nbsp;<em>Replacing Home I</em>, photo collage.\u200b Bottom:&nbsp;A view of the artist&#39;s studio at Second Shift in St. Paul. On view are elements from&nbsp;<em>Relics of Home</em> as well as an experiment in dripped paint in the lower right. Photo by the author.</small></p>\n\n<p>The specifics of her own life show up in the <em>Relics</em> series as well, mostly in the form of sculptural installation. Speller&rsquo;s Buddhist upbringing is reflected in a coffee table altar of incense, beads, and offerings of cotton. Next to it, in pieces, sits a red couch from her childhood home, recreated from memory and bisected to allow us a look at the feathers and foam inside. It&rsquo;s a calm bit of violence, as though half of the sofa simply got stuck in the time machine. Perhaps she intends it to appear only half-remembered. The good half, the comfortable half.</p>\n\n<p>The saying goes that if you don&rsquo;t know your history, you&rsquo;re doomed to repeat it. That phrase has always conjured for me a long, slow arc of history, of&nbsp;hard-earned wisdom giving way to folly over decades, even centuries. But history happens every day in America, and our doom now seems to keep the pace of a hamster wheel, fast and furious, tragically self-propelled.</p>\n\n<p>&ldquo;I&rsquo;m very cognizant of the fact that I&rsquo;m raising a black boy,&rdquo; she says, &ldquo;and how friggin&rsquo; magical and wonderful he is, and how all of the white people in the world just think he&rsquo;s the most amazing, cutest, most beautiful human. I&rsquo;m tracking when that changes. At what age will you start to clutch your purse?&rdquo;</p>\n\n<p>This is just one of many tough questions Speller poses during our time together. In fact, like any good researcher, her practice seems to be entirely propelled by questions. &ldquo;How can I whittle this down,&rdquo; she asks of her family story, &ldquo;to something that can be a bit more relatable and universal?&rdquo; In another moment, she describes&nbsp;&ldquo;sitting with an image and asking, &lsquo;Are you done yet?&rsquo;&rdquo; An ongoing experiment with layers of black and white paint on&nbsp;her studio floor originated with her wondering, &ldquo;How do you aesthetically represent complicated narratives? What can that look and feel like?&rdquo;</p>\n\n<p>And perhaps most relevant to the distant family truths she found in Windsor: &ldquo;How do I map identity without owning it all?&rdquo;</p>\n\n<p>A good&nbsp;storyteller invites an audience into their world,&nbsp;letting&nbsp;us&nbsp;see&nbsp;ourselves in the narrative. I certainly see my own story in Speller&rsquo;s, quite specifically in fact, although oddly inverted: I am descended, in part, from slave-<em>owners</em> in rural North Carolina. That&#39;s a tangled piece of&nbsp;family history&nbsp;I am still mapping myself, determining ownership over. White American identity is, of course,&nbsp;not Speller&#39;s to map, let alone own &mdash; that&rsquo;s a job for white folks, and we have barely begun to scratch the surface with any real honesty&nbsp;&mdash; but the two are intrinsically linked. African-American history <em>is</em> American history. Like the bundle of cotton on her studio wall, it&rsquo;s a study in contrasts and similarities, in brown and in white, in beauty and in pain and in the money that&#39;s been&nbsp;made off both. And you need not own the story yourself to appreciate its truth. It may not be Speller&#39;s origin story, or yours, or even mine entirely.&nbsp;But it is America&rsquo;s.</p>\n\n<h1>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</h1>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI3MjQwMDAx/full.jpg" /><small>Photo by Rik Sferra.</small></p>\n\n<p>Sometimes the further you travel from home, the closer you get to it. Or at least the better you understand it, in my experience. I&rsquo;m not sure which has more impact, the distance you travel or the time you&rsquo;ve been gone, but sooner or later you&rsquo;ll catch yourself looking in from the outside, seeing the forces that formed you &mdash; your culture, your language, your customs &mdash; with fresh eyes.</p>\n\n<p>It&rsquo;s a perspective Hend Al-Mansour has been cultivating since 1997, when she left Saudi Arabia, where she was born and raised, to move to Minnesota. She had studied cardiology in Cairo but returned to her hometown of Hofuf, where she maintained a successful medical practice. Drawing and painting was always a passion of hers, but it never seemed like a realistic career choice for a woman in Saudi Arabia.&nbsp; During her time as a doctor, art was merely a hobby, although a rigorous, imperative one. &ldquo;I would take my vacations and stay home and paint,&rdquo; she says with a smile. She even exhibited&nbsp;her drawings and watercolors a few times in her home country, but the reception was not always warm. The paintings depicted angry, suffering women: one tied to a palm tree by her hair, another gazing out sadly over a choppy sea as her legs turn to stone. The sentiment was clear: Al-Mansour could not wait to leave.</p>\n\n<p>Medicine offered her autonomy, security, and ultimately a way out, and when the Mayo Clinic awarded her a fellowship in the late nineties, she jumped at the chance to escape. &ldquo;I left Saudi Arabia because I wasn&rsquo;t happy as a woman there,&rdquo; she says. &ldquo;That&rsquo;s the only reason I left. I didn&rsquo;t care where I ended up, I just wanted to get out.&rdquo; Soon after, a bout with cancer brought her priorities into even sharper focus. By the year 2000, Al-Mansour had abandoned medicine altogether and embraced her calling as an artist, enrolling in the MFA program at MCAD.</p>\n\n<p>Her artwork maintains a relentless focus on fierce women of all kinds &mdash; angry, happy, seductive, historical, archetypal. They are often set against intricate geometric patterns and scrolling Arabic calligraphy, each composition exploding with color even as it maintains a rigid, mathematical structure. In a way, they&rsquo;re all self-portraits, reflections of both where she came from and why she left.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMxMzYwMDAx/full.jpg" /><small><em>Story of A Woman</em>,&nbsp;screenprint&nbsp;on paper, 31 x 27&quot;, edition variable</small></p>\n\n<p>Surprisingly, growing up she actually had very little interest in Islamic art. Even the art schools, she says, looked to Western art as &ldquo;the ideal.&rdquo; Her work in the beginning was a feminist reaction against religious authority. But the culture shock in Minnesota was real, and soon, she says, &ldquo;I realized I am different from everyone else. I wanted my art to reflect my identity, so I went back to my own aesthetics as an Arab Islamic person.&rdquo; It wasn&rsquo;t quite homesickness, though. &ldquo;It was a desire to belong. I didn&rsquo;t grow up here, so I lack all the idioms and cultural references. I wanted to relate to something, to belong to something.&rdquo;</p>\n\n<p>She worked first with henna, creating images in earthy brown tones. The backgrounds of her compositions started melting away into geometric arabesques and hand-written Quranic verses, even as strong women held the foreground. This in itself is transgressive: centering bold feminine energy &mdash; defiant, erotic, proud, maternal, mysterious &mdash; within the context of a conservative, patriarchal religion. But to most Western eyes, the effect is perhaps more celebratory than subversive. We&rsquo;re missing a piece of the puzzle, lost in translation or the lack thereof. &ldquo;Audiences are a very complex and mysterious subject to me,&rdquo; she admits. &ldquo;Honestly I don&rsquo;t know who my audience is.&rdquo;&nbsp;</p>\n\n<p>The work is unabashedly&nbsp;colorful, with delicate, scrolling fonts floating in space, illegible to those of us who don&rsquo;t read Arabic. The words hang in the air like decorative flourishes, registering as little more than a flair of exotic cultural context for us Westerners. I can imagine it says something pretty. Not quite. To Al-Mansour these words are shackles. &ldquo;I went through the whole Quran and picked out the words I thought were very oppressive or didn&rsquo;t sit well with me, and I put them in my art.&rdquo;</p>\n\n<p>That audience ignorance, however, actually helped her gain another new perspective. &ldquo;They did not get the negativity. &lsquo;It&rsquo;s all beautiful,&rsquo; they&rsquo;d say, &lsquo;what are you talking about?&rsquo; Then I realized I am celebrating it in some way.&rdquo; What had driven her thousands of miles away from home was now calling her back to her roots.&nbsp;</p>\n\n<p>&ldquo;Also my life had become more happy,&quot;&nbsp;she adds,&nbsp;&quot;less angry.&rdquo;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQzMzAwMDAy/full.jpg" /><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMjQwMDAx/full.jpg" /><small>Top:&nbsp;<em>AlBadr</em>,&nbsp;screenprint&nbsp;on paper, 14 x 14&quot;, edition variable.&nbsp;Bottom:&nbsp;<em>The Pink House of God</em>, installation view from the&nbsp;<em>Mihrab</em>&nbsp;series, shrines&nbsp;paying homage to five different Arab-American women.</small></p>\n\n<p>Happy or not, her work still pushes boundaries. In an installation of tent-like shrines paying homage to different Arab-American women,&nbsp;Al-Mansour&nbsp;piped in&nbsp;a female voice performing&nbsp;the call to prayer over a loudspeaker, something you would never hear in a fundamentalist community. In another print, she&nbsp;has&nbsp;depicted Allah as a naked woman, imparting divine wisdom to Mohammed, yet another taboo subject in art. I&rsquo;m surprised to see so many pieces showing the prophet&rsquo;s face, given the infamous and bloody controversies around the Danish and <em>Charlie Hebdo</em> cartoons a few years back. She says she&rsquo;s caught a little flak but has not faced a severe reaction, she says, &ldquo;because it&rsquo;s very friendly. It&rsquo;s celebrating Mohammed.&rdquo;</p>\n\n<p>Al-Mansour still works primarily with screenprinting, in addition to ongoing experiments in painting, digital rendering, installation, and animation. The boldness and detail of her designs are arresting, especially at the scale at which she works, sometimes creating prints as large as seven feet tall &mdash; no easy task. Screenprinting, as a medium, is a wonderful mix of mechanical and manual. The process is physical, laborious, technical, and repetitive. But the results can be surprisingly organic. You never know exactly what you&rsquo;ve done until you lift the screen up after your first pull of the squeegee, revealing that first, flat layer of color. Sometimes it&rsquo;s perfect, sometimes not. The magic is in the mistakes as much as the mechanical precision. Really, it&rsquo;s in the printmaker&rsquo;s hand.</p>\n\n<p>Al-Mansour&#39;s&nbsp;work celebrates love as a revolutionary force, bucking some traditions even as it passes others on. In 2013 she received a Master&rsquo;s in Art History from St. Thomas, focusing her thesis on henna patterns specific to her hometown of Hofuf. Henna goes back centuries, most often used for incredibly intricate floral patterning on women&rsquo;s skin. But one local tradition, called the Fist of Night, leaves the design up to chance. Young girls grasp a morsel of henna in their hand, binding it shut overnight. The brown dye molds to the lines and planes of their palms, and the next morning, they find out what patterns and shapes the henna has made. There is power in that gesture, in that chance expression of individual identity.</p>\n\n<p>It&rsquo;s tempting to compare notes on Arab and American misogyny; suffice it to say that both societies have a long way to go. It might do us some good to get a little distance from ourselves first. &ldquo;I&rsquo;m in continuous translation,&rdquo; she says at the end of our time together. &ldquo;Continuously. In terms of how I think of things as an Arab woman and how I think of things as an American woman. It&rsquo;s like seeing things from two different sides. I think you see better.&rdquo;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ1MjQwMDAx/full.jpg" /><small><em>Fist of Night or Daughter of Quraish</em>, screenprint&nbsp;&amp; painting, 32&nbsp;x&nbsp;24&quot;</small></p>\n\n<p>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</p>\n\n<p><em>The conversation between these two amazing artists and visiting curator Catherine Morris&nbsp;will take place Friday, February 7th, at 6:30pm&nbsp;in the Auditorium 150 at MCAD. For more info and to reserve tickets for this free event, visit their&nbsp;<a href="https://mcad.edu/event/mcknight-discussion-series-mcad" target="_blank">event page</a>.&nbsp;</em></p>\n\n<p><em>To view more of the artists&#39; work, visit their websites:&nbsp;<a href="http://jovanspeller.com" target="_blank">Jovan Speller</a>&nbsp;and&nbsp;<a href="https://www.hendalmansour.com" target="_blank">Hend Al-Mansour</a>.&nbsp;All images&nbsp;courtesy of the artists unless otherwise noted.</em></p>\n',
    created_date: '2020-01-27T23:20:32Z',
    is_published: true,
    modified_date: '2020-01-30T21:52:10Z',
    permalink: '/written/2020/01/jovan-c-speller-hend-al-mansour/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2020-01-28T21:56:28Z',
      modified_date: '2020-01-28T21:56:28Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjE1MzgwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjE1MzgwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MzgwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MzgwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MzgwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MzgwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjE1MzgwMDAx',
    published_date: '2020-01-27T23:24:48Z',
    resource_id: 'QmxvZ1Bvc3QeHzU2NDI0Mjg4NTM3ODA0ODA',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU2NDI0Mjg4NTM3ODA0ODA',
    slug: 'jovan-c-speller-hend-al-mansour',
    summary:
      "Ahead of their upcoming Discussion Series, two of the McKnight Foundation's 2018 Artist Fellows talk to us individually about their practices.",
    title: 'Creation Myths: Profiles of Jovan C. Speller and Hend Al-Mansour',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Sheila Regan',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Sheila',
      lastname: 'Regan',
      resource_id: 'VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
      resource_url: '/api/users/VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
      website: 'https://hyperallergic.com/author/sheila-regan/',
    },
    author_resource_id: 'VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>The Minneapolis Arts Commission is looking in 2020 to become more visible and more accessible for artists and residents across the city. With new goals around engagement with artists and arts organizations, making connections with City Council members, and increasing education about what the Commission is and does, the government body you may have never heard of is taking small steps to become more of an understood player in the city&rsquo;s public art system.&nbsp;</p>\n\n<p>The City of Minneapolis first chartered the MAC back in 1974, with initial funding at the time coming from the National Endowment for the Arts. The group of seventeen commissioners &mdash; five artists, five arts administrators, and seven laypeople &mdash; are appointed by the Mayor and the Minneapolis City Council for up to three consecutive three-year terms. They work closely with the Long Range&nbsp;Planning Division of the Minneapolis Department of Community Planning &amp; Economic Development (CPED) and vote on a range of different arts issues &mdash; including public art projects as well as art policies.&nbsp;</p>\n\n<p>That being said, the Commission doesn&rsquo;t have veto power. &ldquo;We shepherd the process through,&rdquo; says commissioner Robyne Robinson, who has served on the Commission for about a year. &ldquo;From my experience, we get information on a project and we discuss it, and we decide whether it should be shepherded through, but it really is an advisory role.&rdquo;&nbsp;</p>\n\n<p>Right now, Robinson says, the board is trying to bring in new members and help the public understand what the role of the MAC is. &ldquo;We really need to brand our identity,&rdquo; she says.&nbsp;</p>\n\n<p>The MAC is looking toward ways it can be more inclusive and equitable. Robinson, a jewelry designer and former news anchor, caught the public art bug while working at the Minneapolis St. Paul International Airport as their Art Director, where she had a chance to look at the bigger picture of art in a community. Now with her consulting firm, five X five art consultants, she is interested in creating emotional equity in a community around art. &ldquo;We all talk about the things that are most central to our lives, and identify them as ours &mdash; &lsquo;Our church, our grocery store, our school. That&rsquo;s my library. That&rsquo;s my department store,&rsquo;&rdquo; she says. &ldquo;It&rsquo;s kind of how we define who we are. Any public art should have that emotional equity invested in it.&rdquo;&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTUwMDAx/full.jpg" /><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MzMwMDAx/full.jpg" /><small>Public art installation at Bde Maka Ska&nbsp;to honor Mahpiya Wicasta (&quot;Cloud Man&quot;)&nbsp;and celebrate the history of Heyata Otunwe, a village located on Bde Maka Ska from 1829-1839. Artwork by&nbsp;Angela Two Stars, Sandy Spieler, and&nbsp;Mona Smith, in conjunction with landscape architects and a design team comprised of Wicasta&#39;s descendants, Dakota advisors, Minneapolis Parks and Rec, and&nbsp;Minneapolis&rsquo;s Art in Public Places program. According to Public Arts Administrator&nbsp;Mary Altman, the Minnneapolis Arts Commission &quot;was instrumental in getting the City&rsquo;s public art funding ordinance adopted.&quot;</small></p>\n\n<p>Toward that end, the commissioners are going to be venturing out more around the city for their meetings, according to Joan Vorderbruggen, another commissioner. Like Robinson, Vorderbruggen does plenty around public art outside her role with MAC, as the Director of Hennepin Theatre District Engagement for the Hennepin Theatre Trust. In the past, the Commission has mostly held their meetings in the Crown Roller Mill building, where CPED has their offices. &ldquo;In 2020 our plan is to host our meetings at different arts organizations and try to get to every ward,&rdquo; she says. Just last month MAC held a public meeting at Squirrel Haus Arts, a local arts venue in the Howe/Longfellow area.</p>\n\n<p>Meanwhile, Vorderbruggen says, the commission wants to deepen its relationships with different members of the City Council. &ldquo;We are getting in front of each of the City Council members and finding out their agendas and what type of budget lines they are looking at,&rdquo; she says.&nbsp;</p>\n\n<p>Some work has already been done in this area, Vorderbruggen says. For example, the state&rsquo;s Percent for the Arts program was led by the Commission. &ldquo;We are seeing the benefit of that when there are investments in development by the city,&rdquo; Vorderbruggen says. &ldquo;A certain percentage goes toward public art.&rdquo; For example, the new city administrative building in downtown Minneapolis will have art on every floor of the building, much of which will be by local artists like Witt Siasoco, Marlena Myles,&nbsp;Angela Two Stars, and Christopher Harrison. &ldquo;That is a really big achievement,&rdquo; Vorderbruggen says. &ldquo;That&rsquo;s definitely supported by the Arts Commission.&rdquo;&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMjEwMDAy/full.jpg" /><small>Mock-ups of mural designs for one of several conference rooms in the new Public Service Building, at left by Marlena Myles, at right by Witt Siasoco.</small></p>\n\n<p>Still, both Vorderbruggen and Robinson say there are limits of what MAC can and can&rsquo;t do. &ldquo;You get started and you are eager to make change, and you realize things take time,&rdquo; Vorderbruggen says. &ldquo;I feel like right now, I&rsquo;m happy with where we are at. We are going to meet at different arts organizations throughout the city so we can have more interaction with small, medium, and large arts organizations. It&rsquo;s a good time right now. It&rsquo;s not being super ambitious. It&rsquo;s beginning steps.&rdquo;&nbsp;</p>\n\n<p>Crystal Brinkman, the Executive Director of Kulture Klub Collaborative, who, like Robinson, has been on the Commission for a year, says one of her goals is to advocate for citizens and residents who don&rsquo;t often have a voice in decisions or access to opportunities. Brinkman is on MAC&rsquo;s Access and Engagement team, which, besides organizing the roaming meetings in different parts of the city, is also soliciting feedback from artists who have worked within the city to see what their experience has been like. &ldquo;With the hope that we will have gained insight in how to improve those processes and make them more accessible,&rdquo; she says. &ldquo;We&rsquo;re hoping to make opportunities more open, and the options for those opportunities more accessible,&rdquo; she says.&nbsp;</p>\n\n<p>Brinkman notes that MAC is active on social media (<a href="https://www.facebook.com/MPLArtsComm/">@MPLArtsComm on Facebook</a>), so watch out there&nbsp;for public meetings, new opportunities, and news on what the Commission is up to. They meet every third Wednesday of every month at 5:30pm, but the location of their February 19th meeting is not yet set.</p>\n\n<p>You can also read more about MAC, including profiles of all seventeen current commissioners,&nbsp;at <a href="http://www.minneapolismn.gov/dca/mac/index.htm?fbclid=IwAR383e-WeISBXcqExTMV8MALuSfRMqZuI8B56ntmO0kw7uc7YUKbYRIHJ4Q">their city website</a>.</p>\n\n<p><em>Banner image: One of several recently approved utility box wrap designs, this one by local artist&nbsp;<a href="http://www.innerswirl.com" target="_blank">Kao Lee Thao</a>.</em></p>\n',
    created_date: '2020-01-20T21:21:13Z',
    is_published: true,
    modified_date: '2020-02-11T23:18:23Z',
    permalink: '/written/2020/01/the-minneapolis-arts-commission-steps-out-of-the-shadows/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2020-01-28T09:30:44Z',
      modified_date: '2020-01-28T09:30:44Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjUxMTYwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjUxMTYwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTYwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTYwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTYwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTYwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjUxMTYwMDAx',
    published_date: '2020-01-20T21:25:07Z',
    resource_id: 'QmxvZ1Bvc3QeHzU3MzYyMTUzMzY3MTQyNDA',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU3MzYyMTUzMzY3MTQyNDA',
    slug: 'the-minneapolis-arts-commission-steps-out-of-the-shadows',
    summary:
      'As the MAC plans more public meetings, we wondered... just what is this 45-year-old board and what do they do?',
    title: 'The Minneapolis Arts Commission steps out of the shadows',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Russ White',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Russ',
      lastname: 'White',
      resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      resource_url: '/api/users/VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      website: 'http://www.russ-white.com/',
    },
    author_resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>The following is the first in a series of articles profiling the eight distinguished artists chosen as 2018&nbsp;McKnight Fellows, a grant program for&nbsp;mid-career artists that&nbsp;is&nbsp;administered by the Minneapolis College of Art and Design. The two artists here will take part in the&nbsp;<a href="https://www.mplsart.com/events/mcknight-discussion-series-at-mia-emily-liebert-jim-denomie-chris-larson">McKnight&nbsp;Discussion Series</a>&nbsp;on <strong>January 23rd</strong>, talking publicly about their work&nbsp;with Emily Liebert, Curator of Contemporary Art at the The Cleveland Museum of Art. Russ White visited each of their studios&nbsp;beforehand to get a preview of their work.</p>\n\n<h1>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</h1>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MjcwMDAx/full.jpg" /><small>Photo by Rik Sferra.</small></p>\n\n<p>Do you remember the part in <em>The Wizard of Oz</em> when they&rsquo;re walking past an orchard&nbsp;and Dorothy picks an apple, and the tree comes to life, mad as hell? It accosts her for her arrogance and angrily throws its fruit at our heroes, chasing them off (apples in hand). They say that if you squint just right,&nbsp;off in the distance&nbsp;between the&nbsp;trees&nbsp;you&nbsp;can see a line of&nbsp;oil derricks and nuclear warheads. Closer to the road,&nbsp;Kim Jong Un is munching on popcorn while a&nbsp;policeman holds Eric Garner in a chokehold,&nbsp;and the Tin Man&rsquo;s water faucet&nbsp;dick is hanging out the whole time. Okay, you got me &mdash; this isn&rsquo;t part of film history. It&rsquo;s part of American history, as viewed through the lens of Jim Denomie&rsquo;s surreal, satirical paintings.&nbsp;</p>\n\n<p>The artist lives and works in Shafer, about an hour north of Minneapolis, and the drive up took me through a landscape sedated by a blanket of snow, everything white and gray and quiet. It was almost a shock to the system to suddenly be standing in front of a seven by ten foot canvas awash in purples, yellows, pinks, and greens &mdash; a wall-sized work in progress in Denomie&rsquo;s garage studio. Four riders on horses stare back at me: nude women half-rendered in splotches of yellow, pink, purple, and orange; one man front and center with a 10-point&nbsp;buck&nbsp;skull for a head &mdash; or is it a mask? The horses bare their teeth through crude donuts of paint, their legs dissolving into the color blocked shapes of an eerie, abstracted landscape. A river runs by, still yellow from Denomie&rsquo;s ochre underpainting.&nbsp;</p>\n\n<p>We lean against his car looking at the piece, talking about painting, process, and inspiration, although he doesn&rsquo;t seem eager to spell out any symbolism here. Unlike his overtly political paintings, this on-going series of riders on horseback&nbsp;is more open-ended, more spiritual, tangentially related to the artist&#39;s Ojibwe heritage though not directly inspired by it. He&rsquo;s also not sure how much longer this piece will take to finish. Each painting&rsquo;s different, he says.&nbsp;&quot;It&#39;s like a baseball game. I can&rsquo;t predict how long it&rsquo;s going to take.&rdquo;</p>\n\n<p>Denomie is a painter&rsquo;s painter. He leads me upstairs to his second floor studio to show me a few of the ten other canvases he has underway right now. Finished pieces&nbsp;litter&nbsp;the room, hanging on the walls and&nbsp;leaning up against tables as he prepares inventory for several shows. There&rsquo;s also a small collection of etchings sitting out, but he finds that the technical thinking&nbsp;required for printmaking interferes with his workflow when he returns to the easel. He still keeps a sketchbook going,&nbsp;though, full of&nbsp;quickly scrawled line drawings in ballpoint pen &mdash; political cartoons, records of his&nbsp;dreams, and endless ideas for paintings.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MjYwMDAx/full.jpg" /></p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTEwMDAx/full.jpg" /><small>Top:&nbsp;<em>Oz, the&nbsp;Emergence</em>;&nbsp;oil on canvas;&nbsp;98 x 140&quot;;&nbsp;2017\u200b. Bottom: A page from the artist&#39;s sketchbook, ballpoint pen on paper.</small></p>\n\n<p>Now in his sixties, Denomie is well-known and well-loved in the arts community. He&rsquo;s experienced a lot of success in recent years, receiving grants, placing work, and mounting&nbsp;shows near and far, even as he maintains his day job as a drywall finisher. Much has been written about the artist&nbsp;as well, especially after winning the McKnight Foundation&rsquo;s Distinguished Artist Award this past fall.&nbsp;But not all of the attention has been kind.&nbsp;</p>\n\n<p>His 2018 show of &ldquo;Standing Rock Paintings&rdquo; at Bockley Gallery prompted a small firestorm of criticism after a Republican legislator objected to grant funding going to&nbsp;a painting in which&nbsp;Donald Trump sexually assaults&nbsp;Lady Justice. It&rsquo;s&nbsp;just one detail among dozens on a massive canvas depicting the Dakota Access Pipeline protests. The cops and the water protectors are divided by a river of fluorescent orange and pink. There are two-headed dogs, police trucks painted with swastikas, and a Klansman fellating an officer in riot gear. Denomie pulls no punches.</p>\n\n<p>The artist and the gallery started receiving threats and insults from self-proclaimed art experts in MAGA hats. Most disturbingly, someone even shot off a gun&nbsp;late one evening outside Denomie&rsquo;s home. &ldquo;Gunshots out here are not uncommon,&rdquo; he says, &ldquo;but not at 10:30 at night.&rdquo; When I ask him if the threats and the controversy compel him to tone it down at all, he gives a flat, emphatic &ldquo;No.&rdquo; The irony, of course,&nbsp;is that these violent philistines&nbsp;just prove&nbsp;his point.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MzAwMDAx/full.jpg" /><small><em>UnTruthful</em>, oil on canvas, 2014.</small></p>\n\n<p>&ldquo;American culture is nothing compared to European culture or Native culture,&rdquo; he says. &ldquo;I mean, American culture is 500 years old, which is very young, and what they celebrate is money, TV, guns... that kind of thing.&rdquo; His satirical pieces flesh out this short, violent history with a blend of wicked humor, art history, pop culture, and sex jokes. The results are often laugh out loud funny, like a Far Side cartoon painted by Hieronymus Bosch. It&rsquo;s the twisted true story of a continent invaded, and&nbsp;for Denomie, a very personal story as well.</p>\n\n<p>&ldquo;My existence is in response to government policies over the last hundred years: the Assimilation Campaign, the Relocation Act, the Dawes Act, breaking up the reservations. All of this stuff feeds into who I am today. My grandparents went to boarding schools&hellip; [and] my parents had less to pass on to me and my brothers.&nbsp;Moving into the Cities, we were involved with the Native community in town but also with the whites and blacks and Mexicans.&nbsp;My worldview is unique to me, and I paint what I know and understand.&rdquo;&nbsp;</p>\n\n<p>One particularly succinct bit of social satire is 2014&rsquo;s <em>UnTruthful</em>. The Lone Ranger and Tonto sit on their horses amid a fevered landscape of Fauvist Expressionism. Tonto proclaims &ldquo;You lied to me!&rdquo; The masked cowboy, painted in swift, thick strokes,&nbsp;replies simply, &ldquo;Get used to it.&rdquo;&nbsp;</p>\n\n<p>This style of portraiture developed back in 2005, when he&nbsp;created a painting every single day of the year, experiencing a&nbsp;stylistic breakthrough&nbsp;when he sped up the process&nbsp;one&nbsp;night after a long, exhausting day. He ended&nbsp;that&nbsp;year&nbsp;with 430 finished pieces, and now his studio is still&nbsp;filled with faces, rectangles of blue and purple on every wall, homemade masks and painted figurines on every table. When I ask who these people, these characters are, again he&rsquo;s noncommittal. &ldquo;Just creative portraits,&rdquo; he says with a shrug. &ldquo;They weren&rsquo;t anybody, but they turned into something. For me the subject matter was the color and the brushstroke.&rdquo;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTEwMDAy/full.jpg" /><small><em>Bayou Portraits</em>, oil on paper, 2017</small></p>\n\n<p>Some are funny, some charming, some ghoulish, some ghastly. Denomie&nbsp;paints with love but&nbsp;doesn&rsquo;t shy away from depicting ugliness, something that&nbsp;is sadly&nbsp;in no short supply. The news that morning had been of the drone strike on Qassem&nbsp;Soleimani and the devastating wildfires in Australia. We start talking politics, and&nbsp;I ask him how he feels about the future. &quot;Not good.&quot;</p>\n\n<p>Maybe that&rsquo;s why the humor helps. A spoonful of sugar for a terminal disease. I notice a recurring motif in one of his paintings: fluffy clouds painted to look like miniature atomic explosions &mdash; literally mushroom clouds. I ask if this is a deliberate commentary, but he says it&rsquo;s just a shape he noticed one day driving to work.&nbsp;&ldquo;I love cloudgazing,&quot; he adds. This is an artist who is paying attention, noticing the details in the world around him: in the news, in his dreams, in&nbsp;nature, and perhaps most importantly in his own practice. Inspiration can be as simple as a&nbsp;ballpoint pen running out of ink mid-drawing, suddenly revealing a new way&nbsp;to make&nbsp;marks.</p>\n\n<p>On my way out, driving back up the winding path away from his house, I catch a glimpse of something I had completely missed on the way in: slight rolling hills in the distance exactly like those in so many of his paintings. They have shown up in every color imaginable, in foregrounds and backgrounds,&nbsp;sometimes turned into nipple-topped bosoms, but the shapes are unmistakable.&nbsp;</p>\n\n<p>It reminds me of something he said earlier about politics, but it applies to so much more.&nbsp;&ldquo;When you&rsquo;re painting honestly,&nbsp;everything around you will come out in your work.&rdquo;&nbsp;</p>\n\n<h1>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</h1>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MzMwMDAx/full.jpg" /><small>Photo by Rik Sferra.</small></p>\n\n<p>Visiting an artist&rsquo;s studio can be like wading into another person&rsquo;s obsessions. To stand in Chris Larson&rsquo;s warehouse-sized space, you might think his passion is, quite simply,&nbsp;stuff. There&rsquo;s just so much of it.</p>\n\n<p>Larson works out of an&nbsp;airplane hangar of a studio right off I-94 in St. Paul, once used as storage for the mattress store one floor beneath. Now the studio acts primarily as a staging ground for Larson&rsquo;s large scale projects, as well as &mdash; again &mdash; storage space, this time for the artist&rsquo;s friends. And their stuff. Boxes and piles and pallets of stuff.&nbsp;There are the occasional remnants of Larson&rsquo;s older sculptures and installations, but most of it&nbsp;is somebody else&rsquo;s.&nbsp;</p>\n\n<p>Some of it&nbsp;&mdash;&nbsp;like a stack of giant canvases from a local painter, or the baby grand piano near the entrance&nbsp;&mdash;&nbsp;comes from friends in the midst of transitions to new spaces. A large chunk of it is the property of the late Grant Hart, a close friend and collaborator of Larson&rsquo;s as well as the drummer for local punk legends H&uuml;sker D&uuml;, who stored all of his possessions here after a house fire in 2011. (This&nbsp;pile later formed the backdrop for an&nbsp;installation at the Walker Art Center.)&nbsp;Next to that is a tall&nbsp;stack of sheetrock, leftovers from when Larson sectioned off part of his studio as a soundproof practice space for Awesome Rocker Girls, a kids&#39;&nbsp;music program&nbsp;he created with&nbsp;Lori Barbero&nbsp;from&nbsp;Babes in Toyland.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MTkwMDAx/full.jpg" /><small>Still&nbsp;from&nbsp;<em>Land Speed Record</em>, 2016.&nbsp;Total running time 26:35. Video of Grant Hart&#39;s belongings, stored in Chris Larson&#39;s studio after a house fire. The video was paired with a recording of Hart&#39;s drum track from H&uuml;sker D&uuml;&#39;s&nbsp;1981 live album of the same name.</small></p>\n\n<p>The list goes on, as do the piles, neatly hugging the walls like bleachers at a gym. But the real show is center court. There you&rsquo;ll find &mdash; surprise &mdash; more stuff. This isn&rsquo;t storage though; this is an active laboratory, where the artist is building, arranging, and playing with the materials that make up his current project: an open-ended cultural investigation of a garment factory in Smithville, Tennessee.&nbsp;</p>\n\n<p>&ldquo;It&rsquo;s probably the most challenging project I&rsquo;ve ever worked on,&rdquo; he says, soft-spoken and thoughtful throughout our entire visit. &ldquo;There are so many arms and legs to this project that I think it&rsquo;s going to take me a long time to unwrap this one.&rdquo;</p>\n\n<p>Funded by fellowships from both the McKnight and Guggenheim Foundations and research funding from the University of Minnesota, Larson has spent the past year and a half traveling to and from Smithville and spending time in the abandoned basement factory that used to house 300 seamstresses. They made clothes for companies like Calvin Klein, Burberry, Converse, and &mdash; in the end &mdash; Ralph Lauren, who took over operations before abruptly moving production overseas in the mid-&lsquo;90s. The factory all but closed.&nbsp;</p>\n\n<p>The facility eventually found new life making uniforms for the US military, a job that legally cannot be outsourced. But the damage had been done to the community, and the basement workshop remained shuttered, collecting decades of dust while garment production restarted upstairs.</p>\n\n<p>During a sabbatical from his teaching position&nbsp;at the U of M, Larson&nbsp;immersed himself in the Smithville community, getting to know the workers, spending time in the factory, even subscribing to the local newspaper. &ldquo;You can tell it&rsquo;s a challenged town,&rdquo; he says. And he&rsquo;s brought no small amount of it back to St. Paul, all from that one basement.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MTkwMDAx/full.jpg" /><small>At left: A collection of sewing machine tabletops, salvaged from Smithville.&nbsp;Right: hand-written shelving&nbsp;labels for thread colors.&nbsp;Photos by the author.</small></p>\n\n<p>Scattered in controlled bursts across the studio floor, there is the stuff: thousands of spools of thread, a small army of industrial sewing machines, military uniforms rejected for minor defects, beige metal speakers, a pile of brooms, handwritten ledgers&hellip; again, the list goes on. &nbsp;</p>\n\n<p>&ldquo;The residue of labor that&rsquo;s on these things is just incredible,&rdquo; he says, talking about a collection of canvas-wrapped table extensions hanging on the wall. It&#39;s an amazing collection of items big and small, many of them&nbsp;weathered by time and use,&nbsp;still smelling of lint and machine oil.&nbsp;He even schlepped back the bathroom doors, each one&nbsp;showing wear and tear&nbsp;from decades of use.</p>\n\n<p>It&rsquo;s fascinating to visit an artist while they&rsquo;re still chewing on an idea. Larson is smack in the middle of this project, still playing with materials, still trying to get a handle on where his intervention as an artist can have meaning and impact. For Larson, this isn&#39;t mere&nbsp;&quot;stuff.&quot; These objects and archives are so much more, not only in their history but in their future.&nbsp;&quot;Everything in my studio,&quot; he says,&nbsp;&quot;has the potential to become art-making materials.&quot; He&#39;s brought these items&nbsp;back mindfully, not at random. And although it&rsquo;s clear that he is&nbsp;still in the experimental phase,&nbsp;his intention is straightforward: &ldquo;I want to celebrate the work they did down in that space.&rdquo;&nbsp;</p>\n\n<p>One such experiment is a concentrated burst of red thread wrapped from one sewing machine to another, fanning out taut like deconstructed muscle fibers. It&rsquo;s six miles of thread, he tells me, meticulously and meditatively strung back and forth by hand. He&rsquo;s done the same to machines in the Smithville basement, creating the beginnings of an on-site installation in addition to his studio work here.</p>\n\n<p>&ldquo;Now, as you walk down to the old factory space, it&rsquo;s like an explosion of color. We brought 60 of the current garment&nbsp;employees down there, and they were all like, &lsquo;This is amazing. If this is art, I&rsquo;m all in.&rsquo;&rdquo;&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM3MjEwMDAx/full.jpg" /><small><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MjEwMDAx/full.jpg" />Top:&nbsp;Larson&#39;s installation in the factory basement in Smithville, TN.&nbsp;Below: A&nbsp;view of the artist&#39;s St. Paul&nbsp;studio, with various ongoing experiments in material and form. Second photo&nbsp;by the author.</small></p>\n\n<p>There are several other experiments ongoing with the spools, the clothes, the polo shirt patterns, and more.&nbsp;&ldquo;I think 25% of what I do in the studio makes it out the door,&rdquo; he says, talking about what ends up officially becoming Art. &ldquo;Most does not.&rdquo;&nbsp;</p>\n\n<p>In the center of it all sits a life-size&nbsp;recreation of the factory&rsquo;s basement hallways, proportionally correct but twisted like a Rubik&rsquo;s Cube. It&rsquo;s an Escher-esque jungle gym of passages turned on their sides and stairways leading to nowhere, and the whole thing may itself be a dead end. &ldquo;I&rsquo;ve switched gears,&rdquo; he says, pointing to other ongoing experiments, &ldquo;but for now I&rsquo;m going to keep it. It&rsquo;s still important to me.&rdquo;</p>\n\n<p>Whether this strange structure &ldquo;makes it out the door&rdquo; or not, it does point to another of Larson&rsquo;s primary interests: architecture. Space and place, you might say. It&rsquo;s been evident in almost all of his previous installation work, from creating a full-scale model of a local modernist home (and then burning it down) to building a New Orleans-style shotgun shack (and then coating it in ice). He has floated a house down a river, placed a replica of&nbsp;the Lorraine Motel sign alone in a field, and turned entire rooms upside down and inside out. In one video performance, Larson uses a crude machine &mdash; a blade attached to a scrap of wood screwed to the ground and rotated like a clockhand &mdash; to cut a perfect circular porthole through the floor. Then he climbs down into the space below, by appearances another art studio, and continues the repetitive labor.&nbsp;</p>\n\n<p><small><em><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MjgwMDAy/full.jpg" />Studio Unhinged</em>, 2015. Installation at the Katonah Museum of Art.</small></p>\n\n<p>&ldquo;There is meaning in the labor and the work that we do,&rdquo; he quietly asserts, &ldquo;regardless of what it is.&rdquo; This is what connects his practice to the Smithville factory workers. His obsession is not with the stuff at all, it&#39;s with&nbsp;the people. It&rsquo;s the friends that need a favor. It&rsquo;s the kids that need a practice space. It&rsquo;s the seamstress who marks her notebook methodically, endlessly, for every pair of pants she produces. You can&#39;t see the people in Larson&#39;s studio&nbsp;&mdash; there are&nbsp;no portraits or photos or sculptures of them among the sea of objects.&nbsp;But they are here, in Larson&rsquo;s work and in their own. They&rsquo;re&nbsp;invisible&nbsp;but not taken for granted, the way&nbsp;they are in, say,&nbsp;a department store.&nbsp;Or perhaps&nbsp;in&nbsp;the&nbsp;shirt&nbsp;on your back&nbsp;right now. Where was that&nbsp;constructed, I wonder,&nbsp;and by whom?</p>\n\n<p>His final thought, at the end of our visit, is maybe the most concise artist statement I&rsquo;ve ever heard: &ldquo;What we do on this planet is important.&rdquo;</p>\n\n<p>It&#39;s a brutal bit of optimism, and&nbsp;I nod knowingly in thought. After a&nbsp;pause, I break into laughter&nbsp;and decide to&nbsp;meet him halfway: &quot;I sure fucking hope so.&quot;</p>\n\n<h1>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</h1>\n\n<div style="box-sizing: inherit; caret-color: rgba(0, 0, 0, 0.870588); color: rgba(0, 0, 0, 0.870588); font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 16px;"><em>The conversation between these two amazing artists and visiting curator Emily&nbsp;Liebert&nbsp;will take place Thursday, January 23rd, at 6:30pm&nbsp;in the Pillsbury Auditorium at Mia. For more info and to reserve tickets for this free event, visit their&nbsp;<a href="https://mcad.edu/event/mcknight-discussion-series-mia-7" target="_blank">event page</a>.&nbsp;</em></div>\n\n<div style="box-sizing: inherit; caret-color: rgba(0, 0, 0, 0.870588); color: rgba(0, 0, 0, 0.870588); font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 16px;">&nbsp;</div>\n\n<div style="box-sizing: inherit; caret-color: rgba(0, 0, 0, 0.870588); color: rgba(0, 0, 0, 0.870588); font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 16px;"><em>To view more of the artists&#39; work, visit their websites: <a href="http://chrislarsonstudio.com" target="_blank">Chris Larson</a>&nbsp;and <a href="http://www.bockleygallery.com/artist_denomie/index.html" target="_blank">Bockley Gallery</a>.&nbsp;All images&nbsp;courtesy of the artists unless otherwise noted.</em></div>\n',
    created_date: '2020-01-10T06:12:35Z',
    is_published: true,
    modified_date: '2020-01-16T20:15:50Z',
    permalink: '/written/2020/01/chris-larson-jim-denomie/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2020-01-13T05:31:04Z',
      modified_date: '2020-01-13T05:31:04Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjE5MzQwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjE5MzQwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MzQwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MzQwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MzQwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MzQwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjE5MzQwMDAx',
    published_date: '2020-01-10T07:38:52Z',
    resource_id: 'QmxvZ1Bvc3QeHzU3MDM2MDc5NDUwMDMwMDg',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU3MDM2MDc5NDUwMDMwMDg',
    slug: 'chris-larson-jim-denomie',
    summary:
      "Ahead of their upcoming Discussion Series, two of the McKnight Foundation's 2018 Artist Fellows talk to us individually about their practices.",
    title: 'What we do on this planet (and other absurdities): Profiles of Jim Denomie & Chris Larson',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Liz Mauban',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Liz',
      lastname: 'Mauban',
      resource_id: 'VXNlch4fNTY5ODQ1NDU2MzA2MTc2MA',
      resource_url: '/api/users/VXNlch4fNTY5ODQ1NDU2MzA2MTc2MA',
      website: 'http://www.urbanorchidblog.com/',
    },
    author_resource_id: 'VXNlch4fNTY5ODQ1NDU2MzA2MTc2MA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>&nbsp;</p>\n\n<p>Walking past a window and seeing office furnishings but also clothing racks and a bed prompts some questions.&nbsp;Is this some kind of ad or display?&nbsp;Staging for a photoshoot?&nbsp;Is that thing for sale?&nbsp;Am I even supposed to be seeing this?&nbsp;The kinds of questions that a partnership between an artist and an advertising agency would hope to spark.&nbsp;On December 13, 2019, Peterson Milla Hooks Advertising (PMH) hosted &ldquo;an experimental retail experience&rdquo; with artist Joshua McGarvey in their Loring Park office.&nbsp;</p>\n\n<p>For that one night, a&nbsp;corner office of the ad&nbsp;agency transformed into a retail store,&nbsp;art installation, and&nbsp;performance space. McGarvey works with repurposed clothing and digitally printed&nbsp;&mdash;&nbsp;and super creepy&nbsp;&mdash; masks of his own face, often orchestrating performances with multiple actors wearing his masks.&nbsp;&ldquo;My work has been dealing with the fluctuations between public and private inherent in the artist studio,&quot; he says,&nbsp;&quot;so connecting that with an advertising agency seemed like an incredible opportunity to take my practice out of the studio and gallery.&quot; &nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMxMzMwMDAx/full.jpg" /><small>Still from Joshua McGarvey&#39;s&nbsp;<em>The Program</em>, video, duration&nbsp;51:42, showing the artist&#39;s masks of his own face.</small></p>\n\n<p>Leaving parts of the office as-is was an intentional way to play with being out of the traditional gallery space.&nbsp;Advertisements from PMH past stuck to the walls, antacid tablets and paperwork remained on the desk, reference books and staff photos filled the bookcase.&nbsp;There was a lot to digest visually and a heightened awareness of consumerism &mdash; the Christmas tree, the ads, the bed with colorful covers, the clothing made up of cut-up parts of discarded clothing. &nbsp;</p>\n\n<p>After perusing the racks during the pre-sale, guests were ushered outside for the performance.&nbsp;McGarvey took full advantage of having two window walls &mdash; seating was arranged in front of either window for the opportunity to view the performance from different angles.&nbsp;People don&rsquo;t often think of performance art during a shopping experience, but McGarvey saw an opportunity.&nbsp;&ldquo;I think the performance is a way to continue blurring the line between art installation and pop-up retail shops. I think it also acts as a commercial for the clothing by showing the pieces in-action on bodies.&quot;</p>\n\n<p>While McGarvey knew which garment he would wear during the performance, he says, &ldquo;I prompted my other performer, Naomi Crocker, to start the performance by trying on different clothes.&rdquo;&nbsp;The contrast between public and private was a theme through the event.&nbsp;At first, it seemed uncertain if she was shopping the racks at a retail store or shopping her closet, but as she started to gyrate and take selfies on the bed, it became clear she was in a private space.&nbsp; &nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MzAwMDAx/full.jpg" /><small>The performance underway at PMH.</small></p>\n\n<p>McGarvey also set out to reclaim elements of his adolescence.&nbsp;During the performance, the office table became a platform for jumping rope.&nbsp;He explains, &ldquo;jump roping is an unexpected, fun, and kind of random, yet very specific to me, gesture.&rdquo; He was bullied in elementary school for being on a jump rope team and incorporates it into his work as a way to take back ownership of&nbsp;his past.</p>\n\n<p>In fact, his exploration of humility is what led to expanding his work into clothing.&nbsp;His first solo show, 2015&#39;s&nbsp;<em>Dressing the Future in My Humility,</em> included 107 replicas of the sweatpants he had urinated in on stage during a kindergarten play rehearsal.&nbsp;&ldquo;I gave the pants away as tokens of my humility to anyone who walked into the gallery.&rdquo; &nbsp;</p>\n\n<p>He started to thrift for and accept donations of sweatpants to sew patches, fringe, trinkets, and other objects onto, as a way to elevate the shabby wardrobe staple and reclaim others&rsquo; humility.&nbsp;The clothing line, <em>Uselding Fridays</em>, made of mash-up style t-shirts and other garments came after that, in making costumes for his video performances.&nbsp;</p>\n\n<p>His re-working of existing clothing can be as straightforward as splicing two different plaid shirts together, or as neat as neon color blocking, as subtle as making a black t-shirt from several patches of other black t-shirts, or as chaotic as splicing several recognizable brands together into one item.&nbsp;Reconstructed garments might be what he&rsquo;s known for, but an entire second&nbsp;rack of clothing consisted of items made from scratch, some using custom fabrics printed with his original artwork. &nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MzEwMDAx/full.jpg" /><small>Two of the garments for sale during the Experimental Retail Experience. Zima&nbsp;added&nbsp;for scale and ambiance.</small></p>\n\n<p>Each purchase&nbsp;also came with&nbsp;bonus art&nbsp;&mdash;&nbsp;McGarvey&rsquo;s price tags were made of repurposed baseball cards, from his childhood collection, complete with doodles and other additions.&nbsp;&ldquo;The baseball cards are fun to make!&rdquo; he says.&nbsp;&ldquo;I like the appropriation and the upcycle of an otherwise useless, discarded, or deemed worthless item.&rdquo;&nbsp;</p>\n\n<p>Every garment McGarvey puts together, whether it is simple or more intricate, is assembled with intention.&nbsp;The uneven hems aren&rsquo;t a mark of sloppy work, but elevate the simple t-shirt and draw the eye to something unexpected.&nbsp;Mashing different brands together creates something strangely attractive and wearable, even when the original garments had no such appeal on their own. &nbsp;</p>\n\n<p>The <em>Uselding Fridays</em> brand seems to make fun of fashion and logos, while still being of a distinct brand&nbsp;and being open to collaboration with an advertising agency.&nbsp;The experimental retail experience was a welcome contrast to the traditional pop-up shop. It was dynamic and interactive&nbsp;&mdash;&nbsp;not just a shop, not just art installation, and not just a&nbsp;performance. &nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUzMjYwMDAx/full.jpg" /></p>\n\n<p><em>To see more of Joshua McGarvey&#39;s work, visit <a href="https://www.joshuamcgarvey.com" target="_blank">his website</a> or follow <a href="https://www.instagram.com/joshuadmcgarvey/" target="_blank">his Instagram</a>. Photos by the author unless otherwise noted.</em></p>\n',
    created_date: '2020-01-06T21:16:01Z',
    is_published: true,
    modified_date: '2020-01-07T17:28:08Z',
    permalink: '/written/2020/01/experimental-retail-review-joshua-mcgarvey-s-uselding-fridays-at-pmh/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2020-01-07T16:06:56Z',
      modified_date: '2020-01-07T16:06:56Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjM5MTgwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjM5MTgwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MTgwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MTgwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MTgwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MTgwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjM5MTgwMDAx',
    published_date: '2020-01-07T16:43:22Z',
    resource_id: 'QmxvZ1Bvc3QeHzU2OTQ4ODk3OTg5MjYzMzY',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU2OTQ4ODk3OTg5MjYzMzY',
    slug: 'experimental-retail-review-joshua-mcgarvey-s-uselding-fridays-at-pmh',
    summary: 'The artist hosted a night of shopping and performance that was weird, wild, nostalgic, and new.',
    title: "Experimental Retail Review: Joshua McGarvey's Uselding Fridays at PMH",
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Meg Lionel Murphy',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Meg',
      lastname: 'Lionel Murphy',
      resource_id: 'VXNlch4fNTcyODY1ODIwNzUzOTIwMA',
      resource_url: '/api/users/VXNlch4fNTcyODY1ODIwNzUzOTIwMA',
      website: 'https://meglionelmurphy.com',
    },
    author_resource_id: 'VXNlch4fNTcyODY1ODIwNzUzOTIwMA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMTAwMDAx/full.jpg" /></p>\n\n<p>Last summer, a woman got in touch with me and offered to show my paintings at a new fair during Miami Art Week. I&rsquo;ve only been showing for a few years, so I was thrilled for the opportunity to hang my work anywhere near Miami&rsquo;s infamous Art Basel.&nbsp;</p>\n\n<p>The fair organizer&nbsp;&mdash;&nbsp;let&#39;s call her Brenda&nbsp;&mdash;&nbsp;charmed me from the moment we first spoke on the phone. Like me, she lives&nbsp;and works&nbsp;in a rural city. Unlike me, she had an international reach. As her young children chirped in the background, she told me about her connections in Miami, New York, Basel, Los Angeles, Hong Kong, Tokyo, and London.&nbsp;</p>\n\n<p>Brenda&#39;s model felt fresh:&nbsp;rather than invest in a brick and mortar gallery in a city with ridiculous real estate costs, she rented temporary spaces around the world&nbsp;during major art events, turning&nbsp;exclusive real estate into inclusive social clubs that tempered the chaos of overstimulating, gargantuan fairs. She had only done a few prototypes here and there, but she was about to grow, and fast.&nbsp;</p>\n\n<p>Her boutique &ldquo;exhibition experiences&rdquo; wouldn&rsquo;t just be glamorous, relaxing, and fun,&nbsp;they would smash open the art world&rsquo;s cis-gender white male establishment&nbsp;and introduce a diverse pool of talent to a serious collector base she had fostered through her decades of experience in the New York art market. On top of that, a portion of her profits would raise money for environmental nonprofits. Although artists were responsible for shipping costs, she would generously only take 15% of sales, rather than the customary 50%. Sounds great, right?</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MjUwMDAx/full.jpg" /></p>\n\n<p>She explained how she booked three sprawling mansions in Miami&#39;s Venetian Islands&nbsp;for Art Basel. She would take down the priceless art already in the mansions&nbsp;and replace it with the work of 70 emerging visual artists from around the world. Her guests wouldn&rsquo;t just buy art, they would relax poolside, do yoga, take cooking classes, and sign up for intimate workshops.&nbsp;</p>\n\n<p>There would be jet&nbsp;skis. Jet&nbsp;skis! Who wouldn&rsquo;t put their faith in art jet&nbsp;skis?</p>\n\n<p>So, with great excitement, I shipped off six paintings to Brenda&#39;s fair.&nbsp;</p>\n\n<p><small><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MjMwMDAx/full.jpg" />Meg Lionel Murphy,&nbsp;<em>Prevail</em>, acrylic on panel.</small></p>\n\n<p>A few days passed, and&nbsp;I got another call from Brenda. She wanted to tell me&nbsp;&mdash;&nbsp;&ldquo;in full transparency&rdquo;&nbsp;&mdash;&nbsp;that her team could not locate my six paintings. Her team was on site, but none of the staff received the work, even though the shipper claimed it was signed for on the property. She told me the work must have been shipped to the wrong address.&nbsp;</p>\n\n<p>She said her team pored over security footage on the property and could prove the artwork was never delivered.&nbsp;I panicked.</p>\n\n<p>The next few days were spent&nbsp;on the phone with the shippers (who were helpful), the police (who were unhelpful), and the fair organizers (who seemed frazzled). I googled the mysterious all caps name that signed for the work. (Could NNEJIA be the last name Mejia?)&nbsp;I google-mapped addresses connected to that name around the mansion. I googled myself to death, everything I could think of, in order to find a few houses nearby the mansion that might have signed for it.&nbsp;</p>\n\n<p>Brenda and her team had gone pretty quiet at this point. But, with the googled information I sent over, they told me they&nbsp;were going&nbsp;door to door trying to find who might have the work. They found nothing.&nbsp;</p>\n\n<p>Brenda told me she was working directly with the shipper&#39;s&nbsp;corporate investigation team. Who knew shippers had investigation teams? I didn&rsquo;t. Sounds very official. Meanwhile,&nbsp;I was working with the local office that would have delivered the package, and they&nbsp;were able to prove what they had been saying all along: they delivered the paintings. On time.&nbsp;To the right mansion.&nbsp;In fact, the delivery driver said he even worked construction on the house&nbsp;when it was built, so the delivery stuck out in his memory. And the company&#39;s records showed that, when the packages were signed for with their system, a GPS signal stamped the location. It showed the paintings were <em>inside</em> the mansion&#39;s front&nbsp;gates.</p>\n\n<p>When I asked if they had ever spoken to Brenda, they said they had been trying to get ahold of her but were never able to. Their records showed she had never gotten in touch with them&nbsp;or with their corporate team. That seemed... odd.</p>\n\n<p>After the shippers offered proof the paintings were in the mansion, the fair organizers suddenly agreed&mdash;Yes! The paintings were in the mansion, but they &mdash; THE FAIR ORGANIZERS &mdash;&nbsp;actually, were not. The truth was, they admitted, they had never been in the mansion... because&nbsp;the previous renters refused to leave. And now&nbsp;these renters&nbsp;would not release the paintings unless they received a $10,000 ransom!&nbsp;</p>\n\n<p>Brenda and her team had not&nbsp;wanted&nbsp;to alarm me, so&nbsp;they lied.&nbsp;I became alarmed.&nbsp;</p>\n\n<p>The police said I needed to be in Miami for them to do anything, so I left early.&nbsp;</p>\n\n<p>Meanwhile Brenda sent an email to the participating artists. The fair was supposed to open the following day. It would still happen, she promised, but not in the mansions &mdash;&nbsp;because of permit issues. She didn&rsquo;t know where it would happen, but promised it would still happen. Don&rsquo;t worry!</p>\n\n<p>She also casually mentioned that there was a ransom for <em>one</em> of her artist&rsquo;s work.&nbsp;I was officially worried.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIxMjYwMDAx/full.jpg" /><small>Meg Lionel Murphy,&nbsp;\u200b<em>This Is War</em>, acrylic on panel.</small></p>\n\n<p>While I telephoned for help from the fetal position, my friends started using hashtags on Instagram to find other artists involved with the show, because one retroactive red flag &mdash; among many &mdash; was that she never listed the names of&nbsp;participating artists in any of her materials.&nbsp;</p>\n\n<p>I begged Brenda several times for the name of the owner of the mansion. I needed all the information possible. She wouldn&rsquo;t. So I threatened legal action (because that&rsquo;s what my friends told me to do) and started working with the police (which meant I was on hold a lot as they figured out what to do with me). Finally Brenda&nbsp;gave me the name of a realtor, who then gave me the name of the homeowner (an unfriendly French man, it turns out).</p>\n\n<p>The realtor let me know that everything Brenda had promised was at one time true. Three mansions! Yoga! Cooking classes! Jet skis! She simply never paid them. In fact, the realtor used his own money for a down payment on the rental fees&nbsp;because he believed so strongly&nbsp;in the mission of the fair. Turns out <em>he</em> was the one who told her that he would not give the art back&nbsp;until she paid him $10,000 for his deposit to the homeowner. When I got him on the phone he was devastated and wanted to talk about how wonderful she seemed, right? She was so great. Did I believe it was for real? Yes I did. It was the first support group of many, as I found more artists washed up&nbsp;in Brenda&rsquo;s incompetent, delusional wake.&nbsp;</p>\n\n<p>She knew the show was off&nbsp;but never told us not to send our work. There were lies upon lies upon lies, including one so outrageous it involved a kidnapping in Brazil. All I know to be true is that three days after the fair was supposed to open, there was no fair. It was just me, my best friend, an unfriendly Frenchman, and a bunch of boxes filled with thousands of dollars worth of art &mdash; all in a driveway of a mediocre mansion in North Miami (far away from the Venetian Islands and the bustle of Miami Beach). Oh, and sprinklers. There weren&rsquo;t jet skis, but there were sprinklers, raining over the art.&nbsp;</p>\n\n<p>&ldquo;Can we wait here until the others get here?&rdquo; I asked the unfriendly Frenchman.&nbsp;The other artists would be joining me soon, to pick up their art and send it back to Toronto, Los Angeles, New York, Philadelphia, and who knows where else.&nbsp;</p>\n\n<p>&ldquo;No,&rdquo; he said. &ldquo;Wait on the curb.&rdquo;&nbsp;</p>\n\n<p>So we did. With the boxes. Most of them were ripped open, scuffed, and soggy from the sprinklers. Some of the boxes were missing completely. One artist is still missing $35,000 worth of sculpture.</p>\n\n<p>I got my paintings back. And then I sent them back home to rural Wisconsin.&nbsp;</p>\n\n<p>Some of the artists want to sue this woman and the art fair that never was. I don&rsquo;t. A part of me feels like if she is not held accountable &mdash; not internet shamed &mdash; that maybe in another city, far, far away, this fair can happen, the right way, without lies and ransoms and police involvement. And people like me, far, far away from the art world, can&nbsp;have a chance to be seen.</p>\n\n<p>Yes,&nbsp;I am a sucker.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MjkwMDAx/full.jpg" /><small>The artist&nbsp;standing victorious, having at last recovered&nbsp;her soggy boxes of art.</small></p>\n\n<p><em>Meg Lionel Murphy compulsively paints heartbroken womxn that magically grow larger, stronger, and scarier than the world around them. As the paintings grow in number, she grows just a little larger, stronger, and scarier too. When not painting, she divides her time between working as the Art + Story Director of Pollen and volunteering as Editor-in-Chief of Paper Darts Literary Magazine. You can find her work at <a href="http://www.meglionelmurphy.com">www.meglionelmurphy.com</a>, on instagram at <a href="https://www.instagram.com/meglionelmurphy/">@meglionelmurphy</a>, and at Co-Exhibitions Gallery, this February, for her first solo show. All images courtesy of the author.</em></p>\n\n<p>&nbsp;</p>\n',
    created_date: '2019-12-19T19:03:53Z',
    is_published: true,
    modified_date: '2019-12-22T05:23:42Z',
    permalink: '/written/2019/12/dispatch-from-art-basel-fyre-festival-edition/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-12-21T16:30:40Z',
      modified_date: '2019-12-21T16:30:40Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjM1MjYwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjM1MjYwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MjYwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MjYwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MjYwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MjYwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjM1MjYwMDAx',
    published_date: '2019-12-19T19:39:14Z',
    resource_id: 'QmxvZ1Bvc3QeHzU2NTg1Nzk1MDc4NzE3NDQ',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU2NTg1Nzk1MDc4NzE3NDQ',
    slug: 'dispatch-from-art-basel-fyre-festival-edition',
    summary: 'Artist Meg Lionel Murphy spins a bizarre true crime yarn about an art show gone terribly wrong. ',
    title: 'Dispatch from Art Basel: Mansions, ransom, and maybe a kidnapping?',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Bridget Kranz',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Bridget',
      lastname: 'Kranz',
      resource_id: 'VXNlch4fNTYzMTA0MDQyMDgzOTQyNA',
      resource_url: '/api/users/VXNlch4fNTYzMTA0MDQyMDgzOTQyNA',
      website: 'mailto: bridget.kranz@gmail.com',
    },
    author_resource_id: 'VXNlch4fNTYzMTA0MDQyMDgzOTQyNA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>&nbsp;</p>\n\n<p>At the opening for <em>Groundswell</em>,&nbsp;artist Luke Lyons invited the audience to hold his ceramic pieces, cupping them in&nbsp;hand&nbsp;or turning them over to explore the dynamic glazes hidden on the reverse.&nbsp;</p>\n\n<p>&ldquo;I wish I had a sign,&rdquo; he laughed. The group exhibition, up through the end of the month at Artspace Jackson Flats, includes multiple, food-safe pieces for sale by Lyons, in addition to two galleries worth of work by his peers from&nbsp;the Interact Center for the Visual and Performing Arts. &nbsp;</p>\n\n<p>Technically licensed as a day program for adults with disabilities, Interact blurs the lines between staff and client artists as everyone creates alongside one another out of the nonprofit&rsquo;s studio space in St. Paul.&nbsp;</p>\n\n<p>Derek Meier, Services Coordinator with the Center&rsquo;s visual arts department, says continuing to challenge that divide is one of his main priorities moving forward at Interact. While the current show in Northeast has been a way to exhibit out in the community, Meier added that he wanted to continue to push the envelope as far as where and how Interact artists&rsquo; work is shown.&nbsp;</p>\n\n<p>&ldquo;Venues, as much as you might think they might be open to any and all aesthetics and backgrounds, they can be very narrow in the scope of who they showcase,&rdquo; he explained.&nbsp;</p>\n\n<p>&quot;We want to start showing work alongside community artists, and we have an upcoming show that&rsquo;s staff artists&rsquo; work alongside client artists&rsquo; work for viewers to see them&nbsp;at the same level &mdash; because they really are.&rdquo;</p>\n\n<p>In the performing arts half of Interact, which hosts roughly 35 actors, staff teaching artists act alongside clients in various productions, which Meier noted can sometimes come as a shock to audience members who think they know what a performer with disabilities may look or sound like.&nbsp;</p>\n\n<p>&ldquo;A lot of the viewers walk away with this feeling of not necessarily knowing who is who. Some disabilities are really visible and some aren&rsquo;t, and we house all and any,&rdquo; he noted. &ldquo;It blurs that line and that&rsquo;s really important.&rdquo;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUzMjIwMDAy/full.jpg" /><small>Zach Mohs,&nbsp;<em>Self Portrait</em>, 2019. Image courtesy of <a href="http://interactcenter.org" target="_blank">interactcenter.org</a>.</small></p>\n\n<p><strong>Perceived notions</strong></p>\n\n<p>The organization&rsquo;s mission statement to create &ldquo;art that challenges perceptions of disability&rdquo; has carried over to its client artists as well. Longtime Interact painter W.S. Norton said he has also had moments of seeing a work up on the wall and being shocked to find out which of his peers it belonged to.&nbsp;</p>\n\n<p>&ldquo;When I came, I had judgments about other people&rsquo;s art and one day, three or four years into coming here, we had a gallery show and I walked in and there were these absolutely gorgeous watercolors. I asked somebody who had done them &hellip; and it was somebody that had a very difficult time with communication,&rdquo; he explained. &ldquo;She created all these absolutely gorgeous pieces, and it just kind of stripped away any preconceived notions I had of what it took to make beautiful art.</p>\n\n<p>&quot;If you put [artwork] in a gallery and nobody had any idea that it was by somebody with whatever type of disability, it would be fun to see their misconceptions, looking and adoring the art and then finding out who made it,&rdquo; he continued. &ldquo;I think people would be pretty surprised.&rdquo;</p>\n\n<p>The multitudes contained within any one person, and especially within a collective of over 70 practicing visual artists, create a lot of unknowns &mdash; something staff members say can be uncomfortable to people not used to being around others who may have a different form of disability than&nbsp;what they have experienced.&nbsp;</p>\n\n<p>&ldquo;If [people] don&rsquo;t know someone or don&rsquo;t have experience being around people with disabilities, they don&rsquo;t know what to expect. It&rsquo;s unknown, and I think it can feel intimidating,&rdquo; said Presley Martin, a visual arts instructor at Interact. &ldquo;Art is a way in, for people to get to know people and break down those barriers of any preconceived notions of who these people are.&rdquo;&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIxMjQwMDAx/full.jpg" /><small>John Riddle, Elliptical Illusion, 30x40&quot;. Image courtesy of <a href="http://interactcenter.org" target="_blank">interactcenter.org</a>.</small></p>\n\n<p><strong>&quot;No, you&rsquo;re an artist&quot;</strong></p>\n\n<p>Art has also been a way for many clients at Interact to find a job that feels enjoyable and purposeful. Norton described himself as &ldquo;unattached&rdquo; before joining the center eight years back.&nbsp;</p>\n\n<p>&ldquo;I worked and I was okay or good at what I did,&rdquo; he explained. &ldquo;This is the first time that I feel like I&rsquo;m doing a job, but I&rsquo;m eager to come in.&rdquo;</p>\n\n<p>Norton added that, at the beginning, he would miss half the days he was supposed to come in, or sit for an hour at a time doing nothing. Eventually, he said encouragement from the other artists at Interact &mdash; both staff and peers &mdash; coupled with the skills training he received, gave him permission to explore and even to make mistakes. Now, Norton said he has no qualms identifying as an artist, and sees his purpose as &ldquo;to explore and to perceive&rdquo; because of his unique point of view.&nbsp;</p>\n\n<p>Lyons also noted that he had a hard time calling himself an artist during his first few years at Interact.&nbsp;</p>\n\n<p>&ldquo;I used to tell people after I got out of the hospital, &lsquo;I go to an adult day program where they provide stuff for us to make art.&rsquo; Interact was like, &lsquo;No, you&rsquo;re an artist.&rsquo; It took me forever to accept that,&rdquo; he explained. &ldquo;Now, when people ask me, &lsquo;What do you do?&rsquo;&nbsp; I say, &lsquo;I&rsquo;m an artist. I work out of the Interact Center for Visual and Performing Arts.&rsquo;&rdquo;</p>\n\n<p>In addition to spending the majority of their days in the studio, Interact artists also take trips to local museums and galleries, develop a web presence, apply for shows and grants, and work to plan and curate events.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MjQwMDAx/full.jpg" /><small>Work from a number of Interact artists is on view through the end of the month at Artspace Jackson Flats in Northeast Minneapolis. Going forward, Services Coordinator Derek Meier says the goal is to have more shows that display participant artists&#39; work alongside staff and community creatives. Photo by&nbsp;the author.</small></p>\n\n<p><strong>Autonomy and inclusion</strong></p>\n\n<p>Joli Grostephan-Brancato, Visual Arts Department Manager, said she and her staff try to give clients as much freedom as possible within the limits of Interact&rsquo;s licensing. One of the ways in which the center has tried to do this is by paying clients for any work they do that goes above and beyond their artistic practice.&nbsp;</p>\n\n<p>&ldquo;We&rsquo;ve had artists that attend the program teach workshops. They share a skill with their peers, and are often teaching staff how to do that skill,&rdquo; said Grostephan-Brancato. &ldquo;It&rsquo;s almost like they&rsquo;re performing the role of staff. We get paid when we do that stuff, so we want to pay the artists for doing that stuff.&rdquo;</p>\n\n<p>Working around adults with disabilities day-in, day-out for 10 years, Grostephan-Brancato said it can still be jarring when seeing how Interact artists sometimes get treated outside of the center. She emphasized the &ldquo;radical inclusion&rdquo; that is one of the nonprofit&rsquo;s core values and said that, for her, it meant, &ldquo;not treating people differently, not talking down to people, not using the baby voice &hellip; realizing that we&rsquo;re all adults, and we all deserve the same amount of respect.&rdquo;</p>\n\n<p>Again, she added that strangers can be well-intentioned, but oftentimes haven&rsquo;t had the relationships with people with disabilities that can cut away some of their misconceptions.</p>\n\n<p><strong>What&rsquo;s next?</strong></p>\n\n<p>With a number of shows on the horizon &mdash; including one in March at the Quarter Gallery at the University of Minnesota &mdash; Meier said he&rsquo;s feeling better and better about the opportunities for showing Interact work in a broader context going forward.&nbsp;</p>\n\n<p>&ldquo;Between this year and the upcoming one, I see a lot of reason to be more and more optimistic about where we&rsquo;re able to show, how often we&rsquo;re able to show, the quality of lighting,&rdquo; he explained. &ldquo;I feel like it&rsquo;s inevitable, the more people that are able to see the work, the more people will recognize it has equal value &hellip; the artists demand that stage.&rdquo;</p>\n\n<p>&nbsp;</p>\n\n<p>Groundswell<em>,&nbsp;which consists entirely of work by client artists at Interact, will be up through the end of the month at Artspace Jackson Flats, located at 901 18<sup>1</sup>/<sub>2</sub> Ave. NE in Minneapolis.&nbsp;</em></p>\n\n<p><em>Interact will also be hosting its Great Big Holiday Sale this Saturday, Nov. 30, from 10 a.m. to 4 p.m. at 1860 Minnehaha Ave. W. in St. Paul.</em></p>\n\n<p><em>Banner image: Carl Clark,&nbsp;</em>Canyon Sunset <em>(detail), 18x24&quot;. Image courtesy of <a href="http://interactcenter.org" target="_blank">interactcenter.org</a>.</em></p>\n\n<p>&nbsp;</p>\n\n<h1><strong>Staff and Client Artist Profiles</strong></h1>\n\n<p><strong><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MjUwMDAx/full.jpg" /></strong></p>\n\n<p><small>Joli Grostephan-Brancato.&nbsp;<em>Man-Made Minerals (Cluster),&nbsp;</em>2018.&nbsp;Wood, glass, acrylic, ink, resin, organic materials.</small></p>\n\n<h2><strong>Joli Grostephan-Brancato</strong></h2>\n\n<p>Visual Arts Department Manager.&nbsp;Primary medium: Sculpture&nbsp;</p>\n\n<p><strong>Why do you think Interact staff tend to stay with the center such a long time?&nbsp;</strong></p>\n\n<p>&ldquo;It&rsquo;s really cool to be able to come to work and work with other artists and also work on your own art and bounce ideas back and forth between the attending artists and the staff artists &hellip; We&rsquo;re in the studio together, we sit together, we eat lunch together.&rdquo;</p>\n\n<p><strong>What does Interact&rsquo;s value of &lsquo;radical inclusion&rsquo; mean to you?</strong></p>\n\n<p>&ldquo;For the visual arts studio, I think it means giving everybody an opportunity to do what they want to do within their artistic career without limiting them because of their disability.&rdquo;</p>\n\n<p>&bull;&bull;&bull;&bull;&bull;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI3MTYwMDAx/full.jpg" /><small>Presley Martin.&nbsp;<em>98% Air</em>, 2016.&nbsp;Found polystyrene foam and wood.</small></p>\n\n<h2><strong>Presley Martin</strong></h2>\n\n<p>Visual Arts instructor.&nbsp;Primary medium: Sculpture&nbsp;</p>\n\n<p><strong>How long have you been involved with Interact?</strong>&nbsp;</p>\n\n<p>&ldquo;I&rsquo;ve been a full-time instructor for three years, but I initially came as a volunteer five years ago &hellip; That&rsquo;s sort of the normal way that staff comes here. They start as a volunteer, then they maybe are a substitute for a while and then they come on full-time.&rdquo;&nbsp;</p>\n\n<p><strong>What is one of the main ideas you&rsquo;re exploring in your work?</strong></p>\n\n<p>&ldquo;I&rsquo;m interested in things that are viewed as worthless &hellip; there are trees that are non-native, that people just want to get rid of. I&rsquo;m interested in working with those materials.&rdquo;</p>\n\n<p>&bull;&bull;&bull;&bull;&bull;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MjYwMDAx/full.jpg" /><small>W.S. Norton at <em>Groundswell</em>.&nbsp;Photo by the author.</small></p>\n\n<h2><strong>W.S. Norton</strong></h2>\n\n<p>Client artist.&nbsp;Primary medium: Oil on canvas</p>\n\n<p><strong>What have you enjoyed most about your time with Interact?</strong>&nbsp;</p>\n\n<p>&ldquo;I feel like I have a place and I feel like I have a purpose. Matisse and Van Gogh have nothing to worry about, I&rsquo;m not going to push them out of the pantheon of art, but I&rsquo;m happy with what I can do now and I didn&rsquo;t have that before &hellip;</p>\n\n<p>&ldquo;To me, Interact is more than just disabled people making arts and crafts. It&rsquo;s human beings exploring life. It&rsquo;s pretty terrific.&rdquo;</p>\n\n<p><strong>What do you feel is your purpose as an artist?&nbsp;</strong></p>\n\n<p>&ldquo;To explore and to perceive. I see things so differently now. I did this painting of a lone pine tree, because I was on the bus and I just happened to turn and see this pine tree with a white sky behind it and it just hit me. When I came back, I just had to start painting that.&rdquo;</p>\n\n<p>&bull;&bull;&bull;&bull;&bull;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQzMjMwMDAx/full.jpg" /><small>Andie Kiley at work in the studio. Photo by the author.</small></p>\n\n<h2><strong>Andie Kiley</strong></h2>\n\n<p>Client artist.&nbsp;Primary medium: Watercolor</p>\n\n<p><strong>What is one of the main ideas you&rsquo;re exploring in your own work?</strong></p>\n\n<p>&ldquo;I just let my fingers do the painting &hellip; I write down four colors that will go into it, and I follow that for the most part. Sometimes, I have five or six colors in it, but mainly just four&hellip;</p>\n\n<p>&ldquo;Originally I started off in performing arts. It was just a question of curiosity &mdash; I tried painting and I&rsquo;ve liked it ever since.&rdquo;</p>\n\n<p><strong>Why do you write down the colors that you use?</strong></p>\n\n<p>&ldquo;At times, I think to myself, &lsquo;Why did you do this? Why did you do that? This could have been better than that.&rsquo; So I&rsquo;m clear, I always express what I do.&rdquo;</p>\n\n<p>&bull;&bull;&bull;&bull;&bull;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUzMjIwMDAx/full.jpg" /><small>Zack Mohs at <em>Groundswell</em>. Photo by the author.</small></p>\n\n<h2><strong>Zack Mohs</strong></h2>\n\n<p>Client artist.&nbsp;Primary medium: Drawing</p>\n\n<p><strong>What are some of the inspirations behind your work?</strong></p>\n\n<p>&ldquo;It&rsquo;s inspired by graffiti and tattoo art. [For example,] I found an image of a line drawing of a tattoo-style rose and then started drawing it with my eyes closed, just to get a rough, abstract outline. Then I cleaned it up when I was done with the rest of it.&rdquo;</p>\n\n<p><strong>Why do you sometimes start drawings with your eyes closed?</strong>&nbsp;</p>\n\n<p>&ldquo;I know I could reproduce the image pretty well, but I don&rsquo;t like to. I&rsquo;d rather have it different, in a way&hellip;</p>\n\n<p>&ldquo;Knowing that there&rsquo;s no judgment here has inspired me to do pretty much whatever I want with my art. I was told right away, &lsquo;Use anything you want to use, and if you need help along the way, someone will help you.&rsquo;&rdquo;</p>\n\n<p>&bull;&bull;&bull;&bull;&bull;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ1MTIwMDAx/full.jpg" /><small>Luke Lyons at Groundswell. Photo by the author.</small></p>\n\n<h2><strong>Luke Lyons</strong></h2>\n\n<p>Client artist.&nbsp;Primary medium: Clay&nbsp;</p>\n\n<p><strong>What process do you use to create your forms?</strong>&nbsp;</p>\n\n<p>&ldquo;Because of my physical disabilities, I can&rsquo;t use the wheel because the wheel turns the wrong way. Our wheel is old, and we can&rsquo;t reverse directions &hellip; I can&rsquo;t roll out coils, because these hands don&rsquo;t play nice. So, these are all bump molds. They&rsquo;re from forms that we made with the prior instructor, so basically I roll out a sheet and then drape it over.&rdquo;&nbsp;</p>\n\n<p><strong>How do you define being an artist?&nbsp;</strong></p>\n\n<p>&ldquo;Making beautiful stuff that other people like. It really pleases me that other people look at it and have the same feeling that I do when I&rsquo;m making it. Because, I don&rsquo;t care how crude it is, I like my work. Every artist should.&rdquo;</p>\n',
    created_date: '2019-11-27T14:36:07Z',
    is_published: true,
    modified_date: '2019-11-27T23:43:12Z',
    permalink: '/written/2019/11/side-by-side-ability-and-art-at-the-interact-center/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-11-27T16:14:58Z',
      modified_date: '2019-11-27T16:14:58Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ3MTMwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjQ3MTMwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MTMwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MTMwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MTMwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MTMwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ3MTMwMDAx',
    published_date: '2019-11-27T16:26:28Z',
    resource_id: 'QmxvZ1Bvc3QeHzU3NTEwNzU5MjM1NTg0MDA',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU3NTEwNzU5MjM1NTg0MDA',
    slug: 'side-by-side-ability-and-art-at-the-interact-center',
    summary:
      'This St. Paul center for artists with disabilities seeks to expand the ways in which professional creatives "interact" with each other and the community',
    title: 'Side By Side: Ability and art at the Interact Center',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Russ White',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Russ',
      lastname: 'White',
      resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      resource_url: '/api/users/VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      website: 'http://www.russ-white.com/',
    },
    author_resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>&nbsp;</p>\n\n<p>Geology is the story of slow violence: of tectonic plates shoving mountains skyward, of glaciers gouging ruts out of the earth, of water picking a fight with solid rock and winning. The results can be as pretty as a postcard &mdash; jagged peaks and rippling lakes, perhaps caught in the fire of a brief, burning sunset &mdash; but this is just a moment in a story that spans millennia.</p>\n\n<p>Minimalism is also the product of erosion, as artists strip away the superfluous, boiling down an idea to an utterly simple expression of material or shape, line or color. And so has Devra Freelander done with mountains and icebergs in her solo show at Circa Gallery. <em><a href="https://www.mplsart.com/events/far-away-deep-inside">far away, deep inside</a> &mdash; </em>a collection of sculptures, photos, and a filmed performance &mdash; uses color, scale, and sex to ponder permanence. The scale of the show itself is impactful in its spaciousness: almost all of the work hugs the walls, from the delicate steel mountainscapes to the assortment of shards and slabs of fluorescent epoxy resin.</p>\n\n<p>The center of Circa&rsquo;s large gallery space is left empty, perhaps reflecting an emptiness at the center of the show itself: Freelander lost her life suddenly and tragically just a few months ago in a terrible traffic accident in New York City, where the artist was based and beloved. This show was already in the works, a major solo exhibition at the start of the 28-year-old&rsquo;s promising career. Circa has done her the kindness of carrying on, with the help of her friends and family, in mounting an exhibition that lets her work stand on its own.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIxMjIwMDAx/full.jpg" /><small><em>Landscape I (Nick)</em>, framed inkjet print, edition of 10, 10 x 8&quot;. Collaboration with Gregory Wikstrom. Image courtesy the artist&#39;s <a href="http://www.devrafreelander.com" target="_blank">website</a>.</small></p>\n\n<p>This was an artist always looking to the horizon. Almost every piece here is a fragment of a landscape, from the metal mountainlines to the close-cropped, hypersaturated (and subtly sexual) photographs. Even the day-glo moon rocks, at first glance just a collection of disparate chunks, are actually the remnants of an earlier public sculpture of a large, luminescent sunrise. These <em>Fluorescent Fragments</em> are like shards of hard candy,&nbsp;their rough edges showing the hammer blows and saw marks that broke them apart. They are records of destruction: placid but violent, precious but plastic, tiny pink and yellow icebergs that will never melt &mdash; warm memories of a sunrise long gone, a public sculpture broken asunder (and made available to private collectors).</p>\n\n<p><small><em><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MjIwMDAx/full.jpg" />Fluorescent Fragment</em>&nbsp;series, epoxy resin, dimensions variable. Photo courtesy of the gallery.</small></p>\n\n<p>These objects are mysterious in their materiality. Their Photoshop-perfect color gradients and unclear provenance make them curious but impassive sculptural artifacts. They don&rsquo;t give you much. I think, for the casual viewer especially, the show might have&nbsp;suffered from a lack of personal connection if not for the 8-minute video projection that dominates the space. Instead&nbsp;we see Freelander herself, larger than life, executing a performance in the Norwegian Arctic. Beginning with a shot of the sun rising over snow-peaked mountains, the video is a solemn, erotic love letter to this endangered ecosystem, in which the artist connects physically, bodily, with the landscape we are destroying, progressively shedding layers of clothing as she embraces, cradles, and fondles the ice. It is a strange, almost sinister display of sensuality, something akin to a smothering love. &ldquo;I film myself embracing the polar landscape,&quot; Freelander writes,&nbsp;&quot;prostrating myself on glaciers as if making love to them or begging for their forgiveness,&nbsp;while the heat from my body inherently melts the ice beneath me.&rdquo;&nbsp;</p>\n\n<p>It&rsquo;s the response of an artist, not an activist; she freely admits the size of her own carbon footprint as both a sculptor and a traveler. This is not self-righteous; it&rsquo;s self-incriminating. How do we, each of us, grapple with a doom so much larger than our own, one in which we are complicit daily? It&rsquo;s a doom that can melt mountains even as it passes us by. At the film&rsquo;s end, the artist &mdash; now fully nude &mdash; walks calmly into the icy sea and quietly crossfades out, as though folded gently into the water&rsquo;s flow, leaving us again with a postcard-perfect mountain vista. Is this a zen shrug or a romantic suicide? Or maybe just an appreciation for the scale of nature, so terribly vulnerable to our selfish desires but still so massively powerful over our tiny bodies.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MTEwMDAx/full.jpg" /><small>The artist standing in front of <em>Fluorescent Sunrise</em>; epoxy resin, pigment, and steel; 6.75 x 13.5 x .25&#39;; 2017. Image courtesy of the artist&#39;s <a href="https://www.instagram.com/devrafreelander/" target="_blank">Instagram</a>.</small></p>\n\n<ul>\n</ul>\n\n<p>Destruction is at the heart of this show: the destruction of arctic ecosystems, the destruction of an earlier sculpture, and sadly,&nbsp;the sudden destruction of a life. Even the wall text reflects on the loss of memory and the artist&rsquo;s digital archives, sharing a life lesson about presence and imperfection in the face of loss. But there is no small amount of indestructibility here, too. Some of it takes the form of a lament, as in the <em>Late Capitalist Relic</em>, an iPhone encased in a block of epoxy resin like some unearthed Ice Age artifact. Of course, this future&nbsp;fossil is&nbsp;rendered doubly permanent now that it is frozen in plastic, our own geological legacy (to which the artist herself adds, as do we all).</p>\n\n<p>It&rsquo;s not all negative, though. Maybe a better word is indomitable: there is joy in the artist&rsquo;s explosive colors and devious humor. Freelander&rsquo;s work is strongest at its simplest, when she digs down to just line and color. On Circa&rsquo;s monolithic black wall hangs a little zip of a mountain range, a 1/4&rdquo; steel rod bent into a drawing and left hovering a few inches off the wall. The imposing horizon of rock and earth, crunched together&nbsp;over eons, has been simplified and scaled down to a quick line drawing, rendered by the artist&rsquo;s hand in a single gesture&nbsp;of neon yellow steel. It is rounded and imprecise, as solid as a mountain, as fragile as a heartbeat.</p>\n\n<p><small><em><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MjcwMDAx/full.jpg" />Neon Range 03,</em>&nbsp;steel &amp; enamel, 11 x 29 x 3&quot;. Photo courtesy of the gallery.</small></p>\n\n<p>far away, deep inside<em>&nbsp;is on view through December 20th&nbsp;at <a href="http://www.circagallery.org" target="_blank">Circa Gallery</a>,&nbsp;1125 Buchanan St NE\u200b, Minneapolis. Gallery hours are&nbsp;Tues -&nbsp;Fri 1-6pm, &amp; Sat 11am -&nbsp;4pm, or by appointment. To view more of the artist&#39;s work, visit&nbsp;<a href="http://www.devrafreelander.com" target="_blank">devrafreelander.com</a>.</em></p>\n\n<p><em>Banner image: still from</em>&nbsp;far away, deep inside<em>; projected&nbsp;video; duration: 8:34; 2018.</em></p>\n',
    created_date: '2019-11-18T19:06:16Z',
    is_published: true,
    modified_date: '2019-11-19T20:43:50Z',
    permalink: '/written/2019/11/devra-freelander/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-11-18T19:06:04Z',
      modified_date: '2019-11-18T19:06:04Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjE1MjYwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjE1MjYwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MjYwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MjYwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MjYwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MjYwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjE1MjYwMDAx',
    published_date: '2019-11-19T17:51:13Z',
    resource_id: 'QmxvZ1Bvc3QeHzU2OTg2MTQ3NDM1MzE1MjA',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU2OTg2MTQ3NDM1MzE1MjA',
    slug: 'devra-freelander',
    summary:
      'The Northeast gallery presents a solo show of the Brooklyn-based artist, who passed away tragically this summer, on view through December 20th.',
    title: 'far away, deep inside: Devra Freelander at Circa Gallery',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Katie Garrett',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Katie',
      lastname: 'Garrett',
      resource_id: 'VXNlch4fNTE4NDU4MTg1ODc1NDU2MA',
      resource_url: '/api/users/VXNlch4fNTE4NDU4MTg1ODc1NDU2MA',
      website: 'http://mplsart.com',
    },
    author_resource_id: 'VXNlch4fNTE4NDU4MTg1ODc1NDU2MA',
    category_resource: {
      _meta: { is_verbose: true, resource_type: 'BlogCategory' },
      resource_id: 'QmxvZ0NhdGVnb3J5Hh81NzYzMjYzNjA2MjkyNDgw',
      resource_url: '/api/post_categories/QmxvZ0NhdGVnb3J5Hh81NzYzMjYzNjA2MjkyNDgw',
      slug: 'scene',
      title: 'The Scene',
    },
    category_resource_id: 'QmxvZ0NhdGVnb3J5Hh81NzYzMjYzNjA2MjkyNDgw',
    content:
      '<h1>&nbsp;</h1>\n\n<h1><a href="https://www.mplsart.com/events/pre-holiday-art-sale-at-gallery-one-tractorworks"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUzMTYwMDAx/card_large.png" /></a></h1>\n\n<h1><a href="https://www.mplsart.com/events/pre-holiday-art-sale-at-gallery-one-tractorworks">Pre-Holiday&nbsp;Art Sale at Gallery One Tractorworks</a></h1>\n\n<p><strong>Thu Nov 21 @ Gallery One Tractorworks&nbsp;&nbsp;</strong></p>\n\n<p>Be creative this&nbsp;holiday season, give original artwork. Gallery One presents&nbsp;two exhibits by outstanding local artists&mdash;paintings by Michelle Plombon&nbsp;and monotypes by Genie Castro\u200b.</p>\n\n<p>&nbsp;</p>\n\n<h2>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>\n\n<h2><a href="https://www.mplsart.com/events/the-artful-present-2019"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMDYwMDAx/card_large.png" /></a></h2>\n\n<h1><a href="https://www.mplsart.com/events/the-artful-present-2019">The Artful Present</a>&nbsp;</h1>\n\n<p><strong>Nov 22 - 23 @&nbsp;Veronique&nbsp;Wantz&nbsp;Gallery</strong></p>\n\n<p>Get into the holiday vibe (and a little party) at&nbsp;Veronique&nbsp;Wantz&nbsp;Gallery in the North Loop&nbsp;Mpls. This annual event is not to be missed. Find one-of-a-kind&nbsp;giftable&nbsp;arts that are specially curated to delight and be loved by you and yours.\u200b</p>\n\n<p>&nbsp;</p>\n\n<h2>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>\n\n<h2><a href="https://www.mplsart.com/events/great-big-holiday-art-sale"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MDYwMDAx/card_large.png" /></a></h2>\n\n<h1><a href="https://www.mplsart.com/events/great-big-holiday-art-sale">Great Big Holiday Art Sale!</a></h1>\n\n<p><strong>Nov 30 @ Interact Center for Visual and Performing Arts\u200b&nbsp;</strong></p>\n\n<p>Stop on by and pick up amazing gifts and art! Enjoy 20% off original artwork by 70+ artists who are challenging perceptions of disabilities every day. Join in and enjoy treats, a coffee &amp; cocoa bar, gingerbread cookie decorating, and holiday music.</p>\n\n<h2>&nbsp;</h2>\n\n<h2>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>\n\n<h2><a href="https://www.mplsart.com/events/shopjxta-2019"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MDUwMDAx/card_large.png" /></a></h2>\n\n<h1><a href="https://www.mplsart.com/events/shopjxta-2019">#ShopJXTA</a></h1>\n\n<p><strong>Nov 30 - Dec 23 @ Juxtaposition Arts\u200b</strong></p>\n\n<p>Get your holiday shopping done at JXTA. Shop unique textiles, accessories, and one-of-a-kind posters, ceramics, and other art designed and crafted by JXTA youth apprentices.</p>\n\n<h2>&nbsp;</h2>\n\n<h1>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;\u200b<br />\n<a href="https://www.mplsart.com/events/holiday-market-minneapolis-by-unique-markets"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MTcwMDAx/card_large.png" /></a><br />\n<a href="https://www.mplsart.com/events/holiday-market-minneapolis-by-unique-markets">Holiday Market Minneapolis by Unique Markets</a></h1>\n\n<p><strong>Dec 1 @ Machine Shop MPLS</strong></p>\n\n<p>Unique Markets presents Minneapolis&#39;s best curated, independent designers and emerging brands in one place to get all your holiday shopping done.</p>\n\n<h2>&nbsp;</h2>\n\n<h2>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>\n\n<h2><a href="https://www.mplsart.com/events/gifts-in-the-gallery-2019"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MjMwMDAx/card_large.png" /></a></h2>\n\n<h1><a href="https://www.mplsart.com/events/gifts-in-the-gallery-2019">Gifts in the Gallery</a></h1>\n\n<p><strong>Dec 4 - 18 @ Artistry</strong></p>\n\n<p>A two-week, boutique-style sale featuring handcrafted pottery, jewelry, fiber art, blown glass, framed artwork, and other stunning works by 64 local artists\u200b.</p>\n\n<p>&nbsp;</p>\n\n<h2>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>\n\n<h2><a href="https://www.mplsart.com/events/raging-art-on-2019"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMTEwMDAx/card_large.png" /></a></h2>\n\n<h1><a href="https://www.mplsart.com/events/raging-art-on-2019">8th Annual&nbsp;</a><a href="https://www.mplsart.com/events/gifts-in-the-gallery-2019">R</a><a href="https://www.mplsart.com/events/raging-art-on-2019">aging Art On @ Gamut Gallery</a></h1>\n\n<p><strong>Dec 4&nbsp; /&nbsp; Preview Party<br />\nDec 5 - 21&nbsp; /&nbsp; Free Open Hours</strong></p>\n\n<p>Gamut Gallery&rsquo;s annual &ldquo;uncurated&rdquo; holiday makers market in a gallery setting featuring floor-to-ceiling local artwork, handcrafted gifts and live music by your favorite local DJs.</p>\n\n<h2>&nbsp;</h2>\n\n<h2>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>\n\n<h2><a href="https://www.mplsart.com/events/julmarknad-asi-s-christmas-market-and-festival"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMTQwMDAx/card_large.png" /></a></h2>\n\n<h1><a href="https://www.mplsart.com/events/julmarknad-asi-s-christmas-market-and-festival">Holidays at the American Swedish Institute</a></h1>\n\n<p><strong>Nov 16 - Jan 13 &nbsp;/&nbsp; Jul Shop</strong></p>\n\n<p>Stock up on all your Nordic holiday needs. Pick from a wide selection of imported glassware, one-of-a-kind holiday decorations, chocolates, textiles, candles and more.</p>\n\n<p>&nbsp;</p>\n\n<h2>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>\n\n<h2><a href="https://www.mplsart.com/events/craft-bash-decked-out-preview-party"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMxMjYwMDAx/card_large.png" /></a></h2>\n\n<h1><a href="https://www.mplsart.com/events/craft-bash-decked-out-preview-party">Craft Bash + Decked Out Preview Party</a></h1>\n\n<p><strong>Dec 6 + 7 @&nbsp;Parallel and Hennepin Made\u200b</strong></p>\n\n<p>American Craft Council hosts their annual holiday market featuring craft offerings that range from ceramics, jewelry, fashion, and home goods to apothecary, candles, and letterpress cards\u200b. Curated by Tricia&nbsp;Heuring&nbsp;of&nbsp;<em>Public Functionary</em>&nbsp;and Leslie Barlow of&nbsp;<em>Studio 400\u200b</em></p>\n\n<h2>&nbsp;</h2>\n\n<h2>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>\n\n<h2><a href="https://www.mplsart.com/events/soovac-s-artists-holiday-shop-2019"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ1MDkwMDAx/card_large.png" /></a></h2>\n\n<h1><a href="https://www.mplsart.com/events/soovac-s-artists-holiday-shop-2019">SooVAC Artists&#39; Holiday Shop</a></h1>\n\n<p><strong>Dec 6 -29&nbsp;@&nbsp;Soo&nbsp;Visual Arts Center</strong></p>\n\n<p>In their 8th&nbsp;Annual&nbsp;Artists&#39; Holiday Shop, SooVAC presents a killer lineup of some of the best artists and makers in Minnesota. Don&#39;t miss this one-stop holiday shop with offerings including prints, paintings, jewelry, sculpture, and more.</p>\n\n<p>&nbsp;</p>\n\n<h2>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>\n\n<h1><a href="https://www.mplsart.com/events/betty-danger-s-4th-annual-bizarre-bazaar"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUzMTgwMDAx/card_large.png" /></a></h1>\n\n<h1><a href="https://www.mplsart.com/events/betty-danger-s-4th-annual-bizarre-bazaar">Betty Danger&#39;s 4th Annual Bizarre Bazaar</a></h1>\n\n<p><strong>Dec 7 +&nbsp;8 @ Betty Danger&#39;s Country Club</strong></p>\n\n<p>Minneapolis&#39; favorite kooky hangout hosts 40+ local artists peddling&nbsp;jewelry, sassy needlepoint, knitted cacti, festive florals, silk screened ties and other creative/clever/weird&nbsp;crafts for the holidays. Curated by artist, Genie Castro.</p>\n\n<h2>&nbsp;</h2>\n\n<h2>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>\n\n<h2><a href="https://www.mplsart.com/events/avivo-artworks-winter-market-2019"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MjMwMDAx/card_large.png" /></a></h2>\n\n<h1><a href="https://www.mplsart.com/events/avivo-artworks-winter-market-2019">Avivo ArtWorks Winter Market</a></h1>\n\n<p><strong>Fri Dec 13 @ Avivo Artworks</strong></p>\n\n<p>Support artists living with mental illness, and buy one of a kind artwork for yourself and your loved ones.</p>\n\n<h2>&nbsp;</h2>\n\n<h2>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>\n\n<h2><a href="https://www.mplsart.com/events/redhot-art-market"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMDcwMDAx/card_large.png" /></a></h2>\n\n<h1><a href="https://www.mplsart.com/events/redhot-art-market">RedHot Art Market\u200b</a></h1>\n\n<p><strong>Dec 14 @ Chicago Avenue Fire Arts Center</strong></p>\n\n<p>Shop locally made jewelry, ceramics, sculpture, clothing, home goods, paintings and much more at Chicago Avenue Fire Arts Center&#39;s annual holiday sale. The gifts you purchase are also a gift to future CAFAC students, with proceeds supporting their scholarship fund.</p>\n',
    created_date: '2019-10-31T02:27:36Z',
    is_published: true,
    modified_date: '2019-12-10T16:39:16Z',
    permalink: '/written/2019/11/2019-holiday-shopping-guide/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-10-31T03:09:01Z',
      modified_date: '2019-10-31T03:09:01Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjI5MjIwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjI5MjIwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MjIwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MjIwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MjIwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MjIwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjI5MjIwMDAx',
    published_date: '2019-11-01T18:56:04Z',
    resource_id: 'QmxvZ1Bvc3QeHzU2NDQ5MjE4ODA5NjkyMTY',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU2NDQ5MjE4ODA5NjkyMTY',
    slug: '2019-holiday-shopping-guide',
    summary: 'Local artists and makers turn harrowing holiday shopping into a joyful experience',
    title: '2019 Holiday Shopping Guide',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Sheila Regan',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Sheila',
      lastname: 'Regan',
      resource_id: 'VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
      resource_url: '/api/users/VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
      website: 'https://hyperallergic.com/author/sheila-regan/',
    },
    author_resource_id: 'VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>Welcome to the VIP Room. It is maybe a little bit different from VIP Rooms you might find at an adult entertainment club downtown. It&rsquo;s a lot cheaper, first of all &mdash; only a $10 donation! You still meet with an erotic dancer one on one, but instead of a lap dance, be prepared for a conversation.&nbsp;</p>\n\n<p>At <a href="https://www.facebook.com/events/491348658262059/" target="_blank">the Feminist Strip Club&#39;s&nbsp;VIP Room</a>,&nbsp;each audience member&nbsp;&mdash;&nbsp;after getting checked by a bouncer&nbsp;&mdash;&nbsp;is given a menu of questions that the performer they are paired with has chosen in advance. You select a question as a starting off point for a 10-15 minute discussion, before heading &ldquo;backstage,&rdquo; where you&rsquo;re walked through the process of how dancers get paid. &ldquo;They are really getting that sort of behind the scenes information that if they are not in the industry they don&rsquo;t have,&rdquo; says Monica Sheets, the artist behind the project. &ldquo;I don&rsquo;t think most people know that dancers are independent contractors and are not actually being paid by the club.&rdquo;&nbsp;</p>\n\n<p>The Feminist Strip Club launched in March, when Sheets began a series of workshops with a group of adult entertainers at the Weisman Art Museum, as part of the Museum&#39;s Target Studio for Creative Collaboration. They talked and dreamed about what ideal working conditions for strippers would look like, collaborated on creating a magazine based on those ideas, and hosted the first VIP Room event. The Feminist Strip Club will return to the Weisman in 2020, but in the meantime, Sheets is hosting a VIP Room experience at her studio in the basement of the&nbsp;Casket Arts Building this weekend during the <a href="https://www.mplsart.com/events/open-casket-fall-2019" target="_blank">Open Casket</a> fall art&nbsp;festival.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MjAwMDAx/full.jpg" /><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MTAwMDAx/full.jpg" /><small>Participants converse with entertainers during the first incarnation of the VIP Room at the Weisman Art Museum. Photos by Boris Oicherman.</small></p>\n\n<p>Prior to Minneapolis passing its new <a href="https://lims.minneapolismn.gov/Download/File/2620/Licensing%20Regulations%20for%20Places%20of%20Adult%20Entertainment%20Ordinance%20RCA.pdf" target="_blank">adult entertainment ordinance</a> that improves the working conditions for erotic dancers, The Feminist Strip Club published Issue One of <em>The Grind: perspectives on stripping from the strippers themselves</em>.&nbsp;The zine mixes persuasive and informative writing about policy issues around strip clubs, historical perspectives on how policy has changed, and photographs that illustrate the current and recent working conditions of the clubs. There&rsquo;s a lengthy transcription from a conversation conducted with a group of entertainers about their dreams for what an ideal club would look like, complete with photographs of their drawings of those utopian strip clubs. There are sassy snap-backs to online reviewers, contact information for all of the Minneapolis City Council members, and a call to action, requesting folks to come out to a public hearing on a new city ordinance&nbsp;(which has since passed) that would improve the conditions of club workers.&nbsp;</p>\n\n<p>Sheets, an artist who uses art as a means for civic engagement, organized the collaboratively created zine with a group of current and former adult entertainers. The issue was put up for sale at local independent bookstores and galleries and at the Weisman, and distributed free at Minneapolis clubs. Some of the content also ran on Workday Minnesota&rsquo;s website.&nbsp;</p>\n\n<p>Sheets was a stripper herself as a teenager. &ldquo;It is something I&rsquo;ve been interested in for a long time,&rdquo; she says. &ldquo;It was a pretty pivotal experience for me in a lot of ways, particularly the responses I got from people when I&nbsp;would tell them that I had been a dancer when I went away to college&mdash; that&rsquo;s kind of what first sparked my interest in doing something around this topic.&rdquo;&nbsp;</p>\n\n<p>Sheets hasn&rsquo;t performed since she was around 22, but she&rsquo;s followed the industry over the years. Recently she noticed there&rsquo;s been a growing interest in labor issues generally, especially around sex work. An opportunity came up to work on a project through the Weisman, which meant she could compensate participant dancers in her project. &ldquo;It was an opportune time to do something that I had been thinking about for a long time,&rdquo; she says.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIxMTkwMDAx/full.jpg" /><small>The first issue of <em>The Grind</em>, a zine published by The Feminist Strip Club. Image courtesy of Monica Sheets.</small></p>\n\n<p>Sheets takes a participatory approach to her practice. In this case, she worked with five to eight dancers (more or less at different stages), and set up a framework where the dancers were driving much of the content and focus. &ldquo;It&#39;s not like I&rsquo;m saying, &#39;We&rsquo;re going to do this thing, and it&rsquo;s going to look like this at the end,&rsquo;&rdquo; Sheets says. &ldquo;I&rsquo;m saying, &lsquo;Who wants to get together and talk about these issues and have a talk with a labor law professor, talk with someone that does policy work on labor issues, and then we will figure out how we will come back to the public with this work that we&rsquo;ve done internally.&rsquo;&rdquo;</p>\n\n<p>Because Issue One of <em>The Grind</em> focused particularly on the new Minneapolis ordinance, the group decided they wanted to reach entertainers that work at the various clubs. That was a task easier said than done.&nbsp;</p>\n\n<p>&ldquo;We went to each of the clubs and tried to get into the dressing rooms, which has various levels of complication to it,&rdquo; Sheets says. &ldquo;It makes sense that they don&rsquo;t just let people back into the dressing rooms.&rdquo; The content of the magazine also wasn&rsquo;t exactly something they thought many club owners would support, so the group found ways to distribute the magazines without the owners and managers knowing what was inside.&nbsp;</p>\n\n<p>While the Feminist Strip Club doesn&rsquo;t have a formal partnership with Sex Workers Outreach Project (SWOP), a group that was instrumental in advocating for the new Minneapolis ordinance, Sheets says she met with the group towards the beginning of her project, to make sure she wasn&rsquo;t replicating&nbsp;work that was already being done.&nbsp;</p>\n\n<p>&ldquo;SWOP is a political policy based organization working on policy change, and certainly at the Feminist Strip Club, we are interested in that as well, but we are also interested in creating space for imagining alternatives and more big picture thinking,&rdquo; she says.&nbsp;</p>\n\n<p>Future issues of <em>The Grind</em>&nbsp;may take&nbsp;on other topics related to adult entertainment work, and Sheets envisions archiving the whole project down the road.</p>\n\n<p>In addition to the VIP Room performance&nbsp;&mdash; which takes place Friday night in Sheets&#39;s lower level studio&nbsp;&mdash;&nbsp;The Feminist Strip Club will also host a bake sale on Saturday afternoon, where visitors&nbsp;compete in a water and spoon race while wearing 6-inch heels. The winner gets their choice of baked goods.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIzMDcwMDAx/full.jpg" /><small>Photo by Boris Oicherman.</small></p>\n\n<p><em><a href="https://www.facebook.com/events/491348658262059/" target="_blank">The VIP Room</a> performance:&nbsp;Friday, Nov 1st, from 6:30-9:30pm;&nbsp;<a href="https://www.facebook.com/events/1533475963461981/" target="_blank">Cakewalk &amp;&nbsp;Bake Sale</a>: Saturday, Nov 2nd, 1:30-3:30pm. <a href="https://www.mplsart.com/events/open-casket-fall-2019" target="_blank">Casket Arts</a>, 681 17th Ave NE, Lower Level Studio 4 (downstairs, past the elevator).</em></p>\n\n<p><em>&nbsp;For more info on Monica Sheets, visit <a href="http://monicasheets.com" target="_blank">the artist&#39;s&nbsp;website</a>.</em></p>\n',
    created_date: '2019-10-31T03:22:50Z',
    is_published: true,
    modified_date: '2019-11-01T00:06:11Z',
    permalink: '/written/2019/10/feminist-strip-club/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-10-31T04:32:20Z',
      modified_date: '2019-10-31T04:32:20Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjE5MTcwMDAz',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjE5MTcwMDAz',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MTcwMDAz/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MTcwMDAz/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MTcwMDAz/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MTcwMDAz/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjE5MTcwMDAz',
    published_date: '2019-10-31T04:46:03Z',
    resource_id: 'QmxvZ1Bvc3QeHzU2ODIxNTY0Mjg4NTMyNDg',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU2ODIxNTY0Mjg4NTMyNDg',
    slug: 'feminist-strip-club',
    summary:
      'Labor practices, activism, and utopian strip clubs are on the menu at a participatory performance this weekend at Open Casket.',
    title: 'The Feminist Strip Club',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Bridget Kranz',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Bridget',
      lastname: 'Kranz',
      resource_id: 'VXNlch4fNTYzMTA0MDQyMDgzOTQyNA',
      resource_url: '/api/users/VXNlch4fNTYzMTA0MDQyMDgzOTQyNA',
      website: 'mailto: bridget.kranz@gmail.com',
    },
    author_resource_id: 'VXNlch4fNTYzMTA0MDQyMDgzOTQyNA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>When designing one-hour river cruises for colleagues, acquaintances, and friends, a few local artists latched on to the same quotation&nbsp;about the peacefulness of moving water.&nbsp;</p>\n\n<p>&ldquo;It&rsquo;s by a journalist named Hal Boyle,&quot; says artist Torey Erin.&nbsp;&quot;He said, &lsquo;What makes a river so restful to people is that it doesn&rsquo;t have any doubt. It is sure to get where it&rsquo;s going and it doesn&rsquo;t want to go anywhere else.&rsquo;&rdquo;</p>\n\n<p>Erin was one of four creatives invited by local artist Alyssa Baguss to design and facilitate hour-long boat rides aboard the Minneapolis Water Taxi as part of a new, open-ended art initiative called the <a href="https://www.instagram.com/openwaterprojectmn/" target="_blank">Open Water Project</a>. Baguss rented out the taxi &mdash; a solar-powered charter boat&nbsp;&mdash;&nbsp;and gave the cruise directors complete authority over how to create an audience and who to invite.</p>\n\n<p>Outside of the ship&rsquo;s six-passenger maximum and the ride&rsquo;s duration, there were virtually no parameters for the expeditions, which took place from mid- to late September.</p>\n\n<p>&ldquo;You should be relaxing and having fun; it should be an experiment. It&rsquo;s okay to play and fail,&rdquo; Baguss says of her goals for the series. She hoped the Open Water Project would fill a void in the world of grant funding, which tends to focus on more product-based work.&nbsp;</p>\n\n<p>&ldquo;There are these really great grants, but you really have to identify exactly what you&rsquo;re doing right now and fulfill that promise in the future,&rdquo; she says. &ldquo;Great things happen that nobody ever sees, and those are some of the most exciting things to me right now. What are people making that isn&rsquo;t for a show, that isn&rsquo;t for an audience?&rdquo;&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MTkwMDAx/full.jpg" /><small>Participants on Torey Erin&rsquo;s cruise settle into their surroundings and relax as the sun sets, before discussing the camera-less photographs they made as homework for the event. Erin, far right, sits next to Open Water Project director Alyssa Baguss. Across from them, participant Peng Wu takes in Erin&rsquo;s cruise before directing his own less than a week later. Photo by Seth Dahlseid.</small></p>\n\n<p>In choosing which four artists to invite, Baguss looked for people whose art she admired and who would be able to connect to and give feedback on the project. The majority of those who led cruises were already making work that would lend itself well to Open Water.</p>\n\n<p>Peng Wu is a self-described social practice artist, who often engages the community through discussion-based work. During the ride, he invited everyone to share stories of rivers that had been meaningful in their lives.</p>\n\n<p>&ldquo;The majority of Asian civilizations originated from or by rivers. That&#39;s how human civilizations developed,&rdquo; says Wu. &ldquo;[This piece] aimed to raise people&rsquo;s awareness of how much we have in common.&rdquo;</p>\n\n<p>In addition to discussing river-related memories, Wu also used the natural world as a backdrop for a 10-minute sunset practice. With the boat&rsquo;s motor turned off, participants reflected on the river in silence. While some of Wu&rsquo;s work involves a physical product, when creating on the Mississippi, he relied on the power and characteristics of the physical backdrop.&nbsp;</p>\n\n<p>&ldquo;In creating a structure, you enter it and you feel differently. Your activity inside is influenced by this space you&rsquo;ve created, by the materials you use,&rdquo; Wu says, of previous installation work. &ldquo;With the Open Water Project, I think you already have a very powerful environment.&rdquo;</p>\n\n<p>Ellen Mueller, Director of the MFA program at the Minneapolis College of Art &amp; Design, also chose to take advantage of the river&rsquo;s natural setting in planning her cruise.&nbsp;</p>\n\n<p>&ldquo;The idea of using the boat&rsquo;s natural relaxing environment to its greatest potential made a lot of sense to me,&quot; Mueller says. She explains her project as&nbsp;&quot;holding a brief discussion about leisure as resistance, which is an area of academic scholarship that&rsquo;s well researched and written about quite a lot, and then practicing being leisurely on the boat.&rdquo;&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MDIwMDAy/full.jpg" /><small>Ellen Mueller, center, holds up a zine she created on the topic of leisure as resistance. After introducing an overview of the subject, Mueller led the group in a discussion. Photo courtesy of Ellen Mueller.</small></p>\n\n<p>Mueller brought along a documentarian on her cruise, whose sole job was to take photos that could then assist her in applying to future grants and residencies. For Mueller, there are ways in which artists can and cannot escape a product-oriented system, although she&rsquo;s recently noticed a slight change in the valuation of social practice work among funding institutions.</p>\n\n<p>Erin went one step further and recorded audio&nbsp;as well, so that she could retain more information on the event going forward. Prior to the night of the cruise, she had asked participants to expose a photogram on light sensitive paper, then describe the undeveloped image to fellow passengers on the water taxi.&nbsp;</p>\n\n<p>While her initial intent was to develop the pictures in Mississippi River water, Erin says she&rsquo;s now leaning toward keeping the pages blank.&nbsp;</p>\n\n<p>&ldquo;I think the idea of the the ephemeral or having this sort of happening and not necessarily having an object outcome feels important,&rdquo; says Erin. &ldquo;As each artist was describing their photo in detail, each one of us on the cruise had a different idea created in our minds based on our own personal experiences or perceptions.&rdquo;</p>\n\n<p>Similar to looking at a painting, every boater on each of the four cruises is sure to have a slightly different interaction with and recollection of their time on the taxi. For many, the experience will live on only in memory, something Wu says may have impacted the way participants processed their interactions on board the ship.</p>\n\n<p>&ldquo;I loved the fact that the artwork itself was a transitional and ephemeral moment. I think that made the experience more beautiful,&rdquo; says Wu. &ldquo;You paid attention to the story you told and to the stories other people told.&rdquo;</p>\n\n<p>The fourth artist, Ruthann Godollei, chose to send her participants home with a more tangible reminder of their journey. As a printmaking professor at Macalester College in St. Paul, Godollei played to her medium&rsquo;s strength.&nbsp;</p>\n\n<p>For her project, which was also intensely place-based, Godollei made stencils of native flora and fauna from along the riverbanks. She then collected samples of different colors of mud that participants could use to make stenciled prints on paper.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ3MDIwMDAx/full.jpg" /><small>Participants Bonnie L. Gray and Keith Christensen apply Mississippi mud to their stencils, which outline native flora and fauna, on Ruthann Godollei&rsquo;s cruise. Photo by Ruthann Godollei.</small></p>\n\n<p>&ldquo;Prints are one way you can keep something and still give it away, and everybody gets the same thing really. It&rsquo;s got this generous aspect to it that I think is one of its virtues as&nbsp;a medium,&rdquo; she explains.&nbsp;</p>\n\n<p>In its essence, Open Water also strove to be generous, especially with its artists; Baguss rented out the taxi for each of the cruises, making the event free to those on board.&nbsp;</p>\n\n<p>&ldquo;It&rsquo;s certainly not as democratic as a museum, and I&rsquo;m okay with that because my focus was really on the artist,&rdquo; says Baguss. &ldquo;Maybe down the road these projects will lead to other things that are more accessible. I&rsquo;m seeing, if I just focus on the artist, how does that then affect the audience later on?&rdquo;</p>\n\n<p>Still, Baguss said next year she may try to bring in people from other professions. &ldquo;Maybe it&rsquo;s not an artist at all. How would that change things?&rdquo;</p>\n\n<p>Another aspect of next summer&rsquo;s programming that Baguss is grappling with is funding. She hopes to expand on this year&#39;s schedule, organizing&nbsp;eight to twelve&nbsp;rides throughout next summer.</p>\n\n<p>&ldquo;I want to continue this next year and think about, &lsquo;What is the bare minimum I need to continue this sort of work?&rsquo; So that it can happen but that it isn&rsquo;t shaped by the constraints of a funding source,&rdquo; she explains. &ldquo;I&rsquo;m going to try and be honest and ask for what I really want.&rdquo;</p>\n\n<p>In addition to not requiring a tangible product, Open Water also seeks to create intimate experiences as opposed to reaching as large of an audience as possible.&nbsp;</p>\n\n<p>&ldquo;When we work small, sometimes that isn&rsquo;t valued as much as working big,&rdquo; says Baguss. &ldquo;These small connections are so valuable because they ripple out. I hope this helps artists&rsquo; practices, or helps people think about the way they make their work.&rdquo;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMzMDQwMDAx/full.jpg" /><small>A quote on the tranquility of moving water by Hal Boyle resonated with Erin, Wu, and Baguss, who all took inspiration from it when crafting their cruise and interacting with participants. Photo by Peng Wu.</small></p>\n\n<p><em>For more info and documentation, follow <a href="https://www.instagram.com/openwaterprojectmn/" target="_blank">Open Water Project</a> on Instagram; to see more of Alyssa Baguss&#39;s work, visit <a href="http://cargocollective.com/alyssabaguss" target="_blank">her website</a>.</em></p>\n',
    created_date: '2019-10-02T18:17:00Z',
    is_published: true,
    modified_date: '2019-10-02T18:51:00Z',
    permalink: '/written/2019/10/working-small-&-staying-open-on-the-mighty-mississippi/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-10-02T18:50:55Z',
      modified_date: '2019-10-02T18:50:55Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MTgwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjE3MTgwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTgwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTgwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTgwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTgwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MTgwMDAx',
    published_date: '2019-10-02T18:51:00Z',
    resource_id: 'QmxvZ1Bvc3QeHzU2NTAyNzMwNDExMjEyODA',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU2NTAyNzMwNDExMjEyODA',
    slug: 'working-small-&-staying-open-on-the-mighty-mississippi',
    summary: "How public space and moving water shaped creativity in Alyssa Baguss's Open Water Project",
    title: 'Working Small & Staying Open on the Mighty Mississippi',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Russ White',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Russ',
      lastname: 'White',
      resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      resource_url: '/api/users/VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      website: 'http://www.russ-white.com/',
    },
    author_resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>The first thing to greet you at <a href="https://www.mplsart.com/events/history-is-not-here-art-and-the-arab-imaginary"><em>History Is Not Here</em></a>, only a few feet into The M&rsquo;s main gallery space, is the jowly, mustachioed face of Thomas Friedman. The popular <em>New York Times</em> columnist has been a prominent voice in Western punditry for the past two decades, offering expert analysis both to the public and to policy-makers alike on global trade, military intervention, and foreign policy in the so-called Middle East. He is affable, confident, and &mdash; according to Maymanah Farhat, one of the show&rsquo;s curators &mdash; &ldquo;notorious for always getting it wrong.&rdquo; Co-curator Heba Y. Amin agrees: &ldquo;His reporting is incredibly inaccurate.&rdquo;&nbsp;</p>\n\n<p>Friedman shows up as one half of a video installation by Cairo- and Chicago-based Hamdi Attia; the other half is an Egyptian doppelg&auml;nger of sorts &mdash; a widely popular television preacher named Amr Khaled, who has apparently modeled&nbsp;his public speaking style after&nbsp;Friedman&#39;s. The piece, <em>Two Performances.Ram</em>, jumps between footage of the two speakers, translating Friedman&rsquo;s English into Arabic subtitles and Khaled&rsquo;s Arabic into English.&nbsp;</p>\n\n<p>It&rsquo;s fitting that Friedman (a Minnesota native, no less) is the first to greet visitors to this exhibit: we probably have it all wrong, too. That the show opens with a profoundly ill-informed talking head subtitled in a language most Americans can&rsquo;t read perfectly crystallizes the miscommunication and misunderstanding about Arab identity this exhibition is addressing.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MTQwMDAx/full.jpg" /><small>Exhibition installation view. Foreground: Monira Al Qadiri,&nbsp;<em>Spectrum II</em>, 3D-printed plastic sculptures, 2016. Photo by the author.</small></p>\n\n<p><em>History Is Not Here</em> presents works by seventeen artists from all across Southwest Asia and North Africa, several&nbsp;of whom also call America home. Organized over the past two years by art historian Farhat and artist/educator Amin, the show consists of artists who have been featured in the pages of <em>Mizna</em>, a biannual art and literary journal now celebrating their twentieth year in print (Amin is also <em>Mizna</em>&#39;s current Curator of Visual Art). The journal is published by the St. Paul-based Arab-American nonprofit of the same name, whose mission, according to Executive and Artistic Director Lana Barkawi, is &ldquo;to provide our community a complicating narrative about who we are.&rdquo;</p>\n\n<p>&ldquo;This is not a show about&nbsp;artists who identify themselves as Arab,&rdquo; explains Amin, &ldquo;because in fact some of our artists aren&rsquo;t Arab. It&rsquo;s not a show about&nbsp;artists who identify themselves as necessarily &lsquo;Middle Eastern,&rsquo; because that&rsquo;s a descriptive geography that was imposed on the region. So it&rsquo;s really important to understand the mix between how geography was defined, how historiography is written, and how identities are relayed. That&rsquo;s really what we&rsquo;re trying to question.&rdquo;</p>\n\n<p>&ldquo;What is culture,&rdquo; Farhat adds, &ldquo;if it&rsquo;s not imagined by many different voices?&rdquo;</p>\n\n<p>The curators offer no Arab monolith, no singular&nbsp;voice but instead a chorus of wildly different styles, subjects, and media. There may be no history here, but there is humor, vibrancy, sensuality, urgency, and above all, individuality.</p>\n\n<p>It is a reflection of the real Arab world: a massive conglomeration of countries, cultures, and languages, some of them lumped under an &ldquo;Arab&rdquo; umbrella by the outside world simply because of geography. This is one half of what the curators term &ldquo;the Arab Imaginary&rdquo;: the concocted fables of Western understanding, perhaps best seen in the terrorists and taxi drivers of Hollywood pablum. The other half of this Imaginary comes from the Arab world&nbsp;itself: it&rsquo;s what these artists show us from their own perspectives. Massive oil rig drill bits are reimagined as pearlescent pottery, a Kalashnikov rifle becomes a literal crutch, and in a haunting black and white short film, a lone woman waits on a Palestinian tarmac with a bouquet of flowers for Amelia Earhart, who never shows up. The film, by Emily Jacir, is itself a historical mashup,&nbsp;a bit of high concept romance noir in which East never quite meets West, at least not before the flowers wilt.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MTQwMDAx/full.jpg" /><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MTEwMDAy/full.jpg" /><small>Top:&nbsp;Emily Jacir;&nbsp;<em>Lydda </em><em>Airport</em> (installation view); single-channel video, sound; 2009. Photo by the author. Bottom:&nbsp;Ala Younis;&nbsp;<em>Plan (fem.) for Greater Baghdad</em>;&nbsp;two- and three-dimensional&nbsp;prints, drawings, archival&nbsp;and found materials,&nbsp;and model; 2018. Image courtesy of the artist.</small></p>\n\n<p>One stand-out in the show is a series of photographs by Raed Yassin: two dozen self-portraits of the artist, shirtless and hirsute, holding different vegetables in his mouth or wearing them around his neck. The produce are commonplace but not indigenous to Europe or North America &mdash; foreign transplants that have been welcomed to Western dinner tables more readily than the people who originally farmed them. The series is absurdly funny and playfully erotic but confrontational in its melancholy. Yassin&rsquo;s eyes look back at us from behind the lettuce, broccoli, and starfruit, alternating between a twinkling &ldquo;come hither&rdquo; glance and something much more deadpan. (Look for a billboard of Yassin&rsquo;s images to show up at the intersection of University and Vandalia in the coming weeks. You won&#39;t be able to miss it.)</p>\n\n<p>Language forms a through-line in the exhibit, from Friedman in Arabic and Khaled in English to Zineb Sedira&rsquo;s <em>Mother Tongue</em>, a meditation on migration&rsquo;s effects on the artist&rsquo;s family:&nbsp;three generations of women who all speak different languages. Words and voices pop up in several other works as well, but this fascination with linguistic multiplicity is perhaps best expressed through a collection of small, scrappy drawings of ziggurats by Walid Siti, an Iraqi-Kurdish artist based in London. The sketchy scaffolds of black and white strokes on brown paper form teetering triangular structures, clearly referencing the Tower of Babel. It is an ancient story &mdash; evident in Sumerian and Assyrian mythologies as well as in the <em>Genesis</em> narrative &mdash; treating languages as a curse, a barrier inflicted by the divine as punishment for human hubris. This mythological Arab monolith, here scrawled repeatedly in crayon and acrylic by Siti, was struck down by the Almighty, scattering humans far and wide and confusing them with a thousand tongues. The curators have turned that myth on its head, celebrating that confusion. Complicating the narrative,&nbsp;as Barkawi said.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MTEwMDAx/full.jpg" /><small>Walid Siti, from&nbsp;<em>Tower Series</em>,&nbsp;acrylic and crayon on paper, 2016. Image courtesy of the artist.</small></p>\n\n<p>To be human is to be confused, and my guess is that many Minnesotans of European heritage will be initially puzzled by this show, as was I. It is in many respects foreign &mdash; full of references, characters,&nbsp;and alphabets unknown to many Americans. And, if we&#39;re being honest, the language of contemporary art is not always the most accessible either.&nbsp;But the work here is entirely human, speaking with a multitude of tongues, voices, and bodies. It tells the stories of heroes and villains, of children and parents, of women overshadowed,&nbsp;of artifacts plundered,&nbsp;of people reckoning with histories that have been stolen from them piecemeal, plundered for museum collections&nbsp;and op-ed columns, and critiqued by fools like me, a monolingual American with an expired passport.</p>\n\n<p>In truth, the world is a vast and cacophonous place. Installing&nbsp;a slice of that world inside a museum invariably recontextualizes the objects in question, be they contemporary paintings or stolen antiquities, sometimes for better and sometimes for worse but always through a lens. The title of this show remains an enigma, but I think it applies, in part, to museums themselves. The idea that history is not here &mdash; a hard personal truth for any migrant &mdash; is also true for an art exhibition. Although you can learn a lot from engaging with this show, don&rsquo;t expect a singular history lesson or&nbsp;a definitive cultural anthropology. It&rsquo;s more complicated than that, if you can imagine.</p>\n\n<p>&nbsp;</p>\n\n<p><a href="https://www.mplsart.com/events/history-is-not-here-art-and-the-arab-imaginary">History Is Not Here</a>&nbsp;<em>is on view at the Minnesota Museum of American Art through January 5, 2020. Gallery hours: Wed-Sun, 11am-5pm; open 11am-8pm&nbsp;on Thursdays. Admission is free. For a full list of programming related to the exhibition, visit <a href="https://mmaa.org/historyisnothere/" target="_blank">mmaa.org</a>.</em></p>\n\n<p><em>Banner image:&nbsp;Raed Yassin,&nbsp;</em>Self Portraits with Foreign Fruits and Vegetables<em> (detail of installation view),&nbsp;24 inkjet prints on paper, 2011. Photo by the author.</em></p>\n',
    created_date: '2019-09-25T01:24:34Z',
    is_published: true,
    modified_date: '2019-09-26T12:27:21Z',
    permalink: '/written/2019/09/the-gallery-of-babel-the-arab-imaginary-at-the-m/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-09-25T03:38:01Z',
      modified_date: '2019-09-25T03:38:01Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjM3MDYwMDAz',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjM3MDYwMDAz',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM3MDYwMDAz/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM3MDYwMDAz/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM3MDYwMDAz/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM3MDYwMDAz/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjM3MDYwMDAz',
    published_date: '2019-09-25T01:41:38Z',
    resource_id: 'QmxvZ1Bvc3QeHzU3NjExOTU5MDY2OTUxNjg',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU3NjExOTU5MDY2OTUxNjg',
    slug: 'the-gallery-of-babel-the-arab-imaginary-at-the-m',
    summary:
      "'History Is Not Here: Art and the Arab Imaginary' is on view at The Minnesota Museum of America Art through January 5th, 2020.",
    title: 'The Gallery of Babel: Language, culture, and the Arab Imaginary at The M',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Russ White',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Russ',
      lastname: 'White',
      resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      resource_url: '/api/users/VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      website: 'http://www.russ-white.com/',
    },
    author_resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>There&#39;s nothing quite like money, is there? It inspires greed, envy, shame, and resentment;&nbsp;it also enables&nbsp;charity, investment, success, and growth. It&#39;s made of pennies and paper and&nbsp;ones and zeros, tangible but fluid, and you can trade it for just about everything under the sun except true love and&nbsp;endless youth (though enough of it could&nbsp;get you close to both).&nbsp;</p>\n\n<p>Opening at SooVAC this Friday is an exhibition&nbsp;of what a select few have traded their money for: art.&nbsp;Adorning the&nbsp;walls of <em><a href="http://www.mplsart.com/events/collect-call-4">Collect Call 4</a></em>&nbsp;are private art collections, offering glimpses into how nearly two dozen collectors curate their own homes. The exhibition is a celebration of tastes and obsessions, featuring work ranging from emerging&nbsp;local artists to international heavyweights, traditional paintings to obscure crafts (previous <a href="https://www.mplsart.com/written/2015/09/collect-call-2-soovac-2015/"><em>Collect Call</em>&nbsp;iterations</a> have featured displays of helmets, embroidered maps,&nbsp;and antique rug-beaters, among other oddities).&nbsp;</p>\n\n<p>You get the sense that building an art collection is a very personal practice, and a very rewarding one at that, for both the patrons, the art, and the artists themselves. The show is a celebration of trading money for something even&nbsp;better, ranging from the&nbsp;wildly expensive down to the widely affordable.&nbsp;So I thought I&#39;d put a simple question to some of the collectors in SooVAC&#39;s show:</p>\n\n<p><strong>What does it mean to buy a work of art?</strong></p>\n\n<p>I was curious how each collector makes their decisions, what draws them to purchase art, and what meaning they derive from the purchase and the purchasing... in effect, what makes them &quot;Collectors.&quot;</p>\n\n<p>The other side of that equation is the artist, the craftsperson, the maker. So I put a similar question to three local artists:</p>\n\n<p><strong>What does it mean to sell a work of art?</strong></p>\n\n<p>Their answers were personal, poetic, and vulnerable,&nbsp;actually finding great meaning and connection in the sale of a work. Transcendence in the&nbsp;transaction, you might say. Moral of the story: buy more art, make more art, and, as Brad Thomas notes below, always pay it forward.</p>\n\n<p>&bull;&bull;&bull;&bull;</p>\n\n<h2><strong>Tom Arneson, </strong>Collector</h2>\n\n<p><strong>What does it mean to buy a work of art?</strong></p>\n\n<p>&quot;I like to be surrounded by things that I find beautiful and make an emotional connection with me. That has been a constant over the years, and I have consistently wanted to celebrate and promote local culture &mdash; which for me means Minnesota. But in some other ways the focus of my art purchasing has changed over time.</p>\n\n<p>&quot;Initially my interest was artisans &mdash; people who make functional, beautiful things. I bought pottery, household goods, and clothing I could use in daily life. I particularly enjoyed meeting the artisans as I traveled the state, and I bought partly with the intent of promoting purchase of their work. I created <em>The North Country Artisan Directory</em> and got a booth at the Minnesota State Fair to showcase the items and sell the directory.</p>\n\n<p>&quot;As my interests expanded to include visual art more generally, my initial focus was the history of art-making in the state. I dove into learning about Minnesota artists, galleries, groups, and schools &ndash; especially what was happening during the 1920s -&nbsp;1960s. I pretty much purchased a piece by every artist I learned about as an example of their work and as a touchstone to their life. My hope was to get something that represents each artist at their best and really spoke to me in some way. But of course one can only purchase what is available, so occasionally I purchase what I consider a better piece by an artist and try to find a new home for something by that artist I already own. For artists I am particularly interested in who have major different styles or types of work, I acquire multiple pieces. Over time I developed a large collection by artists ranging from internationally known to those who are little remembered &mdash; even though they were quite good. Unfortunately, there are all too many in the latter category!</p>\n\n<p>&quot;As my collection of vintage art grew I became increasingly interested in contemporary Minnesota artists. The dynamic here is much different. You can get to know an artist and follow their work over time. I take particular pleasure in purchasing something I really like that marks a new direction or synthesis in an artist&rsquo;s practice. I enjoy going to exhibitions, visiting studios, and occasionally buying things &ndash; and I hope it also provides support and encouragement to artists, galleries, and arts organizations.&nbsp;</p>\n\n<p>&quot;I put more money into art than into living space, so I live in a relatively small condo! It is filled to overflowing. In recent years I have been offering things from my collection to local museums and donating money to museums to buy specific pieces of art or by certain artists. I have developed friendships with others through art collecting/celebrating/promoting interests, and I encourage others to follow this path. It is personally rewarding and good for the community and it is a possibility for many people. Great wealth is not required; passion and curiosity are the necessities!&quot;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUxMDEwMDAx/full.jpg" /><small>Justin Terlecki, <em>Crosby</em>, from the collection of Tom Arneson.</small></p>\n\n<p>&bull;&bull;&bull;&bull;</p>\n\n<h2><strong>Mark Addicks &amp; Tom\u200b Hoch, </strong>Collectors</h2>\n\n<p><strong>What does it mean to buy a work of art?</strong></p>\n\n<p>&ldquo;Buying art is, for us, choosing to have a life long relationship with an artist and a particular piece of work.&nbsp;This often happens impulsively, when we see a piece that pulls us in and has something about that encourages looking deeper and deeper at the piece.&nbsp;That tells us this particular expression from the artist will intrigue us and allow us to continue to explore its meaning over time.&nbsp;Great art has a way of leading you forward and growing with you as you discover something that you never noticed from the first viewing.&nbsp;Buying art is receiving a lifetime gift from the artist.</p>\n\n<p>&quot;Maybe one final thought that continually haunts me is how the artist feels about this process. Art is very personal and takes a lot of time, emotion, thought, etc. to produce, sometimes over weeks, months, and even, years, when an artist has worked slowly to develop a piece into its final form.&nbsp; Given that, we have often wondered how the artist feels about this part of the equation. Does the artist ever want to go back and revisit the piece?&rdquo;</p>\n\n<p>&bull;&bull;&bull;&bull;</p>\n\n<h2><strong>Kathryn Hanna, </strong>Collector</h2>\n\n<p><strong>What does it mean to buy a work of art?</strong></p>\n\n<p>&ldquo;Growing up in a small town in Southern Minnesota, I didn&rsquo;t have much exposure to art. On the walls of my parents&rsquo; home were a couple of prints of European city scenes and a painting on black velvet from Latin America.&nbsp;In college I had artist friends (I was in the sciences) who sparked my interest in some of their work.&nbsp;I became good friends with Jerry Ott (currently living in Duluth) who is well known for his photorealism-style paintings.&nbsp;My former husband and I had a darkroom, and we would develop and print negatives of Jerry&rsquo;s photo sessions with his models. He was a pioneer in using the air brush technique to make exquisite paintings.&nbsp;I admired his creativity and talent, which led me to begin collecting Jerry&rsquo;s work and that of his friends. &nbsp;</p>\n\n<p>&quot;I like having a variety of interesting, witty, colorful artwork on my walls. I once moved into a small apartment and neglected to immediately hang my art collection.&nbsp;After a couple of weeks I couldn&rsquo;t stand the empty walls and quickly hung many pieces.&nbsp;I really enjoy being surrounded by and looking at art in all its forms.&nbsp;</p>\n\n<p>&quot;I have lived in Minnesota my entire life and have found there are many talented artists in our midst. I enjoy meeting artists and learning about their perspective and thought process in producing a work of art. As residents of Minnesota we&rsquo;re lucky to have many opportunities to meet artist at events such as the St. Paul Art Crawl, St. Croix Pottery Tour, Art-A-Whirl, gallery openings, Art Along the Lake, etc. It was never my intention to create a &#39;collection.&#39; I would just acquire what I liked and my walls and table tops started to fill up.&nbsp;</p>\n\n<p>&quot;In the bigger picture (no pun intended) I believe it is important to support the arts, for it&rsquo;s the arts that are a key aspect that separate us from other species. Supporting artists adds to the vitality of our local communities and to our quality of life.&quot;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ1MDIwMDAx/full.jpg" /><small>Ningiukulu Teevee, <em>Swimming Walrus</em>, from the collection of Kathryn Hanna.</small></p>\n\n<p>&bull;&bull;&bull;&bull;</p>\n\n<h2><strong>Terrence Payne,&nbsp;</strong><a href="https://www.terrencepayne.com" target="_blank">Artist</a></h2>\n\n<p><strong>What does it mean to sell a work of art?</strong></p>\n\n<p>&ldquo;I think about this often while I am creating new work, but basically it boils down to putting out the fires of my own anxieties that build up over the time it takes to conceptualize and create art in preparation for an exhibition.&nbsp;My main goal as I begin any new group of work is to challenge myself to push the work in new directions and try to leave my comfort zone, which is not always easy to do but is alway more fun for me than rehashing old ideas and serving up more of the same.&nbsp;I have a lot of fun and try to maintain an anything goes attitude as I move towards the deadline of an upcoming exhibit, making art for myself and the joy it brings me.&nbsp;Unfortunately, a switch gets flipped a shortly before my deadline draws near and my studio gets crowded with doubt. Everything I have created to that point becomes an uncomfortable stranger to me.&nbsp;I have gotten better at trusting my instincts over the years, but it is still hard to overcome the feeling that I may have misstepped, but at a certain point you have no choice but to move forward and hope for the best.</p>\n\n<p>&quot;When a piece of art sells as a result of this process, all of that doubt magically disappears, allowing me to put down my anxieties for a moment and giving&nbsp;me the confidence to get back on the wheel and start the whole thing over again.&quot;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM3MDQwMDAx/full.jpg" /><small>Terrence Payne, <em>I Don&#39;t Think It&#39;s Helping</em>, oil pastel on paper, 42 x 53&quot;, 2018.</small></p>\n\n<p>&bull;&bull;&bull;&bull;</p>\n\n<h2><strong>Brad Thomas</strong>,&nbsp;<a href="http://www.mnartists.org/pete-driessen" target="_blank">Artist</a></h2>\n\n<p><strong>What does it mean to sell a work of art?</strong></p>\n\n<p>&quot;In 1993 &mdash; just a year out of undergraduate school &mdash; I made my first sale to a collector. In exchange for my art, I received a check for $300. Not bad considering I was employed at a cabinet shop making $5 an hour. If you do the math, it would have taken me 60 hours of skilled carpentry time to equal the remuneration for a small sculptural work that took maybe 12 hours to make with materials costing around $30. While it is important for an artist to be careful with their money, this initial sale represented much more than the numbers might convey.</p>\n\n<p>&quot;First, the work the collector bought from me that day was the result of several years of dedicated creative inquiry. Second, my work was going to be displayed in his home along with works by notable contemporary artists such as Lisa Milroy, Frank Stella, and Robert Graham. Finally, the work was going to have a life outside my studio and remain in the care of someone who thought enough of the work (and enough of me) to invest.&nbsp;</p>\n\n<p>&quot;Sure, that income boost was nice, but it&rsquo;s always fleeting as funds get reinvested into the practice or spent on basic necessities. What doesn&rsquo;t go away is the <em>confidence boost</em> that your ideas and the aesthetic realization of those ideas are valued by someone other than your mother. Over the coming years, a few more works were acquired by the same collector and each studio visit was enriched with conversations about contemporary art, his days as an advertising executive in New York and London, and his other passion: Ragtime music and early American Jazz. He was a raconteur of the highest order and I learned a lot.</p>\n\n<p>&quot;Support for any artist comes in a wide variety of forms. Selling the fruits of one&rsquo;s labor is but one facet. I remain ever grateful for every form of support I have received and the most important way to honor that is to pay it forward. While I have been fortunate to buy the work of other artists, I feel it&rsquo;s of equal value to alert fellow artists to exhibition opportunities, job openings, or when appropriate, facilitate introductions with other arts professionals.&nbsp;</p>\n\n<p>&quot;Being an artist will forever be about maintaining a healthy perspective within the big picture. The best way I have found to position myself within that picture it is to value every positive development because there will be setbacks aplenty. Infusing your daily life and practice with an ongoing sense of gratitude is absolutely essential. One practical way is to keep a running list of all those who have made a positive impact along your journey. Occasionally dropping those individuals a Thank You note out of the blue is not only for the benefit of the recipient but also for the grateful sender.&quot;</p>\n\n<div><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE5MDcwMDAx/full.jpg" /><small>Brad Thomas, <em>Buffo</em>,&nbsp;Four-color print on sculpted Sintra with acrylic, ed. of 25, 26 x 37 x 3&quot;, 2018.</small></div>\n\n<p>&bull;&bull;&bull;&bull;</p>\n\n<h2><strong>J. Wren Supak,&nbsp;</strong><a href="http://jwrensupak.com" target="_blank">Artist</a></h2>\n\n<p><strong>What does it mean to sell a work of art?</strong></p>\n\n<p>&quot;It means:</p>\n\n<p>&quot;Validation, i.e., encouragement, support, belief, &#39;keep at it.&#39;&nbsp;</p>\n\n<p>&quot;Material support&mdash;most vital within a capitalist society.</p>\n\n<p>&quot;Loss&mdash;I don&rsquo;t want to live with most of the artwork that I make, but I do want to make it. Sometimes I want to finish it and destroy it, keep it, or give it as a gift. But&nbsp;most of the time, I want to send it out in the world to have a life of its own. However, unless it is a photo print, then when I sell it I know that I will, except for some exceptions, likely never see the piece again. I feel sad to see it go but gratified that when I am no longer around, my work will be. Sometimes I think of the artworks, out there, wondering how&nbsp;or what they are doing;&nbsp;are they holding up well?</p>\n\n<p>&quot;I will make the work (using my time, energy and spirit), preserve it with sealant and so forth, photographically document it (hire someone to do that), in some cases mount and frame it, enter the work into exhibitions, look at it, think about it, write about it to describe to people what it is about&nbsp;and why I make it. I will invite other artists and critics to look at the work and critique it. I will invite interested people, collectors, etc. to the studio or the show to see the art, and spend time with those people. That&#39;s a lot of life and energy to expend on a picture.</p>\n\n<p>&quot;Meeting a collector, or a possible collector, is exciting. It is not quite like a job interview, or a date. It is more like meeting a new client, or maybe a friend; it requires care. You think about the meeting in advance and ensure that you are prepared, maybe have some food handy for your guest, what do they like to eat? I try to look presentable. To prepare for meeting with a possible collector I think about the work they&#39;re interested in, and whatever I know about their taste, I imagine the kinds of questions that they will have for me about the materials, process, and meaning of the work. I speak to their interest. I spend time with the person getting to know them. The artwork manufactures these opportunities to get to know people that I may not otherwise meet, and the piece is what has brought us together.</p>\n\n<p>&quot;When someone wants to spend time with the work, I encourage conversation. It helps me to learn about how the buyer perceives the piece or my work in general. Sometimes the conversation rolls out to what abstraction is, the history of it, how my work fits in, which for me is a question of how do I fit into this world? Knowing someone wants to spend time with&nbsp;and maybe collect my artwork is a type of &#39;fitting in&#39;&nbsp;that feels pretty great if you want the truth.</p>\n\n<p>&quot;Speaking of sales, I am represented by <a href="https://artists-studios.com/j-wren-supak/" target="_blank">AS | Artist Projects NYC/Paris</a>.&quot;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTYwMDAx/full.jpg" /><small>J. Wren Supak,&nbsp;<em>Afterimage 6 (Where to?),</em>&nbsp;oil on canvas, 48&nbsp;x50&rdquo;, 2017.</small></p>\n\n<p>&bull;&bull;&bull;&bull;</p>\n\n<p><em>This&nbsp;is part of an ongoing series of articles, asking simple questions and getting complex answers from&nbsp;local artists, thinkers, and makers. You can read our other installments <a href="http://www.mplsart.com/written/2019/03/question-answers-what-is-your-job-as-an-artist/">here</a> and <a href="http://www.mplsart.com/written/2019/01/question-answers-what-is-the-purpose-of-an-art-exhibition/">here</a>.</em></p>\n\n<p><a href="http://www.mplsart.com/events/collect-call-4">Collect Call 4 </a><em>opens&nbsp;Friday, September 13th&nbsp;from 6&nbsp;- 9pm&nbsp;and will be on view through September 29th. Gallery hours are Wednesdays 11am-5pm, Thursdays &amp; Fridays 11am-7pm, and Saturdays &amp; Sundays 11am-4pm.</em></p>\n\n<p><em>Banner image: Xavier Tavera, </em>Unseen<em>, from the collection of Dr. Herman Milligan, Jr.&nbsp;and Constance Osterbaan-Milligan.</em></p>\n\n<div>&nbsp;</div>\n',
    created_date: '2019-09-10T19:35:47Z',
    is_published: true,
    modified_date: '2019-09-11T16:51:08Z',
    permalink: '/written/2019/09/question-answers-what-does-it-mean-to-buy-and-sell-art/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-09-11T16:42:33Z',
      modified_date: '2019-09-11T16:42:33Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MTYwMDAy',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjE3MTYwMDAy',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTYwMDAy/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTYwMDAy/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTYwMDAy/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTYwMDAy/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MTYwMDAy',
    published_date: '2019-09-11T16:48:18Z',
    resource_id: 'QmxvZ1Bvc3QeHzU3MDM4NDE4ODY1MDI5MTI',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU3MDM4NDE4ODY1MDI5MTI',
    slug: 'question-answers-what-does-it-mean-to-buy-and-sell-art',
    summary:
      'As SooVAC opens their fourth Collect Call exhibit this weekend, we ask collectors and artists for their thoughts about buying and selling works of art',
    title: 'Question & Answers: What does it mean to buy (and sell) art?',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Sheila Regan',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Sheila',
      lastname: 'Regan',
      resource_id: 'VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
      resource_url: '/api/users/VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
      website: 'https://hyperallergic.com/author/sheila-regan/',
    },
    author_resource_id: 'VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>Artist Alison Price is an idea&nbsp;person. &ldquo;I just come up with wild ideas and then I try to talk people into it,&rdquo; she says. &ldquo;That&rsquo;s my thing.&rdquo;&nbsp;</p>\n\n<p>An artist who works mostly in abstraction, Price creates highly textured paintings. She was featured on <a href="https://www.tpt.org/mn-original/profile/alison-price/" target="_blank">Minnesota Original</a> last year, and received the Judge&rsquo;s Choice awards at a recent competition at the Hallberg Center for the Arts&nbsp;in Wyoming.&nbsp;</p>\n\n<p>She&rsquo;s also got a knack for coming up with creative exhibition ideas. For instance, she has organized the <em>SweetArt Salon des Refus&eacute;s</em>, (&ldquo;that&rsquo;s the <em>Wintertide</em> rejects,&rdquo; she says, referring to NEMAA&#39;s&nbsp;juried biennial). She also has done a similar <em>Refus&eacute;s</em>&nbsp;show for artists that didn&rsquo;t get into the State Fair Fine Art exhibition, called <em>Salon des&nbsp;Refus&eacute;s on a Stick</em>.</p>\n\n<p>Price is also a member of NEMAA&nbsp;&mdash; the Northeast Minneapolis Arts Association, the nonprofit responsible for nearly 25 consecutive Art-A-Whirls, among other events&nbsp;&mdash;&nbsp;and her latest idea is a fundraiser&nbsp;for the organization.&nbsp;</p>\n\n<p>&ldquo;As a full-time practicing artist, I get asked to donate work all the time&nbsp;to great causes, and I&rsquo;m happy to do so,&rdquo; Price says. &ldquo;But why don&rsquo;t we donate to our own cause this time?&rdquo;&nbsp;</p>\n\n<p>Price found inspiration in Art 4 Shelter&rsquo;s annual art fundraiser, where artists donate small works to raise&nbsp;money for Simpson Housing Services. &ldquo;I thought, we could do something like that,&rdquo; Price says. &ldquo;With Art 4 Shelter, artists are donating to a very worthy cause. Here we are also donating to a very worthy cause, which is ourselves.&rdquo;&nbsp;</p>\n\n<p>It&rsquo;s a flip from what is normally asked of artists. &ldquo;Artists tend to be really generous by nature, and this is actually helping ourselves succeed and thrive and making sure that Art-A-Whirl is well funded for 2020,&rdquo; Price says.&nbsp;</p>\n\n<p>Price also thought of the Foot in the Door exhibition at the Minneapolis Institute of Art, where once every 10 years, artists from all around the state submit works of art that fit within one cubic foot.&nbsp;</p>\n\n<p>Her mind started churning, thinking about how NEMAA could take a similar approach, and&nbsp;she brought the idea to Anna Becker, NEMAA&rsquo;s Executive Director, who was immediately&nbsp;on board. NEMAA&nbsp;10X10 was born.&nbsp;</p>\n\n<p>&ldquo;These ideas just happen,&rdquo; says Price, &ldquo;and I love how nimble and organic&nbsp;and fresh our board is, and our volunteers, that they just kind of jumped right in.&rdquo;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMxMTgwMDAx/full.jpg" /><small>NEMAA&nbsp;artist members building excitement for the inaugural&nbsp;10x10&nbsp;show.</small></p>\n\n<p>Becker came up with the idea that the fundraiser could double as the organization&rsquo;s fall arts show. &ldquo;Since we&rsquo;re not doing a fall fine arts show,&rdquo; Becker says, &ldquo;we wanted to do an event that shows the range and diversity of artists that live and work in Northeast, and also fundraise for us and do something really cool and fun.&rdquo;&nbsp;</p>\n\n<p>In the past, NEMAA has hosted a fall event called Fall Fine Arts, later renamed&nbsp;Autumn Northeast. &ldquo;We weren&rsquo;t going to be able to do Autumn Northeast because it&rsquo;s hard to find space for 150&nbsp;works of art,&rdquo; Becker says. &ldquo;Especially because it&rsquo;s supposed to be a survey of all of our artists, and we&rsquo;ve got 800 artist members.&rdquo;&nbsp;</p>\n\n<p>For 10X10, each NEMAA member is invited to donate one or more&nbsp;pieces of work&nbsp;which have&nbsp;to fit in a 10x10&quot; cube. &ldquo;So if a jeweler has a pair of&nbsp;earrings, or a sculptor has a small maquette or a mockup &mdash;&nbsp;things like that can be donated,&rdquo; Price says. &ldquo;This could be a sketch, this could be a prototype, this could be a small work &mdash; some kind of creative spark they are willing to share. Then we will show them all at the Northrup King building in Gallery 332 and each will be for sale for $35.&rdquo;&nbsp;</p>\n\n<p>With no labels on the walls, attendees of the fundraiser won&#39;t know who made the art; they will&nbsp;only find out after they purchase. According to Becker, it&rsquo;s a chance to use social media to amplify the name of the artists and the works, by adding an element of surprise.&nbsp;</p>\n\n<p>&ldquo;It&rsquo;s kind of a mystery show,&rdquo; Becker says. &ldquo;People come in, and they see all this work and they pick something they love, or they pick something that really moves them. They may come in and pick an artist they follow already, but the idea is you choose something solely on this connection you have to it.&rdquo;&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTQwMDAx/full.jpg" /><small>NEMAA members in their studios in the Northrup King Building, Casket Arts Building, and California Building.</small></p>\n\n<p>Becker said what&rsquo;s great about 10X10 is that it&rsquo;s accessible. &ldquo;This is for people that love art, love following art, and who don&rsquo;t have any art,&rdquo; she says. &ldquo;So at the end of the night, there are going to be hundreds of pieces of original artwork that are going to find homes.&rdquo;&nbsp;</p>\n\n<p>NEMAA artists are still in the process of donating their pieces, but Becker and Price say the work will be a mix of established artists and emerging members. There are also donations from the new Studio 400, a Public Functionary project led by artist Leslie Barlow, which is a space for emerging artists of color and marginalized artists.&nbsp;</p>\n\n<p>10X10 won&rsquo;t have an admission fee, but there is a preview hour prior to the event, where attendees get first dibs on the artwork &mdash;&nbsp;<a href="https://nemaa.org/product/nemaa-10x10-special-preview-hour-ticket/" target="_blank">tickets</a> cost&nbsp;$50 and come&nbsp;with a free beverage at the bar. Other than that, all of the works&nbsp;will be available on a first-come, first-served basis throughout the one-night event. KFAI will be on hand to provide some DJ tunes, and there will be a cash bar throughout the evening.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIxMTQwMDAx/full.jpg" /></p>\n\n<p><small>NEMAA&nbsp;boasts over 800 artist members, located everywhere from the flagship studio buildings in Northeast to at-home studios in, around, and far beyond the Twin Cities.</small></p>\n\n<p><em><a href="https://www.mplsart.com/events/nemma-10x10">NEMAA 10x10</a> takes place from 5-9 pm&nbsp;on Saturday, September 21, at the&nbsp;Northrup King Building, 1500 Jackson St., NE. Preview 4-5pm: $50, free after 5 p.m. More info at <a href="https://nemaa.org/nemaa_10x10/" target="_blank">nemaa.org</a>.</em></p>\n\n<div>&nbsp;</div>\n',
    created_date: '2019-09-10T21:09:59Z',
    is_published: true,
    modified_date: '2019-09-11T14:38:33Z',
    permalink: '/written/2019/09/nemaa-10x10-putting-the-fun-back-in-fundraiser/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-09-11T14:29:10Z',
      modified_date: '2019-09-11T14:29:10Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MTUwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjE3MTUwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTUwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTUwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTUwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MTUwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MTUwMDAx',
    published_date: '2019-09-11T14:29:45Z',
    resource_id: 'QmxvZ1Bvc3QeHzU3MzUxMzMzNzQwNTQ0MDA',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU3MzUxMzMzNzQwNTQ0MDA',
    slug: 'nemaa-10x10-putting-the-fun-back-in-fundraiser',
    summary:
      'The Northeast nonprofit explores a new model for fundraising, hosting a group show that combines art, anonymity, and affordability: every piece is $35.',
    title: 'NEMAA 10X10: Putting the "fun" back in fundraiser',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Sheila Regan',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Sheila',
      lastname: 'Regan',
      resource_id: 'VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
      resource_url: '/api/users/VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
      website: 'https://hyperallergic.com/author/sheila-regan/',
    },
    author_resource_id: 'VXNlch4fNTY1NjY5MzUyMjMwMDkyOA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>The majority of Jovan C. Speller&rsquo;s 15-year visual arts practice has been rooted in photography and film, often using traditional photographic processes. That means she&nbsp;uses a dark room a lot, something that got quite a bit more complicated when she had a child just over a year ago.&nbsp;</p>\n\n<p>&ldquo;Being a mom, I need a safer, more kid-friendly practice,&rdquo; she says. Speller has been exploring ways to expand her medium repertoire, including in the areas of sound and installation.&nbsp;</p>\n\n<p>An opportunity came along through Second Shift, a new studio space and residency program on the east side of Saint Paul. It&rsquo;s a nonprofit organization founded by artist Chris Larson and his wife, Kriss Zulkosky, a nurse in the Birth Center at Regions Hospital. Created to provide space and resources to women and nonbinary working artists in the Twin Cities, the organization&rsquo;s new residency program provides workspace, mentorship, as well as a stipend.&nbsp;</p>\n\n<p>Larson says he and Zulkosky chose to create a specific focus toward women and nonbinary artists to counteract an unlevel playing field active in the art world for a long time.&nbsp;</p>\n\n<p>&ldquo;I have male privilege,&rdquo; Larson says. &ldquo;I&rsquo;ve seen who gets recognized in museums. The scales seem to be off, and have been for a long time.&rdquo;</p>\n\n<p>Besides studio space, Larson says Second Shift also has a mentorship component, providing professional development and networking opportunities. Through Larson&rsquo;s connections with a Walker board member, for example, the fellows were invited to a dinner with the Walker Art Center&rsquo;s new Director, Mary Ceruti.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQzMTEwMDAz/full.jpg" /><small>Jovan Speller, installation view of&nbsp;<em>...and I shall call you Home, 2016.</em></small></p>\n\n<p>The four current resident artists&nbsp;come from different levels of experience. Some are more established, like Speller, who has had a number of high profile opportunities&nbsp;including grants and curatorial projects on the East coast. Others are more at the emerging level, and Larson has been able to offer some resources such as helping with writing grants.&nbsp;</p>\n\n<p>Speller initially heard about the fellowship through Larson, who mentioned it at a meeting for the McKnight Artist Fellowships, where they were both fellows. Later, a coworker forwarded a call for applications.&nbsp;</p>\n\n<p>&ldquo;I thought it would be perfect,&rdquo; Speller said. &ldquo;I have a 15-month old now, so working around chemicals all the time is not ideal.&rdquo; Speller said her coworker knew she was looking for opportunities to have time and space to figure out new options for how to create art that wasn&rsquo;t quite so dangerous when you have a little one in tow.&nbsp;</p>\n\n<p>Speller says the experience so far has been &ldquo;mind-blowing,&rdquo; even in ways she didn&rsquo;t anticipate. Not only does she appreciate having the space to lay out her work and see what she has, she also has been able to professionally photograph the work she has&nbsp;and arrange studio visits outside her home.&nbsp;</p>\n\n<p>&ldquo;It hasn&rsquo;t felt professional,&rdquo; said Speller of inviting curators into her home studio. &ldquo;Now it removes that anxiety from the picture&mdash; not like I&rsquo;m playing hostess at my house. It can really be 100 percent about my work.&rdquo; The quality of her studio visits has improved, she says. &ldquo;It&rsquo;s upped my ability to think through a lot of things.&rdquo;&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MTEwMDAy/full.jpg" /><small>The newly built-out space, a former linoleum shop on Payne Avenue.</small></p>\n\n<p>Second Shift has mostly been a labor of love for Larson and Zulkosky, who embarked on the project as a response to the rising costs of rent in the Twin Cities, with artists getting priced out of areas that previously had been havens for artist studios.&nbsp;</p>\n\n<p>According to Zulkosky, the couple found inspiration from a show artist Jim Hodges did at the Walker in 2014, called <em>Jim Hodges: Give More Than You Take</em>.&nbsp;&ldquo;From that we created the motto for Second Shift,&rdquo; she says. &ldquo;Our motto is Work, Make, Give more than you take. Today more than ever we feel it is important to give more than one takes if one has the means to do so. Our world is in dire need of giving, giving with no strings attached.&rdquo;&nbsp;</p>\n\n<p>They took out a second mortgage of $75,000 to get Second Shift up and running. They&rsquo;ve also received some donations, as well as a STAR grant from the city of Saint Paul. In addition, the widow of H&uuml;sker D&uuml;&rsquo;s Grant Hart provided funding for the Con D&rsquo;or Grant Hart Artist Fund, which provides each of the residents a $5,000 stipend for the 2019-2020 cycle.&nbsp;</p>\n\n<p>While not an artist herself, Zulkosky says she&rsquo;s seen for years how hard artists have to work to get by. Larson himself was at one point juggling multiple adjunct positions in addition to his own practice before landing a more stable job at the University of Minnesota. Together, they wanted to support other artists in the community. &ldquo;People are getting priced out,&rdquo; Zulkosky says. &ldquo;It&rsquo;s frustrating to see artists struggling. We knew we wanted to try to do something&mdash; how can we help the community grow?&rdquo;&nbsp;</p>\n\n<p>&ldquo;If we have the means to be able to do something, and that&rsquo;s economically feasible,&nbsp;let&rsquo;s do that,&rdquo; she says. &ldquo;We are trying to give people a leg up.&rdquo;&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIzMDIwMDAx/full.jpg" /><small>Heather Lamanno&#39;s studio space at Second Shift.</small></p>\n\n<p>Heather Lamanno, a recent graduate of MCAD&rsquo;s MFA program, says in the last year she&rsquo;s looked at space, and found it to be exorbitantly expensive, not to mention very difficult to even find a space. &ldquo;You almost have to know someone that is leaving their space,&rdquo; she says.&nbsp;</p>\n\n<p>Living with three kids at home, plus two who are older and living elsewhere, Lamanno says it was hard for her and her&nbsp;husband to justify putting money into a studio space. &ldquo;It really means everything to me,&rdquo; she says. &ldquo;I wouldn&rsquo;t have a space. I&rsquo;d be trying to work out of my house, which has gone down in size to where we were living before.&rdquo;</p>\n\n<p>Second Shift is located in an old linoleum shop, previously owned for three generations by the same family. The first order of business was cleaning the place out, because it was packed with garbage and old linoleum samples. &ldquo;We spent the majority of our budget on garbage disposal,&rdquo; Zulkoski says. Plus, it took a while to get approvals from the city.&nbsp;</p>\n\n<p>By the time they got all of their paperwork in place, artists from around the Twin Cities were ready to step up to help.&nbsp;&ldquo;We had all these people volunteering,&rdquo; she says. &ldquo;It was cool.&rdquo;&nbsp;</p>\n\n<p>Second Shift is currently set up as semi-private studios&nbsp;so that there&rsquo;s potential for conversation and collaborations. There&rsquo;s also a kitchenette with a long table that works as a break room and a meeting&nbsp;space.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM1MDcwMDAy/full.jpg" /><small>KB Lor,&nbsp;<em>Kuv Niam Txoj Kev Npau Suav &ndash; My Mother&rsquo;s Hopes and Dreams</em></small></p>\n\n<p>KB Lor, another Second Shift resident, says that while the artists are all working in different forms, she likes being in a shared space. &ldquo;It&rsquo;s interesting to see how they work and the process they go through,&rdquo; she says. &ldquo;For me, it&rsquo;s always about the process.&rdquo;</p>\n\n<p>The residency is the first time Lor has been able to work outside of her home. She previously lived in Woodbury&nbsp;and had a studio space, but recently moved to the East Side of Saint Paul to downsize.&nbsp;</p>\n\n<p>Being able to work on a painting and leave it in place without having to put everything away makes a huge difference in her practice. &ldquo;It cuts down the time that I have to set up and take down,&rdquo; she says. &ldquo;Then, whenever I come in, I&rsquo;m able to reflect on it. If I were to take it back out, I lose that focus.&rdquo;&nbsp;</p>\n\n<p>In addition to the residency program, Second Shift also has a curatorial arm. Last spring, Larson and Maria Cristina Tavera curated <em>Thirty Three Views Plus Two</em>, a group exhibition that took place at the Swedish Bank as well as Second Shift&nbsp;and other locations along Payne Avenue. According to Zulkosky, around 500 people came to visit the installations, and 22 curators from different Twin Cities art institutions visited the work as well.&nbsp;</p>\n\n<p>On September 7, from 12-7 p.m., Second Shift will host an inaugural open house, featuring the four resident artists &mdash; K.B Lor, Jovan Speller, Heather Lamanno, and Angela St. Vrain. Each of the artists will be sharing recent pieces and works in progress.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMxMTYwMDAx/full.jpg" /><small>Angela St.&nbsp;Vrain;&nbsp;<em>A Strange Form of Home</em>;&nbsp;fabricated steel, vinyl screen, cotton yarn; 2017.</small></p>\n\n<p><em>Second Shift is located at 1128 Payne Ave. in St. Paul. More info at&nbsp;<a href="https://secondshiftstudiospace.org">secondshiftstudiospace.org</a>. </em></p>\n\n<p><em>All images courtesy of the artists and Second Shift. Banner image: Heather Lamanno, </em>Between You and Me<em>, acrylic on panel, 2018.</em></p>\n',
    created_date: '2019-08-28T03:06:48Z',
    is_published: true,
    modified_date: '2019-08-28T15:37:34Z',
    permalink: '/written/2019/08/st-paul-s-second-shift/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-08-28T15:28:23Z',
      modified_date: '2019-08-28T15:28:23Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ1MDAwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjQ1MDAwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ1MDAwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ1MDAwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ1MDAwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ1MDAwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjQ1MDAwMDAx',
    published_date: '2019-08-28T15:29:05Z',
    resource_id: 'QmxvZ1Bvc3QeHzU2NTUzOTg2ODE5MzU4NzI',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU2NTUzOTg2ODE5MzU4NzI',
    slug: 'st-paul-s-second-shift',
    summary:
      'The newly opened residency program in east St. Paul provides studio space, stipends, and professional development to women and non-binary artists',
    title: 'Making space at Second Shift',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Russ White',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Russ',
      lastname: 'White',
      resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      resource_url: '/api/users/VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      website: 'http://www.russ-white.com/',
    },
    author_resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>&nbsp;</p>\n\n<p>Okay, you&rsquo;ve made it: the annual end of summer pilgrimage to Falcon Heights. You have come to feast on sticks and go on rides, to eat and drink and eat again, to stroll through barns and buildings and concerts and markets, to throng en masse with your fellow Minnesotans in the last glorious moments of sweaty summer heat.</p>\n\n<p>Oh yeah, and to take in some art, too. Grab some fried pickles, let&rsquo;s do this.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI3MDUwMDAx/full.jpg" /></p>\n\n<h2><strong>First stop: Agriculture Building</strong></h2>\n\n<p>We&rsquo;re gonna start with one of my favorite features of the whole Fair: the hallway of <strong>vintage seed, flour, and grain bags</strong>. Shown annually and culled from Farm Crops Superintendent Ron Kelsey&rsquo;s collection of over a thousand old bags, they form a wall-sized&nbsp;rainbow of faded sackcloth.&nbsp;The vintage designs feature great typography and beautiful illustrations,&nbsp;although some showcase our long, grievous history of using Native Americans as corporate mascots. The whole display&nbsp;connects&nbsp;the agricultural roots of the State Fair to the contemporary art and craft you are about to discover. Most importantly, they&rsquo;ll put you in a visual mood.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjUzMTAwMDAx/full.jpg" /><small>The flour, seed, and grain sacks in the Agriculture Building. Photo by the author.</small></p>\n\n<p>Next up: another favorite, <strong>Crop Art</strong>. It never disappoints. Intricate craftsmanship, biting political commentary, gorgeous compositions, terrible puns... Crop Art has it all, and it&rsquo;s all made of seeds. Insane. Not to be missed.</p>\n\n<p>Back outside and up the street! Okay, maybe stop for another bite of food first, but eat that shit outside because we&rsquo;re about to enter the mother lode:&nbsp;</p>\n\n<h2><strong>2. The Fine Arts Center</strong></h2>\n\n<p>Home to the 108th annual <strong>Fine Arts Exhibition</strong>. Out of 2727 statewide entries, the show&rsquo;s eight jurors (one for each category of medium) picked 334&nbsp;pieces of art.</p>\n\n<p>It&rsquo;s a mighty labyrinth of white walls and gallery nooks, packed full of some of the best art in the state, a staggeringly large group show laid out with great thought and care. Best to go during the week when the crowds are thinner and you can spend time with the work. You&rsquo;re bound to find something you love, something you hate, and a whole mess of work in between.&nbsp;</p>\n\n<p>You&rsquo;ll also find a live artist making actual artwork. <strong>Studio: HERE</strong> is a one-day residency program inside the Fine Arts Center, hosting a different artist each day of the Fair. It&rsquo;s basically a live action diorama, giving a glimpse into the studio practices of painters, photographers, ceramicists, and sculptors. Local ceramic artist Katayoun Amjadi will be set up on August 24th, for instance, demonstrating slip-casting and assembling her porcelain chickens. Local bronze sculptor Nicholas Legeros will take the helm on September 1st&nbsp;and bring the bronze casting process to the fair.&nbsp;Expect a demonstration in wax sculpting, wax investment, a bronze pour, and a final patina. &ldquo;The only step I will skip&nbsp;is the burnout of the wax,&quot; he says,&nbsp;&quot;as that would stink up the building.&quot; Full schedule of artists posted below.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI3MDQwMDAx/full.jpg" /><small>Katayoun Amjadi, <em>Chicken &amp; Egg</em> (detail), 2018. Courtesy of the artist&#39;s <a href="http://www.katayoun.com/" target="_blank">website</a>.</small></p>\n\n<p>Back out into the world now, breathe in the fresh air... ahhh, it smells like kettle corn. Let&rsquo;s mosey. There are artist and gallery booths set up in the <strong>Merchandise Mart (3)</strong>,<strong> the Grandstand (4)</strong>, at <strong>the International Bazaar (5)</strong>, and in individual booths along the way.&nbsp;But we&rsquo;re headed all the way to:</p>\n\n<h2><strong>6. The&nbsp;West End Market</strong></h2>\n\n<p>Here, among the booths of boutiques, gifts, and crafts (don&#39;t miss&nbsp;<strong>FOCI&rsquo;s glass art booth</strong> here, too), you will find Genie Castro and her legion of local artists manning the <strong>Cream of the Crop Gallery</strong>. They&#39;ve got&nbsp;bagged prints and framed originals, hand-printed t-shirts and tintype photos, wearables, collectibles, and one-of-a-kind bits of brilliance from over two dozen makers, all of whom take shifts working the booth as well, so you&#39;ll have a chance to buy art from actual artists. Castro is the art director and concierge at Betty Danger&rsquo;s Country Club, so expect a well-curated array of funny, weird, and wonderful. And if you haven&rsquo;t dumped all your money into a deep fryer yet, you can mostly certainly find something cool to spend it on here.</p>\n\n<p>Okay, that&rsquo;s probably good, right? Let&rsquo;s go meet some goats real quick, get a $2 ice cream cone at the Dairy Building, give a wave to Princess Kay, and see if we can remember where we parked&hellip;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIxMTAwMDAx/full.jpg" /><small>The Cream of the Crop Gallery at the West End Market. Photo courtesy of Genie Castro.</small></p>\n\n<p><em>Click <a href="https://www.mnstatefair.org/search/?q=art">here for a full list</a> of art at the State Fair.</em></p>\n\n<p><em>Studio: HERE artist schedule:</em></p>\n\n<p><em><strong>August&nbsp;</strong></em><em><strong>22</strong> Polonia Odahara Novack, mixed media sculpture &bull; <strong>23</strong> David Gilsvik, oil painting &bull; <strong>24</strong> Katayoun Amjadi, slip-casting ceramics &bull; <strong>25</strong> Claudia Danielson, photography &amp; printmaking &bull; <strong>26</strong> Kristi Kuder, paper pulp/wire sculpture&nbsp;&bull; <strong>27 </strong>Amanda Pearson, glued thread &bull; <strong>28</strong> Claudia Trepanier, watercolor &bull; <strong>29</strong> Gordon Coons, reduction block printing &bull; <strong>30</strong> Eric Ketelsen, drawing &bull; <strong>31</strong> Toni Dachis, repurposed paper / collage &bull; <strong>September</strong> <strong>1 </strong>Nicholas Legeros, bronze sculpture &bull; <strong>2 </strong>Karen Brown, ceramic sculpture</em></p>\n\n<p><em>Banner image courtesy of Wikimedia Commons.</em></p>\n',
    created_date: '2019-08-21T15:58:45Z',
    is_published: true,
    modified_date: '2019-08-21T19:55:15Z',
    permalink: '/written/2019/08/art-at-the-fair/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-08-21T16:44:05Z',
      modified_date: '2019-08-21T16:44:05Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjQxMDUwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjQxMDUwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQxMDUwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQxMDUwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQxMDUwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQxMDUwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjQxMDUwMDAx',
    published_date: '2019-08-21T16:47:25Z',
    resource_id: 'QmxvZ1Bvc3QeHzU3MjM0ODkzODIxNzA2MjQ',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU3MjM0ODkzODIxNzA2MjQ',
    slug: 'art-at-the-fair',
    summary: 'A completely nonexhaustive guide to finding art at the Minnesota State Fair, August 22 - September 2',
    title: 'Art At The Fair',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Juleana Enright',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Juleana',
      lastname: 'Enright',
      resource_id: 'VXNlch4fNTE3MDQ3MzI5Mzg0MDM4NA',
      resource_url: '/api/users/VXNlch4fNTE3MDQ3MzI5Mzg0MDM4NA',
      website: 'https://twitter.com/juleanaenright',
    },
    author_resource_id: 'VXNlch4fNTE3MDQ3MzI5Mzg0MDM4NA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>&nbsp;</p>\n\n<p>When I arrive at Gamut Gallery to meet John Foster, he&rsquo;s in the corner of the room taking a time lapse of one of his most iconic pieces, <em>Me, Myself, My Sparkle Table</em>. It&rsquo;s a table made with dichroic acrylic, one of Foster&rsquo;s signature materials, and is adorned on top with three icosahedrons, twenty-sided polyhedra. A type of iridescent plastic, dichroic acrylic changes color depending on your angle thanks to its mirror-like rainbow finish &mdash;&nbsp;in other words, turning the gallery into a kaleidoscope. As the sun hits the table, light refracts around the room in such a spectacular way, we&rsquo;re both mesmerized for a second.&nbsp;</p>\n\n<p>&ldquo;I haven&rsquo;t been in the gallery at this time of day to see it do this,&rdquo; Foster explains. It feels like a chromatic portal. Over the course of our interview, I take probably six videos of this piece, one for every time the natural hard sunlight bathes over it. And yet there&rsquo;s this magical, transcendent element that can only be captured in person, a minuscule change that happens each instance. Projections filter light into multicolored harmony, activating optical vibrations that the screen just can&rsquo;t properly capture.</p>\n\n<p>Seeing this collection in person &mdash; a body of work he refers to as &ldquo;interdimensional quilting&rdquo; &mdash; calls to mind the <em>Infinity Mirror Rooms</em> produced by Yayoi Kusama, an artist Foster references in our conversation. From peep-show-esque channels to multimedia installations, Kusama creates kaleidoscopic environments which challenge the viewer to step into an illusion of time and space. This central theme of utilizing time, space, light, and materials to create a moment is unmistakable in <a href="https://www.mplsart.com/events/shimmer-john-foster-s-first-solo-exhibition"><em>Shimmer</em></a>, Foster&rsquo;s first solo exhibition, which explores the sculptural synergy and visual context surrounding those concepts.&nbsp;</p>\n\n<p>I sat down with the artist to talk about the creation of <em>Shimmer</em> and how his work taps into synesthesia on a universal level.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI3MDEwMDAx/full.jpg" /><small><em>Me, Myself, My Sparkle Table</em>; Dichro acrylic, glass;&nbsp;35&nbsp;x 30&nbsp;x 36&quot;;&nbsp;2019&nbsp;</small></p>\n\n<p><strong>Juleana Enright: <em>Shimmer</em> integrates your more well-known kaleidoscope polyhedra sculptures and signature iridescent geometric pieces with a completely new body of work, the &ldquo;Chromaflora Botanical&rdquo; collection. What drew you to unite these series?&nbsp;</strong></p>\n\n<p>John Foster: The process for making the kaleidoscopic polyhedra is extensive and a bit oppressive. Adhering to geometric truths and tolerances requires a certain degree of creative problem solving, but doesn&rsquo;t lend itself to a high degree of intuitive flow. I wanted to make things that would come to exist a bit more gesturally, with immediacy as the catalyst. A more organic approach produced familiar forms, visually engaging a conversation about growth and life.&nbsp;</p>\n\n<p><strong>JE: You use very specific material in your sculptures. How did you discover this material and how does it speak to your practice?</strong></p>\n\n<p>JF: I use materials to activate the eye. Polarized films, adhesives, resins, employed to achieve&nbsp;dynamic, iridescent, reflective projections of light. I am playing with the idea of transmutation, trying to keep my hand out of the work. I want my art to appear as if it was generated by something other, following specific parameters to establish continuity of form and content.&nbsp;</p>\n\n<p><strong>JE: Your work centers around creating experiential sculptures that play with space, light, and motion. What drew you to these themes and how does it relate to your personal identity?</strong>&nbsp;</p>\n\n<p>JF: I try to consider how our identities are formed interdimensionally, how our experiences are different and also the same. It&rsquo;s important for me to make things that are accessible to everyone, to distill complex ideas into portals of understanding. The <em>Esometric Window</em> screenprint series is an illustration of inward reflection, a depiction of infinite potential of self.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjIyOTcwMDAx/full.jpg" /><small><em>Triacontahedron Esometric Window</em>,&nbsp;4- color screen print, Limited Edition of 50,&nbsp;16&quot; x 20&quot;,&nbsp;2019</small></p>\n\n<p><strong>JE: Your work intersects fine art with a variety of mind-expanding&nbsp;theories: from quantum physics to tactile synesthesia, chromatherapy to stereographic projection. People spend their careers studying these interdimensional planes. How do you approach creating in a way that&rsquo;s both visually and intellectually palpable to you and accessible to be explored by your audience?</strong></p>\n\n<p>JF: The first step is to make the ugliest things possible, to study the material, to find failure and strength. It is a physical and emotional relationship with materials and ideas. I am chasing a visceral understanding of concepts, trusting the process and rewarding the curious observer.</p>\n\n<p><strong>JE: Can you describe the moment when you first made the connection that you wanted to produce something more organically alive, like your &ldquo;house plants/succulents&rdquo; creations?&nbsp;</strong></p>\n\n<p>JF: I have generally been interested in taking mundane utilitarian objects and emphasizing their value as symbols or benchmarks in our development as a whole. When I first made life-like simulations, I became even more interested in how and why these objects and symbols resonate.&nbsp;</p>\n\n<p><strong>JE: We&rsquo;ve talked before about &ldquo;happy accidents,&rdquo; which can be inspiring or the bane of existence for artists. How do you use your &ldquo;happy accidents&rdquo; to continue to be experimental in your work?&nbsp;</strong></p>\n\n<p>JF: I really love and hate happy accidents. There really are no accidents &mdash; everything is an opportunity for understanding. I like to call myself a Pretengineer. The process of finding out why and what materials do is magical to me. I keep a lot of notes on what forces influence certain effects, and try to do things in a way that I can replicate, building a repertoire of techniques and makers of language/vocabulary.&nbsp;&nbsp;&nbsp;</p>\n\n<p><strong>JE: You&rsquo;re very intentional about the names for your pieces. You name things &ldquo;what they are.&rdquo; Can you give an example of one of those instances for this exhibit?&nbsp;</strong></p>\n\n<p>JF: I am interested in paradox and self-reference. I try to make art that exists in this kind of space. An example is the piece titled&nbsp;<em>Luciferus Simulacra Divinorum</em>, which is a nod to Brancusi&rsquo;s sleeping head series. Materials have meaning, and the way they are manipulated can impart feeling. This piece plays with foreground/background, displays tension and balance with high contrast of texture, while relating to human form on a 1-1 scale. It&rsquo;s a light bringing simulation of divine reflection.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMyOTYwMDAx/full.jpg" /><small><em>LSD (Luciferus&nbsp;Simulacra&nbsp;Divinorum);</em>&nbsp;hand-formed&nbsp;dichro&nbsp;aluminum, gypsum, glass;&nbsp;8&nbsp;x 8&nbsp;x 6&quot;;&nbsp;2019&nbsp;</small></p>\n\n<p><strong>JE: What makes your work so dynamic in person is that you get a sense of playful interaction. To understand what&rsquo;s there (the visual projections), the viewer has to understand what isn&rsquo;t so obviously seen &mdash; the negative space between an object; the chromatic harmony. How would you say that translates into the concept of chromatherapy and why people might be drawn to your work?</strong></p>\n\n<p>JF: I would argue the viewer doesn&rsquo;t need to understand much to feel the magic of this seemingly chaotic color combination. Because the work requires our witnessing of changing light conditions and perspective, we never see the same piece twice. The color combinations are a result of mathematical harmony;&nbsp;it&rsquo;s as natural as it seems artificial. The photos of the work don&rsquo;t show all of the colors in the spectrum, in fact&nbsp;&mdash;&nbsp;many of the blues and violets the work produces we see only in certain natural phenomena, like bubbles and butterfly wings. The idea that these are not pigments is interesting to me, that our perception and optical physiology is what allows us to see these certain wavelengths.&nbsp;</p>\n\n<p><strong>JE: What practices or&nbsp;meditations do you use to challenge yourself to step outside of the linear box?&nbsp;</strong></p>\n\n<p>JF: I love to make &ldquo;warm up&rdquo; work that is never destined to be in front of anyone. Sometimes I set a timer for one hour, and try to make as many things as possible in this time. This is simply an exercise to get the mind working in a creative way.&nbsp;</p>\n\n<p><strong>JE: How does beauty, space, and art unite for you?&nbsp;</strong></p>\n\n<p>JF: When I can blur the line between these ideas, I feel like I made a successful piece. Space is only something we cannot see, but it can be manipulated to show beauty, and this becomes an object of Art.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjI5MDcwMDAx/full.jpg" /><small>The artist, the art, and the sun at work</small>.</p>\n\n<p><u><a href="https://www.mplsart.com/events/shimmer-john-foster-s-first-solo-exhibition">Shimmer</a></u><em> is on view now at Gamut Gallery with an Exhibit Finale Dance Performance on Thursday, August 22nd. For more info, visit <a href="http://www.gamutgallerympls.com" target="_blank">gamutgallerympls.com</a>.&nbsp;</em></p>\n\n<p><em>Banner image: </em>Medium Dodecahedron<em>,&nbsp;Dichro acrylic,&nbsp;5&nbsp;x 6&nbsp;x 6&quot;,&nbsp;2019.&nbsp;</em><em>Images</em><em> courtesy of Gamut Gallery.</em></p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n',
    created_date: '2019-07-29T04:02:19Z',
    is_published: true,
    modified_date: '2019-07-30T01:49:39Z',
    permalink: '/written/2019/07/shine-on-you-crazy-polyhedron-john-foster-at-gamut-gallery/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-07-29T03:51:47Z',
      modified_date: '2019-07-29T03:51:47Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MDUwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjE3MDUwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MDUwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MDUwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MDUwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MDUwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MDUwMDAx',
    published_date: '2019-07-29T04:13:47Z',
    resource_id: 'QmxvZ1Bvc3QeHzU2OTkzOTAyODcxMTgzMzY',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU2OTkzOTAyODcxMTgzMzY',
    slug: 'shine-on-you-crazy-polyhedron-john-foster-at-gamut-gallery',
    summary:
      "The artist behind these kaleidoscopic wonders talks about material, identity, and the importance of failure when you're looking for beauty.",
    title: 'Shine On, You Crazy Polyhedron: John Foster at Gamut Gallery',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Russ White',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Russ',
      lastname: 'White',
      resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      resource_url: '/api/users/VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
      website: 'http://www.russ-white.com/',
    },
    author_resource_id: 'VXNlch4fNTE5MjA4NDIyNzA5NjU3Ng',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>&nbsp;</p>\n\n<p>After a year-long hiatus between locations, CIRCA Gallery is reopening in Northeast Minneapolis, taking over the gallery space recently vacated by Public Functionary. A fixture in the Minneapolis art scene for nearly three decades, CIRCA left their longtime&nbsp;North Loop location&nbsp;last summer after their building ownership changed hands.</p>\n\n<p>Now <a href="http://www.mplsart.com/events/north-east">reopening this Saturday</a> with a large group exhibition, CIRCA has positioned itself in a well-known and much-loved space right in the heart of the city&#39;s Arts District. We got up with Gallery&nbsp;Director Krista Anderson-Larson to get the scoop on what they&#39;ve been up to over the past year and what to expect in their latest incarnation.</p>\n\n<p>&nbsp;</p>\n\n<p><strong>RW: CIRCA Gallery has been around for almost thirty years, but for those who may have never heard of you, what is CIRCA all about?&nbsp;</strong></p>\n\n<p>KAL:&nbsp;CIRCA&#39;s mission is to provide awareness, inspiration and appreciation for contemporary art, while supporting sustainable practices for artists.&nbsp;<br />\nWe represent primarily contemporary, abstract artists whose careers range from emerging to established from all over the country. We believe that having original art in life &ndash; whether at home, in the office, or at a gallery &ndash; significantly impacts a person&rsquo;s disposition, productivity, and outlook. We connect individuals, corporations, architects, designers, and collectors with the artwork best suited for their needs, while hosting exhibitions at the gallery featuring engaging installations, performative programming, and skillful curating.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjMyOTUwMDAx/full.jpg" /><small>Timothy Schmitz,&nbsp;<em>Ethereal #042017PTSP;</em>&nbsp;Multipass UltraChrome pigment inkjet, resin, on stained and coated cotton rag, mounted on KomaCell floating panel;&nbsp;23.5&nbsp;x 23.5&nbsp;x 1.5&rdquo;</small></p>\n\n<p><strong>You all have been closed for almost a year now, having moved out of your North Loop location in August 2018. What have you been up to in the meantime?</strong></p>\n\n<p>I wouldn&#39;t say &quot;closed&quot; &ndash; we&#39;ve been very busy running the many other aspects of the gallery, along with finding a new physical space so that we can resume exhibition programming. While there is much to do in the day-to-day communicating with artists and clients, and of course selling work, the search for the perfect new home for the gallery was our main objective during this transitional period.</p>\n\n<p><strong>Even in the absence of a brick-and-mortar, Circa maintained a presence on Artsy.net, a gallery platform for online art sales. Have you found that more collectors are buying online &mdash; particularly larger, pricier originals? Do you see this changing the way galleries, especially those in the Midwest, place work?</strong></p>\n\n<p>We&#39;re just coming up on a year since we first partnered with Artsy, so it is difficult to make conclusions or statements with certainty without more time spent with the service. However, Artsy has helped us to connect with an audience of collectors from around the country that we may not have otherwise reached. The tides are changing&mdash;albeit slowly&mdash;in the art market to lean more towards online sales, and I&#39;m glad that we jumped on board relatively early in the game because it has already paid off. But the main preference is definitely still viewing artwork in person; this is a huge deciding factor for many people, and we can&#39;t deny its importance. One of the many reasons we are happy to be back in a brick-and-mortar space!</p>\n\n<p><strong>Now that you&rsquo;re set to reopen in Northeast, with a juried group exhibition titled&nbsp;<em><a href="http://www.mplsart.com/events/north-east">NORTH//EAST</a>&nbsp;</em>no less, how do you think being in the Arts District will affect your programming and curation? Do you expect your audience will change much?</strong></p>\n\n<p>The opening juried show has been a great way to connect with the community we&#39;re entering by inviting them in to exhibit in our space and kick off this next chapter with us. Our programming will be shifting a bit, but not specifically because of the neighborhood&mdash;we have been anticipating bringing in more engaging programming and working with artists of varied disciplines since we left our North Loop location. We&#39;re looking forward to expanding our reach in this new location, bringing our existing audience with us (some of whom have been supporting us for the past 29 years), and adding in the new faces that come with the neighborhood.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MTEwMDAx/full.jpg" /><small>Ann&nbsp;Ledy,&nbsp;<em>Deconstruction of a Circle in White II</em>, painted aluminum,&nbsp;12 x 12 x 6.25&quot;</small></p>\n\n<p><strong>The space you are moving into was home to Public Functionary for seven years. What does it mean to you to be moving into a space with so much history and energy, and how will you make it your own?&nbsp;</strong></p>\n\n<p>Public Functionary is an amazing entity that was very creative in this space, and we&#39;re glad to be honoring their history by first and foremost keeping this an arts space. As we saw when we were searching for our new home, it is really tough for galleries to find spaces that are financially sustainable. It&#39;s all too easy for spaces to flip for retail or office space, or even sit empty for months on end. We&#39;re so grateful to be here and look forward to adding to the history of the space with the voices of our artists too. We&#39;ve made a few cosmetic updates to the space and are bringing in CIRCA&#39;s minimal, sleek aesthetic that we&#39;ve come to be known for.</p>\n\n<p><strong>Finally, what can we look forward to in this inaugural group exhibition?</strong></p>\n\n<p>We had over 150 applicants for this open call with an overwhelming amount of great work from artists locally and nationally. The show features work from 22 artists, most of whom are local to Minnesota but a few from Florida, New York, Wisconsin, and California. It&#39;s all amazing work, but we have some particularly great sculpture and installation pieces that you should be sure not to miss!</p>\n\n<p><a href="http://www.mplsart.com/events/north-east"><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQxMDEwMDAx/full.jpg" /></a><br />\n&nbsp;</p>\n\n<p><em><a href="http://www.mplsart.com/events/north-east">NORTH//EAST</a> opens Saturday, July 20th, at CIRCA Gallery&#39;s new location,&nbsp;1125 Buchanan St NE. For more info, visit <a href="http://www.circagallery.org">circagallery.org</a>.</em></p>\n\n<p><em>Banner image: Laura Stack,</em>&nbsp;Fluere #28<em> (detail), ink collage on paper on panel, 20 x 20&quot;</em><br />\n&nbsp;</p>\n',
    created_date: '2019-07-16T15:47:12Z',
    is_published: true,
    modified_date: '2019-07-16T19:26:11Z',
    permalink: '/written/2019/07/new-in-northeast-circa-gallery-reopens-this-weekend/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-07-16T15:35:49Z',
      modified_date: '2019-07-16T15:35:49Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjE1MTAwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjE1MTAwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MTAwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MTAwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MTAwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE1MTAwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjE1MTAwMDAx',
    published_date: '2019-07-16T16:27:17Z',
    resource_id: 'QmxvZ1Bvc3QeHzU2MzY2MjEwODQ5MTc3NjA',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU2MzY2MjEwODQ5MTc3NjA',
    slug: 'new-in-northeast-circa-gallery-reopens-this-weekend',
    summary:
      "Ahead of the inaugural exhibition at CIRCA's new location, Gallery Director Krista Anderson-Larson talks past, present, and future.",
    title: 'New in Northeast: CIRCA Gallery reopens this weekend',
  },
  {
    _meta: { is_verbose: true, resource_type: 'BlogPost' },
    author_name: 'Juleana Enright',
    author_resource: {
      _meta: { is_verbose: true, resource_type: 'User' },
      firstname: 'Juleana',
      lastname: 'Enright',
      resource_id: 'VXNlch4fNTE3MDQ3MzI5Mzg0MDM4NA',
      resource_url: '/api/users/VXNlch4fNTE3MDQ3MzI5Mzg0MDM4NA',
      website: 'https://twitter.com/juleanaenright',
    },
    author_resource_id: 'VXNlch4fNTE3MDQ3MzI5Mzg0MDM4NA',
    category_resource: null,
    category_resource_id: '',
    content:
      '<p>&nbsp;</p>\n\n<p>Brooklyn-based composer and artist&nbsp;Grant Cutler wants to help you enjoy the silence so you can examine the noise. This Thursday, the former MPLS artist plays host to <a href="https://www.mplsart.com/events/pop-up-photo-book-release-thoughts-becoming-loud">a pop-up experience</a> which explores the complexity of a moment through impressionistic multimedia works: an interactive portrait&nbsp;and large-scale photo prints. Celebrating the local release of his photo-book,&nbsp;<em>Thoughts Becoming Loud</em> &mdash; which premiered in Brooklyn in April &mdash; the exhibit will be accompanied by a set of quadraphonic audio-works performed through a locally-designed sound system. The equivalent to 4.0 surround sound, quadraphonic audio uses four channels positioned at four corners of the listening space, reproducing signals independent of each other.&nbsp;</p>\n\n<p>The show&rsquo;s title is inspired by a German diagnostic term, Gedankenlautwerden, for a patient who hears their thoughts spoken aloud as they think. Cutler&rsquo;s works present, out loud and in physical space, a mass of concepts, impressions, and memories, co-existing in us within a single instant. Among the works is an interactive digital collection of sounds and images which the viewer can start and stop at will, creating unique compositions in the moment. The artist describes the piece as &ldquo;synthesiz[ing] a kaleidoscopic portrait of one woman&rsquo;s inner dialogue.&rdquo;</p>\n\n<p>Here, Cutler shares some thoughts about the MPLS debut of <em>Thoughts Becoming Loud</em>, the inner complexities of a moment, and the evolution of his practice.&nbsp;</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ2OTcwMDAx/full.jpg" /><small>Photo by Aaron Rice. All images courtesy of the artist.</small></p>\n\n<p><strong>JE: Though currently based in Brooklyn, you lived in Minneapolis for some time as an artist/musician. What prompted the move and how would you say the scene differs between the two cities?&nbsp;</strong></p>\n\n<p>GC: I lived in Minneapolis for 10 years before I moved to New York about 6 years ago, when my partner got an internship in Brooklyn. I&rsquo;m lucky to remain part of a really strong community of artists and musicians in Minneapolis, and still collaborate regularly with the folks I built relationships with over the decade I spent living here. At the same time, I&rsquo;ve grown as an artist living in New York, where there are endless art communities, venues, and events to explore and inspire an arts practice. I compose a lot more for film than I used to and have produced more visual and interdisciplinary works since moving.</p>\n\n<p><strong>For Thursday&rsquo;s pop-up reception, attendees can experience both your first bound photography&nbsp;collection&nbsp;and a debut performance from the monolithic hand-crafted sound system, Palace Speaker Array, which will be used to perform your latest quadraphonic compositions. Can you tell us more about the production behind this sound-work and how it relates back to your photography series?&nbsp;</strong></p>\n\n<p>A few years ago I started writing quadraphonic compositions. I had an installation on Governors Island in New York one summer that featured a generative quadraphonic piece, using regular consumer speakers for playback. After that show, I knew I wanted to design a system that would be as intentional as the sound being played from it. My attempt with the Palace Speaker Array was to make something beautiful and substantial, that could be used to experience any of the quadraphonic pieces I&rsquo;ve worked on, and even to play other composers&rsquo; work. MPLS Guitars manufactured the speaker cabinets, and Peter Bregman engineered the electronics elements.</p>\n\n<p>All the works being shown together have come together over the last handful of years, so this is just an opportunity to share them all at once.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ5MDAwMDAx/full.jpg" /></p>\n\n<p><strong><em>Thoughts Becoming Loud</em>, a large-format photo book, is a 5-year-long project created to find meaning across a half-decade of disparate moments. Where did the idea for this exhibition come about and how has it evolved since your original vision?&nbsp;</strong></p>\n\n<p>As the web-based generative composition was coming together, I started to think about what physical work could accompany and add dimension to it. I started to curate photos I&rsquo;d taken and ended up selecting mostly pictures from road trips and life in the Midwest. Both the digital work and book deal with the act of trying to narrativize what&rsquo;s in our minds. Both were born from uniquely Midwest experiences.</p>\n\n<p>I&rsquo;ve done a lot of reading and writing about consciousness over the last several years. <em>Thoughts Becoming Loud</em> is one iteration of this exploration, and I came across the concept of <em>Gedankenlautwerden</em> when I was trying to find a term for what the work feels like to me.</p>\n\n<p><strong>One of the topics this body of work explores is the complexity of a moment and how engaging in profound silence affects our intermittent consciousness. How would you expand on that?&nbsp;</strong></p>\n\n<p>Users can interact with the work, which is made up of 9 video cells that start and stop playing when clicked. Each cell pulls randomly from a library of video and audio that I composed, using footage of and vocal performances by Holly Hansen. This gives audience members the chance to add and subtract elements, creating a composition that will never be the same twice. My hope was there would be some satisfaction in organizing these different inputs, but also that the process would mimic the tension of competing thoughts that are constantly present in our minds.</p>\n\n<p><strong>In the last decade, you&rsquo;ve performed inside a James Turrell sculpture, shared stages with world-renowned artists including &Oacute;lafur Arnalds and Isabel Allende, and installed quadraphonic sound environments in Manhattan galleries. How have these experiences shaped the examination of sound and environment within your personal art?&nbsp;</strong></p>\n\n<p>I have become more conscious of &mdash; and interested in &mdash; the relationship between sound and the experience of a place. Making ambisonics field recordings has become a favorite practice for me, and figuring out how to compose with these recordings, integrate them into music, and create settings in which to play them back has been very motivating to me. My focus on physical and visual media has increased as my understanding has grown of the relationship between sound and space.</p>\n\n<p><strong>The original opening of <em>Thoughts Becoming Loud</em> was a 3-day interdisciplinary exhibition at the Realty Collective Gallery in Brooklyn. Was it difficult to pare it down to just a one-night-only pop-up event?&nbsp;</strong></p>\n\n<p>This pop-up is a chance for me to share recent works with my community here. I wanted to celebrate the completion and debut of the <em>Palace Speaker Array</em> with its co-creators, who are all based here. Holly Hansen contributed vocals and is the portrait subject for the digital work <em>Thoughts Becoming Loud</em>. The book is filled with places and people from here as well. It&rsquo;s exciting to be able to present these works alongside the collaborators who made it all possible.</p>\n\n<p><strong>Is this your first experience taking an exhibition on tour to multiple cities? Do you plan to do more pop-up events like this one in Minneapolis?&nbsp;</strong></p>\n\n<p>This is my first time showing elements from the same collection in multiple cities. Probably like most artists, my least favorite part of making art is promoting my work. But I do love the opportunity to celebrate the results of artistic collaborations, and to make space for starting conversations and relationships.</p>\n\n<p><img alt="" class="img-responsive" src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjQ4OTkwMDAx/full.jpg" /><small>Photo by Aaron Rice.</small></p>\n\n<p><em>Catch the one-night-only exhibit, </em><a href="https://www.mplsart.com/events/pop-up-photo-book-release-thoughts-becoming-loud">Thoughts Becoming Loud</a><em>, Thursday June 20th from 7-9pm at the Task Building, 414 N. 3rd Ave, MPLS.&nbsp;</em></p>\n\n<p><em>Banner image taken from interactive A/V project on <a href="https://www.grantcutler.com" target="_blank">the artist&#39;s website</a>.</em></p>\n',
    created_date: '2019-06-20T15:51:26Z',
    is_published: true,
    modified_date: '2019-06-20T19:28:06Z',
    permalink: '/written/2019/06/thoughts-becoming-loud-an-interview-with-grant-cutler/',
    primary_image_resource: {
      _meta: { is_verbose: true, resource_type: 'FileContainer' },
      caption: null,
      created_date: '2019-06-20T15:56:35Z',
      modified_date: '2019-06-20T15:56:35Z',
      resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MDAwMDAx',
      resource_url: '/api/files/RmlsZUNvbnRhaW5lch4fMjE3MDAwMDAx',
      versions: {
        CARD_LARGE: {
          height: 472,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MDAwMDAx/card_large.png',
          width: 900,
        },
        CARD_PROGRESSIVE: {
          height: 21,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MDAwMDAx/card_progressive.png',
          width: 40,
        },
        CARD_SMALL: {
          height: 184,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MDAwMDAx/card_small.png',
          width: 350,
        },
        FULL: '',
        SIZED: '',
        THUMB: {
          height: 160,
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjE3MDAwMDAx/thumb.png',
          width: 160,
        },
      },
    },
    primary_image_resource_id: 'RmlsZUNvbnRhaW5lch4fMjE3MDAwMDAx',
    published_date: '2019-06-20T15:56:40Z',
    resource_id: 'QmxvZ1Bvc3QeHzU3MjM2OTI2ODg0NzQxMTI',
    resource_url: '/api/posts/QmxvZ1Bvc3QeHzU3MjM2OTI2ODg0NzQxMTI',
    slug: 'thoughts-becoming-loud-an-interview-with-grant-cutler',
    summary:
      'MPLS artist, musician, and Brooklyn transplant comes back on 6/20 for a one-night-only showcase of images, sounds, and silence.',
    title: 'Thoughts Becoming Loud: an interview with Grant Cutler',
  },
];

storiesOf('Lists', module)
  .add('Articles', () => (
    <Grid>
      <Row>
        <Col xs={12} md={4}>
          {articleResources.map((r, i) => (
            <CardListItemArticle
              key={i}
              linkClassProps={{}}
              resource={r}
              component="a"
              imageFloat="left"
              highlightPrimary={true}
            />
          ))}
        </Col>
        <Col xs={12} md={4}>
          {articleResources.map((r, i) => (
            <CardListItemArticle
              key={i}
              linkClassProps={{}}
              resource={r}
              component="a"
              imageFloat="right"
              highlightPrimary={true}
            />
          ))}
        </Col>
        <Col xs={12} md={4}>
          {articleResources.map((r, i) => (
            <CardListItemArticle
              key={i}
              linkClassProps={{}}
              resource={r}
              component="a"
              imageFloat="right"
              highlightPrimary={false}
            />
          ))}
        </Col>
      </Row>
    </Grid>
  ))
  .add('Events', () => (
    <Grid>
      <Row>
        <Col xs={12} md={4}>
          {eventDateResources.map((r, i) => (
            <CardListItemEventDate
              key={i}
              linkClassProps={{}}
              resource={r}
              component="a"
              imageFloat="left"
              highlightPrimary={false}
            />
          ))}
        </Col>
        <Col xs={12} md={4}>
          {eventDateResources.map((r, i) => (
            <CardListItemEventDate
              key={i}
              linkClassProps={{}}
              resource={r}
              component="a"
              imageFloat="right"
              highlightPrimary={false}
            />
          ))}
        </Col>
        <Col xs={12} md={4}>
          {eventDateResources.map((r, i) => (
            <CardListItemEventDate
              key={i}
              linkClassProps={{}}
              resource={r}
              component="a"
              imageFloat="right"
              highlightPrimary={true}
            />
          ))}
        </Col>
      </Row>
    </Grid>
  ));
