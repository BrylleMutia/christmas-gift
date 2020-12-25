import React, { useState, useEffect } from "react";
import "./App.css";

import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function App() {
    const [name, setName] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);

    const handleLoginUser = (e) => {
        e.preventDefault();

        if (!name) {
            setError(true);
            return;
        }

        setIsOpen(false);
    };

    const handleSetName = (e) => {
        setName(e.target.value);
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <div>
            <div class="present">
                <div class="lid">
                    <span></span>
                </div>
                <div class="promo">
                    <p>Merry Christmas,</p>
                    <h2>{name}</h2>
                </div>
                <div class="box">
                    <span></span>
                    <span></span>
                </div>
            </div>

            <Dialog open={isOpen} onClose={handleLoginUser} aria-labelledby="form-dialog-title">
                <form onSubmit={handleLoginUser}>
                    <DialogTitle id="form-dialog-title">
                        <Typography>Your name?</Typography>
                    </DialogTitle>
                    {error && (
                        <Alert color="error" variant="standard">
                            Please enter your real name. Come on! XD
                        </Alert>
                    )}

                    <DialogContent>
                        <TextField
                            onChange={handleSetName}
                            name="name"
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            autoFocus
                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" onClick={handleLoginUser} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default App;
