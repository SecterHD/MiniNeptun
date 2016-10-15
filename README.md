# Mini Neptun
Alkalmazások Fejlesztése Beadandó - MiniNeptun

## Funkcionális követelmények:
* Vendégként főoldalon láthatók a kiemelt kötelező tárgyak ,melyeket elvégzendő félév szerint lehet kategóriákba szedni.
* Vendégként lehet böngészni a tárgyak között.
* Vendégként lehet látni a tárgy leírását,oktatót, és a választható időpontokat.
* Vendégként lehet keresni az oldalon a tárgyak között
* Vendégként lehet regisztrálni az oldalon.
* Felhasználóként be lehet jelentkezni az oldalra.
* Felhasználóként a saját profilt lehet szerkeszteni.
* Felhasználóként lehet tárgyakat felvenni és leadni.
* Felhasználóként lehet módosítani ,hogy az adott tárgyból melyik órát szeretné felvenni.
* Adminisztrátorként lehet tárgyakat törölni és hozzáadni.
* Adminisztrátorként lehet Felhasználók által felvett tárgyakat törölni a felhasználótól.

## Nem funkcionális követelmények:
* Könnyen átlátható és kezelhető felület.
* Ergonómikus elrendezés.
* Gyors működés.
* Biztonságos működés:Jelszavak elrejtése,funkciók hozzáférésehez való helyes kezelés.

## Szakterületi fogalomjegyzék:
* Tárgy:  A rendszeben a hallgató által felvehető tantárgy.
* Oktató: Olyan tanár,aki az óra megtartásáért,és a tananyag leadásáért felel.

## Szerepkörök:
* Vendég: Tárgyak keresését,böngészését és megtekintését végezheti el.
* Felhasználó: A vendég szerepkörén túl képes a megadott tárgyakból az általa kiválasztottakat felvenni vagy leadni,továbbá módosíthatja melyik órára szeretne járni a tárgyon belül.
* Adminisztrátor: Felhasználó szerepkörén túl képes tárgyakat hozzáadni és törölni a tárgylistából.Tobábbá a felhasználók által felvett tárgyakról képes lejelentkeztetni a felhasználót.

## Használati Esetek:

![UseCase](https://SecterHD.github.com/MiniNeptun/uml/UseCaseDiagram2.png)

## Példa egy folyamatra:
Felhasználóként egy tárgyra való jelentkezés:

* A felhasználó a főoldalra érkezve bejelentkezik
* Megkeresi a felvenni kívánt kurzust
* Ha tudja elveszi, ha nem új kurzust keres
* Vagy végez a tárgyfelvétellel vagy felveszi a többi tárgyát is
* Kijelentkezik 

![Folyamat](https://SecterHD.github.com/MiniNeptun/uml/nomnoml (1).png)

## Oldaltérkép

- Publikus:
..*Főoldal
  -Tárgyak böngészése
  -Bejelentkezés
  -Regisztráció
- Felhasználó:
  -Kilépés
  -Saját profil
    -Tárgy leadása
    -Óra módosítása
  -Tárgyak böngészése
    -Tárgy felvétele
* Adminisztrátor:
*Új tárgy felvétele
  *Tárgyak böngészése
    *Tárgy törlése
  *Felhasználók böngészése
    *Felhasználó lejelentkeztetése

