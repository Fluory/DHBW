Ein Computer kennt nur zwei Zustände: Strom an oder aus, 1 oder 0. Dieses Kapitel zeigt, wie man damit trotzdem jede Zahl darstellen und mit ihr rechnen kann, auch negative Zahlen und Kommazahlen. Es baut auf Kapitel 1 auf: Dort war ein Bit die kleinste Informationseinheit. Hier wird aus vielen Bits eine Zahl.

### Stellenwerte: die Idee hinter allen Zahlensystemen

Im Dezimalsystem hat jede Stelle den zehnfachen Wert der Stelle rechts daneben: Einer, Zehner, Hunderter. Im Binärsystem ist es genauso, nur mit dem Faktor 2. Die Stellen sind also 1, 2, 4, 8, 16, 32 … Beim Oktalsystem ist der Faktor 8, beim Hexadezimalsystem 16. Hex braucht deshalb Ziffern über 9: A = 10 bis F = 15. Wer diese Stellenwerte auswendig kann, hat den wichtigsten Teil des Kapitels schon verstanden. Alles Weitere ist Anwendung davon.

### Umrechnen in beide Richtungen

**Nach dezimal** rechnest du, indem du jede Ziffer mit ihrem Stellenwert malnimmst und alles addierst: 101101₂ = 32 + 8 + 4 + 1 = 45. **Von dezimal** in ein anderes System gehst du umgekehrt vor: immer wieder durch die Basis teilen und die Reste **von unten nach oben** lesen. Zwischen Binär, Oktal und Hex gibt es eine Abkürzung, weil 8 = 2³ und 16 = 2⁴ ist. Drei Bits ergeben eine Oktalziffer, vier Bits eine Hexziffer. Die Gruppen bildest du immer **von rechts**. So wird 100 = 0110 0100₂ zu 64₁₆ und zu 144₈.

### Rechnen: Addieren und negative Zahlen

Binär addierst du wie schriftlich im Dezimalsystem, nur dass 1 + 1 schon einen Übertrag ergibt: 1 + 1 = 0, Übertrag 1. Für negative Zahlen nutzt der Rechner das **Zweierkomplement**. Es braucht immer eine feste Bitbreite, meistens 8 Bit. Du schreibst die positive Zahl hin, drehst alle Bits um und addierst 1. Aus 25 = 0001 1001 wird so 1110 0111 = −25. Das Schöne daran: Subtrahieren wird zu Addieren. Für a − b rechnest du a + (Zweierkomplement von b), und ein Übertrag ganz links fällt einfach weg.

### Grenzen: Überlauf und Kommazahlen

Mit 8 Bit im Zweierkomplement passen nur Zahlen von −128 bis +127 hinein. Ist das Ergebnis größer, gibt es einen **Überlauf**. Man erkennt ihn daran, dass zwei positive Zahlen plötzlich ein negatives Ergebnis liefern oder zwei negative ein positives. Kommazahlen rechnest du hinter dem Komma nicht durch Teilen, sondern durch **Malnehmen mit 2** um: 0,625 · 2 = 1,25 gibt eine 1, 0,25 · 2 = 0,5 gibt eine 0, 0,5 · 2 = 1,0 gibt eine 1. Also ist 0,625 = 0,101₂. Manche Zahlen wie 0,4 gehen dabei nie auf und werden periodisch. Deshalb rechnet der Computer bei Kommazahlen manchmal ungenau.

### Ein Beispiel, das alles verbindet

Rechne 30 − 45 in 8 Bit. Zuerst wandelst du beide Zahlen um: 30 = 0001 1110 und 45 = 0010 1101. Dann bildest du das Zweierkomplement von 45: umdrehen ergibt 1101 0010, plus 1 ergibt 1101 0011. Jetzt addierst du: 0001 1110 + 1101 0011 = 1111 0001. Die erste Stelle ist 1, das Ergebnis ist also negativ. Zum Ablesen drehst du wieder um und addierst 1: 0000 1111 = 15. Das Ergebnis ist −15. Probe: 30 − 45 = −15 ✓. Ein Überlauf ist hier unmöglich, weil eine positive und eine negative Zahl addiert wurden.

### Das musst du können

- Stellenwerte bis 1024 (binär), 512 (oktal) und 4096 (hex) auswendig
- jede Zahl zwischen Dezimal, Binär, Oktal und Hex umrechnen und die Probe machen
- binär addieren und mit dem Zweierkomplement subtrahieren (8 Bit)
- einen Überlauf erkennen und begründen
- einen Nachkommateil ins Binärsystem umrechnen
