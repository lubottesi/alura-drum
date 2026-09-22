# Alura MIDI

A browser drum machine - click any of the 9 pads (or focus one and press Space/Enter) to play a drum sound.

Built while practicing vanilla JavaScript DOM manipulation at Alura.

## Stack

- HTML5 (native `<audio>` elements per pad)
- CSS3
- Vanilla JavaScript - `querySelectorAll`, click/keydown/keyup event handlers

## Running locally

No build step - open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then go to http://localhost:8000.

## Structure

```
index.html
main.js
css/
  reset.css
  estilos.css
sounds/    # .wav samples, one per pad
images/
```
