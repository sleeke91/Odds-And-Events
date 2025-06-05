// === State ===
/** Numbers added in starting bank */
let start = 0;


// === Components ===
/** Form that allows user to add numbers to a bank */
function bankForm() {
    const $form = document.createElement("form");
    $form.innerHTML = `
      <label>
        Add a number to the bank:
        <input name="addedNum" type="number" min="1" value = "${start}"/>
      </label>
      <button>Add Number</button>
    `;
}