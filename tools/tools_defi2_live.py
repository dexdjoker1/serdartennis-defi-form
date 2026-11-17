"""Einmaliger Patch der LIVE-Embeds für 2 Ligen (Standard heerdt = Verhalten unverändert)."""
import pathlib, sys
R = pathlib.Path('/workspace/site-review-final/repo')
def rep(s, a, b, n=1):
    c = s.count(a); assert c == n, (a[:90], c); return s.replace(a, b)
def addliga(s):
    i = s.find('<script'); return s[:i] + '<script src="liga.js?v=1"></script>' + s[i:]

# Formular
s = addliga((R/'index.html').read_text(encoding='utf8'))
s = rep(s, "var CLUB='<span translate=\"no\">Heerdter TV</span>', fee=",
           "var CLUB='<span translate=\"no\">'+ST_LIGA_CLUB[ST_LIGA]+'</span>', fee=")
s = rep(s, "x.innerHTML=T('a1',{club:CLUB}); });",
           "x.innerHTML=(ST_LIGA==='wetten'?stEsc(stLX(LANG,'a1_wet')):T('a1',{club:CLUB})); });")
s = rep(s, "if(mn) mn.innerHTML=T('a1',{club:CLUB})+' '",
           "if(mn) mn.innerHTML=(ST_LIGA==='wetten'?stEsc(stLX(LANG,'a1_wet')):T('a1',{club:CLUB}))+' '")
s = rep(s, 't&&!e("a_mg").checked&&(d("a_mg",!0)', 't&&ST_LIGA!=="wetten"&&!e("a_mg").checked&&(d("a_mg",!0)')
s = rep(s, 'mitglied:!0,datenschutz:!0', 'mitglied:ST_LIGA!=="wetten",datenschutz:!0')
s = rep(s, 's({type:"defiSubmit",kind:e,rid:o,data:t})', 't.liga=ST_LIGA,s({type:"defiSubmit",kind:e,rid:o,data:t})')
s = rep(s, '\nfunction stI18n(){', '\nstLigaWAAll(I18N,["note","wa","err_wa"]);\nfunction stI18n(){')
s = rep(s, '</body>', '<script>if(ST_LIGA==="wetten"){var m=document.getElementById("a_mg");if(m)m.closest("label").style.display="none";}</script></body>')
(R/'index.html').write_text(s, encoding='utf8')

# Rangliste
s = addliga((R/'rangliste.html').read_text(encoding='utf8'))
s = rep(s, "if(!d || d.type !== 'defiData') return;",
           "if(!d || d.type !== 'defiData') return; if(d.liga && d.liga !== ST_LIGA) return; /* nur Daten dieser Liga */")
s = rep(s, "if(d !== DEMO && !(Array.isArray(d.matches)", "if(d !== DEMO && d !== DEMO_WET && !(Array.isArray(d.matches)")
s = rep(s, "window.onmessage({data:DEMO});",
           "var DEMO_WET = JSON.parse(JSON.stringify(DEMO)); DEMO_WET.liga = 'wetten'; /* eigene Wetten-Demo (Player A–L), gleiche Optik */\n  window.onmessage({data: ST_LIGA==='wetten' ? DEMO_WET : DEMO});")
(R/'rangliste.html').write_text(s, encoding='utf8')

# Regeln
s = addliga((R/'rules.html').read_text(encoding='utf8'))
s = rep(s, "var CLUB='<span translate=\"no\">Heerdter TV</span>';",
           "stLigaWAAll(I18N,['b11']);\nvar CLUB='<span translate=\"no\">'+(ST_LIGA_CLUB[ST_LIGA]||'Heerdter TV')+'</span>';")
s = rep(s, "e.innerHTML=T(k,{club:CLUB,fee:stEsc(eurFmt(5000,0))})",
           "e.innerHTML=(k==='b1'&&ST_LIGA!=='heerdt'?stLX(LANG,ST_LIGA==='wetten'?'b1_wet':'b1_all',{club:CLUB}):T(k,{club:CLUB,fee:stEsc(eurFmt(5000,0))}))")
(R/'rules.html').write_text(s, encoding='utf8')

# Neue Playoffs-Datei im Premium-Design (bracket.html bleibt unverändert, weil die alte Seite eine feste Höhe hat)
sys.path.insert(0, str(R/'proto/defi'))
import bracket_premium
s = addliga((R/'bracket.html').read_text(encoding='utf8'))
s = s.replace('href="../../fonts/poppins.css"', 'href="fonts/poppins.css"')
s = rep(s, "document.getElementById('fin').innerHTML=T('final',{fest:'<span translate=\"no\">Hot in Heerdt</span>'});",
           "document.getElementById('fin').innerHTML='';")
s = bracket_premium.apply(s.replace("document.getElementById('fin').innerHTML='';",
      "document.getElementById('fin').innerHTML=ST_LIGA==='heerdt'?T('final',{fest:'<span translate=\"no\">Hot in Heerdt</span>'}):stEsc(stLX(LANG,ST_LIGA==='wetten'?'fin_wet':'fin_all',{date:stWetFinalDate(LOCALE)}));"), rep)
s = s.replace('href="../../fonts/poppins.css"', 'href="fonts/poppins.css"')
(R/'defi-playoffs.html').write_text(s, encoding='utf8')
print('ok')
