'use strict';

import termsPromise from './data/terms';
import termMatcher from './lib/termMatcher';

var parliamentId;

// Field/result
const $value = $('.topic__parliament-id');
const $clearBtn = $('.topic__remove');
const $field = $('.topic__field');

termsPromise().then((nestedTerms) => {
  // Initialiase the select2 picker
  $field.select2({
    data: nestedTerms,
    placeholder: 'Choose or find a topic...',
    allowClear: true,
    width: 250,
    matcher: termMatcher
  });

  window.contentfulExtension.init((extension) => {
    var contentfulField = extension.field,
        contentfulWindow = extension.window,
        currentValue = contentfulField.getValue();

    // Update the height
    contentfulWindow.updateHeight();

    // Set current value
    if (currentValue !== '') {
      $field.val(currentValue).trigger('change');
      $value.text(currentValue);
    }

    // Event fire on select an option
    $field.on('select2:select', (e) => {
      $field.attr('disabled', true);
      // Update contentful field via Promise
      var parliamentId = e.params.data.id;
      contentfulField.setValue(parliamentId).then(() => {
        $value.text(parliamentId);
        $clearBtn.removeClass('hidden');
        $field.removeAttr('disabled');
      });
    });

    // Event fire on clear an option
    $field.on('select2:unselect', (e) => {
      $field.attr('disabled', true);
      // Update contentful field via Promise
      contentfulField.setValue('').then(() => {
        $value.text('(not set)');
        $clearBtn.addClass('hidden');
        $field.val(null).trigger('change');
        $field.removeAttr('disabled');
      });
    });

    // Update the height before the field is opened
    $field.on('select2:open', (e) => {
      // Always below
      $('.select2-dropdown--above').removeClass('select2-dropdown--above').addClass('select2-dropdown--below');
      contentfulWindow.updateHeight(350);
    });

    // Update the height when the field is closed
    $field.on('select2:close', (e) => {
      contentfulWindow.updateHeight();
    });

    // Allow clear btn to clear the option
    $clearBtn.on('click', (e) => {
      e.preventDefault();
      $field.trigger('select2:unselect');
    });

    // Enable field
    $field.removeAttr('disabled');
    $clearBtn.removeClass('hidden');
  });
});