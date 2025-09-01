function deleteAllFootnotes() {
  const body = DocumentApp.getActiveDocument().getBody();
  const footnotes = body.getFootnotes();
  for (let i = footnotes.length - 1; i >= 0; i--) {
    footnotes[i].removeFromParent();
  }
}

function convertFootnotesToEndnotes() {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  const footnotes = body.getFootnotes();

  if (footnotes.length === 0) {
    DocumentApp.getUi().alert("Geen voetnoten gevonden.");
    return;
  }

  // Maak een array van eindnoot-teksten
  const endnotes = [];

  for (let i = footnotes.length - 1; i >= 0; i--) {
    const footnote = footnotes[i];
    const text = footnote.getFootnoteContents().getText();
    endnotes.unshift(text); // voeg toe aan het begin van de lijst
    footnote.removeFromParent(); // verwijder de voetnoot
  }

  // Voeg kopje toe voor eindnoten
  body.appendParagraph("\nEindnoten").setHeading(DocumentApp.ParagraphHeading.HEADING2);

  // Voeg genummerde eindnoten toe
  for (let j = 0; j < endnotes.length; j++) {
    body.appendParagraph((j + 1) + ". " + endnotes[j]);
  }

  DocumentApp.getUi().alert("Voetnoten zijn omgezet naar eindnoten.");
}
