<template>
    <h2>float over your input fields</h2>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">
            Checked checkbox
        </label>
    </div>
    <h2>labels will automatically adjust to their floated position.</h2>
    <form class="form-floating">
        <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com"
            value="test@example.com">
        <label for="floatingInputValue">Input with value</label>
    </form>
    <h2>orm validation styles also work as expected</h2>
    <form class="form-floating">
        <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com"
            value="test@example.com">
        <label for="floatingInputInvalid">Invalid input</label>
    </form>
    <h2>Textareas</h2>
    <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Comments</label>
    </div>
    <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
            style="height: 100px"></textarea>
        <label for="floatingTextarea2">Comments</label>
    </div>
    <h2>Selects</h2>
    <div class="form-floating">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Works with selects</label>
    </div>
    <h2>Layout</h2>
    <h3>When working with the Bootstrap grid system, be sure to place form elements within column classes</h3>
    <div class="row g-2">
        <div class="col-md">
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com"
                    value="mdo@example.com">
                <label for="floatingInputGrid">Email address</label>
            </div>
        </div>
        <div class="col-md">
            <div class="form-floating">
                <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label for="floatingSelectGrid">Works with selects</label>
            </div>
        </div>
    </div>
</template>