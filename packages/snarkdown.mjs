var e={"":["<em>","</em>"],_:["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function n(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function r(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}export default function t(a,c){var l,o,g,s,p,u=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\!\[([^\]]*?)\]\(([^\)]+?)\))|(\[)|(\](?:\(([^\)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,m=[],i="",h=c||{},f=0;function $(n){var r=e[n.replace(/\*/g,"_")[1]||""],t=m[m.length-1]==n;return r?r[1]?(m[t?"pop":"push"](n),r[0|t]):r[0]:n}function d(){for(var e="";m.length;)e+=$(m[m.length-1]);return e}for(a=a.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(e,n,r){return h[n.toLowerCase()]=r,""}).replace(/^\n+|\n+$/g,"");g=u.exec(a);)o=a.substring(f,g.index),f=u.lastIndex,l=g[0],o.match(/[^\\](\\\\)*\\$/)||(g[3]||g[4]?l='<pre class="code '+(g[4]?"poetry":g[2].toLowerCase())+'">'+n(r(g[3]||g[4]).replace(/^\n+|\n+$/g,""))+"</pre>":g[6]?((p=g[6]).match(/\./)&&(g[5]=g[5].replace(/^\d+/gm,"")),s=t(n(g[5].replace(/^\s*[>*+.-]/gm,""))),">"===p?p="blockquote":(p=p.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),l="<"+p+">"+s+"</"+p+">"):g[8]?l='<img src="'+r(g[8])+'" alt="'+r(g[7])+'">':g[10]?(i=i.replace("<a>",'<a href="'+r(g[11]||h[o.toLowerCase()])+'">'),l=d()+"</a>"):g[9]?l="<a>":g[12]||g[14]?l="<"+(p="h"+(g[14]?g[14].length:"="===g[13][0]?1:2))+">"+t(g[12]||g[15],h)+"</"+p+">":g[16]?l="<code>"+r(g[16])+"</code>":(g[17]||g[1])&&(l=$(g[17]||"--"))),i+=o,i+=l;return(i+a.substring(f)+d()).trim()}