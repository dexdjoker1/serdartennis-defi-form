/* Defi Liga: Liga aus ?liga=heerdt|wetten|alle. Ohne Parameter = heerdt (alte /defi-liga-Einbindung bleibt unverändert). */
(function(){
  var q=(location.search.match(/[?&]liga=([a-z]+)/)||[])[1];
  window.ST_LIGA_SET=(q==='heerdt'||q==='wetten'||q==='alle');
  window.ST_LIGA=ST_LIGA_SET?q:'heerdt';
  window.ST_LIGA_CLUB={heerdt:'Heerdter TV',wetten:'SV Union Wetten'};
  window.ST_LIGA_NAME={heerdt:'Defi Liga Heerdt',wetten:'Defi Liga Wetten'};
  window.ST_WET_FINAL=[2027,9,25]; /* vorläufig */
  window.ST_SITE='https://akdagserdar47.wixsite.com/serdartennis';
  window.ST_LX={
de:{at_h:'bei „{fest}“',prov:'vorläufig, kann sich noch ändern',a1_wet:'Für alle ab 18 Jahren – keine Mitgliedschaft nötig.',
 b1_wet:'Alle ab 18 Jahren. Du musst kein Mitglied im {club} sein.',
 b1_all:'Heerdt: alle Mitglieder vom Heerdter TV ab 18 Jahren. Wetten: alle ab 18 Jahren, auch ohne Mitgliedschaft.',
 fin_wet:'Finale am {date} (vorläufig, kann sich noch ändern)',
 fin_all:'Finale – Heerdt: bei „Hot in Heerdt“ · Wetten: {date} (vorläufig)'},
en:{at_h:'at “{fest}”',prov:'provisional, may still change',a1_wet:'For everyone aged 18 and over – no membership needed.',
 b1_wet:'Everyone aged 18 and over. You do not need to be a member of {club}.',
 b1_all:'Heerdt: all Heerdter TV members aged 18 and over. Wetten: everyone aged 18 and over, no membership needed.',
 fin_wet:'Final on {date} (provisional, may still change)',
 fin_all:'Final – Heerdt: at “Hot in Heerdt” · Wetten: {date} (provisional)'},
tr:{at_h:'“{fest}” etkinliğinde',prov:'geçici, değişebilir',a1_wet:'18 yaş ve üzeri herkes için – üyelik gerekmez.',
 b1_wet:'18 yaş ve üzeri herkes. {club} üyesi olmanız gerekmez.',
 b1_all:'Heerdt: 18 yaş ve üzeri tüm Heerdter TV üyeleri. Wetten: 18 yaş ve üzeri herkes, üyelik gerekmez.',
 fin_wet:'Final {date} (geçici, değişebilir)',
 fin_all:'Final – Heerdt: “Hot in Heerdt” etkinliğinde · Wetten: {date} (geçici)'},
ja:{at_h:'「{fest}」にて',prov:'暫定・変更の可能性あり',a1_wet:'18歳以上ならどなたでも参加できます。会員資格は不要です。',
 b1_wet:'18歳以上ならどなたでも参加できます。{club}の会員である必要はありません。',
 b1_all:'Heerdt：18歳以上のHeerdter TV会員。Wetten：18歳以上ならどなたでも（会員資格不要）。',
 fin_wet:'決勝は{date}（暫定・変更の可能性あり）',
 fin_all:'決勝 – Heerdt：「Hot in Heerdt」にて · Wetten：{date}（暫定）'},
zh:{at_h:'在“{fest}”举行',prov:'暂定，可能变动',a1_wet:'面向所有年满18岁的人——无需会员身份。',
 b1_wet:'所有年满18岁的人。你无需是{club}的会员。',
 b1_all:'Heerdt：所有年满18岁的Heerdter TV会员。Wetten：所有年满18岁的人，无需会员身份。',
 fin_wet:'决赛于{date}（暂定，可能变动）',
 fin_all:'决赛 – Heerdt：在“Hot in Heerdt”举行 · Wetten：{date}（暂定）'},
uk:{at_h:'на «{fest}»',prov:'попередньо, може змінитися',a1_wet:'Для всіх віком від 18 років – членство не потрібне.',
 b1_wet:'Усі віком від 18 років. Вам не потрібно бути членом {club}.',
 b1_all:'Heerdt: усі члени Heerdter TV віком від 18 років. Wetten: усі віком від 18 років, без членства.',
 fin_wet:'Фінал {date} (попередньо, може змінитися)',
 fin_all:'Фінал – Heerdt: на «Hot in Heerdt» · Wetten: {date} (попередньо)'}
  };
  window.stLX=function(lang,key,vars){ var p=ST_LX[lang]||ST_LX.de, s=p[key]; if(s==null) s=ST_LX.de[key];
    if(vars) s=s.replace(/\{(\w+)\}/g,function(_,k){ return vars[k]==null?'':vars[k]; }); return s; };
  window.stWetFinalDate=function(locale){ var d=ST_WET_FINAL; return new Intl.DateTimeFormat(locale,{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(d[0],d[1]-1,d[2]))); };
  /* Jede Liga hat ihre EIGENE WhatsApp-Gruppe (kein Link vorhanden). Nur aktiv, wenn ?liga= gesetzt ist. */
  var WA={
    de:[/WhatsApp-Gruppe/g,function(n){return 'WhatsApp-Gruppe der '+n;},'WhatsApp-Gruppe deiner Liga'],
    en:[/the WhatsApp group/g,function(n){return 'the '+n+' WhatsApp group';},'your league’s WhatsApp group'],
    tr:[/WhatsApp grubunda/g,function(n){return n+' WhatsApp grubunda';},'liginizin WhatsApp grubunda'],
    ja:[/WhatsAppグループ/g,function(n){return n+'のWhatsAppグループ';},'自分のリーグのWhatsAppグループ'],
    zh:[/WhatsApp群/g,function(n){return n+'的WhatsApp群';},'你所在联赛的WhatsApp群'],
    uk:[/групі WhatsApp/g,function(n){return 'групі WhatsApp '+n;},'групі WhatsApp вашої ліги']
  };
  window.stLigaWA=function(lang,s){ if(!ST_LIGA_SET||s==null) return s; var w=WA[lang]; if(!w) return s;
    return String(s).replace(w[0], ST_LIGA==='alle'?w[2]:w[1](ST_LIGA_NAME[ST_LIGA])); };
  window.stLigaWAAll=function(I18N,keys){ if(!ST_LIGA_SET) return; Object.keys(I18N).forEach(function(l){ keys.forEach(function(k){ if(I18N[l][k]!=null) I18N[l][k]=stLigaWA(l,I18N[l][k]); }); }); };
})();
