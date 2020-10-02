<div id="task-list" class="card" data-task-id=${id}>
<div class="row">
    <div class="col">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
    </div>
    <div class="col">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
    </div>
</div>
<div class="row">
    <div class="col">
        <div class="status-box alert ${status === 'TODO' ? 'alert-warning' : 'alert-success'}">
            <a><strong>Status:</strong>&nbsp;${status}</a>
        </div>
        <button type="button" class="btn-mark-as-done done-button btn btn-outline-secondary btn-sm">Edit</button>
        <button type="button" class="btn-mark-as-done done-button btn btn-outline-success btn-sm ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
        <button type="button" class="delete-button btn btn-outline-danger btn-sm">Delete</button>
    </div>
</div>
</div>