import React, { useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
const Registered = () => {
  const [name, setname] = useState("loading...");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("loading..@gmail.com");
  const [dialogUpdate, setDialogUpdate] = useState(false);
  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    setDialogUpdate(true);
  };
  const handleClose = () => {
    setDialogUpdate(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formJson = new FormData(event.currentTarget);
    const formdata = Object.fromEntries(formJson.entries());
    const email = formdata.email;
    const password = formdata.password;
    const firstName = formdata.firstName;
    const lastName = formdata.lastName;
    if (email && password && firstName && lastName) {
      localStorage.setItem(
        "RegisteredUser",
        JSON.stringify({
          email,
          password,

          firstName,
          lastName,
        })
      );
      navigate("/user");
    }
    handleClose();
    setFlag(!flag);
  };
  useEffect(() => {
    function getInfo() {
      const name = JSON.parse(localStorage.getItem("RegisteredUser")).firstName;
      const lastname = JSON.parse(
        localStorage.getItem("RegisteredUser")
      ).lastName;
      setname(name);
      setLastName(lastname);
      const email = JSON.parse(localStorage.getItem("RegisteredUser")).email;
      setEmail(email);
      //   const password = JSON.parse(
      //     localStorage.getItem("RegisteredUser")
      //   ).password;
    }
    getInfo();
  }, [flag]);
  return (
    <>
      <div className="h-180 w-8/12 mx-auto rounded-md relative top-6 bg-[#393961]">
        <div className=" flex justify-between w-10/12 text-white  relative top-10 left-15">
          <h1 className="text-6xl">Hello {name}</h1>
          <h3>
            {" "}
            <EmailIcon /> {email}
          </h3>
          <Button variant="contained" onClick={handleUpdate} className="">
            Update your profile
          </Button>
        </div>

        <div className=" relative top-70 h-90 w-11/12 mx-auto overflow-clip rounded-md">
          <img
            src="https://images.unsplash.com/photo-1581610186406-5f6e9f9edbc1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwbmlnaHR8ZW58MHx8MHx8fDA%3D"
            className="rounded-md"
          />
        </div>
      </div>
      {dialogUpdate ? (
        <div>
          <Dialog open={dialogUpdate} onClose={handleClose}>
            <DialogTitle>Update your credentials</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit}>
                <div className="flex gap-2 my-2 justify-around">
                  <TextField
                    name="firstName"
                    id="firstName"
                    placeholder={name}
                    variant="filled"
                  />
                  <TextField
                    name="lastName"
                    id="lastName"
                    placeholder={lastName}
                    variant="filled"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <TextField
                    name="email"
                    id="email"
                    placeholder={email}
                    variant="filled"
                  />
                  <TextField
                    name="password"
                    id="password"
                    placeholder="your new password"
                    variant="filled"
                  />
                </div>

                <div className="flex justify-around w-10 relative left-60">
                  {" "}
                  <Button>Cancel</Button>
                  <Button type="submit" color="error" variant="contained">
                    Update
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      ) : null}
    </>
  );
};

export default Registered;
