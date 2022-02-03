window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite0',
            location: {
                lat: 48.095076,
                lng: 11.525722,
            }
        },
        {
            name: 'Magnemite1',
            location: {
                lat: 48.095622,
                lng: 11.525775,
            }
        },
        {
            name: 'Magnemite2',
            location: {
                lat: 48.095545,
                lng: 11.525857,
            }
        },
        {
            name: 'Magnemite3',
            location: {
                lat: 48.095563,
                lng: 11.525740,
            }
        },
        {
            name: 'Magnemite4',
            location: {
                lat: 48.095609,
                lng: 11.525337,
            }
        },
        {
            name: 'Magnemite5',
            location: {
                lat: 48.095558,
                lng: 11.525398,
            }
        },
        {
            name: 'Magnemite6',
            location: {
                lat: 48.095644,
                lng: 11.525756,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
