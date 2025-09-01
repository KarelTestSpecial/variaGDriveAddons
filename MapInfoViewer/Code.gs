function onDriveContextOpen(e) {
  // Gebruik e.drive.activeCursorItem.id om de ID van de huidige map te krijgen.
  // We controleren eerst of activeCursorItem wel bestaat.
  const folderId = e.drive && e.drive.activeCursorItem ? e.drive.activeCursorItem.id : null;

  let folderName = "Onbekende map";
  if (folderId) {
    try {
      const folder = DriveApp.getFolderById(folderId);
      folderName = folder.getName();
    } catch (error) {
      // Log de fout voor debugging, indien gewenst
      console.error("Fout bij ophalen mapnaam: " + error.toString());
      folderName = "Kan map niet ophalen (geen toegang?)";
    }
  } else {
    // Dit wordt nu getoond als je in 'Mijn Drive' (root) bent, wat correct is.
    folderName = "Geen specifieke map geselecteerd (root)"; 
  }

  const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader()
      .setTitle("Map Info Viewer")) // Titel van de add-on, niet de kaart zelf
    .addSection(CardService.newCardSection()
      .setHeader("Huidige Mapinformatie") // Een header voor de sectie is duidelijker
      .addWidget(CardService.newTextParagraph()
        .setText(`<b>Naam:</b> ${folderName}`))
      .addWidget(CardService.newTextParagraph()
        .setText(`<b>ID:</b> ${folderId || 'Niet beschikbaar'}`)))
    .build();

  return card;
}
