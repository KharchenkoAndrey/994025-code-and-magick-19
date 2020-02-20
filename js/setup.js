'use strict';

var getRandom = function (arr) {
  var random = Math.round(Math.random() * (arr.length - 1));
  return arr[random];
};

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
// var userName = document.querySelector('input[name=username]');
var hidenInput = document.querySelectorAll('input[type=hidden]');

var userDialog = document.querySelector('.setup');
var openUserDialog = document.querySelector('.setup-open');
var closeUserDialog = userDialog.querySelector('.setup-close');

var onWizardCoatClick = function () {
  var coatColor = wizardCoat.style.fill = getRandom(COAT_COLORS);
  hidenInput[0].value = coatColor;
  return coatColor;
};

var onWizardEyesClick = function () {
  var eyesColor = wizardEyes.style.fill = getRandom(EYES_COLORS);
  hidenInput[1].value = eyesColor;
};

var onWizardFireballClick = function () {
  var fireballColor = wizardFireball.style.backgroundColor = getRandom(FIREBALL_COLORS);
  hidenInput[2].value = fireballColor;
  return fireballColor;
};

wizardFireball.addEventListener('click', function () {
  onWizardFireballClick();
});

wizardEyes.addEventListener('click', function () {
  onWizardEyesClick();
});

wizardCoat.addEventListener('click', function () {
  onWizardCoatClick();
});

var onCloseUserDialogPress = function (evt) {
  if (evt.key === ESC_KEY) {
    onCloseUserDialogClick();
  }
};

var onOpenUserDialogClick = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.key === ESC_KEY) {
      onCloseUserDialogClick();
    }
  });
};

var onCloseUserDialogClick = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onCloseUserDialogPress);
};

openUserDialog.addEventListener('click', function () {
  onOpenUserDialogClick();
});

openUserDialog.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    onOpenUserDialogClick();
  }
});

closeUserDialog.addEventListener('click', function () {
  onCloseUserDialogClick();
});

closeUserDialog.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    onCloseUserDialogClick();
  }
});

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var wizards = [
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
    coatColor: getRandom(COAT_COLORS),
    eyesColor: getRandom(EYES_COLORS)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
    coatColor: getRandom(COAT_COLORS),
    eyesColor: getRandom(EYES_COLORS)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
    coatColor: getRandom(COAT_COLORS),
    eyesColor: getRandom(EYES_COLORS)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
    coatColor: getRandom(COAT_COLORS),
    eyesColor: getRandom(EYES_COLORS)
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

