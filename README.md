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

![UseCase](https://github.com/SecterHD/MiniNeptun/blob/master/uml/UseCaseDiagram2.png)

## Példa egy folyamatra:
Felhasználóként egy tárgyra való jelentkezés:

* A felhasználó a főoldalra érkezve bejelentkezik
* Megkeresi a felvenni kívánt kurzust
* Ha tudja elveszi, ha nem új kurzust keres
* Vagy végez a tárgyfelvétellel vagy felveszi a többi tárgyát is
* Kijelentkezik 

![Folyamat](https://github.com/SecterHD/MiniNeptun/blob/master/uml/nomnoml (1).png)

## Oldaltérkép:

- Publikus:
  - Főoldal
  - Tárgyak böngészése
  - Bejelentkezés
  - Regisztráció
- Felhasználó:
  - Kilépés
  - Saját profil
    - Tárgy leadása
    - Óra módosítása
  - Tárgyak böngészése
    - Tárgy felvétele
- Adminisztrátor:
  - Új tárgy felvétele
  - Tárgyak böngészése
    - Tárgy törlése
  - Felhasználók böngészése
    - Felhasználó lejelentkeztetése
    
## Végpontok:
* GET/: főoldal
* GET/login: bejelentkező oldal
* POST/login: bejelentkező adatok felküldése
* GET/login/signup: regisztrációs oldal
* POST/login/signup: regisztrációs adatok felküldése
* GET/logout: kijelentkező oldal
* GET/subjects: tárgylista oldal
* GET/subjects/add: tárgy felvétele,óra kiválasztása
* POST/subjects/add: tárgy felvétele,adatok felküldés
* GET/profile: profil oldal
* GET/profile/ id: tárgy adatai
* GET/profile/delete=id: tárgy leadása
* GET/profile/edit=id: óra módosítás
* POST/profile/edit=id: óra módosítás,adatok felküldése
* GET/subjects/new: új tárgy felvétele
* POST/subjects/new: új tárgy felvétele,adatok felküldése
* GET/subjects/delete=id: tárgy törlése
* GET/users: felhasználók listája
* GET/users/delete=id: felhasználó lejelentkeztetése egy tárgyról

## Osztálymodell:

![modell](https://github.com/SecterHD/MiniNeptun/blob/master/uml/nomnoml (3).png)

## Oldalvázlatok:

![login](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/New Mockup 1.png)
![reg](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/New Mockup 1 copy (Alternate 883g).png)
![subjects](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/New Mockup 2.png)
![orak](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/New Mockup 3.png)
![profil](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/New Mockup 3 copy.png)
![users](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/New Mockup 3 copy 2.png)






