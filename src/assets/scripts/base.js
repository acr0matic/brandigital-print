const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const isMobile = window.matchMedia('(max-width: 576px)').matches;
const isTablet = window.matchMedia('(max-width: 991px)').matches;

const StyleСlass = {
  'header': {
    'inverted': 'header--inverted',
    'hidden': 'header--hide',
    'dropdown': {
      'open': 'dropdown--open',
    },
  },

  'side': {
    'open': 'side-menu--open',
    'burger': 'hamburger-custom--hover',
  },

  'mobile': {
    'open': 'mobile-menu--open',
  },

  'body': {
    'overflow': 'scroll-disabled',
  },
}

let currentModal = null;
const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
}

const scrollParams = {
  speed: 500,
  speedAsDuration: true,
  offset: -60,
  header: '#header',
}
