# 📌 Rättningsrapport – fed25s-the-webshop-webbshop-js

## 🎯 Uppgiftens Krav:
# The Webshop - En inlämningsuppgift

Denna uppgift går ut på att ni skall bygga en webbshop baserat på kraven här under.
Projektet är ett vite-projekt med vanilla/typescript.
Målet är att studenterna skall förstå vad som krävs för att skicka information mellan sidor, använda localStorage och kunna manipulera data i listor och objekt.

## VIKTIGT

Varukorgen skall vara en lista med objekt som baseras på en ny klass eller datatyp. Denna klass/datatyp skall innehålla en produkt men också hur många av denna produkt som varukorgen har. Ibland kan det behövas mer information i detta objekt, men minst skall klassen innhålla produkt och antal på något sätt.

## Teknik

- HTML
- SCSS
- TypeScript

## Krav - Betyg G

- En landningssida (startsida)
- En produktsida (Produktdetaljer)
- En kassasida
- En varukorg
- Kunna lägga produkter i varukorgen
- Simulera att ett köp genomförs på kassasidan
- Beräkna fram ett totalpris på produkterna i varukorgen
- Att informationen i varukorgen lagras genom utökade objekt, inte bara en produkt
- Att kunna öka/minska antalet produkter i varukorgen.
- Att kunna öka/minska antalet produkter på kassasidan
- Koden skall vara mycket väl strukturerad, väl formaterad samt innehålla god namngivning

## Styling

Försök att arbeta med så mycket styling ni hinner. Det är en rolig uppgift att ha med i ett portfolio framöver. Se till att era animationer är subtila. Arbeta med hero-images, kanske med lite video/ljud. Och skapa en bra struktur mer er scss redan från början.

## Krav för styling

Det är inget krav att video och ljud används.
Partials bör användas.
Mixins skall användas om möjligt, t.ex. för mediaqueries.
Ingen dubbelstyling, används mixins i sådana fall.

## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-webbshop-js\src\data\products.ts - no-unused-vars - 'heroImg' is defined but never used.,@typescript-eslint/no-unused-vars - 'heroImg' is defined but never used.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-webbshop-js\src\pages\cart\cartPage.ts - no-console - Unexpected console statement.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-webbshop-js\src\pages\pdp\pdp.ts - no-console - Unexpected console statement.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-webbshop-js\src\utils\checkoutUtils.ts - no-unused-vars - 'message' is assigned a value but never used.,@typescript-eslint/no-unused-vars - 'message' is assigned a value but never used.

## 🏆 **Betyg: G**
📌 **Motivering:** Teknisk analys genomförd men JSON-parsning misslyckades

💡 **Förbättringsförslag:**  
Kontrollera kodkvalitet och kravuppfyllelse manuellt

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| Lo | 84 | 39.4% | 0.2 | 0.28 |
| mikael-johnsson | 80 | 37.6% | 0.2 | 0.27 |
| Emma Riklund | 37 | 17.4% | 0.2 | 0.19 |
| Liudmyla Valier | 10 | 4.7% | 0.2 | 0.14 |
| Mikael Johnsson | 2 | 0.9% | 0.2 | 0.12 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
