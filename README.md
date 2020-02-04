# Zakaz handlu w Polsce (niedziele handlowe / niedziele niehandlowe)
## Google ICS exporter

> This project is useful only for Poles, thus README is in Polish.

Automat do generowania kalendarza w formacie ICS zawierającego:
- listę zdarzeń w dni (cały tydzień), w których obowiązuje zakaz lub ograniczenie handlu (czyli sprzedaż do 14:00)
- informację czy zakaz jest z powodu niedzieli czy święta
- zdarzenia są również w niedzielę, w które wolno handlować dla szybszego rozeznania

Lista na 2020 pobrana z:
https://bezprawnik.pl/niedziele-handlowe-w-2020-roku/

## Wymagania

W miarę nowy Node.js

## Sposób użycia

Najprościej (nie wymaga stałej instalacji czy aktualizacji):

`npx zakaz-handlu-w-polsce`

Generowanie kalendarza na inny rok (zazwyczaj dostępne tylko wstecz do 2020):

`npx zakaz-handlu-w-polsce 2025`

## Licencja

MIT
