// ============================================================
//  HOT BEANS WEB — MAIN JAVASCRIPT
// ============================================================

// ---- Search ----
function doSearch() {
    var term = document.getElementById('search-input').value.trim();
    if (term) {
        alert('You searched for: ' + term);
    }
}

function searchKeyPress(event) {
    if (event.key === 'Enter') {
        doSearch();
    }
}

// ---- Form Submission ----
function submitApplication() {
    // Clear all inputs, selects and textareas inside the form div
    var form = document.getElementById('application-form');
    if (form) {
        form.querySelectorAll('input, select, textarea').forEach(function(el) {
            el.value = '';
        });
    }
    // Show the success message
    var msg = document.getElementById('submit-message');
    if (msg) {
        msg.style.display = 'block';
    }
}
