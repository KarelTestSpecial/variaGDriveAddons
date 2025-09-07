# Google Drive Add-ons

Deze repository bevat de broncode voor twee Google Drive add-ons.

## 1. Footnote Remover

Een add-on voor Google Docs om voetnoten te beheren.

### Functies

- **Verwijder alle voetnoten**: Verwijdert alle voetnoten in het actieve document.
- **Zet voetnoten om naar eindnoten**: Converteert alle voetnoten naar een genummerde lijst aan het einde van het document.

### Gebruik

Om deze add-on te gebruiken, moeten de functies gekoppeld worden aan een menu in Google Docs. Dit wordt doorgaans gedaan met een `onOpen()` functie in de Apps Script-editor, die een aangepast menu aanmaakt van waaruit u de functies `deleteAllFootnotes()` en `convertFootnotesToEndnotes()` kunt uitvoeren.

## 2. Map Info Viewer

Een contextuele add-on voor Google Drive die informatie over de huidige map weergeeft.

### Functies

- Toont de naam en ID van de geselecteerde map in de zijbalk van Google Drive.

### Gebruik

Deze add-on wordt automatisch geactiveerd wanneer u in Google Drive navigeert. Selecteer een map om de details te zien.

## Installatie

Om deze scripts te gebruiken, moet u ze deployen als Google Apps Script projecten.

1. Ga naar [script.google.com](https://script.google.com) en maak een nieuw project.
2. Kopieer de code van een van de add-ons naar de editor.
   - Voor **Footnote Remover**, kopieer de inhoud van `Footnote-Remover-Code.gs`.
   - Voor **Map Info Viewer**, kopieer de inhoud van `MapInfoViewer/Code.gs` in het `Code.gs` bestand van het project en de inhoud van `MapInfoViewer/appsscript.json` in de `appsscript.json` manifest-editor.
3. Sla het project op.
4. Deploy de add-on. U kunt de add-on voor uzelf installeren of publiceren voor anderen.
