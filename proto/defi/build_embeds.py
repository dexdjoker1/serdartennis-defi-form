"""Erzeugt die Vorschau-Kopien der Defi-Embeds aus den LIVE-Dateien (die Live-Dateien bleiben unverändert)."""
import re, pathlib
R = pathlib.Path(__file__).resolve().parents[2]
OUT = pathlib.Path(__file__).resolve().parent
def rep(s, a, b, n=1):
    c = s.count(a)
    assert c == n, (a[:80], c)
    return s.replace(a, b)
def common(s):
    s = re.sub(r'href="fonts/', 'href="../../fonts/', s)
    # liga.js vor dem ersten Script laden
    i = s.find('<script')
    return s[:i] + '<script src="liga.js"></script>' + s[i:]

# 1) Formular (Anmeldung + Ergebnis melden)
s = common((R/'index.html').read_text(encoding='utf8'))
s = rep(s, "var CLUB='<span translate=\"no\">Heerdter TV</span>', fee=",
           "var CLUB='<span translate=\"no\">'+ST_LIGA_CLUB[ST_LIGA]+'</span>', fee=")
s = rep(s, "x.innerHTML=T('a1',{club:CLUB}); });",
           "x.innerHTML=(ST_LIGA==='wetten'?stEsc(stLX(LANG,'a1_wet')):T('a1',{club:CLUB})); });")
s = rep(s, "if(mn) mn.innerHTML=T('a1',{club:CLUB})+' '",
           "if(mn) mn.innerHTML=(ST_LIGA==='wetten'?stEsc(stLX(LANG,'a1_wet')):T('a1',{club:CLUB}))+' '")
# Mitglieds-Checkbox nur in Heerdt
s = rep(s, 't&&!e("a_mg").checked&&(d("a_mg",!0)', 't&&ST_LIGA!=="wetten"&&!e("a_mg").checked&&(d("a_mg",!0)')
s = rep(s, 'mitglied:!0,datenschutz:!0', 'mitglied:ST_LIGA!=="wetten",datenschutz:!0')
# Senden: liga mitschicken; in der Vorschau NICHT an Wix senden
s = rep(s, 's({type:"defiSubmit",kind:e,rid:o,data:t})',
           't.liga=ST_LIGA,ST_PREVIEW?(s({type:"defiPreviewSubmit",kind:e,liga:ST_LIGA}),setTimeout(function(){window.postMessage({type:"defiSubmitResult",rid:o,ok:!1,preview:!0},"*")},300)):s({type:"defiSubmit",kind:e,rid:o,data:t})')
s = rep(s, ':i.msgEl.textContent=T("err_fail")}}',
           ':i.msgEl.textContent=t.preview?stLX(LANG,"prev",{liga:ST_LIGA_CLUB[ST_LIGA]}):T("err_fail")}}')
s = rep(s, '</head>', '<style>.msg{white-space:normal!important;overflow:visible!important;height:auto!important;text-overflow:clip!important}</style></head>')
s = rep(s, '</body>', '<script>if(ST_LIGA==="wetten"){var m=document.getElementById("a_mg");if(m)m.closest("label").style.display="none";}'
        '</script></body>')
(OUT/'form.html').write_text(s, encoding='utf8')

# 2) Rangliste + Spiele
s = common((R/'rangliste.html').read_text(encoding='utf8'))
s = rep(s, "if(!d || d.type !== 'defiData') return;",
           "if(!d || d.type !== 'defiData') return; if(d !== DEMO && d.liga !== ST_LIGA) return; /* nur Daten dieser Liga */")
s = rep(s, "window.onmessage({data:DEMO});",
           "if(ST_LIGA==='heerdt') window.onmessage({data:DEMO}); else render(); /* Wetten: noch leer */")
(OUT/'rangliste.html').write_text(s, encoding='utf8')

# 3) Regeln (Hauptseite: liga=alle)
s = common((R/'rules.html').read_text(encoding='utf8'))
s = rep(s, "var CLUB='<span translate=\"no\">Heerdter TV</span>';",
           "var CLUB='<span translate=\"no\">'+(ST_LIGA_CLUB[ST_LIGA]||'Heerdter TV')+'</span>';")
s = rep(s, "e.innerHTML=T(k,{club:CLUB,fee:stEsc(eurFmt(5000,0))})",
           "e.innerHTML=(k==='b1'&&ST_LIGA!=='heerdt'?stLX(LANG,ST_LIGA==='wetten'?'b1_wet':'b1_all',{club:CLUB}):T(k,{club:CLUB,fee:stEsc(eurFmt(5000,0))}))")
(OUT/'rules.html').write_text(s, encoding='utf8')

# 4) Ablauf (gemeinsam, unverändert bis auf Pfade)
(OUT/'ablauf.html').write_text(common((R/'defi-ablauf.html').read_text(encoding='utf8')), encoding='utf8')

# 5) Playoffs (Finale je Liga)
s = common((R/'bracket.html').read_text(encoding='utf8'))
s = rep(s, "document.getElementById('fin').innerHTML=T('final',{fest:'<span translate=\"no\">Hot in Heerdt</span>'});",
           "document.getElementById('fin').innerHTML=ST_LIGA==='heerdt'?T('final',{fest:'<span translate=\"no\">Hot in Heerdt</span>'}):stEsc(stLX(LANG,ST_LIGA==='wetten'?'fin_wet':'fin_all',{date:stWetFinalDate(LOCALE)}));")
(OUT/'bracket.html').write_text(s, encoding='utf8')
print('ok')
