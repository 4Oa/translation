import { useI18nStore } from '../store/i18n.store'
import { Translations } from './translation.types'

// API error code translation
const translations: Translations = {
  NON_VALID_FIXES: [
    'The file contains {} non valid fixes.',
    'Die Datei enthält {} ungültige Aufzeichnungen.',
    'Le fichier contient {} enregistrements invalides.',
    'Het bestand bevat {} ongeldige fixes.',
    '',
    'Il file contiene {} non validi',
    'Plik zawiera {} niepoprawnych pomiarów.',
    ''
  ],
  NON_INCREASING_TIMES: [
    'Time jump backwards from {} to {}.',
    'Zeitsprung rückwärts von {} nach {}.',
    'Saut dans le temps en arrière de {} à {}.',
    'Tijdsprong achteruit van {} naar {}.',
    '',
    'Il tempo salta indietro da {} a {}.',
    'Czas skacze w tył z {} do {}.',
    ''
  ],
  MULTIPLE_A_RECORDS: [
    'Multiple A Records provided.',
    'Mehrere A Records vorhanden.',
    'Plusieurs A Records disponibles.',
    'Meerdere A-Records verstrekt.',
    '',
    'Più record A forniti.',
    'Podano wiele rekordów A.',
    ''
  ],
  NO_I_RECORD: [
    'NO I Record provided.',
    'Keine I Records vorhanden.',
    'Pas de I Records disponible(s).',
    'Geen I-Records verstrekt.',
    '',
    'Nessun record I fornito.',
    'Nie podano rekordu I.',
    ''
  ],
  MULTIPLE_I_RECORDS: [
    'Multiple I records provided.',
    'Mehrere I Records vorhanden.',
    'Plusieurs I Records disponibles.',
    'Meerdere I-Records verstrekt.',
    '',
    'Più record I forniti.',
    'Podano wiele rekordów I.',
    ''
  ],
  INVALID_H_RECORD: [
    'Invalid H record: {}.',
    'Ungültiger H Record: {}.',
    'H Record invalide: {}.',
    'Ongeldig H-Record: {}',
    '',
    'Record H non valido: {}',
    'Niepoprawny rekord H: {}.',
    ''
  ],
  C_RECORD_TOO_LONG: [
    'C records contains more than 20 lines, not able to parse task.',
    'C Records enthält mehr als 20 Zeilen, Aufgabe kann nicht ausgelesen werden.',
    'C Records contient plus de 20 lignes, la déclaration de vol ne peut pas être lue.',
    'C-Records bevat meer dan 20 regels, niet mogelijk de opdracht uit te lezen.',
    '',
    "I record C contengono più di 20 righe, non sono in grado di analizzare l'attività.",
    'Rekordy C zawierają więcej niż 20 lini, nie można przeanalizować zadania.',
    ''
  ],
  NO_LANDING: [
    'Did not detect landing.',
    'Landung nicht erkannt.',
    'Atterrissage non détecté.',
    'Landing niet herkend.',
    '',
    'Non è stato rilevato un atterraggio.',
    'Nie wykryto lądowania',
    ''
  ],
  PRESS_ALT_VIOLATIONS: [
    'Pressure altitude range from {} to {} is exceeded in {} fixes.',
    'Gültiger Höhenbereich von {} bis {} wird in {} Aufzeichnungen überschritten.',
    "L'intervalle d'altitude barométrique de {} à {} a été dépassé dans {} traces GPS.",
    'Het drukhoogtebereik van {} tot {} wordt overschreden in {} fixes.',
    '',
    "L'intervallo dell'altitudine di pressione da {} a {} è stato superato in {} correzioni.",
    'Zakres wysokości ciśnieniowej od {} do {} został przekroczony w {} pomiarach.',
    ''
  ],
  GNSS_ALT_VIOLATIONS: [
    'GNSS altitude range from {} to {} is exceeded in {} GNSS fixes.',
    'Gültiger GPS-Höhenbereich von {} bis {} wird in {} Aufzeichnungen überschritten.',
    "L' intervalle d'altitude GPS de {} à {} a été dépassée dans {} traces GPS.",
    'GPS hoogtebereik van {} tot {} wordt overschreden in {} fixes',
    '',
    "L'intervallo di altitudine GNSS da {} a {} è stato superato in {} correzioni GNSS.",
    'Zakres wysokości GNSS od {} do {} został przekroczony w {} pomiarach.',
    ''
  ],
  HIGH_CHANGE_GNSS_ALT: [
    '{} high changes in GNSS altitude (more than {} m/s).',
    '{} hohe Wechsel der GNSS-Höhe (mehr als {} m/s).',
    "{} grands changements d'altitude GNSS (plus de {} m/s).",
    '{} grote veranderinen in je GPS-hoogte (meer dan {} m/s).',
    '',
    "{} variazioni elevate dell'altitudine GNSS (più di {} m / s).",
    '{} wielkich zmian w wysokości GNSS (więcej niż {} m/s).',
    ''
  ],
  HIGH_CHANGE_PRESS_ALT: [
    '{} high changes in pressure altitude (more than {} m/s).',
    '{} hohe Wechsel der Druck-Höhe (mehr als {} m/s).',
    "{} grands changements d'altitude barométrique (plus de {} m/s).",
    '{} grote veranderinen in je drukhoogte (meer dan {} m/s).',
    '',
    "{} variazioni elevate dell'altitudine-pressione (più di {} m / s).",
    '{} wielkich zmian w wysokości ciśnieniowej (więcej niż {} m/s).',
    ''
  ],
  MAX_GNSS_ALT_REACHED: [
    'Max GNSS sensor altitude is: {}, you reached: {}',
    'Maximale GNSS-Sensorhöhe des Loggers sind {} Meter, du hast {} Meter erreicht.',
    "L'altitude maximale du capteur GNSS de l'enregistreur est de {} mètres, tu as atteint {} mètres.",
    'Maximale GPS-sensorhoogte van de logger is {}, je hebt {} meter bereikt.',
    '',
    "L'altitudine massima del sensore GNSS è: {}, hai raggiunto: {}",
    'Maksymalna wysokość czujnika GNSS to: {}, osiągnąłeś: {}',
    ''
  ],
  MAX_PRESS_ALT_REACHED: [
    'Maximum pressure sensor altitude is: {}, your reached: {}',
    'Maximale Druck-Sensorhöhe des Loggers sind {} Meter, du hast {} Meter erreicht.',
    "L'altitude barométrique maximale du capteur de l'enregistreur est de {} mètres, tu as atteint {} mètres.",
    'Maximale Druksensorhoogte van de logger is {} meter, je hebt {} meter bereikt.',
    '',
    "L'altitudine massima del sensore di pressione è: {}, raggiunta: {}",
    'Maksymalna wartość czujnika wysokości ciśnieniowej to: {}, osiągnąłeś: {}',
    ''
  ],
  RAW_TIME_HARD_LIMIT_ALMOST_EXCEEDED: [
    'Hard time constraint ({} seconds) between fixes almost exceeded at {}, interval without logging is {} seconds.',
    'Hartes Zeitlimit ({} Sekunden) zwischen GPS-Werten beinahe überschritten um {}, Spanne ohne Aufzeichnung sind {} Sekunden.',
    "Limite de temps 'dure' ({} secondes) entre les données de trace GPS presque dépassée de {}, la période de temps sans enregistrement de trace GPS est de {} secondes.",
    'Harde tijdsinterval ({} seconden) tussen fixes bijna overschreden om {}, interval zonder log is {} seconden.',
    '',
    "Vincolo di tempo rigido ({} secondi) tra le correzioni quasi superato in {}, l'intervallo senza registrazione è di {} secondi.",
    'Twarde ograniczenia czasowe ({} sekund) pomiędzy pomiarami prawie przekroczone w {}, interwał bez logowania wynosi {} sekund.',
    ''
  ],
  RAW_TIME_HARD_LIMIT_EXCEEDED_OUTSIDE_SCORING: [
    'Hard time constraint ({} seconds) between fixes exceeded outside scoring intervals at {}, interval without logging is {} seconds.',
    'Hartes Zeitlimit ({} Sekunden) zwischen GPS-Werten außerhalb der Wertungsfenster überschritten um {}, Spanne ohne Aufzeichnung sind {} Sekunden.',
    "Limite de temps 'dure' ({} secondes) entre les données de trace GPS dépassée de {}, la période de temps sans enregistrement de trace GPS est de {} secondes.",
    'Harde tijdsinterval ({} seconden) tussen fixes overschreden om {}, interval zonder log is {} seconden.',
    '',
    "Vincolo di tempo rigido ({} secondi) tra le correzioni superato in {}, l'intervallo senza registrazione è di {} secondi.",
    'Twarde ograniczenia czasowe ({} sekund) pomiędzy pomiarami przekroczone w {}, interwał bez logowania wynosi {} sekund.',
    ''
  ],
  RAW_TIME_SOFT_LIMIT_EXCEEDED: [
    '{} intervals exceed soft time limit between fixes ({}s), allowed {} intervals.',
    '{} Zeitintervalle zwischen Aufzeichnungen überschreiten das weiche Limit von {} Sekunden, erlaubt sind {} Intervalle.',
    "Intervalles de temps entre les enregistrements dépassent la limite de temps 'soft' de {} secondes, des intervalles de {} sont autorisés. ",
    '{} tijdsinterval overschrijd de zachte tijdslimiet tussen fixes ({}s), {} intervallen toegestaan.',
    '',
    'Gli intervalli {} superano il limite di tempo flessibile tra le correzioni ({}), gli intervalli {} consentiti.',
    '{} interwały przekraczają miękki limit czasu pomiędzy pomiarami ({}s), dozwolone {} interwały.',
    ''
  ],
  MAX_GROUND_SPEED_WARNING: [
    'Ground speed of {} km/h at {} exceeds maximum of {} km/h, corresponding fixes are filtered out.',
    'Bodengeschwindigkeit von {} km/h bei {} überschreitet das Maximum von {} km/h, betreffende GPS-Fixe werden herausgefiltert.',
    'La vitesse sol de {} km / h à {} dépasse le maximum de {} km / h, les repères GPS pertinents sont filtrés.',
    'De grondsnelheid van {} km / u bij {} is hoger dan het maximum van {} km / u, relevante GPS-fixes worden eruit gefilterd.',
    'Pozemní rychlost {} km / h při {} překračuje maximum {} km / h, příslušné opravy GPS jsou odfiltrovány.',
    'La velocità al suolo di {} km / h a {} supera il massimo di {} km / h, i rilevamenti GPS pertinenti vengono filtrati.',
    'Prędkość względem ziemi {} km / h przy {} przekracza maksimum {} km / h, odpowiednie poprawki GPS są odfiltrowywane.',
    ''
  ],
  NO_AIRCRAFT_SELECTED: [
    'No aircraft has been selected.',
    'Es wurde kein Flugzeug ausgewählt.',
    "Aucun planeur n'a été sélectionné.",
    'Er is geen vliegtuig geselecteerd.',
    'Nebylo vybráno žádné letadlo.',
    'Nessun aereo è stato selezionato.',
    'Nie wybrano żadnego samolotu.',
    ''
  ],
  FUTURE_FLIGHT: [
    'Flight date is from future.',
    'Datum des Fluges liegt in der Zukunft.',
    'La date du vol se trouve dans le futur.',
    'Vluchtdatum ligt in de toekomst.',
    '',
    'La data del volo è nel futuro.',
    'Data lotu jest z przyszłości',
    ''
  ],
  NO_A_RECORD: [
    'No A Record provided.',
    'Kein A Records vorhanden.',
    'Pas de A Records disponible.',
    'Geen A-Record verstrekt.',
    '',
    'Nessun record A fornito.',
    'Nie podano rekordu A.',
    ''
  ],
  INVALID_QNH_VALUE: [
    'Determined QNH of {} hPa (based on altitude provided) is not between limits of {} hPa and {} hPa.',
    'Festgestelltes QNH von {} hPa (basierend auf der gegebenen Höhe) liegt außerhalb der Grenzen von {} hPa und {} hPa.',
    "Le QNH détecté de {} hPa (basé sur l'altitude donnée), se trouve en dehors des limites de {} hPa et {} hPa.",
    'Vastgestelde QNH van {} hPa (Gebaseerd op de verstrekte hoogte) ligt niet tussen de limiten van {} hPa en {} hPa.',
    '',
    "Il QNH determinato di {} hPa (in base all'altitudine fornita) non è compreso tra i limiti di {} hPa e {} hPa.",
    'Ustalone QNH o wartości {} hPA (bazowane na podanej wysokości) nie jest w granicach limitu od {} hPa do {} hPa.',
    ''
  ],
  PRESS_ALT_NOT_VALID: [
    'Pressure altitude in file is not valid, maximum value is {} meters.',
    'Druckhöhe in der Datei ist ungültig, maximale Höhe beträgt {} Meter.',
    "L'altitude barométrique est invalide, l'altitude maximale est de {} mètres.",
    'Druk hoogte in het bestand is ongeldig, maximale waarde is {} meter.',
    '',
    "L'altitudine della pressione nel file non è valida, il valore massimo è {} metri.",
    'Wysokość ciśnieniowa w pliku nie jest poprawna, maksymalna wartość to {} metrów',
    ''
  ],
  A_RECORD_TOO_SHORT: [
    'A Record is too short.',
    'A Record ist zu kurz.',
    'A Record est trop court.',
    'A-Record is the kort.',
    '',
    'Il record A è troppo corto.',
    'Rekord A jest za krótki.',
    ''
  ],
  H_RECORD_NO_DATE: [
    'No date in H Record provided.',
    'Kein Datum im H Record vorhanden.',
    'Pas de date disponible dans H Record.',
    'Geen datum in H-Record verstrekt.',
    '',
    'Nessuna data in H record fornito',
    'Nie podano daty w rekordzie H',
    ''
  ],
  NO_H_RECORD: [
    'No H Record provided.',
    'Kein H Record vorhanden.',
    'Pas de H Record disponible.',
    'Geen H-Record verstrekt.',
    '',
    'Nessun record H fornito.',
    'Nie podano rekordu H.',
    ''
  ],
  AVG_GNSS_ALT_CHANGE: [
    'Average GNSS altitude change between fixes in your file is {}, Minimum is {}.',
    'Durchschnittliche Differenz zwischen GNSS-Höhenwerten ist {}, Minimum sind {} Meter.',
    "La différence moyenne entre les données d'altitude GNSS est {}, le minimum est de {} mètres.",
    'De gemiddelde verandering van de GNSS-hoogte fixes in je bestand is {}, minimum is {}.',
    '',
    'La variazione di altitudine GNSS media tra le correzioni nel file è {}, il minimo è {}.',
    'Średnia zmiana wysokości GNSS pomiędzy pomiarami w Twoim pliku wynosi: {}, Minimum to: {}.',
    ''
  ],
  AVG_PRESS_ALT_CHANGE: [
    'Average pressure altitude change between fixes in your file is {}, Minimum is {}.',
    'Durchschnittliche Differenz zwischen Druck-Höhenwerten ist {}, Minimum sind {} Meter.',
    "La différence moyenne entre les données d'altitude barométrique est {}, le minimum est de {} mètres.",
    'De gemiddelde verandering van de drukhoogte tussen fixes in je bestand is {}, minimum is {}.',
    '',
    "La variazione media dell'altitudine della pressione tra le correzioni nel file è {}, il minimo è {}.",
    'Średnia zmiana wysokości ciśnieniowej pomiędzy pomiarami w Twoim pliku wynosi: {}, Minimum to: {}.',
    ''
  ],
  RAW_TIME_HARD_LIMIT_EXCEEDED: [
    'Hard time constraint ({} seconds) between fixes exceeded  at {}, interval without logging is {} seconds.',
    'Hartes Zeitlimit ({} Sekunden) zwischen GPS-Werten überschritten um {}, Spanne ohne Aufzeichnung sind {} Sekunden.',
    "Limite de temps 'dure' ({} secondes) entre les données de trace GPS dépassée de {}, la période de temps sans enregistrement de trace GPS est de {} secondes.",
    'Harde tijdsinterval ({} seconden) tussen fixes overschreden om {}, interval zonder log is {} seconden.',
    '',
    "Vincolo di tempo rigido ({} secondi) tra le correzioni superato in {}, l'intervallo senza registrazione è di {} secondi.",
    'Twarde ograniczenia czasowe ({} sekund) pomiędzy pomiarami przekroczone w {}, interwał bez logowania wynosi {} sekund.',
    ''
  ],
  NO_TAKEOFF: [
    'Did not detect takeoff.',
    'Start nicht erkannt.',
    "Le décollage n'a pas été détecté",
    'Start niet herkend.',
    '',
    'Decollo non rilevato.',
    'Nie wykryto startu.',
    ''
  ],
  FIXES_BEFORE_TAKEOFF: [
    'Found {} fixes before takeoff, required are {}.',
    '{} Aufzeichnungen vor dem Start gefunden, nötig sind {}.',
    '{} Enregistrements trouvés avant le décollage, {} sont nécessaires.',
    '{} fixes gevonden vóór het opstijgen, {} fixes vereist.',
    '',
    'Trovate {} correzioni prima del decollo, obbligatorie sono {}.',
    'Znaleziono {} pomiarów przed startem, wymagane są {}.',
    ''
  ],
  NO_ENGINE_SENSOR: [
    'No engine sensor found, allowed engine sensors: {}.',
    'Kein Motorsensor gefunden, erlaubte Sensoren sind: {}.',
    'Pas de capteur de moteur trouvé, les capteurs autorisés sont: {}.',
    'Geen motorsensor gevonden, toegestane sensoren zijn: {}.',
    '',
    'Nessun sensore del motore trovato, sensori del motore consentiti: {}.',
    'Nie wykryto czujnika silnika, dozwolone czujniki silnika: {}.',
    ''
  ],
  NO_FES_SENSOR: [
    'No FES sensor found, allowed FES sensors: {}.',
    'Kein FES Sensor gefunden, erlaubte Sensoren sind: {}.',
    'Pas de capteur FES trouvé, les capteurs autorisés sont: {}.',
    'Geen FES-sensor gevonden, toegestane sensoren zijn: {}.',
    '',
    'Nessun sensore FES trovato, sensori FES consentiti: {}.',
    'Nie wykryto czujnika FES, dozwolone czujniki FES: {}.',
    ''
  ],
  NO_SCORING_WINDOWS: [
    'No scoring windows were found.',
    'Keine Wertungsfenster gefunden.',
    "Pas de fenêtre d'épreuve trouvée.",
    'Geen scoringvenster gevonden.',
    '',
    'Nessuna finestra di punteggio è stata trovata.',
    'Nie wykryto okna punktacji.',
    ''
  ]
}

export function i18nFlightErrors (key: keyof typeof translations, params: any[]): string {
  const i18nStore = useI18nStore()

  if (!translations[key]) {
    console.error('Translation not found for', key)
    return ''
  }

  let template = translations[key][i18nStore.languageIndex]
  if (template === '') return translations[key][0] // english
  for (const param of params) template = template.replace('{}', param)

  return template
}
