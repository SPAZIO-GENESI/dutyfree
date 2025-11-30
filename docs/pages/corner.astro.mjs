import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as renderComponent, b as addAttribute, d as renderHead, e as renderScript } from '../chunks/astro/server_BbvBewNp.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$BookModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="modal fade" id="bookModal" tabindex="-1" aria-labelledby="bookModalLabel" aria-hidden="true"> <div class="modal-dialog modal-lg modal-dialog-scrollable"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="bookModalLabel">Dettagli libro</h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi"></button> </div> <div class="modal-body" id="bookModalBody"> <!-- Contenuto dinamico --> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button> </div> </div> </div> </div>`;
}, "C:/Users/masca/OneDrive/Documenti/HDEMIA/spazio_genesi/sito_dutyfree_github/src/components/BookModal.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Corner = createComponent(async ($$result, $$props, $$slots) => {
  const apiUrl = "https://cfg_googledata.it-e3f.workers.dev/?sheet=1pk8YVvDVipo2iHBgV0WtUQaChNXTCKRhq6EcxUBzlN0&f=GFD4R8";
  let metaTitle = "Catalogo libri";
  let metaDesc = "Catalogo libri disponibili";
  let headers = [];
  let rows = [];
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    headers = data.values?.[0] ?? [];
    rows = (data.values ?? []).slice(1);
    if (rows.length > 0 && headers.length > 0) {
      const titoloIdx = headers.indexOf("titolo");
      const autoreIdx = headers.indexOf("autore");
      const abstractIdx = headers.indexOf("abstract");
      const titolo = titoloIdx >= 0 ? rows[0][titoloIdx] : void 0;
      const autore = autoreIdx >= 0 ? rows[0][autoreIdx] : void 0;
      const abstract = abstractIdx >= 0 ? rows[0][abstractIdx] : void 0;
      metaTitle = titolo && autore ? `Catalogo: ${titolo} di ${autore}` : metaTitle;
      metaDesc = abstract || metaDesc;
    }
  } catch (err) {
    console.error("Errore fetch:", err);
  }
  return renderTemplate(_a || (_a = __template([`<html lang="it" class="h-100" data-astro-cid-sigb2u7h> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="revisit-after" content="1"><meta http-equiv="Content-Security-Policy" content="
            default-src 'self';
            script-src 'self' 'unsafe-inline' 
            https://code.jquery.com
            https://cdn.jsdelivr.net
            https://cdn-cookieyes.com
            https://*.cookieyes.com
            https://*.shareaholic.com
            https://*.shareaholic.net
            https://*.openshareweb.com
            https://matomodocker.azurewebsites.net 
            https://*.tawk.to
            https://*.google.com
            https://*.viglink.com
            https://*.sovrn.com
            https://*.sovrn.co;
            script-src-elem 'self' 'unsafe-inline'
            https://code.jquery.com
            https://cdn.jsdelivr.net
            https://cdn-cookieyes.com
            https://*.cookieyes.com
            https://*.shareaholic.com
            https://*.shareaholic.net
            https://*.openshareweb.com
            https://matomodocker.azurewebsites.net 
            https://*.tawk.to
            https://*.google.com
            https://*.viglink.com
            https://*.sovrn.com
            https://*.sovrn.co;
            connect-src 'self' 
            https://matomodocker.azurewebsites.net 
            https://*.tawk.to
            https://*.cookieyes.com
            https://cdn-cookieyes.com
            https://cdn.jsdelivr.net 
            https://*.shareaholic.com
            https://*.shareaholic.net
            https://*.cloudfront.net
            https://*.viglink.com
            https://*.sovrn.com
            https://ep1.adtrafficquality.google
            https://*.google.com
            wss://*.tawk.to;
            img-src 'self' data: https: blob:;
            style-src 'self' 'unsafe-inline' 
            https://fonts.googleapis.com 
            https://cdn.jsdelivr.net
            https://*.tawk.to
            https://*.google.com;
            font-src 'self' 
            https://fonts.gstatic.com
            https://*.tawk.to
            data:;
            frame-src https://*.tawk.to https://*.google.com;
            object-src 'none';
            base-uri 'self';
        "><meta name="author" content="Tangram.page"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"><link href="/cover.css" rel="stylesheet"><!-- HTML Meta Tags --><title>`, '</title><meta name="description"', `><!-- Open Graph Meta Tags --><meta property="og:url" content="http://dutyfree.spaziogenesi.org"><meta property="og:type" content="website"><meta property="og:title" content="DUTY FREE - Edicola autoproduzioni autogestita"><meta property="og:description" content="A cura di studenti e studentesse Accademia di Belle Arti ABAQ L'Aquila"><meta property="og:image"`, `><meta property="og:image:width" content="789"><meta property="og:image:height" content="579"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="dutyfree.spaziogenesi.org"><meta property="twitter:url" content="http://dutyfree.spaziogenesi.org"><meta name="twitter:title" content="DUTY FREE - Edicola autoproduzioni autogestita"><meta name="twitter:description" content="A cura di studenti e studentesse Accademia di Belle Arti ABAQ L'Aquila"><meta name="twitter:image"`, `><!-- Meta Tags Generated via https://opengraph.dev --><link rel="shortcut icon" href="./img/favicon.ico?v=4" sizes="any"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="msapplication-starturl" content="/"><link href="/img/icon-76x76.png" rel="apple-touch-icon" sizes="76x76"><link href="/img/icon-120x120.png" rel="apple-touch-icon" sizes="120x120"><link href="/img/icon-152x152.png" rel="apple-touch-icon" sizes="152x152"><link rel="manifest" href="/img/manifest.json"><link rel="preload" as="image" href="/img/dutyfree.webp" fetchpriority="high"><!-- SERVICE WORKER GITHUB PER CACHE 
        <script>
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
              .then(registration => console.log('SW registrato con successo:', registration))
              .catch(error => console.log('Registrazione SW fallita:', error));
          });
        }
        <\/script>
         END SERVICE WORKER GITHUB PER CACHE --><!-- Matomo -->`, "<!-- End Matomo Code -->", '</head> <body data-astro-cid-sigb2u7h> <div class="cover-container d-flex  p-3 mx-auto flex-column" data-astro-cid-sigb2u7h> <header class="masthead mb-auto" data-astro-cid-sigb2u7h> <div class="inner" data-astro-cid-sigb2u7h> <a href="https://spaziogenesi.org/" data-astro-cid-sigb2u7h><h1 class="masthead-brand" data-astro-cid-sigb2u7h>Spazio Genesi</h1></a> <nav class="nav nav-masthead justify-content-center" data-astro-cid-sigb2u7h> <a class="nav-link active" href="/corner" data-astro-cid-sigb2u7h>Home</a> <a class="nav-link" href="https://spaziogenesi.org/chisiamo.html" data-astro-cid-sigb2u7h>Chi siamo</a> <a class="nav-link" href="https://spaziogenesi.org/biografie/" data-astro-cid-sigb2u7h>Biografie</a> <a class="nav-link" href="https://spaziogenesi.org/archivio/" data-astro-cid-sigb2u7h>Archivio</a> </nav> </div> </header> <main role="main" class="inner cover" data-astro-cid-sigb2u7h> <p data-astro-cid-sigb2u7h></p> <p data-astro-cid-sigb2u7h></p> <table id="sheetTable" class="table table-striped table-bordered" data-astro-cid-sigb2u7h> <thead data-astro-cid-sigb2u7h> <tr data-astro-cid-sigb2u7h> ', " </tr> </thead> <tbody data-astro-cid-sigb2u7h> ", " </tbody> </table> </main></div> <p data-astro-cid-sigb2u7h></p> <p data-astro-cid-sigb2u7h></p> ", ` <!-- Bootstrap JS --> <script src="/libs/bootstrap.bundle.min.js" defer><\/script> <!-- Simple-DataTables ESM --> <script type="module">
    import { DataTable } from '/libs/simple-datatables.mjs';

    const table = document.querySelector("#sheetTable");
    new DataTable(table, {
        perPage: 10,
        perPageSelect: [10,25,50,100],
        sortable: true,
        searchable: true,
        layout: {
        topStart: "search",
        topEnd: "perPage",
        bottomStart: "info",
        bottomEnd: "pagination"
        }
    });

    // Funzione per mostrare il modal con i dati del libro
    window.showBookModal = function(img) {
        const row = img.closest("tr");
        const data = {};
        row.querySelectorAll("td").forEach(td => {
        data[td.dataset.col] = td.innerText || td.querySelector("img")?.src;
        });

        // Costruisci HTML per il modal
        const modalBody = document.querySelector("#bookModalBody");
        modalBody.innerHTML = \`
        <div class="row">
            <div class="col-md-4"><img src="\${data.copertina}" alt="copertina" class="img-fluid"/></div>
            <div class="col-md-8">
            <h5>\${data.titolo}</h5>
            <p><strong>Autore:</strong> \${data.autore}</p>
            <p><strong>Editore:</strong> \${data.editore || 'N/A'}</p>
            <p><strong>ISBN:</strong> \${data.isbn || 'N/A'}</p>
            <p><strong>Abstract:</strong> \${data.abstract || 'N/A'}</p>
            <p><strong>Prezzo:</strong> \${data.prezzo || 'N/A'}</p>
            <p><strong>Tags:</strong> \${data.tag || 'N/A'}</p>
            </div>
        </div>
        \`;

        // Mostra il modal con Bootstrap
        const modal = new bootstrap.Modal(document.getElementById('bookModal'));
        modal.show();
    };
    <\/script> <footer class="mastfoot mt-auto" data-astro-cid-sigb2u7h> <div class="inner" data-astro-cid-sigb2u7h> <p data-astro-cid-sigb2u7h>Spazio Genesi ETS - CF 96602450585<br data-astro-cid-sigb2u7h>sede operativa <a href="https://maps.app.goo.gl/3JEsBLW5Xx8aE2mj9" data-astro-cid-sigb2u7h>Galleria Via Roma o da Via Vicentini</a> - L'Aquila (AQ)<br data-astro-cid-sigb2u7h><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="1d74737b725d6e6d7c6774727a7873786e7433726f7a" data-astro-cid-sigb2u7h>[email&#160;protected]</a> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d8aba8b9a2b1b7bfbdb6bdabb198a8bdbbf6b1ac" data-astro-cid-sigb2u7h>[email&#160;protected]</a></p> <p data-astro-cid-sigb2u7h>Lo spazio \xE8 gentilmente concesso da:
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1382 713" xmlns:xlink="http://www.w3.org/1999/xlink" height="40px" version="1.1" data-astro-cid-sigb2u7h> <g id="surface1" data-astro-cid-sigb2u7h> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 429.253906 184 L 451.253906 181 L 445.253906 221 L 341.253906 237 L 322.253906 371 L 299.253906 371 L 323.253906 217 L 426.753906 201.5 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 623.5 153.5 L 645.5 150.5 L 639.5 190.5 L 535.5 206.5 L 516.5 340.5 L 493.5 340.5 L 517.5 186.5 L 621 171 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 717 139 L 737 136 L 678 537 L 655 540 Z M 717 139 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 751 557 L 771 554 L 768 593 L 623 617 L 627 595 L 749 575 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 556 588 L 577.5 585.5 L 573 626 L 428.21875 647.5 L 432 626 L 554 607 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 360.5 619.5 L 382.140625 616.5 L 376.5 656.5 L 232.378906 679 L 234.5 656.5 L 358 639 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 394.621094 394.21875 L 414 390 L 410 432 L 310 447 L 286 601 L 265.019531 601 L 290.941406 429.5 L 392 412 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 230 218 L 253 214 L 247 253 L 142 269 L 121 409 L 98.941406 409 L 122 251 L 229 234 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 193 425 L 215 422 L 211 464 L 109.5 479.660156 L 76 706 L 32 713 L 36 689 L 55 687 L 92 460 L 192 445 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1002 92 L 1023 88 L 952 563 L 908 571 L 912 549 L 932.5 545.898438 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1084 97 L 1049.578125 102.5 L 1047 123 L 1084 116.78125 Z M 1084 97 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1213.019531 56 L 1233.179688 56 L 1229 92 L 1159.738281 102.5 L 1090.621094 540 L 1047 549 L 1051 528 L 1072 524 L 1140.089844 88 L 1210 76 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1256 282 L 1261 264 L 1229 269 L 1223 286 Z M 1256 282 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1236 446 L 1261 357.261719 L 1336 219 L 1361 215 Z M 1236 446 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1241 463.820313 L 1256.941406 463.820313 L 1248 512 L 1205 520 L 1207 503 L 1235.179688 499.820313 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1361 31.339844 L 1382 28 L 1311 199 L 1293.179688 199 Z M 1361 31.339844 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 588 362 L 609 359 L 605 400 L 506 414 L 481 568 L 460.378906 568 L 486.78125 398 L 586 381 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 71 206 L 219 180 L 214 220 L 108 237 L 84 404 L 182 390 L 179 430 L 77 447 L 43 673 L 0 679 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 271.5 173.5 L 416.5 148.5 L 411.5 188.5 L 308.5 204.5 L 282.5 373.5 L 382.5 357.5 L 376.5 398.5 L 276.5 413.5 L 248.5 599.5 L 350.5 584.5 L 343.5 624.5 L 198.5 647.5 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 467.621094 140.398438 L 612.621094 115.398438 L 607.621094 155.398438 L 504.621094 171.398438 L 478.621094 340.398438 L 578.621094 324.398438 L 572.621094 365.398438 L 472.621094 380.398438 L 444.621094 566.398438 L 546.621094 551.398438 L 539.621094 591.398438 L 394.621094 614.398438 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 663.5 109.5 L 706.5 102.5 L 639.5 537.5 L 740.5 521.5 L 734.5 561.5 L 590.5 583.5 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 948 63 L 991 56 L 917 531 L 874 537 Z M 948 63 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 1177.738281 491.910156 L 1185.660156 442.5 L 1228 436 L 1221 486 Z M 1177.738281 491.910156 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 1208 417 L 1256.941406 246.378906 L 1194 259 L 1273 16 L 1354 0 L 1274 194.539063 L 1333 186 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 1012 92 L 1018 51 L 1202 22 L 1196 62 L 1127 72 L 1058 509 L 1016 515 L 1084 79.339844 " data-astro-cid-sigb2u7h></path> </g> </svg> <a href="https://feelitshop.com/" data-astro-cid-sigb2u7h>Feel it!</a> </p> <p data-astro-cid-sigb2u7h>Realizzato da <a href="https://tangram.page/" data-astro-cid-sigb2u7h>Tangram.page</a> - <a href="/sg_privacy.html" data-astro-cid-sigb2u7h>Privacy Policy</a></p> </div> </footer> <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"><\/script><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"><\/script> <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"><\/script> </body> </html>`], [`<html lang="it" class="h-100" data-astro-cid-sigb2u7h> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="revisit-after" content="1"><meta http-equiv="Content-Security-Policy" content="
            default-src 'self';
            script-src 'self' 'unsafe-inline' 
            https://code.jquery.com
            https://cdn.jsdelivr.net
            https://cdn-cookieyes.com
            https://*.cookieyes.com
            https://*.shareaholic.com
            https://*.shareaholic.net
            https://*.openshareweb.com
            https://matomodocker.azurewebsites.net 
            https://*.tawk.to
            https://*.google.com
            https://*.viglink.com
            https://*.sovrn.com
            https://*.sovrn.co;
            script-src-elem 'self' 'unsafe-inline'
            https://code.jquery.com
            https://cdn.jsdelivr.net
            https://cdn-cookieyes.com
            https://*.cookieyes.com
            https://*.shareaholic.com
            https://*.shareaholic.net
            https://*.openshareweb.com
            https://matomodocker.azurewebsites.net 
            https://*.tawk.to
            https://*.google.com
            https://*.viglink.com
            https://*.sovrn.com
            https://*.sovrn.co;
            connect-src 'self' 
            https://matomodocker.azurewebsites.net 
            https://*.tawk.to
            https://*.cookieyes.com
            https://cdn-cookieyes.com
            https://cdn.jsdelivr.net 
            https://*.shareaholic.com
            https://*.shareaholic.net
            https://*.cloudfront.net
            https://*.viglink.com
            https://*.sovrn.com
            https://ep1.adtrafficquality.google
            https://*.google.com
            wss://*.tawk.to;
            img-src 'self' data: https: blob:;
            style-src 'self' 'unsafe-inline' 
            https://fonts.googleapis.com 
            https://cdn.jsdelivr.net
            https://*.tawk.to
            https://*.google.com;
            font-src 'self' 
            https://fonts.gstatic.com
            https://*.tawk.to
            data:;
            frame-src https://*.tawk.to https://*.google.com;
            object-src 'none';
            base-uri 'self';
        "><meta name="author" content="Tangram.page"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"><link href="/cover.css" rel="stylesheet"><!-- HTML Meta Tags --><title>`, '</title><meta name="description"', `><!-- Open Graph Meta Tags --><meta property="og:url" content="http://dutyfree.spaziogenesi.org"><meta property="og:type" content="website"><meta property="og:title" content="DUTY FREE - Edicola autoproduzioni autogestita"><meta property="og:description" content="A cura di studenti e studentesse Accademia di Belle Arti ABAQ L'Aquila"><meta property="og:image"`, `><meta property="og:image:width" content="789"><meta property="og:image:height" content="579"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="dutyfree.spaziogenesi.org"><meta property="twitter:url" content="http://dutyfree.spaziogenesi.org"><meta name="twitter:title" content="DUTY FREE - Edicola autoproduzioni autogestita"><meta name="twitter:description" content="A cura di studenti e studentesse Accademia di Belle Arti ABAQ L'Aquila"><meta name="twitter:image"`, `><!-- Meta Tags Generated via https://opengraph.dev --><link rel="shortcut icon" href="./img/favicon.ico?v=4" sizes="any"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="msapplication-starturl" content="/"><link href="/img/icon-76x76.png" rel="apple-touch-icon" sizes="76x76"><link href="/img/icon-120x120.png" rel="apple-touch-icon" sizes="120x120"><link href="/img/icon-152x152.png" rel="apple-touch-icon" sizes="152x152"><link rel="manifest" href="/img/manifest.json"><link rel="preload" as="image" href="/img/dutyfree.webp" fetchpriority="high"><!-- SERVICE WORKER GITHUB PER CACHE 
        <script>
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
              .then(registration => console.log('SW registrato con successo:', registration))
              .catch(error => console.log('Registrazione SW fallita:', error));
          });
        }
        <\/script>
         END SERVICE WORKER GITHUB PER CACHE --><!-- Matomo -->`, "<!-- End Matomo Code -->", '</head> <body data-astro-cid-sigb2u7h> <div class="cover-container d-flex  p-3 mx-auto flex-column" data-astro-cid-sigb2u7h> <header class="masthead mb-auto" data-astro-cid-sigb2u7h> <div class="inner" data-astro-cid-sigb2u7h> <a href="https://spaziogenesi.org/" data-astro-cid-sigb2u7h><h1 class="masthead-brand" data-astro-cid-sigb2u7h>Spazio Genesi</h1></a> <nav class="nav nav-masthead justify-content-center" data-astro-cid-sigb2u7h> <a class="nav-link active" href="/corner" data-astro-cid-sigb2u7h>Home</a> <a class="nav-link" href="https://spaziogenesi.org/chisiamo.html" data-astro-cid-sigb2u7h>Chi siamo</a> <a class="nav-link" href="https://spaziogenesi.org/biografie/" data-astro-cid-sigb2u7h>Biografie</a> <a class="nav-link" href="https://spaziogenesi.org/archivio/" data-astro-cid-sigb2u7h>Archivio</a> </nav> </div> </header> <main role="main" class="inner cover" data-astro-cid-sigb2u7h> <p data-astro-cid-sigb2u7h></p> <p data-astro-cid-sigb2u7h></p> <table id="sheetTable" class="table table-striped table-bordered" data-astro-cid-sigb2u7h> <thead data-astro-cid-sigb2u7h> <tr data-astro-cid-sigb2u7h> ', " </tr> </thead> <tbody data-astro-cid-sigb2u7h> ", " </tbody> </table> </main></div> <p data-astro-cid-sigb2u7h></p> <p data-astro-cid-sigb2u7h></p> ", ` <!-- Bootstrap JS --> <script src="/libs/bootstrap.bundle.min.js" defer><\/script> <!-- Simple-DataTables ESM --> <script type="module">
    import { DataTable } from '/libs/simple-datatables.mjs';

    const table = document.querySelector("#sheetTable");
    new DataTable(table, {
        perPage: 10,
        perPageSelect: [10,25,50,100],
        sortable: true,
        searchable: true,
        layout: {
        topStart: "search",
        topEnd: "perPage",
        bottomStart: "info",
        bottomEnd: "pagination"
        }
    });

    // Funzione per mostrare il modal con i dati del libro
    window.showBookModal = function(img) {
        const row = img.closest("tr");
        const data = {};
        row.querySelectorAll("td").forEach(td => {
        data[td.dataset.col] = td.innerText || td.querySelector("img")?.src;
        });

        // Costruisci HTML per il modal
        const modalBody = document.querySelector("#bookModalBody");
        modalBody.innerHTML = \\\`
        <div class="row">
            <div class="col-md-4"><img src="\\\${data.copertina}" alt="copertina" class="img-fluid"/></div>
            <div class="col-md-8">
            <h5>\\\${data.titolo}</h5>
            <p><strong>Autore:</strong> \\\${data.autore}</p>
            <p><strong>Editore:</strong> \\\${data.editore || 'N/A'}</p>
            <p><strong>ISBN:</strong> \\\${data.isbn || 'N/A'}</p>
            <p><strong>Abstract:</strong> \\\${data.abstract || 'N/A'}</p>
            <p><strong>Prezzo:</strong> \\\${data.prezzo || 'N/A'}</p>
            <p><strong>Tags:</strong> \\\${data.tag || 'N/A'}</p>
            </div>
        </div>
        \\\`;

        // Mostra il modal con Bootstrap
        const modal = new bootstrap.Modal(document.getElementById('bookModal'));
        modal.show();
    };
    <\/script> <footer class="mastfoot mt-auto" data-astro-cid-sigb2u7h> <div class="inner" data-astro-cid-sigb2u7h> <p data-astro-cid-sigb2u7h>Spazio Genesi ETS - CF 96602450585<br data-astro-cid-sigb2u7h>sede operativa <a href="https://maps.app.goo.gl/3JEsBLW5Xx8aE2mj9" data-astro-cid-sigb2u7h>Galleria Via Roma o da Via Vicentini</a> - L'Aquila (AQ)<br data-astro-cid-sigb2u7h><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="1d74737b725d6e6d7c6774727a7873786e7433726f7a" data-astro-cid-sigb2u7h>[email&#160;protected]</a> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d8aba8b9a2b1b7bfbdb6bdabb198a8bdbbf6b1ac" data-astro-cid-sigb2u7h>[email&#160;protected]</a></p> <p data-astro-cid-sigb2u7h>Lo spazio \xE8 gentilmente concesso da:
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1382 713" xmlns:xlink="http://www.w3.org/1999/xlink" height="40px" version="1.1" data-astro-cid-sigb2u7h> <g id="surface1" data-astro-cid-sigb2u7h> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 429.253906 184 L 451.253906 181 L 445.253906 221 L 341.253906 237 L 322.253906 371 L 299.253906 371 L 323.253906 217 L 426.753906 201.5 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 623.5 153.5 L 645.5 150.5 L 639.5 190.5 L 535.5 206.5 L 516.5 340.5 L 493.5 340.5 L 517.5 186.5 L 621 171 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 717 139 L 737 136 L 678 537 L 655 540 Z M 717 139 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 751 557 L 771 554 L 768 593 L 623 617 L 627 595 L 749 575 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 556 588 L 577.5 585.5 L 573 626 L 428.21875 647.5 L 432 626 L 554 607 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 360.5 619.5 L 382.140625 616.5 L 376.5 656.5 L 232.378906 679 L 234.5 656.5 L 358 639 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 394.621094 394.21875 L 414 390 L 410 432 L 310 447 L 286 601 L 265.019531 601 L 290.941406 429.5 L 392 412 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 230 218 L 253 214 L 247 253 L 142 269 L 121 409 L 98.941406 409 L 122 251 L 229 234 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 193 425 L 215 422 L 211 464 L 109.5 479.660156 L 76 706 L 32 713 L 36 689 L 55 687 L 92 460 L 192 445 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1002 92 L 1023 88 L 952 563 L 908 571 L 912 549 L 932.5 545.898438 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1084 97 L 1049.578125 102.5 L 1047 123 L 1084 116.78125 Z M 1084 97 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1213.019531 56 L 1233.179688 56 L 1229 92 L 1159.738281 102.5 L 1090.621094 540 L 1047 549 L 1051 528 L 1072 524 L 1140.089844 88 L 1210 76 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1256 282 L 1261 264 L 1229 269 L 1223 286 Z M 1256 282 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1236 446 L 1261 357.261719 L 1336 219 L 1361 215 Z M 1236 446 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1241 463.820313 L 1256.941406 463.820313 L 1248 512 L 1205 520 L 1207 503 L 1235.179688 499.820313 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 1361 31.339844 L 1382 28 L 1311 199 L 1293.179688 199 Z M 1361 31.339844 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.998718%,70.199585%,69.398499%);fill-opacity:1;" d="M 588 362 L 609 359 L 605 400 L 506 414 L 481 568 L 460.378906 568 L 486.78125 398 L 586 381 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 71 206 L 219 180 L 214 220 L 108 237 L 84 404 L 182 390 L 179 430 L 77 447 L 43 673 L 0 679 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 271.5 173.5 L 416.5 148.5 L 411.5 188.5 L 308.5 204.5 L 282.5 373.5 L 382.5 357.5 L 376.5 398.5 L 276.5 413.5 L 248.5 599.5 L 350.5 584.5 L 343.5 624.5 L 198.5 647.5 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 467.621094 140.398438 L 612.621094 115.398438 L 607.621094 155.398438 L 504.621094 171.398438 L 478.621094 340.398438 L 578.621094 324.398438 L 572.621094 365.398438 L 472.621094 380.398438 L 444.621094 566.398438 L 546.621094 551.398438 L 539.621094 591.398438 L 394.621094 614.398438 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 663.5 109.5 L 706.5 102.5 L 639.5 537.5 L 740.5 521.5 L 734.5 561.5 L 590.5 583.5 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 948 63 L 991 56 L 917 531 L 874 537 Z M 948 63 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 1177.738281 491.910156 L 1185.660156 442.5 L 1228 436 L 1221 486 Z M 1177.738281 491.910156 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 1208 417 L 1256.941406 246.378906 L 1194 259 L 1273 16 L 1354 0 L 1274 194.539063 L 1333 186 " data-astro-cid-sigb2u7h></path> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 1012 92 L 1018 51 L 1202 22 L 1196 62 L 1127 72 L 1058 509 L 1016 515 L 1084 79.339844 " data-astro-cid-sigb2u7h></path> </g> </svg> <a href="https://feelitshop.com/" data-astro-cid-sigb2u7h>Feel it!</a> </p> <p data-astro-cid-sigb2u7h>Realizzato da <a href="https://tangram.page/" data-astro-cid-sigb2u7h>Tangram.page</a> - <a href="/sg_privacy.html" data-astro-cid-sigb2u7h>Privacy Policy</a></p> </div> </footer> <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"><\/script><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"><\/script> <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"><\/script> </body> </html>`])), metaTitle, addAttribute(metaDesc, "content"), addAttribute(thumb, "content"), addAttribute(thumb, "content"), renderScript($$result, "C:/Users/masca/OneDrive/Documenti/HDEMIA/spazio_genesi/sito_dutyfree_github/src/pages/corner.astro?astro&type=script&index=0&lang.ts"), renderHead(), headers.map((h) => renderTemplate`<th${addAttribute(["ID", "stato", "nomefile"].includes(h) ? "d-none" : "", "class")} data-astro-cid-sigb2u7h>${h}</th>`), rows.map((r) => renderTemplate`<tr data-astro-cid-sigb2u7h> ${r.map((val, idx) => {
    const col = headers[idx];
    const hide = ["ID", "stato", "nomefile"].includes(col);
    return renderTemplate`<td${addAttribute(hide ? "d-none" : "", "class")}${addAttribute(col, "data-col")} data-astro-cid-sigb2u7h> ${col === "copertina" ? renderTemplate`<img${addAttribute(val, "src")} alt="copertina" style="max-width:80px; cursor:pointer;"${addAttribute(`showBookModal(this)`, "onclick")} data-astro-cid-sigb2u7h>` : val} </td>`;
  })} </tr>`), renderComponent($$result, "BookModal", $$BookModal, { "data-astro-cid-sigb2u7h": true }));
}, "C:/Users/masca/OneDrive/Documenti/HDEMIA/spazio_genesi/sito_dutyfree_github/src/pages/corner.astro", void 0);

const $$file = "C:/Users/masca/OneDrive/Documenti/HDEMIA/spazio_genesi/sito_dutyfree_github/src/pages/corner.astro";
const $$url = "/corner";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Corner,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
