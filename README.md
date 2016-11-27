# Mini Neptun
Alkalmazások Fejlesztése Beadandó - MiniNeptun

## Funkcionális követelmények:
* Vendégként lehet böngészni a tárgyak között.
* Vendégként lehet regisztrálni az oldalon.
* Felhasználóként be lehet jelentkezni az oldalra.
* Felhasználóként lehet tárgyakat felvenni és leadni.
* Felhasználóként lehet módosítani ,hogy az adott tárgyból melyik kurzust szeretné felvenni.
* Adminisztrátorként lehet tárgyakat törölni és hozzáadni.
* Adminisztrátorként lehet új kurzust hozzáadni,módosítani és törölni.
* Adminisztrátorként lehet Felhasználót törölni.
* Adminisztrátorként lehet Felhasználók által felvett tárgyakat törölni a felhasználótól.

## Nem funkcionális követelmények:
* Könnyen átlátható és kezelhető felület.
* Ergonómikus elrendezés.
* Gyors működés.
* Biztonságos működés:Jelszavak elrejtése,funkciók hozzáférésehez való helyes kezelés.

## Szakterületi fogalomjegyzék:
* Tárgy:  A rendszeben a hallgató által felvehető tantárgy.
* Oktató: Olyan tanár,aki az óra megtartásáért,és a tananyag leadásáért felel.
* Kurzus: Egy tárgyból több kurzus is indul különböző időpontokban,így a hallgató kiválaszthaja a neki legmegfelelőbbet.

## Szerepkörök:
* Vendég: Tárgyak böngészését és megtekintését végezheti el.
* Felhasználó: A vendég szerepkörén túl képes a megadott tárgyakból az általa kiválasztottakat felvenni vagy leadni,továbbá módosíthatja melyik órára szeretne járni a tárgyon belül.
* Adminisztrátor: Felhasználó szerepkörén túl képes tárgyakat hozzáadni és törölni a tárgylistából.Tobábbá a felhasználók által felvett tárgyakról képes lejelentkeztetni a felhasználót.Ezenkívül képes még Kurzusokat létrehozni,módosítani és törölni,plusz felhasználókat törölni.

## Használati Esetek:

![UseCase](https://github.com/SecterHD/MiniNeptun/blob/master/uml/UseCaseDiagram2.png)

## Példa egy folyamatra:
Felhasználóként egy tárgyra való jelentkezés:

* A felhasználó a főoldalra érkezve bejelentkezik
* Megkeresi a felvenni kívánt kurzust
* Ha tudja felveszi, ha nem új kurzust keres
* Vagy végez a tárgyfelvétellel vagy felveszi a többi tárgyát is
* Kijelentkezik 

![Folyamat](https://github.com/SecterHD/MiniNeptun/blob/master/uml/nomnoml (1).png)

## Oldaltérkép:

- Publikus:
  - Bejelentkezés
  - Tárgyak böngészése
  - Regisztráció
- Felhasználó:
  - Kilépés
  - Saját profil
    - Tárgy leadása
  - Tárgylista böngészése
    - Kurzus módosítása
    - Tárgy felvétele
- Adminisztrátor:
  - Új tárgy felvétele
  - Új kurzus felvétele
  - Tárgyak törlése
  - Tárgylista böngészése
    - Kurzus módosítása
    - Kurzus törlése
  - Felhasználók böngészése
    - Felhasználó kurzusainak megtekintése
      - Felhasználó adott kurzusról való lejelentkeztetése
    - Felhasználó törlése
    
## Végpontok:
* GET/: bejelentkező oldal
* POST/: bejelentkező adatok felküldése
* GET/signup: regisztrációs oldal
* POST/signup: regisztrációs adatok felküldése
* GET/logout: kijelentkező oldal
* GET/lectures: tárgylista oldal
* GET/lectures/addLecture: tárgy felvétele
* POST/lectures/addLecture: tárgy felvétele,adatok felküldés
* GET/lectures/addCourse: kurzus felvétele felvétele
* POST/lectures/addCourse: tárgy felvétele,adatok felküldés
* GET/lectures/deleteLecture: tárgyak listája,kiválasztás törléshez
* POST/lectures/deleteLecture/:id : tárgy törlése
* GET/lectures/:id/edit: kurzus módosítása
* POST/lectures/:id/edit: kurzus módositása,adatok felküldés
* POST/lectures/:id/join: kurzus felvétele
* POST/lectures/:id/delete: kurzus törlése
* GET/profile: profil oldal
* POST/profile/:id/delete: tárgy leadása
* GET/students: felhasználók listája
* POST/students/:id/deleteStrudent: felhasználó törlése
* GET/students/:id/showCourses: adott felhasználó kurzusainak megjelenítése
* POST/students/:id/deleteJoin: felhasználó adott kurzusról való lejelentkeztetése

## Osztálymodell:

![modell](https://github.com/SecterHD/MiniNeptun/blob/master/uml/nomnoml (3).png)

## Oldalvázlatok:

![login](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/login.png)
![reg](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/register.png)
![courses](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/courses.png)
![lectures](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/lectures.png)
![profile](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/profile.png)
![students](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/students.png)
![newLecture](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/newLecture.png)
![newCourse](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/newCourse.png)
![editCourse](https://github.com/SecterHD/MiniNeptun/blob/master/drotvaz/editCourse.png)

## Plusz info:

* Egy darab admin user van,amit az oldal indulásakor lehet létrehozni. Jelenlegi állapotban az admin Neptun kódja:admin,jelszava:admin.
* Jelenleg a teszteléshez 7 diák lett létrehozva,melyeknek adatai:
- NKódok:teszt1,teszt2,teszt3,teszt4,teszt5,teszt6,teszt7.
- Jelszavak:asd1,asd2,asd,asd,asd,asd,asd.







