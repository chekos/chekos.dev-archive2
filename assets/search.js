
var documents = [{
    "id": 0,
    "url": "https://chekos.dev/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://chekos.dev/about/",
    "title": "Sobre chekos.dev",
    "body": "Sobre chekos. dev¡Hola! Mi nombre es Sergio Sánchez Zavala - creador de @tacosdedatos. Aunque ya tenemos un montón de productos como el sitio web, el podcast tacosdedatos, el podcast, el podcast Quail data (y su sitio tacosdedatos. fm), el boletín, el canal de youtube y hasta “la academia” - aunque todo eso existe hay cosas que me gustaría documentar que simplemente no cuadran con la filosofía de tacosdedatos. Para eso existe este blog - . Yo tengo mi sitio personal en soyserg. io en el que publico información de lo que hago - charlas, talleres, etc. Pero para un blog blog, para eso es . Este blog esta creado con el fast_template de fast. ai. Tiene github actions para tomar tus jupyter notebooks y crear archivos markdown para publicar en GitHub Pages sin ningún problema. También esta diseñado para ser fácil de usar incluso si no sabes de Git/GitHub. Para más información visita su blog aquí. También tengo una newsletter ahora "
    }, {
    "id": 2,
    "url": "https://chekos.dev/",
    "title": "",
    "body": "Este blog - chekos. dev - existe como repositorio de ideas y experimentos mios que no caben en la filosofía de tacosdedatos. Para más todo eso existen el sitio web, el podcast tacosdedatos, el podcast, el podcast Quail data (y su sitio tacosdedatos. fm), el boletín, el canal de youtube y hasta “la academia”. Para todo lo demás - chekos. dev "
    }, {
    "id": 3,
    "url": "https://chekos.dev/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 4,
    "url": "https://chekos.dev/hip%20hop/aleman/2020/02/15/aleman-alemaniaco-alemalandro-alemaliya/",
    "title": "La historia",
    "body": "2020/02/15 - Antes de crear tacosdedatos intenté crear un blog de Hip Hop Latino-americano donde iba a analizar de una manera cuantitativa la calidad de discos y canciones. No llegó muy lejos, era en Square space y no era tan fácil escribir notas. Bueno, no tan fácil como lo es ahora que aprendí de blogs y sitios estáticos en GitHub. Aquí puedo escribir todo en mi celular y copiarlo a un archivo markdown directamente en GitHub y voilà tengo un blog. El que haya fallado elblogdehiphop no significa que mi amor por el Hip Hop haya disminuido ni siquiera un poco. Según Spotify, mis artistas más reproducidos son, en orden:  Alemán La Plebada Gera MX Remik González West GoldEsta nota es sobre el número uno: Alemán. Alemán ha sido uno de mis artistas favoritos desde la primera vez que lo escuché. En aquellos tiempos yo no sabía lo que se de Hip Hop pero muy dentro de mi sentía que Alemán era excelente en lo que hacía. No sabía que era eso todavía pero sabía que él era uno de los grandes. Hoy en día, uso la palabra flow para describir lo que diferencia Alemán de los demás. El genio de Alemán es saber que decir, cuando decirlo y como decirlo. No suena repetitivo, no suena forzado. En otra nota hablaremos más del flow de Aleman. Yo creo no soy el único que piensa esto de Alemán porque es de los pocos raperos mexicanos con más de un millón de seguidores en Spotify. El que sea popular ahora no significa que siempre lo fue. Alemán comenzó en la Mexamafia como Gera MX. Un grupo conocido por su calidad hardcore y underground. Curiosamente ambos, Alemán y Gera MX son artistas muy exitosos el día de hoy y aunque se adentren en el mundo del trap y sonidos más populares no pierden el respeto como exponentes del Hip Hop mexicano. En mi mente existen estas conexiones entre todos estos artistas. Alemán con Gera MX por la Mexamafia. Pero Alemán ahora está en la Homegrown con La Banda Bastön, Yoga Fire, Fntxy, Cozy Cuz, Mike Díaz, Dee. Dee es parte de Hood P con MOF. Mike Díaz es Neverdie con el Eptos. La Banda Bastön es Vieja Guardia. Al Gera lo relaciono con Charles Ans pero Charles es Anestesia. Charles Ans tiene rolas con Taxi Dee (el nombre que Fntxy usa cuando produce). Fntxy ahora tiene el grupo La Plebada junto a Cozy Cuz quien va Bobby Bass cuando produce. Bobby Bass comenzó a agarrar más tracción cuando comenzó a trabajar con Alemán. Todos se conectan. En mi mente, por lo menos. Quería saber si los datos respaldaban mis pensamientos. Hace unas semanas encontré esta herramienta: http://labs. polsys. net/playground/spotify/ La herramienta utiliza la API de Spotify para crear una red de artistas relacionados hasta dos niveles de separación. Es decir, cuando yo escribo Alemán en la caja de texto la herramienta va y busca todos los artistas relacionados a Alemán (nivel uno) y también busca los artistas relacionados esos artistas (nivel dos).     Note: Si te interesaría saber más de la metodología detrás de esta herramienta déjame un comentario en este post 🤓🎧Así se ve la red de Alemán La herramienta tiene la opción de descargar los datos. Uno de los atributos de esos datos son las IDs únicas que Spotify le asigna a cada artista. Con estas IDs puedes utilizar la API de Spotify para obtener más información de cada artista como su índice de popularidad, cuántos seguidores tienen, sus canciones más populares y mucho más. Justo eso fue lo que hice para crear una visualización diferente. Sabiendo que el “universo” de mis datos es artistas relacionados a Alemán hasta dos niveles de separación puedo hacer preguntas como:  ¿cómo se compara la popularidad de Alemán con la de artistas relacionados? ¿de qué géneros musicales vienen éstos artistas? ¿cuántos artistas relacionados a Alemán tienen más de un millón de seguidores?Más que todo esto, quería una manera fácil de explorar estos datos. El resultado fue este Observable Notebook: https://observablehq. com/@chekos/aleman-beeswarm-plot-using-spotify-data     Tip: Esto se ve mejor en el Notebook y en tu computadora. No lo he 'optimizado' para móvil. La visualización: Hay solo 5 artistas (+ Alemán) con más de un millón de seguidores en Spotify:  Cartel de Santa 3. 94M El Komander 1. 46M Molotov 1. 42M Panteón Rococo 1. 28M Beret 1. 15M Alemán 1. 08MMuchos son artistas de rap y hip-hop pero también hay artistas de pop, rock en español, reggea y ska. Alemán está entre los más populares de este universo lo cual me estoy tomando la libertad de etiquetar como positivo. De alguna manera, este artista underground que llegó a esta altura le está abriendo la puerta a todos estos demás artistas con menos popularidad. Mínimo, Spotify los identifica como artistas relacionados y tal vez aparezcan en una de esas listas de reproducción automatizadas juntos 🤷🏻‍♂️ "
    }, {
    "id": 5,
    "url": "https://chekos.dev/2020/02/11/ejemplo-de-jupyter-y-altair/",
    "title": "Ejemplo de Notebook con Altair",
    "body": "2020/02/11 -           put a #hide flag at the top of any cell you want to completely hide in the docs Interactive Charts With Altair&#182;: Charts made with Altair remain interactive.  Example charts taken from this repo, specifically this notebook. Example 1: DropDown&#182;:       # single-value selection over [Major_Genre, MPAA_Rating] pairs# use specific hard-wired values as the initial selected valuesselection = alt. selection_single(  name=&#39;Select&#39;,  fields=[&#39;Major_Genre&#39;, &#39;MPAA_Rating&#39;],  init={&#39;Major_Genre&#39;: &#39;Drama&#39;, &#39;MPAA_Rating&#39;: &#39;R&#39;},  bind={&#39;Major_Genre&#39;: alt. binding_select(options=genres), &#39;MPAA_Rating&#39;: alt. binding_radio(options=mpaa)}) # scatter plot, modify opacity based on selectionalt. Chart(movies). mark_circle(). add_selection(  selection). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=&#39;IMDB_Rating:Q&#39;,  tooltip=&#39;Title:N&#39;,  opacity=alt. condition(selection, alt. value(0. 75), alt. value(0. 05)))    Example 2: Use One Visualization To Filter Another&#182;:       brush = alt. selection_interval(  encodings=[&#39;x&#39;] # limit selection to x-axis (year) values)# dynamic query histogramyears = alt. Chart(movies). mark_bar(). add_selection(  brush). encode(  alt. X(&#39;year(Release_Date):T&#39;, title=&#39;Films by Release Year&#39;),  alt. Y(&#39;count():Q&#39;, title=None)). properties(  width=650,  height=50)# scatter plot, modify opacity based on selectionratings = alt. Chart(movies). mark_circle(). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=&#39;IMDB_Rating:Q&#39;,  tooltip=&#39;Title:N&#39;,  opacity=alt. condition(brush, alt. value(0. 75), alt. value(0. 05))). properties(  width=650,  height=400)alt. vconcat(years, ratings). properties(spacing=5)    Example 3: Tooltips&#182;:       alt. Chart(movies). mark_circle(). add_selection(  alt. selection_interval(bind=&#39;scales&#39;, encodings=[&#39;x&#39;])). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=alt. Y(&#39;IMDB_Rating:Q&#39;, axis=alt. Axis(minExtent=30)), # use min extent to stabilize axis title placement  tooltip=[&#39;Title:N&#39;, &#39;Release_Date:N&#39;, &#39;IMDB_Rating:Q&#39;, &#39;Rotten_Tomatoes_Rating:Q&#39;]). properties(  width=600,  height=400)    Example 4: More Tooltips&#182;:       # select a point for which to provide details-on-demandlabel = alt. selection_single(  encodings=[&#39;x&#39;], # limit selection to x-axis value  on=&#39;mouseover&#39;, # select on mouseover events  nearest=True,  # select data point nearest the cursor  empty=&#39;none&#39;   # empty selection includes no data points)# define our base line chart of stock pricesbase = alt. Chart(). mark_line(). encode(  alt. X(&#39;date:T&#39;),  alt. Y(&#39;price:Q&#39;, scale=alt. Scale(type=&#39;log&#39;)),  alt. Color(&#39;symbol:N&#39;))alt. layer(  base, # base line chart    # add a rule mark to serve as a guide line  alt. Chart(). mark_rule(color=&#39;#aaa&#39;). encode(    x=&#39;date:T&#39;  ). transform_filter(label),    # add circle marks for selected time points, hide unselected points  base. mark_circle(). encode(    opacity=alt. condition(label, alt. value(1), alt. value(0))  ). add_selection(label),  # add white stroked text to provide a legible background for labels  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5, stroke=&#39;white&#39;, strokeWidth=2). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),  # add text labels for stock prices  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),    data=stocks). properties(  width=700,  height=400)    Other Elements&#182;: Tweetcards&#182;: Typing &gt; twitter: https://twitter. com/jakevdp/status/1204765621767901185?s=20 will render this:Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019 Youtube Videos&#182;: Typing &gt; youtube: https://youtu. be/XfoYk_Z5AkI will render this: Boxes / Callouts&#182;: Typing &gt; Warning: There will be no second warning! will render this:    Warning: There will be no second warning! Typing &gt; Important: Pay attention! It's important. will render this:    Important: Pay attention! It&#8217;s important. Typing &gt; Tip: This is my tip. will render this:    Tip: This is my tip. Typing &gt; Note: Take note of this. will render this:    Note: Take note of this. Typing &gt; Note: A doc link to [an example website: fast. ai](https://www. fast. ai/) should also work fine. will render in the docs:    Note: A doc link to an example website: fast. ai should also work fine. "
    }, {
    "id": 6,
    "url": "https://chekos.dev/2020/02/10/las-nieves-de-enero/",
    "title": "Ya se fueron las nieves de enero",
    "body": "2020/02/10 -  Cuando todo va mal es cuando más me motivo / Respiro mejor en éste ambiente nocivo / Esto para el rap es lo más nutritivo / Es todo lo que soy por eso escribo.    Nocivos, Faruz Feet &amp; Proof ¿Por qué haría otro blog?: Si me sigues en las redes sociales tal vez conozcas de la comunidad tacosdedatos que comencé a inicios del 2019. La idea de tacosdedatos es crear contenido en español. Contenido sobre el análisis y la visualización de datos. Contenido sobre mejores prácticas. Contenido sobre técnicas y tendencias en el mundo de la tecnología que parecen quedarse en el mundo angloparlante por mucho tiempo antes de llegar al mundo hispanohablante. tacosdedatos ha crecido mucho en este último año. Tenemos más de 3,400 seguidores en Twitter, miles de visitas al sitio web y lo más importante: muchas personas participando en la conversación del análisis / visualización de datos en español. Cada semana recibo por lo menos un mensaje directo en twitter o un correo con dudas de cómo comenzar en Python o R o como resolver X problema con su código o como crear X visualización. Tal vez a muchas personas no les impresione hablar con un extraño pidiendo ayuda pero eso es lo que me llena de ganas de seguir haciendo lo que hago. Entonces, si a tacosdedatos le va tan bien, ¿por qué crear otro blog?La verdad es que aunque existen ya muchos “productos” - el boletín, el canal de Youtube, la academia, los dos podcast, el sitio web - todavía existen muchas cosas de las que me gustaría escribir y simplemente no “caben” en la filosofía de tacosdedatos. Por ejemplo, yo antes de crear tacosdedatos había creado elblogdehiphop dónde hacía análisis (si eso le podemos llamar a lo que hacía jaja) y visualizaciones de datos sobre el Hip Hop latino-americano. Si siguen a Noisey en Español tal vez habrán visto esta nota dónde “aporte” una humilde opinión de las mejores canciones de 2017: Las mejores canciones del rap mexicano en 2017. Este tipo de proyectos no son didácticos por naturaleza; algo que me gustaría mantener en todo relacionado a tacosdedatos. La segunda razón es que si yo escribiera todas estas ideas en tacosdedatos. com saturaría el sitio y la idea es crear una comunidad. Quiero que más personas escriban para tacosdedatos no que sea mi blog personal - es un foro. Y la tercera razón es que yo promuevo mucho el que todxs tengamos un sitio/blog personal para mostrar el trabajo que hacemos. Ya seas una diseñadora, una programadora, una analista - todxs necesitamos un “portafolio” que podamos presentar lo que hacemos de una manera práctica y accesible. Este blog servirá como ejemplo. Como lo hice: La razón principal por la que decidí utilizar este método de publicación es la facilidad. Fast. ai creo un repositorio de GitHub que sirve como plantilla. Se encuentra aquí. Puedes crear un repositorio apartir de el suyo que ya está listo para ser publicado en GitHub Pages de manera gratuita y fácil. Lo único que necesitas es una cuenta de GitHub y crear un repositorio llamado &lt;USUARIO&gt;. github. io dónde USUARIO es tu nombre de usuario utilizando este enlace: https://GitHub. com/fastai/fast_template/generate/. Es decir, si creas una cuenta de GitHub con el usuario “papichulo” solo tienes que hacer clic en ese enlace y crear papichulo. github. io y ya. GitHub sabe que cuando creas un repositorio siguiendo esas convenciones es porque quieres usar GitHub Pages y el repositorio base incluye todos los archivos necesarios para configurar tu blog y publicarlo sin ningún problema. Esto es esencial porque como les mencioné yo ya tengo muchos proyectos que debo mantener. Uno más, por más importante que sea, sería costaría mucho trabajo mantener. Usando este método me tardé 3 minutos en crear este blog y para agregar contenido solo toma agregar archivos . md a la carpeta _posts/. De hecho, este post lo escribí en mi teléfono en camino a casa. Esa es la facilidad que necesito para tener otro blog. Esa es la facilidad que tú tienes si decides comenzar uno también. tonx que de que o qué: ¿Sobre qué voy a escribir en este blog? Honestamente, no lo sé. Probablemente será un lugar para presumir alguna visualización que haya hecho, o un análisis de mis versos de rap mexicano favoritos (¿haz escuchado Verbal Big Bang del Anexo Leiruk? ¿Suelo soñar, correr y tropezar de Gera MX? ¿Unorthodox (DJ kingklan remix) de Eptos y Buffon?) o tal vez sobre tendencias en el mundo de la tecnología o cosas que me enojen del mundo (como lo que está sucediendo con el libro American Dirt en estados unidos). Lo más probable es que haga pequeños blogs sobre cómo logré hacer algo en Python o R o d3. Micro tutoriales. Necesitamos más de eso en español. Existe stack overflow y existen blogs en inglés pero para los que apenas vamos comenzando en ciertas cosas el tener que aprender algo nuevo y aprenderlo en inglés es un reto más imponente de lo que debería ser. En el anuncio de fast_template comparten la liga a un blog que la cofundadora de fast. ai escribió sobre bloguear. En él menciona, entre otras cosas, que la mejor persona para enseñarle a alguien que está un paso detrás cómo hacer algo eres tú. Es decir, si acabas de aprender cómo funcionan las geoms en ggplot2 o como aplicar las etiquetas de los datos a un dataframe de pandas - tú eres la mejor persona para enseñarle cómo hacerlo a alguien que está justo queriendo aprender a hacer eso. Por eso, no importa tu nivel de experiencia, tú deberías tener un blog. Te recomiendo fast_template cómo lo estoy haciendo yo aquí pero también existe Medium. com y hasta tacosdedatos. com. Lo importante es comenzar. conclusiones: Todxs tenemos algo que decir. Tal vez pienses que como principiante no hay razón por qué tener un blog - yo opino lo contrario. Necesitamos más contenido nivel principiante e intermedio en español. Tal vez pienses que nadie lo va a leer. Te prometo que más personas de las que crees están esperando lo que vas a escribir. Tal vez pienses es muy difícil. Si usas la plantilla fast_template estás a unos cuantos clics de tener tu blog - no necesitas saber Git no GitHub ni HTML ni javascript ni nada. Comienza tu blog. Si necesitas ayuda mándame un mensaje por twitter, Instagram, Facebook o hasta un correo 📨. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}