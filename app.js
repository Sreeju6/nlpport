(function () {
  const D = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const star = (n) => (n == null ? `<span class="stars none">Marks pending</span>` : `<span class="stars">★ ${n} ${n === 1 ? "star" : "stars"} earned</span>`);

  /* header / hero / footer */
  $("brandName").textContent = D.owner.name;
  $("heroTitle").firstChild.textContent = D.owner.title;
  $("heroTagline").textContent = D.owner.tagline;
  $("footName").textContent = `© ${new Date().getFullYear()} ${D.owner.name}`;
  $("footGit").href = D.owner.github;

  /* stats – computed from data */
  const allStars = [...D.questions, ...D.practice].reduce((a, x) => a + (x.stars || 0), 0);
  const topics = new Set([...D.questions, ...D.practice].map((x) => x.topic));
  const stats = [
    { icon: "◈", n: D.questions.length, l: "Questions Answered" },
    { icon: "✦", n: allStars, l: "Stars Earned", hl: true },
    { icon: "⌘", n: topics.size, l: "Topics Explored" },
    { icon: "↗", n: D.practice.length, l: "Activities Logged" },
  ];
  $("stats").innerHTML = stats
    .map((s) => `<div class="stat rv${s.hl ? " hl" : ""}"><div class="top"><span>${s.icon}</span><span class="tag">TRACKED</span></div><div class="num" data-n="${s.n}">00</div><div class="lbl">${s.l}</div></div>`)
    .join("");

  /* Q&A */
  $("qCount").textContent = `${pad(D.questions.length)} entries`;
  $("qList").innerHTML = D.questions
    .map((q) => {
      const ans = Array.isArray(q.answer)
        ? `<div class="pairs">${q.answer.map((a) => `<div class="pair"><span class="te">${esc(a.te)}</span><small>(${esc(a.roman)})</small><span>– ${esc(a.en)}</span></div>`).join("")}</div>`
        : `<p>${esc(q.answer)}</p>`;
      const proof = q.proof
        ? `<button class="proof" data-src="${esc(q.proof.src)}" data-cap="${esc(q.proof.caption)}" aria-label="Open proof image"><img src="${esc(q.proof.src)}" alt="${esc(q.proof.caption)}" loading="lazy" /><span>Tap to enlarge</span></button>`
        : "";
      return `<article class="qcard rv">
        <div class="qhead"><span class="qid">${esc(q.id)}</span><span class="topic">${esc(q.topic)}</span></div>
        <h3 class="question">${esc(q.question)}</h3>
        <div class="answer"><span class="k">Answer</span>${ans}</div>
        <div class="qfoot">${proof}${star(q.stars)}</div>
      </article>`;
    })
    .join("");

  /* practice */
  $("pCount").textContent = `${pad(D.practice.length)} activities`;
  const rubric = (r) => {
    const sum = r.scores.reduce((a, s) => a + s[1], 0);
    const max = r.scores.length * 5;
    return `<div class="box"><h4>${esc(r.label)}</h4>${r.scores
      .map((s) => `<div class="rub-row"><span>${esc(s[0])}</span><b>${s[1]}/5</b><div class="bar"><i style="width:${(s[1] / 5) * 100}%"></i></div></div>`)
      .join("")}<div class="total"><b>${sum}/${max}</b><small>${((sum / max) * 100).toFixed(2)}%</small></div></div>`;
  };
  const poem = (lines, te) => `<p class="poem${te ? " te" : ""}">${lines.map(esc).join("<br>")}</p>`;

  $("pList").innerHTML = D.practice
    .map((p) => {
      const head = `<div class="qhead"><span class="qid">${esc(p.id)}</span><span class="topic">${esc(p.topic)}</span></div>`;
      if (p.type === "coding") {
        return `<article class="pcard rv">${head}<h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
          <div class="qfoot"><a class="btn" href="${esc(p.link.url)}" target="_blank" rel="noopener">${esc(p.link.label)} ↗</a>${star(p.stars)}</div></article>`;
      }
      if (p.type === "translation") {
        return `<article class="pcard rv">${head}<div class="qfoot"><h3>${esc(p.title)}</h3>${star(p.stars)}</div>
          <div class="grid2">
            <div class="box"><h4>Original Telugu</h4>${poem(p.original.lines, true)}</div>
            <div class="box"><h4>Meaning</h4><p>${esc(p.original.meaning)}</p></div>
          </div>
          <div class="box"><h4>Original source</h4><div class="kv">${p.original.source.map((s) => `<div><span>${esc(s[0])}</span><b>${esc(s[1])}</b></div>`).join("")}</div></div>
          <div class="grid2">${p.translations
            .map((t) => `<div class="box"><h4>${esc(t.label)}</h4>${poem(t.lines)}${t.note ? `<p class="note">${esc(t.note)}</p>` : ""}</div>`)
            .join("")}</div>
          <div><p class="eyebrow">Difference between both translations</p>
            <div class="chips">${p.similarity.map((s) => `<div class="chip"><span>${esc(s[0])}</span><b class="${s[1] === "Not calculated" ? "na" : ""}">${esc(s[1])}</b></div>`).join("")}</div></div>
          <div class="box diff"><h4>Analysis</h4>${p.difference.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
          <div><p class="eyebrow">Rubrics</p><p class="note" style="margin:0 0 12px">${esc(p.rubricNote)}</p>
            <div class="grid2">${rubric(p.rubrics.llm)}${rubric(p.rubrics.human)}</div></div>
        </article>`;
      }
      return "";
    })
    .join("");

  /* projects */
  $("projList").innerHTML = D.projects.length
    ? D.projects.map((p) => `<article class="pcard rv"><h3>${esc(p.title)}</h3><p>${esc(p.summary || "")}</p></article>`).join("")
    : `<div class="soon rv"><b>Projects are coming soon</b>This section is ready and waiting for the next update.</div>`;

  /* lightbox */
  const lb = $("lightbox");
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".proof");
    if (b) { $("lbImg").src = b.dataset.src; $("lbImg").alt = b.dataset.cap; $("lbCap").textContent = b.dataset.cap; lb.showModal(); }
    else if (e.target === lb) lb.close();
  });

  /* count-up + reveal */
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const countUp = (el) => {
    const n = +el.dataset.n;
    if (reduce) { el.textContent = pad(n); return; }
    const t0 = performance.now();
    (function f(t) {
      const k = Math.min(1, (t - t0) / 900);
      el.textContent = pad(Math.round(n * (1 - Math.pow(1 - k, 3))));
      if (k < 1) requestAnimationFrame(f);
    })(t0);
  };
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    const num = e.target.querySelector(".num");
    if (num) countUp(num);
    io.unobserve(e.target);
  }), { threshold: 0.12 });
  document.querySelectorAll(".rv").forEach((el) => io.observe(el));
})();
