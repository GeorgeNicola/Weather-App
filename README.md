This app detects your location and shows the temperature.
More locations can be added.
It takes approximate 5 seconds to load your location.

The main reason I created this application was to learn how to use the API.

API used:
- weatherstack: generates the weather info
- zenserp: generates location images

Problems encountered:
- Mixed Content Error ( because of the http protocol used on API and https on github )
    - solved with CORS
