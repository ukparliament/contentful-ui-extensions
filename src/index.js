'use strict';

import termsPromise from './data/terms';

var parliamentId;

// Field/result
const $value = document.querySelectorAll('.topic__parliament-id')[0];
const $clearBtn = document.querySelectorAll('.topic__remove')[0];
const $field = document.querySelectorAll('.topic__field')[0];
const picker = new Choices($field, {
  classNames: {
    flippedState: 'is-not-flipped' // don't want it flipping upward
  }
});
picker.disable();

termsPromise().then((nestedTerms) => {
  // Set the choices
  picker.setChoices(nestedTerms, 'value', 'label', false);

  window.contentfulExtension.init((extension) => {
    var contentfulField = extension.field,
        contentfulWindow = extension.window,
        currentValue = contentfulField.getValue();

    // Update the height
    contentfulWindow.updateHeight();

    // Set current value
    if (currentValue !== '') {
      picker.setValueByChoice(currentValue);
      $value.innerHTML = currentValue;
    }

    // When the field value changes
    const onValueChange = function(value) {
      picker.disable();
      contentfulField.setValue(value).then(() => {
        if (value !== '') {
          $value.innerHTML = value;
          $clearBtn.classList.remove('hidden');
          picker.enable();
        } else {
          $value.innerHTML = '(not set)';
          $clearBtn.classList.add('hidden');
          picker.enable();
        }
      });
    }

    // Event fire on select an option
    $field.addEventListener('change', (e) => {
      onValueChange(e.detail.value);
    });

    // Update the height before the field is opened
    $field.addEventListener('showDropdown', (e) => {
      contentfulWindow.updateHeight(350);
    });

    // Update the height when the field is closed
    $field.addEventListener('hideDropdown', (e) => {
      contentfulWindow.updateHeight();
    });

    // Allow clear btn to clear the option
    $clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      picker.setValueByChoice('');
      onValueChange('');
    });

    // Enable field
    picker.enable();
    $clearBtn.classList.remove('hidden');
  });
});
