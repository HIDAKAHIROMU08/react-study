import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from "styled-components";

export const CreateUserData: React.FC = () => {
    //データのset
    const [userId , setUserId] = useState("");
    const [mail , setMail] = useState("");
    const [age , setAge] = useState("");
    const [gender , setGender] = useState("");
    const [job , setJob] = useState("");
    const [interests , setInterests] = useState<String[]>([]);

    //画面遷移navigete
    const navigate = useNavigate();

    //モーダルsetFlag
    const [open , setOpen] = useState(false);

    //モーダルflag
    const handleOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) }

    const newData = async() => {
        await axios.post('http://localhost:3001/users/', {
                "id": "",
                "user_id": userId,
                "mail": mail,
                "age": age,
                "gender": gender,
                "job": job,
                "interests": interests
        });
        navigate(-1);
    }
    return(
        <>
            <div>
                <p>
                    ユーザーID
                </p>
                <TextField
                    onChange={(e) => setUserId(e.target.value)}
                    value={userId}
                    variant="outlined"
                />

                <p>
                    メールアドレス
                </p>
                <TextField
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                    variant="outlined"
                />

                <p>
                    年齢
                </p>
                <TextField
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                    variant="outlined"
                />

                <p>
                    性別
                </p>
                <TextField
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                    variant="outlined"
                />

                <p>
                    職業
                </p>
                <TextField
                    onChange={(e) => setJob(e.target.value)}
                    value={job}
                    variant="outlined"
                />

                <p>
                    趣味
                </p>
                <TextField
                    onChange={(e) => setInterests([e.target.value])}
                    value={interests}
                    variant="outlined"
                />
                <Button
                    className="addition" variant="contained" color="primary" onClick={newData}
                >追加</Button>
            </div>
        </>
    );
    
}

