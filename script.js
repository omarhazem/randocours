function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const enigmeId = getQueryParam("id");
const enigmeIndex = enigmes.findIndex(e => e.id === enigmeId);
const activeEnigme = enigmes[enigmeIndex >= 0 ? enigmeIndex : 0];

let currentQuestionIndex = 0;
let reponsesUtilisateur = [];

function afficherQuestion() {
  if (currentQuestionIndex >= activeEnigme.questions.length) {
    afficherSynthese();
    return;
  }

  document.getElementById("questionText").classList.remove("hidden");
  document.getElementById("indicationText").classList.remove("hidden");

  const q = activeEnigme.questions[currentQuestionIndex];
  document.getElementById("enigmeTitle").textContent = activeEnigme.name || "Énigme";
  document.getElementById("indicationText").textContent = "Choisis une réponse puis clique sur \"Suivant\".";

  afficherQuestionEtReponses(q);
  mettreAJourMenuQuestions();

  const btnPrev = document.getElementById("btnPrev");
  btnPrev.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";

  document.getElementById("syntheseSection").classList.add("hidden");
  document.getElementById("qcmForm").classList.remove("hidden");
}

function afficherQuestionEtReponses(data) {
  const questionElement = document.getElementById("questionText");
  const optionsContainer = document.getElementById("optionsContainer");

  questionElement.innerHTML = data.question;
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([questionElement]);
  }

  optionsContainer.innerHTML = "";
  data.answers.forEach((texte, i) => {
    const label = document.createElement("label");
    label.className = "option-card relative cursor-pointer";
    label.innerHTML = `
      <input type="radio" name="q1" value="${i}" class="hidden" />
      <div class="p-4 pt-6 border-2 rounded-xl transition hover:shadow-lg text-center font-medium text-sm sm:text-base whitespace-normal break-words leading-relaxed relative">
        <div class="absolute top-2 left-2 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
          ${i}
        </div>
        ${texte}
      </div>
    `;
    optionsContainer.appendChild(label);
  });

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([optionsContainer]);
  }
}

function mettreAJourMenuQuestions() {
  const menu = document.getElementById("sidebarMenu");
  const questions = activeEnigme.questions;
  const toutesRepondues = questions.every((_, i) => typeof reponsesUtilisateur[i] !== "undefined");

  menu.innerHTML = "";

  const creerMenuItem = (index, labelText, isActive) => {
    const li = document.createElement("li");
    li.className = "flex items-center space-x-2 cursor-pointer" + (isActive ? "" : " opacity-50");

    const badge = document.createElement("div");
    badge.className = "w-8 h-8 rounded-full text-center leading-8 font-bold " +
      (isActive ? "bg-indigo-500 text-white" : "bg-gray-700 text-white");
    badge.textContent = index + 1;

    const label = document.createElement("span");
    label.className = "font-medium hidden md:inline";
    label.textContent = labelText;

    li.appendChild(badge);
    li.appendChild(label);
    return li;
  };

  // Ajouter les questions
  questions.forEach((q, i) => {
    const isActive = i === currentQuestionIndex;
    const li = creerMenuItem(i, q.name || `Question ${i + 1}`, isActive);
    li.addEventListener("click", () => {
      currentQuestionIndex = i;
      afficherQuestion();
    });
    menu.appendChild(li);
  });

  // Ajouter la synthèse si toutes les questions sont répondues
  const indexSynthese = questions.length;
  const isSyntheseActive = currentQuestionIndex === indexSynthese;
  const liSynthese = creerMenuItem(indexSynthese, activeEnigme.final?.name || "Synthèse", isSyntheseActive);

  if (toutesRepondues) {
    liSynthese.addEventListener("click", () => {
      currentQuestionIndex = indexSynthese;
      afficherSynthese();
      mettreAJourMenuQuestions();
    });
  }

  menu.appendChild(liSynthese);
}


function afficherSynthese() {
  // 🔥 IMPORTANT : on force l'index sur la dernière étape avant de mettre à jour le menu
  currentQuestionIndex = activeEnigme.questions.length;
  mettreAJourMenuQuestions();

  // Masquer les éléments de la question
  document.getElementById("questionText").classList.add("hidden");
  document.getElementById("indicationText").classList.add("hidden");
  document.getElementById("qcmForm").classList.add("hidden");

  // Afficher la section synthèse
  document.getElementById("syntheseSection").classList.remove("hidden");

  // Remplir le titre et la question de synthèse
  const syntheseTitle = document.getElementById("syntheseTitle");
  const syntheseQuestion = document.getElementById("syntheseQuestion");
  const resumeTable = document.getElementById("resumeTableBody");
  const codeInput = document.getElementById("codeInput");
  const errorCode = document.getElementById("codeError");

  syntheseTitle.textContent = activeEnigme.final?.name || "Synthèse finale";
  syntheseQuestion.innerHTML = activeEnigme.final?.question || "";
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([syntheseQuestion]);
  }

  // Table des réponses
  resumeTable.innerHTML = "";
  activeEnigme.questions.forEach((question, i) => {
    if (typeof reponsesUtilisateur[i] === "undefined") return;
    const row = document.createElement("tr");
    row.className = "border-b";
    row.innerHTML = `
      <td class="py-2 px-4 font-semibold text-gray-700 text-center">${i + 1}</td>
      <td class="py-2 px-4 text-gray-700">${question.name || "Question " + (i + 1)}</td>
      <td class="py-2 px-4 text-indigo-600 font-bold text-center">${reponsesUtilisateur[i]}</td>
    `;
    resumeTable.appendChild(row);
  });

  // Réinitialiser champ + erreur
  codeInput.value = "";
  errorCode.classList.add("hidden");
}

function afficherPopupSuccess(message, mapLink = null, locationText = null) {
  const popup = document.getElementById("successPopup");
  const msg = document.getElementById("popupMessage");
  const action = document.getElementById("popupAction");

  msg.textContent = message;
  action.innerHTML = "";

  if (mapLink) {
    const btn = document.createElement("a");
    btn.href = mapLink;
    btn.target = "_blank";
    btn.textContent = "🗺️ Voir sur Google Maps";
    btn.className = "bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded shadow inline-block";
    action.appendChild(btn);
  } else if (locationText) {
    const p = document.createElement("p");
    p.textContent = "📍 Destination : " + locationText;
    p.className = "text-sm text-gray-600";
    action.appendChild(p);
  }

  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("successPopup").classList.add("hidden");
}


document.addEventListener("DOMContentLoaded", () => {
  afficherQuestion();

  document.getElementById("btnPrev").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      afficherQuestion();
    }
  });

  document.getElementById("qcmForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const selected = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById("result");

    if (!selected) {
      result.textContent = "Veuillez sélectionner une réponse.";
      result.classList.remove("hidden");
      return;
    }

    result.classList.add("hidden");
    reponsesUtilisateur[currentQuestionIndex] = parseInt(selected.value);
    currentQuestionIndex++;
    afficherQuestion();
  });

  document.getElementById("checkCodeBtn").addEventListener("click", () => {
    const code = document.getElementById("codeInput").value.trim();
    const correctCode = activeEnigme.final?.code;
    const link = activeEnigme.final?.mapLink;
    const errorCode = document.getElementById("codeError");

    if (code === correctCode) {
      const message = "Félicitations ! Tu as résolu cette énigme.";
      const mapLink = activeEnigme.final?.mapLink || null;
      const locationText = activeEnigme.final?.locationText || null;
      afficherPopupSuccess(message, mapLink, locationText);
    } else {
      errorCode.classList.remove("hidden");
    }
  });

  document.getElementById("restartBtn").addEventListener("click", () => {
    currentQuestionIndex = 0;
    reponsesUtilisateur = [];
    afficherQuestion();
  });
/*
  document.getElementById("codeInput").addEventListener("input", function (e) {
    const input = e.target;
    const validDigits = reponsesUtilisateur.map(r => String(r));
    input.value = input.value
      .split('')
      .filter(char => validDigits.includes(char))
      .join('');
  });
*/
});


