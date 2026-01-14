import { MergedAuthor, ScopusRaw, WosRaw } from '../types';

// Raw Data Injection from Prompt
const SCOPUS_CSV = `Author Name,Auth-ID,Number of Documents,Subject Area,Orc_ID
"Jayanti, Titik Ayu Dwi","57217134287","1","Engineering
Materials Science
"
"Hamid, Nur","57222560986","16","Social Sciences
Environmental Science
Computer Science
Arts and Humanities
Economics, Econometrics and Finance
Decision Sciences
Energy
Business, Management and Accounting
Engineering
Materials Science
Earth and Planetary Sciences
Physics and Astronomy
","0000-0002-7447-5872"
"Fadlilah, Sayyidatul","58544138800","3","Social Sciences
Arts and Humanities
"
"Nurhayati, Alwiyah","57202788084","6","Materials Science
Engineering
Physics and Astronomy
Chemical Engineering
Chemistry
","0000-0001-7900-6269"
"Ain, Aiyuhan Nurul","59966712300","1","Social Sciences
Arts and Humanities
"
"Saifudin","59974950000","1","Social Sciences
"
"Fad, Mohammad Farid","58667249200","1","Social Sciences
"
"Saminanto","57222610082","1","Environmental Science
Earth and Planetary Sciences
"
"Imroni, Mohamad A.","57778682200","1","Arts and Humanities
"
"Hadi, Abdul","58654684000","2","Social Sciences
Arts and Humanities
"
"Della, N. V.","57211192866","1","Environmental Science
Earth and Planetary Sciences
"
"Asy'Ari Ulamai, A. Hasan","58259246100","1","Social Sciences
"
"Wahab","57223390240","2","Business, Management and Accounting
Computer Science
Social Sciences
Decision Sciences
"
"Luthfan, M. Aqil","59758878300","1","Arts and Humanities
","0000-0002-3181-9583"
"Febriana, Asri","58984004800","1","Environmental Science
"
"Rahmania, Sera Syarifah","57221599787","2","Physics and Astronomy
"
"Sholahuddin, M.","59259583900","1","Earth and Planetary Sciences
Environmental Science
"
"Musyafiq, Ahmad","58535843500","1","Arts and Humanities
"
"Nisa, Eva Khoirun","57201664961","2","Physics and Astronomy
"
"Afida, Anna Martiana","57211805485","4","Business, Management and Accounting
Economics, Econometrics and Finance
Social Sciences
Agricultural and Biological Sciences
Environmental Science
Medicine
Biochemistry, Genetics and Molecular Biology
"
"Musahadi, Musahadi","58929422800","1","Arts and Humanities
Social Sciences
"
"Mashudi, Mashudi","57213518325","13","Agricultural and Biological Sciences
Environmental Science
Earth and Planetary Sciences
Economics, Econometrics and Finance
Energy
Arts and Humanities
Business, Management and Accounting
Biochemistry, Genetics and Molecular Biology
Social Sciences
"
"Safitri, Ririh Megah","57215685092","5","Social Sciences
Psychology
Arts and Humanities
"
"Asyifa, Laily Nur","58808760200","2","Business, Management and Accounting
Economics, Econometrics and Finance
Computer Science
"
"Ichwan, Moh Nor","59351109600","4","Arts and Humanities
Social Sciences
","0000-0002-7139-9595"
"Farikha, Ginda Putri","57222613583","1","Environmental Science
Earth and Planetary Sciences
"
"Umar, A.","59916199300","1","Arts and Humanities
Social Sciences
"
"Lianah","57216313003","2","Agricultural and Biological Sciences
Earth and Planetary Sciences
Environmental Science
"
"Norasia, Yolanda","57209459203","10","Mathematics
Physics and Astronomy
Decision Sciences
Engineering
Computer Science
"
"Fikri, Ibnu","57222741697","1","Social Sciences
","0000-0002-7017-8248"
"Raharjo, Raharjo","60234052800","1","Social Sciences
"
"Muslam","59758661300","1","Arts and Humanities
"
"Azkarrula, Youla Afifah","58972097100","1","Arts and Humanities
Social Sciences
"
"Madita, Rach","58311185900","1","Psychology
"
"Saadah, Ira Nailas","57210311673","2","Agricultural and Biological Sciences
Medicine
","0000-0002-6625-0200"
"Mustopa","58955997100","1","Social Sciences
"
"Komarudin, Komarudin","60197777400","1","Psychology
"
"Rofiuddin, Ahmad Adib","57196045299","1","Social Sciences
","0000-0002-0820-4695"
"Purwanti, Kristi Liani","57467933300","4","Business, Management and Accounting
Arts and Humanities
Decision Sciences
Social Sciences
Computer Science
Physics and Astronomy
"
"Sya’roni, Mokh","59727585600","2","Arts and Humanities
Social Sciences
"
"Muchlis","59986035800","1","Arts and Humanities
Social Sciences
"
"Norra, B. I.","57222338699","3","Physics and Astronomy
Earth and Planetary Sciences
Environmental Science
"
"Kamal, Irsyad","57222614789","9","Agricultural and Biological Sciences
Environmental Science
Earth and Planetary Sciences
Engineering
Materials Science
Biochemistry, Genetics and Molecular Biology
","0000-0002-2375-8418"
"Rofiq, Ahmad","57189248018","12","Social Sciences
Business, Management and Accounting
Economics, Econometrics and Finance
Arts and Humanities
Earth and Planetary Sciences
Environmental Science
Dentistry
"
"Zhafira, Hana","60089052400","1","Mathematics
Decision Sciences
"
"Rosyidah, Noor","58685095000","2","Computer Science
Business, Management and Accounting
Social Sciences
Multidisciplinary
"
"Nurhadi, Agus","60245955000","1","Social Sciences
"
"Wibowo, Teguh","57217869556","10","Earth and Planetary Sciences
Environmental Science
Energy
Physics and Astronomy
Social Sciences
","0000-0003-0523-639X"
"Nafi Annury, Muhammad","60082262500","1","Social Sciences
Arts and Humanities
"
"Marzuki, Ismail","60253794300","3","Social Sciences
Computer Science
Arts and Humanities
Business, Management and Accounting
"
"Hafshah, Mutista","58874875700","1","Agricultural and Biological Sciences
Biochemistry, Genetics and Molecular Biology
"
"Syukur, Suparman","58844103600","2","Social Sciences
"
"Rokhmadi","58397394800","2","Social Sciences
Arts and Humanities
Business, Management and Accounting
Engineering
"
"Salim, Nur","57571782800","1","Physics and Astronomy
"
"Rismana, Daud","58614466200","8","Social Sciences
Arts and Humanities
Medicine
"
"Faiq, Muhammad","57639882600","2","Arts and Humanities
Social Sciences
","0000-0002-1082-7824"
"Muslih, Muslih","57209421258","3","Arts and Humanities
Social Sciences
","0000-0001-8169-155X"
"Zohara, Lira","59559698900","1","Social Sciences
Arts and Humanities
"
"Susilowati, Fitria","57226362648","2","Medicine
Physics and Astronomy
"
"Anggraini, Agustina","60082602500","1","Mathematics
Decision Sciences
"
"Kuntarini, Agustin Absari Wahyu","58696602000","1","Physics and Astronomy
"
"Rohmah, B. L.","57571596100","1","Physics and Astronomy
"
"Hadziq, Abdullah","57996309800","1","Psychology
"
"Khasan, Moh","57224477563","3","Arts and Humanities
Multidisciplinary
","0000-0002-5329-9216"
"Firmansyah, Arizal","57768225300","2","Chemistry
"
"Emiliya, Iliya","59174249500","1","Physics and Astronomy
"
"Mulyatun, M.","57217985300","5","Energy
Environmental Science
Chemical Engineering
Chemistry
Earth and Planetary Sciences
Physics and Astronomy
"
"Darsyah, Moh Yamin","57195937118","4","Physics and Astronomy
Social Sciences
Energy
Environmental Science
Mathematics
Engineering
Computer Science
","0000-0003-4439-0509"
"Adila, Arina Hukmu","59974614900","1","Social Sciences
"
"Naifah, Naifah","57259522100","3","Social Sciences
Arts and Humanities
"
"Qudsiyah, Emamatul","58917063900","1","Engineering
"
"Anita Karunia, Z.","57191540676","1","Physics and Astronomy
"
"Mashudi","58685095100","1","Multidisciplinary
"
"Afendi, Arif","58894845900","3","Business, Management and Accounting
Economics, Econometrics and Finance
","0009-0002-5767-0323"
"Rachmawati, Farida","58884569500","1","Agricultural and Biological Sciences
Medicine
Nursing
"
"Budiman, Achmad Arief","58181978100","2","Social Sciences
Arts and Humanities
"
"Faqih, Muhammad Izzatul","42061278500","2","Engineering
Physics and Astronomy
Materials Science
","0000-0002-6449-667X"
"Hasanah, Silviatul","57205078809","4","Social Sciences
Computer Science
Arts and Humanities
Engineering
Medicine
Health Professions
Psychology
Physics and Astronomy
"
"Syukur, Fatah","57881169100","3","Arts and Humanities
Social Sciences
Computer Science
"
"El-Junusi, Rahman","58896414200","5","Business, Management and Accounting
Economics, Econometrics and Finance
Social Sciences
Arts and Humanities
Decision Sciences
"
"Ashidiqi, Iqnaul Umam","58809762100","1","Arts and Humanities
"
"Miasary, Seftina Diyah","58916087100","4","Physics and Astronomy
Mathematics
Decision Sciences
","0000-0002-9939-2029"
"Fauzi, Muchamad","57219947055","1","Pharmacology, Toxicology and Pharmaceutics
"
"Zulfikah, Putri","59233822500","1","Multidisciplinary
"
"Nasikhin, Nasikhin","59759975500","1","Social Sciences
Arts and Humanities
"
"Najichah, Najichah","59559698800","1","Arts and Humanities
Social Sciences
"
"Apriliana, Evita Nur","58696544300","1","Physics and Astronomy
","0000-0001-6128-3524"
"Rohmatina, Ita","57199421650","1","Physics and Astronomy
"
"Setyawati, Siti M.","57211427190","2","Environmental Science
Agricultural and Biological Sciences
Physics and Astronomy
"
"Perwita, Atika Dyah","57223392402","10","Agricultural and Biological Sciences
Computer Science
Earth and Planetary Sciences
Environmental Science
Medicine
Energy
Multidisciplinary
Decision Sciences
Social Sciences
","0000-0002-5499-5205"
"Bintarawati, Fenny","58614318300","3","Social Sciences
Arts and Humanities
Engineering
"
"Sessiani, Lucky Ade","58085323900","2","Psychology
","0000-0001-8518-7414"
"Aulia, Elly Putri","59553874500","1","Agricultural and Biological Sciences
Medicine
Nursing
"
"Heradhyaksa, Bagas","57203358270","8","Social Sciences
Arts and Humanities
Earth and Planetary Sciences
Environmental Science
","0000-0003-1214-5488"
"Ikhrom, Ikhrom","58091014900","2","Social Sciences
","0000-0001-8569-5005"
"Asiyah, Nur","58428834300","3","Social Sciences
Business, Management and Accounting
Engineering
Economics, Econometrics and Finance
"
"Sulthon, Muhammad","58787410400","2","Arts and Humanities
Business, Management and Accounting
Social Sciences
","0000-0002-2050-9192"
"Fadllan, Andi","57193126881","4","Physics and Astronomy
"
"Rurkinantia, Aisa","59974614800","1","Social Sciences
"
"Saekhu","59909356600","1","Economics, Econometrics and Finance
Business, Management and Accounting
"
"Nugroho, Bekti Tufiq Ari","57212413455","3","Physics and Astronomy
"
"Rohman, Abdul","57608431000","6","Social Sciences
Arts and Humanities
","0000-0003-3991-016X"
"Adi, Widi Cahya","57217717397","8","Social Sciences
Mathematics
Physics and Astronomy
Multidisciplinary
Psychology
","0000-0002-0919-5073"
"Nurdin, Nazar","58534988200","3","Social Sciences
Arts and Humanities
"
"Daenuri, Edi","58991362700","1","Physics and Astronomy
"
"Baroroh, Umul","58668483500","1","Arts and Humanities
"
"Mundzir, Muhammad","58189516700","1","Arts and Humanities
","0009-0000-5474-7060"
"Baroroh, Ummul","59491539400","1","Social Sciences
Arts and Humanities
"
"Zakiy, Faris Shalahuddin","58183495800","3","Business, Management and Accounting
Multidisciplinary
Social Sciences
","0009-0002-9329-0803"
"Fibonacci, Anita","57196089163","6","Earth and Planetary Sciences
Environmental Science
Physics and Astronomy
Arts and Humanities
Social Sciences
","0000-0001-5974-1493"
"Khoirunnisa, Chantika","60092652800","1","Business, Management and Accounting
Economics, Econometrics and Finance
Computer Science
Social Sciences
"
"Luailiya, Nikmatul","59553321900","1","Agricultural and Biological Sciences
Medicine
Nursing
"
"Niam, Muhammad Yusrun","57223029394","1","Agricultural and Biological Sciences
Immunology and Microbiology
Biochemistry, Genetics and Molecular Biology
"
"Taufiq, Thiyas Tono","59553902500","1","Social Sciences
Arts and Humanities
"
"Widianto, Eko","59980291900","2","Arts and Humanities
Social Sciences
","0000-0003-3265-4204"
"Bisri, Kasan","59202701600","1","Arts and Humanities
"
"Ismail, Ahmad","58108332400","2","Arts and Humanities
Social Sciences
"
"Amalia, Farah","59296949100","3","Business, Management and Accounting
Economics, Econometrics and Finance
Decision Sciences
","0009-0006-0793-3665"
"Mustofa, H.","59309224900","1","Physics and Astronomy
"
"Anggraeni, Fima Diah Rovvy","60190596900","1","Engineering
Social Sciences
"
"Sugiyanti, Dina","57203506483","4","Agricultural and Biological Sciences
Medicine
Nursing
"
"Permata, Kartika Indah","58695296000","2","Physics and Astronomy
Social Sciences
"
"Saleh, Minhayati","57641802700","5","Social Sciences
Engineering
Computer Science
Decision Sciences
Business, Management and Accounting
Arts and Humanities
Economics, Econometrics and Finance
Mathematics
"
"Sari, W. K.","35318970000","3","Physics and Astronomy
Earth and Planetary Sciences
Environmental Science
","0000-0001-6804-0509"
"Illiyyun, Naili Nimatul","60262999600","1","Social Sciences
"
"Sri Puji Retno, A.","57222338872","1","Physics and Astronomy
"
"Maharani, Reza Putri","60092607200","1","Business, Management and Accounting
Economics, Econometrics and Finance
Computer Science
Social Sciences
"
"Azizi, Alfian Qodri","57431547000","2","Social Sciences
Arts and Humanities
Psychology
"
"Musthofa, Musthofa","58714014900","2","Psychology
Social Sciences
","0000-0002-0969-6636"
"Kusuma, Hamdan Hadi","36095716400","19","Environmental Science
Physics and Astronomy
Engineering
Materials Science
Earth and Planetary Sciences
Arts and Humanities
Multidisciplinary
Social Sciences
","0000-0002-2842-3721"
"Mawahib, Muhamad Zainal","59975521600","1","Social Sciences
Arts and Humanities
"
"Idrus, Ahmad Mutawaslih","58296699000","1","Chemistry
Materials Science
Environmental Science
"
"Rifqiawan, Raden Arfan","59957137100","1","Arts and Humanities
Social Sciences
"
"Muhibbin","59220643100","1","Arts and Humanities
Social Sciences
"
"Raharjo","58812234400","2","Arts and Humanities
Social Sciences
Business, Management and Accounting
Economics, Econometrics and Finance
"
"Listyono","57201677302","2","Physics and Astronomy
Social Sciences
"
"Maslihah, Siti","57217998134","3","Mathematics
Physics and Astronomy
Decision Sciences
"
"Zaman, M. Badruz","59982520600","1","Social Sciences
Arts and Humanities
"
"Setyawan, Maulana Arif","59131364700","1","Arts and Humanities
"
"Uhbiyati, Nur","56678611700","1","Business, Management and Accounting
Social Sciences
"
"Tsani, D. F.","57222616453","1","Earth and Planetary Sciences
Environmental Science
"
"Nadhifah","57222344064","1","Physics and Astronomy
"
"Azzahro, Fathimah","58806185100","1","Physics and Astronomy
"
"Arafat, Ahmad Tajuddin","59553619300","1","Social Sciences
Arts and Humanities
"
"Murtadho, Ali","60151148300","4","Arts and Humanities
Psychology
Social Sciences
"
"Mahdaniyal, H. N.","58958308800","1","Social Sciences
Arts and Humanities
"
"Anggarini, Ulifah","59540206200","1","Social Sciences
Arts and Humanities
"
"Nisa, Lulu Choirun","57208629311","5","Physics and Astronomy
"
"Wildan, David","60069133900","1","Social Sciences
Arts and Humanities
"
"Mustaqim","59967745600","1","Social Sciences
Psychology
Computer Science
"
"Hardiansyah, Angga","59366479000","6","Medicine
Agricultural and Biological Sciences
Nursing
"
"Prayogo, Agus","58698820800","2","Social Sciences
Computer Science
Psychology
"
"Saleh, M.","57209362500","1","Environmental Science
Earth and Planetary Sciences
"
"Kholiq, Arifana Nur","59974785400","1","Social Sciences
"
"Sudarmanto, Agus","57217128118","3","Physics and Astronomy
Engineering
Materials Science
","0000-0001-7863-2137"
"Hakim, A.","60085884200","1","Medicine
"
"Hartono","58657936000","1","Materials Science
Environmental Science
"
"Rusmadi, Rusmadi","57194071463","3","Engineering
Environmental Science
Social Sciences
Computer Science
Mathematics
Energy
","0000-0002-6412-0349"
"Abdullah, Asep D.","58554947100","1","Arts and Humanities
"
"Susilawati","57226730188","17","Physics and Astronomy
Agricultural and Biological Sciences
Materials Science
"
"Nuriyyatiningrum, Nadya Ariyani Hasanah","58311771800","3","Psychology
Social Sciences
","0000-0003-4275-5279"
"Fitriyah, Aini","57223592624","2","Physics and Astronomy
"
"Wafa’, Jihan Nabila","59983904600","1","Mathematics
Decision Sciences
"
"Rosyid, Maskur","58809952300","7","Arts and Humanities
Social Sciences
Engineering
","0000-0001-5772-039X"
"Mutohar, Agus","56110688100","7","Social Sciences
Business, Management and Accounting
Economics, Econometrics and Finance
Multidisciplinary
Computer Science
","0000-0001-5575-4529"
"Fauzi, Muchamad","60148001500","1","Business, Management and Accounting
Economics, Econometrics and Finance
"
"Wihartati, Wening","57283631800","1","Psychology
"
"Mujiasih, Mujiasih","57222610724","5","Social Sciences
Mathematics
Physics and Astronomy
Earth and Planetary Sciences
Environmental Science
"
"Syukur, M. Amin","57205028853","2","Medicine
"
"Kusuma, Hamdan Hadi","59419429800","1","Environmental Science
"
"Agustina, Refi","60092665800","1","Business, Management and Accounting
Economics, Econometrics and Finance
Computer Science
Social Sciences
"
"Sutiyono, Agus","58642025400","1","Social Sciences
"
"Suryandari, Ervin Tri","57210816151","4","Engineering
Earth and Planetary Sciences
Environmental Science
Mathematics
Physics and Astronomy
Materials Science
Social Sciences
Computer Science
","0000-0003-0523-639X"
"Lathifa, U.","57218933745","5","Earth and Planetary Sciences
Environmental Science
Physics and Astronomy
","0000-0003-3371-1119"
"Shodikin, Ali","57221567492","1","Economics, Econometrics and Finance
Business, Management and Accounting
"
"Suyanto, Helmi","58311269600","1","Psychology
","0000-0002-0084-6511"
"Istikomah","57217986110","1","Physics and Astronomy
"
"Darmu’in","58310877900","3","Psychology
Social Sciences
Medicine
"
"Karim, Abdul","57196185152","9","Physics and Astronomy
Computer Science
Psychology
Environmental Science
Mathematics
Social Sciences
Economics, Econometrics and Finance
Energy
Business, Management and Accounting
Engineering
","0000-0002-7204-944X"
"Izzuddin, Ahmad","59909179100","7","Social Sciences
Arts and Humanities
Physics and Astronomy
"
"Falakh, Fajrul","57201583046","2","Earth and Planetary Sciences
Energy
Environmental Science
"
"Miftahunnaja, Nafila Inarotussofia","58958601900","1","Social Sciences
Arts and Humanities
"
"Royyani, Arif","60059507300","1","Social Sciences
Arts and Humanities
"
"Fauzi, Moh","57196280032","2","Social Sciences
Arts and Humanities
"
"Chusna, Noor Amalia","57217919462","2","Agricultural and Biological Sciences
Energy
Earth and Planetary Sciences
Environmental Science
"
"Abdullah, Rizal Rahman","59759100500","1","Arts and Humanities
"
"Idris, Fatah","57210467671","1","Agricultural and Biological Sciences
Biochemistry, Genetics and Molecular Biology
"
"Suwarno, Muji","57214093558","4","Physics and Astronomy
","0009-0008-2275-6876"
"Wahab, Wahab","58164518000","2","Earth and Planetary Sciences
Environmental Science
"
"Fitriani, Ika Nur","57193310888","6","Chemistry
Engineering
Physics and Astronomy
Materials Science
Pharmacology, Toxicology and Pharmaceutics
Energy
Biochemistry, Genetics and Molecular Biology
Chemical Engineering
"
"Illiyyun, Naili Nimatul","59735699800","1","Social Sciences
"
"Wahidah, Baiq Farhatul","57204432026","7","Agricultural and Biological Sciences
Environmental Science
Earth and Planetary Sciences
Biochemistry, Genetics and Molecular Biology
Social Sciences
Physics and Astronomy
","0000-0002-6278-4950"
"Ni’am, M. Ihtirozun","57432153200","1","Arts and Humanities
Social Sciences
Psychology
","0000-0003-0041-3772"
"Inayah, Ainal","57214226813","1","Physics and Astronomy
"
"Ahmad, Nur","58552103500","1","Arts and Humanities
Social Sciences
","0000-0002-1058-0868"
"Avrilian, Putri Aria","59553455100","1","Agricultural and Biological Sciences
Medicine
Nursing
"
"Muzayyin, Muhammad Dzuhri","59929296700","1","Psychology
Social Sciences
"
"Nugroho, Fiki Syaban","59551281200","1","Mathematics
Decision Sciences
"
"Asy’Ari Ulama’I, A. Hasan","59476008300","1","Arts and Humanities
Social Sciences
"
"Hidayati, Nur","57396790700","1","Social Sciences
Psychology
"
"Wahidin, Nurul Wasilah","60059974800","1","Social Sciences
Arts and Humanities
"
"Putra, Juanda Kelana","60255911600","1","Mathematics
"
"Ardani, Riska Ayu","57204362124","3","Physics and Astronomy
"
"Tafrikan, Mohamad","57222630421","9","Mathematics
Physics and Astronomy
Decision Sciences
"
"Abdullah, Shodiq","57769046400","2","Business, Management and Accounting
Arts and Humanities
Decision Sciences
"
"Kurniawan, Prihadi","57211667502","2","Physics and Astronomy
Engineering
Computer Science
","0000-0003-4562-3431"
"Safii, Safii","57802812500","4","Arts and Humanities
Social Sciences
"
"Yuniarti, Wenty Dwi","57793997600","5","Computer Science
Engineering
Decision Sciences
Medicine
","0000-0002-5633-0709"
"Muhammad, Hasyim","57638343500","1","Arts and Humanities
"
"Astuti, Deni Parama Widia","58684779000","2","Computer Science
Business, Management and Accounting
Multidisciplinary
Social Sciences
"
"Pranatami, Dwimei Ayudewandari","57221806416","1","Agricultural and Biological Sciences
Biochemistry, Genetics and Molecular Biology
"
"Handayani, Maya Rini","60030657900","1","Computer Science
Engineering
","0009-0006-8057-0995"
"Hayat, Teten Jalaludin","59978735200","1","Social Sciences
Arts and Humanities
"
"Ahwan, Muh Ahlis","59203352300","1","Business, Management and Accounting
Social Sciences
"
"Munif, Ahmad","60068932800","1","Social Sciences
Arts and Humanities
"
"Prasetyoningrum, Ari Kristin","59169546800","1","Arts and Humanities
Social Sciences
"
"Sukendar, Sukendar","57202200012","3","Social Sciences
Arts and Humanities
Engineering
","0000-0002-4853-148X"
"Soebahar, Erfan","57222963368","1","Business, Management and Accounting
Decision Sciences
"
"Alfatah, Ridwan","60014696400","4","Medicine
","0009-0004-1940-5216"
"Abidin, Achmad Azis","57431746200","1","Arts and Humanities
Social Sciences
Psychology
"
"Krisantini, Krisantini","58198601400","2","Agricultural and Biological Sciences
Biochemistry, Genetics and Molecular Biology
"
"Nada, E. I.","57211916798","4","Physics and Astronomy
Earth and Planetary Sciences
Environmental Science
"
"Tauhidah, Dian","58565838300","1","Earth and Planetary Sciences
Energy
Environmental Science
"
"Ulinuha, Masy Ari","57193900417","3","Computer Science
Mathematics
Engineering
Materials Science
","0000-0001-8481-4746"
"Fanani, Muhyar","58085229200","4","Arts and Humanities
Social Sciences
Psychology
"
"Apriliani, N. P.","59411268500","1","Physics and Astronomy
"
"Sulistio","58311854900","1","Psychology
"
"Khoirin, Nur","57866732500","1","Arts and Humanities
"
"Lianah, Lianah","57210463267","4","Agricultural and Biological Sciences
Biochemistry, Genetics and Molecular Biology
"
"Supangat","60142181900","1","Multidisciplinary
"
"Sholihan, Sholihan","57189632351","4","Social Sciences
Arts and Humanities
Psychology
Medicine
"
"Ma'arif, Syamsul","57196279085","11","Social Sciences
Arts and Humanities
Business, Management and Accounting
Computer Science
Economics, Econometrics and Finance
Engineering
Mathematics
Psychology
","0000-0002-4105-4262"
"Kibtyah, Maryatul","58258104900","1","Social Sciences
"
"Imron, Ali","58998628200","4","Arts and Humanities
Social Sciences
"
"Fauzi, M.","59577611000","1","Environmental Science
Earth and Planetary Sciences
"
"Ghofur, Abdul","57203312732","13","Social Sciences
Business, Management and Accounting
Arts and Humanities
Engineering
Economics, Econometrics and Finance
Decision Sciences
Computer Science
","0000-0003-2470-8591"
"Tasfiq, Mustla Sofyan","58871734000","1","Social Sciences
Arts and Humanities
"
"Rahmawati, Atik","57212143895","1","Physics and Astronomy
"
"Supena, Ilyas","57225919469","7","Arts and Humanities
Social Sciences
","0000-0001-6518-745X"
"Mariam, Siti","59790939700","5","Social Sciences
Arts and Humanities
Earth and Planetary Sciences
Energy
Environmental Science
"
"Hakim, Lukmanul","60029490600","2","Business, Management and Accounting
Arts and Humanities
Social Sciences
","0000-0002-0376-8651"
"Fatkuroji","59711954500","1","Arts and Humanities
Social Sciences
"
"Pimay, Awaludin","58527723400","2","Social Sciences
Arts and Humanities
"
"Shabir, Muslich","57195241160","4","Social Sciences
Engineering
Arts and Humanities
Materials Science
Business, Management and Accounting
"
"Shanie, Arsan","60085167800","1","Computer Science
"
"Sifah, L.","57224952550","1","Physics and Astronomy
"
"Armanda, Dian T.","57210697639","1","Engineering
Agricultural and Biological Sciences
Social Sciences
Environmental Science
","0000-0003-2738-8095"
"Hakim, Fachri","57217990387","2","Physics and Astronomy
","0000-0003-3166-6596"
"Purnomo, Eko","57442625600","1","Agricultural and Biological Sciences
"
"Ernawati, Briliyan","57396364700","2","Social Sciences
Arts and Humanities
Psychology
"
"Zulaikha, n.","58915812700","1","Physics and Astronomy
","0000-0001-8427-097X"
"Istiyani, Dwi","58040688400","4","Social Sciences
Arts and Humanities
"
"Lathifah, Anthin","57357812300","5","Social Sciences
Arts and Humanities
Psychology
"
"Djamil, Abdul","59550634500","3","Social Sciences
Arts and Humanities
"
"Rofiq, M. K.","59009148800","1","Engineering
"
"Abdillah, Junaidi","57355699400","3","Social Sciences
Arts and Humanities
Psychology
"
"Farida, Dessy Noor","59297071300","2","Business, Management and Accounting
Economics, Econometrics and Finance
Decision Sciences
","0000-0002-8435-6914"
"Aini, Dewi Khurun","58312237600","1","Psychology
"
"Arif Royyani, Muh","57431151100","1","Arts and Humanities
Social Sciences
Psychology
"
"Sholichah, Farohatus","57196274505","1","Social Sciences
Arts and Humanities
"
"Wahib, Abdul","57712906600","2","Psychology
Social Sciences
"
"Mudzkiyyah, Lainatul","57713319900","1","Psychology
"
"Hijriah, Nur","60059273400","1","Social Sciences
Arts and Humanities
"
"Noor, Afif","58255556200","20","Social Sciences
Environmental Science
Computer Science
Medicine
Business, Management and Accounting
Biochemistry, Genetics and Molecular Biology
Agricultural and Biological Sciences
Engineering
Arts and Humanities
Earth and Planetary Sciences
Energy
Multidisciplinary
","0000-0002-8427-0168"
"Turahman, Fitra Istianah","59296458600","1","Business, Management and Accounting
Decision Sciences
"
"Yahya, Imam","57915480000","5","Social Sciences
Arts and Humanities
"
"Masyithoh, Novita Dewi","57217108400","2","Environmental Science
Agricultural and Biological Sciences
Social Sciences
Psychology
"
"Mahsun, Muhammad","57200330562","4","Social Sciences
Arts and Humanities
"
"Safrodin","59495241400","1","Arts and Humanities
Social Sciences
"
"Musahadi, undefined","57209652941","5","Business, Management and Accounting
Arts and Humanities
Social Sciences
Economics, Econometrics and Finance
Decision Sciences
","0000-0001-5772-039X"
"Phudaro, Nipatimoh","60026918400","1","Social Sciences
"
"Khasanah, Rita Ariyana Nur","57221800994","2","Agricultural and Biological Sciences
Biochemistry, Genetics and Molecular Biology
Medicine
","0000-0003-3172-1348"
"Wahyudi","59711733000","1","Arts and Humanities
Social Sciences
"
"Anwar, Edi Daenuri","59461269900","1","Multidisciplinary
"
"Batubara, Hamdan Husein","57890078500","3","Computer Science
","0000-0003-4277-8278"
"Maghfurin, Ahmad","58619673600","4","Social Sciences
Arts and Humanities
Computer Science
"
"Prawira, W. Y.","57208859200","1","Physics and Astronomy
"
"Mas’ud, Abdurrahman","60122434500","1","Social Sciences
"
"Firmansyah, R. Arizal","57215961815","6","Engineering
Physics and Astronomy
Energy
Social Sciences
Mathematics
Materials Science
Biochemistry, Genetics and Molecular Biology
Agricultural and Biological Sciences
Chemistry
","0000-0003-1264-050X"
"Oktaviani, Dinni Rahma","59550939200","2","Mathematics
Decision Sciences
"
"Mufrikhah, Solkhah","57223280100","1","Social Sciences
"
"Kamaluddin, Bhamakerti Hafiz","59551447800","1","Mathematics
Decision Sciences
"
"Royyani, Muh Arif","57223986095","3","Social Sciences
Business, Management and Accounting
Economics, Econometrics and Finance
Environmental Science
"
"Tarwiyah, Siti","59515781300","2","Social Sciences
Arts and Humanities
"
"Arraafiulna, J. R.","58735650700","1","Physics and Astronomy
"
"Umam, K.","57259932500","4","Computer Science
Physics and Astronomy
Engineering
Mathematics
","0000-0002-9403-9461"
"Khoiri, Nur","57421775400","2","Physics and Astronomy
"
"Alawiyah, N.","57211915543","3","Physics and Astronomy
","0000-0003-2611-3620"
"Tajrid, Amir","58860269800","1","Arts and Humanities
Social Sciences
"
"Mujibatun, Siti","57924472400","1","Arts and Humanities
"
"Zikrinawati, Khairani","58312155500","2","Psychology
Social Sciences
"
"Rofiq, Mohammad","57209181828","1","Engineering
Business, Management and Accounting
Social Sciences
"
"Arsini","57208862723","1","Physics and Astronomy
"
"Hidayanti, Ema","57827325500","3","Psychology
Arts and Humanities
Social Sciences
Multidisciplinary
"
"Lutfiyah","59916574400","1","Arts and Humanities
Social Sciences
"
"Junusi, Rahman El","57238177200","1","Business, Management and Accounting
Economics, Econometrics and Finance
"
"Riyadi, Agus","57224424845","7","Business, Management and Accounting
Computer Science
Arts and Humanities
Economics, Econometrics and Finance
Social Sciences
Mathematics
","0000-0002-6378-4784"
"Khalif, Muhammad Ardhi","57217988383","4","Physics and Astronomy
Mathematics
","0000-0002-7807-1496"
"Munawaroh, Lathifah","59155806900","1","Social Sciences
Arts and Humanities
"
"Umami, Ulul","58820591700","1","Arts and Humanities
Social Sciences
"
"Lestari, Endah Dwi","57943566300","1","Business, Management and Accounting
Economics, Econometrics and Finance
Social Sciences
"
"Prayitno, Mohammad Agus","58915459600","2","Social Sciences
Health Professions
Medicine
","0000-0001-6702-7812"
"Chamami, Rikza","58956744100","1","Social Sciences
"
"Hasanah, Hasyim","60021221200","1","Physics and Astronomy
"
"Rizal, Daviq","58772176000","1","Social Sciences
Arts and Humanities
","0000-0003-2466-2968"
"Khanif, Ahmad","60068727900","1","Social Sciences
Arts and Humanities
"
"Nisa’, Izza Nur Fitrotun","59668410800","1","Arts and Humanities
Social Sciences
"
"Adeni, Adeni","58260005500","4","Social Sciences
Arts and Humanities
"
"Umriana, Anila","59495138900","1","Arts and Humanities
Social Sciences
"
"Arikhah","57211186506","2","Social Sciences
"
"Saputri, Karina Ana","59414606900","1","Medicine
"
"Hayati, Nur","59366905700","4","Earth and Planetary Sciences
Nursing
Environmental Science
Agricultural and Biological Sciences
Medicine
"
"Makmun, Muhammad","58411192500","1","Psychology
"
"Nurhayati, Tri","59918427000","1","Arts and Humanities
Social Sciences
"
"Arikhah, Arikhah","58084940800","2","Psychology
Arts and Humanities
"
"Rofi’Ah, Ndzani Latifatur","57369096300","1","Agricultural and Biological Sciences
Social Sciences
","0000-0002-6672-8497"
"Mashilal","58073966200","2","Social Sciences
Earth and Planetary Sciences
Energy
Arts and Humanities
Environmental Science
"
"Agriyanto, Ratno","57194243968","6","Business, Management and Accounting
Economics, Econometrics and Finance
Computer Science
Engineering
Decision Sciences
Social Sciences
","0000-0002-8162-5381"
"Murtadho, Ali","57224184142","4","Social Sciences
Arts and Humanities
","0000-0002-6858-3498"
"Nasikhin, n.","58161221100","9","Social Sciences
Arts and Humanities
Computer Science
Health Professions
Psychology
","0000-0003-0635-294X"
"Zammi, Muhammad","57217989009","6","Earth and Planetary Sciences
Environmental Science
Physics and Astronomy
","0000-0003-4681-3202"
"Taufiq, Imam","57189632896","6","Social Sciences
Arts and Humanities
Economics, Econometrics and Finance
Business, Management and Accounting
"
"Khasanah, Rizkiati","57224336610","1","Earth and Planetary Sciences
Environmental Science
"
"Muthohar, Ahmad Mifdlol","58771344500","4","Business, Management and Accounting
Arts and Humanities
Social Sciences
Decision Sciences
"
"Hidayah, Malikhatul","57225150269","2","Materials Science
Environmental Science
Biochemistry, Genetics and Molecular Biology
Engineering
Chemistry
","0000-0002-2283-4060"
"Isnawati, Ayus Riana","60089266900","1","Mathematics
Decision Sciences
"
"Zakiyah, Ninik","58509549900","2","Social Sciences
Medicine
","0009-0001-0396-0408"
"Marfu’ah, Usfiyatul","59717406400","1","Arts and Humanities
Business, Management and Accounting
Economics, Econometrics and Finance
Social Sciences
"
"Adiratna, Widia","59470991000","2","Agricultural and Biological Sciences
Medicine
","0009-0003-4056-0125"
"Hadjar, Ibnu","57196277753","1","Social Sciences
Arts and Humanities
"
"Rohman, Ahmad Aunur","57222614977","2","Environmental Science
Earth and Planetary Sciences
"
"Baehaqi, Ja'Far","58989620700","1","Physics and Astronomy
"
"Tasyakuranti, Alvania Nabila","58657585600","2","Materials Science
Environmental Science
Multidisciplinary
Engineering
"
"Suhandjati, Sri","57209681774","1","Arts and Humanities
Social Sciences
"
"Elizabeth, Misbah Zulfa","57196096132","15","Social Sciences
Business, Management and Accounting
Arts and Humanities
Environmental Science
Medicine
Psychology
Decision Sciences
Multidisciplinary
Pharmacology, Toxicology and Pharmaceutics
Biochemistry, Genetics and Molecular Biology
"
"Khodijah","59414607000","1","Medicine
"
"Amin, Nasihun","58260005400","2","Social Sciences
Arts and Humanities
"
"Khusnul Mubarok, Ferry","57239047400","5","Economics, Econometrics and Finance
Business, Management and Accounting
Social Sciences
","0000-0002-7534-089X"
"Visita, Luksi","57209775125","3","Business, Management and Accounting
Economics, Econometrics and Finance
","0000-0002-7354-9868"
"Haq, D.","59756933100","1","Environmental Science
Earth and Planetary Sciences
"
"Hidayat, Syahrudin","59491114300","1","Social Sciences
Arts and Humanities
"
"Rahman, Luthfi","57469834100","3","Social Sciences
Arts and Humanities
"
"Hakim, Lukmanul","59209453400","2","Physics and Astronomy
Arts and Humanities
Medicine
Social Sciences
"
"Rahmawati, Titik","58484374200","2","Social Sciences
Arts and Humanities
"
"Parmudi, Mochamad","59259424800","1","Social Sciences
"
"Ichwan, Mohammad Nor","60015575100","1","Arts and Humanities
Social Sciences
"
"Junaedi, Mahfud","58161221000","4","Social Sciences
Computer Science
Arts and Humanities
Health Professions
Psychology
"
"Arifin, Johan","59128521800","4","Business, Management and Accounting
Social Sciences
Arts and Humanities
Economics, Econometrics and Finance
Computer Science
"
"Hapsin, Abu","57815765100","5","Social Sciences
Arts and Humanities
"
"Bakhri, Amirul","59491107800","1","Social Sciences
Arts and Humanities
"
"Permonoputri, Rifi Maria Laila Fitri","60040962900","1","Social Sciences
"
"Putri, Devi Marita","59726732400","1","Mathematics
Decision Sciences
"
"Mudhofi, M.","59243459600","1","Arts and Humanities
"
"Ningrum, Lis Setiyo","57202299886","2","Earth and Planetary Sciences
Environmental Science
"
"Cahyono, Budi","57211798340","6","Physics and Astronomy
Earth and Planetary Sciences
Social Sciences
Environmental Science
","0000-0001-6856-8813"
"Izuddin, Ahmad","59909177700","2","Arts and Humanities
Social Sciences
"
"Baedowi, Ahmad","60245744600","1","Social Sciences
"
"Musyafak, Najahan","57205141604","2","Social Sciences
Business, Management and Accounting
Arts and Humanities
Economics, Econometrics and Finance
","0000-0001-8779-3725"
"Rahmani, Tara P.D.","57202116971","9","Immunology and Microbiology
Agricultural and Biological Sciences
Medicine
Earth and Planetary Sciences
Environmental Science
Physics and Astronomy
Veterinary
Biochemistry, Genetics and Molecular Biology
","0000-0003-2810-6272"
"Poernomo, Joko Budi","57191536352","3","Physics and Astronomy
"
"Khasanah, N.","57193446955","6","Physics and Astronomy
","0000-0001-5918-3532"
"Salama, Nadiatus","57462329700","4","Psychology
Business, Management and Accounting
Social Sciences
Arts and Humanities
Economics, Econometrics and Finance
","0000-0001-8325-7482"
"Jamil, Muhammad Mukhsin","57226018424","3","Arts and Humanities
Social Sciences
Business, Management and Accounting
"
"Elfrida, N.","56590084800","1","Environmental Science
Earth and Planetary Sciences
"
"Wati, Briliyan Erna","60026784300","1","Social Sciences
"
"Akmalia, H. A.","57214113469","1","Physics and Astronomy
"
"Kudhori, Muhammad","58654683900","1","Social Sciences
Arts and Humanities
"
"Muryani, Maria Anna","58684626100","1","Multidisciplinary
"
"Syafrudin, Aly","58915972100","1","Physics and Astronomy
"
"Bukhori, Baidi","57189632738","14","Psychology
Arts and Humanities
Medicine
Social Sciences
Computer Science
Nursing
Multidisciplinary
","0000-0002-1798-5235"
"Alhanif, Ahmad Elmawan M.","58506820700","1","Arts and Humanities
Social Sciences
"
"Siswanah, Emy","57217131374","9","Mathematics
Engineering
Decision Sciences
Environmental Science
Materials Science
Multidisciplinary
Earth and Planetary Sciences
Chemistry
","0000-0003-3717-0989"
"Ma’mun, Nadiah","57388824800","1","Medicine
Neuroscience
"
"Muliawati, Dian Iga","57222613681","1","Earth and Planetary Sciences
Environmental Science
"
"Fariyani, Qisthi","57222335603","2","Physics and Astronomy
Earth and Planetary Sciences
Environmental Science
","0000-0003-4505-4259"
"Huda, Andika Khoirul","58088451900","1","Physics and Astronomy
"
"In’amuzahiddin, Muh","59550747600","1","Arts and Humanities
Social Sciences
"
"Maulidy, Ayatullah","60072273000","1","Computer Science
Mathematics
Engineering
Decision Sciences
"
"Azizati, Zidni","57222611253","1","Earth and Planetary Sciences
Environmental Science
"
"Haniah, Siti Romzatul","57217990049","1","Physics and Astronomy
"
"Khoir, Tholkhatul","59155430200","3","Social Sciences
Arts and Humanities
Multidisciplinary
"
"Maskur, Ali","58203856200","9","Social Sciences
Computer Science
Engineering
Business, Management and Accounting
Economics, Econometrics and Finance
Physics and Astronomy
Multidisciplinary
Mathematics
","0000-0001-5118-1823"
"Muthohar, Sofa","59419316200","1","Social Sciences
","0000-0002-8411-638X"
"Sumarti, Heni","58657758200","2","Materials Science
Multidisciplinary
Environmental Science
Engineering
","0000-0001-5261-3974"
"Warno, W.","59297071200","1","Business, Management and Accounting
Decision Sciences
"
"Umar, A.","60286077300","1","Social Sciences
Business, Management and Accounting
"
"Fitriani, U.","57222614880","3","Earth and Planetary Sciences
Environmental Science
Physics and Astronomy
","0000-0003-0980-7831"
"Putri, Anissa A.","57206267904","11","Materials Science
Engineering
Physics and Astronomy
Chemistry
Chemical Engineering
Earth and Planetary Sciences
Environmental Science
Computer Science
","0000-0003-0186-3353"
"Fahrurrozi","59353783100","2","Arts and Humanities
Computer Science
Psychology
Social Sciences
"
"Mukaromah, Arnia Sari","58417095100","1","Agricultural and Biological Sciences
"
"Saputra, Maliki Alfajr Davin Chandra","58684626200","1","Multidisciplinary
"
"Ali, Murtadho","58479666300","1","Social Sciences
"
"Zarkasi, n.","59754175500","2","Social Sciences
Arts and Humanities
","0000-0002-8336-4031"
"Lateh, Fadleena","59711733100","1","Arts and Humanities
Social Sciences
"
"Munawar","57226431080","1","Business, Management and Accounting
"
"Zuhri, Mishbah Khoiruddin","58257253800","3","Social Sciences
Psychology
Physics and Astronomy
","0000-0002-7397-1700"
"Kusumarini, Niken","58577333300","1","Agricultural and Biological Sciences
Biochemistry, Genetics and Molecular Biology
"
"Anggita, Sheilla Rully","57222615842","3","Materials Science
Environmental Science
Physics and Astronomy
Earth and Planetary Sciences
","0000-0003-4346-2275"
"Hidayat, Saifullah","57191978770","5","Agricultural and Biological Sciences
Biochemistry, Genetics and Molecular Biology
Medicine
Immunology and Microbiology
Physics and Astronomy
","0000-0002-9160-5288"
"Chamami, M. Rikza","58288779600","2","Social Sciences
Psychology
"
"Savitri, Fania Mutiara","57223398214","2","Computer Science
Decision Sciences
Social Sciences
","0000-0001-8826-135X"
"Darmu'in","60121699800","1","Social Sciences
"
"Monica, Tiara","57222616816","1","Earth and Planetary Sciences
Environmental Science
"
"Annury, Muhammad Nafi","57388509800","3","Social Sciences
Arts and Humanities
Medicine
Neuroscience
","0000-0003-1066-6191"
"Wahyudi, Ahmad","58843859300","2","Social Sciences
","0009-0008-4192-461X"
"Saputra, Muhammad Mukhlis","59420426800","1","Medicine
"
"Drastisianti, A.","57211928335","11","Physics and Astronomy
Materials Science
Chemistry
Social Sciences
","0000-0002-5417-0297"
"Pratama, Fachrizal Rian","58657412500","2","Materials Science
Physics and Astronomy
Environmental Science
Engineering
","0000-0002-2241-2212"
"Widiastuti, Widiastuti","57216494787","1","Psychology
","0000-0003-4047-1969"
"Romadiastri, Y.","57222613891","1","Earth and Planetary Sciences
Environmental Science
","0000-0002-9638-287X"
"Rodin, Dede","57610899100","1","Arts and Humanities
Social Sciences
"
"Muhaya, Abdul","59554042100","1","Social Sciences
Arts and Humanities
"
"Fihris","58695797500","4","Arts and Humanities
Social Sciences
Physics and Astronomy
"
"Syamsudin, Nur","57211779937","1","Social Sciences
Arts and Humanities
"
"Masrohatun, Masrohatun","58484374100","2","Social Sciences
"
"Al Afghani, Abdullah Azzam","58070016900","3","Psychology
Arts and Humanities
Social Sciences
","0000-0002-1398-3486"
"Tafrikan, T.","58403883400","1","Mathematics
"
"Junaidi, Akhmad A.","57641896600","3","Arts and Humanities
Social Sciences
","0000-0003-2223-8469"
"Saifullah, Muhammad","58258853100","2","Social Sciences
Arts and Humanities
"
"Fuadi, Nasrul Fahmi Zaki","58808760100","3","Business, Management and Accounting
Economics, Econometrics and Finance
Computer Science
Social Sciences
","0000-0001-5176-632X"
"Maulina, Shofiya","57222343563","1","Physics and Astronomy
"
"Udaibah, Wirda","57217994793","5","Energy
Environmental Science
Earth and Planetary Sciences
Physics and Astronomy
Chemical Engineering
Multidisciplinary
Chemistry
","0000-0002-6961-6853"
"Affandi, Yuyun","57411772700","4","Social Sciences
Arts and Humanities
Business, Management and Accounting
Economics, Econometrics and Finance
"
"Fadhilah, Anna Rizqi","59711733200","1","Arts and Humanities
Social Sciences
"`;

const WOS_CSV = `No,Link Profil,Nama,WOS ID,Jumlah Dokumen
1,https://www.webofscience.com/wos/author/record/2415943,"Al Qurtuby, Sumanto",ABD-4296-2021,50
2,https://www.webofscience.com/wos/author/record/3952416,"Susilawati, Susilawati",CAI-2000-2022,18
3,https://www.webofscience.com/wos/author/record/25047975,Mashudi,FJW-7581-2022,16
4,https://www.webofscience.com/wos/author/record/9358913,"Izzuddin, Ahmad Imran Ahmad",CWQ-8506-2022,15
5,https://www.webofscience.com/wos/author/record/1413346,"Widianto, Eko Didik",N-7375-2019,13
6,https://www.webofscience.com/wos/author/record/84945693,Susilawati,OVD-7898-2025,12
7,https://www.webofscience.com/wos/author/record/29792354,"Faiq, Muhammad",GDK-1969-2022,11
8,https://www.webofscience.com/wos/author/record/53855860,"Elizabeth, Misbah Zulfa",JXN-8317-2024,9
9,https://www.webofscience.com/wos/author/record/33031788,"Ghofur, Abdul",GQV-1569-2022,9
10,https://www.webofscience.com/wos/author/record/2095337,"Putri, Anissa",ABB-2881-2020,9
11,https://www.webofscience.com/wos/author/record/1642644,"arif, Syamsul Ma'",O-3603-2017,9
12,https://www.webofscience.com/wos/author/record/34442276,"Kholiq, Abdul",GWM-2065-2022,8
13,https://www.webofscience.com/wos/author/record/55229034,"Purnomo, Eko Nurhaji",KDF-1949-2024,7
14,https://www.webofscience.com/wos/author/record/65460543,"Riyadi, Agus",LTC-2450-2024,6
15,https://www.webofscience.com/wos/author/record/42573075,"Hariz, A.",IEE-3093-2023,6
16,https://www.webofscience.com/wos/author/record/24934476,"Mahsun, Muhammad",FJL-4082-2022,6
17,https://www.webofscience.com/wos/author/record/2411554,"Fauzi, Moh. Fery",ABC-8999-2021,6
18,https://www.webofscience.com/wos/author/record/22620464,"Imron, A.",EZJ-0070-2022,6
19,https://www.webofscience.com/wos/author/record/51098347,"Nurhayati, Alwiyah",JMB-3680-2023,5
20,https://www.webofscience.com/wos/author/record/34290950,"Kamal, Irsyad",GVX-0740-2022,5
21,https://www.webofscience.com/wos/author/record/2776734,Muhammad Ardhi Khalif,ABY-6908-2022,5
22,https://www.webofscience.com/wos/author/record/27018038,"Rahmawati, Atik",FSA-7645-2022,5
23,https://www.webofscience.com/wos/author/record/2140409,"Hamid, Nur",AAT-4298-2020,5
24,https://www.webofscience.com/wos/author/record/1975226,"Mutohar, Agus",AAJ-4589-2020,5
25,https://www.webofscience.com/wos/author/record/1888170,"Hadi Kusuma, Hamdan",AAD-5870-2019,5
26,https://www.webofscience.com/wos/author/record/18694599,"Amalia, Farah",EJG-4198-2022,5
27,https://www.webofscience.com/wos/author/record/14165444,"Safii, Safii",DQT-5042-2022,5
28,https://www.webofscience.com/wos/author/record/8511236,"Hasanah, Silviatul",CTC-0830-2022,4
29,https://www.webofscience.com/wos/author/record/69474290,"Lestari, Anna Puji",MJV-6230-2025,4
30,https://www.webofscience.com/wos/author/record/45730917,"Supena, Ilyas",IQS-1326-2023,4
31,https://www.webofscience.com/wos/author/record/41517841,"Mustofa, Mahmud Yunus",HZX-7675-2023,4
32,https://www.webofscience.com/wos/author/record/37930866,"Bukhori, Baidi",HLE-0652-2023,4
33,https://www.webofscience.com/wos/author/record/2967309,"Hakim, Lukmanul",ACQ-8193-2022,4
34,https://www.webofscience.com/wos/author/record/2411589,"Perwita, Atika Dyah",ABC-9023-2021,4
35,https://www.webofscience.com/wos/author/record/2389593,"Rahmani, Tara Puri Ducha",ABA-4622-2021,4
36,https://www.webofscience.com/wos/author/record/21639490,Fitri,EVM-9091-2022,4
37,https://www.webofscience.com/wos/author/record/2157828,"Khasanah, Nur",ABI-3469-2020,4
38,https://www.webofscience.com/wos/author/record/87206089,"Kusuma, Hamdan Hadi",PEZ-8292-2025,3
39,https://www.webofscience.com/wos/author/record/84101588,"Umar, A.",ORQ-3784-2025,3
40,https://www.webofscience.com/wos/author/record/66855835,"Maghfurin, Ahmad",LYQ-7740-2024,3
41,https://www.webofscience.com/wos/author/record/65642958,"Haq, D.",LTU-4861-2024,3
42,https://www.webofscience.com/wos/author/record/60977145,"Putra, Juanda Kelana",LAL-7438-2024,3
43,https://www.webofscience.com/wos/author/record/60849113,"Zakiy, Faris Shalahuddin",KZU-9406-2024,3
44,https://www.webofscience.com/wos/author/record/51104839,"Udaibah, Wirda",JMC-0172-2023,3
45,https://www.webofscience.com/wos/author/record/48581396,"Muhajarah, Kurnia",JCC-2449-2023,3
46,https://www.webofscience.com/wos/author/record/44286816,"Hidayati, Nur",IKW-7039-2023,3
47,https://www.webofscience.com/wos/author/record/4235821,Arikhah,CBR-5414-2022,3
48,https://www.webofscience.com/wos/author/record/4082316,"Affandi, Yuyun",CBC-1900-2022,3
49,https://www.webofscience.com/wos/author/record/39018583,"Yahya, Imam Abdullahi",HPT-8398-2023,3
50,https://www.webofscience.com/wos/author/record/33261698,"-, Kustomo",GRS-1480-2022,3
51,https://www.webofscience.com/wos/author/record/32144652,"Firmansyah, Arizal",GNA-4417-2022,3
52,https://www.webofscience.com/wos/author/record/31790953,"Rohman, Abdul",GLR-0717-2022,3
53,https://www.webofscience.com/wos/author/record/28674484,"Adi, Widi Cahya",FYQ-4092-2022,3
54,https://www.webofscience.com/wos/author/record/26789184,"Mulyatun, M.",FRB-8791-2022,3
55,https://www.webofscience.com/wos/author/record/26105379,"Masyithoh, Novita Dewi",FOC-4986-2022,3
56,https://www.webofscience.com/wos/author/record/21575246,"Fanani, Muhyar",EVG-4852-2022,3
57,https://www.webofscience.com/wos/author/record/2137876,"Hidayat, Saifullah",ABF-8462-2020,3
58,https://www.webofscience.com/wos/author/record/2055452,"Junusi, Rahman El",AAW-1772-2020,3
59,https://www.webofscience.com/wos/author/record/2055279,"Mubarok, Ferry Khusnul",AAW-1623-2020,3
60,https://www.webofscience.com/wos/author/record/20549876,"Della, N.",EQX-9483-2022,3
61,https://www.webofscience.com/wos/author/record/15654152,"Junaidi, Akhmad",DWW-3749-2022,3
62,https://www.webofscience.com/wos/author/record/15571429,"Mariam, Siti",DWO-1026-2022,3
63,https://www.webofscience.com/wos/author/record/14958752,"Firmansyah, R. Arizal",DTV-8350-2022,3
64,https://www.webofscience.com/wos/author/record/13172187,"POERNOMO, J",DMN-1784-2022,3
65,https://www.webofscience.com/wos/author/record/12424511,Nasikhin,DJQ-4109-2022,3
66,https://www.webofscience.com/wos/author/record/81086540,"Hakim, A.",OFD-8735-2025,2
67,https://www.webofscience.com/wos/author/record/7654027,"Fanani, Ahwan",CPS-3616-2022,2
68,https://www.webofscience.com/wos/author/record/69708679,"Jamil, M. Mukhsin",MKT-0619-2025,2
69,https://www.webofscience.com/wos/author/record/67975362,"Ismail, Ahmad",MDK-7302-2025,2
70,https://www.webofscience.com/wos/author/record/65966752,Naifah,LVE-8657-2024,2
71,https://www.webofscience.com/wos/author/record/63174340,"Andriyani, Elisa",LKA-6239-2024,2
72,https://www.webofscience.com/wos/author/record/61829787,"Agriyanto, Ratno",LEF-0087-2024,2
73,https://www.webofscience.com/wos/author/record/54115861,"ISTIYANI, Dwi",JYP-2164-2024,2
74,https://www.webofscience.com/wos/author/record/53779880,"Wahib, A.",JXG-1305-2024,2
75,https://www.webofscience.com/wos/author/record/53743532,Darmu'in,JXC-4957-2024,2
76,https://www.webofscience.com/wos/author/record/53545787,"Soebahar, Moh. Erfan",JWC-0135-2024,2
77,https://www.webofscience.com/wos/author/record/52775421,"Nasikhin, Nasikhin",JSV-2738-2023,2
78,https://www.webofscience.com/wos/author/record/52064039,"Hidayatullah, A. F.",JQA-9841-2023,2
79,https://www.webofscience.com/wos/author/record/51395932,"Sukendar, Sukendar",JNF-4567-2023,2
80,https://www.webofscience.com/wos/author/record/51339543,Sholihan,JMZ-6582-2023,2
81,https://www.webofscience.com/wos/author/record/51315562,"Sutiyono, Agus",JMX-2550-2023,2
82,https://www.webofscience.com/wos/author/record/51105396,"Fadlilah, Sayyidatul",JMC-0729-2023,2
83,https://www.webofscience.com/wos/author/record/51097532,"Siswanah, Emy",JMB-2865-2023,2
84,https://www.webofscience.com/wos/author/record/46234891,"Muhammad, Hasyim",IST-5304-2023,2
85,https://www.webofscience.com/wos/author/record/45973616,"Musyafiq, Ahmad",IRS-4025-2023,2
86,https://www.webofscience.com/wos/author/record/41665402,"Fadllan, Andi",IAM-5420-2023,2
87,https://www.webofscience.com/wos/author/record/40914475,"Junaedi, Mahfud",HXL-4293-2023,2
88,https://www.webofscience.com/wos/author/record/39039432,"Hidayatullah, Ahmad",HPV-9246-2023,2
89,https://www.webofscience.com/wos/author/record/3628152,"Moh, Khasan",AFD-6343-2022,2
90,https://www.webofscience.com/wos/author/record/34635513,"Visita, Luksi",GXF-5304-2022,2
91,https://www.webofscience.com/wos/author/record/32733988,"Rokhmadi, Rokhmadi",GPR-3759-2022,2
92,https://www.webofscience.com/wos/author/record/32514754,"Hidayanti, Ema",GOQ-4523-2022,2
93,https://www.webofscience.com/wos/author/record/32363066,"Sholihan, Sholihan",GNX-2832-2022,2
94,https://www.webofscience.com/wos/author/record/31908506,"Abdullah, Shodiq",GMC-8270-2022,2
95,https://www.webofscience.com/wos/author/record/31796911,"umam, khothibul",GLR-6675-2022,2
96,https://www.webofscience.com/wos/author/record/31796492,"Ikhrom, Ikhrom",GLR-6256-2022,2
97,https://www.webofscience.com/wos/author/record/31021838,"Yahya, Muchlis",GIR-1452-2022,2
98,https://www.webofscience.com/wos/author/record/3094706,"Farida, Dessy",ADC-9635-2022,2
99,https://www.webofscience.com/wos/author/record/29802831,"Sulthon, Muhammad",GDL-2445-2022,2
100,https://www.webofscience.com/wos/author/record/29777589,"Musyafak, Najahan",GDI-7204-2022,2
101,https://www.webofscience.com/wos/author/record/29322287,"Rahman, L.",GBP-1902-2022,2
102,https://www.webofscience.com/wos/author/record/27117525,"Prawira, W.",FSK-7130-2022,2
103,https://www.webofscience.com/wos/author/record/26817692,"Norasia, Yolanda",FRE-7299-2022,2
104,https://www.webofscience.com/wos/author/record/26632273,"Prayogo, Agus",FQM-1879-2022,2
105,https://www.webofscience.com/wos/author/record/24949264,"Mas'ud, Abdurrahman",FJM-8871-2022,2
106,https://www.webofscience.com/wos/author/record/2488651,"Hidayah, Malikhatul",AAD-6239-2022,2
107,https://www.webofscience.com/wos/author/record/2300928,"Salama, Nadiatus",AAP-5348-2021,2
108,https://www.webofscience.com/wos/author/record/20756509,"Drastisianti, Apriliana",ERY-6115-2022,2
109,https://www.webofscience.com/wos/author/record/16866395,"Taufiq, Imam",EBV-5992-2022,2
110,https://www.webofscience.com/wos/author/record/1594767,"Rusmadi, Rusmadi",T-9845-2017,2
111,https://www.webofscience.com/wos/author/record/13871039,"Saleh, Minhayati",DPP-0636-2022,2
112,https://www.webofscience.com/wos/author/record/12335111,Musahadi,DJH-4704-2022,2
113,https://www.webofscience.com/wos/author/record/85464466,"Adiratna, Widia",OXG-6671-2025,1
114,https://www.webofscience.com/wos/author/record/84357451,Rofiq,OSS-9648-2025,1
115,https://www.webofscience.com/wos/author/record/82234062,"Nugrawiyati, Jepri",OJU-6257-2025,1
116,https://www.webofscience.com/wos/author/record/80872507,"Handayani, Maya Rini",OEH-4702-2025,1
117,https://www.webofscience.com/wos/author/record/80787898,"Putri, Unzia Sagita",ODZ-0093-2025,1
118,https://www.webofscience.com/wos/author/record/79727025,"Ichwan, Mohammad Nor",NZK-9220-2025,1
119,https://www.webofscience.com/wos/author/record/79644453,Marajo,NZC-6648-2025,1
120,https://www.webofscience.com/wos/author/record/79229276,"Fariyani, Qisti",NXN-1471-2025,1
121,https://www.webofscience.com/wos/author/record/7727261,"Farida, Jauharotul",CPZ-6856-2022,1
122,https://www.webofscience.com/wos/author/record/7520823,"Ernawati, Briliyan",CPF-0416-2022,1
123,https://www.webofscience.com/wos/author/record/74734516,"Illiyyun, Naili Ni'matul",NFK-6455-2025,1
124,https://www.webofscience.com/wos/author/record/74679406,"Masrohatun, Masrohatun",NFF-1345-2025,1
125,https://www.webofscience.com/wos/author/record/74641718,"Safitri, Ririh Megah",NFB-3657-2025,1
126,https://www.webofscience.com/wos/author/record/74323560,"Naifah, Naifah",NDQ-5499-2025,1
127,https://www.webofscience.com/wos/author/record/74046818,"In'amuzzahidin, Muh",NCO-8757-2025,1
128,https://www.webofscience.com/wos/author/record/73910737,"Djamil, Abdul",NCB-2676-2025,1
129,https://www.webofscience.com/wos/author/record/73035121,"Marfu'ah, Usfiyatul",MYI-7060-2025,1
130,https://www.webofscience.com/wos/author/record/72577398,M. Deny Effendy Tambusay,MWN-9338-2025,1
131,https://www.webofscience.com/wos/author/record/69125990,"Turahman, Fitra Istianah",MIH-7930-2025,1
132,https://www.webofscience.com/wos/author/record/69121688,"Warno, W.",MIH-3627-2025,1
133,https://www.webofscience.com/wos/author/record/68044953,"Mujiasih, M.",MDR-6894-2025,1
134,https://www.webofscience.com/wos/author/record/67989044,"Munawar Said, Mochamad",MDM-0984-2025,1
135,https://www.webofscience.com/wos/author/record/67677794,"Permata, Kartika Indah",MCG-9735-2025,1
136,https://www.webofscience.com/wos/author/record/67591881,"Khoir, Tholkhatul",MBY-3822-2025,1
137,https://www.webofscience.com/wos/author/record/66053387,"Muthohar, Sofa",LVN-5292-2024,1
138,https://www.webofscience.com/wos/author/record/66036407,Fihris,LVL-8312-2024,1
139,https://www.webofscience.com/wos/author/record/6454715,"Chusna, Noor Amalia",CKN-4309-2022,1
140,https://www.webofscience.com/wos/author/record/63347451,"Febriana, Asri",LKR-9349-2024,1
141,https://www.webofscience.com/wos/author/record/61866503,"Parmudi, Mochamad",LEL-6803-2024,1
142,https://www.webofscience.com/wos/author/record/60862034,"Apriliana, Evita Nur",KZW-2327-2024,1
143,https://www.webofscience.com/wos/author/record/60449652,"Firdaus, Franky Leo",KYG-9842-2024,1
144,https://www.webofscience.com/wos/author/record/59584798,"Prasetyoningrum, Ari Kristin",KUX-2687-2024,1
145,https://www.webofscience.com/wos/author/record/56778633,"Qudsiyah, Emamatul",KJT-4837-2024,1
146,https://www.webofscience.com/wos/author/record/5613704,"Wihartati, Wening",CHE-3298-2022,1
147,https://www.webofscience.com/wos/author/record/55460500,"Afendi, Arif",KED-3699-2024,1
148,https://www.webofscience.com/wos/author/record/54381045,"Said, Mochamad Munawar",JZR-7317-2024,1
149,https://www.webofscience.com/wos/author/record/53708108,"Zikrinawati, Khairani",JWS-2644-2024,1
150,https://www.webofscience.com/wos/author/record/53090602,"Jamil, M. Mahadi Abdul",JUE-0582-2023,1
151,https://www.webofscience.com/wos/author/record/51106931,Fatimah Azzahra Mutmainah,JMC-2264-2023,1
152,https://www.webofscience.com/wos/author/record/51079808,"Amin, Nasihun",JLZ-4917-2023,1
153,https://www.webofscience.com/wos/author/record/51074312,"Baroroh, Umul",JLY-9421-2023,1
154,https://www.webofscience.com/wos/author/record/5025258,Barowi,CEX-4854-2022,1
155,https://www.webofscience.com/wos/author/record/48532109,"Abdullah, A. D.",JBX-3165-2023,1
156,https://www.webofscience.com/wos/author/record/4844828,Arsini,CEC-4422-2022,1
157,https://www.webofscience.com/wos/author/record/47629682,"Fittria, Anis",IYF-0108-2023,1
158,https://www.webofscience.com/wos/author/record/47517555,"Pimay, Awaludin",IXT-7969-2023,1
159,https://www.webofscience.com/wos/author/record/46726810,"Hapsin, Abu",IUR-7237-2023,1
160,https://www.webofscience.com/wos/author/record/46455692,"Hidayati, Tri Wahyu",ITP-6101-2023,1
161,https://www.webofscience.com/wos/author/record/46221095,"Sugiyanti, Dina",ISS-1508-2023,1
162,https://www.webofscience.com/wos/author/record/4543403,"Uhbiyati, Nur",CCY-2997-2022,1
163,https://www.webofscience.com/wos/author/record/4436444,"Khasanah, Rita Ariyana Nur",CCL-6037-2022,1
164,https://www.webofscience.com/wos/author/record/4307680,"Syukur, M. Amin",CBY-7272-2022,1
165,https://www.webofscience.com/wos/author/record/4293829,"Adeni, Adeni",CBX-3423-2022,1
166,https://www.webofscience.com/wos/author/record/4151052,"Aniqoh, Nur Aini Fitriya Ardiani",CBJ-0634-2022,1
167,https://www.webofscience.com/wos/author/record/40401242,"Sahidin, Sahidin",HVM-1058-2023,1
168,https://www.webofscience.com/wos/author/record/39136871,"Fadlilati, Dian",HQF-6685-2023,1
169,https://www.webofscience.com/wos/author/record/39101519,"Saekan, Mukhamad",HQC-1333-2023,1
170,https://www.webofscience.com/wos/author/record/39075632,"Ramadhana, Shela Delfia",HPZ-5446-2023,1
171,https://www.webofscience.com/wos/author/record/39067187,"Norra, Bunga Ihda",HPY-7001-2023,1
172,https://www.webofscience.com/wos/author/record/38720951,"Mujibatun, Siti",HOK-0765-2023,1
173,https://www.webofscience.com/wos/author/record/34958734,"Syukur, Fatah",GYL-8516-2022,1
174,https://www.webofscience.com/wos/author/record/34877767,"Armanda, Dian",GYD-7549-2022,1
175,https://www.webofscience.com/wos/author/record/32526523,"Imroni, Mohamad A.",GOU-6292-2022,1
176,https://www.webofscience.com/wos/author/record/32519831,"Murtadho, Ali",GOQ-9600-2022,1
177,https://www.webofscience.com/wos/author/record/32509946,"Purwanti, Kristi Liani",GOP-9715-2022,1
178,https://www.webofscience.com/wos/author/record/32505993,"Algifahmy, Ayu Faiza",GOP-5762-2022,1
179,https://www.webofscience.com/wos/author/record/32323895,"Khoirin, Nur",GNS-3661-2022,1
180,https://www.webofscience.com/wos/author/record/31590994,"Zuhri, Saifudin",GKX-0610-2022,1
181,https://www.webofscience.com/wos/author/record/30360712,"Tarwiyah, Siti",GFW-0326-2022,1
182,https://www.webofscience.com/wos/author/record/30088521,"Fikri, Ibnu",GES-8136-2022,1
183,https://www.webofscience.com/wos/author/record/29621261,"Syato, Ibnu",GCT-0876-2022,1
184,https://www.webofscience.com/wos/author/record/27767104,"Rokhmad, Abu",FVD-6709-2022,1
185,https://www.webofscience.com/wos/author/record/23773322,"Kuswanto, Lianah",FEF-2928-2022,1
186,https://www.webofscience.com/wos/author/record/2218493,"Ulinuha, Masy Ari",AAG-5860-2021,1
187,https://www.webofscience.com/wos/author/record/2217400,"Muslih, Muslih",AAG-4653-2021,1
188,https://www.webofscience.com/wos/author/record/21322049,"Fauzi, Muchamad",EUG-1658-2022,1
189,https://www.webofscience.com/wos/author/record/20940724,"Elfrida, N.",ESR-0331-2022,1
190,https://www.webofscience.com/wos/author/record/17799763,"Widyaningrum, Lulut",EFQ-9360-2022,1
191,https://www.webofscience.com/wos/author/record/16052191,"Wahidah, Baiq Farhatul",DYL-1787-2022,1
192,https://www.webofscience.com/wos/author/record/14720062,"Shodikin, Ali",DSX-9657-2022,1
193,https://www.webofscience.com/wos/author/record/14137001,"Rofi'Ah, Ndzani Latifatur",DQQ-6598-2022,1
194,https://www.webofscience.com/wos/author/record/13769137,"Rohmatina, Ita",DPE-8734-2022,1
195,https://www.webofscience.com/wos/author/record/13630162,"Rosidin, Didin Nurul",DOJ-9759-2022,1
196,https://www.webofscience.com/wos/author/record/12418399,"Musthofa, Malik",DJP-7995-2022,1
197,https://www.webofscience.com/wos/author/record/12374582,"Mufrikhah, Solkhah",DJL-4179-2022,1
198,https://www.webofscience.com/wos/author/record/11710526,Mujiasih,DGM-0120-2022,1
199,https://www.webofscience.com/wos/author/record/10989966,Listyono,DDI-9560-2022,1
200,https://www.webofscience.com/wos/author/record/10935437,Lianah,DDD-5027-2022,1
201,https://www.webofscience.com/wos/author/record/10015483,"Karunia, Anita Z.",CZE-5077-2022,1`;

// --- Utility Functions for Parsing ---

// Simple CSV Parser that handles quoted strings containing newlines/commas
const parseCSV = (text: string, isWos: boolean): any[] => {
  const lines = [];
  let currentLine = [];
  let currentField = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"'; // Escaped quote
        i++;
      } else {
        inQuotes = !inQuotes; // Toggle quotes
      }
    } else if (char === ',' && !inQuotes) {
      currentLine.push(currentField.trim());
      currentField = "";
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (currentField || currentLine.length > 0) {
        currentLine.push(currentField.trim());
        lines.push(currentLine);
      }
      currentLine = [];
      currentField = "";
      // Handle \r\n
      if (char === '\r' && nextChar === '\n') i++;
    } else {
      currentField += char;
    }
  }
  // Add last line
  if (currentField || currentLine.length > 0) {
      currentLine.push(currentField.trim());
      lines.push(currentLine);
  }

  // Remove header (1 line for both files based on user provided content)
  const dataRows = lines.slice(1);

  if (isWos) {
    return dataRows.filter(r => r.length >= 5).map(row => ({
      LinkProfil: row[1],
      Nama: row[2].replace(/^"|"$/g, ''), // Remove extra quotes if present
      WosID: row[3],
      JumlahDokumen: parseInt(row[4], 10) || 0
    }));
  } else {
    // Scopus processing
    return dataRows.filter(r => r.length >= 3 && r[1]).map(row => ({
      AuthorName: row[0],
      AuthID: row[1],
      DocCount: parseInt(row[2], 10) || 0,
      SubjectArea: row[3] || "",
      OrcID: row[4] || ""
    }));
  }
};

const normalizeName = (name: string): string => {
  if (!name) return "";
  // More robust normalization: split by non-letters, sort tokens, join
  // This handles "Last, First" vs "First Last" discrepancies
  return name
    .toLowerCase()
    .replace(/[^a-z\s]/g, ' ') // replace punctuation with space to split
    .split(/\s+/)
    .filter(Boolean)
    .sort()
    .join('');
};

export const getMergedData = (): MergedAuthor[] => {
  const scopusData: ScopusRaw[] = parseCSV(SCOPUS_CSV, false);
  const wosData: WosRaw[] = parseCSV(WOS_CSV, true);

  const mergedMap = new Map<string, MergedAuthor>();

  // 1. Process Scopus Data First
  scopusData.forEach(item => {
    const cleanName = item.AuthorName.replace(/^"|"$/g, '');
    const normalized = normalizeName(cleanName);
    const newSubjects = item.SubjectArea.split('\n').map(s => s.trim()).filter(Boolean);
    const url = `https://www.scopus.com/authid/detail.uri?authorId=${item.AuthID}`;

    if (mergedMap.has(normalized)) {
       const existing = mergedMap.get(normalized)!;
       existing.scopusDocs += item.DocCount;
       existing.totalDocs += item.DocCount;
       
       if (!existing.scopusId?.includes(item.AuthID)) {
           existing.scopusId = existing.scopusId ? `${existing.scopusId}, ${item.AuthID}` : item.AuthID;
           existing.scopusUrl.push(url);
       }
       
       const subjectSet = new Set([...(existing.subjects || []), ...newSubjects]);
       existing.subjects = Array.from(subjectSet);

       if (!existing.orcId && item.OrcID) {
           existing.orcId = item.OrcID;
       }

    } else {
        const entry: MergedAuthor = {
          id: `scopus-${item.AuthID}`,
          name: cleanName,
          scopusId: item.AuthID,
          scopusDocs: item.DocCount,
          wosDocs: 0,
          totalDocs: item.DocCount,
          scopusUrl: [url],
          wosUrl: [], // Initialize empty
          subjects: newSubjects,
          orcId: item.OrcID
        };
        mergedMap.set(normalized, entry);
    }
  });

  // 2. Process WOS Data and Merge
  wosData.forEach(item => {
    const cleanName = item.Nama.replace(/^"|"$/g, '');
    const normalized = normalizeName(cleanName);

    let existing = mergedMap.get(normalized);

    if (!existing) {
       for (const [key, val] of mergedMap.entries()) {
           if (key.includes(normalized) || normalized.includes(key)) {
               if (Math.abs(key.length - normalized.length) < 5) {
                   existing = val;
                   break;
               }
           }
       }
    }

    if (existing) {
      // Aggregate WOS docs
      existing.wosDocs += item.JumlahDokumen;
      existing.totalDocs += item.JumlahDokumen;

      // Handle ID and URL aggregation
      if (!existing.wosId?.includes(item.WosID)) {
          existing.wosId = existing.wosId ? `${existing.wosId}, ${item.WosID}` : item.WosID;
          if (!existing.wosUrl) existing.wosUrl = [];
          existing.wosUrl.push(item.LinkProfil);
      }
    } else {
      mergedMap.set(normalized, {
        id: `wos-${item.WosID}`,
        name: cleanName,
        wosId: item.WosID,
        wosDocs: item.JumlahDokumen,
        scopusDocs: 0,
        totalDocs: item.JumlahDokumen,
        scopusUrl: [],
        wosUrl: [item.LinkProfil],
      });
    }
  });

  return Array.from(mergedMap.values());
};
