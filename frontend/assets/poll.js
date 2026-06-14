(function () {
  // Replace with your Formspree form ID for poll votes (can differ from waitlist form).
  var FORMSPREE_POLL_ID = 'YOUR_POLL_FORM_ID';

  var STORAGE_KEY = 'aptova_poll_vote';

  var OPTIONS = [
    { id: 'no_idea', label: 'Not sure which idea to pick', pct: 36 },
    { id: 'no_skills', label: 'Not sure if I have the right skills', pct: 24 },
    { id: 'no_money', label: 'Lack of startup capital / budget', pct: 18 },
    { id: 'no_time', label: 'Not enough time (busy with studies)', pct: 14 },
    { id: 'fear', label: 'Fear of failure or self-doubt', pct: 8 }
  ];

  var card = document.getElementById('pollCard');
  if (!card) return;

  var pollActive = card.querySelector('.poll-active');
  var pollResults = card.querySelector('.poll-results');
  var optionsEl = card.querySelector('.poll-options');
  var submitBtn = card.querySelector('.poll-submit');
  var resultsRows = card.querySelector('.poll-results-rows');
  var selectedId = null;

  function buildPollUI() {
    OPTIONS.forEach(function (opt) {
      var label = document.createElement('label');
      label.className = 'poll-option';
      label.innerHTML =
        '<input type="radio" name="poll_choice" value="' +
        opt.id +
        '">' +
        '<span class="poll-option-text">' +
        opt.label +
        '</span>';
      label.querySelector('input').addEventListener('change', function () {
        selectedId = opt.id;
        submitBtn.disabled = false;
        card.querySelectorAll('.poll-option').forEach(function (el) {
          el.classList.remove('is-selected');
        });
        label.classList.add('is-selected');
      });
      optionsEl.appendChild(label);
    });
    submitBtn.addEventListener('click', onSubmit);
  }

  function renderResults(userChoiceId) {
    resultsRows.innerHTML = '';
    OPTIONS.forEach(function (opt) {
      var isYours = opt.id === userChoiceId;
      var row = document.createElement('div');
      row.className = 'survey-row' + (isYours ? ' is-yours' : '');
      row.innerHTML =
        '<div class="survey-top">' +
        '<span class="survey-label">' +
        opt.label +
        (isYours ? ' <span class="poll-yours">Your answer</span>' : '') +
        '</span>' +
        '<span class="survey-pct">' +
        opt.pct +
        '%</span>' +
        '</div>' +
        '<div class="survey-track">' +
        '<div class="survey-fill" style="width:0" data-pct="' +
        opt.pct +
        '"></div>' +
        '</div>';
      resultsRows.appendChild(row);
    });
    requestAnimationFrame(function () {
      resultsRows.querySelectorAll('.survey-fill').forEach(function (fill) {
        fill.style.transition = 'width .6s ease';
        fill.style.width = fill.getAttribute('data-pct') + '%';
      });
    });
  }

  function showResults(userChoiceId) {
    renderResults(userChoiceId);
    pollActive.hidden = true;
    pollResults.hidden = false;
  }

  function saveVoteLocally(choiceId) {
    try {
      localStorage.setItem(STORAGE_KEY, choiceId);
    } catch (e) {}
  }

  function loadVoteLocally() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function sendToFormspree(choiceId) {
    if (!FORMSPREE_POLL_ID || FORMSPREE_POLL_ID === 'YOUR_POLL_FORM_ID') return;
    fetch('https://formspree.io/f/' + FORMSPREE_POLL_ID, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        poll_choice: choiceId,
        page: 'index',
        timestamp: new Date().toISOString()
      })
    }).catch(function () {});
  }

  function onSubmit() {
    if (!selectedId) return;
    saveVoteLocally(selectedId);
    sendToFormspree(selectedId);
    showResults(selectedId);
  }

  buildPollUI();

  var saved = loadVoteLocally();
  if (saved && OPTIONS.some(function (o) { return o.id === saved; })) {
    showResults(saved);
  }
})();
