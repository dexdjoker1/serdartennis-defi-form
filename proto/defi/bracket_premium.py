"""Premium-Design für die Vorschau-Kopie bracket.html (Inhalt/Texte unverändert, nur Darstellung)."""
import re
CSS = r'''<link rel="stylesheet" href="../../fonts/poppins.css"><style>
:root{--ol:#5E6D55;--old:#3F4A39;--old2:#2E3729;--gold:#C9A45C;--gold2:#E6CC8F;--cream:#F3E8D8;--sand:#D9CDB8;--ink:#1A1A1A}
html,body{font-family:Poppins,'Nunito Sans',Arial,sans-serif}
.pb{max-width:900px;margin:0 auto;padding:4px 6px 10px;box-sizing:border-box}
.rounds{display:grid;grid-template-columns:1fr 1fr;column-gap:56px}
.rd h4{display:flex;align-items:center;gap:10px;margin:0 0 14px;color:var(--old);font:600 12px/1.3 Poppins,sans-serif;letter-spacing:.16em;text-transform:uppercase}
.rd h4:before{content:"";width:22px;height:2px;background:var(--gold);border-radius:2px;flex:0 0 auto}
.col{display:flex;flex-direction:column;justify-content:space-around;height:100%}
.pair{position:relative;display:flex;flex-direction:column;gap:12px;margin-bottom:18px}
.pair:last-child{margin-bottom:0}
.rd2 .col{gap:0}
.mc{position:relative;background:linear-gradient(180deg,#fff 0%,#FBF6EE 100%);border:1px solid rgba(94,109,85,.18);border-radius:14px;padding:12px 14px;box-shadow:0 6px 18px rgba(46,55,41,.08),0 1px 2px rgba(46,55,41,.06);display:flex;align-items:center;gap:14px;box-sizing:border-box;min-height:66px}
.mc:before{content:"";position:absolute;left:0;top:12px;bottom:12px;width:3px;border-radius:0 3px 3px 0;background:linear-gradient(180deg,var(--gold2),var(--gold))}
.seeds{display:flex;align-items:center;gap:6px;flex:0 0 auto}
.sd{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;font:600 13px/1 Poppins,sans-serif;color:#fff;background:linear-gradient(145deg,#6E7E64,var(--old));box-shadow:inset 0 0 0 2px rgba(230,204,143,.55)}
.sd.hi{background:linear-gradient(145deg,var(--gold2),var(--gold));color:var(--old2);box-shadow:inset 0 0 0 2px rgba(255,255,255,.5)}
.dm{width:7px;height:7px;background:var(--gold);transform:rotate(45deg);border-radius:1px}
.mc h3{margin:0;color:var(--ink);font:500 14.5px/1.35 Poppins,sans-serif}
.mc .no{flex:0 0 auto;width:30px;height:30px;border-radius:9px;display:grid;place-items:center;background:var(--cream);color:var(--old);font:600 13px Poppins,sans-serif;border:1px solid rgba(201,164,92,.6)}
/* Verbindungslinien Desktop */
.rd1 .pair:after{content:"";position:absolute;right:-28px;top:33px;bottom:33px;width:28px;border:2px solid rgba(94,109,85,.35);border-left:0;border-radius:0 12px 12px 0}
.rd1 .pair:before{content:"";position:absolute;right:-56px;top:50%;width:28px;height:2px;background:rgba(94,109,85,.35)}
.rd2 .col{justify-content:space-around}
.down{display:flex;justify-content:center;margin:18px 0 6px}
.down span{width:2px;height:26px;background:linear-gradient(180deg,rgba(94,109,85,.35),var(--gold))}
/* Finale */
.fin{position:relative;overflow:hidden;border-radius:20px;padding:26px 26px 22px;color:#fff;background:radial-gradient(120% 140% at 50% 0%,#55634B 0%,var(--old) 45%,var(--old2) 100%);box-shadow:0 18px 40px rgba(46,55,41,.28),inset 0 0 0 1px rgba(230,204,143,.45)}
.fin:before{content:"";position:absolute;inset:8px;border:1px solid rgba(230,204,143,.35);border-radius:14px;pointer-events:none}
.fin:after{content:"";position:absolute;top:-60%;left:-20%;width:60%;height:220%;background:linear-gradient(100deg,transparent 0%,rgba(255,255,255,.06) 50%,transparent 100%);transform:rotate(8deg);pointer-events:none}
.fhead{display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px;margin-bottom:18px}
.fhead svg{width:58px;height:58px;filter:drop-shadow(0 4px 10px rgba(0,0,0,.25))}
.fk{font:700 26px/1.1 Poppins,sans-serif;letter-spacing:.22em;text-transform:uppercase;background:linear-gradient(180deg,#F3DFA8,var(--gold));-webkit-background-clip:text;background-clip:text;color:transparent}
.orn{display:flex;align-items:center;gap:10px;color:var(--gold2)}
.orn i{display:block;width:44px;height:1px;background:linear-gradient(90deg,transparent,var(--gold2))}
.orn i+b+i{background:linear-gradient(90deg,var(--gold2),transparent)}
.orn b{width:6px;height:6px;background:var(--gold2);transform:rotate(45deg)}
.fcols{display:grid;grid-template-columns:repeat(var(--n,2),1fr);gap:14px;position:relative;z-index:1}
.fc{background:rgba(255,255,255,.07);border:1px solid rgba(230,204,143,.4);border-radius:14px;padding:14px 16px;text-align:center}
.fc .cl{font:600 11.5px Poppins,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:var(--gold2);margin-bottom:6px}
.fc .ev{font:600 17px/1.35 Poppins,sans-serif;color:#fff}
.fc .pv{display:inline-block;margin-top:8px;font:500 11.5px/1.3 Poppins,sans-serif;color:var(--old2);background:var(--gold2);border-radius:20px;padding:4px 10px}
.prize{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;gap:10px;margin-top:16px;font:500 14px Poppins,sans-serif;color:var(--gold2)}
.prize svg{width:22px;height:22px}
@media(max-width:620px){
 .rounds{grid-template-columns:1fr;row-gap:30px}
 .rd2 .col{justify-content:flex-start;gap:10px}
 .rd1 .pair:after,.rd1 .pair:before{display:none}
 .pair{gap:10px;margin-bottom:10px}
 .mc{padding:11px 12px;gap:12px;min-height:60px}
 .mc h3{font-size:14px}
 .fin{padding:22px 16px 18px;border-radius:18px}
 .fk{font-size:22px}
 .fcols{grid-template-columns:1fr}
 .fc .ev{font-size:16px}
}
</style></head>'''
TROPHY = '''<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6E3AE"/><stop offset=".55" stop-color="#D7B46A"/><stop offset="1" stop-color="#A9853D"/></linearGradient></defs>
<path d="M18 8h28v12c0 9-6 16-14 16S18 29 18 20z" fill="url(#g)"/><path d="M18 12H9v4c0 7 5 12 11 12" fill="none" stroke="url(#g)" stroke-width="3.5" stroke-linecap="round"/><path d="M46 12h9v4c0 7-5 12-11 12" fill="none" stroke="url(#g)" stroke-width="3.5" stroke-linecap="round"/>
<path d="M28 36h8v8h-8z" fill="url(#g)"/><path d="M21 44h22l2 6H19z" fill="url(#g)"/><rect x="16" y="50" width="32" height="6" rx="2" fill="url(#g)"/><path d="M32 14l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4-3.9-3.8 5.4-.8z" fill="#fff" opacity=".85"/></svg>'''
MEDAL = '''<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2h3l1 5-2.5 2zM16 2h-3l-1 5 2.5 2z" fill="#C9A45C"/><circle cx="12" cy="15" r="6" fill="#E6CC8F"/><circle cx="12" cy="15" r="3.6" fill="none" stroke="#3F4A39" stroke-width="1.2"/></svg>'''
def qf(a,b): return f'<div class="mc"><div class="seeds"><span class="sd hi">{a}</span><span class="dm"></span><span class="sd">{b}</span></div><h3 data-r="{a},{b}"></h3></div>'
def sf(n,w): return f'<div class="mc"><span class="no">{n}</span><h3 data-w="{w}"></h3></div>'
BODY = ('<body><div id="top"></div><div class="pb"><div class="rounds">'
 '<div class="rd rd1"><h4 id="hQF"></h4><div class="col"><div class="pair">'+qf(1,8)+qf(4,5)+'</div><div class="pair">'+qf(2,7)+qf(3,6)+'</div></div></div>'
 '<div class="rd rd2"><h4 id="hSF"></h4><div class="col">'+sf(1,"1,2")+sf(2,"3,4")+'</div></div>'
 '</div><div class="down"><span></span></div>'
 '<div class="fin"><div class="fhead">'+TROPHY+'<div class="fk" data-k="f"></div><div class="orn"><i></i><b></b><i></i></div></div>'
 '<div class="fcols" id="fcols"></div><div class="prize">'+MEDAL+'<span data-k="prize"></span></div></div></div>')
OLD_FIN = "document.getElementById('fin').innerHTML=ST_LIGA==='heerdt'?T('final',{fest:'<span translate=\"no\">Hot in Heerdt</span>'}):stEsc(stLX(LANG,ST_LIGA==='wetten'?'fin_wet':'fin_all',{date:stWetFinalDate(LOCALE)}));"
NEW_FIN = ("(function(){var H='<div class=\"fc\"><div class=\"cl\" translate=\"no\" lang=\"de\">Heerdter TV</div><div class=\"ev\">'+stLX(LANG,'at_h',{fest:'<span translate=\"no\">Hot in Heerdt</span>'})+'</div></div>',"
  "W='<div class=\"fc\"><div class=\"cl\" translate=\"no\" lang=\"de\">SV Union Wetten</div><div class=\"ev\">'+stEsc(stWetFinalDate(LOCALE))+'</div><span class=\"pv\">'+stEsc(stLX(LANG,'prov'))+'</span></div>',"
  "c=document.getElementById('fcols');c.innerHTML=ST_LIGA==='heerdt'?H:ST_LIGA==='wetten'?W:H+W;c.style.setProperty('--n',ST_LIGA==='alle'?2:1);})();")
def apply(s, rep):
    s = rep(s, '</style></head>', '</style>' + CSS)
    i = s.index('<body>'); j = s.index('<script', i)
    s = s[:i] + BODY + s[j:]
    s = rep(s, OLD_FIN, NEW_FIN)
    return s
