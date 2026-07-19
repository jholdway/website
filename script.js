/* ---------- */
/* VARIABLES */
/* ---------- */

:root {

    --bg: #111;
    --surface: #222;
    --border: #444;
    --text: #f2f2f2;
    --accent: #8bd3ff;

}

/* ---------- */
/* GLOBAL */
/* ---------- */

*{

    box-sizing:border-box;

}

html{

    font-size:16px;

}

body{

    margin:0;

    background:var(--bg);

    color:var(--text);

    font-family:system-ui,
                sans-serif;

    line-height:1.7;

}

/* ---------- */

.skip-link{

    position:absolute;
    left:-9999px;

}

.skip-link:focus{

    left:1rem;
    top:1rem;

}

/* ---------- */

header{

    max-width:60rem;

    margin:auto;

    padding:2rem 1rem;

}

main{

    max-width:60rem;

    margin:auto;

    padding:1rem;

}

footer{

    max-width:60rem;

    margin:auto;

    padding:2rem 1rem;

    opacity:.6;

}

/* ---------- */

h1{

    font-size:clamp(2.5rem,6vw,5rem);

    margin-bottom:.25rem;

}

.tagline{

    opacity:.7;

}

/* ---------- */

.project-grid{

    display:grid;

    gap:1rem;

    grid-template-columns:
        repeat(auto-fit,minmax(16rem,1fr));

    margin-top:2rem;

}

/* ---------- */

.card{

    background:var(--surface);

    border:1px solid var(--border);

    padding:1.25rem;

    border-radius:8px;

}

.card:hover{

    border-color:var(--accent);

}

/* ---------- */

a{

    color:var(--accent);

}

a:hover{

    text-decoration:none;

}

a:focus-visible{

    outline:3px solid white;

    outline-offset:4px;

}

/* ---------- */

@media (min-width:900px){

    body{

        font-size:1.05rem;

    }

}