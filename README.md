# Kugelblitz

Neon-Billard für den Browser: eine einzige HTML-Datei, Vanilla JS und Canvas, ohne Abhängigkeiten.

- 12 Spielmodi: Endlos (prozedural, jedes Level geprüft lösbar), Blitz, Taschen-Jagd, Zehn Stöße, Flut, Trickstöße, Sequenz, Training, Zen, 8-Ball und 9-Ball gegen die CPU, zwei Spieler
- 47 Trophäen, Kreide als Währung, Shop mit Queues und drei besonderen Tischen (Kosmos, Vulkan, Synthwave)
- Dot-Matrix-Punkteanzeige mit Show-Animationen
- Läuft offline als Web-App (Service Worker, lokale Schriften), mit Icon für den Home-Bildschirm

## Starten

Den Ordner über einen Webserver ausliefern und `index.html` öffnen. Für den Offline-Modus braucht es HTTPS oder `localhost`.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | das komplette Spiel |
| `sw.js` | Service Worker für den Offline-Modus |
| `manifest.webmanifest`, `icon-*.png` | Web-App-Name und Icons |
| `fonts/` | Barlow Semi Condensed und Tilt Neon (SIL Open Font License 1.1) |
