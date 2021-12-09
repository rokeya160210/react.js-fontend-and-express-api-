import React from "react";

function Creation() {
    return (
        <div>
            <br />
            <div class="container">
                <form action="http://localhost:8080/create" method="post">
                    <div style={{ width: '30%' }} class="form-group">
                        <input type="text" class="form-control" name="BookID" placeholder="Book ID" />
                    </div>
                    <br />
                    <div style={{ width: '30%' }} class="form-group">
                        <input type="text" class="form-control" name="Title" placeholder="Book Title" />
                    </div>
                    <br />
                    <div style={{ width: '30%' }} class="form-group">
                        <input type="text" class="form-control" name="Author" placeholder="Book Author" />
                    </div>
                    <br />
                    <div style={{ width: '30%' }}>
                        <button class="btn btn-success" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Creation