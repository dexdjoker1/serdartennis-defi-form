/* DEFI 2-Club Vorschau: Liga aus ?liga=heerdt|wetten|alle (Standard heerdt). ST_PREVIEW=true: nichts wird an das Backend gesendet. */
(function(){
  var q=(location.search.match(/[?&]liga=([a-z]+)/)||[])[1];
  window.ST_LIGA=(q==='wetten'||q==='alle')?q:'heerdt';
  window.ST_PREVIEW=true;
  window.ST_LIGA_CLUB={heerdt:'Heerdter TV',wetten:'SV Union Wetten'};
  window.ST_WET_FINAL=[2027,9,25]; /* vorläufig */
  window.ST_LX={
de:{a1_wet:'Für alle ab 18 Jahren – keine Mitgliedschaft nötig.',
 b1_wet:'Alle ab 18 Jahren. Du musst kein Mitglied im {club} sein.',
 b1_all:'Heerdt: alle Mitglieder vom Heerdter TV ab 18 Jahren. Wetten: alle ab 18 Jahren, auch ohne Mitgliedschaft.',
 fin_wet:'Finale am {date} (vorläufig, kann sich noch ändern)',
 fin_all:'Finale – Heerdt: bei „Hot in Heerdt“ · Wetten: {date} (vorläufig)',
 prev:'Vorschau: Es wurde nichts gesendet. Auf der echten Seite wird das in der Liga „{liga}“ gespeichert.'},
en:{a1_wet:'For everyone aged 18 and over – no membership needed.',
 b1_wet:'Everyone aged 18 and over. You do not need to be a member of {club}.',
 b1_all:'Heerdt: all Heerdter TV members aged 18 and over. Wetten: everyone aged 18 and over, no membership needed.',
 fin_wet:'Final on {date} (provisional, may still change)',
 fin_all:'Final – Heerdt: at “Hot in Heerdt” · Wetten: {date} (provisional)',
 prev:'Preview: nothing was sent. On the real page this is saved in the “{liga}” league.'},
tr:{a1_wet:'18 yaş ve üzeri herkes için – üyelik gerekmez.',
 b1_wet:'18 yaş ve üzeri herkes. {club} üyesi olmanız gerekmez.',
 b1_all:'Heerdt: 18 yaş ve üzeri tüm Heerdter TV üyeleri. Wetten: 18 yaş ve üzeri herkes, üyelik gerekmez.',
 fin_wet:'Final {date} (geçici, değişebilir)',
 fin_all:'Final – Heerdt: “Hot in Heerdt” etkinliğinde · Wetten: {date} (geçici)',
 prev:'Önizleme: Hiçbir şey gönderilmedi. Gerçek sayfada bu, “{liga}” ligine kaydedilir.'},
ja:{a1_wet:'18歳以上ならどなたでも参加できます。会員資格は不要です。',
 b1_wet:'18歳以上ならどなたでも参加できます。{club}の会員である必要はありません。',
 b1_all:'Heerdt：18歳以上のHeerdter TV会員。Wetten：18歳以上ならどなたでも（会員資格不要）。',
 fin_wet:'決勝は{date}（暫定・変更の可能性あり）',
 fin_all:'決勝 – Heerdt：「Hot in Heerdt」にて · Wetten：{date}（暫定）',
 prev:'プレビュー：何も送信されていません。実際のページでは「{liga}」リーグに保存されます。'},
zh:{a1_wet:'面向所有年满18岁的人——无需会员身份。',
 b1_wet:'所有年满18岁的人。你无需是{club}的会员。',
 b1_all:'Heerdt：所有年满18岁的Heerdter TV会员。Wetten：所有年满18岁的人，无需会员身份。',
 fin_wet:'决赛于{date}（暂定，可能变动）',
 fin_all:'决赛 – Heerdt：在“Hot in Heerdt”举行 · Wetten：{date}（暂定）',
 prev:'预览：没有发送任何内容。在正式页面上，这将保存在“{liga}”联赛中。'},
uk:{a1_wet:'Для всіх віком від 18 років – членство не потрібне.',
 b1_wet:'Усі віком від 18 років. Вам не потрібно бути членом {club}.',
 b1_all:'Heerdt: усі члени Heerdter TV віком від 18 років. Wetten: усі віком від 18 років, без членства.',
 fin_wet:'Фінал {date} (попередньо, може змінитися)',
 fin_all:'Фінал – Heerdt: на «Hot in Heerdt» · Wetten: {date} (попередньо)',
 prev:'Попередній перегляд: нічого не надіслано. На справжній сторінці це зберігається в лізі «{liga}».'}
  };
  window.stLX=function(lang,key,vars){ var p=ST_LX[lang]||ST_LX.de, s=p[key]; if(s==null) s=ST_LX.de[key];
    if(vars) s=s.replace(/\{(\w+)\}/g,function(_,k){ return vars[k]==null?'':vars[k]; }); return s; };
  window.stWetFinalDate=function(locale){ var d=ST_WET_FINAL; return new Intl.DateTimeFormat(locale,{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(d[0],d[1]-1,d[2]))); };
})();
