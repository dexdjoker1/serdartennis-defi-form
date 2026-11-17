/* Defi Liga Seiten-Embeds (defi-main.html, defi-club.html?liga=heerdt|wetten). Live, keine Vorschau-Logik. */
(function(){
var LANGS=['de','en','tr','ja','zh','uk'], LBL={de:'DE',en:'EN',tr:'TR',ja:'日本語',zh:'中文',uk:'УКР'};
var LOC={de:'de-DE',en:'en-GB',tr:'tr-TR',ja:'ja-JP',zh:'zh-CN',uk:'uk-UA'}, KEY='serdartennis_lang_v2';
function detect(){ var q=(location.search.match(/[?&]lang=([a-z]+)/)||[])[1]; if(LANGS.indexOf(q)>=0) return q;
  try{ var s=localStorage.getItem(KEY); if(LANGS.indexOf(s)>=0) return s; }catch(e){} return 'de'; }
var LANG=detect();
var I={
de:{pv:'VORSCHAU – nicht live. Formulare senden hier nichts.',pick:'Wähle deine Liga',bh:'Heerdter TV · Düsseldorf · für Mitglieder',bw:'SV Union Wetten · Kevelaer · für alle',
 hero_p:'Fordere, spiele, sammle Punkte. Ab {start} – im Heerdter TV und beim SV Union Wetten.',
 e1:'01 · Die Idee',h1a:'Was ist die',h1b:'Defi Liga?',
 p11:'Die Defi Liga ist eine Tennis-Liga. „Defi“ heißt „Herausforderung“. Es gibt zwei Ligen: eine im Heerdter TV und eine beim SV Union Wetten. Jede Liga hat ihre eigene Anmeldung, eigene Ergebnisse und eine eigene Rangliste.',
 p12:'Das Prinzip ist einfach: Du forderst andere Spieler aus deiner Liga und spielst ein Match. Für jedes Match bekommst du Punkte. Die Punkte siehst du live in der Rangliste deiner Liga.',
 p13:'Die Liga startet am {start}. In den Sommerferien machen wir eine Pause. In den letzten 2 Wochen im September spielen die besten 8 die Playoffs.',
 e2:'02 · Die Regeln',h2a:'Die',h2b:'Regeln',ppm:'Punkte pro Match',w3:'3 – Sieg',l1:'1 – Niederlage',n0:'0 – Nicht gekommen',bon:'+1 – Forderungsbonus: Du hast gefordert und gewinnst? Dann bekommst du 3 + 1 = 4 Punkte.',
 e3:'03 · Mitmachen',h3a:'So machst du',h3b:'mit',p3:'Anmeldung, Ergebnisse und Rangliste findest du auf der Seite deines Vereins.',
 e4:'04 · Playoffs',h4a:'Playoffs &',h4b:'Finale',
 p41:'Die Liga geht vom {start} bis Mitte Juli 2027. Dann machen wir Pause in den Sommerferien. Ab {aug} spielen wir die restlichen Matches. Mitte September ist die Liga zu Ende. Danach spielen die besten 8 jeder Liga die Playoffs.',
 p42:'In den letzten 2 Wochen im September 2027 gibt es Viertelfinale und Halbfinale.',
 p43:'Heerdt: Das Finale ist beim Event „Hot in Heerdt“. Den Termin legt der Club fest.',
 p44:'Wetten: Das Finale ist am {date}. Der Termin ist noch vorläufig und kann sich ändern.',
 p45:'Für die Besten gibt es einen Pokal und Medaillen.',go:'Zu deiner Liga',
 back:'← DEFI Liga Regeln',club:'Verein',addr:'Adresse',who:'Wer darf mitmachen?',who_h:'Mitglieder vom Heerdter TV ab 18 Jahren',who_w:'Alle ab 18 Jahren – keine Mitgliedschaft nötig',
 start:'Start',fee:'Startgeld',fin:'Finale',fin_h:'Beim Event „Hot in Heerdt“. Den Termin legt der Club fest.',fin_w:'{date} – <em>vorläufig, kann sich noch ändern</em>',contact:'Kontakt',
 ef:'Anmelden & Ergebnis melden',hfa:'Mitmachen &',hfb:'Ergebnis melden',pf:'Der Gewinner meldet das Ergebnis. Stimmt etwas nicht? Dann schreib mir innerhalb von 2 Tagen per WhatsApp oder E-Mail.',
 er:'Rangliste',hra:'Rangliste &',hrb:'Spiele',pr:'Hier siehst du nur die Spieler und Spiele dieser Liga. Die Tabelle wird live aktualisiert.',
 eb:'Playoffs',hba:'Playoffs &',hbb:'Finale',
 sep_t:'Vorschau: getrennte Daten',sep_p:'Diese Seite lädt nur Daten mit <code>liga = {liga}</code>. Anmeldungen, Ergebnisse und Rangliste der anderen Liga erscheinen hier nie.',
 sep_w:'Die Rangliste zeigt Demo-Daten (Player A–L).',sep_h:'Die Rangliste zeigt Demo-Daten (Player A–L).',log:'In der Vorschau ausprobiert (nichts gesendet): {kind} → Liga „{liga}“',k_a:'Anmeldung',k_e:'Ergebnis'},
en:{pv:'PREVIEW – not live. Forms do not send anything here.',pick:'Choose your league',bh:'Heerdter TV · Düsseldorf · for members',bw:'SV Union Wetten · Kevelaer · open to all',
 hero_p:'Challenge, play, collect points. From {start} – at Heerdter TV and at SV Union Wetten.',
 e1:'01 · The idea',h1a:'What is the',h1b:'Defi Liga?',
 p11:'The Defi Liga is a tennis league. “Defi” means “challenge”. There are two leagues: one at Heerdter TV and one at SV Union Wetten. Each league has its own sign-up, its own results and its own ranking.',
 p12:'The idea is simple: you challenge other players from your league and play a match. You get points for every match. You can see the points live in your league’s ranking.',
 p13:'The league starts on {start}. We take a break during the summer holidays. In the last 2 weeks of September, the best 8 play the playoffs.',
 e2:'02 · The rules',h2a:'The',h2b:'rules',ppm:'Points per match',w3:'3 – Win',l1:'1 – Loss',n0:'0 – No-show',bon:'+1 – Challenge bonus: you challenged and you win? Then you get 3 + 1 = 4 points.',
 e3:'03 · Join',h3a:'How to',h3b:'join',p3:'Sign-up, results and ranking are on your club’s page.',
 e4:'04 · Playoffs',h4a:'Playoffs &',h4b:'final',
 p41:'The league runs from {start} to mid-July 2027. Then we take a break for the summer holidays. From {aug} we play the remaining matches. The league ends in mid-September. After that, the best 8 of each league play the playoffs.',
 p42:'In the last 2 weeks of September 2027 there are quarter-finals and semi-finals.',
 p43:'Heerdt: the final is played at the “Hot in Heerdt” event. The club sets the date.',
 p44:'Wetten: the final is on {date}. The date is provisional and may change.',
 p45:'The best players receive a trophy and medals.',go:'Go to your league',
 back:'← DEFI Liga rules',club:'Club',addr:'Address',who:'Who can take part?',who_h:'Heerdter TV members aged 18 and over',who_w:'Everyone aged 18 and over – no membership needed',
 start:'Start',fee:'Entry fee',fin:'Final',fin_h:'At the “Hot in Heerdt” event. The club sets the date.',fin_w:'{date} – <em>provisional, may still change</em>',contact:'Contact',
 ef:'Sign up & report a result',hfa:'Join &',hfb:'report a result',pf:'The winner reports the result. Something wrong? Then message me within 2 days via WhatsApp or email.',
 er:'Ranking',hra:'Ranking &',hrb:'matches',pr:'Here you only see the players and matches of this league. The table is updated live.',
 eb:'Playoffs',hba:'Playoffs &',hbb:'final',
 sep_t:'Preview: separate data',sep_p:'This page only loads data with <code>liga = {liga}</code>. Sign-ups, results and ranking of the other league never appear here.',
 sep_w:'The ranking shows demo data (Player A–L).',sep_h:'The ranking shows demo data (Player A–L).',log:'Tried in the preview (nothing sent): {kind} → league “{liga}”',k_a:'Sign-up',k_e:'Result'},
tr:{pv:'ÖNİZLEME – canlı değil. Formlar burada hiçbir şey göndermez.',pick:'Liginizi seçin',bh:'Heerdter TV · Düsseldorf · üyeler için',bw:'SV Union Wetten · Kevelaer · herkese açık',
 hero_p:'Meydan okuyun, oynayın, puan toplayın. {start} itibarıyla – Heerdter TV’de ve SV Union Wetten’de.',
 e1:'01 · Fikir',h1a:'Defi Liga',h1b:'nedir?',
 p11:'Defi Liga bir tenis ligidir. “Defi”, “meydan okuma” demektir. İki lig var: biri Heerdter TV’de, biri SV Union Wetten’de. Her ligin kendi kaydı, kendi sonuçları ve kendi sıralaması vardır.',
 p12:'Prensip basit: Liginizdeki diğer oyunculara meydan okur ve maç yaparsınız. Her maçtan puan alırsınız. Puanlarınızı liginizin sıralamasında canlı görürsünüz.',
 p13:'Lig {start} tarihinde başlar. Yaz tatilinde ara veririz. Eylül’ün son 2 haftasında en iyi 8 oyuncu play-off oynar.',
 e2:'02 · Kurallar',h2a:'',h2b:'Kurallar',ppm:'Maç başına puan',w3:'3 – Galibiyet',l1:'1 – Mağlubiyet',n0:'0 – Gelmedi',bon:'+1 – Meydan okuma bonusu: Siz meydan okudunuz ve kazandınız mı? O zaman 3 + 1 = 4 puan alırsınız.',
 e3:'03 · Katılım',h3a:'Nasıl',h3b:'katılırsınız',p3:'Kayıt, sonuçlar ve sıralama kulübünüzün sayfasındadır.',
 e4:'04 · Play-off',h4a:'Play-off ve',h4b:'Final',
 p41:'Lig {start} tarihinden Temmuz 2027 ortasına kadar sürer. Sonra yaz tatili için ara veririz. {aug} tarihinden itibaren kalan maçları oynarız. Lig Eylül ortasında biter. Ardından her ligin en iyi 8 oyuncusu play-off oynar.',
 p42:'Eylül 2027’nin son 2 haftasında çeyrek final ve yarı final oynanır.',
 p43:'Heerdt: Final “Hot in Heerdt” etkinliğinde oynanır. Tarihi kulüp belirler.',
 p44:'Wetten: Final {date} tarihindedir. Tarih henüz geçicidir ve değişebilir.',
 p45:'En iyilere kupa ve madalya verilir.',go:'Liginize gidin',
 back:'← DEFI Liga kuralları',club:'Kulüp',addr:'Adres',who:'Kimler katılabilir?',who_h:'18 yaş ve üzeri Heerdter TV üyeleri',who_w:'18 yaş ve üzeri herkes – üyelik gerekmez',
 start:'Başlangıç',fee:'Katılım ücreti',fin:'Final',fin_h:'“Hot in Heerdt” etkinliğinde. Tarihi kulüp belirler.',fin_w:'{date} – <em>geçici, değişebilir</em>',contact:'İletişim',
 ef:'Kayıt ve sonuç bildirme',hfa:'Katılın ve',hfb:'sonucu bildirin',pf:'Kazanan sonucu bildirir. Bir yanlışlık mı var? 2 gün içinde bana WhatsApp veya e-posta ile yazın.',
 er:'Sıralama',hra:'Sıralama ve',hrb:'maçlar',pr:'Burada yalnızca bu ligin oyuncularını ve maçlarını görürsünüz. Tablo canlı güncellenir.',
 eb:'Play-off',hba:'Play-off ve',hbb:'Final',
 sep_t:'Önizleme: ayrı veriler',sep_p:'Bu sayfa yalnızca <code>liga = {liga}</code> olan verileri yükler. Diğer ligin kayıtları, sonuçları ve sıralaması burada asla görünmez.',
 sep_w:'Sıralama demo verileri gösterir (Player A–L).',sep_h:'Sıralama demo verileri gösterir (Player A–L).',log:'Önizlemede denendi (hiçbir şey gönderilmedi): {kind} → “{liga}” ligi',k_a:'Kayıt',k_e:'Sonuç'},
ja:{pv:'プレビュー – 公開されていません。ここではフォームは何も送信しません。',pick:'リーグを選んでください',bh:'Heerdter TV · デュッセルドルフ · 会員向け',bw:'SV Union Wetten · ケーヴェラー · どなたでも',
 hero_p:'挑戦して、プレーして、ポイントを集めよう。{start}から – Heerdter TVとSV Union Wettenで。',
 e1:'01 · コンセプト',h1a:'Defi Ligaとは',h1b:'？',
 p11:'Defi Ligaはテニスのリーグです。「Defi」は「挑戦」という意味です。リーグは2つあります。Heerdter TVのリーグとSV Union Wettenのリーグです。各リーグには、それぞれ独自の参加登録、試合結果、ランキングがあります。',
 p12:'仕組みはシンプルです。同じリーグの選手に挑戦して試合をします。試合ごとにポイントがもらえます。ポイントはリーグのランキングでリアルタイムに確認できます。',
 p13:'リーグは{start}に始まります。夏休み期間は休止します。9月の最後の2週間に、上位8人がプレーオフを行います。',
 e2:'02 · ルール',h2a:'',h2b:'ルール',ppm:'1試合あたりのポイント',w3:'3 – 勝利',l1:'1 – 敗北',n0:'0 – 不参加',bon:'+1 – 挑戦ボーナス：自分から挑戦して勝った場合は 3 + 1 = 4ポイントです。',
 e3:'03 · 参加',h3a:'参加',h3b:'方法',p3:'参加登録、試合結果、ランキングは、各クラブのページにあります。',
 e4:'04 · プレーオフ',h4a:'プレーオフと',h4b:'決勝',
 p41:'リーグは{start}から2027年7月中旬まで行います。その後、夏休み期間は休止します。{aug}から残りの試合を行います。リーグは9月中旬に終わります。その後、各リーグの上位8人がプレーオフを行います。',
 p42:'2027年9月の最後の2週間に、準々決勝と準決勝を行います。',
 p43:'Heerdt：決勝は「Hot in Heerdt」イベントで行います。日程はクラブが決めます。',
 p44:'Wetten：決勝は{date}です。日程は暫定で、変更になる可能性があります。',
 p45:'上位の選手にはトロフィーとメダルが贈られます。',go:'リーグへ',
 back:'← DEFI Liga ルール',club:'クラブ',addr:'住所',who:'参加できる人',who_h:'18歳以上のHeerdter TV会員',who_w:'18歳以上ならどなたでも – 会員資格は不要',
 start:'開始',fee:'参加費',fin:'決勝',fin_h:'「Hot in Heerdt」イベントにて。日程はクラブが決めます。',fin_w:'{date} – <em>暫定・変更の可能性あり</em>',contact:'お問い合わせ',
 ef:'参加登録と結果報告',hfa:'参加登録と',hfb:'結果報告',pf:'勝者が結果を報告します。誤りがありますか？ 2日以内にWhatsAppまたはメールでご連絡ください。',
 er:'ランキング',hra:'ランキングと',hrb:'試合',pr:'ここには、このリーグの選手と試合だけが表示されます。順位表はリアルタイムで更新されます。',
 eb:'プレーオフ',hba:'プレーオフと',hbb:'決勝',
 sep_t:'プレビュー：データは別々',sep_p:'このページは <code>liga = {liga}</code> のデータだけを読み込みます。もう一方のリーグの登録・結果・ランキングがここに表示されることはありません。',
 sep_w:'ランキングにはデモデータ（Player A–L）が表示されています。',sep_h:'ランキングにはデモデータ（Player A–L）が表示されています。',log:'プレビューで試しました（送信なし）：{kind} → 「{liga}」リーグ',k_a:'参加登録',k_e:'結果'},
zh:{pv:'预览 – 尚未上线。此处的表格不会发送任何内容。',pick:'选择你的联赛',bh:'Heerdter TV · 杜塞尔多夫 · 仅限会员',bw:'SV Union Wetten · 凯沃拉尔 · 对所有人开放',
 hero_p:'发起挑战，参加比赛，赢取积分。自{start}起 – 在Heerdter TV和SV Union Wetten。',
 e1:'01 · 理念',h1a:'什么是',h1b:'Defi Liga？',
 p11:'Defi Liga是一个网球联赛。“Defi”的意思是“挑战”。共有两个联赛：一个在Heerdter TV，一个在SV Union Wetten。每个联赛都有自己的报名、比赛结果和排名。',
 p12:'规则很简单：你向同一联赛的其他选手发起挑战并进行比赛。每场比赛都能获得积分。你可以在所在联赛的排名中实时查看积分。',
 p13:'联赛于{start}开始。暑假期间暂停。9月的最后2周，排名前8的选手进行季后赛。',
 e2:'02 · 规则',h2a:'',h2b:'规则',ppm:'每场比赛积分',w3:'3 – 胜',l1:'1 – 负',n0:'0 – 未到场',bon:'+1 – 挑战奖励：你发起挑战并获胜？那你将获得 3 + 1 = 4 分。',
 e3:'03 · 参加',h3a:'如何',h3b:'参加',p3:'报名、比赛结果和排名都在你所在俱乐部的页面上。',
 e4:'04 · 季后赛',h4a:'季后赛与',h4b:'决赛',
 p41:'联赛从{start}持续到2027年7月中旬。随后暑假期间暂停。从{aug}起进行剩余的比赛。联赛于9月中旬结束。之后，每个联赛排名前8的选手进行季后赛。',
 p42:'2027年9月的最后2周进行四分之一决赛和半决赛。',
 p43:'Heerdt：决赛在“Hot in Heerdt”活动中举行。日期由俱乐部决定。',
 p44:'Wetten：决赛于{date}举行。日期为暂定，可能会变动。',
 p45:'优胜者将获得奖杯和奖牌。',go:'前往你的联赛',
 back:'← DEFI Liga 规则',club:'俱乐部',addr:'地址',who:'谁可以参加？',who_h:'年满18岁的Heerdter TV会员',who_w:'所有年满18岁的人 – 无需会员身份',
 start:'开始',fee:'报名费',fin:'决赛',fin_h:'在“Hot in Heerdt”活动中。日期由俱乐部决定。',fin_w:'{date} – <em>暂定，可能变动</em>',contact:'联系方式',
 ef:'报名与提交结果',hfa:'报名与',hfb:'提交结果',pf:'由胜者提交结果。有错误吗？请在2天内通过WhatsApp或电子邮件联系我。',
 er:'排名',hra:'排名与',hrb:'比赛',pr:'这里只显示本联赛的选手和比赛。排名表实时更新。',
 eb:'季后赛',hba:'季后赛与',hbb:'决赛',
 sep_t:'预览：数据分开',sep_p:'本页面只加载 <code>liga = {liga}</code> 的数据。另一个联赛的报名、结果和排名永远不会出现在这里。',
 sep_w:'排名显示的是演示数据（Player A–L）。',sep_h:'排名显示的是演示数据（Player A–L）。',log:'在预览中试用（未发送）：{kind} → “{liga}”联赛',k_a:'报名',k_e:'结果'},
uk:{pv:'ПОПЕРЕДНІЙ ПЕРЕГЛЯД – не опубліковано. Форми тут нічого не надсилають.',pick:'Оберіть свою лігу',bh:'Heerdter TV · Дюссельдорф · для членів клубу',bw:'SV Union Wetten · Кефелар · для всіх',
 hero_p:'Викликай, грай, збирай очки. З {start} – у Heerdter TV та в SV Union Wetten.',
 e1:'01 · Ідея',h1a:'Що таке',h1b:'Defi Liga?',
 p11:'Defi Liga – це тенісна ліга. «Defi» означає «виклик». Є дві ліги: одна в Heerdter TV, інша в SV Union Wetten. Кожна ліга має власну реєстрацію, власні результати та власний рейтинг.',
 p12:'Принцип простий: ви викликаєте інших гравців своєї ліги та граєте матч. За кожен матч ви отримуєте очки. Свої очки ви бачите в реальному часі в рейтингу своєї ліги.',
 p13:'Ліга стартує {start}. На літніх канікулах ми робимо перерву. В останні 2 тижні вересня найкращі 8 грають плей-оф.',
 e2:'02 · Правила',h2a:'',h2b:'Правила',ppm:'Очки за матч',w3:'3 – Перемога',l1:'1 – Поразка',n0:'0 – Неявка',bon:'+1 – Бонус за виклик: ви викликали й перемогли? Тоді отримуєте 3 + 1 = 4 очки.',
 e3:'03 · Участь',h3a:'Як',h3b:'долучитися',p3:'Реєстрація, результати й рейтинг – на сторінці вашого клубу.',
 e4:'04 · Плей-оф',h4a:'Плей-оф і',h4b:'фінал',
 p41:'Ліга триває з {start} до середини липня 2027 року. Потім ми робимо перерву на літні канікули. З {aug} граємо решту матчів. У середині вересня ліга завершується. Після цього найкращі 8 кожної ліги грають плей-оф.',
 p42:'В останні 2 тижні вересня 2027 року проходять чвертьфінали та півфінали.',
 p43:'Heerdt: фінал проходить на заході «Hot in Heerdt». Дату визначає клуб.',
 p44:'Wetten: фінал – {date}. Дата попередня й може змінитися.',
 p45:'Найкращі отримують кубок і медалі.',go:'До своєї ліги',
 back:'← Правила DEFI Liga',club:'Клуб',addr:'Адреса',who:'Хто може брати участь?',who_h:'Члени Heerdter TV віком від 18 років',who_w:'Усі віком від 18 років – членство не потрібне',
 start:'Старт',fee:'Стартовий внесок',fin:'Фінал',fin_h:'На заході «Hot in Heerdt». Дату визначає клуб.',fin_w:'{date} – <em>попередньо, може змінитися</em>',contact:'Контакт',
 ef:'Реєстрація та результат',hfa:'Участь і',hfb:'результат',pf:'Переможець повідомляє результат. Щось не так? Напишіть мені протягом 2 днів у WhatsApp або електронною поштою.',
 er:'Рейтинг',hra:'Рейтинг і',hrb:'матчі',pr:'Тут ви бачите лише гравців і матчі цієї ліги. Таблиця оновлюється в реальному часі.',
 eb:'Плей-оф',hba:'Плей-оф і',hbb:'фінал',
 sep_t:'Попередній перегляд: окремі дані',sep_p:'Ця сторінка завантажує лише дані з <code>liga = {liga}</code>. Реєстрації, результати й рейтинг іншої ліги тут ніколи не з’являються.',
 sep_w:'Рейтинг показує демо-дані (Player A–L).',sep_h:'Рейтинг показує демо-дані (Player A–L).',log:'Випробувано в попередньому перегляді (нічого не надіслано): {kind} → ліга «{liga}»',k_a:'Реєстрація',k_e:'Результат'}
};
function T(k,v){ if(k==='__start') return D(2027,5,10,true); var s=(I[LANG]||I.de)[k]; if(s==null) s=I.de[k]; return String(s).replace(/\{(\w+)\}/g,function(_,x){ return v&&v[x]!=null?v[x]:''; }); }
function D(y,m,d,wd){ return new Intl.DateTimeFormat(LOC[LANG],{weekday:wd?'long':undefined,day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(y,m-1,d))); }
var PAGE=document.body.getAttribute('data-page'), LIGA=PAGE==='main'?'alle':ST_LIGA;
var URLS={main:ST_SITE+'/defi-liga',heerdt:ST_SITE+'/defi-liga-heerdt',wetten:ST_SITE+'/defi-liga-wetten'};
function render(){
  document.documentElement.lang=LANG==='zh'?'zh-CN':LANG;
  var v={start:D(2027,5,10),aug:D(2027,8,16),date:D(2027,9,25,true),liga:LIGA};
  document.querySelectorAll('[data-t]').forEach(function(e){ e.innerHTML=T(e.getAttribute('data-t'),v); });
  document.querySelectorAll('[data-club]').forEach(function(e){ e.style.display=e.getAttribute('data-club')===LIGA?'':'none'; });
  document.querySelectorAll('.lsw button').forEach(function(b){ b.classList.toggle('on',b.getAttribute('data-l')===LANG); });
  document.querySelectorAll('[data-go]').forEach(function(a){ a.href=URLS[a.getAttribute('data-go')]; a.target='_top'; });
  post({type:'st-height',height:Math.ceil(document.documentElement.scrollHeight)});
}
function post(m){ try{ window.parent.postMessage(m,'*'); }catch(e){} }
/* Links in Wix: _top; falls der Browser blockiert, per Skript */
/* Navigation: 1) Nachricht an den Wix-Seitencode (wixLocation.to), 2) Fallback: Top-Navigation, falls nach 600 ms noch hier. */
document.addEventListener('click',function(e){ var a=e.target.closest('a[data-go]'); if(!a) return; e.preventDefault();
  var to=a.getAttribute('data-go'), href=a.href;
  post({type:'defiGo',to:to,path:(to==='main'?'/defi-liga':'/defi-liga-'+to)});
  setTimeout(function(){ try{ window.top.location.href=href; }catch(x){ try{ window.open(href,'_top'); }catch(y){} } },600);
});
function setLang(l){ LANG=l; try{ localStorage.setItem(KEY,l); }catch(e){} render(); /* Unter-Embeds hören auf das storage-Event */ }
var sw=document.querySelector('.lsw');
if(sw){ sw.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>'+LANGS.map(function(l){ return '<button type="button" data-l="'+l+'">'+LBL[l]+'</button>'; }).join('');
  sw.addEventListener('click',function(e){ var b=e.target.closest('button'); if(b) setLang(b.getAttribute('data-l')); }); }
window.addEventListener('storage',function(e){ if(e.key===KEY&&LANGS.indexOf(e.newValue)>=0&&e.newValue!==LANG){ LANG=e.newValue; render(); } });
/* Unter-Embeds laden, eigene Sprachumschalter ausblenden, Höhe anpassen */
var frames=[].slice.call(document.querySelectorAll('iframe[data-src]'));
frames.forEach(function(f){
  f.addEventListener('load',function(){ try{ var d=f.contentDocument, st=d.createElement('style'); st.textContent='.langsw{display:none!important}'; d.head.appendChild(st); fit(f); }catch(e){} });
  var src=f.getAttribute('data-src'); f.src=src+(src.indexOf('?')<0?'?':'&')+'lang='+LANG;
});
function fit(f){ try{ var h=Math.ceil(f.contentDocument.body.getBoundingClientRect().height)+12; f.style.height=Math.max(60,h)+'px'; }catch(e){} }
function frameOf(src){ for(var i=0;i<frames.length;i++) if(frames[i].contentWindow===src) return frames[i]; return null; }
var ROLE={}; frames.forEach(function(f){ ROLE[f.getAttribute('data-role')||'']=f; });
/* Falls der Wix-Seitencode noch nicht zuhört: 'bereit' wiederholen, bis Daten kommen */
var GOT={};
function retry(m){ [1000,2500,5000,9000].forEach(function(ms){ setTimeout(function(){ if(!GOT[m.type]) post(m); },ms); }); }
/* Relay zwischen Unter-Embeds (Formular, Rangliste) und dem Wix-Seitencode (#defiClub) */
window.addEventListener('message',function(ev){
  var d=ev.data; if(!d||typeof d!=='object') return;
  var f=frameOf(ev.source);
  if(f){
    if(d.type==='st-height'||d.type==='height'){ fit(f); setTimeout(function(){ post({type:'st-height',height:Math.ceil(document.documentElement.scrollHeight)}); },50); return; }
    if(PAGE==='club'){ if(d.type==='defiSubmit'&&d.data) d.data.liga=LIGA; d.liga=LIGA; post(d);
      if(d.type==='defiFormReady'||d.type==='ready') retry(d); }
    return;
  }
  if(ev.source===window.parent&&PAGE==='club'){
    var t=d.type, to=null;
    if(t==='defiSubmitResult'||t==='defiPlayers'||t==='defiTab') to=ROLE.form;
    else if(t==='defiData'){ if(d.liga&&d.liga!==LIGA) return; to=ROLE.rang; }
    if(t==='defiPlayers') GOT.defiFormReady=1; if(t==='defiData') GOT.ready=1;
    if(to&&to.contentWindow) to.contentWindow.postMessage(d,'*');
  }
});
window.addEventListener('resize',function(){ frames.forEach(fit); });
render();
})();
