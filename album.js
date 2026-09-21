/* ============================================================
   album.js : 앨범 사진 목록 (Album)
   ------------------------------------------------------------
   사진 한 장 = 아래 형식의 한 줄입니다. 쉼표(,)를 꼭 남겨두세요.

   { c: "캡션 문구", cat: "Lab life", img: "img/album/47.jpg" },

   c    : 사진 아래에 보이는 캡션
   cat  : 분류. 다음 중 하나 -> "Lab life", "Conferences", "Collaborations", "Seminars"
   img  : 사진 파일 경로. 사진은 img/album 폴더에 올리고 파일 이름을 여기에 적습니다.
          (사진이 아직 없으면 img: null 로 두면 빈 칸이 표시됩니다.)

   추가하는 법
   - 새 사진은 이 목록의 맨 위에 한 줄 추가합니다. (위쪽 = 최신)
   - 사진 파일은 가로 1200px 정도, 300KB 안팎으로 줄여서 올리면 페이지가 빨라집니다.
   - 번호(01, 02, ...)는 위에서부터 자동으로 매겨집니다.
   ============================================================ */
var ITEMS = [
    { c: "With Fudan Chemistry (Prof. Wen-Bin, Kun, Ming)", cat: "Collaborations", img: "img/album/01.jpg" },
    { c: "7th EDL culture day (strawberry party)", cat: "Lab life", img: "img/album/02.jpg" },
    { c: "The Korean Electrochemical Society in Busan (2026 spring)", cat: "Conferences", img: "img/album/03.jpg" },
    { c: "From NTU with KAIST-NTU-NUS-KIT", cat: "Collaborations", img: "img/album/04.jpg" },
    { c: "EDL with Dr. Dusan Strmcnik", cat: "Collaborations", img: "img/album/05.jpg" },
    { c: "ICAE 2025 (Jeju): Jongsu & Jinyeop", cat: "Conferences", img: "img/album/06.jpg" },
    { c: "2026 Winter (EDL members)", cat: "Lab life", img: "img/album/07.jpg" },
    { c: "Seminar at the Chemistry Department, UC Berkeley", cat: "Seminars", img: "img/album/08.jpg" },
    { c: "2025 Fall (EDL members)", cat: "Lab life", img: "img/album/09.jpg" },
    { c: "The KSIEC in Daegu (2025 Fall)", cat: "Conferences", img: "img/album/10.jpg" },
    { c: "JY, JS, HM with Prof. Shannon and a Nobel Laureate (Chemistry, UC Berkeley)", cat: "Collaborations", img: "img/album/11.jpg" },
    { c: "Reunion: Prof. Shannon's group with JY, JS, HM (UC Berkeley)", cat: "Collaborations", img: "img/album/12.jpg" },
    { c: "Student exchange program (JS & HM), Prof. Haotian Wang's group (Rice University)", cat: "Collaborations", img: "img/album/13.jpg" },
    { c: "Global Young Connect Project kick-off", cat: "Collaborations", img: "img/album/14.jpg" },
    { c: "Reconnecting with Prof. Chong Liu (UCLA)", cat: "Collaborations", img: "img/album/15.jpg" },
    { c: "Reunion: Prof. Voja's group with JY (UC Irvine)", cat: "Collaborations", img: "img/album/16.jpg" },
    { c: "The Korean Electrochemical Society in Jeju (2025 spring)", cat: "Conferences", img: "img/album/17.jpg" },
    { c: "한계도전 kick-off meeting", cat: "Collaborations", img: "img/album/18.jpg" },
    { c: "2025 Summer (EDL members)", cat: "Lab life", img: "img/album/19.jpg" },
    { c: "Graduation ceremony (2025)", cat: "Lab life", img: "img/album/20.jpg" },
    { c: "6th EDL culture day (strawberry party)", cat: "Lab life", img: "img/album/21.jpg" },
    { c: "The Korean Electrochemical Society in Jeju (2025 spring)", cat: "Conferences", img: "img/album/22.jpg" },
    { c: "With Prof. Joseph Hupp (Northwestern), 2024 KICHE", cat: "Conferences", img: "img/album/23.jpg" },
    { c: "19th InterAcademy (Rome, Italy)", cat: "Conferences", img: "img/album/24.jpg" },
    { c: "With Prof. Hyeon and Ryu (Rome, Italy)", cat: "Conferences", img: "img/album/25.jpg" },
    { c: "2024 Fall (EDL members)", cat: "Lab life", img: "img/album/26.jpg" },
    { c: "EDL with Prof. Haotian Wang (Rice University)", cat: "Collaborations", img: "img/album/27.jpg" },
    { c: "Reunion with Voja and Dusan at PRIME 2024 (Hawaii)", cat: "Conferences", img: "img/album/28.jpg" },
    { c: "The Korean Electrochemical Society in Busan (2024 spring)", cat: "Conferences", img: "img/album/29.jpg" },
    { c: "Internal seminar with Dr. Yoo Jun Son (Shell)", cat: "Seminars", img: "img/album/30.jpg" },
    { c: "Internal seminar with Dr. Heejong Shin (Northwestern University)", cat: "Seminars", img: "img/album/31.jpg" },
    { c: "3rd EDL culture day", cat: "Lab life", img: "img/album/32.jpg" },
    { c: "4th EDL culture day (winter camp)", cat: "Lab life", img: "img/album/33.jpg" },
    { c: "5th EDL culture day (strawberry party)", cat: "Lab life", img: "img/album/34.jpg" },
    { c: "2nd EDL culture day (baseball game)", cat: "Lab life", img: "img/album/35.jpg" },
    { c: "2023 CBE International Symposium on Catalysis", cat: "Conferences", img: "img/album/36.jpg" },
    { c: "EDL with Prof. Shannon Boettcher", cat: "Collaborations", img: "img/album/37.jpg" },
    { c: "2023 Teachers' Day event", cat: "Lab life", img: "img/album/38.jpg" },
    { c: "1st EDL culture day (movie day)", cat: "Lab life", img: "img/album/39.jpg" },
    { c: "With Dr. Byeongdu Lee (APS)", cat: "Collaborations", img: "img/album/40.jpg" },
    { c: "After the 1st EDL conference with Prof. Voja", cat: "Collaborations", img: "img/album/41.jpg" },
    { c: "The Korean Electrochemical Society in Jeju (2023 spring)", cat: "Conferences", img: "img/album/42.jpg" },
    { c: "With Prof. Andy at EDL", cat: "Collaborations", img: "img/album/43.jpg" },
    { c: "After the 1st meeting", cat: "Lab life", img: "img/album/44.jpg" },
    { c: "2023 Spring (EDL members)", cat: "Lab life", img: "img/album/45.jpg" },
    { c: "Reunion with Prof. Voja and Prof. Simon in Gangnam", cat: "Collaborations", img: "img/album/46.jpg" }
];
