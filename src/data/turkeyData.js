/**
 * Central Image Registry — Turkey Twilight (A Journey Through Turkey)
 *
 * Imagery is grouped by chapter to maintain a consistent cinematic narrative:
 * horizons -> echoes -> streets -> taste -> rituals -> afterglow
 *
 * All files are local (/public/images), served from the same origin.
 */

const local = (name) => `/images/${name}`

export const images = {
  /* ---- Horizons (Home / Hero Chapter) ---- */
  horizons: {
    cappadociaBalloons: local('hero/capadocia hot air balloons.jpg'),
    bosphorusNight: local('hero/Bosphorous night.jpeg'),
    bosphorusVideo: local('hero/bosphorus Vid.mp4'),
    istanbulSkyline: local('hero/mosque sunrise.jpeg'),
    istanbulView: local('hero/istanbul view.mp4'),
    turquoiseCoast: local('hero/turkey view.jpeg'),
    grandBazaarLanterns: local('hero/cinematic mosque.jpeg'),
  },

  /* ---- Home Chapter (Hero Side-by-Side Highlights) ---- */
  home: {
    bosphorusVideo: local('home/bosphorus Vid.mp4'),
    streets: local('home/Night in Istanbul.jpeg'),
    taste: local('home/turkish kebab.jpg'),
    heritage: local('home/taht istanbul.jpeg'),
  },

  /* ---- Destinations ---- */
  destinations: {
    istanbul: local('destinations/taht istanbul.jpeg'),
    cappadocia: local('destinations/capadocia hot air balloons.jpg'),
    antalya: local('destinations/Old Town Harbor anatalya.jpeg'),
    pamukkale: local('destinations/pammukkale.jpg'),
    ephesus: local('destinations/pammukkale.jpg'),
    bodrum: local('destinations/bosphorous night.jpg'),
    ankara: local('destinations/taht istanbul.jpeg'),
    fethiye: local('destinations/ferry night.jpg'),
    turkeyVideo: local('destinations/turkey vid.mp4'),
    tramVideo: local('streets/red tram video.mp4'),
    balatVideo: local('streets/balat vid.mp4'),
    izmirVideo: local('destinations/izmir.mp4'),
    capadociaVideo: local('destinations/capaddocia.mp4'),
    mosqueVideo: local('destinations/mosque.mp4'),
  },

  /* ---- Experiences (Land of Horses Chapter) ---- */
  experiences: {
    brownHorse: local('experiences/brown horse.jpg'),
    girlsWithHorse: local('experiences/girls with horse.jpg'),
    horseLove: local('experiences/horse love.mp4'),
    horseRide: local('experiences/horse ride.mp4'),
    horse: local('experiences/horse.jpg'),
    ride: local('experiences/ride.mp4'),
    whiteHorse: local('experiences/white horse.jpg'),
  },

  /* ---- Streets (Wander Chapter) ---- */
  streets: {
    galataAlley: local('streets/galata tower.jpeg'),
    galataVideo: local('streets/Galata Vid.mp4'),
    grandBazaarLanes: local('streets/balat street.jpg'),
    balatVideo: local('streets/balat vid.mp4'),
    balatPastelHouses: local('streets/balat house street.jpg'),
    tramWayIstiklal: local('streets/red tram.jpg'),
    tramVideo: local('streets/red tram video.mp4'),
    bosphorusFerry: local('streets/ferry.jpg'),
    cappadociaCaveLanes: local('streets/cave.jpg'),
    ephesusMarbleWay: local('streets/tram view.jpg'),
  },

  /* ---- Taste (Spice & Serenade / Rituals Chapter) ---- */
  taste: {
    baklava: local('taste/baklava.jpg'),
    cheesecake: local('taste/cheese cake.jpg'),
    etliEkmek: local('taste/Etli Ekmek.jpg'),
    turkishDessert: local('taste/turkish desert.jpg'),
    turkishChai: local('taste/turkish tea.jpg'),
    turkishCoffee: local('taste/turkish kahve.jpg'),
    donerKebab: local('taste/turkish doner.jpg'),
    turkishKebab: local('taste/turkish kebab.jpg'),
    mezePlatter: local('taste/turkish gozleme.jpg'),
    lahmacun: local('taste/turkish lahmacun.jpg'),
    menemen: local('taste/turkish menemen.jpg'),
    simit: local('taste/turkish simit.jpg'),
    spiceBazaar: local('taste/turkish desert.jpg'),
  },

  /* ---- Heritage (Echoes / Timeless Vault) ---- */
  heritage: {
    mosque: local('heritage/mosque.jpg'),
    grandBazaar: local('heritage/grand bazar.jpg'),
    ottomanCourtyards: local('heritage/ottoman courtyards.jpg'),
    balatHouses: local('heritage/balat house street.jpg'),
    cappadociaCave: local('heritage/capadocia hot air balloons.jpg'),
    cave: local('heritage/cave.jpg'),
  },

  /* ---- Ending (Afterglow Chapter) ---- */
  ending: {
    endingVideo: local('ending/ending video.mp4'),
    bosphorusSunset: local('TurkeyScenes/bosphorous night.jpg'),
    sunriseVideo: local('ending/anatalya/turkey sunrise view.mp4'),
    antalyaView: local('ending/anatalya/anatalya view.jpg'),
    antalyaHarbor: local('ending/anatalya/Old Town Harbor anatalya.jpeg'),
    antalyaVideo: local('ending/anatalya/antalya.mp4'),
    dudenWaterfallVideo: local('ending/anatalya/duden waterfall anatalya.mp4'),
    istiklalTram: local('ending/istiklal/tram view.jpg'),
    istiklalStreetVideo: local('ending/istiklal/istiklal street video.mp4'),
    istiklalTramVideo: local('ending/istiklal/tram day video.mp4'),
    burgerKingVideo: local('ending/istiklal/burger king.mp4'),
  },
}
