/* Dynamic Services - funcionalidades do site */
var WA='258860855896';
function waLink(m){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(m)}

/* Formulário de orçamento -> WhatsApp */
function quote(e){e.preventDefault();var f=e.target;
window.open(waLink('Olá, sou '+f.n.value+' ('+f.t.value+(f.e.value?', '+f.e.value:'')+'). Orçamento: '+f.s.value+'. '+f.d.value),'_blank');return false}

/* Filtro de categorias na página de produtos */
document.querySelectorAll('.chips button').forEach(function(b){b.addEventListener('click',function(){
document.querySelectorAll('.chips button').forEach(function(x){x.classList.remove('on')});b.classList.add('on');
document.querySelectorAll('.pr .card').forEach(function(c){c.style.display=(b.dataset.cat==='Todos'||c.dataset.cat===b.dataset.cat)?'':'none'})})});

/* Chatbot */
var KB=[{k:['produto','comprar','loja','venda'],a:'Temos kits CCTV, câmaras, alarmes, cercas, motores de portão e controlo de acesso. Veja em Produtos e compre pelo WhatsApp.'},{k:['servi','fazem'],a:'Fazemos CCTV, alarmes, cercas eléctricas, automação de portões, segurança bancária e manutenção.'},{k:['cctv','camara','câmara'],a:'Instalamos câmaras HD com gravação e acesso remoto. Peça uma avaliação gratuita.'},{k:['preço','preco','orçamento','orcamento','custo'],a:'O orçamento é gratuito e sem compromisso. Use o formulário de Contacto ou o WhatsApp.'},{k:['horário','horario','hora'],a:'Escritório: seg–sex, 8h–17h. Suporte de emergência 24/7.'},{k:['onde','morada','local'],a:'Estamos em Maputo, Moçambique, e visitamos o seu local para avaliar.'},{k:['telefone','email','contact','whats'],a:'WhatsApp e telefone: +258 86 085 5896. Email: info@dynamicservices.co.mz.'},{k:['olá','ola','bom dia','boa tarde','boa noite','oi'],a:'Olá! Como posso ajudar?'}];
var opts=['Produtos','Serviços','Orçamento','Horário','WhatsApp'],box=document.getElementById('msgs'),qr=document.getElementById('qr'),started=false;
function add(t,c){var d=document.createElement('div');d.className='m '+c;d.textContent=t;box.appendChild(d);box.scrollTop=box.scrollHeight}
function ask(t){add(t,'u');setTimeout(function(){reply(t)},300)}
function go(h,m){add(m,'b');toggleChat();location.href=h}
function reply(t){var s=t.toLowerCase();
if(s=='whatsapp'){add('A abrir o WhatsApp...','b');window.open('https://wa.me/'+WA,'_blank');return}
if(s=='produtos'){go('produtos.html','Vou mostrar os produtos.');return}
if(s=='serviços'){go('servicos.html','Vou mostrar os serviços.');return}
if(s=='orçamento'){go('contacto.html','Vou abrir o formulário de orçamento.');return}
for(var i=0;i<KB.length;i++)for(var j=0;j<KB[i].k.length;j++)if(s.indexOf(KB[i].k[j])>-1){add(KB[i].a,'b');return}
add('Não tenho a certeza. Fale com a nossa equipa no WhatsApp: +258 86 085 5896.','b')}
function userSend(){var i=document.getElementById('ci'),v=i.value.trim();if(v){i.value='';ask(v)}}
function toggleChat(){var c=document.getElementById('chat');c.classList.toggle('open');if(c.classList.contains('open')&&!started){started=true;add('Olá! Sou o assistente da Dynamic Services. Escolha uma opção ou escreva a sua pergunta.','b');opts.forEach(function(o){var b=document.createElement('button');b.textContent=o;b.onclick=function(){ask(o)};qr.appendChild(b)})}}
