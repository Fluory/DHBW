Nach den Systemen geht es jetzt um die Abläufe, die sie unterstützen. Dieses Kapitel zeigt, wie du einen Geschäftsprozess als ereignisgesteuerte Prozesskette (EPK) darstellst und prüfst. Es ist der praktischste Teil von Tag 1. Du sollst eine EPK lesen, Fehler finden und eine kleine EPK selbst zeichnen können.

### Geschäftsprozesse

Ein Geschäftsprozess ist eine sachlogisch-zeitliche Abfolge von Tätigkeiten. Er beginnt mit einem auslösenden Ereignis und endet mit einem definierten Ergebnis. Er läuft oft über mehrere Abteilungen und wiederholt sich, deshalb lässt er sich gut durch IS unterstützen. Kernprozesse schaffen direkt Wert für den Kunden, Managementprozesse steuern das Unternehmen, Unterstützungsprozesse halten den Betrieb am Laufen. Ein Prozessmodell ist dynamisch und zeigt den Ablauf. Ein Datenmodell ist statisch und zeigt die Daten. Man geht vom Ist-Modell über das Soll-Modell zur Umsetzung im IS.

### Die Elemente der EPK

In einer EPK wechseln sich Ereignisse und Funktionen ab. Ein Ereignis ist ein eingetretener Zustand und wird als Sechseck gezeichnet, etwa „Auftrag eingegangen“. Eine Funktion ist eine Tätigkeit im abgerundeten Rechteck, etwa „Auftrag prüfen“. Verzweigt oder zusammengeführt wird nur über Konnektoren. XOR heißt genau ein Weg, OR heißt mindestens ein Weg, AND heißt alle Wege parallel. Die erweiterte EPK hängt an Funktionen noch Organisationseinheiten und Anwendungssysteme, mit Linien ohne Pfeil.

### Die sechs Regeln

Mit sechs Regeln prüfst du jede EPK. Erstens beginnt und endet sie mit Ereignissen. Zweitens wechseln Ereignis und Funktion sich ab, auch über Konnektoren hinweg. Drittens hat jedes Ereignis und jede Funktion genau eine Kante hinein und eine hinaus. Viertens entscheiden nur Funktionen, also folgt auf ein Ereignis kein XOR- oder OR-Split. Ein AND-Split und jeder Join sind dort erlaubt. Fünftens wird so zusammengeführt, wie aufgeteilt wurde. Ein XOR-Split mit AND-Join führt zum Deadlock, weil der Join auf einen Weg wartet, der nie kommt. Sechstens benennst du Ereignisse als Zustand und Funktionen als Tätigkeit. Ein Modell kann alle Regeln einhalten und trotzdem fachlich falsch sein.

### Ein durchgespielter Fall

Bei der Sonnenschein AG geht eine Stornoanfrage ein. Das Startereignis heißt „Stornoanfrage eingegangen“. Der Kundenservice führt die Funktion „Stornobedingungen prüfen“ im Buchungssystem aus. Erst diese Funktion entscheidet, deshalb folgt hier der XOR-Split in „Storno kostenfrei“ und „Gebühr fällig“. Im zweiten Zweig kommen „Gebührenrechnung erstellen“ und „Gebührenrechnung erstellt“. Beide Wege laufen in einen XOR-Join, danach folgt „Buchung stornieren“ und „Buchung storniert“. Nach diesem Ereignis teilt ein AND-Split in „Hotel informieren“ und „Kunde benachrichtigen“, denn beides passiert gleichzeitig. Ein AND-Join führt zum Endereignis „Stornierung abgeschlossen“. Jede Regel ist erfüllt.

### Das musst du können

- Kern-, Management- und Unterstützungsprozesse unterscheiden und begründet zuordnen
- die EPK-Elemente und die drei Konnektoren erklären
- die sechs Modellierungsregeln auswendig nennen
- eine gegebene EPK prüfen, Fehler finden und die verletzte Regel benennen
- einen kurzen Falltext als EPK zeichnen
